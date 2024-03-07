//Genero il numero random per il giocatore e per il computer

const playerNumber = Math.floor(Math.random() * (6) ) + 1;
const houseNumber = Math.floor(Math.random() * (6) ) + 1;
console.log(playerNumber, houseNumber);

//Confronto i risultati ottenuti
  //Se il valore del giocatore e superiore a quello del pc stampo messaggio vittoria
  if (playerNumber > houseNumber) {
    console.log('Hai vinto!')
  } else if (
    //Se il valore del giocatore e inferiore a quello del pc stampo messaggio di sconfitta
    playerNumber < houseNumber ) {
      console.log('Oh no, hai perso!')
    } else {
      //Altrimenti stampo messaggio di pareggio
      console.log('Pareggio. Riprova!')
    }
    
  