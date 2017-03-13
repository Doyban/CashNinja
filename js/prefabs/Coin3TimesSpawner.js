var CashNinja = CashNinja || {};

CashNinja.Coin3TimesSpawner = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

CashNinja.Coin3TimesSpawner.prototype = Object.create(CashNinja.Spawner.prototype);
CashNinja.Coin3TimesSpawner.prototype.constructor = CashNinja.Coin3TimesSpawner;

CashNinja.Coin3TimesSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new CashNinja.Coin3Times(this.game_state, name, position, {texture: "coins_spritesheet", group: "special_coins", frame: 2, velocity: velocity}); // Return new special coin.
};