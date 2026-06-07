const bookCollection = [];
const bookCollectionCntr = document.querySelector(".book-collection-cntr");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const submitBtn = document.querySelector('input[type="submit"]');


// on page load
addBookToCollection("The Lord of the Rings", "J.R. Tolkien", 840, false);
addBookToCollection("On the Origin of Species", "Charles Darwin", 524, true);

displayBookCollection(bookCollection);


// book constructor 
function Book(title, author, pageCount, hasFinished) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.hasFinished = hasFinished;
    this.id = crypto.randomUUID();
}

// make new book and add to array
function addBookToCollection(title, author, pageCount, hasFinished) {
    let newBook = new Book(title, author, pageCount, hasFinished);
    bookCollection.push(newBook);
}

// button opens dialog
const openDialogButton = document.querySelector("#open-dialog")
openDialogButton.addEventListener("click", () => {
    form.reset();
    dialog.showModal();
});

// create new book from dialog
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // store field data
    let title = form.querySelector("#title").value;
    let author = form.querySelector("#author").value;
    let pageCount = form.querySelector("#pages").value;
    let hasFinished = form.querySelector("#read").checked;

    addBookToCollection(title, author, pageCount, hasFinished);
    displayBook(bookCollection.at(-1));
    dialog.close();
});

// function to toggle the read status of books



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
    card.dataset.id = obj.id;

    const title = document.createElement("div");
    title.classList.toggle("book-title");
    title.textContent = obj.title;

    const author = document.createElement("div");
    author.classList.toggle("book-author");
    author.textContent = obj.author;

    const buttonCntr = document.createElement("div");
    buttonCntr.classList.toggle("book-buttons-cntr");

    const deleteBtn = document.createElement("img");
    deleteBtn.classList.toggle("delete-btn");
    deleteBtn.src = "./img/trashcan.svg";
    
    const readBtn = document.createElement("img");
    obj.hasFinished ? readBtn.src = "./img/bookmark_check.svg" : readBtn.src = "./img/bookmark_empty.svg";
    readBtn.classList.toggle("read-btn");

    // add to dom
    bookCollectionCntr.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(buttonCntr);
    buttonCntr.appendChild(deleteBtn);
    buttonCntr.appendChild(readBtn);

    // event listener for delete button
    deleteBtn.addEventListener("click", (e) => {
        let displayCard = e.target.closest("[data-id]");
        let nodeID = displayCard.dataset.id;

        displayCard.remove();

        // remove obj from arr
        let indexToDelete = bookCollection.findIndex((book) => book.id == nodeID);
        bookCollection.splice(indexToDelete, 1);
        console.table(bookCollection);
    })

    // event listener for read button
    readBtn.addEventListener("click", (e) => {
        let nodeID = e.target.closest('[data-id]').dataset.id;
        let targetBook = bookCollection.find((book) => book.id == nodeID);
        
        targetBook.hasFinished = !targetBook.hasFinished;

        targetBook.hasFinished ? e.target.src = "./img/bookmark_check.svg" : e.target.src = "./img/bookmark_empty.svg";
    })
}