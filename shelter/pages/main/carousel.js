const BTNRIGHT = document.querySelectorAll(".btn-right")
const BTNLEFT = document.querySelectorAll(".btn-left")
const CARUSEL = document.querySelector(".carusel")
const ITEM_LEFT = document.querySelector("#left")
const ITEM_RIGHT = document.querySelector("#right")


function moveRight() {
    CARUSEL.classList.add("transition-right")
    BTNRIGHT.forEach(
        function(BTNRIGHT) {
            BTNRIGHT.removeEventListener("click", moveRight)
        }
    )
}
BTNRIGHT.forEach(
    function(BTNRIGHT) {
        BTNRIGHT.addEventListener("click", moveRight)
    }
)



function afterAnimationEndRght() {
    CARUSEL.classList.remove("transition-right")
    BTNRIGHT.forEach(
        function(BTNRIGHT) {
            BTNRIGHT.addEventListener("click", moveRight)
        }
    )
}

CARUSEL.addEventListener("animationend", afterAnimationEndRght)

function moveLeft() {
    CARUSEL.classList.add("transition-left")
    BTNLEFT.forEach(
        function(BTNLEFT) {
            BTNLEFT.removeEventListener("click", moveLeft)
        }
    )
}

BTNLEFT.forEach(
    function(BTNLEFT) {
        BTNLEFT.addEventListener("click", moveLeft)
    }
)


function afterAnimationEndLft() {
    CARUSEL.classList.remove("transition-left")
    BTNLEFT.forEach(
        function(BTNLEFT) {
            BTNLEFT.addEventListener("click", moveLeft)
        }
    )
}

CARUSEL.addEventListener("animationend", afterAnimationEndLft)

const charly = document.querySelector("#charly").innerHTML;
const freddy = document.querySelector("#freddy").innerHTML;
const scarlet = document.querySelector("#scarlet").innerHTML;
const katrine = document.querySelector("#katrine").innerHTML;
const jennifer = document.querySelector("#jennifer").innerHTML;
const woody = document.querySelector("#woody").innerHTML;
const sophia = document.querySelector("#sophia").innerHTML;
const timmy = document.querySelector("#timmy").innerHTML;

function petCard() {
    let result = Math.floor(Math.random() * 7)
    if (result === 0) return charly
    else if (result === 1) return freddy
    else if (result === 2) return scarlet
    else if (result === 3) return katrine
    else if (result === 4) return jennifer
    else if (result === 5) return woody
    else if (result === 6) return sophia
    else return timmy
}

CARUSEL.addEventListener("animationend", (AnimationEvent) => {
    if (AnimationEvent.animationName === "move-right") {
        const rightitems = document.querySelector("#right").innerHTML;
        document.querySelector("#middle").innerHTML = rightitems;

        const card1 = document.createElement("div")
        card1.classList.add("pet-content")
        card1.innerHTML = petCard()

        const card2 = document.createElement("div")
        card2.classList.add("pet-content")
        card2.innerHTML = petCard()

        const card3 = document.createElement("div")
        card3.classList.add("pet-content")
        card3.innerHTML = petCard()

        document.querySelector("#right").innerHTML = ""
        ITEM_RIGHT.appendChild(card1)
        ITEM_RIGHT.appendChild(card2)
        ITEM_RIGHT.appendChild(card3)
    }
})

CARUSEL.addEventListener("animationend", (AnimationEvent) => {
    if (AnimationEvent.animationName === "move-left") {
        const leftitems = document.querySelector("#left").innerHTML;
        document.querySelector("#middle").innerHTML = leftitems;

        const card1 = document.createElement("div")
        card1.classList.add("pet-content")
        card1.innerHTML = petCard()

        const card2 = document.createElement("div")
        card2.classList.add("pet-content")
        card2.innerHTML = petCard()

        const card3 = document.createElement("div")
        card3.classList.add("pet-content")
        card3.innerHTML = petCard()

        document.querySelector("#left").innerHTML = ""
        ITEM_LEFT.appendChild(card1)
        ITEM_LEFT.appendChild(card2)
        ITEM_LEFT.appendChild(card3)
    }
})