

document.addEventListener("DOMContentLoaded", function () {
    // DOM elements
    const quoteContainer = document.getElementById("quote-container");
    const quoteText = document.getElementById("quote-text");
    const author = document.getElementById("author");
    const newQuoteBtn = document.getElementById("new-quote-btn");

    // Event listener for the "New Quote" button
    newQuoteBtn.addEventListener("click", getNewQuote);

    // Function to fetch a new quote from the Quotable API
    function getNewQuote() {
        // Fetch a random quote from the Quotable API
        fetch("https://api.quotable.io/random")
            .then(response => response.json())
            .then(data => {
                // Update the quote text and author in the HTML
                quoteText.textContent = data.content;
                author.textContent = `- ${data.author}`;
            })
            .catch(error => {
                console.error("Error fetching quote:", error);
                quoteText.textContent = "Error fetching quote. Please try again later.";
                author.textContent = "";
            });
    }

    // Initial call to get a new quote when the page loads
    getNewQuote();
});
