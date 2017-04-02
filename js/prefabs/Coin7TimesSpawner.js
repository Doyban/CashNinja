var CashNinja = CashNinja || {};

CashNinja.Coin7TimesSpawner = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

CashNinja.Coin7TimesSpawner.prototype = Object.create(CashNinja.Spawner.prototype);
CashNinja.Coin7TimesSpawner.prototype.constructor = CashNinja.Coin7TimesSpawner;

CashNinja.Coin7TimesSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new CashNinja.Coin7Times(this.game_state, name, position, {texture: "coins_spritesheet", group: "special_coins", frame: 6, velocity: velocity}); // Return new special coin.
};