$(document).ready(initializeApp)

function initializeApp(){
    attachEventHandlers()
    const Game = new App

    Game.initGame()

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
        for(let i = 0; i<4; i++){
            const row = $('<div>', {
                'class': 'row'
            });
            let gamePiece=null;
            for(let j = 0; j<4; j++){
                 gamePiece = $('<div>',{
                    'class': 'game-piece'
                });
                row.append(gamePiece)

            }

            $('.game-board').append(row)
        }

    }
    restartGame(){
        console.log('restarting game');
    }

}
