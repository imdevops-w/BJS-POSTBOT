/*CMD
  command: /savegame
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Handling the data sent by the admin
var adminList = [5798778089,5664425847];
function isAdmin(userId) {
  return adminList.includes(userId);
}

if (isAdmin(user.telegramid) && message.startsWith("{")) {
  try {
    let game = JSON.parse(message);
    if (game.key && game.name && game.url && game.thumbnail && game.description) {
      // Fetch current saved games
      let games = Bot.getProperty("games") || {};

      // Save the new game data
      games[game.key] = game;

      // Update the games list in the bot's property
      Bot.setProperty("games", games, "object");

      // Notify the admin that the game has been added
      Bot.sendMessage("✅ Game added successfully:\n<b>" + game.name + "</b>", { parse_mode: "HTML" });
    } else {
      // If any field is missing
      Bot.sendMessage("❌ Missing fields! Please include key, name, description, thumbnail, and url.");
    }
  } catch (e) {
    // Error handling if the data format is wrong
    Bot.sendMessage("❌ Invalid JSON format. Please make sure to follow the exact format.");
  }
}

