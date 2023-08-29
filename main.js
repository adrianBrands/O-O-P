/*In this task, you have to create a menu for a restaurant. Every dish has a name and price. Our restaurant serves pizza, pancakes and pasta. 
In addition, pizza has an array of ingredients, and pancakes have the Boolean sweet property, which defines whether pancakes should be 
served sweet. Pasta has the Boolean property isVegetarian, which defines whether it contains meat.

Create a model in Object-oriented Programming simulating the menu. Think about which properties should be private and which not.*/

class RestaurantMenu {
  #_price;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  set price(rightPrice) {
    let price = 0;
    if (typeof rightPrice !== typeof price) {
      this.#_price === price;
    } else {
      this.#_price = rightPrice;
    }
  }
  get price() {
    return this.#_price;
  }
  info() {
    return `Menu: ${this.name}. Price: $${this.price}.`;
  }
}

class Pizza extends RestaurantMenu {
  constructor(name, price, ingredients) {
    super(name, price);
    this.ingredients = ingredients;
  }
  info() {
    console.log(typeof this.ingredients);
    return `${super.info()} Ingredients: ${this.ingredients}`;
  }
}

class Pancakes extends RestaurantMenu {
  constructor(name, price, sweet) {
    super(name, price);
    this.sweet = sweet;
  }
  info() {
    return `${super.info()} Should be served sweet: ${this.sweet}`;
  }
}

class Pasta extends RestaurantMenu {
  constructor(name, price, isVegetarian) {
    super(name, price);
    this.isVegetarian = isVegetarian;
  }
  info() {
    return `${super.info()} Is vegetarian: ${this.isVegetarian}`;
  }
}

let pizza1 = new Pizza("Restaurante Sepciale", 15, new Array("tomatosauce", "cheese"));
console.log(pizza1.info());
console.log(pizza1);

let pancakes1 = new Pancakes("Sweety Pancake", 5, true);
console.log(pancakes1.info());
console.log(pancakes1);

let pasta1 = new Pasta("Yummy Pasta", 120, true);
console.log(pasta1.info());
console.log(pasta1);
