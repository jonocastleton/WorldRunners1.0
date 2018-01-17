var WR = WR || {};

WR.LoadingState = function () {
    "use strict";
    Phaser.State.call(this);
};

    WR.LoadingState.prototype = Object.create(Phaser.State.prototype);
    WR.LoadingState.prototype.constructor = WR.LoadingState;


WR.LoadingState.prototype.init = function (level_data, next_state) {
  "use strict";
  this.level_data = level_data;
  this.next_state = next_state;

  var loading_message = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Loading",
  {font: "48px Arial", fill: "#ffffff"});
  loading_message.anchor.setTo(0.5, 0.5);
};

WR.LoadingState.prototype.preload = function () {
  "use strict";

  var assets = this.level_data.assets;
  for (var asset_key in assets) {
     var asset = assets[asset_key];
     switch (asset.type) {
       case "image":
          this.load.image(asset_key, asset.source);
          break;
       case "spritesheet":
          this.load.spritesheet(asset_key, asset.source, asset.frame_width, asset.frame_height,
          asset.frames, asset.margin, asset.spacing);
          break;
       case "player":
         this.load.sprite(asset_key, asset.source);
         break;
       case "building":
         this.load.image(asset_key, asset.source);
         break;
     }
   }
   console.log(this.level_data);

   for (var user_input_name in this.level_data.user_input) {
     this.load.text(user_input_name, this.level_data.user_input[user_input_name]);
   }
  };

  WR.LoadingState.prototype.create = function () {
    "use strict";
    console.log('starting next_state');
    this.game.state.start(this.next_state, true, false, this.level_data);

  };
