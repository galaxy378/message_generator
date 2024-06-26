const { randomBytes } = require("crypto");

caoCaoQuotes = [
  "It is better to be feared than to be loved.",
  "Every adversity presents an opportunity for growth and learning.",
  "The truly powerful are those who can control their own desires and impulses."
];

hitlerQuotes = [
  "If you win, you need not have to explain...If you lose, you should not be there to explain!",
  "Anyone can deal with victory. Only the mighty can bear defeat.",
  "I use emotion for the many and reserve reason for the few."
];

bismarkQuotes = [
  "Politics is the art of the possible.",
  "The weak are strong because they are reckless. The strong are weak because they have scruples.",
  "Only a fool learns from his own mistakes. The wise man learns from the mistakes of others."
];


function mashed_quotes(quotes1, quotes2, quotes3) {
  const outputQuote = [];

  // random number for the quotes's index
  randIndex = Math.floor(Math.random() * quotes1.length);

  // generating a random quote from quotes1
  outputQuote.push(quotes1[randIndex]);

  // generating a random quote from quotes2
  outputQuote.push(quotes2[randIndex]);

  // generating a random quote from quotes3
  outputQuote.push(quotes3[randIndex]);

  return outputQuote.join(' ')
}

console.log(mashed_quotes(caoCaoQuotes, hitlerQuotes, bismarkQuotes))