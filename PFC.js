const P = "Pierre";
const F = "Feuille";
const C = "Ciseaux";
const coups = [P,F,C];
const actions = document.querySelectorAll('input');
function joueCoupAleatoire() {
    return parseInt(Math.random() * coups.length);
}
actions.forEach(action => {
    action.addEventListener("click", ()=>{
        
    });
});