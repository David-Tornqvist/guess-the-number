const userInput = document.getElementById("user-input"); 
const message = document.getElementById("message");

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

function checkMessage(input){
    if(parseInt(input)  > randomN){setMessage("Too High!")};
    if(parseInt(input)  < randomN){setMessage("Too Low")};
    if(parseInt(input)  === randomN){setMessage("Correct!")};
}

userInput.addEventListener("keyup", (event) => {
    if(event.key === "Enter"){checkMessage(getInput())};
});



