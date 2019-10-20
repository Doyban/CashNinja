var CashNinja = CashNinja || {};

CashNinja.LoadingState = function () {
  "use strict";
  Phaser.State.call(this); // Extend Phaser.State class.
};

CashNinja.prototype = Object.create(Phaser.State.prototype);
CashNinja.prototype.constructor = CashNinja.LoadingState;

// Init data from BootState class.
CashNinja.LoadingState.prototype.init = function (level_data, next_state) {
  "use strict";
  this.level_data = level_data;
  this.next_state = next_state;
};

CashNinja.LoadingState.prototype.preload = function () {
  "use strict";
  // Load images for menu.
  this.load.image('invite', 'assets/images/invite.png', 48, 48);
  this.load.image('share', 'assets/images/share.png', 48, 48);
  this.load.image('shop', 'assets/images/shop.png', 48, 48);
  this.load.image('start', 'assets/images/start.png', 140, 62);

  // Load sounds.
  this.load.audio('cut', [
            'assets/sounds/cut.ogg',
            'assets/sounds/cut.mp3']
  );
  this.load.audio('game_over', [
            'assets/sounds/game_over.ogg',
            'assets/sounds/game_over.mp3']
  );
  this.load.audio('hit_bomb', [
            'assets/sounds/hit_bomb.ogg',
            'assets/sounds/hit_bomb.mp3']
  );
  this.load.audio('hit_coin', [
            'assets/sounds/hit_coin.ogg',
            'assets/sounds/hit_coin.mp3']
  );

  var assets, asset_loader, asset_key, asset;
  assets = this.level_data.assets;

  // this.load.image('start', 'assets/images/bomb.png');

  // Iterate through all asset.
  for (asset_key in assets) {
    if (assets.hasOwnProperty(asset_key)) {
      asset = assets[asset_key];
      // Load correct asset according to its type, image/spritesheet parameters are defined in JSON file.
      switch (asset.type) {
        case "image":
          this.load.image(asset_key, asset.source); // Load image.
          break;
        case "spritesheet":
          this.load.spritesheet(asset_key, asset.source, asset.frame_width, asset.frame_height, asset.frames, asset.margin, asset.spacing); // Load spritesheet.
          break;
      }
    }
  }
};

CashNinja.LoadingState.prototype.create = function () {
  "use strict";
  // this.game.state.start("GameState", true, false, this.level_data); // Start GameState state.
  this.game.state.start(this.next_state, true, false, this.level_data); // Start next level state.
};