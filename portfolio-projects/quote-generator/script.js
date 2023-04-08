const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// -----> If you're using the localQuotes array you can remove 
// apiQuotes variable

// let apiQuotes = [];

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

function newQuote() {
    showLoadingSpinner();

// -----> Only use one of the following const quote statements

// Pick a random quote from apiQuotes array
//   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

// Pick a random quote from localQuotes array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }
  // Check Quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
  // Set Quote
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
}

// Get Quotes From API: 

// async function getQuotes() {
//   showLoadingSpinner();
//   const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQuote();
//   } catch (error) {
//     // Catch Error Here
//   }
// }

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load using an API
// getQuotes();

// -----> If using API, run getQuotes(),
//  if not run newQuote() instead
newQuote();