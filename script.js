
// create empty array
const library = [];

// create a constructor function for book objects
function Book(title, author, pageCount, hasFinished) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.hasFinished = hasFinished;
    this.id = crypto.randomUUID();
}

// create function that creates a new book object from arguments and appends it to the array
function addBookToLibrary(title, author, pageCount, hasFinished) {
    let newBook = new Book(title, author, pageCount, hasFinished);
    library.push(newBook);
}

addBookToLibrary("The Lord of the Rings", "J.R. Tolkien", 840, false);
addBookToLibrary("On the Origin of Species", "Charles Darwin", 524, true);
console.table(library);

// create function that loops through array, displaying all books on the page 

    // create an element (like a div) to be displayed 

    // add content from the respective book object and an html class identifier

    // append element to parent node on page


// add a button that allows users to add books to the library by filling out a form

// add a button to each book that can remove it from the library

// add a button to each book that can toggle its read/unread status
