// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// passaggi intermedi:
// 1. chiedere parola;
// 2. memorizzarla in una var stringa;
// 3. trovare parola letta al contrario;
// 4. confrontare le 2 stringhe e visualizza il risultato;
// 5. usare la funzione

// 1.
var parola = prompt("Inserisci una parola");
// var str1 = "";
// var str2 = "nonPalindromo";

// // 2.
// // for (var i = 0; i < parola.length; i++) {
// //     str1 += parola[i];
// // }
//
// // 3.
// for (var i = parola.length-1; i >= 0; i--) {
//     str1 += parola[i];
// }
// // console.log(str1);
//
// // 4.
// var str2 = "nonPalindromo";
// if (parola == str1) {
//     str2 = "palindromo";
// }
//

//***funzione***//
function palindromoONonPalindromo(parola) {
    var str1 = "";
    var str2 = "nonPalindromo";
    for (var i = parola.length-1; i >= 0; i--) {
        str1 += parola[i];
    }
    if (parola == str1) {
        str2 = "palindromo";
    }
    return str2;
}

console.log(palindromoONonPalindromo(parola));
