var CashNinja = CashNinja || {};

// All prefabs in game can extend this class and add new functionalities.
CashNinja.Prefab = function (game_state, name, position, properties) {
  "use strict";
  Phaser.Sprite.call(this, game_state.game, position.x, position.y, properties.texture); // Extend Phaser.Sprite class.

  this.game_state = game_state; // Save game state.

  this.name = name; // Save game state name.

  this.game_state.groups[properties.group].add(this); // Add itself to the groups.

  if (properties.frame) {
    this.frame = properties.frame; // Set frame property.
  }

  if (properties.anchor) {
    this.anchor.setTo(properties.anchor.x, properties.anchor.y);
  }

  this.game_state.prefabs[name] = this; // It will add itself to the prefabs list in the game state.
};

CashNinja.Prefab.prototype = Object.create(Phaser.Sprite.prototype);
CashNinja.Prefab.prototype.constructor = CashNinja.Prefab;