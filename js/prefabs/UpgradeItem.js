var CashNinja = CashNinja || {};

CashNinja.UpgradeItem = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.MenuItem.call(this, game_state, name, position, properties); // Extend MenuItem class.
  // CashNinja.StartStateItem.call(this, game_state, name, position, properties); // Extend StartStateItem class.

  this.price = properties.price; // Set up price.

  this.upgrade_type = properties.upgrade_type; // Save upgrade type.
  this.upgrade_properties = properties.upgrade_properties; // Save upgrade properties.

  this.selected = false; // Selected property will be used later.
  this.swipe = this.game.input.activePointer; // Allow player to navigate by swiping.

  this.level_file = properties.level_file; // Set up level file.
  this.state_name = properties.state_name; // Set up state name.
};

CashNinja.UpgradeItem.prototype = Object.create(CashNinja.MenuItem.prototype);
CashNinja.UpgradeItem.prototype.constructor = CashNinja.UpgradeItem;

CashNinja.UpgradeItem.prototype.select = function () {
  "use strict";
  // Player can buy upgrades only ones per game and if has enough money.
  if (!this.selected && localStorage.money >= this.price) {
    localStorage.money -= this.price; // Decrease price of item from current money of player.
    this.game_state.game.current_upgrades.push({type: this.upgrade_type, properties: this.upgrade_properties}); // Push upgrade type & upgrade properties to the current upgrades.
    this.selected = true; // Player bought upgrade in this game, upgrade is selected.
  }

  this.game_state.state.start("BootState", true, false, this.level_file, this.state_name); // Start next Phaser state.
};