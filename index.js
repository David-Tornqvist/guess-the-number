const userInput = document.getElementById("user-input"); 
const message = document.getElementById("message");
const guessList = document.getElementById("guesses");
let guesses = [];

function random(min,max){
    return Math.round(Math.random()* (max - min)) + min;
}

const randomN = random(0,100);
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
    if(parseInt(input)  > randomN){setMessage("Too High!")};
    if(parseInt(input)  < randomN){setMessage("Too Low")};
    if(parseInt(input)  === randomN){setMessage("Correct!")};
}

function updateGuesses(){
    guesses.push(getInput());
    guessList.innerHTML =  "Previous guesses:" + guesses.join("</br>");

}

userInput.addEventListener("keyup", (event) => {
    if(event.key === "Enter"){checkMessage(getInput());
                              updateGuesses();
                              clearInput();
                            }
});



