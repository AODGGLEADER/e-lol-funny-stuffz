ModAPI.require("player");

ModAPI.addEventListener("update", function () {
  var currentItem = ModAPI.player.inventory.currentItem;
  if (currentItem) {
    var nbtData = ModAPI.getNBTData(currentItem); // Assuming this method exists in your custom API
    ModAPI.displayToChat({msg: "NBT Data of Current Item: " + nbtData});
  }
});
