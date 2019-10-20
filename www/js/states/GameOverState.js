var CashNinja = CashNinja || {};

CashNinja.GameOverState = function () {
  "use strict";
  CashNinja.JSONLevelState.call(this); // Extend JSONLevelState class.

  // Setting constructors of prefabs.
  this.prefab_classes = {
    "background": CashNinja.Prefab.prototype.constructor,
    "title": CashNinja.TextPrefab.prototype.constructor,
    "money": CashNinja.Money.prototype.constructor,
    "coin": CashNinja.Prefab.prototype.constructor,
    "score": CashNinja.Score.prototype.constructor,
    "start_state_item": CashNinja.StartStateItem.prototype.constructor
  };
};

CashNinja.GameOverState.prototype = Object.create(CashNinja.JSONLevelState.prototype);
CashNinja.GameOverState.prototype.constructor = CashNinja.GameOverState;

CashNinja.GameOverState.prototype.create = function () {
  "use strict";

  CashNinja.LevelState.prototype.game_over.bind(this);

  var menu_position, menu_items, menu_properties, menu;
  CashNinja.JSONLevelState.prototype.create.call(this);

  // Adding menu.
  menu_position = new Phaser.Point(0, 0); // Anything, because menu is invisible.
  menu_items = []; // Menu items.
  this.groups.menu_items.forEach(function (menu_item) {
    menu_items.push(menu_item); // Add menu item to menu items array.
  }, this);
  menu_properties = {texture: "", group: "background", menu_items: menu_items}; // Set properties of the menu.
  menu = new CashNinja.GameOver(this, "menu", menu_position, menu_properties); // Create menu.
};