$(document).ready(initializeApp)

function initializeApp(){
    attachEventHandlers()
}

function attachEventHandlers(){
    $('.game-piece').on('click', () => {
        console.log('clicked')
    });
    $('.up').on('click', () => {
        console.log('up')
    });
    $('.down').on('click', () => {
        console.log('down')
    });
    $('.left').on('click', () => {
        console.log('left')
    });
    $('.right').on('click',() => {
        console.log('right')
    });
}

class App {
    constructor(game){
        this.score=0;

    }
    initGame(){
        console.log('initializing game');
        const gamePiece = $('<div class="game-piece"></div>');
        const row = $('<div class="row"></div>');
        row.append(gamePiece)
        $('.game-board').append(row)
    }
    restartGame(){
        console.log('restarting game');
    }

}
const Game = new App
Game.initGame()

