var WR = WR || {};

WR.QuestionMenu = function (game_state, name, position, properties) {
    "use strict";
    WR.Prefab.call(this, game_state, name, position, properties);

    this.events.onInputDown.add(this.select, this);

};

WR.QuestionMenu.prototype = Object.create(WR.Prefab.prototype);
WR.QuestionMenu.prototype.constructor = WR.QuestionMenu;

WR.QuestionMenu.prototype.select = function () {
  "use strict";
  console.log(this.key + " selected");
};
