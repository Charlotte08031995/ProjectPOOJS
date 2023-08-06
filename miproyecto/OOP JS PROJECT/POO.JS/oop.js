//OOP with JS

const _private = new WeakMap();

class Book {

    constructor(title, author, price) {

        const properties = {
            _title: title,
            _author: author,
            _price: price
        }

        _private.set(this, {properties});
    }

    //Get book's title
      get title() {
        return _private.get(this).properties['_title'];
      }

     //Set book' title
      set title(newTitle) {
        return _private.get(this).properties['_title'] = newTitle;
      }

      //Get book's author
      get author() {
        return _private.get(this).properties['_author'];
      }

     //Set book' author
      set author(newTitle) {
        return _private.get(this).properties['_author'] = newTitle;
      }

      //Get book's price
      get price() {
        return _private.get(this).properties['_price'];
      }

     //Set book' price
      set price(newTitle) {
        return _private.get(this).properties['_price'] = newTitle;
      }

      getAllData() {
        console.log( `Título: ${this.title}, Autor: ${this.author}, Precio: ${this.price} ` )
      }

}

//Inheritance
class Comic extends Book {
    constructor(name, author, price, illustrators) {
        super(name, author, price); //super() is a reference of father's class (book)

        this.illustrators = illustrators;
    }

    addillustrator(newIllustrator = []) {
        this.illustrators.push(newIllustrator)
    }
   
   
}

class ShoppingCart{
    constructor(){
        this.products = [];
    }

    addProduct(amount, price){
        this.products.push( ...Array(amount).fill(price) )
    }

    showProducts(){
        console.log(this.products);
    }

    calcTotal() {
        return this.products
        .map( price => price )
        .reduce( (ac, price) => ac + price, 0 );
    }

    printTicket() {
        console.log(`Total a pagar ${ this.calcTotal()}`);
    }


}

const book1 = new Book('Las flores del mal', 'C.B', 210);

const comic1 = new Comic('El rastro de Catoman', 'E. B', 350 ['D.C']);
//console.log(book1._title);
//console.log(book1._author);
//console.log(book1._price);

const book2 = new Book('Drácula', 'Bram Stoker', 115);
//console.log(book2._title + ", " + book2._author + ", " + book2._price);

console.log(book1.title);

//console.log(comic1.title + ", " + comic1.author + ", " +comic1.price);

console.log(comic1.illustrators);
comic1.addIllustrator('B.R');
console.log(comic1.illustrators);

const cart = new ShoppingCart();

cart.addProduct(2, comic1.price);

cart.showProducts();

cart.printTicket();

book1.getAllData();
comic1.getAllData();


//Encapsulation

/*const _private = new WeakMap();


class Book{
     constructor(title, author, price){

        const properties ={
            _title: title,
            _author: author,
            _price: price

        }

        _private.set(this, {properties}); //private properties
       
     }

//Get book's title
get title() {
    return _private.get(this).properties['_title'];
}

}

set title(newTitle) {
    return _private.get(this).properties['_title'] = newTtitle;
}


class seller{
    //title, author, price;
}

console.log(book1.title);*/
