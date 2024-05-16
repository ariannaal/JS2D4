function tabellone() {
    const table = document.getElementById("tabellone");

    for (let i = 0; i < 76; i++) {
        // 2.1 Ad ogni iterazione dovrò creare un div, la cella
        const numberCell = document.createElement("div"); // <div></div>
        
        // 2.2 Dobbiamo aggiungere una classe 'cella' al div
        numberCell.classList.add("cella");

        // 2.3 All'interno del div dovrà esserci un h3 con il numero della cella
        const cellContent = document.createElement("h3"); // <h3></h3>
        cellContent.innerText = i + 1;
         cellContent.classList.add("numero");

        // 2.4 Devo appendere l'h3 appena creato alla cella
        numberCell.appendChild(cellContent);
        
        table.appendChild(numberCell);
    }
}

tabellone()


// devo fare un bottone che mi dia un numero random da 1 a 76 a cui collego un eventListener('click').

const estraiElement = document.getElementById("btnExtract");
const numeroEstratto = document.getElementById("numeroEstratto")

//devo crearmi l'addEventListener click
estraiElement.addEventListener("click", function (event) {
    event.preventDefault()
    console.log(event);

    //devo generare un numero casuale da 1 a 76
    const numeroRandom = Math.floor(Math.random() * 76) + 1;

    //devo fare in modo che il numero estratto venga mostrato nello span #numeroEstratto
    numeroEstratto.textContent = numeroRandom;

    //prendo tutti gli elementi della tombola

    const celleElements = document.querySelectorAll(".cella");
  
    celleElements.forEach(cella => {
        if (Number.parseInt(cella.firstChild.innerText) === numeroRandom) {
            //console.log("il numero estratto è: ", numeroRandom);
            cella.style.background = "rgb(187, 41, 41)";
            cella.style.color= "white";
        }
    });

});



//faccio lo stesso per crearmi la tabellina

function tabellina() {
    const littleTable = document.getElementById("tabellina");

    for (let i = 0; i < 24; i++) {
        
        const numberCellTabellina = document.createElement("div"); // <div></div>
        
    
        numberCellTabellina.classList.add("cellaTabellina");

     
        const cellContentTabellina = document.createElement("h3"); // <h3></h3>
        
       
        const randomNumber = Math.floor(Math.random() * 76) + 1;
        cellContentTabellina.innerText = randomNumber;
        cellContentTabellina.classList.add("numeroTabellina");

       
        numberCellTabellina.appendChild(cellContentTabellina);
        
        littleTable.appendChild(numberCellTabellina);
    }
}

tabellina();


const estraiElementTabellina = document.getElementById("littleBtnExtract");
const numeroEstrattoTabellina = document.getElementById("numeroEstrattoTabellina")

//devo crearmi l'addEventListener click
estraiElementTabellina.addEventListener("click", function (event) {
    event.preventDefault()
    console.log(event);

    //devo generare un numero casuale da 1 a 76
    const numeroRandomTabellina = Math.floor(Math.random() * 76) + 1;

    //devo fare in modo che il numero estratto venga mostrato nello span #numeroEstrattoTabellina
    numeroEstrattoTabellina.textContent = numeroRandomTabellina;
 
    const celleElementsTabellina = document.querySelectorAll(".cellaTabellina");
  
    celleElementsTabellina.forEach(cellaTabellina => {
        if (Number.parseInt(cellaTabellina.firstChild.innerText) === numeroRandomTabellina) {

            //console.log("il numero estratto è: ", numeroRandom);
            cellaTabellina.style.background = "rgb(187, 41, 41)";
            cellaTabellina.style.color= "white";
        }
});

    });
