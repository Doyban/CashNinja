var FruitNinja = FruitNinja || {};

FruitNinja.Bomb = function (game_state, name, position, properties) {
  "use strict";
  FruitNinja.Cuttable.call(this, game_state, name, position, properties); // Extend Cuttable class.

  this.body.setSize(20, 20); // Physical body of bomb.
};

FruitNinja.Bomb.prototype = Object.create(FruitNinja.Cuttable.prototype);
FruitNinja.Bomb.prototype.constructor = FruitNinja.Bomb;

FruitNinja.Bomb.prototype.cut = function () {
  "use strict";
  FruitNinja.Cuttable.prototype.cut.call(this); // Extend cut method from Cuttable class.

  this.game_state.prefabs.lives.die(); // Decrease number of lives by 1.
  this.kill(); // Make fruit kill itself.
};