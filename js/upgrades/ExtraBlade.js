var CashNinja = CashNinja || {};

CashNinja.ExtraBlade = function (game_state, properties) {
  "use strict";
  CashNinja.Upgrade.call(this, game_state); // Extend Upgrade class.
  this.number_of_blades = properties.number_of_blades; // Set up number of blades.
};

CashNinja.ExtraBlade.prototype = Object.create(CashNinja.Upgrade.prototype);
CashNinja.ExtraBlade.prototype.constructor = CashNinja.ExtraBlade;

CashNinja.ExtraBlade.prototype.apply = function () {
  "use strict";
  // Add lives according to number of blades.
  this.game_state.prefabs.lives.lives += this.number_of_blades;
  this.game_state.prefabs.lives.add_lives(this.number_of_blades);
};