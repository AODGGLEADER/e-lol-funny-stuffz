ModAPI.addEventListener('keyPress', function(event) {
    if (event.key === 'G') { // Change 'G' to the desired key
        openClickGUI(); // Call the function to open the click GUI
    }
});

// Function to display the click GUI at the center of the screen with a light blue color
function displayClickGUI() {
    let screenWidth = ModAPI.settings.overrideWidth; // Use screen width from settings
    let screenHeight = ModAPI.settings.overrideHeight; // Use screen height from settings
    let guiWidth = 100; // Adjust as needed
    let guiHeight = 50; // Adjust as needed

    let centerX = (screenWidth - guiWidth) / 2;
    let centerY = (screenHeight - guiHeight) / 2;

    // Draw rounded rectangle for GUI background with light blue color
    ModAPI.settings.pushMatrix();
    ModAPI.settings.color({ color: 0x8080FF }); // Light blue color
    ModAPI.settings.drawrect({ x: centerX, y: centerY, width: guiWidth, height: guiHeight });
    ModAPI.settings.popMatrix();

    // Add text or buttons to the GUI using ModAPI's rendering functions like drawStringWithShadow

    // Example: Display text in the center of the GUI
    let text = "Click GUI";
    let textWidth = ModAPI.settings.getStringWidth({ text: text });
    let textX = centerX + (guiWidth - textWidth) / 2;
    let textY = centerY + (guiHeight - ModAPI.settings.getFONT_HEIGHT()) / 2;

    ModAPI.settings.drawStringWithShadow({ text: text, x: textX, y: textY, color: 0xFFFFFF }); // White color for text
}
