var CashNinja = CashNinja || {};

CashNinja.Menu = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Prefab.call(this, game_state, name, position, properties); // Extend Prefab class.

  this.visible = false; // Make this prefab invisible.

  this.menu_items = properties.menu_items; // List of items.

  this.swipe = game.input.activePointer; // Allow player to navigate by swiping.

  initAds(); // Initialize ads.
};

CashNinja.Menu.prototype = Object.create(CashNinja.Prefab.prototype);
CashNinja.Menu.prototype.constructor = CashNinja.Menu;

CashNinja.Menu.prototype.update = function () {
  "use strict";
  // Choose appropriate menu item.
  this.startButton = this.game.add.button(this.game.world.centerX - 140 / 2, this.game.world.centerY - 62, "start", this.startGame, this);
  this.shopButton = this.game.add.button(this.game.world.width * 0.1, this.game.world.height * 0.7, "shop", this.startShop, this);
  this.inviteButton = this.game.add.button(this.game.world.width * 0.35, this.game.world.height * 0.7, "invite", this.startInvite, this);
  this.shareButton = this.game.add.button(this.game.world.width * 0.6, this.game.world.height * 0.7, "share", this.startShare, this);
  this.exitButton = this.game.add.button(this.game.world.width * 0.85, this.game.world.height * 0.7, "exit", this.startExit, this);
};

CashNinja.Menu.prototype.startGame = function () {
  this.menu_items[0].select(); // Select first item.
};

CashNinja.Menu.prototype.startShop = function () {
  this.menu_items[1].select(); // Select second item.
  FBInstant.payments.getPurchasesAsync().then(function (purchases) {
    FBInstant.logEvent('Unconsumed purchases: ', purchases);

    for (i in purchases) {
      FBInstant.payments.consumePurchaseAsync(purchases[i].purchaseToken).then(function () {
        FBInstant.logEvent('Consumed purchase: ', purchases[i].purchaseToken);
      }).catch(function (error) {
        FBInstant.logEvent(error); // Log consumed purchase error details to Facebook Analytics.
      });
    }
  }).catch(function (error) {
    FBInstant.logEvent(error); // Log unconsumed purchases error details to Facebook Analytics.
  });
};

CashNinja.Menu.prototype.startInvite = function () {
  inviteGame();
};

CashNinja.Menu.prototype.startShare = function () {
  shareGame();
};

CashNinja.Menu.prototype.startExit = function () {
  exitGame();
};