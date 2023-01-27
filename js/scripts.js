//Bussiness logic for PizzaParlor object
function PizzaParlor() {
  this.pizzas = {};
  this.currentId = 0;
};

PizzaParlor.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};


PizzaParlor.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

PizzaParlor.prototype.findId = function(id) {
  if (this.pizzas[id] !== undefined) {
    return this.contacts[id];
  }
  return false;
};

PizzaParlor.prototype.deleteId = function(id) {
  if (this.pizzas[id] === undefined) {
    return false;
  }
  delete this.pizzas[id];
  return true;
};

//Bussiness Logic for making Individual Pizzas

pizzaPrice = function(size, meatArray, veggieArray) {
  let price = 0;

  if (size === "Small") {
    price += 3;
  }
  else if (size === "Medium") {
    price += 5;
  }
  else if (size === "Large") {
    price += 7;
  }

  price += (meatArray.length * 3);
  price += (veggieArray.length * 2);
  
  return "$" + price
}

function Pizza(size, meatArray, veggieArray, price) {
  this.size = size;
  this.meatArray = meatArray;
  this.veggieArray = veggieArray;
  this.price = price;
}


let pizzaParlor = new PizzaParlor();

let pizza = new Pizza("large", ["sausage", "pepperoni", "bacon", "chicken"], ["mushroom"])

console.log(pizza)
console.log(pizzaPrice("Large", ["sausage", "pepperoni", "bacon", "chicken"], ["mushroom"]))