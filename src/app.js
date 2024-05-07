// import _, { map } from "underscore";
// import anime from "animejs";
// console.log("Hello world!");
// const arr = ["a", "b", "c"];
// console.log(_.first(arr));

// const suits = ["hearts", "clubs", "diamonds", "spades"];
// const chars = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Kn", "Q", "K", "A"];
// let deck = [];

// // {
// //     suit: 'hearts',
// //     char: 'Kn'
// // }

// for (const suit of suits) {
//     for (const char of chars) {
//         deck.push({ suit, char });
//     }
// }
// let shuffledDeck = _.shuffle(deck);
// console.log(deck);

// console.log(shuffledDeck);
// const randomIndex = _.random(shuffledDeck.length - 1);
// console.log(shuffledDeck[randomIndex]);

// const hand = _.sample(shuffledDeck, 5);
// shuffledDeck = _.without(shuffledDeck, ...hand);
// console.log(hand);
// console.log(shuffledDeck);

// const animationObj = {
//     targets: "div",
//     translateX: "50%",
//     duratation: 1000,
// };
// anime(animationObj);

import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseApp } from "./firebase";

const db = getDatabase(firebaseApp);
const usersRef = ref(db, "/main/users");

// callback-funktionen anropas varje gång en ändring sker på en child node till referensen
onValue(usersRef, (snapshot) => {
    const users = snapshot.val();
    console.log(users);
});
