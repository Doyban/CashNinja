var FruitNinja = FruitNinja || {};

FruitNinja.Coin9TimesSpawner = function (game_state, name, position, properties) {
  "use strict";
  FruitNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

FruitNinja.Coin9TimesSpawner.prototype = Object.create(FruitNinja.Spawner.prototype);
FruitNinja.Coin9TimesSpawner.prototype.constructor = FruitNinja.Coin9TimesSpawner;

FruitNinja.Coin9TimesSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new FruitNinja.Coin9Times(this.game_state, name, position, {texture: "fruits_spritesheet", group: "special_coins", frame: 8, velocity: velocity}); // Return new special coin.
};