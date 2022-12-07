
const bodyDiv = document.querySelector('.bodyDiv');
const submitBtn = document.querySelector('.submit');

const hardCoverList = document.querySelector('.hardCoverList');
const stephenKingList = document.querySelector('.stephenKingList');
//  Add listener to call function
bodyDiv.addEventListener('submit', getBooksFromAPI);

// Function
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
};

