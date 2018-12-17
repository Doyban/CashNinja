var CashNinja = CashNinja || {};

CashNinja.MenuShop = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Prefab.call(this, game_state, name, position, properties); // Extend Prefab class.

  this.visible = false; // Make this prefab invisible.

  this.menu_items = properties.menu_items; // List of items.

  this.swipe = game.input.activePointer; // Allow player to navigate by swiping.
};

CashNinja.MenuShop.prototype = Object.create(CashNinja.Prefab.prototype);
CashNinja.MenuShop.prototype.constructor = CashNinja.MenuShop;

CashNinja.MenuShop.prototype.update = function () {
  "use strict";

  /**
   * Choose appropriate menu item.
   * To get action on whole item dimensions while swiping, item needs to be get from anchor of itself and substract & add half of width & height to it, then whole item dimensions are on action for swiping.
   */
  if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_3k_item.position.x) - 90 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_3k_item.position.x)) + 90 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_3k_item.position.y) - 143 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_3k_item.position.y)) + 143 / 2)) {
    // TODO: Purchase.
    // Add extra coins and begin the game.
    // localStorage.money = parseInt(localStorage.money) + 3000;
    // that.game.state.start("BootState", true, false, "assets/levels/shop.json", "ShopState");
  }
  
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_15k_item.position.x) - 90 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_15k_item.position.x)) + 90 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_15k_item.position.y) - 143 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_15k_item.position.y)) + 143 / 2)) {
    // TODO: Purchase. 
    // Add extra coins and begin the game.
    // localStorage.money = parseInt(localStorage.money) + 15000;
    // that.game.state.start("BootState", true, false, "assets/levels/shop.json", "ShopState");
  }
  
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_60k_item.position.x) - 90 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_60k_item.position.x)) + 90 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_60k_item.position.y) - 143 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_60k_item.position.y)) + 143 / 2)) {
    // TODO: Purchase.           
    // Add extra coins and begin the game.
    // localStorage.money = parseInt(localStorage.money) + 60000;
    // that.game.state.start("BootState", true, false, "assets/levels/shop.json", "ShopState");
  }
  
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_250k_item.position.x) - 90 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_250k_item.position.x)) + 90 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_250k_item.position.y) - 143 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_250k_item.position.y)) + 143 / 2)) {
    // TODO: Purchase.
    // Add extra coins and begin the game.
    // localStorage.money = parseInt(localStorage.money) + 250000;
    // that.game.state.start("BootState", true, false, "assets/levels/shop.json", "ShopState");
  }
  
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_1M_item.position.x) - 90 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_1M_item.position.x)) + 90 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_1M_item.position.y) - 143 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_1M_item.position.y)) + 143 / 2)) {
    // Purchase.          
    // Add extra coins and begin the game.
    // localStorage.money = parseInt(localStorage.money) + 1000000;
    // that.game.state.start("BootState", true, false, "assets/levels/shop.json", "ShopState");
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.home_item.position.x) - 48 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.home_item.position.x)) + 48 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.home_item.position.y) - 48 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.home_item.position.y)) + 48 / 2)) {
    this.menu_items[5].select(); // Select fifth item.
  }
};
