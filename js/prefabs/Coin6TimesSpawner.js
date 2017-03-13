var FruitNinja = FruitNinja || {};

FruitNinja.Coin6TimesSpawner = function (game_state, name, position, properties) {
  "use strict";
  FruitNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

FruitNinja.Coin6TimesSpawner.prototype = Object.create(FruitNinja.Spawner.prototype);
FruitNinja.Coin6TimesSpawner.prototype.constructor = FruitNinja.Coin6TimesSpawner;

FruitNinja.Coin6TimesSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new FruitNinja.Coin6Times(this.game_state, name, position, {texture: "fruits_spritesheet", group: "special_coins", frame: 5, velocity: velocity}); // Return new special coin.
};