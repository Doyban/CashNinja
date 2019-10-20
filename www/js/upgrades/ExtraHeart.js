var CashNinja = CashNinja || {};

CashNinja.ExtraHeart = function (game_state, properties) {
  "use strict";
  CashNinja.Upgrade.call(this, game_state); // Extend Upgrade class.
  this.number_of_hearts = properties.number_of_hearts; // Set up number of hears.
};

CashNinja.ExtraHeart.prototype = Object.create(CashNinja.Upgrade.prototype);
CashNinja.ExtraHeart.prototype.constructor = CashNinja.ExtraHeart;

CashNinja.ExtraHeart.prototype.apply = function () {
  "use strict";
  // Add lives according to number of blades.
  this.game_state.prefabs.lives.lives += this.number_of_hearts;
  this.game_state.prefabs.lives.add_lives(this.number_of_hearts);
};