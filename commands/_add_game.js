/*CMD
  command: /add_game
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adminList = [5798778089,5664425847];

function isAdmin(userId) {
  return adminList.includes(userId);
}
if (isAdmin(user.telegramid)) {
  Bot.sendMessage("🕹 Please send game details in this format:\n\n<pre>{\n  \"key\": \"tank-wars\",\n  \"name\": \"Tank Wars\",\n  \"description\": \"Classic tank battle game.\",\n  \"thumbnail\": \"https://example.com/tank.jpg\",\n  \"url\": \"https://games-online.io/game/tank1990/\"\n}</pre>", { parse_mode: "HTML" });
  Bot.runCommand("/savegame");
} else {
  Bot.sendMessage("😥😥 You are not an Admin!");
}
