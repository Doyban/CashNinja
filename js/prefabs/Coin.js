var CashNinja = CashNinja || {};

CashNinja.Coin = function (game_state, name, position, properties) {
  "use strict";
  var frame_index;
  CashNinja.Cuttable.call(this, game_state, name, position, properties); // Extend Cuttable class.

  this.frames = properties.frames; // Set frames.

  // Randomly pick 1 Coin from frames.
  frame_index = this.game_state.rnd.between(0, this.frames.length - 1);

  this.frame = this.frames[frame_index];

  this.body.setSize(12, 12); // Physical body of Coin.
  this.hitCoinSound = this.game.add.audio('hit_coin'); // Add hit coin sound.
};

CashNinja.Coin.prototype = Object.create(CashNinja.Cuttable.prototype);
CashNinja.Coin.prototype.constructor = CashNinja.Coin;

// After reseting the cuttable prefabs it is needed to repick the frame. It is needed because if dead Coin is reused it might change its frame.
CashNinja.Coin.prototype.reset = function (position_x, position_y, velocity) {
  "use strict";
  var frame_index;
  CashNinja.Cuttable.prototype.reset.call(this, position_x, position_y, velocity); // Call reset method from Cuttable class.
  frame_index = this.game_state.rnd.between(0, this.frames.length - 1);

  this.frame = this.frames[frame_index];
};

CashNinja.Coin.prototype.cut = function () {
  "use strict";
  CashNinja.Cuttable.prototype.cut.call(this); // Call cut method from Cuttable class.

  this.basic_score = 1; // Set up basic score for this coin.
  this.game_state.score += this.basic_score * this.game_state.cut_multiplier; // Multiply the score by cut multiplier.
  this.kill(); // Make coin kill itself.
  this.hitCoinSound.play(); // Play hit coin sound.
};
