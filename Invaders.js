import{getship} from'./starship.js'

let invarray=[
  [1,1],[2,1],[3,1],
  [1,2],[2,2],[3,2]
  ]
  
  export function drawinv(gameboard){
    invarray.forEach(function(inv){
    const element=document.createElement('div')
    element.classList.add('invaders')
    element.style.gridColumnStart=inv[0]
    element.style.gridRowStart=inv[1]
      gameboard.appendChild(element)
    })
    
  }
  
  let direction=1
  export function moveinvaders(){
    if(edge() =="rightedge" &&direction ==1){direction=-1;
      invarray=invarray.map(function(elem){
        return [elem[0],elem[1]+1]
      })
      return
    }
     if(edge() =="leftedge" &&direction ==-1){direction=1;
      invarray=invarray.map(function(elem){
        return [elem[0],elem[1]+1]
      })
      return
    }
    invarray=invarray.map(function(elem){
      return [elem[0]+direction,elem[1]]
    })
  }
  
  
  
  function edge(){
    if(invarray[0][0]==1){return "leftedge"}
    else if(invarray.some(function(elem){return elem[0]==11})){return "rightedge"}
    else {return "noedge"}
    
  }
  
  export function getinv(){
    return invarray
  }
  
  let shots=[]
  let k=0
  function def(){
    k=0
  }
  const boom=document.querySelector(".shoot")
  boom.addEventListener("click",()=>{
    if(k==0){
  shots.push(getship())
  k=1
  setTimeout(500,def())
    }
  })
  

  export function drawshots(gameboard){
    shots.forEach(function(inv){
    const element=document.createElement('div')
    element.classList.add('shot')
    element.style.gridColumnStart=inv[0]
    element.style.gridRowStart=inv[1]-1
      gameboard.appendChild(element)
    })
   // console.log(getIntersection(shots,invarray))
  }
  
  export function updateshots(){
    shots=shots.map(function(elem){return [elem[0],elem[1]-1] }
      )
      shots=shots.filter(function(elem){
        if(elem[1]>=1){return true}
      })
  }
 /* export function destroy(){
    getIntersection(invarray,shots)
  }
  
  function getIntersection(arr2,arr1){
    let filtred=arr2.slice()
  for(let i=0;i<arr1.length;i++){
     filtred=filtred.filter(function(elem){
       if(elem[0]==arr1[i][0] && elem[1]==arr1[i][1]){
         return false}
         else {return true}
     
     })}
   
   arr2=filtred
  }*/
  export function destroy(){
 let filtrer=invarray.slice()
  for(let i=0;i<shots.length;i++){
  filtrer=filtrer.filter((elem)=>{if(elem[0]==shots[i][0] && elem[1]==shots[i][1]){return false}
    return true
  })}
  
   let filtrer2=shots.slice()
  for(let i=0;i<invarray.length;i++){
  filtrer2=filtrer2.filter((elem)=>{if(elem[0]==invarray[i][0] && elem[1]==invarray[i][1]){return false}
    return true
  })}
  invarray=filtrer
  shots=filtrer2
  }
  
  
  export function checkforwin(){
    return invarray.length==0
  }
  
