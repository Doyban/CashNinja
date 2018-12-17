var CashNinja = CashNinja || {};

CashNinja.Coin6TimesSpawner = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

CashNinja.Coin6TimesSpawner.prototype = Object.create(CashNinja.Spawner.prototype);
CashNinja.Coin6TimesSpawner.prototype.constructor = CashNinja.Coin6TimesSpawner;

CashNinja.Coin6TimesSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new CashNinja.Coin6Times(this.game_state, name, position, {texture: "coins_spritesheet", group: "special_coins", frame: 5, velocity: velocity}); // Return new special coin.
};