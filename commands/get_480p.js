/*CMD
  command: get_480p
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

User.setProperty("link_480p", message, "string");
Bot.sendMessage("📥 Send 720p link:");
Bot.runCommand("get_720p");
