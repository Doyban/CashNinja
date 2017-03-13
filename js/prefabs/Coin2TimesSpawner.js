var FruitNinja = FruitNinja || {};

FruitNinja.Coin2TimesSpawner = function (game_state, name, position, properties) {
  "use strict";
  FruitNinja.Spawner.call(this, game_state, name, position, properties); // Extend Spawner class.
};

FruitNinja.Coin2TimesSpawner.prototype = Object.create(FruitNinja.Spawner.prototype);
FruitNinja.Coin2TimesSpawner.prototype.constructor = FruitNinja.Coin2TimesSpawner;

FruitNinja.Coin2TimesSpawner.prototype.create_object = function (name, position, velocity) {
  "use strict";
  return new FruitNinja.Coin2Times(this.game_state, name, position, {texture: "fruits_spritesheet", group: "special_coins", frame: 1, velocity: velocity}); // Return new special coin.
};