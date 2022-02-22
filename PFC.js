const P = "Pierre";
const F = "Feuille";
const C = "Ciseaux";
const coups = [P,F,C];
const coupPC = document.querySelector('.coupPC');
const coupJ1 = document.querySelector('.coupJ1');
const actions = document.querySelectorAll('input');
const scorePC = document.querySelector('#PC');
const scoreJ1 = document.querySelector('#J1');
const msgs = document.querySelector(".vide");
const rejouer = document.querySelector(".replay");
let hasWon = false;
function joueCoupAleatoire() {
    return parseInt(Math.random() * coups.length);
}
function round(J1,PC) {
    switch (J1) {
        case "Pierre":
            if(PC=="Ciseaux"){hasWon = true};
            break;
        case "Feuille":
            if(PC=="Pierre"){hasWon = true};
            break;
        case "Ciseaux":
            if(PC=="Feuille"){hasWon = true};
            break;
        default:
            break;
    }
    return hasWon;
}
function checkIfWin() {
    if (scoreJ1.innerHTML == 3 || scorePC.innerHTML == 3) {
        hasWon=true;
        msgs.innerText = scoreJ1.innerHTML == 3 ? "J1" : "PC" + " sort vainqueur de cette partie !";
        rejouer.classList.remove("hidden");
        rejouer.addEventListener("click",()=>{
            scoreJ1.innerHTML = 0;
            scorePC.innerHTML = 0;
            hasWon = false;
            msgs.innerText="";
            coupJ1.innerText = "Thinking...";
            coupPC.innerText = "Thinking...";
            rejouer.classList.add("hidden");
        });
    }
}
actions.forEach(action => {
    action.addEventListener("click", ()=>{
        if (!hasWon) {
            coupJ1.innerText = action.value;
            coupPC.innerText = coups[joueCoupAleatoire()]
            if (coupJ1.innerText != coupPC.innerText) {
                round(coupJ1.innerText,coupPC.innerText);
                if (hasWon) {
                    scoreJ1.innerHTML = parseInt(scoreJ1.innerHTML)+1;
                    msgs.innerText = "Point pour J1";
                }else{
                    scorePC.innerHTML = parseInt(scorePC.innerHTML)+1;
                    msgs.innerText = "Point pour PC";
                }
                hasWon=false;
            }else{
                msgs.innerText = "ex-aequo";
            }
            checkIfWin()
        }
    });
});