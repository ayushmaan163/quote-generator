// Variables
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: "All that glitters is not gold.",
    person: "William Shakespeare",
  },
  {
    quote: "Ask, and it shall be given you; seek, and you shall find.",
    person: "John Kennedy",
  },
  {
    quote: "Eighty percent of success is showing up.",
    person: "Woody Allen",
  },
  {
    quote: "Elementary, my dear Watson.",
    person: "Sherlock Holmes",
  },
  {
    quote: "I'm not afraid of success.",
    person: "Bruce Lee",
  },
  {
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    person: "Thomas Edison",
  },
  {
    quote: "If you are going through hell, keep going.",
    person: "Winston Churchill",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
