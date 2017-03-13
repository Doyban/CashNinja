var CashNinja = CashNinja || {};

CashNinja.Coin2TimesSpawner = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

CashNinja.Coin2TimesSpawner.prototype = Object.create(CashNinja.Spawner.prototype);
CashNinja.Coin2TimesSpawner.prototype.constructor = CashNinja.Coin2TimesSpawner;

CashNinja.Coin2TimesSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new CashNinja.Coin2Times(this.game_state, name, position, {texture: "coins_spritesheet", group: "special_coins", frame: 1, velocity: velocity}); // Return new special coin.
};