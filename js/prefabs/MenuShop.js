var CashNinja = CashNinja || {};

CashNinja.MenuShop = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Prefab.call(this, game_state, name, position, properties); // Extend Prefab class.

  this.visible = false; // Make this prefab invisible.

  this.menu_items = properties.menu_items; // List of items.

  this.swipe = this.game.input.activePointer; // Allow player to navigate by swiping.
};

CashNinja.MenuShop.prototype = Object.create(CashNinja.Prefab.prototype);
CashNinja.MenuShop.prototype.constructor = CashNinja.MenuShop;

CashNinja.MenuShop.prototype.update = function () {
  "use strict";

  /**
   * Choose appropriate menu item.
   * To get action on whole item dimensions while swiping, item needs to be get from anchor of itself and substract & add half of width & height to it, then whole item dimensions are on action for swiping.
   */
  // TODO: Customize width & height to images.
  if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_20k_item.position.x) - 204 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_20k_item.position.x)) + 204 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_20k_item.position.y) - 324 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_20k_item.position.y)) + 324 / 2)) {
    this.menu_items[0].select(); // Select first item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_100k_item.position.x) - 204 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_100k_item.position.x)) + 204 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_100k_item.position.y) - 324 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_100k_item.position.y)) + 324 / 2)) {
    this.menu_items[1].select(); // Select second item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_400k_item.position.x) - 204 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_400k_item.position.x)) + 204 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_400k_item.position.y) - 324 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_400k_item.position.y)) + 324 / 2)) {
    this.menu_items[2].select(); // Select third item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_1_5M_item.position.x) - 204 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_1_5M_item.position.x)) + 204 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_1_5M_item.position.y) - 324 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_1_5M_item.position.y)) + 324 / 2)) {
    this.menu_items[3].select(); // Select fourth item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_7M_item.position.x) - 204 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_7M_item.position.x)) + 204 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_7M_item.position.y) - 324 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_7M_item.position.y)) + 324 / 2)) {
    this.menu_items[4].select(); // Select fifth item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.home_item.position.x) - 100 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.home_item.position.x)) + 100 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.home_item.position.y) - 100 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.home_item.position.y)) + 100 / 2)) {
    this.menu_items[5].select(); // Select fifth item.
  }
};