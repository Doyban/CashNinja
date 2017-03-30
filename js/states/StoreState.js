var CashNinja = CashNinja || {};

CashNinja.StoreState = function () {
  "use strict";
  CashNinja.JSONLevelState.call(this); // Extend JSONLevelState class.

  // Setting constructors of prefabs.
  this.prefab_classes = {
    "background": CashNinja.Prefab.prototype.constructor,
    "title": CashNinja.TextPrefab.prototype.constructor,
    "money": CashNinja.Money.prototype.constructor,
    "coin": CashNinja.Prefab.prototype.constructor,
    "text": CashNinja.TextPrefab.prototype.constructor,
    "upgrade_item": CashNinja.UpgradeItem.prototype.constructor
  };
};

CashNinja.StoreState.prototype = Object.create(CashNinja.JSONLevelState.prototype);
CashNinja.StoreState.prototype.constructor = CashNinja.StoreState;

CashNinja.StoreState.prototype.create = function () {
  "use strict";
  var menu_position, menu_items, menu_properties, menu;
  CashNinja.JSONLevelState.prototype.create.call(this);

  // Adding menu.
  menu_position = new Phaser.Point(0, 0); // Anything, because menu is invisible.
  menu_items = []; // Menu items.
  this.groups.menu_items.forEach(function (menu_item) {
    menu_items.push(menu_item); // Add menu item to menu items array.
  }, this);
  menu_properties = {texture: "", group: "background", menu_items: menu_items}; // Set properties of the menu.
  menu = new CashNinja.Menu(this, "menu", menu_position, menu_properties); // Create menu.
};

CashNinja.StoreState.prototype.update = function () {
  "use strict";
  // Check if ESCAPE key is pressed.
  if (this.game.input.keyboard.isDown(Phaser.Keyboard.ESC)) {
    game.state.start("BootState", true, false, "assets/levels/title_screen.json", "TitleState"); // Go to TitleState state.
  }
};