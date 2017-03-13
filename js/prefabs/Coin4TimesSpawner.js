var FruitNinja = FruitNinja || {};

FruitNinja.Coin4TimesSpawner = function (game_state, name, position, properties) {
  "use strict";
  FruitNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

FruitNinja.Coin4TimesSpawner.prototype = Object.create(FruitNinja.Spawner.prototype);
FruitNinja.Coin4TimesSpawner.prototype.constructor = FruitNinja.Coin4TimesSpawner;

FruitNinja.Coin4TimesSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new FruitNinja.Coin4Times(this.game_state, name, position, {texture: "fruits_spritesheet", group: "special_coins", frame: 3, velocity: velocity}); // Return new special coin.
};