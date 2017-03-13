var CashNinja = CashNinja || {};

CashNinja.TextPrefab = function (game_state, name, position, properties) {
  "use strict";
  Phaser.Text.call(this, game_state.game, position.x, position.y, properties.text, properties.style); // Extend Phaser.Text class.

  this.game_state = game_state; // Save game state.

  this.name = name; // Save game state name.

  this.game_state.groups[properties.group].add(this); // Add itself to the groups.

  // Take anchor properties from JSON.
  if (properties.anchor) {
    this.anchor.setTo(properties.anchor.x, properties.anchor.y);
  }

  this.game_state.prefabs[name] = this; // Add itself to the prefabs of the game.
};

CashNinja.TextPrefab.prototype = Object.create(Phaser.Text.prototype);
CashNinja.TextPrefab.prototype.constructor = CashNinja.TextPrefab;