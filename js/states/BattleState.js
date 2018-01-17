var WR = WR || {};

WR.BattleState = function () {
    "use strict";
    WR.JSONLevelState.call(this);

    this.prefab_classes = {
         player_unit: WR.Prefab.prototype.constructor,
         monster_spawner: WR.MonsterSpawner.prototype.constructor,
         background: WR.Prefab.prototype.constructor,
         menu_item: WR.QuestionMenu.prototype.constructor
        // text: WR.TextPrefab.prototype.constructor
    }
};

WR.BattleState.prototype = Object.create(WR.JSONLevelState.prototype);
WR.BattleState.prototype.constructor = WR.BattleState;


WR.BattleState.prototype.init = function(level_data) {
   "use strict";
   WR.JSONLevelState.prototype.init.call(this, level_data);

   this.game.physics.startSystem(Phaser.Physics.ARCADE);
   this.game.physics.arcade.gravity.y = 0;
};

WR.BattleState.prototype.create = function() {
  "use strict"

  console.log("Battle state created");

  WR.JSONLevelState.prototype.create.call(this);

}
