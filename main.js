$(document).ready(initializeApp)

function initializeApp(){
    Game.restartGame();
    attachEventHandlers();
}

function attachEventHandlers(){
    $('.game-piece').on('click', () => {
        console.log('clicked');
    });
    $('.up').on('click', () => {
        Game.moveUp();
    });
    $('.down').on('click', () => {
        Game.moveDown();
    });
    $('.left').on('click', () => {
        Game.moveLeft()
    });
    $('.right').on('click',() => {
        Game.moveRight();
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
    genNewPiece(amount){
        for(let i = 0; i<amount; i++){
            const randRow = Math.floor(Math.random()*4);
            const randCol = Math.floor(Math.random()*4);
            if(!this.array[randRow][randCol]){
                this.array[randRow][randCol] = 2;
                $(`#row${randRow} #col${randCol}`).text(2);
            }else {
                i--;
            };
        }
    }

    // startGame(){
    //     for(let i = 0; i<2; i++){
    //         const randRow = Math.floor(Math.random()*4);
    //         const randCol = Math.floor(Math.random()*4);
    //         if(!this.array[randRow][randCol]){
    //             this.array[randRow][randCol] = 2;
    //             $(`#row${randRow} #col${randCol}`).text(2);

    //         }else {
    //             i--;
    //         };
    //     };
    // }

    moveUp(){
        for(let i = 0; i<4; i++){
            //iterate down the rows
            for(let j = 0; j<4; j++){
                //iterate through cols
                //then numbers up into the farthest empty position upward
                if(this.array[i][j]){
                    let num = this.array[i][j];
                    let didNumMove = false;
                    for(let k = 0; k<4 && !didNumMove; k){
                        if(this.array[i-1]===undefined){
                            break;
                        } else if(this.array[k][j]){
                            k++;
                        } else if(!this.array[k][j]){
                            this.array[k][j] = num;
                            this.array[i][j] = null;
                            $(`#row${k} #col${j}`).text(num);
                            $(`#row${i} #col${j}`).text(null);
                            didNumMove = true;
                        } else break
                    }
                }
            }
        }
        this.genNewPiece(1)
    }

    moveRight(){
        for(let i = 0; i<4; i++){
            //iterate down the rows
            for(let j = 3; j>=0; j--){
                //iterate through cols
                //then numbers up into the farthest empty position upward
                if(this.array[i][j]){
                    let num = this.array[i][j];
                    let didNumMove = false;
                    for(let k = 3; k>=0 && !didNumMove; k){
                        if(this.array[j+1]===undefined){
                            break;
                        } else if(this.array[i][k]){
                            k--;
                        } else if(!this.array[i][k]){
                            this.array[i][k] = num;
                            this.array[i][j] = null;
                            $(`#row${i} #col${k}`).text(num);
                            $(`#row${i} #col${j}`).text(null);
                            didNumMove = true;
                        } else break;
                    }
                }
            }
        }
        this.genNewPiece(1)
    }

    moveDown(){
        for(let i = 3; i>=0; i--){
            //iterate down the rows
            for(let j = 0; j<4; j++){
                //iterate through cols
                //then numbers up into the farthest empty position upward
                if(this.array[i][j]){
                    let num = this.array[i][j];
                    let didNumMove = false;
                    for(let k = 3; k>=0 && !didNumMove; k){
                        if(this.array[i+1]===undefined){
                            break;
                        } else if(this.array[k][j] && k > i){
                            k--;
                        } else if(!this.array[k][j]){
                            this.array[k][j] = num;
                            this.array[i][j] = null;
                            $(`#row${k} #col${j}`).text(num);
                            $(`#row${i} #col${j}`).text(null);
                            didNumMove = true;
                        } else break;
                    }
                }
            }
        }
        this.genNewPiece(1)
    }

    moveLeft(){
        for(let i = 0; i<4; i++){
            //iterate down the rows
            for(let j = 0; j<4; j++){
                //iterate through cols
                //then numbers up into the farthest empty position upward
                if(this.array[i][j]){
                    let num = this.array[i][j];
                    let didNumMove = false;
                    for(let k = 0; k<4 && !didNumMove; k){
                        if(this.array[j-1]===undefined){
                            break;
                        } else if(this.array[i][k]){
                            k++;
                        } else if(!this.array[i][k]){
                            this.array[i][k] = num;
                            this.array[i][j] = null;
                            $(`#row${i} #col${k}`).text(num);
                            $(`#row${i} #col${j}`).text(null);
                            didNumMove = true;
                        } else break;
                    }
                }
            }
        }
        this.genNewPiece(1)
    }

    restartGame(){
        this.newBoard();
        this.genNewPiece(2);
    }

}
const Game = new App
