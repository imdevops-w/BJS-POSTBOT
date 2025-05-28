/*CMD
  command: final_series_send
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

let imdb = User.getProperty("imdb_link");
let link480p = User.getProperty("link_480p");
let link720p = User.getProperty("link_720p");
let link1080p = User.getProperty("link_1080p");

let imdbID = imdb.match(/tt\d{7,8}/)[0];
let url = "https://imdevops.in/v3Api/?imdbID=" + imdbID;

HTTP.get({
  url: url,
  success: "handle_series_data",
  error: "handle_error"
});

