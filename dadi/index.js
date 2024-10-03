// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

let user = parseInt(Math.floor(Math.random() * 6) + 1);
let computer = parseInt(Math.floor(Math.random() * 6) + 1);

console.log(`Il giocatore ha ottenuto il numero ${user}`);
console.log(`Il computer ha ottenuto il numero ${computer}`);

if (user > computer) {
  console.log("Il giocatore vince");
}
else if (user < computer) {
    console.log("Il computer vince");
}

else {
    console.log('Abbiamo un pareggio');
}
    
    
