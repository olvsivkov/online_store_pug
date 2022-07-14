

export function search(): void {
  let input = <HTMLInputElement>document.getElementById("inputSearch");
  let filter: string = input.value.toUpperCase();
  let card = document.querySelectorAll<HTMLElement>(".card");

  if(filter.length <=2) {
    return
  }
  else{
    for (let i = 0; i < card.length; i++) {
      let result = card[i]
      if (result.innerHTML.toUpperCase().indexOf(filter) > -1) {
        card[i].style.display = "";
      } else {
        card[i].style.display = "none";
      }
    }
  }
}

document.addEventListener('keyup', search);


let clearInput = <HTMLElement>document.querySelector(".srch-btn-text");


 export function clearSearch(): void{
  window.location.reload()
}

clearInput.addEventListener("click", clearSearch)