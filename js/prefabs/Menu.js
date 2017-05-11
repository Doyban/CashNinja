var CashNinja = CashNinja || {};

CashNinja.Menu = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Prefab.call(this, game_state, name, position, properties); // Extend Prefab class.

  this.visible = false; // Make this prefab invisible.

  this.menu_items = properties.menu_items; // List of items.

  this.swipe = game.input.activePointer; // Allow player to navigate by swiping.
  
  initAd(); // Initialize ads.
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
};

CashNinja.Menu.prototype.startInvite = function () {
//  alert("invite");
  this.options = {
    method: 'apprequests',
    message: 'Play CashNinja with me!'
  };
  this.onSuccess = function(result) {
//    alert("Success with invite");
  }
  this.onError = function(msg) {
//    alert("Failed with invite");
  }
    
  facebookConnectPlugin.showDialog(this.options, this.onSuccess, this.onError);
};

CashNinja.Menu.prototype.startShare = function () {
//  alert("share");
    
  this.options = {
    message: 'Play CashNinja!', // not supported on some apps (Facebook, Instagram)
    subject: 'Play CashNinja!', // fi. for email
    files: ['http://doyban.com/logos/cashninja.png'], // an array of filenames either locally or remotely
    url: 'http://doyban.com/cashninja/',
  };
  this.onSuccess = function(result) {
//    alert("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
//    alert("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
  }
  this.onError = function(msg) {
//    alert("Sharing failed with message: " + msg);
  }

  window.plugins.socialsharing.shareWithOptions(this.options, this.onSuccess, this.onError);
};

CashNinja.Menu.prototype.startExit = function () {
  navigator.app.exitApp();
};