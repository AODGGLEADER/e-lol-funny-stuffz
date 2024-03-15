ModAPI.require("player")

ModAPI.addEventListener("update", function () {
  var currentItem = ModAPI.player.inventory.currentItem;
  if (currentItem) {
    var nbtData = currentItem.getNBT();
    ModAPI.displayToChat({msg: nbtData});
  }
})
