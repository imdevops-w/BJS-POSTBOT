/*CMD
  command: /start
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

  var buttons = [
    { title: "🎬 Movies", command: "/movies" },
    { title: "📺 TV Series", command: "/tv_series" },
    { title: "🎮 Add Game", command: "/add_game" }
  ];
  Bot.sendInlineKeyboard(buttons, "Welcome! Please choose an option:");
