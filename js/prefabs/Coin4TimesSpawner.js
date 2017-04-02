var CashNinja = CashNinja || {};

CashNinja.Coin4TimesSpawner = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

CashNinja.Coin4TimesSpawner.prototype = Object.create(CashNinja.Spawner.prototype);
CashNinja.Coin4TimesSpawner.prototype.constructor = CashNinja.Coin4TimesSpawner;

CashNinja.Coin4TimesSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new CashNinja.Coin4Times(this.game_state, name, position, {texture: "coins_spritesheet", group: "special_coins", frame: 3, velocity: velocity}); // Return new special coin.
};