var FruitNinja = FruitNinja || {};

FruitNinja.SpecialFruit = function (game_state, name, position, properties) {
  "use strict";
  FruitNinja.Cuttable.call(this, game_state, name, position, properties); // Extend Cuttable class.

  this.body.setSize(20, 20); // Physical body of special fruit.

  /**
   * Set autodestructor parameter to false, so it won't be try start when it is done running.
   * @type {*}
   */
  this.kill_timer = this.game_state.game.time.create(false); // Create timer, which will be used to kill the fruit when it is cut.
};

FruitNinja.SpecialFruit.prototype = Object.create(FruitNinja.Cuttable.prototype);
FruitNinja.SpecialFruit.prototype.constructor = FruitNinja.SpecialFruit;

FruitNinja.SpecialFruit.prototype.kill = function () {
  "use strict";
  Phaser.Sprite.prototype.kill.call(this); // Extend kill method from Phaser.Sprite class.
  // Enable gravity again and stop kill timer.
  this.body.allowGravity = true;
  this.kill_timer.stop();
};

FruitNinja.SpecialFruit.prototype.cut = function () {
  "use strict";
  FruitNinja.Cuttable.prototype.cut.call(this); // Extend cut method from Cuttable class.

  this.game_state.score += 1; // Increment score by 1.
  this.game_state.score += this.game_state.cut_multiplier; // Increase the score by cut multiplier.
  if (!this.kill_timer.running) {
    // If timer isn't running then stop it in the air.
    this.body.allowGravity = false;
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;

    // Keep in the air for 3 seconds and start the killer timer.
    this.kill_timer.add(Phaser.Timer.SECOND * 3, this.kill, this);
    this.kill_timer.start();
  }
};