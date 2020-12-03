let anim = [
    "W",
    "WE",
    "WEL",
    "WELC",
    "WELCO",
    "WELCOM",
    "WELCOME",
    "WELCOME_",
];
let i = 0;
let stateObject = {
    stateValue: 0,
    stateListener: function(val) {},
    set state(val) {
        this.stateValue = val;
        this.stateListener(val);
    },
    get state() {
        return this.stateValue;
    },
    createListener: function(listener) {
        this.stateListener = listener;
    }
};

function setState() {
    stateObject.state++;
}

function textAnimation() {
    let text = document.getElementById("introText");
    if (i < anim.length) {
        text.style.opacity = 0;
        text.style.transition = "opacity 300ms";
        text.innerText = anim[i];
        text.style.opacity = 1;
        i++;
        setTimeout(textAnimation, 150);
    } else { 
        text.style.transition = "opacity 1s";
        text.style.opacity = 0;
    }
}

function introTransition() {
    let box = document.getElementsByClassName("introBox");
    box[0].style.transition = "background-position 1.6s ease-in";
    box[0].style.backgroundPosition = "left bottom";
    setTimeout(setState, 2000);
}

introTransition();
textAnimation();

stateObject.createListener(function(val) {
    let navElements = document.getElementsByTagName("a");
    if(stateObject.stateValue === 1) {
        let intro = document.getElementById("intro");
        intro.remove();

        let container = document.getElementById("container");
        container.style.alignItems = "initial";

        let main = document.getElementById("main");
        main.style.width = "100%";

        let navHeader = document.getElementById("navHeader");

        navHeader.style.transition = "opacity 600ms";
        navHeader.innerText = "WEBSITE";
        navHeader.style.opacity = 1;
        setTimeout(setState, 600);    
    }
    if(stateObject.stateValue === 2) {
        navElements[0].style.transition = "all 200ms";
        navElements[1].innerText = "About";
        navElements[2].innerText = "Contact";
        navElements[0].innerText = "Projects";
        navElements[0].style.opacity = 1;
        setTimeout(setState, 200);
    }
    if(stateObject.stateValue === 3) {
        navElements[1].style.transition = "all 200ms";
        navElements[1].style.opacity = 1;
        setTimeout(setState, 200);
    }
    if(stateObject.stateValue === 4) {
        navElements[2].style.transition = "all 200ms";
        navElements[2].style.opacity = 1;
        setTimeout(setState, 200);
    }
    if(stateObject.stateValue === 5) {
        let sol = document.getElementsByClassName("sol");
        sol[0].style.transition = "opacity 2s";
        sol[0].style.opacity = 1;
        console.log(sol);
        setTimeout(setState, 2000);
    }
});