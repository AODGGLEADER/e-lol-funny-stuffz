ModAPI.require("player")

ModAPI.addEventListener("update", function () {
  var currentItem = ModAPI.player.inventory.currentItem;
  if (currentItem) {
    setTimeout(function() {
      var nbtData = JSON.stringify(currentItem.getNBT(), null, 2); // Parse and format NBT data
      ModAPI.displayToChat({msg: "NBT Data of Current Item:\n" + nbtData});
    }, 1000); // Delay for 1 second before displaying NBT data
  }
})
