// INICIALIZAMOS VARIABLES DE TARJETAS
let uncoverCards = 0;
let cardFirst, cardSecond = null;
let resultFirst, resultSecond = null;
let moves = 0;
let hits = 0;
// LINK TO HTML
let showMoves = document.getElementById('moved');
let showHits = document.getElementById('hits');

// GENERAMOS NUMEROS ALEATORIOS
let randomNumbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
randomNumbers = randomNumbers.sort(() => {return Math.random() - 0.5});
console.log(randomNumbers);

// MAIN FUNCTION
function uncover(id) {
    uncoverCards++;
    console.log(uncoverCards);
    
    // ES LA TARJETA UNO O DOS?
    if(uncoverCards == 1) {
        cardFirst = document.getElementById(id);
        resultFirst = randomNumbers[id];
        cardFirst.innerHTML = resultFirst;
        //FIRST BUTTON DISABLE
        cardFirst.disabled = true;
    } else if(uncoverCards == 2) {
        // SHOW THE SECOND CARD
        cardSecond = document.getElementById(id);
        resultSecond = randomNumbers[id];
        cardSecond.innerHTML = resultSecond;

        //SECOND BUTTON DISABLE 
        cardSecond.disabled = true;
        
        // INCREMENT MOVES
        moves++;
        showMoves.innerHTML = `Moves: ${moves}`;

        if(resultFirst == resultSecond) {
            // COUNTER UNCOVERCARDS START
            uncoverCards = 0;
            //HITS ++
            hits++;
            showHits.innerHTML = `Hits: ${hits}`;
        }
    }
    
}