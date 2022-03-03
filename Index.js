import{drawship,checklose} from'./starship.js'
import {drawinv, moveinvaders,drawshots,updateshots,destroy,checkforwin} from'./Invaders.js'

let lastrender=0
const speed=4
let win=false
let dead=false
const gameboard=document.querySelector(".game")

function main(currenttime){
   if(dead){
    if(confirm('You lose press ok to restart')){
      window.location='/'
      
    }return }
       if(win){
    if(confirm('You win press ok to restart')){
      window.location='/'
      
    }return }
  window.requestAnimationFrame(main)
  const time=(currenttime-lastrender)/1000
  if(time<1/speed) return
  
  update()
  draw()
  lastrender=currenttime
}

main()

function update(){
  winner()
moveinvaders()
life()
updateshots()
destroy()
}

function draw(){
  gameboard.innerHTML=""
  drawship(gameboard)
  drawinv(gameboard)
  drawshots(gameboard)
}
function life(){
  dead=checklose()
}
function winner(){
  win=checkforwin()
}
