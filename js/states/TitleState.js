var CashNinja = CashNinja || {};

CashNinja.TitleState = function () {
  "use strict";
  CashNinja.JSONLevelState.call(this); // Extend JSONLevelState class.

  // Setting constructors of prefabs.
  this.prefab_classes = {
    "background": CashNinja.Prefab.prototype.constructor,
    "title": CashNinja.TextPrefab.prototype.constructor,
    "start_state_item": CashNinja.StartStateItem.prototype.constructor
  };
};

CashNinja.TitleState.prototype = Object.create(CashNinja.JSONLevelState.prototype);
CashNinja.TitleState.prototype.constructor = CashNinja.TitleState;

CashNinja.TitleState.prototype.create = function () {
  "use strict";
  var menu_position, menu_items, menu_properties, menu;
  CashNinja.JSONLevelState.prototype.create.call(this); // Extend create method from JSONLevelState class.

  menu_position = new Phaser.Point(0, 0); // Anything, because menu is invisible.
  menu_items = []; // Menu items.
  this.groups.menu_items.forEach(function (menu_item) {
    menu_items.push(menu_item); // Add menu item to menu items array.
  }, this);
  menu_properties = {texture: "", group: "background", menu_items: menu_items}; // Set properties of the menu.
  menu = new CashNinja.Menu(this, "menu", menu_position, menu_properties); // Create menu.

  localStorage.money = localStorage.money || 5000; // Initialize localStorage money. TODO: Change to 500 before publish and Firebase
  this.game.current_upgrades = this.game.current_upgrades || []; // Initialize current upgrades.
};