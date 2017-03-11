var FruitNinja = FruitNinja || {};

FruitNinja.SuperBlade = function (game_state, properties) {
  "use strict";
  FruitNinja.Upgrade.call(this, game_state); // Extend Upgrade class.
  this.cut_multiplier = properties.cut_multiplier; // Set to cut multiplier.
};

FruitNinja.SuperBlade.prototype = Object.create(FruitNinja.Upgrade.prototype);
FruitNinja.SuperBlade.prototype.constructor = FruitNinja.SuperBlade;

FruitNinja.SuperBlade.prototype.apply = function () {
  "use strict";
  this.game_state.cut_multiplier = this.cut_multiplier; // Change cut multiplier in game state.
};