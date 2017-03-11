var FruitNinja = FruitNinja || {};

FruitNinja.Fruit = function (game_state, name, position, properties) {
  "use strict";
  var frame_index;
  FruitNinja.Cuttable.call(this, game_state, name, position, properties); // Extend Cuttable class.

  this.frames = properties.frames; // Set frames.

  // Randomly pick 1 fruit from frames.
  frame_index = this.game_state.rnd.between(0, this.frames.length - 1);
  // this.frame = this.game_state.game.rnd.pick(this.frames); // Randomly pick 1 fruit from frames.
  this.frame = this.frames[frame_index];

  this.body.setSize(20, 20); // Physical body of fruit.
};

FruitNinja.Fruit.prototype = Object.create(FruitNinja.Cuttable.prototype);
FruitNinja.Fruit.prototype.constructor = FruitNinja.Fruit;

// After reseting the cuttable prefabs it is needed to repick the frame. It is needed because if dead fruit is reused it might change its frame.
FruitNinja.Fruit.prototype.reset = function (position_x, position_y, velocity) {
  "use strict";
  var frame_index;
  FruitNinja.Cuttable.prototype.reset.call(this, position_x, position_y, velocity); // Call reset method from Cuttable class.
  frame_index = this.game_state.rnd.between(0, this.frames.length - 1);
  // this.frame = this.game_state.game.rnd.pick(this.frames); // After reseting the cuttable prefabs it is needed to repick the frame. It is needed because if dead fruit is reused it might change its frame.
  this.frame = this.frames[frame_index];
};

FruitNinja.Fruit.prototype.cut = function () {
  "use strict";
  FruitNinja.Cuttable.prototype.cut.call(this); // Call cut method from Cuttable class.
  // this.game_state.score += 1; // Increase the score by 1.
  this.game_state.score += this.game_state.cut_multiplier; // Increase the score by cut multiplier.
  this.kill(); // Make fruit kill itself.
};