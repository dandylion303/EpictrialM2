//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let num1 = parseInt(prompt("Scrivi un numero"));
let num2 = parseInt(prompt("Scrivi il secondo numero"));

if (num1 > num2) {
  console.log(`Il numero maggiore è ${num1}`);
} 

else if (num1 < num2) {
  console.log(`Il numero maggiore è ${num2}`);
}

else {
  console.log("I numeri sono uguali");
}


/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let number = parseInt(prompt("scrivi un numero"))

if (number < 5) {
  console.log("Tiny")
} 

else if (number < 10) {
  console.log("Small")
} 

else if (number < 15) {
  console.log("Medium")
} 

else if (number < 20) {
  console.log("Large")
} 
else {
  console.log("huge")
}



//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

let i = 0
for (let i = 0; i<=10; i++){
  if(i===3||i===8){
    continue
  }
  console.log(i)}


/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

let a = 0
for (let a=0; a<=15; a++){
  if(a % 2===0){
    console.log(`${a} il risultato è pari`)
  }
  else{
    console.log(`${a} il risultato è dispari`)
  }

}


//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const x = parseInt(prompt("Scrivi un numero intero da 1 a 8. Ti prego non imbrogliare"));
const y = parseInt(prompt("Scrivi un altro numero intero da 1 a 8. Ti vedo, non imbrogliare!"));

if (x < 1 || x > 8 || y < 1 || y > 8) {
  console.log("Non si imbroglia così");
}
else if (x === 8 || y === 8 || x + y === 8 || x - y === 8 || y - x === 8) {
  console.log("Condizione verificata!");
}
else {
  console.log("Condizione NON verificata.");
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart=140
let shippingCost = 10
if(totalShoppingCart>50){
    shippingCost=0
    console.log("il cliente deve pagare "+(totalShoppingCart+shippingCost))}
else {console.log("il cliente deve pagare " +(totalShoppingCart+shippingCost))} 


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

const totalShoppingCart=100
let newPrice = (totalShoppingCart-totalShoppingCart*0.20)
let shippingCost = 10
if(newPrice>50){
    shippingCost=0
    console.log("il cliente deve pagare "+(newPrice+shippingCost))}
else {console.log("il cliente deve pagare " +(newPrice+shippingCost))} 


/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = true
let gender = isMale? "male":"female"
console.log(gender)

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i= 1; i<=100; i++)
    if (i % 5 === 0)
    {console.log ("fizz")}
        else if (i % 3 === 0)
    {console.log ("buzz")}
else{console.log(i)}
