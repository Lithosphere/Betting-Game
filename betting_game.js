var player1 = {money: 100};
var player2 = {money: 100};



function randomizeNumber() {
  random = (Math.random() * 10 + 1);
  return parseInt(random, 10);
}

function numberChecker(random, picked) {
  var difference = random - picked;
  if (difference < 0) {
    return difference * -1;
  }
  else {
    return difference;
  }
}

function gameAction(player, amount, difference) {
  if (difference > 1) {
    player.money = player.money - amount;
    return player.money;
  }
  else if (difference == 0) {
    player.money = player.money + amount;
    return player.money;
  }
  else if (difference == 1) {
    return player.money;
  }
}

// var bet = prompt("Please enter your bet from 5 to 10", 5);

function betChecker(bet) {
  while (bet < 5 || bet > 10) {
    if (bet == null) {
      break;
    }
    bet = prompt("Please enter your bet from 5 to 10, you did not follow instructions last time.", 5);
  }
}
function pickChecker(pick) {
  while (pick < 1 || pick > 10) {
    if (pick == null) {
      break;
    }
    pick = prompt("Please choose a number between 1 to 10, you did not follow instructions last time.");
  }
}
function game(player1, player2) {
  while (player1.money > 0 && player2.money > 0) {
      window.alert("Welcome! Player 1, it's your turn!");
      var bet = prompt("Please enter your bet from 5 to 10", 5);
      betChecker(bet);
      var pick = prompt("Please choose a number between 1 to 10");
      pickChecker(pick);
      var a = parseInt(randomizeNumber());
      alert("the number chosen is: " + a);
      gameAction(player1, bet, numberChecker(a, pick));
      alert("player 1's current money: " + player1.money);

      window.alert("Player 2! It's your turn!");
      var bet = prompt("Please enter your bet from 5 to 10", 5);
      betChecker(bet);
      var pick = prompt("Please choose a number between 1 to 10");
      pickChecker(pick);
      var a = parseInt(randomizeNumber());
      alert("the number chosen is: " + a);
      gameAction(player2, bet, numberChecker(a, pick));
      alert("player 2's current money: " + player2.money)
  }
  alert("GAME OVER!!!");
}

