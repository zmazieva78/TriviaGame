var currentQuestion;
var wins = 0;
var losses = 0;

var questions = [
    {
        question: "Hamburgers get their name from what European city?",
        choices: ["London", "Hamburg", "Paris", "Amstredam"],
        correctChoice: 1
    },
    {
        question: "A poke bowl is a diced raw fish dish that originated in which U.S. state?",
        choices: ["Seattle", "New York", "Hawaii", "Houston"],
        correctChoice: 2
    },
    {
        question: "When a drink is served “on the rocks”, it is served with what?",
        choices: ["Vodka", "Straws", "Whipped Cream","Ice Cubes"],
        correctChoice: 3

    },
    {
        question: "What ingredient is added to white sugar to make brown sugar?",
        choices: ["Molasses", "Caramel", "Chocolate", "Food coloring"],
        correctChoice: 0

    },
    {
        question: "Sriracha is type of hot sauce named after a city located in what country?",
        choices: ["Taiwan", "Thailand", "Japan", "Korea"],
        correctChoice: 1

    },
    {
        question: "Malbec, Sangiovese, and Syrah are all a type of what?",
        choices: ["Jin", "Sangria", "Wine", "Whiskey"],
        correctChoice: 2

    },
    {
        question: "In which country did cheddar cheese originate?",
        choices: ["USA", "Switzerland", "England", "Holland"],
        correctChoice: 2

    },
    {
        question: "Arby’s is a fast-food restaurant chain specializing in sandwiches made with what main ingredient?",
        choices: ["Roast beef", "Grilled Chicken", "Fish", "Pork"],
        correctChoice: 1 

    },
    {
        question: "Sushi is a type of cuisine that originated in what country?",
        choices: ["China", "Thailand", "Vietnam", "Japan"],
        correctChoice: 3

    },
    {
        question: "The original Starbucks was established in 1971 in what U.S. city?",
        choices: ["Seattle", "Bellevue", "Burien", "Tukwila"],
        correctChoice: 0

    },
    {
        question: "The first McDonald’s restaurant opened in which U.S. state?",
        choices: ["Nevada", "California", "Texas", "Florida"],
        correctChoice: 1

    },
    {
        question: "“Granny Smith” is a popular type of which fruit?",
        choices: ["Pear", "Peach", "Apple","Orange"],
        correctChoice: 2

    },
    {
        question: "Dijon mustard originated in the city of Dijon, located in what country?",
        choices: ["France", "Germany", "Italy","Greece"],
        correctChoice: 0

    },
    {
        question:"What was the original flavor of the filling in Twinkies?",
        choices: ["Apples", "Blueberries", "Strawberry","Banana"],
        correctChoice: 3
    },
    {
        question: "Pho is a popular noodle soup from what country?",
        choices: ["Thailand", "Vietnam", "China", "Malaysia"],
        correctChoice: 1
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