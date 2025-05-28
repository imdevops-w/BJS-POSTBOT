/*CMD
  command: /movies
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

User.setProperty("mode", "movie", "string");
Bot.sendMessage("🔗 Send IMDb link:");
Bot.runCommand("ask_links");
