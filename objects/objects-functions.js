let book1 = {
    title: 'La guerre du Sonderbund',
    author: 'Pierre du Bois',
    pageCount: 160,
};

let book2 = {
    title: 'Histoire du paysage en Suisse',
    author: 'Matthias Bürgi,Norman Backhaus,Katja Hürlimann',
    pageCount: 460,
};

let bookSummary = {};

let getSummary = function(book)
{
    bookSummary = {
        summary: `'${book.title}' By ${book.author}`,
        pageCountSummary: `'${book.title}' is ${book.pageCount} pages long`
    };
    return bookSummary;
};

;
let book2Summary = getSummary(book2);

console.log(getSummary(book1));
console.log(book2Summary);