/*CMD
  command: renderGameList
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

let games = Bot.getProperty("games") || {};
Bot.sendText(JSON.stringify(Object.values(games)));
