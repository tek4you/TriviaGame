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
     
  function nextQuestion() {
       
      //Display Question
    for (var i = 0; i < quiz.questions.length; i++) {
    var questDiv = $("<div>");
        questDiv.text = quiz.questions[i].question;
         console.log(questDiv.text);

    var ask = $("<p>").text(questDiv.text);
       $("#question-line").html(ask);
    
      // Display choices

    for (var j = 0; j < quiz.questions[i].choices.length; j++) {
    var answerDiv = $("<div>");
        answerDiv.text = quiz.questions[i].choices[j];
          console.log(answerDiv.text);

    var choice = $("<p>").text(answerDiv.text);
      
       $("#choices").append(choice);
       answerDiv.attr('class', "abcd");
    
      //set countdown
      countDownClock();

      // $("#test-button").on('click', function() {
      //   console.log("pause action");
        
        };
        // countDownClock();
      // decrementClock();
      $(".abcd").on('click', function() {setTimeOut(function() {

      }, 5000);
        //check if the clicked item was the correct answer

      })
      

    };
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
      }
    }

  function start() {
    $("#start-button").remove();
    $("#time-left").html("<p>Time Remaining</p>");
    nextQuestion();
  } 
          
  //MAIN CODE STARTS HERE

  $("#start-button").on("click", function() {
    start(); 
  });
  // console.log (quiz.questions);
  
  
//   Timer set 20secs
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