var FruitNinja = FruitNinja || {};

FruitNinja.StoreState = function () {
  "use strict";
  FruitNinja.JSONLevelState.call(this); // Extend JSONLevelState class.

  // Setting constructors of prefabs.
  this.prefab_classes = {
    "background": FruitNinja.Prefab.prototype.constructor,
    "title": FruitNinja.TextPrefab.prototype.constructor,
    "money": FruitNinja.Money.prototype.constructor,
    "text": FruitNinja.TextPrefab.prototype.constructor,
    "upgrade_item": FruitNinja.UpgradeItem.prototype.constructor
  };
};

FruitNinja.StoreState.prototype = Object.create(FruitNinja.JSONLevelState.prototype);
FruitNinja.StoreState.prototype.constructor = FruitNinja.StoreState;

FruitNinja.StoreState.prototype.create = function () {
  "use strict";
  var menu_position, menu_items, menu_properties, menu;
  FruitNinja.JSONLevelState.prototype.create.call(this);

  // Adding menu.
  menu_position = new Phaser.Point(0, 0); // Anything, because menu is invisible.
  menu_items = []; // Menu items.
  this.groups.menu_items.forEach(function (menu_item) {
    menu_items.push(menu_item); // Add menu item to menu items array.
  }, this);
  menu_properties = {texture: "", group: "background", menu_items: menu_items}; // Set properties of the menu.
  menu = new FruitNinja.Menu(this, "menu", menu_position, menu_properties); // Create menu.
};

FruitNinja.StoreState.prototype.update = function () {
  "use strict";
  // Check if ESCAPE key is pressed.
  if (this.game.input.keyboard.isDown(Phaser.Keyboard.ESC)) {
    game.state.start("BootState", true, false, "assets/levels/title_screen.json", "TitleState"); // Go to TitleState state.
  }
};