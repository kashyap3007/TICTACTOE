console.log("Welcome to my game")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("Adbhut.mp3")
let turn = "X"
// all audios and turn ko variable bna lo

let isgameover = false;



// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let cross = document.getElementsByClassName('cross');
    // getting elemnts of box class
    //basically a dom
    // cross class name hn box k andar wala
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((cross[e[0]].innerText === cross[e[1]].innerText) && (cross[e[2]].innerText === cross[e[1]].innerText) && (cross[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = cross[e[0]].innerText + " Won"
            isgameover = true
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let cross = element.querySelector('.cross');
    element.addEventListener('click', ()=>{
        if(cross.innerText === ''){
            cross.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for Player " + turn;
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let cross = document.querySelectorAll('.cross');
    Array.from(cross).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for Player " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})