const km = 10;
const age = 40;
const prezzoBase = Math.round(km * .21);
const prezzoFinale = (age >= 18 && age < 65) === prezzoFinale;

prezzoBase.toFixed (0);

if ( isNaN( km ) ) {
    alert( "I chilometri inseriti sono errati" );
}

console.log("Km che il passeggero desidera percorrere:", km);
console.log("L'età del passeggero:", age);

if (age < 18 ) {
    console.log("Il passeggero è minorenne, pagherà:", ( prezzoBase * .8));
} else if ( age >= 65 ) {
    console.log("Il passeggero è over 65, pagherà:", ( prezzoBase * .6));
} else {
    console.log("Il prezzo è di:", prezzoBase);
}

const ageEl = document.getElementById( "age" );
const kmEl = document.getElementById( "km" );
const discountEl = document.getElementById( "discount" );
const finalPriceEl = document.getElementById( "finalPrice" );

ageEl.innerHTML = age;
kmEl.innerHTML = km;

if ( scontoDaApplicare ) {
    discountEl.innerHTML = scontoDaApplicare;
}

// finalPriceEl.innerHTML = "€ " + prezzoFinale.toFixed( 2 );
finalPriceEl.innerHTML = `€ ${ prezzoFinale.toFixed( 2 ) }`;

const btnGenera = document.getElementById("genera");

btnGenera.addEventListener("click", function (){
    const usernameInput = document.querySelector( "[name= 'username']" );
    const kmInput = document.querySelector ( "[name= 'km']" );
    const ageInput = document.querySelector( "[name='age']" );
    const scontoInput = document.querySelector( "[name='sconto']" );

    const usernameValue = usernameInput.value;
    const kmValue = kmInput.value;
    const ageValue = ageInput.value;

    kmInput.value = ageInput.value;
    ageValue.innerHTML = ageValue; 

    const prezzoBase = kmInput.value * .21;
    let scontoDaApplicare = 0;

    if (ageInput.value !=="");{
        scontoDaApplicare = ageInput.value;
    }

    const prezzoScontato = prezzoBase - ( prezzoBase * scontoDaApplicare / 100 );

    console.log( "prezzo finale", prezzoScontato );
})




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