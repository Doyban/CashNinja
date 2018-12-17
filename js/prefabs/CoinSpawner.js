var CashNinja = CashNinja || {};

CashNinja.CoinSpawner = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.

  this.frames = properties.frames;
};

CashNinja.CoinSpawner.prototype = Object.create(CashNinja.Spawner.prototype);
CashNinja.CoinSpawner.prototype.constructor = CashNinja.CoinSpawner;

CashNinja.CoinSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new CashNinja.Coin(this.game_state, name, position, {texture: "coins_spritesheet", group: "coins", frames: this.frames, velocity: velocity}); // Return new coin.
};