/*CMD
  command: *
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /game
  group: 
CMD*/

let messages = message.toLowerCase();

// 🎭 Exact match for "ping"
if (messages === "ping") {
  Bot.sendMessage("🎭 *Pong!* \nAh! Thou hast summoned me with a mighty *PING!*⚡\nThe realms of cyberspace tremble at your command! 🕸️", { parse_mode: "Markdown" });
} else {
  var buttons = [
    { title: "🎮 Play Game!!", command: "/game" }
  ];
  Bot.sendInlineKeyboard(buttons, "Click here 👇👇");
}

