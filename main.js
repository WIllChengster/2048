$(document).ready(initializeApp)

function initializeApp(){
    attachEventHandlers()
}

function attachEventHandlers(){
    $('.game-piece').on('click', ()=>{
        console.log('clicked')
    })
}