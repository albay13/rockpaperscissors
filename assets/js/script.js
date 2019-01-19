    $(document).ready(function(){
        var choices = ['rock', 'paper', "scissors"],computerScore =0,yourScore = 0,counter = 0,round = 1,computerChoice,playerChoice;
        var overall_round = 0;
        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        });
        $(".your-title").hide();
        $(".opponent-title").hide();
        $("#btn-start").on('click',function(){
            $(this).hide();
            $(".number-of-rounds-overlay").css("width","100%");
            $("#starting-card").css("display","block");
        });
        $(".round-btn").on('click',function(){
             $(".number-of-rounds-overlay").css("width","0%");
             $("#starting-screen").css("width","0%");
             overall_round = $(this).attr('value');
             $("#overall_rounds").text(overall_round);
        });
        $(".weapon li").on('click',function(){
            $(".try-overlay").css("width","0%");
            computerChoice = computerDecision();
            playerChoice = $(this).data("weapon");
            $("#playerChoice").addClass(playerChoice)
            $("#computerChoice").addClass(computerChoice);
            $(".chosen-weapon").addClass("slideIn-your-weap");
            $(".your-choice").addClass("slide-your-text");
            $(".opponent-weapon").addClass("slideIn-opp-weap");
            $(".opponent-choice").addClass("slide-opp-text");
            setTimeout(function(){
                decideWinner(playerChoice,computerChoice);
                setScore();
            },3500);
        });
        function computerDecision() {
            var randomChoice = Math.floor(Math.random() * choices.length);
            return choices[randomChoice];
        }
        function decideWinner(playerChoice,computerChoice){
            if(playerChoice === computerChoice){
               $("#result-overlay").css('height',"100%");
               $("#text").text("It's a Tie!");
               round++;
               counter++;
            }else if(playerChoice === 'rock'){
                switch(computerChoice){
                    case "scissors":
                        yourScore++;
                        round++;
                        counter++;
                        $("#result-overlay").css('height',"100%");
                        $("#text").text("You win the round!");
                    break;
                    case "paper":
                        computerScore++;
                        round++;
                        counter++;
                        $("#result-overlay").css('height',"100%");
                        $("#text").text("Computer win the round!");
                    break;
                }
            }else if(playerChoice === "paper"){
                switch(computerChoice){
                    case "scissors":
                        computerScore++;
                        round++;
                        counter++;
                        $("#result-overlay").css('height',"100%");
                        $("#text").text("Computer win the round!");
                    break;
                    case "rock":
                        yourScore++;
                        round++;
                        counter++;
                        $("#result-overlay").css('height',"100%");
                        $("#text").text("You win the round!");
                    break;
                }
            }else{
                switch(computerChoice){
                    case "rock":
                        computerScore++;
                        round++;
                        counter++;
                        $("#result-overlay").css('height',"100%");
                        $("#text").text("Computer win the round!");
                    break;
                    case "paper":
                        yourScore++;
                        round++;
                        counter++;
                        $("#result-overlay").css('height',"100%");
                        $("#text").text("You win the round!");
                    break;
                }
            }

        }
        function setScore(){
            $("#your_score").text(yourScore);
            $("#cmp_score").text(computerScore);
            if(counter == overall_round){
               $("#btn-overlay").hide();
               $("#overall-overlay").css("width","100%");
               if(yourScore > computerScore){
                    $("#text-overlay").text("Well Done!");
                    $("#p-overlay").text("You won against the computer!");
               }else if(yourScore < computerScore){
                    $("#text-overlay").text("You lose");
                    $("#overall-overlay").css('background-color',"#E33349");
                    $("#p-overlay").text("The computer has defeated you!");
               }else if(yourScore == computerScore){
                    $("#text-overlay").text("It's a Draw");
                    $("#overall-overlay").css('background-color',"#5cb85c");
                    $("#p-overlay").text("Good Effort");
               }
            }
        }
        $(".rematch").on('click',function(){
            $("#btn-overlay").show();
            $("#overall-overlay").css("width","0%");
        });
        $(".play_again").click(function(){
           if(round <= overall_round){
                play_again();
           }else{
               round = 1;
               computerScore = 0;
               yourScore = 0;
               counter = 0;
               $("#your_score").text(0);
               $("#cmp_score").text(0);
               $("#total_round").text(1);
               play_again();
           }
        });
        function play_again(){
            $("#result-overlay").css('height',"0%");
            $(".chosen-weapon").removeClass("slideIn-your-weap");
            $(".your-choice").removeClass("slide-your-text");
            $(".opponent-weapon").removeClass("slideIn-opp-weap");
            $(".opponent-choice").removeClass("slide-opp-text");
            $(".try-overlay").css("width","100%");
            $("#playerChoice").removeAttr("class");
            $("#computerChoice").removeAttr("class");
            $("#total_round").text(round);
        }
    });
