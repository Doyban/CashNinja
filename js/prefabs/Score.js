var CashNinja = CashNinja || {};

CashNinja.Score = function (game_state, name, position, properties) {
  "use strict";
  CashNinja.TextPrefab.call(this, game_state, name, position, properties); // Extend TextPrefab class.
};

CashNinja.Score.prototype = Object.create(CashNinja.TextPrefab.prototype);
CashNinja.Score.prototype.constructor = CashNinja.Score;

CashNinja.Score.prototype.update = function () {
  "use strict";
  this.text = "Score: " + this.game_state.score; // Display score.
};