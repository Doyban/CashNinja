var CashNinja = CashNinja || {};

CashNinja.Coin10TimesSpawner = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

CashNinja.Coin10TimesSpawner.prototype = Object.create(CashNinja.Spawner.prototype);
CashNinja.Coin10TimesSpawner.prototype.constructor = CashNinja.Coin10TimesSpawner;

CashNinja.Coin10TimesSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new CashNinja.Coin10Times(this.game_state, name, position, {texture: "coins_spritesheet", group: "special_coins", frame: 9, velocity: velocity}); // Return new special coin.
};