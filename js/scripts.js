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

function Pizza(size, meatArray, veggieArray) {
  this.size = size;
  this.meatArray = meatArray;
  this.veggieArray = veggieArray;
}


let pizzaParlor = new PizzaParlor();

let pizza = new Pizza("large", ["sausage", "pepperoni", "bacon", "chicken"], ["mushroom"])

console.log(pizza)