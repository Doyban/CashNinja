var CashNinja = CashNinja || {};

CashNinja.Coin8TimesSpawner = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

CashNinja.Coin8TimesSpawner.prototype = Object.create(CashNinja.Spawner.prototype);
CashNinja.Coin8TimesSpawner.prototype.constructor = CashNinja.Coin8TimesSpawner;

CashNinja.Coin8TimesSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new CashNinja.Coin8Times(this.game_state, name, position, {texture: "coins_spritesheet", group: "special_coins", frame: 7, velocity: velocity}); // Return new special coin.
};