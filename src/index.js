// Récuperation données data.json
import * as datas from "../data.json" ;

//Variables
let currentIndex;
let arrayExpense = [];
let totalExpense;
let currentBalance = 921.48;


// Selecteurs //
const charts = document.querySelectorAll(".container__spending-card-graphics-days");
const totalExpenseDOM = document.querySelector("#expenses");
const balanceDOM = document.querySelector("#balance");

//Récuperation du jour sous format 3 lettres(thu)
let date = new Date().toLocaleDateString('en-us', { weekday:"short"}).toLocaleLowerCase();

//Récupération de l'index du jour
currentIndex = datas.findIndex(data => data.day === date);

// Activation jour courant
charts[currentIndex].childNodes[3].style.backgroundColor = '#76B5BC';
charts[currentIndex].insertAdjacentHTML("beforeend", `<p> $${datas[currentIndex].amount} </p>`);


// Survol (Focus) pour récupérer le montant dépensé
charts.forEach((chart,index) => {
      
    // Survol (mouseover) pour récupérer le montant dépensé
        chart.addEventListener("mouseover", () => {
            cleanPreviousDisplay(charts);
            if(currentIndex === index) return
            else {
                chart.insertAdjacentHTML("beforeend", `<p> $${datas[index].amount} </p>`);
                chart.lastChild.setAttribute("class", "styleChart");
            }                
    })       

    // mouseout pour enlever l'affichage le montant dépensé
        chart.addEventListener("mouseout", () => {
            cleanPreviousDisplay(charts);
          chart.classList.remove("styleChart");
        });
})

// Fonction pour désactiver tous les états précédents
function cleanPreviousDisplay (els) {
    els.forEach(el => {
        if(el.children.length === 3)
        el.removeChild(el.lastChild);
    })  
    charts[currentIndex].insertAdjacentHTML("beforeend", `<p> $${datas[currentIndex].amount} </p>`);
}

// Conversion obj en array of expenses
datas.forEach(data => arrayExpense.push(data.amount));

// Calcul dépense total semaine
totalExpense = arrayExpense.reduce((prev, curr) => {
    return prev + curr
},0)

// mise a jour du DOM total dépense
totalExpenseDOM.textContent = "$"+ totalExpense.toFixed(2);

// mise a jour DOM balance
balanceDOM.textContent = "$"+ (currentBalance - totalExpense).toFixed(2)










