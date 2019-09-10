$(document).ready(function () {

//declaring reusable class object in order to reuse it and create as many questions as i want instead of creatiing directly an array and modify it every time
class questionObject {
    constructor(question, answerOptions, rightAnswer, imgFile) {
        this.question = question,
        this.answerOptions = answerOptions,
        this.rightAnswer = rightAnswer,
        this.imgFile = imgFile
    }
}
//declaring an array and going to push here newly created questions 
let arrayOfQuestions = [];

//question 1: declaring and pushing
const questionOne = new questionObject(
    "In the books, where did we see Severus Snape for the first time?", 
    ["In the Great Hall", "In a Hogward Corridor", "In Potions Classroom", "On Hogwards Express"],
    "In the Great Hall",
    "greatHall.gif"
    );
arrayOfQuestions.push(questionOne);

//question 2: declaring and pushing
const questionTwo = new questionObject(
    "What is the name of Luna Lovegoods’s father?",
    ["Xenophilius", "Amos", "Dedalus", "Aberforth"],
    "Xenophilius",
    "lovegoods.gif"
);
arrayOfQuestions.push(questionTwo);

//question 3: declaring and pushing
const questionThree = new questionObject(
    "In which book is Sirius Black first mentioned?",
    ["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban", "Harry Potter and the Half-Blood Prince"],
    "Harry Potter and the Sorcerer's Stone",
    "syrius.gif"
);
arrayOfQuestions.push(questionThree);

//question 4: declaring and pushing
const questionFour = new questionObject(
    "What is Albus Dumbledore’s full name?",
    ["Albus Percival Wulfric Brian Dumbledore", "Albus Peter Wolfgan Bjorn Dumbledore", "Albus Potter Waltan Bruce Dumbledore", "Albus Phineas Wilhelm Bane Dumbledore"],
    "Albus Percival Wulfric Brian Dumbledore",
    "dumbledore.gif"
);
arrayOfQuestions.push(questionFour);

//question 5: declaring and pushing
const questionFive = new questionObject(
    "What item of clothing grants Dobby his freedom?",
    ["A slimy sock", "A dirty glove", "A broken shoe", "An old hat"],
    "A slimy sock",
    "dobby.gif"
);
arrayOfQuestions.push(questionFive);

//question 6: declaring and pushing
const questionSix = new questionObject(
    "In which book does Harry NOT travel on the Hogwarts Express?",
    ["Harry Potter and the Deathly Hallows", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Prisoner of Azkaban"],
    "Harry Potter and the Deathly Hallows",
    "hogwards_express.gif"
);
arrayOfQuestions.push(questionSix);

//question 7: declaring and pushing
const questionSeven = new questionObject(
    "What did Voldemort say was the most powerfully magical number?",
    ["7", "666", "13", "3"],
    "7",
    "voldemort.gif"
);
arrayOfQuestions.push(questionSeven);

//question 8: declaring and pushing
const questionEight = new questionObject(
    "Which book did Hagrid assign to his Care of Magical Creatures class?",
    ["The Monster Book of Monsters", "Fantastic Beasts and Where To Find Them", "Fowl or Foul?: A Study of Hippogriff Brutality", "Hairy Snout, Human Heart"],
    "The Monster Book of Monsters",
    "monter_book.gif"
);
arrayOfQuestions.push(questionEight);

//question 9: declaring and pushing
const questionNine = new questionObject(
    "Which pub provides a secret passage to Hogwarts?",
    ["The Hog's Head", "The Three Broomsticks", "The Leaky Cauldron", "Madam Puddifoot's"],
    "The Hog's Head",
    "ariana.gif"
);
arrayOfQuestions.push(questionNine);

//question 10: declaring and pushing
const questionTen = new questionObject(
    "What broomstick did the Weasley twins use playing Quidditch for Gryffindor?",
    ["Cleansweep Five", "Thunderbolt VII", "Nimbus 2000", "Comet Two Ninety"],
    "Cleansweep Five",
    "quiddich.gif"
);
arrayOfQuestions.push(questionTen);

//setting question number to 0
let questionNumber = 0;

//function for shufling arrays
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }


let showRightAnswerWindow = () => {
    $("#questionDiv").attr("style", "display:none");
    $("#answers_div").attr("style", "display:none");
    $("#rightAnswerDiv").attr("style", "display:block");
    $("#correct").attr("style", "display:block");
    $("#correct_answer").attr("style", "display:block");
    $("#img_div").attr("style", "display:block");
    $("#div_correct_answer").attr("style", "display:block");
    $("#correct").text("That's correct!");
};

let showWrongAnswerWindow = () => {
    $("#questionDiv").attr("style", "display:none");
    $("#answers_div").attr("style", "display:none");
    $("#rightAnswerDiv").attr("style", "display:block");
    $("#correct").attr("style", "display:block");
    $("#correct_answer").attr("style", "display:block");
    $("#img_div").attr("style", "display:block");
    $("#div_incorrect_answer").attr("style", "display:block");
    $("#correct").text("Incorrect!");
}


//start game function
let startGame = (param) => {

    //shuffling the questions array so they don't show in the same order every time
    shuffle(arrayOfQuestions);

    //shuffling the answers array so they don't show in the same order every time
    shuffle(param[questionNumber].answerOptions);

    //appending questions and answers to html
    $("#question").text(param[questionNumber].question);
    $("#answer1").val(param[questionNumber].answerOptions[0]);
    $("#answer2").val(param[questionNumber].answerOptions[1]);
    $("#answer3").val(param[questionNumber].answerOptions[2]);
    $("#answer4").val(param[questionNumber].answerOptions[3]);
    $("#label_1").text(param[questionNumber].answerOptions[0]);
    $("#label_2").text(param[questionNumber].answerOptions[1]);
    $("#label_3").text(param[questionNumber].answerOptions[2]);
    $("#label_4").text(param[questionNumber].answerOptions[3]);
    
    //checking the value of clicked radio
    $("input[type='radio']").click(function(){
        let radioValue = $("input[name='answer']:checked").val();
        if(radioValue === param[questionNumber].rightAnswer){
            $("#correct_answer").text(param[questionNumber].rightAnswer);
            $("#image_file").attr("src", "assets/images/gifs/" + param[questionNumber].imgFile);
            console.log("Right Answer! " + radioValue);
            questionNumber++;
            console.log(questionNumber);
            showRightAnswerWindow();
        }
        else {
            $("#right_answer").text("It was: " + param[questionNumber].rightAnswer);
            $("#image_file").attr("src", "assets/images/gifs/" + param[questionNumber].imgFile);
            questionNumber++;
            showWrongAnswerWindow();
        }
        
        
    }); 


}



    
startGame(arrayOfQuestions)

})