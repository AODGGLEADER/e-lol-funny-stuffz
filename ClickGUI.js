ModAPI.require('player');
ModAPI.addEventListener("key", function(ev) {
    if (ev.key == 200) {
        ModAPI.displayToChat({
            msg: ModAPI.getProfileName()
        });
        ModAPI.displayToChat({
            msg: (ModAPI.player ? ModAPI.player.X : "")
        });
        ModAPI.displayToChat({
            msg: (ModAPI.player ? ModAPI.player.Y : "")
        });
        ModAPI.displayToChat({
            msg: (ModAPI.player ? ModAPI.player.Z : "")
        });
        ModAPI.displayToChat({
            msg: ModAPI.getFPS()
        });
    }
});
