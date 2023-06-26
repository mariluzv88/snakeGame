// ---------------Game Loop-------------------------
// hudscore: score counter 
// check score limit for 2nd round ++speed
// check score limit for 3rd round ++speed
// check win based on  3rd round score amount for player 1
// check for gameover if player 2 wins 
// player 1 or player2 hit wall win/lose condition
//check is  players enter food postion (unshift,pop) snake object

// ------------player inputs----------
// player 1 snake object
// player 1 snake head array ...(unshift) based on input direction
// player 1 snake tail ...array(pop) based on input direction
// player 1 snake body speed per sec
let player1 = document.querySelector('.p1Snake')
let p1Speed = 0;
// x, y postions
// player 1 movement inputs based on x , y postions
let p1UDLR = {
    xPosition:0,
    yPosition:0
}
let p1UpdatedUDLR = {
    xPosition:0,
    yPosition:0
}
// spawn postion x,y


// player 2 snake object
// player 2 snake head array ...(unshift) based on input direction
// player 2 snake tail ...array(pop) based on input direction
// player 2 snake body speed per sec
let player2 = document.querySelector('p2Snake')
let p2Speed = 0;
// player 2 movement inputs based on x , y postions
let p2UDLR = {
    xPosition:0,
    yPosition:0
}
let p2UpdatedUDLR = {
    xPosition:0,
    yPosition:0
}
// ------------keydown event for movement------------
// player one up/down/left/right  direction
// player two up/down/left/right  direction
window.addEventListener('keydown',(e)=>{
   
    switch(e.key){
        case 'KeyW':
        if(p1UDLR.yPosition > 0){
        p1UpdatedUDLR = 
        {xPosition:0,
        yPosition:-1} 
        }
        break;
        case 'KeyS':
        if(p1UDLR.yPosition > 0){
        p1UpdatedUDLR = 
        {xPosition:0,
        yPosition:1} 
        }
        break;
        case 'KeyA':
        if(p1UDLR.yPosition > 0){
        p1UpdatedUDLR = 
        {xPosition:-1,
        yPosition:0} 
        }
        break;
        case 'KeyD':
        if(p1UDLR.yPosition > 0){
        p1UpdatedUDLR = 
        {xPosition:1,
        yPosition:0} 
        }
        break;
        case 'ArrowUp':
        if(p1UDLR.yPosition > 0){
        p2UpdatedUDLR = 
        {xPosition:0,
        yPosition:-1} 
        }
        break;
        case 'ArrowDown':
        if(p1UDLR.yPosition > 0){
        p2UpdatedUDLR = 
        {xPosition:0,
        yPosition:1} 
        }
        break;
        case 'ArrowLeft':
        if(p1UDLR.yPosition > 0){
        p2UpdatedUDLR = 
        {xPosition:-1,
        yPosition:0} 
        }
        break;
        case 'ArrowRight':
        if(p1UDLR.yPosition > 0){
        p2UpdatedUDLR = 
        {xPosition:1,
        yPosition:0} 
        }
        break;
        
       
    }
})

const snake1Move = ()=>{
    let p1UDLR = p1UpdatedUDLR
    return p1UDLR
}
const snake2Move = ()=>{
    let p2UDLR = p2UpdatedUDLR
    return p2UDLR
}

 
   
// random spawn position


// -------------food pellets--------------
// food object
// 2 pellets spawn random x, y postion
// pop/unshift upon snake object entering x,y,postion


// ---------stretch goals------------------
// player2 based on random direction until  food is at radius  location
    //math.random directon (if food is x num of boxes away go towards food)

// rounds have different themes

// when score gets close to round limit blink animation and music for intensity





