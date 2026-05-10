/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum (num1, num2){
    if(num1===num2){
        return (num1+num2)*3
    }
    return num1 + num2
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro 
 e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary (parseInt){
    if (parseInt>20 && parseInt<=100){
        return true
    }
    else if (parseInt===400){
        return true}

    else return false
    }


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita 
 (es.: EPICODE => EDOCIPE).
*/

function reverseString (word){
    return word.split("").reverse().join("")
}

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e 
 la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst (sayWhat){
    return sayWhat.slice(0,1).toUpperCase() + sayWhat.slice(1)
}

upperFirst("ciao")


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato
  n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom (n){
let randomNum = []
    
   for( i=0; i<n; i++){
       randomNum[i]= Math.floor(Math.random()*10);
   }

    return randomNum
}

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area (l1, l2){
    return (`L'area del rettangolo è ${l1 * l2}`)
}

area (5,3)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff (diff){
    if((diff-19)>19) {
        return Math.abs(diff-19)*3
    }
    else{
        return Math.abs(diff-19)
        }
}

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, 
 ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify (addCode){
if (addCode.toLowerCase().startsWith("code")){
  return addCode
} 
else {
  return "code" + addCode
}

} 


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; 
 altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7 (Int){
    if ((Int % 3 ===0)||(Int % 7===0)){
        return true
    }
    else {return false}
}

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e 
 la ritorna senza il primo e l'ultimo carattere.
*/

function cutString (str){
    return str.slice(1, -1);
}