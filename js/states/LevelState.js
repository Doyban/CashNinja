var FruitNinja = FruitNinja || {};

FruitNinja.LevelState = function () {
  "use strict";
  Phaser.State.call(this); // Extend Phaser.State class.

  // Setting constructors of prefabs.
  this.prefab_classes = {
    // Map different types to the constructors of the appropriate classes.
    "background": FruitNinja.Prefab.prototype.constructor,
    "score": FruitNinja.Score.prototype.constructor,
    "lives": FruitNinja.Lives.prototype.constructor,
    "fruit_spawner": FruitNinja.FruitSpawner.prototype.constructor,
    "special_fruit_spawner": FruitNinja.SpecialFruitSpawner.prototype.constructor,
    "bomb_spawner": FruitNinja.BombSpawner.prototype.constructor
    // "cuttable": FruitNinja.Cuttable.prototype.constructor,
    // "fruit": FruitNinja.Fruit.prototype.constructor,
    // "bomb": FruitNinja.Bomb.prototype.constructor,
    // "special_fruit": FruitNinja.SpecialFruit.prototype.constructor
  };
};

// FruitNinja.LevelState.prototype = Object.create(Phaser.State.prototype);
FruitNinja.LevelState.prototype = Object.create(FruitNinja.JSONLevelState.prototype);
FruitNinja.LevelState.prototype.constructor = FruitNinja.LevelState;

FruitNinja.LevelState.prototype.init = function (level_data) {
  "use strict";
  // this.level_data = level_data; // Save level data.

  // Set up scale.
  // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  // this.scale.pageAlignHorizontally = true;
  // this.scale.pageAlignVertically = true;
  FruitNinja.JSONLevelState.prototype.init.call(this, level_data);

  // Set up physics system.
  this.game.physics.startSystem(Phaser.Physics.ARCADE);
  this.game.physics.arcade.gravity.y = 1000;

  this.MINIMUM_SWIPE_LENGTH = 50; // Minimum swipe length in pixels.
  this.CUT_STYLE = {line_width: 5, color: 0xE82C0C, alpha: 1}; // Cut style.

  this.score = 0; // Initialize score with default value of 0.
  this.cut_multiplier = 1; // Initialize cut multiplier as 1.
};

// Create games prefabs.
FruitNinja.LevelState.prototype.create = function () {
  "use strict";
  // var group_name, prefab_name;
  //
  // // Create prefabs groups.
  // this.groups = {};
  // this.level_data.groups.forEach(function (group_name) {
  //   this.groups[group_name] = this.game.add.group();
  // }, this);
  //
  // // Create prefabs.
  // this.prefabs = {};
  // for (prefab_name in this.level_data.prefabs) {
  //   if (this.level_data.prefabs.hasOwnProperty(prefab_name)) {
  //     this.create_prefab(prefab_name, this.level_data.prefabs[prefab_name]);
  //   }
  // }

  FruitNinja.JSONLevelState.prototype.create.call(this); // Call JSONLevelState class.
  // Add swipes.
  this.game.input.onDown.add(this.start_swipe, this);
  this.game.input.onUp.add(this.end_swipe, this);

  this.upgrades = this.game.plugins.add(FruitNinja.Upgrades, this); // Initialize upgrades plugin.
  this.upgrades.apply_upgrades(this.game.current_upgrades); // Apply upgrades.
};

// FruitNinja.LevelState.prototype.create_prefab = function (prefab_name, prefab_data) {
//   "use strict";
//   var prefab_position, prefab;
//   // Create object according to its type.
//   if (this.prefab_classes.hasOwnProperty(prefab_data.type)) {
//     // For percentage value of position.
//     if (prefab_data.position.x > 0 && prefab_data.position.x <= 1) {
//       prefab_position = new Phaser.Point(prefab_data.position.x * this.game.world.width, prefab_data.position.y * this.game.world.height); // Set position relatively.
//     }
//     // For absolute (pixels) value of position.
//     else {
//       prefab_position = prefab_data.position; // Set position absolutely, it will be the position of prefabs data.
//     }
//     prefab = new this.prefab_classes[prefab_data.type](this, prefab_name, prefab_position, prefab_data.properties); // Create new prefabs, all properties should be define in JSON file.
//   }
// };

