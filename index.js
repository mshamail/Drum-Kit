function playDrum(key) {
    switch(key) {
        case "W":
            new Audio("./sounds/crash.mp3").play(); 
            break;
        case "A":
            new Audio("./sounds/kick-bass.mp3").play(); 
            break;
        case "S":
            new Audio("./sounds/snare.mp3").play(); 
            break;
        case "D":
            new Audio("./sounds/tom-1.mp3").play(); 
            break;
        case "J":
            new Audio("./sounds/tom-2.mp3").play(); 
            break;
        case "K":
            new Audio("./sounds/tom-3.mp3").play(); 
            break;
        case "L":
            new Audio("./sounds/tom-4.mp3").play(); 
            break;
        // If none of the cases apply, display the button text.
        default: console.log(this.innerHTML)
        break;
    }
    buttonAnimation(key);
}

function detectKeyPress() {
    document.addEventListener("keydown",function(event) {
        console.log(event.key);
        playDrum(event.key.toUpperCase());
    });
};

function detectClick(){
    document.querySelectorAll("button").forEach(function(button){
        button.addEventListener("click", function() {
            console.log(this.innerHTML);
            playDrum(this.innerHTML)
        });
    });
};

function buttonAnimation(key) {
    var activeButton = document.querySelector("."+ key.toLowerCase());
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);
    };
};

detectKeyPress();
detectClick();