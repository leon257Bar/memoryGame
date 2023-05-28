import Card from "./card.js";
import { createGameMenu } from "./gameMenu.js";
import { createArrayNumbers, shuffleArr } from "./utils.js";



export const startGame = (difficult) => {
    
    let firstCard = null;
    let secondCard = null;

    const input = document.querySelector('.input-difficult');
    difficult = parseInt(input.value);

    const gameSection = document.querySelector('.game-section_container');
    const gameTable = document.createElement('div');
    const cardsIcons = createArrayNumbers(difficult);
    const filtredArr = shuffleArr(cardsIcons);
    const restartBtn = document.createElement('button');
    gameSection.innerHTML = '';

    restartBtn.addEventListener('click',createGameMenu)
    
    restartBtn.textContent = 'Restart';
    gameTable.classList.add('game-table');
    restartBtn.classList.add('restart-btn');
    restartBtn.classList.add('button-reset');
    restartBtn.classList.add('btn');
    gameSection.append(gameTable, restartBtn)

    filtredArr.forEach(value => new Card(gameTable, value, flip))
    
    function flip(card) {

        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number !== secondCard.number) {
                firstCard.open = false;
                secondCard.open = false;
                firstCard = null;
                secondCard = null;
            }
           }

        if (!firstCard) {firstCard = card}
        else {
        if (!secondCard) secondCard = card
       }
       if (firstCard !== null && secondCard !== null) {
        if (firstCard.number == secondCard.number) {
            firstCard.success = true;
            secondCard.success = true;
            firstCard = null;
            secondCard = null;
        }
       }
       if (document.querySelectorAll('.game-card.success').length == cardsIcons.length) {
        let card = gameTable.children;
        for (let i = 8; i < card.length; i++) {
            card[i].textContent = ''; 
        }
        console.log(card);
        card[0].textContent ='Y'
        card[1].textContent ='O'
        card[2].textContent ='U'
        card[3].textContent =''
        card[4].textContent =''
        card[5].textContent ='W'
        card[6].textContent ='I'
        card[7].textContent ='N'
        
    }
    }    
    
}
