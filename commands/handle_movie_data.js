/*CMD
  command: handle_movie_data
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

let data = JSON.parse(content);
if (data.Response === "False") {
  Bot.sendMessage("❌ Movie not found.");
  return;
}
function getHDPoster(url) {
  if (!url.includes("@._V1_")) return url;
  return url.split("@._V1_")[0] + "@._V1_UX1280.jpg";
}


let imdb = User.getProperty("imdb_link");
let link480p = User.getProperty("link_480p");
let link720p = User.getProperty("link_720p");
let link1080p = User.getProperty("link_1080p");
let rottenTomatoes = "N/A";
if (data.Ratings) {
  for (let i = 0; i < data.Ratings.length; i++) {
    if (data.Ratings[i].Source === "Rotten Tomatoes") {
      rottenTomatoes = data.Ratings[i].Value;
      break;
    }
  }
}

let text = `🎬 *Movie:* ${data.title} (${data.year})

📊 *IMDb:* ${data.imdbRating}/10
⏳ *Duration:* ${data.runtime}
🌎 *Country:* ${data.country}
🗣 *Language:* ${data.language}
📟 *Genre:* ${data.genre}
🎬 *Director:* ${data.director}
✍️ *Writers:* ${data.writer}
🎭 *Actors:* ${data.actors}

[🎞 Poster](${getHDPoster(data.poster)})`;
Bot.setProperty("last_post", text, "string");
 
let buttons = [
    [
      { title: "📥 480p", url: link480p },
      { title: "📥 720p", url: link720p },
      { title: "📥 1080p", url: link1080p }
    ],
    [
      { title: "🤔 How to Download❓", url: "https://drive.google.com/file/d/1jnraaBfZ8M2ztcXAVKxU7C4Q6QBpOJS-" }
     ],
     [
      { title: "✅ Join Backup Channel", url: "https://t.me/backup_movies_channel" }
     ]
  ];
  Bot.setProperty("last_post_buttons", buttons, "json");
  let finalButtons = buttons.concat([
  [
    { title: "📢 Send to Channel", command: "/send_to_channel" }
  ]
]);
  Bot.sendInlineKeyboard(
 finalButtons ,
  text,
  { parse_mode: "Markdown" }
);

