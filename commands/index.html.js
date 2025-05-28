/*CMD
  command: index.html
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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>DS Network Games</title>
    <script src="https://telegram.org/js/telegram-web-app.js?56"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="<% options.CSSFile %>">
</head>
<body>

<nav class="navbar">
    <h1><i class="fas fa-gamepad"></i> DS Games</h1>
    <div class="search-bar">
           <span class="search-icon"><i class="fas fa-search"></i></span> 
           <input type="text" id="search" placeholder="Search games..." oninput="searchGames()"> 
    </div>
</nav>
<a class="requests-btn" href="<% options.RequestForm %>"><i class="fas fa-comments"></i> Request New Game</a>
<div class="games-list">
<div class="game-card" onclick="openGame('ball-sort')">
        <img src="https://only-games.github.io/projects/ball-sort-puzzle/thumb.png" alt="Game Thumbnail">
        <h3>Ball Short Puzzel</h3>
        <p>Short the ball on tube!</p>
    </div>
<div class="game-card" onclick="openGame('tank-wars')">
        <img src="https://img.gamepix.com/games/tank-wars/icon/tank-wars.png" alt="Game Thumbnail">
        <h3>Tank Wars</h3>
        <p>Outmaneuver and blast your way to victory in Tank Wars!</p>
    </div>
 <div class="game-card" onclick="openGame('zombie-shooter')">
        <img src="https://img.gamepix.com/games/zombie-shooter-apocalypse/icon/zombie-shooter-apocalypse.png" alt="Game Thumbnail">
        <h3>Zombie Shooter</h3>
        <p>Arm yourself as an elite sniper in a bleak world overrun by zombies!</p>
    </div>
    <div class="game-card" onclick="openGame('subway-surfers')">
        <img src="https://i.ibb.co/9msf97SJ/image.png" alt="Game Thumbnail">
        <h3>Subway Surfers</h3>
        <p>Run, dodge, and surf the subway!</p>
    </div>

    <div class="game-card" onclick="openGame('temple-run')">
        <img src="https://i.ibb.co/GfGKv5Mh/image.png" alt="Game Thumbnail">
        <h3>Temple Run - Holi</h3>
        <p>Run, escape, and dodge all obstacles!</p>
    </div>
    
    <div class="game-card" onclick="openGame('stack-bounce')">
        <img src="https://i.ibb.co/Xq8w3X3/image.png" alt="Game Thumbnail">
        <h3>Stack Bounce</h3>
        <p>Smash stacks with bouncing ball fun!</p>
    </div>

    <div class="game-card" onclick="openGame('pac-man')">
        <img src="https://i.ibb.co/bM10N3PD/image.png" alt="Game Thumbnail">
        <h3>Pac Man</h3>
        <p>Eat dots, avoid ghosts, classic maze!</p>
    </div>

    <div class="game-card" onclick="openGame('happy-wheels')">
        <img src="https://i.ibb.co/pvr8vfgT/image.png" alt="Game Thumbnail">
        <h3>Happy Wheels</h3>
        <p>(For PC) Crazy physics racing with hilarious crashes!</p>
    </div>

    <div class="game-card" onclick="openGame('geometry-dash')">
        <img src="https://i.ibb.co/rR5xMZgm/image.png" alt="Game Thumbnail">
        <h3>Geometry Dash</h3>
        <p>Jump, dodge, and survive the beat!</p> 
    </div>

    <div class="game-card" onclick="openGame('tunnel-rush')">
        <img src="https://i.ibb.co/Rp45gJLv/image.png" alt="Game Thumbnail">
        <h3>Tunnel Rush</h3>
        <p>Dodge obstacles in colorful fast tunnel!</p>
    </div>

    <div class="game-card" onclick="openGame('monster-truck')">
        <img src="https://i.ibb.co/MDK3DFLx/image.png" alt="Game Thumbnail">
        <h3>Monster Truck</h3>
        <p>(For PC) Race monster trucks to the finish!</p>
    </div>
     <div class="game-card" onclick="openGame('car-crash')">
        <img src="https://img.gamepix.com/games/car-crash-test/icon/car-crash-test.png" alt="Game Thumbnail">
        <h3>Car Crash Test</h3>
        <p>Unleash chaos in Car Crash Test!</p>
    </div>
<div class="game-card" onclick="openGame('mario')">
        <img src="https://games-online.io/upload/cache/upload/imgs/mario-m300x165.png" alt="Game Thumbnail">
        <h3>Mario</h3>
        <p>(For PC)Play Mario old memory!</p>
    </div>
</div>

<script src="<% options.JSFile %>"></script>
<script>
</script>
</body>
</html>
