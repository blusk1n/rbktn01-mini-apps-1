var game = [
  ["#","#","#"],
  ["#","#","#"],
  ["#","#","#"],
]

let P1 = document.getElementById("P1S")
let P2 = document.getElementById("P2S")

let player1Name = prompt("enter you name player 1").toUpperCase()

let player2Name = prompt("enter you name player 2").toUpperCase()

let playerOne =document.getElementById("p1")
let playerTwo =document.getElementById("p2")

playerOne.innerText = player1Name
playerTwo.innerText = player2Name


//all the button in you game
let btn1 = document.getElementById("1")
let btn2 = document.getElementById("2")
let btn3 = document.getElementById("3")
let btn4 = document.getElementById("4")
let btn5 = document.getElementById("5")
let btn6 = document.getElementById("6")
let btn7 = document.getElementById("7")
let btn8 = document.getElementById("8")
let btn9 = document.getElementById("9")

let xScore = 0;
let oScore = 0;

//counter that guess witch player is playing
let counter = 0
let play = (target)=>{
  // counter%2 === 0 ? target.textContent = "X" : target.textContent = "O";

  if(counter%2===0){
    target.textContent = "X"
    //this statemet is to check the row and column that you press and changed in the game table
    game[parseInt(target.value[0])][parseInt(target.value[1])] = "X"
  }
  else{
    target.textContent = "O"
    game[parseInt(target.value[0])][parseInt(target.value[1])] = "O"
  }
  counter++
  target.disabled = true;

  checkCol(game)
  checkMajorDiag(game)
  checkRow(game)
  checkMinorDiag(game)

  P1.innerText = xScore
  P2.innerText = oScore
}

let checkRow  =(arr)=>{
  for(var i = 0 ; i < arr.length ; i++ ){
    for(var j = 0 ; j < arr.length; j++ ){
        if(arr[i][j] === arr[i][j+1] && arr[i][j] === arr[i][j+2] ){
          if(arr[i][j]==="X"){
            alert("the X player Win")
            xScore++
            disabledAll()
          }
          if(arr[i][j]==="O"){
            alert("the O player Win")
            oScore++
            disabledAll()
          }
     }
    }
  }

}

let checkCol=(arr) =>{
  for(var i = 0 ; i < arr.length ; i++ ){
    for(var j = 0 ; j < arr.length-2; j++ ){
       if(arr[j][i] === arr[j+1][i] && arr[j][i] === arr[j+2][i] ){
          if(arr[j][i]==="X"){
            alert("the X player Win")
            xScore++
            disabledAll()
          }
          if(arr[j][i]==="O"){
            alert("the O player Win")
            oScore++
            disabledAll()
          }
      }
    }
  }
}


  let checkMinorDiag = (arr) => {
    let xCount = 0 ;
    let OCount = 0 ;
    for(var i=0 , j = arr.length-1 ; i < arr.length-1 ,j>=0;i++,j-- ){
      if(arr[i][j]=== "X"){
        xCount++
      }
      if(arr[i][j]=== "O"){
        OCount++
      }
      if(OCount === 3 ){
        alert("the O player Win")
        oScore++
        disabledAll()
      }
      else if(xCount === 3){
        alert("the X player Win")
        xScore++
        disabledAll()
      }
    }
  }

let checkMajorDiag = (arr) => {
  let xCount = 0 ;
  let OCount = 0 ;
  for(var i=arr.length-1 , j=arr.length-1; i>=0,j>=0;i--,j-- ){
    if(arr[i][j]=== "X"){
      xCount++
    }
    if(arr[i][j]=== "O"){
      OCount++
    }
    if(OCount === 3){
      alert("the O player Win")
      oScore++
      disabledAll()
    }
    else if(xCount === 3){
      alert("the X player Win")
      xScore++
      disabledAll()

    }
  }
}
//to disable all the button
let disabledAll = ()=>{
    btns.forEach(elm =>{
    elm.disabled = true;
  })
}
//replay
let btns = document.querySelectorAll(".btn")
let replay = ()=>{
    btns.forEach(elm =>{
      elm.disabled = false;
      elm.innerText = "";
      counter = 0;
      game = [
        ["#","#","#"],
        ["#","#","#"],
        ["#","#","#"],
      ]
    })
}