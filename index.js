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
    //     console.log(card);
  });
};

print();

const shuffle = () => {
  let randomCards = [];
  i = deck.length;
  j = 0;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    randomCards.push(deck[j]);
    deck.splice(j, 1);
  }

  randomCards.map(card => {
    console.log(card);
  });
};

shuffle();
