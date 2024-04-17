ModAPI.addEventListener("key", function(ev) {
    if (ev.key == 200) {
        ModAPI.displayToChat({
            msg: ModAPI.getProfileName()
        });
        ModAPI.displayToChat({
            msg: ModAPI.getFPS()
        });
        ModAPI.displayToChat({
            msg: you are gae hehehehaw
        });
    }
});
