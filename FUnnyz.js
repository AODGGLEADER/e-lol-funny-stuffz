ModAPI.require("player")
ModAPI.addEventListener("update", function (){
  ModAPI.displayToChat({msg:
ModAPI.player.inventory.currentItem})
})
