var FruitNinja = FruitNinja || {};

FruitNinja.Coin8TimesSpawner = function (game_state, name, position, properties) {
  "use strict";
  FruitNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

FruitNinja.Coin8TimesSpawner.prototype = Object.create(FruitNinja.Spawner.prototype);
FruitNinja.Coin8TimesSpawner.prototype.constructor = FruitNinja.Coin8TimesSpawner;

FruitNinja.Coin8TimesSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new FruitNinja.Coin8Times(this.game_state, name, position, {texture: "fruits_spritesheet", group: "special_coins", frame: 7, velocity: velocity}); // Return new special coin.
};