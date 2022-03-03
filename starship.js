import {getinv} from './Invaders.js'

let starship=[6,10]
let i=0
export function drawship(board)
{
			const element=	document.createElement('div')
				element.classList.add('starship')
				element.style.gridRowStart=starship[1]
				element.style.gridColumnStart=starship[0]
				board.appendChild(element)
			
				
}

const moveup=document.querySelector(".moveup")
moveup.addEventListener("click",()=>{
  if(starship[0]>=11 || i==1)return
  starship[0]+=1
  i=1
  setTimeout(200,dflt())
})
const movedown=document.querySelector(".movedown")
  movedown.addEventListener("click",()=>{
    if(starship[0]<=1 ||i==1)return
    starship[0]-=1
    i=1
    setTimeout(200,dflt())
  })
  
  function dflt(){
    i=0
  }
  
 export function getship(){
    return starship
  }
  
  
  export function checklose(){
    return getinv().some(function(elem){
      return elem[0]==getship()[0]&& elem[1]==getship()[1]
    })
  }
      
