const P = "Pierre";
const F = "Feuille";
const C = "Ciseaux";
const coups = [P,F,C];
const coupPC = document.querySelector('.coupPC');
const coupJ1 = document.querySelector('.coupJ1');
const actions = document.querySelectorAll('input');
const scorePC = document.querySelector('#PC');
const scoreJ1 = document.querySelector('#J1');
let hasWon = false;

function joueCoupAleatoire() {
    return parseInt(Math.random() * coups.length);
}
function round(J1,PC) {
    switch (J1) {
        case "Pierre":
            if(PC=="Feuille"){hasWon = true};
            break;
        case "Feuille":
            if(PC=="Ciseaux"){hasWon = true};
            break;
        case "Ciseaux":
            if(PC=="Pierre"){hasWon = true};
            break;
        default:
            break;
    }
    return hasWon;
}
actions.forEach(action => {
    action.addEventListener("click", ()=>{
        coupJ1.innerText = action.value;
        coupPC.innerText = coups[joueCoupAleatoire()]
        if (coupJ1.innerText != coupPC.innerText) {
            round(coupJ1.innerText,coupPC.innerText)?scoreJ1.innerHTML = parseInt(scoreJ1.innerHTML)+1:scorePC.innerHTML = parseInt(scorePC.innerHTML)+1;
        }
    });
});