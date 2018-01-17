var WR = WR || {};

WR.JSONLevelState = function () {
    "use strict";
    Phaser.State.call(this);
};

WR.JSONLevelState.prototype = Object.create(Phaser.State.prototype);
WR.JSONLevelState.prototype.constructor = WR.JSONLevelState;

 WR.JSONLevelState.prototype.init = function (level_data) {
   "use strict";
   this.level_data = level_data;
 };

 WR.JSONLevelState.prototype.create = function() {
   "use strict";
   this.groups = {};
   this.level_data.groups.forEach(function (group_name) {
      this.groups[group_name] = this.game.add.group();
      // if(this.groups.monster) {
      //   this.groups.monster.enableBody = true;
      //   game.physics.arcade.collide(this.groups.monster);
      // }
   }, this);

   this.prefabs = {};
   for (var prefab_name in this.level_data.prefabs) {
      var prefab_data = this.level_data.prefabs[prefab_name];
//      console.log(this.prefab_classes.hasOwnProperty(prefab_data.type));
      this.create_prefab(prefab_name, prefab_data);
  }

   this.user_input = this.game.plugins.add(WR.UserInput, this);

   this.user_inputs = {};
   for (var user_input_name in this.level_data.user_input) {
     this.user_inputs[user_input_name] = JSON.parse(this.game.cache.getText(user_input_name));
   };

   this.user_input.set_input(this.user_inputs[this.level_data.initial_user_input]);

 };

WR.JSONLevelState.prototype.create_prefab = function(prefab_name, prefab_data) {
    "use strict";
    if (this.prefab_classes.hasOwnProperty(prefab_data.type)) {
      var prefab = new this.prefab_classes[prefab_data.type](this, prefab_data.name,
         prefab_data.position, prefab_data.properties);
      }
      //game.physics.arcade.enable(prefab);
    return prefab;
 }
