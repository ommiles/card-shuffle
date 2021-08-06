const suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
const ranks = ['Jack', 'Queen', 'King', 'Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10];
const deck = [];

for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < ranks.length; j++) {
    deck.push(`${ranks[j]}` + ' of ' + `${suits[i]}`);
  }
}

const print = () => {
  deck.map(card => {
    console.log(card);
  });
};

print();

const shuffle = () => {
  let max = deck.length;
  for (card in deck) {
    let idx = Math.floor(Math.random() * max);
    console.log(deck[idx]);
  }
};

shuffle();
