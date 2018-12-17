var CashNinja = CashNinja || {};

CashNinja.Money = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.TextPrefab.call(this, game_state, name, position, properties); // Extend TextPrefab class.
};

CashNinja.Money.prototype = Object.create(CashNinja.TextPrefab.prototype);
CashNinja.Money.prototype.constructor = CashNinja.Money;

CashNinja.Money.prototype.update = function () {
  "use strict";
  this.text = " " + localStorage.money; // Show current money of player.
};