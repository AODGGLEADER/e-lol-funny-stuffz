// Get the player's data
var player = ModAPI.player;

// Get the player's position and velocity
var position = player.position;
var velocity = player.velocity;

// Calculate the player's speed
var speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y + velocity.z * velocity.z);

// Draw the player's speed on the screen
var text = "Speed: " + speed.toFixed(2);
var textWidth = ModAPI.getStringWidth(text);
var textHeight = ModAPI.getFONT_HEIGHT();
var textX = (ModAPI.getdisplayWidth() - textWidth) / 2;
var textY = (ModAPI.getdisplayHeight() - textHeight) / 2;
ModAPI.drawStringWithShadow(text, textX, textY, 0xFFFFFF);

// Draw a rectangle around the player
var rectX = position.x - 5;
var rectY = position.y - 5;
var rectWidth = 10;
var rectHeight = 10;
ModAPI.drawRect(rectX, rectY, rectWidth, rectHeight, 0xFFFFFF);
