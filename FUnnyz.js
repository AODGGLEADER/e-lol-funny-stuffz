// Listen for right shift key press event
ModAPI.events.newEvent('keyPress');
ModAPI.events.listeners.keyPress = function(event) {
    if (event.key === 54) { // Keycode for right shift
        displayClickGUI();
    }
};

// Function to display the click GUI at the center of the screen with a light blue color
function displayClickGUI() {
    let screenWidth = ModAPI.settings.overrideWidth; // Use screen width from settings
    let screenHeight = ModAPI.settings.overrideHeight; // Use screen height from settings
    let guiWidth = 100; // Adjust as needed
    let guiHeight = 50; // Adjust as needed

    let centerX = (screenWidth - guiWidth) / 2;
    let centerY = (screenHeight - guiHeight) / 2;

    // Draw rounded rectangle for GUI background with light blue color
    ModAPI.GlStateManager.color({ color: 0x8080FF }); // Light blue color
    ModAPI.GlStateManager.drawRoundedRect({ x: centerX, y: centerY, width: guiWidth, height: guiHeight, radius: 5 });

    // Add text or buttons to the GUI using ModAPI's rendering functions like drawStringWithShadow
}
