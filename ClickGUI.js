ModAPI.addEventListener("key", function(ev) {
    if (ev.key == 200) {
        ModAPI.displayToChat({
            msg: ModAPI.getProfileName()
        });
    }
});
