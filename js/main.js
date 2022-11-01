const userKm = prompt ("Ciao quanti km vuoi percorrere oggi?");
const userAge = prompt ("Quanti anni hai?");
const price = Math.round(userKm * .21);
const priceFull = (userAge >= 18 && userAge < 65) === price;

price.toFixed (0);

console.log("Km che il passeggero desidera percorrere:", userKm);
console.log("L'età del passeggero:", userAge);

if (userAge < 18 ) {
    console.log("Il passeggero è minorenne, pagherà:", ( price * .8));
} else if ( userAge >= 65 ) {
    console.log("Il passeggero è over 65, pagherà:", ( price * .6));
} else {
    console.log("Il prezzo è di:", price);
}

//MILESTONE 1:
//Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), 
//realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
//MILESTONE 2:
//Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
//Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//MILESTONE 2:
//Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
//Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
//Nota:
//Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.