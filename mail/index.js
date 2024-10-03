// Mail

// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

let user_email;
let email_list = [
  "utente1@example.com",
  "utente2@example.com",
  "utente3@example.com",
];

user_email = prompt("Inserisci la tua email");

if (email_list.includes(user_email)) {
  console.log("Hai inserito correttamente la tua email");
}
else {
  console.log("Email non corretta, riprova");
}
