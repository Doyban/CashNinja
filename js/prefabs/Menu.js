var CashNinja = CashNinja || {};

CashNinja.Menu = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Prefab.call(this, game_state, name, position, properties); // Extend Prefab class.

  this.visible = false; // Make this prefab invisible.

  this.menu_items = properties.menu_items; // List of items.

  this.swipe = this.game.input.activePointer; // Allow player to navigate by swiping.
};

CashNinja.Menu.prototype = Object.create(CashNinja.Prefab.prototype);
CashNinja.Menu.prototype.constructor = CashNinja.Menu;

CashNinja.Menu.prototype.update = function () {
  "use strict";

  /**
   * Choose appropriate menu item.
   * To get action on whole item dimensions while swiping, item needs to be get from anchor of itself and substract & add half of width & height to it, then whole item dimensions are on action for swiping.
   */
  if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.game_item.position.x) - 128 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.game_item.position.x)) + 128 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.game_item.position.y) - 57 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.game_item.position.y)) + 57 / 2)) {
    this.menu_items[0].select(); // Select first item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.store_item.position.x) - 128 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.store_item.position.x)) + 128 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.store_item.position.y) - 128 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.store_item.position.y)) + 128 / 2)) {
    this.menu_items[1].select(); // Select second item.
  }
  else if (this.swipe.isDown && (this.swipe.position.y >= (this.swipe.position.x >= ((this.game_state.prefabs.invite_item.position.x) - 128 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.invite_item.position.x)) + 128 / 2) && ((this.game_state.prefabs.invite_item.position.y) - 128 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.invite_item.position.y)) + 128 / 2)) {
    this.menu_items[2].select(); // Select third item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.share_item.position.x) - 128 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.share_item.position.x)) + 128 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.share_item.position.y) - 128 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.share_item.position.y)) + 128 / 2)) {
    this.menu_items[3].select(); // Select fourth item.
  }
  else if (this.swipe.isDown && (this.swipe.position.y >= (this.swipe.position.x >= ((this.game_state.prefabs.exit_item.position.x) - 128 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.exit_item.position.x)) + 128 / 2) && ((this.game_state.prefabs.exit_item.position.y) - 128 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.exit_item.position.y)) + 128 / 2)) {
    this.menu_items[4].select(); // Select fifth item.
  }
};