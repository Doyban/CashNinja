var CashNinja = CashNinja || {};

CashNinja.Upgrades = function (game, parent) {
  "use strict";
  Phaser.Plugin.call(this, game, parent); // Extend Phaser.Plugin class.
};

CashNinja.Upgrades.prototype = Object.create(Phaser.Plugin.prototype);
CashNinja.Upgrades.prototype.constructor = CashNinja.Upgrades;

// Method init is automatically called when Phaser plugin (Upgrades here) is created. It should be used to set plugin properties like a constructor.
CashNinja.Upgrades.prototype.init = function (game_state) {
  "use strict";
  this.game_state = game_state; // Save game state.
  // Setting constructors of upgrades. Find possible upgrades in upgrade_classes property (Similar what in JSONLevelState state).
  this.upgrade_classes = {
    "super_blade": CashNinja.SuperBlade.prototype.constructor,
    "extra_heart": CashNinja.ExtraHeart.prototype.constructor
  };
};

CashNinja.Upgrades.prototype.apply_upgrades = function (upgrades) {
  "use strict";
  // Iterate through all upgrades.
  upgrades.forEach(function (upgrade_data) {
    var upgrade;
    // Check if upgrade class type is in upgrade classes property.
    if (this.upgrade_classes.hasOwnProperty(upgrade_data.type)) {
      upgrade = new this.upgrade_classes[upgrade_data.type](this.game_state, upgrade_data.properties); // Create upgrade classes.
      upgrade.apply();
    }
  }, this);
};