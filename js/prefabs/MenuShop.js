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
    this.add_3k_coins(); // Show purchase dialog for 3k coins.
  } else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_15k_item.position.x) - 90 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_15k_item.position.x)) + 90 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_15k_item.position.y) - 143 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_15k_item.position.y)) + 143 / 2)) {
    this.add_15k_coins(); // Show purchase dialog for 15k coins.
  } else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_60k_item.position.x) - 90 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_60k_item.position.x)) + 90 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_60k_item.position.y) - 143 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_60k_item.position.y)) + 143 / 2)) {
    this.add_60k_coins(); // Show purchase dialog for 60k coins.
  } else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_250k_item.position.x) - 90 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_250k_item.position.x)) + 90 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_250k_item.position.y) - 143 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_250k_item.position.y)) + 143 / 2)) {
    this.add_250k_coins(); // Show purchase dialog for 250k coins.
  } else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.coins_1M_item.position.x) - 90 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.coins_1M_item.position.x)) + 90 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.coins_1M_item.position.y) - 143 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.coins_1M_item.position.y)) + 143 / 2)) {
    this.add_1M_coins(); // Show purchase dialog for 1M coins.
  } else if (this.swipe.isDown && (this.swipe.position.x >= ((this.game_state.prefabs.home_item.position.x) - 48 / 2) && this.swipe.position.x <= ((this.game_state.prefabs.home_item.position.x)) + 48 / 2) && (this.swipe.position.y >= ((this.game_state.prefabs.home_item.position.y) - 48 / 2) && this.swipe.position.y <= ((this.game_state.prefabs.home_item.position.y)) + 48 / 2)) {
    this.menu_items[5].select(); // Select sixth item.
  }
};

CashNinja.MenuShop.prototype.check_purchase = function (extraCoins, purchase) {
  if (purchase.hasOwnProperty("product_id")) {
    // Purchase has been done.
    localStorage.money = parseInt(localStorage.money) + extraCoins; // Add appropriate quantity of extra coins.
    // Consume purchase to make possibility to buy later on more product with the same ID.
    FBInstant.payments.consumePurchaseAsync(purchase.purchaseToken).then(function () {
      alert("Purchase has been done.");
      FBInstant.logEvent('Purchase has been done. Purchase details: ', purchase); // Log purchase details to Facebook Analytics.
    }).catch(function (error) {
      FBInstant.logEvent(error); // Log purchase error details to Facebook Analytics.
      alert("Purchase has not been done.")
    });
  } else {
    // Purchase has not been done.
    alert("Purchase has not been done.")
  }
};

CashNinja.MenuShop.prototype.add_3k_coins = function () {
  var that = this;

  // Facebook API to purchase 3k coins.
  FBInstant.payments.purchaseAsync({
    productID: '3k_coins'
  }).then(function (purchase) { // Callback function
    FBInstant.logEvent('Method add_3k_coins() purchase: ', purchase); // Log "3k_coins" purchase to Facebook Analytics.
    this.extraCoins = 3000; // Add 3k coins.
    that.check_purchase(this.extraCoins, purchase); // Check if item has been purchased.
  }).catch(function (error) {
    FBInstant.logEvent('Method add_3k_coins() error: ', error); // Log "3k_coins" purchase error to Facebook Analytics.
  });
};

CashNinja.MenuShop.prototype.add_15k_coins = function () {
  var that = this;

  // Facebook API to purchase 15k coins.
  FBInstant.payments.purchaseAsync({
    productID: '15k_coins'
  }).then(function (purchase) { // Callback function
    FBInstant.logEvent('Method add_15k_coins() purchase: ', purchase); // Log "15k_coins" purchase to Facebook Analytics.
    this.extraCoins = 15000; // Add 15k coins.
    that.check_purchase(this.extraCoins, purchase); // Check if item has been purchased.
  }).catch(function (error) {
    FBInstant.logEvent('Method add_15k_coins() error: ', error); // Log "15k_coins" purchase error to Facebook Analytics.
  });
}

CashNinja.MenuShop.prototype.add_60k_coins = function () {
  var that = this;

  // Facebook API to purchase 60k coins.
  FBInstant.payments.purchaseAsync({
    productID: '60k_coins'
  }).then(function (purchase) { // Callback function
    FBInstant.logEvent('Method add_60k_coins() purchase: ', purchase); // Log "60k_coins" purchase to Facebook Analytics.
    this.extraCoins = 60000; // Add 60k coins.
    that.check_purchase(this.extraCoins, purchase); // Check if item has been purchased.
  }).catch(function (error) {
    FBInstant.logEvent('Method add_60k_coins() error: ', error); // Log "60k_coins" purchase error to Facebook Analytics.
  });
}

CashNinja.MenuShop.prototype.add_250k_coins = function () {
  var that = this;

  // Facebook API to purchase 250k coins.
  FBInstant.payments.purchaseAsync({
    productID: '250k_coins'
  }).then(function (purchase) { // Callback function
    FBInstant.logEvent('Method add_250k_coins() purchase: ', purchase); // Log "250k_coins" purchase to Facebook Analytics.
    this.extraCoins = 250000; // Add 250k coins.
    that.check_purchase(this.extraCoins, purchase); // Check if item has been purchased.
  }).catch(function (error) {
    FBInstant.logEvent('Method add_250k_coins() error: ', error); // Log "250k_coins" purchase error to Facebook Analytics.
  });
};

CashNinja.MenuShop.prototype.add_1M_coins = function () {
  var that = this;

  // Facebook API to purchase 1M coins.
  FBInstant.payments.purchaseAsync({
    productID: '1m_coins'
  }).then(function (purchase) { // Callback function
    FBInstant.logEvent('Method add_1M_coins() purchase: ', purchase); // Log "1m_coins" purchase to Facebook Analytics.
    this.extraCoins = 1000000;
    that.check_purchase(this.extraCoins, purchase); // Check if item has been purchased.
  }).catch(function (error) {
    FBInstant.logEvent('Method add_1M_coins() error: ', error); // Log "1m_coins" purchase error to Facebook Analytics.
  });
};