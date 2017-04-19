var CashNinja = CashNinja || {};

CashNinja.MenuShop = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Prefab.call(this, game_state, name, position, properties); // Extend Prefab class.

  this.visible = false; // Make this prefab invisible.

  this.menu_items = properties.menu_items; // List of items.

  this.swipe = this.game.input.activePointer; // Allow player to navigate by swiping.

  CashNinja.FacebookState.prototype.showProducts(); // Load show Facebook products.
  CashNinja.FacebookState.prototype.showPurchases(); // Load show Facebook purchases.
};

CashNinja.MenuShop.prototype = Object.create(CashNinja.Prefab.prototype);
CashNinja.MenuShop.prototype.constructor = CashNinja.MenuShop;

CashNinja.MenuShop.prototype.update = function () {
  "use strict";

  /**
   * Choose appropriate menu item.
   * To get action on whole item dimensions while swiping, item needs to be get from anchor of itself and substract & add half of width & height to it, then whole item dimensions are on action for swiping.
   */
  if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_20k_item.position.x) - 204 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_20k_item.position.x)) + 204 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_20k_item.position.y) - 324 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_20k_item.position.y)) + 324 / 2)) {
    this.add_20k_coins(); // Show purchase dialog for 20k coins.
    this.menu_items[0].select(); // Select first item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_100k_item.position.x) - 204 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_100k_item.position.x)) + 204 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_100k_item.position.y) - 324 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_100k_item.position.y)) + 324 / 2)) {
    this.add_100k_coins(); // Show purchase dialog for 100k coins.
    this.menu_items[1].select(); // Select second item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_400k_item.position.x) - 204 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_400k_item.position.x)) + 204 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_400k_item.position.y) - 324 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_400k_item.position.y)) + 324 / 2)) {
    this.add_400k_coins(); // Show purchase dialog for 400k coins.
    this.menu_items[2].select(); // Select third item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_1_5M_item.position.x) - 204 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_1_5M_item.position.x)) + 204 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_1_5M_item.position.y) - 324 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_1_5M_item.position.y)) + 324 / 2)) {
    this.add_1_5M_coins(); // Show purchase dialog for 1.5M coins.
    this.menu_items[3].select(); // Select fourth item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_7M_item.position.x) - 204 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_7M_item.position.x)) + 204 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_7M_item.position.y) - 324 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_7M_item.position.y)) + 324 / 2)) {
    this.add_7M_coins(); // Show purchase dialog for 7M coins.
    this.menu_items[4].select(); // Select fifth item.
  }
  else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.home_item.position.x) - 100 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.home_item.position.x)) + 100 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.home_item.position.y) - 100 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.home_item.position.y)) + 100 / 2)) {
    this.menu_items[5].select(); // Select fifth item.
  }
};

CashNinja.MenuShop.prototype.check_purchase = function (extraCoins, response) {
  var that = this;

  if (response.hasOwnProperty("product_id")) {
    // Purchase has been done.
    localStorage.money = parseInt(localStorage.money) + extraCoins; // Add appropriate quantity of extra coins.
    CashNinja.FacebookState.prototype.consumePurchase(response.purchase_token, response.product_id); // Consume purchase to make possibility to buy later on more product with the same ID.
    // console.log("Purchase has been done.");
  } else {
    // Purchase has not been done.
    // console.log("Purchase has not been done.")
  }
};

CashNinja.MenuShop.prototype.add_20k_coins = function () {
  var that = this;

  // Facebook API to purchase 20k coins.
  FB.ui(
    {
      method: 'pay',
      action: 'purchaseiap',
      product_id: '20k_coins'
    }, function (response) { // Callback function
      // console.log(response);
      this.extraCoins = 20000;
      that.check_purchase(this.extraCoins, response); // Check if item has been purchased.
    }
  );
};

CashNinja.MenuShop.prototype.add_100k_coins = function () {
  var that = this;

  // Facebook API to purchase 100k coins.
  FB.ui(
    {
      method: 'pay',
      action: 'purchaseiap',
      product_id: '100k_coins'
    }, function (response) { // Callback function
      // console.log(response);
      this.extraCoins = 100000; // Add 100k coins.
      that.check_purchase(this.extraCoins, response); // Check if item has been purchased.
    }
  );
};

CashNinja.MenuShop.prototype.add_400k_coins = function () {
  var that = this;

  // Facebook API to purchase 100k coins.
  FB.ui(
    {
      method: 'pay',
      action: 'purchaseiap',
      product_id: '400k_coins'
    }, function (response) { // Callback function
      // console.log(response);
      this.extraCoins = 400000;
      that.check_purchase(this.extraCoins, response); // Check if item has been purchased.
    }
  );
};

CashNinja.MenuShop.prototype.add_1_5M_coins = function () {
  var that = this;

  // Facebook API to purchase 1.5M coins.
  FB.ui(
    {
      method: 'pay',
      action: 'purchaseiap',
      product_id: '1_5m_coins'
    }, function (response) { // Callback function
      // console.log(response);
      this.extraCoins = 1500000;
      that.check_purchase(this.extraCoins, response); // Check if item has been purchased.
    }
  );
};

CashNinja.MenuShop.prototype.add_7M_coins = function () {
  var that = this;

  // Facebook API to purchase 7M coins.
  FB.ui(
    {
      method: 'pay',
      action: 'purchaseiap',
      product_id: '7m_coins'
    }, function (response) { // Callback function
      // console.log(response);
      this.extraCoins = 7000000;
      that.check_purchase(this.extraCoins, response); // Check if item has been purchased.
    }
  );
};