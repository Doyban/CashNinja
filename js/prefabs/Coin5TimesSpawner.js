var CashNinja = CashNinja || {};

CashNinja.Coin5TimesSpawner = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

CashNinja.Coin5TimesSpawner.prototype = Object.create(CashNinja.Spawner.prototype);
CashNinja.Coin5TimesSpawner.prototype.constructor = CashNinja.Coin5TimesSpawner;

CashNinja.Coin5TimesSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new CashNinja.Coin5Times(this.game_state, name, position, {texture: "coins_spritesheet", group: "special_coins", frame: 4, velocity: velocity}); // Return new special coin.
};