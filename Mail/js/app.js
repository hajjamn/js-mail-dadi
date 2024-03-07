

// Chiedo la email all-utente con un prompt
const userEmail = prompt('Inserisci la tua email')
console.log(userEmail)

// Scrivo una lista di email accettate

const verifiedEmails = ["donato.riccio@gmail.com", "samuel.panicucci@gmail.com"];

// Definisco una variabile per verificare se l email dell utente e verificata

let isUserEmailVerified = false

// Verifico se la mail inserita e tra quelle verificate
//controlla tutte le emailVerificate
for (let i = 0; i < verifiedEmails.length; i++) {
  //Se il valore di userEmail e uguale ad una di quelle nell array allora cambio il valore di isUserEmailVerified a true
  if (userEmail === verifiedEmails[i]) {
    isUserEmailVerified = true;
  }
  
}

//Stampo il messaggio appropriato in console
  //Se il valore di isUserEmailVerified e vero stampo messaggio di successo
  if (isUserEmailVerified == true) {
    console.log('Benvenuto nel sito')
  } else {
    //Altrimenti stampo messaggio di fallimento
    console.log('Email errata')
  }