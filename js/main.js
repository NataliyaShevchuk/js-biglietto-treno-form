const userKm = prompt ("Ciao quanti km vuoi percorrere oggi?");
const userAge = prompt ("Quanti anni hai?");
const price = Math.round(userKm * .21);
const priceFull = (userAge >= 18 && userAge < 65) === price;

console.log("Km che il passeggero desidera percorrere:", userKm);
console.log("L'età del passeggero:", userAge);

if (userAge < 18 ) {
    console.log("Il passeggero è minorenne, pagherà:", ( price * .8));
} else if ( userAge >= 65 ) {
    console.log("Il passeggero è over 65, pagherà:", ( price * .6));
} else {
    console.log("Il prezzo è di:", price);
}