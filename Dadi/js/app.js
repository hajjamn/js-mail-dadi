//Genero il numero random per il giocatore e per il computer

const playerNumber = Math.floor(Math.random() * (6) ) + 1;
const houseNumber = Math.floor(Math.random() * (6) ) + 1;
console.log(playerNumber, houseNumber);

//Confronto i risultati ottenuti
  //Se il valore del giocatore e superiore a quello del pc stampo messaggio vittoria
  //Se il valore del giocatore e inferiore a quello del pc stampo messaggio di sconfitta
  //Altrimenti stampo messaggio di pareggio