// Start swipe.
FruitNinja.LevelState.prototype.start_swipe = function (pointer) {
  "use strict";
  this.start_swipe_point = new Phaser.Point(pointer.x, pointer.y); // Start swipe point is simply x & y of pointer.
};

// End swipe.
FruitNinja.LevelState.prototype.end_swipe = function (pointer) {
  "use strict";
  var swipe_length, cut;

  this.end_swipe_point = new Phaser.Point(pointer.x, pointer.y); // Get coordinates of swipe end point.
  swipe_length = Phaser.Point.distance(this.end_swipe_point, this.start_swipe_point); // Calculate length between end swipe point and start swipe point.
  // Detect only swipes, which length is greater or equal minimum swipe length.
  if (swipe_length >= this.MINIMUM_SWIPE_LENGTH) {
    cut = new FruitNinja.Cut(this, "cut", {x: 0, y: 0}, {group: "cuts", start: this.start_swipe_point, end: this.end_swipe_point, duration: 0.3, style: Object.create(this.CUT_STYLE)});

    this.swipe = new Phaser.Line(this.start_swipe_point.x, this.start_swipe_point.y, this.end_swipe_point.x, this.end_swipe_point.y); // Create new Phaser line to represent swipe line.

    // console.log("Start swipe point: " + this.start_swipe_point);
    // console.log("End  swipe point: " + this.end_swipe_point);

    // this.groups.cuttables.forEachAlive(this.check_collision, this); // Check for collision between cuts and cuttables prefabs.

    this.groups.fruits.forEachAlive(this.check_collision, this); // Check for collision between cuts and fruits.
    this.groups.bombs.forEachAlive(this.check_collision, this); // Check for collision between cuts and bombs.
    this.groups.special_fruits.forEachAlive(this.check_collision, this); // Check for collision between cuts and special fruits.
  }
};

// Check for the collision between the swipe lines and the cuttables prefabs bounding box.
FruitNinja.LevelState.prototype.check_collision = function (object) {
  "use strict";
  var object_rectangle, line1, line2, line3, line4, intersection;

  object_rectangle = new Phaser.Rectangle(object.body.x, object.body.y, object.body.width, object.body.height); // Create rectangle of cuttable object.

  // Take 4 lines, each line is a edge of rectangle.
  line1 = new Phaser.Line(object_rectangle.left, object_rectangle.bottom, object_rectangle.left, object_rectangle.top);
  line2 = new Phaser.Line(object_rectangle.left, object_rectangle.top, object_rectangle.right, object_rectangle.top);
  line3 = new Phaser.Line(object_rectangle.right, object_rectangle.top, object_rectangle.right, object_rectangle.bottom);
  line4 = new Phaser.Line(object_rectangle.right, object_rectangle.bottom, object_rectangle.left, object_rectangle.bottom);

  intersection = this.swipe.intersects(line1) || this.swipe.intersects(line2) || this.swipe.intersects(line3) || this.swipe.intersects(line4); // Check intersection between two lines (cuttable object rectangular edge and siwpe).
  if (intersection) {
    object.cut(); // If there was intersection then cut the cuttable object.
  }
};

// Game over - restart the game.
FruitNinja.LevelState.prototype.game_over = function () {
  "use strict";
  // this.game_state.restart(true, false, this.level_data);
  this.game.state.start("BootState", true, false, "assets/levels/title_screen.json", "TitleState");

  localStorage.money = parseInt(localStorage.money) + this.score; // Increase player money with the score of the game.
  this.game.current_upgrades = []; // Clean game upgrades.
};

