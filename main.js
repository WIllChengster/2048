$(document).ready(initializeApp)

function initializeApp(){
    Game.restartGame()
    attachEventHandlers()
}

function attachEventHandlers(){
    $('.game-piece').on('click', () => {
        console.log('clicked')
    });
    $('.up').on('click', () => {
        Game.moveUp()
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
        this.array=[
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
        ]
    }

    newBoard(){
        $('.row').remove();
        this.array=[
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
        ];
        console.log('initializing game');
        for(let i = 0; i<4; i++){
            const row = $('<div>', {
                'class': 'row',
                'id':`row${i}`
            });
            let gamePiece=null;
            for(let j = 0; j<4; j++){
                 gamePiece = $('<div>',{
                    'class': 'game-piece',
                    'id':`col${j}`,
                    'text': null
                });
                row.append(gamePiece);
            }
            $('.game-board').append(row);
        };
    }

    startGame(){
        for(let i = 0; i<2; i++){
            const randRow = Math.floor(Math.random()*4);
            const randCol = Math.floor(Math.random()*4);
            if(!this.array[randRow][randCol]){
                this.array[randRow][randCol] = 2;
                $(`#row${randRow} #col${randCol}`).text(2);

            }else {
                i--;
            };
        };
    }
    moveUp(){
        for(let i=0; i<4; i++){
            for(let j=0; j<4; j++){
                if(this.array[i][j]){
                    let num= this.array[i][j];
                    for(let k = 0; k<4 && k<i && !isDone; k++){
                        //go through each column until the original position
                        if(!$(`#row${k} #col${j}`).text()){
                            $(`#row${i} #col${j}`).text(null)
                            $(`#row${k} #col${j}`).text(num)
                            let isDone = true;
                        }
                    }
                }
            }
        }
    }

    restartGame(){
        this.newBoard();
        this.startGame();
    }

}
const Game = new App
