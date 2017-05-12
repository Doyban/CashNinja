var CashNinja = CashNinja || {};

CashNinja.Bomb = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Cuttable.call(this, game_state, name, position, properties); // Extend Cuttable class.

  this.body.setSize(20, 20); // Physical body of bomb.
  this.hitBombSound = this.game.add.audio('hit_bomb'); // Add hit bomb sound.
};

CashNinja.Bomb.prototype = Object.create(CashNinja.Cuttable.prototype);
CashNinja.Bomb.prototype.constructor = CashNinja.Bomb;

CashNinja.Bomb.prototype.cut = function () {
  "use strict";
  CashNinja.Cuttable.prototype.cut.call(this); // Extend cut method from Cuttable class.

  this.game_state.prefabs.lives.die(); // Decrease number of lives by 1.
  this.kill(); // Make coin kill itself.
  this.hitBombSound.play(); // Play hit bomb sound.
};