const BTNRIGHT = document.querySelector(".btn-right")
const BTNLEFT = document.querySelector(".btn-left")
const CARUSEL = document.querySelector(".carusel")
const ITEM_LEFT = document.querySelector("#left")
const ITEM_RIGHT = document.querySelector("#right")

// блок анимация вправо + блок кнопки вправо на время анимации
function moveRight() {
    CARUSEL.classList.add("transition-right")
    BTNRIGHT.removeEventListener("click", moveRight)
}
BTNRIGHT.addEventListener("click", moveRight)

function afterAnimationEndRght() {
    CARUSEL.classList.remove("transition-right")
    BTNRIGHT.addEventListener("click", moveRight)
}

CARUSEL.addEventListener("animationend", afterAnimationEndRght)
    // конец блока анимации вправо

// блок анимация влево + блок кнопки влево на время анимации
function moveLeft() {
    CARUSEL.classList.add("transition-left")
    BTNLEFT.removeEventListener("click", moveLeft)
}
BTNLEFT.addEventListener("click", moveLeft)


function afterAnimationEndLft() {
    CARUSEL.classList.remove("transition-left")
    BTNLEFT.addEventListener("click", moveLeft)
}

CARUSEL.addEventListener("animationend", afterAnimationEndLft)
    // конец блока анимации влево

CARUSEL.addEventListener("animationend", (AnimationEvent) => {
    if (AnimationEvent.animationName === "move-left") {
        const leftitems = document.querySelector("#left").innerHTML;
        document.querySelector("#middle").innerHTML = leftitems;

    }
})

CARUSEL.addEventListener("animationend", (AnimationEvent) => {
    if (AnimationEvent.animationName === "move-right") {
        const rightitems = document.querySelector("#right").innerHTML;
        document.querySelector("#middle").innerHTML = rightitems;
    }
})