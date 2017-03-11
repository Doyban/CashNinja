var FruitNinja = FruitNinja || {};

FruitNinja.LoadingState = function () {
  "use strict";
  Phaser.State.call(this); // Extend Phaser.State class.
};

FruitNinja.prototype = Object.create(Phaser.State.prototype);
FruitNinja.prototype.constructor = FruitNinja.LoadingState;

// Init data from BootState class.
FruitNinja.LoadingState.prototype.init = function (level_data, next_state) {
  "use strict";
  this.level_data = level_data;
  this.next_state = next_state;
};

FruitNinja.LoadingState.prototype.preload = function () {
  "use strict";
  var assets, asset_loader, asset_key, asset;
  assets = this.level_data.assets;
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

FruitNinja.LoadingState.prototype.create = function () {
  "use strict";
  // this.game.state.start("GameState", true, false, this.level_data); // Start GameState state.
  this.game.state.start(this.next_state, true, false, this.level_data); // Start next level state.
};