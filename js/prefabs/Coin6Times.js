var CashNinja = CashNinja || {};

CashNinja.Coin6Times = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Cuttable.call(this, game_state, name, position, properties); // Extend Cuttable class.

  this.body.setSize(12, 12); // Physical body of special coin.

  /**
   * Set autodestructor parameter to false, so it won't be try start when it is done running.
   * @type {*}
   */
  this.kill_timer = this.game_state.game.time.create(false); // Create timer, which will be used to kill the coin when it is cut.
};

CashNinja.Coin6Times.prototype = Object.create(CashNinja.Cuttable.prototype);
CashNinja.Coin6Times.prototype.constructor = CashNinja.Coin6Times;

CashNinja.Coin6Times.prototype.kill = function () {
  "use strict";
  Phaser.Sprite.prototype.kill.call(this); // Extend kill method from Phaser.Sprite class.
  // Enable gravity again and stop kill timer.
  this.body.allowGravity = true;
  this.kill_timer.stop();
};

CashNinja.Coin6Times.prototype.cut = function () {
  "use strict";
  CashNinja.Cuttable.prototype.cut.call(this); // Extend cut method from Cuttable class.

  this.basic_score = 6; // Set up basic score for this coin.
  this.game_state.score += this.basic_score * this.game_state.cut_multiplier; // Multiply the score by cut multiplier.
  this.kill(); // Make coin kill itself.
};