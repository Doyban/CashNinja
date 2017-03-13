var CashNinja = CashNinja || {};

CashNinja.Spawner = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Prefab.call(this, game_state, name, position, properties); // Extend Prefab class.

  this.pool = this.game_state.groups[properties.pool]; // Pools

  this.spawn_time = properties.spawn_time; // Spawn time.

  // Velocity.
  this.velocity_x = properties.velocity_x;
  this.velocity_y = properties.velocity_y;

  // Spawn timer.
  this.spawn_timer =  this.game_state.time.create();
  this.schedule_spawn();
};

CashNinja.Spawner.prototype = Object.create(CashNinja.Prefab.prototype);
CashNinja.Spawner.prototype.constructor = CashNinja.Spawner;

// Make interval of spawn.
CashNinja.Spawner.prototype.schedule_spawn = function () {
  "use strict";
  var time;
  time = this.game_state.rnd.between(this.spawn_time.min, this.spawn_time.max);
  this.spawn_timer.add(Phaser.Timer.SECOND * time, this.spawn, this);
  this.spawn_timer.start();
};

CashNinja.Spawner.prototype.spawn = function () {
  "use strict";
  var object_name, object_position, object, object_velocity;
  // Calculate position and velocity.
  object_position = new Phaser.Point(this.game_state.rnd.between(0.2 * this.game_state.game.world.width, 0.8 * this.game_state.game.world.width), 0); // Vertical position set between 20% to 80% of game world width, horizontal position set to 100%.
  object_velocity = new Phaser.Point(this.game_state.rnd.between(this.velocity_x.min, this.velocity_x.max), this.game_state.rnd.between(this.velocity_y.min, this.velocity_y.max)); // Value between maximum and minimum velocity.

  object = this.pool.getFirstDead();
  if (!object) {
    // If there is no dead object then create it.
    object_name = "object_" + this.pool.countLiving(); // object_ + number of created objects.
      object = this.create_object(object_name, object_position, object_velocity); // Create object.
  } else {
    // If there is dead object then reuse it.
    object.reset(object_position.x, object_position.y, object_velocity);
  }

  this.schedule_spawn(); // Schedule next spawn.
};