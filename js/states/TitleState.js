var FruitNinja = FruitNinja || {};

FruitNinja.TitleState = function () {
  "use strict";
  FruitNinja.JSONLevelState.call(this); // Extend JSONLevelState class.

  // Setting constructors of prefabs.
  this.prefab_classes = {
    "background": FruitNinja.Prefab.prototype.constructor,
    "title": FruitNinja.TextPrefab.prototype.constructor,
    "start_state_item": FruitNinja.StartStateItem.prototype.constructor
  };
};

FruitNinja.TitleState.prototype = Object.create(FruitNinja.JSONLevelState.prototype);
FruitNinja.TitleState.prototype.constructor = FruitNinja.TitleState;

FruitNinja.TitleState.prototype.create = function () {
  "use strict";
  var menu_position, menu_items, menu_properties, menu;
  FruitNinja.JSONLevelState.prototype.create.call(this); // Extend create method from JSONLevelState class.

  menu_position = new Phaser.Point(0, 0); // Anything, because menu is invisible.
  menu_items = []; // Menu items.
  this.groups.menu_items.forEach(function (menu_item) {
    menu_items.push(menu_item); // Add menu item to menu items array.
  }, this);
  menu_properties = {texture: "", group: "background", menu_items: menu_items}; // Set properties of the menu.
  menu = new FruitNinja.Menu(this, "menu", menu_position, menu_properties); // Create menu.

  localStorage.money = localStorage.money || 1000; // Initialize localStorage money.
  this.game.current_upgrades = this.game.current_upgrades || []; // Initialize current upgrades.
};