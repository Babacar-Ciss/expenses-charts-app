// Récuperation données data.json
import * as datas from "../data.json" ;

//Variables
let currentIndex;
let previousIndex;

// Selecteurs //
const charts = document.querySelectorAll(".container__spending-card-graphics-days")

//Récuperation du jour sous format 3 lettres(thu)
let date = new Date();
let currentDate = date.toDateString().slice(0,3).toLowerCase();

//Récupération de l'index du jour
currentIndex = datas.findIndex(data => data.day === currentDate);

// Activation jour courant
charts[currentIndex].childNodes[3].style.backgroundColor = '#76B5BC';
charts[currentIndex].insertAdjacentHTML("beforeend", `<p> $${datas[currentIndex].amount} </p>`);



// Survol (Focus) pour récupérer le montant dépensé
charts.forEach((chart,index) => {
      
    // Survol (mouseover) pour récupérer le montant dépensé
        chart.addEventListener("mouseover", () => {
            cleanPreviousDisplay(charts);
            if(currentIndex === index) return
            else chart.insertAdjacentHTML("beforeend", `<p> $${datas[index].amount} </p>`);               
    })       

    // mouseout  pour enlever l'affichage le montant dépensé
        chart.addEventListener("mouseout", () => {
            cleanPreviousDisplay(charts);
        });

})


function cleanPreviousDisplay (els) {
    els.forEach(el => {
        if(el.children.length === 3)
        el.removeChild(el.lastChild);
    })  
    charts[currentIndex].insertAdjacentHTML("beforeend", `<p> $${datas[currentIndex].amount} </p>`);
}




