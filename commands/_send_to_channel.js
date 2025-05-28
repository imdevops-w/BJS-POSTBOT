/*CMD
  command: /send_to_channel
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

let msg = Bot.getProperty("last_post");
let flatButtons = Bot.getProperty("last_post_buttons");
var adminList = [5798778089,5664425847];

if (!msg || !flatButtons) {
  Bot.sendMessage("❌ No data to post.");
  return;
}

let convertedButtons = flatButtons.map(row => {
  // If it's an array (row of buttons), convert each item
  if (Array.isArray(row)) {
    return row.map(btn => ({
      text: btn.title,
      url: btn.url
    }));
  } else {
    // If it's flat, still ensure it's converted properly
    return [{ text: row.title, url: row.url }];
  }
});
function isAdmin(userId) {
  return adminList.includes(userId);
}
if (isAdmin(user.telegramid)) {
Api.sendMessage({
  chat_id: -1002591645932, // Replace with your actual channel
  text: msg,
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: convertedButtons
  }
});
Bot.sendMessage("✅ Sent to channel.");
Bot.runCommand("/start");
} else {
  Bot.sendMessage("😥😥 You are not an Admin!");
}

