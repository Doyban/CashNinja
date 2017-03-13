var CashNinja = CashNinja || {};

CashNinja.Coin9TimesSpawner = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

CashNinja.Coin9TimesSpawner.prototype = Object.create(CashNinja.Spawner.prototype);
CashNinja.Coin9TimesSpawner.prototype.constructor = CashNinja.Coin9TimesSpawner;

CashNinja.Coin9TimesSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new CashNinja.Coin9Times(this.game_state, name, position, {texture: "coins_spritesheet", group: "special_coins", frame: 8, velocity: velocity}); // Return new special coin.
};