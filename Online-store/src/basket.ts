
// добавляем мопсов в корзину и убираем из нее

let takeToBasket = document.querySelectorAll(".basket-text")
let inBasket = <HTMLElement>document.querySelector(".in-basket")

let counter: number = 0

// проверка в фунции сначала идет на уже выбраного мопса(и убирает его из корзины), а потом на нового мопса и добавляет его в корзину. В другой последовательности не работает. 

export function counterInBasket(){  // первый if проверяет кликали ли уже на кнопку, и если да, то при следующем клике возвращает ее в исходное положение и убирает из корзины
  takeToBasket.forEach((e) => {e.addEventListener("click", function basketCounter():void{
    if(e.innerHTML === "in Basket") { // проверка на текст на кнопке, если совподает,то...
      e.innerHTML = "Buy now"         // ...меняем карточку на состояние до выбора мопса.

      let targetElem2 = <HTMLElement>e.closest('.card-item') // если родитель содержит нужный класс, то меняем цвет его фона на белый
      targetElem2.style.backgroundColor = "#ffffff"

      counter--; // отнимаем цифры на счетчике корзины (если есть)
      //console.log(counter)
      if (counter === 0) { // если счетчик дошел до 0, то в корзину вставляем пустое значение (пользователь ничего не увидит)
        inBasket.innerText = " "
      }
      else inBasket.innerText = counter.toString();
    }
    else { 
      let targetElem = <HTMLElement>e.closest('.card-item')
      targetElem.style.backgroundColor = "#ffa500d4"

      e.innerHTML = "in Basket"

      counter++;
      //console.log(counter)
      inBasket.innerText = counter.toString();
    }
    
  })});
}
counterInBasket()
// полностью очищаем корзину от мопсов

const clearBasket = <HTMLElement>document.querySelector(".clear-basket")


export function clearingBasket(){
  clearBasket.addEventListener("click", function clearingBasket():void{

    takeToBasket.forEach((e) => {
      e.innerHTML = "Buy now"
      let targetElem = <HTMLElement>e.closest('.card-item')
      targetElem.style.backgroundColor = "#ffffff"
    })

    counter = 0;
    inBasket.innerText = " ";
  })
}
clearingBasket()
