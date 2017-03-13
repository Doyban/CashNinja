var CashNinja = CashNinja || {};

CashNinja.SuperBlade = function (game_state, properties) {
  "use strict";
  CashNinja.Upgrade.call(this, game_state); // Extend Upgrade class.
  this.cut_multiplier = properties.cut_multiplier; // Set to cut multiplier.
};

CashNinja.SuperBlade.prototype = Object.create(CashNinja.Upgrade.prototype);
CashNinja.SuperBlade.prototype.constructor = CashNinja.SuperBlade;

CashNinja.SuperBlade.prototype.apply = function () {
  "use strict";
  this.game_state.cut_multiplier = this.cut_multiplier; // Change cut multiplier in game state.
};