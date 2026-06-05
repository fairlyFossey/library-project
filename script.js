const bookCollection = [];
const bookCollectionCntr = document.querySelector(".book-collection-cntr");
let dialog = document.querySelector("dialog");

// book constructor
function Book(title, author, pageCount, hasFinished) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.hasFinished = hasFinished;
    this.id = crypto.randomUUID();
}

// store books in arr
function addBookToCollection(title, author, pageCount, hasFinished) {
    let newBook = new Book(title, author, pageCount, hasFinished);
    bookCollection.push(newBook);
}


// display books on page
function displayBookCollection(arr) {
    for (const obj of arr) {
        displayBook(obj)
    }
}

function displayBook(obj) {
    // create divs
    const card = document.createElement("div");
    card.classList.toggle("book-card");

    const title = document.createElement("div");
    title.classList.toggle("book-title");
    title.textContent = obj.title;

    const author = document.createElement("div");
    author.classList.toggle("book-author");
    author.textContent = obj.author;

    // add to dom
    bookCollectionCntr.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
}


// button press opens modal-dialog form 
    const openDialogButton = document.querySelector("#open-dialog")
    openDialogButton.addEventListener("click", () => {
        dialog.showModal();
    });

    // form submission creates new book and displays it

// function to remove book from collection

// function to toggle the read status of books

addBookToCollection("The Lord of the Rings", "J.R. Tolkien", 840, false);
addBookToCollection("On the Origin of Species", "Charles Darwin", 524, true);

displayBookCollection(bookCollection);
