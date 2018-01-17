var WR = WR || {};

WR.WorldState = function () {
    "use strict";
    WR.JSONLevelState.call(this);

    this.prefab_classes = {
         player: WR.Player.prototype.constructor,
         monster_spawner: WR.MonsterSpawner.prototype.constructor,
         sprite: WR.Prefab.prototype.constructor,
         door: WR.Door.prototype.constructor,
         npc: WR.NPC.prototype.constructor
        // text: WR.TextPrefab.prototype.constructor
    };

    this.TEXT_STYLE = {font: "14px arial", fill: "#000000"};
};

WR.WorldState.prototype = Object.create(WR.JSONLevelState.prototype);
WR.WorldState.prototype.constructor = WR.WorldState;


WR.WorldState.prototype.init = function(level_data) {
   "use strict";
   WR.JSONLevelState.prototype.init.call(this, level_data);

   this.game.physics.startSystem(Phaser.Physics.ARCADE);
   this.game.physics.arcade.gravity.y = 0;
};

WR.WorldState.prototype.preload = function() {
  "use strict";
  for (var npc_message_name in this.level_data.npc_messages) {
      this.load.text(npc_message_name, this.level_data.npc_messages[npc_message_name]);
  }
};


WR.WorldState.prototype.create = function() {
  "use strict";

  console.log("world state created");

  this.map = this.game.add.image(0, 0, this.level_data.map.key);
//  this.map.scale.setTo(2.5, 1.5);

  // var scene_index = 0;
  // this.map.scene.forEach(function(scene) {
  //     this.map.add.image(scene.name, this.level_data.map.scene[scene_index]);
  //     scene_index += 1;
  // }, this);

  WR.JSONLevelState.prototype.create.call(this);

  // this.groups.forEach(function(group) {
  //   if(group.properties.collision) {
//      this.groups.monster.setCollisionByExclusion([-1], true);
  //   }
  // }, this);

  // this.layers{};
  // this.map.layers.forEach(function(layer)) {
  //   this.layers[layer.name] = this.map.createLayer(layer.name);
  //   if(layer.properties.collision) {
  //     this.map.setCollisionByExclusion([-1], true, layer.name);
  //   }
  // }, this);

}

WR.WorldState.prototype.end_talk = function() {
  "use strict";
  this.current_message_box.kill();
  this.user_input.set_input(this.user_inputs.world_map_user_input);
};
