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
var loss = function() {
    if (myHP == 0 || myHP < 0) {
        $("p5").text("You've been defeated by " + defender + " Click restart to try again.")
    }
}

    $("#Obi-Wan-Kenobi").click(function() {
        if (myCharacter =="") {
            myCharacter = "Obi-Wan-Kenobi";
            myHP = obiHP;
            $("#Luke-Skywalker").appendTo(".enemies-available");
            $("#Darth-Maul").appendTo(".enemies-available");
            $("#Darth-Sidious").appendTo(".enemies-available");
            $(".enemies-available").css("display", "inline-flex");
        } else if (myCharacter == "Obi-Wan-Kenobi") {
            alert("Your character is already " + myCharacter + ". You can't fight yourself. Refresh the page to switch your character.");
        } else if (defender == "") {
            $("#Obi-Wan-Kenobi").appendTo(".defender-row");
            defender = "Obi-Wan-Kenobi";
            $("p5").text("");
        } else {
            alert("You've already picked one defender. You can only fight one enemy at a time.");
        }
    });

    $("#Luke-Skywalker").click(function() {
        if (myCharacter =="") {
            myCharacter = "Luke Skywalker";
            myHP = lukeHP;
            $("#Obi-Wan-Kenobi").appendTo(".enemies-available");
            $("#Darth-Maul").appendTo(".enemies-available");
            $("#Darth-Sidious").appendTo(".enemies-available");
            $(".enemies-available").css("display", "inline-flex");
        } else if (myCharacter == "Luke Skywalker") {
            alert("Your character is already " + myCharacter + ". You can't fight yourself. Refresh the page to switch your character.");
        } else if (defender == "") {
            $("#Luke-Skywalker").appendTo(".defender-row");
            defender = "Luke Skywalker";
            $("p5").text("");
        } else {
            alert("You've already picked one defender. You can only fight one enemy at a time.");
        }
    });

    $("#Darth-Sidious").click(function() {
        if (myCharacter =="") {
            myCharacter = "Darth Sidious";
            myHP = sidiousHP;
            $("#Obi-Wan-Kenobi").appendTo(".enemies-available");
            $("#Darth-Maul").appendTo(".enemies-available");
            $("#Luke-Skywalker").appendTo(".enemies-available");
            $(".enemies-available").css("display", "inline-flex");
        } else if (myCharacter == "Darth Sidious") {
            alert("Your character is already " + myCharacter + ". You can't fight yourself. Refresh the page to switch your character.");
        } else if (defender == "") {
            $("#Darth-Sidious").appendTo(".defender-row");
            defender = "Darth Sidious";
            $("p5").text("");
        } else {
            alert("You've already picked one defender. You can only fight one enemy at a time.");
        }
    });

    $("#Darth-Maul").click(function() {
        if (myCharacter =="") {
            myCharacter = "Darth Maul";
            myHP = maulHP;
            $("#Obi-Wan-Kenobi").appendTo(".enemies-available");
            $("#Darth-Sidious").appendTo(".enemies-available");
            $("#Luke-Skywalker").appendTo(".enemies-available");
            $(".enemies-available").css("display", "inline-flex");
        } else if (myCharacter == "Darth Maul") {
            alert("Your character is already " + myCharacter + ". You can't fight yourself. Refresh the page to switch your character.");
        } else if (defender == "") {
            $("#Darth-Maul").appendTo(".defender-row");
            defender = "Darth Maul";
            $("p5").text("");
        } else {
            alert("You've already picked one defender. You can only fight one enemy at a time.");
        }
    });

    $("#attack").click(function() {
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
        } else if (myCharacter == "Darth Maul" && defender == "Luke Skywalker") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 5 damage.");
            myHP = myHP - 5;
            $("p4").text(myHP);
            lukeHP = lukeHP - yourAttackDmg;
            $("p2").text(lukeHP);
            yourAttackDmg = yourAttackDmg + 8;
        } else if (myCharacter == "Darth Sidious" && defender == "Luke Skywalker") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 5 damage.");
            myHP = myHP - 5;
            $("p3").text(myHP);
            lukeHP = lukeHP - yourAttackDmg;
            $("p2").text(lukeHP);
            yourAttackDmg = yourAttackDmg + 8;
        } else if (myCharacter == "Luke Skywalker" && defender == "Obi-Wan-Kenobi") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 8 damage.");
            myHP = myHP - 8;
            $("p2").text(myHP);
            obiHP = obiHP - yourAttackDmg;
            $("p1").text(obiHP);
            yourAttackDmg = yourAttackDmg + 8;  
        } else if (myCharacter == "Darth Maul" && defender == "Obi-Wan-Kenobi") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 8 damage.");
            myHP = myHP - 8;
            $("p4").text(myHP);
            obiHP = obiHP - yourAttackDmg;
            $("p1").text(obiHP);
            yourAttackDmg = yourAttackDmg + 8;  
        } else if (myCharacter == "Darth Sidious" && defender == "Obi-Wan-Kenobi") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 8 damage.");
            myHP = myHP - 8;
            $("p3").text(myHP);
            obiHP = obiHP - yourAttackDmg;
            $("p1").text(obiHP);
            yourAttackDmg = yourAttackDmg + 8;  
        } else if (myCharacter == "Obi-Wan-Kenobi" && defender == "Darth Sidious") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 20 damage.");
            myHP = myHP - 20;
            $("p1").text(myHP);
            sidiousHP = sidiousHP - yourAttackDmg;
            $("p3").text(sidiousHP);
            yourAttackDmg = yourAttackDmg + 8;    
        } else if (myCharacter == "Luke Skywalker" && defender == "Darth Sidious") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 20 damage.");
            myHP = myHP - 20;
            $("p2").text(myHP);
            sidiousHP = sidiousHP - yourAttackDmg;
            $("p3").text(sidiousHP);
            yourAttackDmg = yourAttackDmg + 8;   
        } else if (myCharacter == "Darth Maul" && defender == "Darth Sidious") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 20 damage.");
            myHP = myHP - 20;
            $("p4").text(myHP);
            sidiousHP = sidiousHP - yourAttackDmg;
            $("p3").text(sidiousHP);
            yourAttackDmg = yourAttackDmg + 8; 
        } else if (myCharacter == "Obi-Wan-Kenobi" && defender == "Darth Maul") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 25 damage.");
            myHP = myHP - 25;
            $("p1").text(myHP);
            maulHP = maulHP - yourAttackDmg;
            $("p4").text(maulHP);
            yourAttackDmg = yourAttackDmg + 8; 
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
        } else if (myCharacter == "Darth Sidious" && defender == "Darth Maul") {
            // alert("You are fighting " + defender + " and you are " + myCharacter);
            $("p6").text("You attacked " + defender + " for " + yourAttackDmg + " damage.");
            $("p7").text(defender + " attacked you back for 25 damage.");
            myHP = myHP - 25;
            $("p3").text(myHP);
            maulHP = maulHP - yourAttackDmg;
            $("p4").text(maulHP);
            yourAttackDmg = yourAttackDmg + 8; 
        }
    });

});