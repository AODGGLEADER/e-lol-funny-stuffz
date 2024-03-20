ModAPI.addEventListener('keyPress', function(event) {
    if (event.key === 'right_shift') {
        if (!ModAPI.mcinstance.$currentScreen.includes("chat")) {
            displayClickGUI();
        }
    }
});

function displayClickGUI() {
    let screenWidth = ModAPI.settings.$displayWidth;
    let screenHeight = ModAPI.settings.$displayHeight;
    let guiWidth = 100; // Adjust as needed
    let guiHeight = 50; // Adjust as needed
    let centerX = (screenWidth - guiWidth) / 2;
    let centerY = (screenHeight - guiHeight) / 2;
    ModAPI.settings.color({ color: 0x808080 }); // Gray color
    ModAPI.settings.drawRoundedRect({ x: centerX, y: centerY, width: guiWidth, height: guiHeight, radius: 5 });
}
