var CashNinja = CashNinja || {};

CashNinja.Cuttable = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Prefab.call(this, game_state, name, position, properties); // Extend Prefab class.

  this.anchor.setTo(0.5); // Center the image.
  this.scale.setTo(5); // Scale 5 times the image.

  this.game_state.game.physics.arcade.enable(this); // Enable physical body.

  // Set up velocity.
  this.velocity = properties.velocity;
  this.body.velocity.y = -this.velocity.y; // Go up.
  this.body.velocity.x = this.velocity.x;

  // Kill the object when it will leave the screen.
  this.checkWorldBounds = true;
  this.outOfBoundsKill = true;
};

CashNinja.Cuttable.prototype = Object.create(CashNinja.Prefab.prototype);
CashNinja.Cuttable.prototype.constructor = CashNinja.Cuttable;

// Reset objects.
CashNinja.Cuttable.prototype.reset = function (position_x, position_y, velocity) {
  "use strict";
  Phaser.Sprite.prototype.reset.call(this, position_x, position_y); // Extend reset method from Phaser.Sprite class.
  this.body.velocity.y = -velocity.y;
  this.body.velocity.x = velocity.x;
};

// Cut objects.
CashNinja.Cuttable.prototype.cut = function () {
  "use strict";
  var emitter;

  // Add emiter of cuttable objects.
  emitter = this.game_state.game.add.emitter(this.x, this.y);
  emitter.makeParticles("particle_image");

  // Minimum & maximum speed of objects.
  emitter.minParticleSpeed.setTo(-200, -200);
  emitter.maxParticleSpeed.setTo(200, 200);

  emitter.gravity = 0;

  /**
   * 1. parameter - it will be shows only ones,
   * 2. parameter - for how long it will live,
   * 4. parameter - number of emitter particles.
   */
  emitter.start(true, 700, null, 1000); // Start emitter.
};