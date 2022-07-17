let sortBtn = <HTMLElement>document.querySelector(".sort-btn")
let sortBtnReverse = <HTMLElement>document.querySelector(".sort-btn-reverse")
let sortBtnAge = <HTMLElement>document.querySelector(".sort-btn-age")

export function mySort(){
  let replaceNode
  let nav = <HTMLElement>document.querySelector(".main-wrapper")
  for (let i = 0; i < nav.children.length; i++){
    for(let j = i; j < nav.children.length; j++){
      if(+nav.children[i].getAttribute("data-price") > +nav.children[j].getAttribute("data-price")){
        replaceNode = nav.replaceChild(nav.children[j], nav.children[i])
        insertAfter(replaceNode, nav.children[i])
      }
    }
  }
}

export function mySortReverse(){
  let replaceNode
  let nav = <HTMLElement>document.querySelector(".main-wrapper")
  for (let i = 0; i < nav.children.length; i++){
    for(let j = i; j < nav.children.length; j++){
      if(+nav.children[i].getAttribute("data-price") < +nav.children[j].getAttribute("data-price")){
        replaceNode = nav.replaceChild(nav.children[j], nav.children[i])
        insertAfter(replaceNode, nav.children[i])
      }
    }
  }
}

export function mySortAge(){
  let replaceNode
  let nav = <HTMLElement>document.querySelector(".main-wrapper")
  for (let i = 0; i < nav.children.length; i++){
    for(let j = i; j < nav.children.length; j++){
      if(+nav.children[i].getAttribute("data-age") > +nav.children[j].getAttribute("data-age")){
        replaceNode = nav.replaceChild(nav.children[j], nav.children[i])
        insertAfter(replaceNode, nav.children[i])
      }
    }
  }
}

function insertAfter(elem: HTMLElement, refElem: HTMLElement){
  return refElem?.parentNode?.insertBefore(elem, refElem.nextSibling)
}

sortBtn.addEventListener("click", mySort)
sortBtnReverse.addEventListener("click", mySortReverse)
sortBtnAge.addEventListener("click", mySortAge)