/*CMD
  command: get_720p
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

User.setProperty("link_720p", message, "string");
Bot.sendMessage("📥 Send 1080p link:");
Bot.runCommand("get_1080p");
