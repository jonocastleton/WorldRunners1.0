var WR = WR || {};

WR.BootState = function () {
    "use strict";
    Phaser.State.call(this);
};

    WR.BootState.prototype = Object.create(Phaser.State.prototype);
    WR.BootState.prototype.constructor = WR.BootState;

 WR.BootState.prototype.init = function (level_file, next_state) {
   "use strict";
   this.level_file = level_file;
   this.next_state = next_state;

   console.log(this.level_file);

   this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
   this.scale.pageAlignVertically = true;
   this.scale.pageAlignHorizontally = true;
 }

 WR.BootState.prototype.preload = function () {
   "use strict";
   this.load.text("level_file", this.level_file);
 };

 WR.BootState.prototype.create = function () {
   "use strict";
   var level_data = JSON.parse(this.game.cache.getText("level_file"));
   console.log(level_data);
   this.game.state.start("LoadingState", true, false, level_data, this.next_state);
 };
