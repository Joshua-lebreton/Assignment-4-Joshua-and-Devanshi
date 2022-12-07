// The URL for the Article Search API at nytimes.com
const baseURL = 'https://api.nytimes.com/svc/books/v3/lists.json';
// STEP 1: Get your own API key and paste it below…
const key = 'Kvt66OrG591LWvcx62dWMeKM9FfaGhel';
let url;
// Grab references to all the DOM elements you'll need to manipulate

const bodyDiv = document.querySelector('.bodyDiv');
const submitBtn = document.querySelector('.submit');

const hardCoverList = document.querySelector('.hardCoverList');
const stephenKingList = document.querySelector('.stephenKingList');
// STEP 2: Add a submit event listener for the search form, referencing the fetchResults function as the callback
bodyDiv.addEventListener('submit', getBooksFromAPI);

// Functions
function getBooksFromAPI(event) {
    submitBtn.style.display = "none";

    // Use preventDefault() to stop the form submitting
    event.preventDefault();

    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Kvt66OrG591LWvcx62dWMeKM9FfaGhel')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      for (const books of data.results.books) {
        const listItem = document.createElement('li');
        listItem.appendChild(
          document.createElement('strong')
        ).textContent = books.title;
        
        hardCoverList.appendChild(listItem);
      }
    })
    .catch(console.error);

    fetch('https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=Kvt66OrG591LWvcx62dWMeKM9FfaGhel')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      for (const books of data.results) {
        const listItem = document.createElement('li');
        listItem.appendChild(
          document.createElement('strong')
        ).innerHTML = books.book_title + '<br>Byline: <br>  ' + books.byline  ;
        
        stephenKingList.appendChild(listItem);
      }
    })
    .catch(console.error);

    
/*
    // STEP 4: Use fetch() to pass the URL that we built as a request to the API service
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Kvt66OrG591LWvcx62dWMeKM9FfaGhel').then(function(result){
        return result.json();
    }).then(function(json){
        displayResults(json);
    });
    
};

function displayResults(json) {
    // STEP 5: Log to the console the results from the API
    console.log(json);
    console.log("hi");

    // Clear out the old results…
    
    // STEP 6: Create the var articles to capture the articles from the JSON object
    let articles = json.response.docs;	

    if(articles.length === 0) {
        const para = document.createElement('p');
        para.textContent = 'No results returned.'
        section.appendChild(para);
    } else {
        for(let i = 0; i < articles.length; i++) {
            const article = document.createElement('article');
            const heading = document.createElement('h2');
            const link = document.createElement('a');
            const img = document.createElement('img');
            const para1 = document.createElement('p');

            const current = articles[i];
            console.log(current);
            // STEP 7: Look at the console output from the API…
            link.href = current.web_url;
            link.textContent = current.headline.main;
            para1.textContent = current.snippet;

            if(current.multimedia.length > 0) {
                img.src = 'https://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            };
            // STEP 8: Put each article together as an ARTICLE element and append it as a child of the SECTION element in the HTML
            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para1);
            section.appendChild(article);
        };
    };*/
};

// This example adapted from "Third-party APIs" at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs
