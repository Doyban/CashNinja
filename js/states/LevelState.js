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
    "bomb_spawner": FruitNinja.BombSpawner.prototype.constructor,
    "coin_2times_spawner": FruitNinja.Coin2TimesSpawner.prototype.constructor,
    "coin_3times_spawner": FruitNinja.Coin3TimesSpawner.prototype.constructor,
    "coin_4times_spawner": FruitNinja.Coin4TimesSpawner.prototype.constructor,
    "coin_5times_spawner": FruitNinja.Coin5TimesSpawner.prototype.constructor,
    "coin_6times_spawner": FruitNinja.Coin6TimesSpawner.prototype.constructor,
    "coin_7times_spawner": FruitNinja.Coin7TimesSpawner.prototype.constructor,
    "coin_8times_spawner": FruitNinja.Coin8TimesSpawner.prototype.constructor,
    "coin_9times_spawner": FruitNinja.Coin9TimesSpawner.prototype.constructor,
    "coin_10times_spawner": FruitNinja.Coin10TimesSpawner.prototype.constructor
  };
};

// FruitNinja.LevelState.prototype = Object.create(Phaser.State.prototype);
FruitNinja.LevelState.prototype = Object.create(FruitNinja.JSONLevelState.prototype);
FruitNinja.LevelState.prototype.constructor = FruitNinja.LevelState;

FruitNinja.LevelState.prototype.init = function (level_data) {
  "use strict";
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
  FruitNinja.JSONLevelState.prototype.create.call(this); // Call JSONLevelState class.
  // Add swipes.
  this.game.input.onDown.add(this.start_swipe, this);
  this.game.input.onUp.add(this.end_swipe, this);

  this.upgrades = this.game.plugins.add(FruitNinja.Upgrades, this); // Initialize upgrades plugin.
  this.upgrades.apply_upgrades(this.game.current_upgrades); // Apply upgrades.
};

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

    this.swipe = new Phaser.Line(this.start_swipe_point.x, this.start_swipe_point.y, this.end_swipe_point.x, this.end_swipe_point.y);

    // console.log("Start swipe point: " + this.start_swipe_point);
    // console.log("End  swipe point: " + this.end_swipe_point);

    this.groups.fruits.forEachAlive(this.check_collision, this); // Check for collision between cuts and fruits.
    this.groups.bombs.forEachAlive(this.check_collision, this); // Check for collision between cuts and bombs.
    this.groups.special_coins.forEachAlive(this.check_collision, this); // Check for collision between cuts and special coins.
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

