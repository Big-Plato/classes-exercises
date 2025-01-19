// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

// My Solution
class Book {
    constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    }
    displayBookDetails () {
        console.log (`
Title: ${this.title}.
Author: ${this.author}.
Year: ${this.year}.
        `)
    }
}

class Ebook extends Book {
    constructor(title, author, year, price) {
        super(title, author, year);
        this.price = price;
    }
    displayBookDetails () {
        super.displayBookDetails();
        console.log(`Book Price: R$ ${this.price}`)
    }
}

const ebook1 = new Ebook('Zarathustra', 'Nietzsche', 1883, 25);

// w3resource solution
class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  displayDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Publication Year: ${this.publicationYear}`);
  }
}

class Ebook extends Book {
  constructor(title, author, publicationYear, price) {
    super(title, author, publicationYear);
    this.price = price;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Price: $${this.price}`);
  }
}

// Create an instance of the Ebook class
const ebook = new Ebook('Don Quixote', 'Miguel de Cervantes', 1605, 21.49);

// Display the ebook details
ebook.displayDetails();
