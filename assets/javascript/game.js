$(document).ready(function() {
    var charChosen = false;
    var myCharacter = "";
    var defender = "";
    var obiHP = 120;
    var lukeHP = 100;
    var sidiousHP = 150;
    var maulHP = 180;
    var yourAttackDmg = 8;
    var myHP;
    var enemyHP;
    var defenderNum = 3;
    var buttonAudio = document.getElementById("attackAudio");
    var bgAudio = document.getElementById("bgAudio");
    var loopBgMusic;

    //functions for determining when you win or lose 
    var loss = function() {
        if (myHP == 0 || myHP < 0) {
            $("p6").text("GAME OVER! You've been defeated (You have no more HP). Click Restart to try again.")
            $("#restart").css("visibility", "visible");
            $("p5").text("");
            $("p7").text("");
            $(".selectedDefender").text("");
        }
    }
    var winMatchObi = function() {
        if (obiHP == 0 || obiHP < 0) {
            $("p5").text("You've won the match against " + defender + ". Click on another enemy to fight them.");
            $("p6").text("");
            $("p7").text("");
            $(".selectedDefender").text("");
            defender = "";
            defenderNum--;
        }
    }

    var winMatchLuke = function() {
        if (lukeHP == 0 || lukeHP < 0) {
            $("p5").text("You've won the match against " + defender + ". Click on another enemy to fight them.");
            $("p6").text("");
            $("p7").text("");
            $(".selectedDefender").text("");
            defender = "";
            defenderNum--;
        }
    }

    var winMatchSidious = function() {
        if (sidiousHP == 0 || sidiousHP < 0) {
            $("p5").text("You've won the match against " + defender + ". Click on another enemy to fight them.");
            $("p6").text("");
            $("p7").text("");
            $(".selectedDefender").text("");
            defender = "";
            defenderNum--;
        }
    }

    var winMatchMaul = function() {
        if (maulHP == 0 || maulHP < 0) {
            $("p5").text("You've won the match against " + defender + ". Click on another enemy to fight them.");
            $("p6").text("");
            $("p7").text("");
            $(".selectedDefender").text("");
            defender = "";
            defenderNum--;
        }
    }

    var winGame = function() {
        if (defenderNum == 0 && myHP < 1) {
            $("p5").text("");
            $("p6").text("You've defeated everyone, but now you're gone too! It's a tie! Game over! Restart to play again!");
            $("#restart").css("visibility", "visible");
        } else if (defenderNum == 0 && myHP > 0) {
            $("p5").text("");
            $("p6").text("You won! Game over! Restart to play again!");
            $("#restart").css("visibility", "visible");
        }
    }
    
    //attack function 

    var attackFunction = function() {
        if (myCharacter == "") {
            alert("You haven't selected your character yet. Click on one of the four available here.");
        } else if (defender == "") {
            $("p5").text("There's no enemy here. Click on one of the available enemies to designate them as the defender.");
        } else if (myCharacter == "Obi-Wan-Kenobi" && defender == "Luke Skywalker") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 5 damage.");
            myHP = myHP - 5;
            $("p1").text(myHP);
            lukeHP = lukeHP - yourAttackDmg;
            $("p2").text(lukeHP);
            yourAttackDmg = yourAttackDmg + 8;
            winMatchLuke();
            winGame();
            loss();
        } else if (myCharacter == "Darth Maul" && defender == "Luke Skywalker") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 5 damage.");
            myHP = myHP - 5;
            $("p4").text(myHP);
            lukeHP = lukeHP - yourAttackDmg;
            $("p2").text(lukeHP);
            yourAttackDmg = yourAttackDmg + 8;
            winMatchLuke();
            winGame();
            loss();
        } else if (myCharacter == "Darth Sidious" && defender == "Luke Skywalker") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 5 damage.");
            myHP = myHP - 5;
            $("p3").text(myHP);
            lukeHP = lukeHP - yourAttackDmg;
            $("p2").text(lukeHP);
            yourAttackDmg = yourAttackDmg + 8;
            winMatchLuke();
            winGame();
            loss();
        } else if (myCharacter == "Luke Skywalker" && defender == "Obi-Wan-Kenobi") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 8 damage.");
            myHP = myHP - 8;
            $("p2").text(myHP);
            obiHP = obiHP - yourAttackDmg;
            $("p1").text(obiHP);
            yourAttackDmg = yourAttackDmg + 8;  
            winMatchObi();
            winGame();
            loss();
        } else if (myCharacter == "Darth Maul" && defender == "Obi-Wan-Kenobi") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 8 damage.");
            myHP = myHP - 8;
            $("p4").text(myHP);
            obiHP = obiHP - yourAttackDmg;
            $("p1").text(obiHP);
            yourAttackDmg = yourAttackDmg + 8;  
            winMatchObi();
            winGame();
            loss();
        } else if (myCharacter == "Darth Sidious" && defender == "Obi-Wan-Kenobi") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 8 damage.");
            myHP = myHP - 8;
            $("p3").text(myHP);
            obiHP = obiHP - yourAttackDmg;
            $("p1").text(obiHP);
            yourAttackDmg = yourAttackDmg + 8;  
            winMatchObi();
            winGame();
            loss();
        } else if (myCharacter == "Obi-Wan-Kenobi" && defender == "Darth Sidious") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 20 damage.");
            myHP = myHP - 20;
            $("p1").text(myHP);
            sidiousHP = sidiousHP - yourAttackDmg;
            $("p3").text(sidiousHP);
            yourAttackDmg = yourAttackDmg + 8;
            winMatchSidious();
            winGame();
            loss();    
        } else if (myCharacter == "Luke Skywalker" && defender == "Darth Sidious") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 20 damage.");
            myHP = myHP - 20;
            $("p2").text(myHP);
            sidiousHP = sidiousHP - yourAttackDmg;
            $("p3").text(sidiousHP);
            yourAttackDmg = yourAttackDmg + 8;   
            winMatchSidious();
            winGame();
            loss();
        } else if (myCharacter == "Darth Maul" && defender == "Darth Sidious") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 20 damage.");
            myHP = myHP - 20;
            $("p4").text(myHP);
            sidiousHP = sidiousHP - yourAttackDmg;
            $("p3").text(sidiousHP);
            yourAttackDmg = yourAttackDmg + 8; 
            winMatchSidious();
            winGame();
            loss();
        } else if (myCharacter == "Obi-Wan-Kenobi" && defender == "Darth Maul") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 25 damage.");
            myHP = myHP - 25;
            $("p1").text(myHP);
            maulHP = maulHP - yourAttackDmg;
            $("p4").text(maulHP);
            yourAttackDmg = yourAttackDmg + 8; 
            winMatchMaul();
            winGame();
            loss();
        } else if (myCharacter == "Luke Skywalker" && defender == "Darth Maul") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 25 damage.");
            myHP = myHP - 25;
            $("p2").text(myHP);
            maulHP = maulHP - yourAttackDmg;
            $("p4").text(maulHP);
            yourAttackDmg = yourAttackDmg + 8; 
            winMatchMaul();
            winGame();
            loss();
        } else if (myCharacter == "Darth Sidious" && defender == "Darth Maul") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 25 damage.");
            myHP = myHP - 25;
            $("p3").text(myHP);
            maulHP = maulHP - yourAttackDmg;
            $("p4").text(maulHP);
            yourAttackDmg = yourAttackDmg + 8; 
            winMatchMaul();
            winGame();
            loss();
        }
    }

    //declaring function for the attack sound 
    function playAttackAudio() {
        buttonAudio.play();
    }

    //declaring function for the background music
    function playBgAudio() {
        bgAudio.play();
    }
    
    function stopBgAudio() {
        bgAudio.pause();
    }

    function stopBgMusic() {
        clearInterval(loopBgMusic);
    }

    //button to play the background music
    $("#play").click(function() {
        playBgAudio();
        loopBgMusic = setInterval(function(){playBgAudio();},);
    });

    //button to stop the background music
    $("#pause").click(function() {
        stopBgAudio();
        stopBgMusic();
    });

    //what happens when you click each character 

    $("#Obi-Wan-Kenobi").click(function() {
        if (myCharacter =="") {
            myCharacter = "Obi-Wan-Kenobi";
            myHP = obiHP;
            $("#Luke-Skywalker").appendTo(".enemies-available");
            $("#Luke-Skywalker").css("background-color", "red");
            $("#Luke-Skywalker").css("border", "3px solid black");
            $("#Darth-Maul").appendTo(".enemies-available");
            $("#Darth-Maul").css("background-color", "red");
            $("#Darth-Maul").css("border", "3px solid black");
            $("#Darth-Sidious").appendTo(".enemies-available");
            $("#Darth-Sidious").css("background-color", "red");
            $("#Darth-Sidious").css("border", "3px solid black");
            $(".enemies-available").css("display", "inline-flex");
        } else if (myCharacter == "Obi-Wan-Kenobi") {
            alert("Your character is already " + myCharacter + ". You can't fight yourself. Refresh the page to switch your character.");
        } else if (defender == "") {
            $("#Obi-Wan-Kenobi").appendTo(".selectedDefender");
            $("#Obi-Wan-Kenobi").css("background-color", "black");
            $("#Obi-Wan-Kenobi").css("color", "white");
            $("#Obi-Wan-Kenobi").css("border", "3px solid green");
            defender = "Obi-Wan-Kenobi";
            enemyHP = obiHP;
            $("p5").text("");
        } else {
            alert("Note for if your character is still alive: You've already picked one defender. You can only fight one enemy at a time.");
        }
    });

    $("#Luke-Skywalker").click(function() {
        if (myCharacter =="") {
            myCharacter = "Luke Skywalker";
            myHP = lukeHP;
            $("#Obi-Wan-Kenobi").appendTo(".enemies-available");
            $("#Obi-Wan-Kenobi").css("background-color", "red");
            $("#Obi-Wan-Kenobi").css("border", "3px solid black");
            $("#Darth-Maul").appendTo(".enemies-available");
            $("#Darth-Maul").css("background-color", "red");
            $("#Darth-Maul").css("border", "3px solid black");
            $("#Darth-Sidious").appendTo(".enemies-available");
            $("#Darth-Sidious").css("background-color", "red");
            $("#Darth-Sidious").css("border", "3px solid black");
            $(".enemies-available").css("display", "inline-flex");
        } else if (myCharacter == "Luke Skywalker") {
            alert("Your character is already " + myCharacter + ". You can't fight yourself. Refresh the page to switch your character.");
        } else if (defender == "") {
            $("#Luke-Skywalker").appendTo(".selectedDefender");
            $("#Luke-Skywalker").css("background-color", "black");
            $("#Luke-Skywalker").css("color", "white");
            $("#Luke-Skywalker").css("border", "3px solid green");
            defender = "Luke Skywalker";
            enemyHP = lukeHP;
            $("p5").text("");
        } else {
            alert("Note for if your character is still alive: You've already picked one defender. You can only fight one enemy at a time.");
        }
    });

    $("#Darth-Sidious").click(function() {
        if (myCharacter =="") {
            myCharacter = "Darth Sidious";
            myHP = sidiousHP;
            $("#Luke-Skywalker").appendTo(".enemies-available");
            $("#Luke-Skywalker").css("background-color", "red");
            $("#Luke-Skywalker").css("border", "3px solid black");
            $("#Darth-Maul").appendTo(".enemies-available");
            $("#Darth-Maul").css("background-color", "red");
            $("#Darth-Maul").css("border", "3px solid black");
            $("#Obi-Wan-Kenobi").appendTo(".enemies-available");
            $("#Obi-Wan-Kenobi").css("background-color", "red");
            $("#Obi-Wan-Kenobi").css("border", "3px solid black");
            $(".enemies-available").css("display", "inline-flex");
        } else if (myCharacter == "Darth Sidious") {
            alert("Your character is already " + myCharacter + ". You can't fight yourself. Refresh the page to switch your character.");
        } else if (defender == "") {
            $("#Darth-Sidious").appendTo(".selectedDefender");
            $("#Darth-Sidious").css("background-color", "black");
            $("#Darth-Sidious").css("color", "white");
            $("#Darth-Sidious").css("border", "3px solid green");
            defender = "Darth Sidious";
            enemyHP = sidiousHP;
            $("p5").text("");
        } else {
            alert("Note for if your character is still alive: You've already picked one defender. You can only fight one enemy at a time.");
        }
    });

    $("#Darth-Maul").click(function() {
        if (myCharacter =="") {
            myCharacter = "Darth Maul";
            myHP = maulHP;
            $("#Luke-Skywalker").appendTo(".enemies-available");
            $("#Luke-Skywalker").css("background-color", "red");
            $("#Luke-Skywalker").css("border", "3px solid black");
            $("#Obi-Wan-Kenobi").appendTo(".enemies-available");
            $("#Obi-Wan-Kenobi").css("background-color", "red");
            $("#Obi-Wan-Kenobi").css("border", "3px solid black");
            $("#Darth-Sidious").appendTo(".enemies-available");
            $("#Darth-Sidious").css("background-color", "red");
            $("#Darth-Sidious").css("border", "3px solid black");
            $(".enemies-available").css("display", "inline-flex");
        } else if (myCharacter == "Darth Maul") {
            alert("Your character is already " + myCharacter + ". You can't fight yourself. Refresh the page to switch your character.");
        } else if (defender == "") {
            $("#Darth-Maul").appendTo(".selectedDefender");
            $("#Darth-Maul").css("background-color", "black");
            $("#Darth-Maul").css("color", "white");
            $("#Darth-Maul").css("border", "3px solid green");
            defender = "Darth Maul";
            enemyHP = maulHP;
            $("p5").text("");
        } else {
            alert("Note for if your character is still alive: You've already picked one defender. You can only fight one enemy at a time.");
        }
    });

    //action for calling attackfunction 

    $("#attack").click(function() {
        if (myHP > 0) {
            attackFunction();
            playAttackAudio();
        }
    });
    //action for calling refreshing window 
    $("#restart").click(function() {
        location.reload();
    });



});