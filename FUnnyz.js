// Assuming you have a custom API object named ModAPI
// and it provides a method to get the NBT data of the current item

ModAPI.require("player");

ModAPI.addEventListener("update", function () {
  var currentItem = ModAPI.player.inventory.currentItem;
  if (currentItem) {
    var nbtData = ModAPI.getNBTData(currentItem); // Assuming this method exists in your custom API
    ModAPI.displayToChat("NBT Data of Current Item: " + nbtData);
  }
});
