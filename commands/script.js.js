/*CMD
  command: script.js
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

function openGame(gameKey) {
    window.location.href = "<% options.GameFile %>&game="+gameKey;
}

function searchGames() {
    const query = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.game-card');

    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = title.includes(query) ? 'block' : 'none';
    });
}
// Assuming 'options' contains the passed data from WebApp
let gameData = options.games;
if (gameData) {
  // Parse the JSON string to get the array
  gameData = JSON.parse(gameData);
  
  // Now you can work with 'gameData', which is an array of game objects
  gameData.forEach(game => {
    console.log(game.name, game.thumbnail, game.description);
    // You can dynamically display game information using this data
  });
}

