var CashNinja = CashNinja || {};

CashNinja.UpgradeItem = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.MenuItem.call(this, game_state, name, position, properties); // Extend MenuItem class.

  this.description = properties.description; // Set up description.
  this.price = properties.price; // Set up price.

  this.upgrade_type = properties.upgrade_type; // Save upgrade type.
  this.upgrade_properties = properties.upgrade_properties; // Save upgrade properties.

  this.selected = false; // Selected property will be used later.
};

CashNinja.UpgradeItem.prototype = Object.create(CashNinja.MenuItem.prototype);
CashNinja.UpgradeItem.prototype.constructor = CashNinja.UpgradeItem;

CashNinja.UpgradeItem.prototype.selection_over = function () {
  "use strict";
  CashNinja.MenuItem.prototype.selection_over.call(this); // Extend selection_over method from MenuItem class.
  this.game_state.prefabs.upgrade_description.text = this.description; // Change text of upgrade description to show the description of this upgrade.
  this.game_state.prefabs.upgrade_price.text = "Price: " + this.price + " points"; // Change text of upgrade description to show the price of this upgrade.
};

CashNinja.UpgradeItem.prototype.selection_out = function () {
  "use strict";
  CashNinja.MenuItem.prototype.selection_out.call(this);
  // Clear description and price.
  this.game_state.prefabs.upgrade_description.text = "";
  this.game_state.prefabs.upgrade_price.text = "";
};

CashNinja.UpgradeItem.prototype.select = function () {
  "use strict";
  // Player can buy upgrades only ones per game and if has enough money.
  if (!this.selected && localStorage.money >= this.price) {
    localStorage.money -= this.price; // Decrease price of item from current money of player.
    this.game_state.game.current_upgrades.push({type: this.upgrade_type, properties: this.upgrade_properties}); // Push upgrade type & upgrade properties to the current upgrades.
    this.selected = true; // Player bought upgrade in this game, upgrade is selected.
  }
};