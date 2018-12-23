$(document).ready(function () {

var quiz = { 
    questions: [{
      question: "Which is the core component of the computer? It computes every operation you want?",
      choices: ["Calculator", "Dynamo", "Processor", "Light Bulb"],
      answer: "Processor"
      }, {
      question: "What does the acronym DNS stand for?",
      choices: ["Dynamic Nomenclature System", "Dioxide Nitro Silicone", "Dymanic Non Status", "Domain Naming System"],
      answer: "Domain Naming System"
      }, {
      question: "What is the RAM on a computer?",
      choices: ["hard drive", "memory", "storage", "motherboard"],
      answer: "memory"
      }, {
      question: "When was the first Apple computer introduced?",
      choices: ["1971", "1981", "1976", "1979"],
      answer: "1976"
      }]
    }
var qtimer= 30;
var intervalId;
var correctAnswers = 0;
var incorectAnswers = 0;
     
  function nextQuestion() {
       
            //Create loop to cycle through questions and answers
    for (var i = 0; i < quiz.questions.length; i++) {
     
      //Display question
     
      var questDiv = $("<div>");
      questDiv.text = quiz.questions[i].question;
          console.log(questDiv.text);
          // console.log(this);
      var ask = $("<div>").text(questDiv.text);
    
      $("#question-line").append(ask);    

      // $("#tasks").append("<div>" + task + "<span id='delete'>X</span></div>");
      // Display answer choices

      for (var j = 0; j < quiz.questions[i].choices.length; j++) {
        
        var answerList = $("<li>");
        answerList.text = quiz.questions[i].choices[j];
            console.log(answerList.text);
        var choice = $("<li>").text(answerList.text);
        $(".choices").append(choice);
        
        // choice.addClass("abcd");

        $(choice).attr("class", "abcd");
        };
      };
             //set countdown
        countDownClock();

      $(".abcd").on('click', function(event) {
        console.log("you clicked");

         //check if the clicked item was the correct answer
        for (var k = 0; k < quiz.questions.length; k++) {

        if (quiz.questions.choices[k] === quiz.questions.choices.answer) {
        
        correctAnswers++; 
          console.log(correctAnswers);
      }
        else {
        incorrectAnswers++
         console.log(correctAnswers);
        }}
      });
       
        console.log(this);
      }
  

  function countDownClock() {
      clearInterval(intervalId);
      intervalId = setInterval(decrementClock, 1000);
    }

    function decrementClock() {
      qtimer--;
      //  Show the number in the #show-number tag.
      $("#count-down").html("<h2>" + qtimer + "</h2>");
     if (qtimer === 0) {
        // stop();
        //  Alert the user that time is up.
        alert("Time Up!");
        
        qtimer = 30;
        alert("Correct Answers" + correctAnswers + "Incorrect Answers" + incorrectAnswers);
        start();
      }
    }

  function start() {
    $("#start-button").remove();
    // $("#question-line").empty();
    // $(".choices").empty();
    $("#time-left").html("<p>Time Remaining</p>");
    nextQuestion();
  } 
          
  //MAIN CODE STARTS HERE

  $("#start-button").on("click", function() {
    start(); 
  });
  // console.log (quiz.questions);
  
  
//   Timer set 30secs
//   When Time runs out - Times up
  
//   On click
//   Grab event/item that was clicked
//    check answer if Answer matches 
  
//       Congratulations gif
//   Set time 5 secs go to next iteration
  
//       Else sorry Gif
//   Set time 5 secs go to next iteration
//   Next question
  
  
//   Once loop is done preset total wins total loses and initialize button

})