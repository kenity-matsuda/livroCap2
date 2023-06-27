let contador = 1;
function adicionarCard() {
const container = document.querySelector (`#container`);

    const card = document.createElement(`div`);
    card.classList.add(`card`);
    card.innerText = `card` + contador;

   
    container++;
    
    container.appendChild(card);
}