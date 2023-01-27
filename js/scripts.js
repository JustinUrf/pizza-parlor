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
}


let pizzaParlor = new PizzaParlor();
let emptyPizza = {size:"large", topping1:"mushrooms"}
pizzaParlor.addPizza(emptyPizza)


console.log(pizzaParlor);
