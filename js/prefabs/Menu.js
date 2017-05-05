var CashNinja = CashNinja || {};

CashNinja.Menu = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Prefab.call(this, game_state, name, position, properties); // Extend Prefab class.

  this.visible = false; // Make this prefab invisible.

  this.menu_items = properties.menu_items; // List of items.

  this.swipe = game.input; // Allow player to navigate by swiping.
  
  initAd(); // Initialize ads.
};

CashNinja.Menu.prototype = Object.create(CashNinja.Prefab.prototype);
CashNinja.Menu.prototype.constructor = CashNinja.Menu;

CashNinja.Menu.prototype.update = function () {
  "use strict";
  var that = this;

  /**
   * Choose appropriate menu item.
   * To get action on whole item dimensions while swiping, item needs to be get from anchor of itself and substract & add half of width & height to it, then whole item dimensions are on action for swiping.
   */
  if (this.swipe.onDown && (this.swipe.position.x >= ((this.game_state.prefabs.game_item.position.x) - 140 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.game_item.position.x)) + 140 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.game_item.position.y) - 62 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.game_item.position.y)) + 62 / 2)) {
    this.menu_items[0].select(); // Select first item.
  }
  else if (this.swipe.onDown && (this.swipe.position.x >= ((this.game_state.prefabs.store_item.position.x) - 48 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.store_item.position.x)) + 48 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.store_item.position.y) - 48 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.store_item.position.y)) + 48 / 2)) {
    this.menu_items[1].select(); // Select second item.
  }
  else if (this.swipe.onDown && (this.swipe.position.x >= ((this.game_state.prefabs.invite_item.position.x) - 48 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.invite_item.position.x)) + 48 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.invite_item.position.y) - 48 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.invite_item.position.y)) + 48 / 2)) {
    facebookConnectPlugin.showDialog({
        method: 'apprequests',
        message: 'Play CashNinja with me!'
    })
  }
  else if (this.swipe.onDown && (this.swipe.position.x >= ((this.game_state.prefabs.share_item.position.x) - 48 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.share_item.position.x)) + 48 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.share_item.position.y) - 48 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.share_item.position.y)) + 48 / 2)) {
    window.plugins.socialsharing.share('Play CashNinja!', 'Play CashNinja!', 'https://doyban.com/logos/cashninja.png', 'https://doyban.com/cashninja/');
  }
  else if (this.swipe.onDown && (this.swipe.position.x >= ((this.game_state.prefabs.exit_item.position.x) - 48 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.exit_item.position.x)) + 48 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.exit_item.position.y) - 55 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.exit_item.position.y)) + 55 / 2)) {
    navigator.app.exitApp();
  }
};