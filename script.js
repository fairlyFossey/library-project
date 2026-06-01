
// create empty array

// create a constructor function for book objects

// create function that creates a new book object from arguments and appends it to the array

// create function that loops through array, displaying all books on the page 

    // create an element (like a div) to be displayed 

    // add content from the respective book object and an html class identifier

    // append element to parent node on page


// add a button that allows users to add books to the library by filling out a form

// add a button to each book that can remove it from the library

// add a button to each book that can toggle its read/unread status








let arr = [];

function Book(title) {
    this.title = title;
}

function makeNewBook(title) {
    arr.push(new Book(title));
}


makeNewBook("The Lord of the Rings");
makeNewBook("On the Origin of Species");


console.table(arr);