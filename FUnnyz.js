// Listen for right shift key press event
ModAPI.addEventListener('keydown', function(event) {
    if (event.keyCode === 16) { // Check if right shift key is pressed (key code 16)
        // Activate your GUI interface here
        showModGUI();
    }
});

// Function to display the mod GUI
function showModGUI() {
    // Draw background
    ModAPI.drawRect(50, 50, 200, 150, 0x333333); // Example background color

    // Draw title
    ModAPI.drawStringWithShadow("Mod Menu", 60, 60, 0xFFFFFF); // Example title text

    // Draw mod list or buttons
    // Example: Display a list of available mods
    var mods = ["Mod A", "Mod B", "Mod C"];
    var y = 80;
    mods.forEach(function(mod, index) {
        ModAPI.drawStringWithShadow(mod, 60, y + index * 20, 0xFFFFFF);
    });
}
