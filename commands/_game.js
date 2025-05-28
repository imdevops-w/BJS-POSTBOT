/*CMD
  command: /game
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

var wepApp = WebApp.getUrl({ command: "renderHome" });

var txt = `🎮 *Hello ${user.first_name}! Play some games*

🚀 Explore and play *awesome games* directly inside Telegram!

🔸 *Available Games:
  ├ Subway Surfers
  ├ Happy Wheels
  ├ Geometry Dash
  ├ Monster Truck Racing
  └ Temple Run*

✨ Tap *Open Games* to start playing now!

🕹️ * Fun Never Ends!*
`

Api.sendMessage({
  text: txt,
  reply_markup: { inline_keyboard: [
    [{ text: "Open Games", web_app: { url: wepApp } }]
  ]},
  parse_mode: "markdown"
});
