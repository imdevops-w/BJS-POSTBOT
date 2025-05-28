/*CMD
  command: ask_links
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

User.setProperty("imdb_link", message, "string");
Bot.sendMessage("📥 Send 480p link:");
Bot.runCommand("get_480p");
