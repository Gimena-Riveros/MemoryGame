// INICIALIZAMOS VARIABLES DE TARJETAS
let uncoverCards = 0;
let cardFirst, cardSecond = null;
let resultFirst, resultSecond = null;


// GENERAMOS NUMEROS ALEATORIOS
let randomNumbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
randomNumbers = randomNumbers.sort(() => {return Math.random() - 0.5});

// MAIN FUNCTION
function uncover(id) {
    uncoverCards++;
    
    // ES LA TARJETA UNO O DOS?
    if(uncoverCards == 1) {
        cardFirst = document.getElementById(id);
        resultFirst = randomNumbers[id];
        cardFirst.innerHTML = resultFirst;
        //FIRST BUTTON DISABLE
        cardFirst.disabled = true;
    }
    
}