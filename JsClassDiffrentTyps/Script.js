//normal class
class Book {
    constructor(title,price,NoOfPages,author){
    this.title=title;
    this.price=price;
    this.NoOfPages=NoOfPages;
    this.author=author;
    }
}
//Static variables in class
class Book1 {
    static author="Rajesh";
    constructor(title,price,NoOfPages){
    this.title=title;
    this.price=price;
    this.NoOfPages=NoOfPages;
    }

    UpdatePrice(newPrice)
    {
        this.price=newPrice;
    }

    static GetTitle()
    {
        return this.author;
    }
}

let objBook1 = new Book("java script",800,500,"Rajesh");
console.log(objBook1);
///normal varable calling
console.log(objBook1.title+'\n'+objBook1.price+'\n'+objBook1.NoOfPages+'\n'+objBook1.author);

let objBook2 = new Book1("java script",800,500);
console.log(objBook2);
///sataic varable calling by using class name
console.log(Book1.author);
//Instant method
console.log(objBook2.price);
objBook2.UpdatePrice(200);
console.log(objBook2.price);
//Static method
console.log(Book1.GetTitle());

// object littrels

let objlittrels ={
   title: "java script",
   price: 800,
   NoOfPages: 500,
   author: "Rajesh"
};
console.log(objlittrels);
