var CashNinja = CashNinja || {};

CashNinja.MenuItem = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.Prefab.call(this, game_state, name, position, properties); // Extend TextPrefab class.

  this.anchor.setTo(0.5); // Set center of texture.
};

CashNinja.MenuItem.prototype = Object.create(CashNinja.Prefab.prototype);
CashNinja.MenuItem.prototype.constructor = CashNinja.MenuItem;

CashNinja.MenuItem.prototype.select = function () {
  "use strict";
  // The default item does nothing, it will be extended in different classes.
};