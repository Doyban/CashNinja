var CashNinja = CashNinja || {};

CashNinja.MenuStore = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Prefab.call(this, game_state, name, position, properties); // Extend Prefab class.

  this.visible = false; // Make this prefab invisible.

  this.menu_items = properties.menu_items; // List of items.

  this.swipe = game.input.activePointer; // Allow player to navigate by swiping.
};

CashNinja.MenuStore.prototype = Object.create(CashNinja.Prefab.prototype);
CashNinja.MenuStore.prototype.constructor = CashNinja.MenuStore;

CashNinja.MenuStore.prototype.update = function () {
  "use strict";

  /**
   * Choose appropriate menu item.
   * To get action on whole item dimensions while swiping, item needs to be get from anchor of itself and substract & add half of width & height to it, then whole item dimensions are on action for swiping.
   */
  if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.silver_sword_item.position.x) - 68 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.silver_sword_item.position.x)) + 68 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.silver_sword_item.position.y) - 112 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.silver_sword_item.position.y)) + 112 / 2)) {
    this.menu_items[0].select(); // Select first item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.gold_sword_item.position.x) - 68 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.gold_sword_item.position.x)) + 68 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.gold_sword_item.position.y) - 112 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.gold_sword_item.position.y)) + 112 / 2)) {
    this.menu_items[1].select(); // Select second item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.diamond_sword_item.position.x) - 68 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.diamond_sword_item.position.x)) + 68 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.diamond_sword_item.position.y) - 112 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.diamond_sword_item.position.y)) + 112 / 2)) {
    this.menu_items[2].select(); // Select third item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.one_heart.position.x) - 78 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.one_heart.position.x)) + 78 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.one_heart.position.y) - 92 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.one_heart.position.y)) + 92 / 2)) {
    this.menu_items[3].select(); // Select fourth item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.three_hearts.position.x) - 100 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.three_hearts.position.x)) + 100 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.three_hearts.position.y) - 92 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.three_hearts.position.y)) + 92 / 2)) {
    this.menu_items[4].select(); // Select fifth item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.five_hearts.position.x) - 100 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.five_hearts.position.x)) + 100 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.five_hearts.position.y) - 92 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.five_hearts.position.y)) + 92 / 2)) {
    this.menu_items[5].select(); // Select sixth item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.iron_sword_item.position.x) - 140 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.iron_sword_item.position.x)) + 140 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.iron_sword_item.position.y) - 119 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.iron_sword_item.position.y)) + 119 / 2)) {
    this.menu_items[6].select(); // Select seventh item.
  }
};