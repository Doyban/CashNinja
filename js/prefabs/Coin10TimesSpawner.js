var FruitNinja = FruitNinja || {};

FruitNinja.Coin10TimesSpawner = function (game_state, name, position, properties) {
  "use strict";
  FruitNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

FruitNinja.Coin10TimesSpawner.prototype = Object.create(FruitNinja.Spawner.prototype);
FruitNinja.Coin10TimesSpawner.prototype.constructor = FruitNinja.Coin10TimesSpawner;

FruitNinja.Coin10TimesSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new FruitNinja.Coin10Times(this.game_state, name, position, {texture: "fruits_spritesheet", group: "special_coins", frame: 9, velocity: velocity}); // Return new special coin.
};