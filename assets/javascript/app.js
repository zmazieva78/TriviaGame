var currentQuestion;
var wins = 0;
var losses = 0;

var questions = [
    {
        question: "What is the name of city hamburger was named after?",
        choices: ["London", "Hamburg", "Paris", "Amstredam"],
        correctChoice: 1
    },
    {
        question: "The biggest city in the World?",
        choices: ["Hong Kong", "Moscow", "New York", "Tokyo"],
        correctChoice: 3
    }
];

function nextQuestion() {
    if (questions.length > 0) {
        var randomIndex = Math.floor(Math.random() * questions.length);
        currentQuestion = questions[randomIndex];
        $("#question").text(currentQuestion.question);
        $("#choice1").text(currentQuestion.choices[0]);
        $("#choice2").text(currentQuestion.choices[1]);
        $("#choice3").text(currentQuestion.choices[2]);
        $("#choice4").text(currentQuestion.choices[3]);

        $('input[name=answer]').prop("checked", false);

        questions.splice(randomIndex, 1);
    } else {
        alert("No more questions.");
    }
}

$("#startGame").click(function(){
    nextQuestion();
});

$("#submit").click(function(){
    var selectedChoice = $('input[name=answer]:checked').val();

    if (selectedChoice == null) {
        alert("Please choose an answer.");
        return;
    } 
    
    if (selectedChoice == "choice1") {
        if (currentQuestion.correctChoice == 0) {
            alert("Correct");
            wins++;
        } else {
            alert("Incorrect");
            losses++;
        }
    } else if (selectedChoice == "choice2") {
        if (currentQuestion.correctChoice == 1) {
            alert("Correct");
            wins++;
        } else {
            alert("Incorrect");
            losses++;
        }
    } else if (selectedChoice == "choice3") {
        if (currentQuestion.correctChoice == 2) {
            alert("Correct");
            wins++;
        } else {
            alert("Incorrect");
            losses++;
        }
    } else if (selectedChoice == "choice4") {
        if (currentQuestion.correctChoice == 3) {
            alert("Correct");
            wins++;
        } else {
            alert("Incorrect");
            losses++;
        }
    } else { 
        losses++;
        alert("InCorrect");
    }
    $("#wins").text(wins);
    $("#losses").text(losses);
    
    nextQuestion();
});