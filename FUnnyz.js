var guiVisible = false;

// Listen for right shift key press event
ModAPI.addEventListener('keydown', function(event) {
    if (event.keyCode === 16 && !isPlayerTyping()) { // Check if right shift key is pressed and player is not typing
        guiVisible = !guiVisible; // Toggle GUI visibility
    }
});

// Function to check if player is typing in chat
function isPlayerTyping() {
    return ModAPI.currentScreen() === "chat"; // Check if current screen is chat
}

// Function to draw the GUI
function drawGUI() {
    if (guiVisible) {
        // Draw background
        ModAPI.drawRect(50, 50, 300, 200, 0x333333); // Example background color

        // Draw tabs
        drawTab("Player", 60, 60);
        drawTab("Modifications", 160, 60);
        drawTab("GUI", 260, 60);

        // Draw search bar
        ModAPI.drawRect(60, 90, 260, 20, 0x666666); // Example search bar background
        ModAPI.drawStringWithShadow("Search", 65, 92, 0xFFFFFF); // Example search text

        // Draw content based on selected tab
        var selectedTab = getSelectedTab(); // Implement logic to determine selected tab
        switch (selectedTab) {
            case "Player":
                drawPlayerContent();
                break;
            case "Modifications":
                drawModificationsContent();
                break;
            case "GUI":
                drawGUIContent();
                break;
            default:
                break;
        }
    }
}

// Function to draw a tab
function drawTab(title, x, y) {
    ModAPI.drawRect(x, y, 90, 30, 0x555555); // Example tab background
    ModAPI.drawStringWithShadow(title, x + 5, y + 5, 0xFFFFFF); // Example tab text
}

// Function to draw player content under Player tab
function drawPlayerContent() {
    // Implement drawing player-related content here
}

// Function to draw modifications content under Modifications tab
function drawModificationsContent() {
    // Implement drawing modifications-related content here
}

// Function to draw GUI content under GUI tab
function drawGUIContent() {
    // Implement drawing GUI-related content here
}
