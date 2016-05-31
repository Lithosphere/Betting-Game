$(function() {

  $("#restart").hide();

  var player = {money: 100};
  var bet = $( '#bet' );
  var pick = $( '#pick' );

  $( '#restart' ).click(function( event ) {
    reset();
        if (player.money > 0) {
      console.log(" money is greater than 0")
      $( '#restart' ).hide();
    }
    else {
      console.log("money is less than zero")
      $("#restart").show();
    }
  });

  function reset() {
    player = {money: 100};
    return player.money
  }

  function randomizeNumber() {
    var randomNumber = (Math.random() * 10 );
    return Math.round(randomNumber);
  }

  function numberChecker(random, picked) {
    var difference = random - picked;
    return Math.abs(difference);
  }

  function gameAction(player, amount, difference) {
    if (difference > 1) {
      player.money = player.money - amount;
    }
    else if (difference == 0) {
      player.money = player.money + amount;
    }
    return player.money;
  }


function game() {

  $( 'form' ).submit(function( event ) 
  {
    var a = randomizeNumber();
    var bet_value = parseInt(bet.val());
    var pick_value = parseInt(pick.val());
    gameAction(player, bet_value, numberChecker(a, pick_value));
    alert("the random number chosen is: " + a);
    alert("player's current money: " + player.money);
    event.preventDefault();
    
    if (player.money > 0) {
      console.log(" money is greater than 0")
      $( '#restart' ).hide();
    }
    else {
      console.log("money is less than zero")
      $("#restart").show();
    }
  }); 
} //function game bracket

game();

});//main function() bracket

