let button = document.querySelectorAll('.btn');
let msg = document.querySelector(".message");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");

let turnO= true;

let patterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

button.forEach( btn => {
    btn.addEventListener('click', () =>{
        if (turnO) {
            btn.innerHTML = 'O';
            btn.classList.add('o'); 
            turnO = false;
        } else {
            btn.innerHTML = 'X';
            btn.classList.add('x');
            turnO = true;
        }
        btn.disabled = true;
        checkWinner();
    })
})

function checkWinner(){
    for (const pattern of patterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        let play1 = button[pattern[0]].innerHTML;
        let play2 = button[pattern[1]].innerHTML;
        let play3 = button[pattern[2]].innerHTML;
        if (play1 != '' && play2 != '' && play3 != '') {
            if (play1 == play2 && play2 == play3) {
                msg.innerHTML = `${play1} is winner`;
                msg.style.color = "green"
                endGame();
                reset.disabled = true;
            }
        }
    }
}

function endGame() {
    for(btn of button){
        btn.disabled = true;
    }
}

reset.addEventListener('click', ()=>{
    for (const btn of button) {
        btn.innerHTML = '';
        turnO= true;
        btn.disabled = false;
    }
})

newGame.addEventListener('click', () =>{
    for (const btn of button) {
        btn.innerHTML = '';
        turnO= true;
        btn.disabled = false;
        reset.disabled = false;
    }
    msg.innerHTML = "";
})