// Listen for right shift key press event
ModAPI.addEventListener('keyPress', function(event) {
    if (event.key === 'right_shift') {
        // Check if not in chat
        if (!isInChat()) {
            // Display rounded click GUI at center of screen
            displayRoundedGUI();
        }
    }
});

// Function to check if player is in chat
function isInChat() {
    // Implement logic to check if player is in chat interface
    return false; // Placeholder, implement actual check
}

// Function to display rounded click GUI at center of screen
function displayRoundedGUI() {
    let screenWidth = ModAPI.settings.displayWidth;
    let screenHeight = ModAPI.settings.displayHeight;
    let guiWidth = 100; // Adjust as needed
    let guiHeight = 50; // Adjust as needed

    let centerX = (screenWidth - guiWidth) / 2;
    let centerY = (screenHeight - guiHeight) / 2;

    // Draw rounded rectangle for GUI background
    ModAPI.GlStateManager.color({ color: 0x808080 }); // Gray color
    ModAPI.GlStateManager.drawRoundedRect({ x: centerX, y: centerY, width: guiWidth, height: guiHeight, radius: 5 });

    // Add text or buttons to the GUI using ModAPI's rendering functions
}
