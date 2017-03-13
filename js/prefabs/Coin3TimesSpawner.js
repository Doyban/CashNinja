var FruitNinja = FruitNinja || {};

FruitNinja.Coin3TimesSpawner = function (game_state, name, position, properties) {
  "use strict";
  FruitNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

FruitNinja.Coin3TimesSpawner.prototype = Object.create(FruitNinja.Spawner.prototype);
FruitNinja.Coin3TimesSpawner.prototype.constructor = FruitNinja.Coin3TimesSpawner;

FruitNinja.Coin3TimesSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new FruitNinja.Coin3Times(this.game_state, name, position, {texture: "fruits_spritesheet", group: "special_coins", frame: 2, velocity: velocity}); // Return new special coin.
};