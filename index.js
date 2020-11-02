const userInput = document.getElementById("user-input"); 
const message = document.getElementById("message");
const guessList = document.getElementById("guesses");
const button = document.getElementById("restart");
const highScoreDisplay = document.getElementById("highScore");

let highScore = JSON.parse(window.localStorage.getItem('highScore'));
if(highScore === null){highScore = []};
console.log(highScore.length)
if(highScore.length != 0){highScoreDisplay.innerHTML = "HighScore: </br>" + highScore.map((element,index) => `${index + 1}. ${element}`).join("</br>");};

button.style.display = "none";

let guesses = [];

function random(min,max){
    return Math.round(Math.random()* (max - min)) + min;
}

let randomN = random(0,100);
console.log(randomN);

function getInput(){
    return(userInput.value);
}

function setMessage(str){
    message.innerHTML = str;
}

function clearInput(){
    userInput.value = "";
}


function checkMessage(input){
    if(parseInt(input)  > randomN){setMessage("Too High!");};
    if(parseInt(input)  < randomN){setMessage("Too Low!")};
    if(parseInt(input)  === randomN){setMessage("Correct," + ` it took you ${guesses.length + 1} guesses`);
                                    guesses.push(getInput().fontcolor("yellow"));
                                    button.style.display = "block";
                                
                                    if(highScore.length < 5){highScore.push(guesses.length);};
                                    if(guesses.length < highScore[4]){  highScore.pop();
                                                                        highScore.push(guesses.length);};
                                    highScore = highScore.sort();

                                    window.localStorage.setItem('highScore', JSON.stringify(highScore));

                                    highScoreDisplay.innerHTML = "HighScore: </br>" + highScore.map((element,index) => `${index + 1}. ${element}`).join("</br>"); 
                                };

                                    

}


function updateGuesses(){
    if(message.innerHTML === "Too High!"){guesses.push(getInput().fontcolor("red"));};
    if(message.innerHTML === "Too Low!"){guesses.push(getInput().fontcolor("green"));};
    
    guessList.innerHTML =  "Previous guesses: </br>" + guesses.join("</br>");

}

function restart(){
    randomN = random(0,100);
    guesses = [];
    clearInput();
    setMessage("Guess a number between 0 and 100");
    guessList.innerHTML = "";
    button.style.display = "none"
    console.log(randomN);
}

button.addEventListener("click",restart);

userInput.addEventListener("keyup", (event) => {
    if(event.key === "Enter"){
                              checkMessage(getInput());
                              updateGuesses();
                              clearInput();
                              
                            }
});



