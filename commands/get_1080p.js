/*CMD
  command: get_1080p
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

User.setProperty("link_1080p", message, "string");
let mode =User.getProperty("mode");
// Now run final command
Bot.sendMessage("⏳ Fetching details...");
if(mode == "movie"){
Bot.runCommand("final_movie_send");
}else{
Bot.runCommand("final_series_send");
}
