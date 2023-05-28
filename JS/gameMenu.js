import { startGame } from "./startGame.js";

export const createGameMenu = () => {
    const title = document.createElement('h2');
    const gameSection = document.querySelector('.game-section_container');

    gameSection.innerHTML = '';
    title.textContent = 'Enter difficulty level';
    title.classList.add('game-menu_title');

    const createDifficult = (difficult) => {

        const form = document.createElement('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault()
        })
        const input = document.createElement('input');
        const buttonWrapper = document.createElement('div');
        const button = document.createElement('button');
        
        button.classList.add('button-difficult');
        button.classList.add('button-reset');
        button.classList.add('btn');
        input.classList.add('input-difficult');
        form.classList.add('form-difficult');
        buttonWrapper.classList.add('btn-difficult_container');
        button.textContent = 'Start';
        input.placeholder = '4 from 15';
        button.disabled = true;
        
        input.addEventListener('input', function () {
            this.value = this.value.replace(/[^\d]/g,'');
        })
        
        input.addEventListener('input', () => {
            input.value !== "" ? button.disabled = false : button.disabled = true
        });

       

        button.addEventListener('click', () => {
        if (input.value > 15 || input.value < 4)
        return input.value = 4
        })

        button.addEventListener('click', () => startGame(difficult));

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);
        
        return {
        form,
        input,
        button,
    }};

    let difficultForm = createDifficult();
   
    gameSection.append(
        title,
        difficultForm.form
    );
}