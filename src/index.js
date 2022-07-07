// Récuperation données data.json
import * as datas from "../data.json" ;

// Selecteurs //
const charts = document.querySelectorAll(".container__spending-card-graphics-days")



console.log(charts[0]);

let currentIndex;

//Récuperation du jour sous format 3 lettres(thu)
let date = new Date();
let currentDate = date.toDateString().slice(0,3).toLowerCase();

//Récupération de l'index du jour
currentIndex = datas.findIndex(data => data.day === currentDate);

charts[currentIndex].classList.add("active");
charts[currentIndex].classList.remove("container__spending-card-graphics-days div");