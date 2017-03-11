var FruitNinja = FruitNinja || {};

FruitNinja.ExtraBlade = function (game_state, properties) {
  "use strict";
  FruitNinja.Upgrade.call(this, game_state); // Extend Upgrade class.
  this.number_of_blades = properties.number_of_blades; // Set up number of blades.
};

FruitNinja.ExtraBlade.prototype = Object.create(FruitNinja.Upgrade.prototype);
FruitNinja.ExtraBlade.prototype.constructor = FruitNinja.ExtraBlade;

FruitNinja.ExtraBlade.prototype.apply = function () {
  "use strict";
  // Add lives according to number of blades.
  this.game_state.prefabs.lives.lives += this.number_of_blades;
  this.game_state.prefabs.lives.add_lives(this.number_of_blades);
};