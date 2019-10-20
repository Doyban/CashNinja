// TODO: Refactor update method to methods handled by button on click like YellowSidd has. It might be a reason why on iOS the purchases are displayed multiple times. Never do it via update method, because as longer is the click it duplicates the touch, do always with button and function to handle this/any behaviour of a menu.
var CashNinja = CashNinja || {};

CashNinja.MenuShop = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Prefab.call(this, game_state, name, position, properties); // Extend Prefab class.

  this.visible = false; // Make this prefab invisible.

  this.menu_items = properties.menu_items; // List of items.

  this.swipe = game.input.activePointer; // Allow player to navigate by swiping.

  // Prepare products, on iOS they have to be preloaded upfront to work properly.
  store.register({
    id:    "com.doyban.cashninja.3k_coins",
    alias: "3000 coins",
    type:  store.CONSUMABLE
  });
  store.register({
    id:    "com.doyban.cashninja.15k_coins",
    alias: "15000 coins",
    type:  store.CONSUMABLE
  });
  store.register({
    id:    "com.doyban.cashninja.60k_coins",
    alias: "60000 coins",
    type:  store.CONSUMABLE
  });
  store.register({
    id:    "com.doyban.cashninja.250k_coins",
    alias: "250000 coins",
    type:  store.CONSUMABLE
  });
  store.register({
    id:    "com.doyban.cashninja.1m_coins",
    alias: "1000000 coins",
    type:  store.CONSUMABLE
  });

  store.verbosity = store.INFO; // Set up high verbosity level in the console.
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
    var that = this;

    store.order("com.doyban.cashninja.3k_coins"); // Initialize purchase.

    // Handle approved purchase.
    store.when("com.doyban.cashninja.3k_coins").approved(function (order) {
      // Add extra coins and begin the game.
      localStorage.money = parseInt(localStorage.money) + 3000;
      that.game.state.start("BootState", true, false, "assets/levels/shop.json", "ShopState");

      order.finish(); // Finish purchase.
    });
    store.refresh(); // Refresh the store to start everything.
  }

  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_15k_item.position.x) - 90 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_15k_item.position.x)) + 90 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_15k_item.position.y) - 143 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_15k_item.position.y)) + 143 / 2)) {
    var that = this;

    store.order("com.doyban.cashninja.15k_coins"); // Initialize purchase.

    // Handle approved purchase.
    store.when("com.doyban.cashninja.15k_coins").approved(function (order) {
      // Add extra coins and begin the game.
      localStorage.money = parseInt(localStorage.money) + 15000;
      that.game.state.start("BootState", true, false, "assets/levels/shop.json", "ShopState");

      order.finish(); // Finish purchase.
    });
    store.refresh(); // Refresh the store to start everything.
  }

  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_60k_item.position.x) - 90 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_60k_item.position.x)) + 90 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_60k_item.position.y) - 143 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_60k_item.position.y)) + 143 / 2)) {
    var that = this;

    store.order("com.doyban.cashninja.60k_coins"); // Initialize purchase.

    // Handle approved purchase.
    store.when("com.doyban.cashninja.60k_coins").approved(function (order) {
      // Add extra coins and begin the game.
      localStorage.money = parseInt(localStorage.money) + 60000;
      that.game.state.start("BootState", true, false, "assets/levels/shop.json", "ShopState");

      order.finish(); // Finish purchase.
    });
    store.refresh(); // Refresh the store to start everything.
  }

  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_250k_item.position.x) - 90 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_250k_item.position.x)) + 90 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_250k_item.position.y) - 143 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_250k_item.position.y)) + 143 / 2)) {
    var that = this;

    store.order("com.doyban.cashninja.250k_coins"); // Initialize purchase.

    // Handle approved purchase.
    store.when("com.doyban.cashninja.250k_coins").approved(function (order) {
      // Add extra coins and begin the game.
      localStorage.money = parseInt(localStorage.money) + 250000;
      that.game.state.start("BootState", true, false, "assets/levels/shop.json", "ShopState");

      order.finish(); // Finish purchase.
    });
    store.refresh(); // Refresh the store to start everything.
  }

  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_1M_item.position.x) - 90 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_1M_item.position.x)) + 90 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_1M_item.position.y) - 143 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_1M_item.position.y)) + 143 / 2)) {
    var that = this;

    store.order("com.doyban.cashninja.1m_coins"); // Initialize purchase.

    // Handle approved purchase.
    store.when("com.doyban.cashninja.1m_coins").approved(function (order) {
      // Add extra coins and begin the game.
      localStorage.money = parseInt(localStorage.money) + 1000000;
      that.game.state.start("BootState", true, false, "assets/levels/shop.json", "ShopState");

      order.finish(); // Finish purchase.
    });
    store.refresh(); // Refresh the store to start everything.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.home_item.position.x) - 48 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.home_item.position.x)) + 48 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.home_item.position.y) - 48 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.home_item.position.y)) + 48 / 2)) {
    this.menu_items[5].select(); // Select fifth item.
  }
};
