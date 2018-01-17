var WR = WR || {};

WR.TitleState = function () {
    "use strict";
    WR.JSONLevelState.call(this);

    this.prefab_classes = {
        sprite: WR.Prefab.prototype.constructor,
        text: WR.TextPrefab.prototype.constructor
    }
};

    WR.TitleState.prototype = Object.create(WR.JSONLevelState.prototype);
    WR.TitleState.prototype.constructor = WR.TitleState;

// WR.TitleState.prototype.create = function () {
//     "use strict";
//     WR.JSONLevelState.prototype.create.call(this);
//
//     this.game.input.onDown.add(this.start_game, this);
// };

WR.TitleState.prototype.start_game = function () {
    "use strict";
    this.game.state.start("BootState", true, false, "assets/levels/intro.json", "IntroState")
}
