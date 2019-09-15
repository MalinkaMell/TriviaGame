$(document).ready(function () {

    //-----------------------ARRAY OF QUESTIONS BLOCK ---------------------------------//

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

    //question 0: declaring and pushing
    const questionZero = new questionObject(
        "Which creatures pull the school carriages at Hogwarts?",
        ["Hippogriffs", "Thestrals", "Centaurus", "Manticores"],
        "Thestrals",
        "thestrals.gif"
    );
    arrayOfQuestions.push(questionZero);

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
        ["The Monster Book of Monsters", "Fantastic Beasts and Where To Find Them", "The Tales of Beedle the Bard", "Hairy Snout, Human Heart"],
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


    //-----------------------END OF ARRAY OF QUESTIONS BLOCK ---------------------------------//

    //-----------------------GLOBAL VARIABLES BLOCK ---------------------------------//

    //setting question number to 0
    let questionNumber = 0;
    //switch for next question
    let questionSwitch = false;
    //counting right answers
    let rightAnswers = 0;
    //counting wrong answers
    let wrongAnswers = 0;
    //non answers
    let noAnswers = 0;
    //  Variable that will hold our setInterval that runs the stopwatch
    let intervalId;
    // prevents the clock from being sped up unnecessarily
    let clockRunning = false;
    let time = 15;

    //-----------------------END OF GLOBAL VARIABLES BLOCK ---------------------------------//

    //-----------------------FUNCTIONS BLOCK ---------------------------------//

    //---------Timer functions------------//

    function timerStop() {
        clearInterval(intervalId);
        clockRunning = false;
        console.log("stopping")
    }

    function timerStart() {
        if (!clockRunning) {
            intervalId = setInterval(timerCount, 1000);
            clockRunning = true;
        }
    }

    function timerCount() {
        if (time > 0) {
            time--;
            let displayTime;
            if (time < 10) {
                displayTime = "0" + time;
            }
            else {
                displayTime = time;
            }

            $("#timer").html(`Time remaining: ${displayTime}`);
        }
        if (time === 0) {
            let theAnswer = arrayOfQuestions[questionNumber].rightAnswer;
            let image = arrayOfQuestions[questionNumber].imgFile;
            timerStop();
            time = 0;
            $("#timer").text("");
            $("#div_correct_answer").show();
            $("#div_correct_answer").html(`Time's up!!<br> <small>The right answer was: </small>`);
            $("#answers_div").html(`<h4> ${theAnswer}</h4>`);
            $("#image_file").attr("src", `assets/images/gifs/${image}`);
            questionSwitch = true;
            noAnswers++;
            showAnswerWindow();
        }
    }

    //---------Function for shufling array------------//
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    //---------Windows other than main game window------------//
    //reset game interface
    let resetWindow = () => {
        $("#questionDiv").show();
        $("#answers_div").show();
        $("#answers_div").html("");
        $("#rightAnswerDiv").hide();
        $("#img_div").hide();
        createGameInterface();
    }
    //showing right answer
    let showAnswerWindow = () => {
        $(".answer").remove();
        $("#questionDiv").hide();
        $("#rightAnswerDiv").show();
        $("#img_div").show();
        setTimeout(function () {
            console.log("waiting 3 seconds")
            resetWindow();
        }, 3000)
    }
    //game over, restart window
    let restartWindow = () => {



        timerStop();
        time = 0;
        $("#timer").html(`<button class="restart-button font-weight-bold image-button">Restart</button>`);
        $("#question").html("");
        $('#answers_div').html(`
        <h2>Game Over!</h2>
        <p>Right answers: <strong>${rightAnswers}</strong> </p>
        <p>Wrong answers: <strong>${wrongAnswers}</strong></p>
        <p>Unanswered questions: <strong>${noAnswers}</strong></p>
        `);

    }

    //---------Start game function------------//

    let createGameInterface = () => {

        $(".restart-button").hide();
        $(".start-button").hide();
        if (questionNumber < arrayOfQuestions.length) {
            if (questionSwitch === true) {
                questionNumber++;
            }

            //shuffling the answers array so they don't show in the same order every time
            shuffle(arrayOfQuestions[questionNumber].answerOptions);

            //appending questions and answers to html
            $("#question").text(arrayOfQuestions[questionNumber].question);
            $.each(arrayOfQuestions[questionNumber].answerOptions, function (index, key) {
                $('#answers_div').append($(`<button class="answer">${key}</button>`));
            })
            //timerReset();
            time = 15;
            timerStart();
            console.log(arrayOfQuestions[questionNumber].question)

        }
        //if no more question reset timer and show game over window
        if (questionNumber === arrayOfQuestions.length - 1) {
            timerStop();
            time = 0;
            $("#timer").text("");
            restartWindow();
        }

    }

    //-----------------------END OF FUNCTIONS BLOCK ---------------------------------//

    //-----------------------JQUERY ON CLICK EVENTS ---------------------------------//
    //click on answer button
    $("body").on("click", ".answer", function () {

        let rightAnswer = arrayOfQuestions[questionNumber].rightAnswer;
        if ($(this).text() === rightAnswer) {
            timerStop();
            time = 0;
            $("#timer").text("");
            $("#div_correct_answer").show();
            $("#div_correct_answer").text(`That's correct!`);
            $("#answers_div").html(`<h4 class="font-weight-bold">${rightAnswer}</h4>`);
            $("#image_file").attr("src", `assets/images/gifs/${arrayOfQuestions[questionNumber].imgFile}`);
            questionSwitch = true;
            rightAnswers++;
            showAnswerWindow();
        }
        else {
            timerStop();
            time = 0;
            $("#timer").text("");
            $("#div_correct_answer").show();
            $("#div_correct_answer").html(`Incorrect!<br> <small>The right answer is: </small>`);
            $("#answers_div").html(`<h4> ${rightAnswer}</h4>`);
            $("#image_file").attr("src", `assets/images/gifs/${arrayOfQuestions[questionNumber].imgFile}`);
            questionSwitch = true;
            wrongAnswers++;
            showAnswerWindow();
        }
    });

    //click on restart game button
    $("body").on("click", ".restart-button", function () {
        questionSwitch = false;
        questionNumber = 0;
        rightAnswers = 0;
        noAnswers = 0;
        wrongAnswers = 0;
        resetWindow();

    });

    //click on start game button
    $("body").on("click", ".start-button", function () {

        questionSwitch = false;
        questionNumber = 0;
        rightAnswers = 0;
        noAnswers = 0;
        wrongAnswers = 0;
        resetWindow();

    });


})
//
/* 
window.onload = function() {
    //background music 
    let playMusic = function () {
        return new Promise(function (resolve, reject) {
            let audio = new Audio("./assets/audio/Harry_Potter_Theme_Song.mp3");
            audio.volume = 0.5;
            audio.preload = "auto";// intend to play through
            audio.autoplay = true;// autoplay when loaded
            audio.onerror = reject;// on error, reject
            audio.onended = resolve;// when done, resolve
        })

    }
    playMusic().then(function () {
        console.log("risolto?")
    })
} */