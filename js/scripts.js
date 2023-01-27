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

PizzaParlor.prototype.findId = function(id) {
  if (this.pizzas[id] !== undefined) {
    return this.contacts[id];
  }
  return false;
}
PizzaParlor.prototype.deleteId = function(id) {
  if (this.pizzas[id] === undefined) {
    return false;
  }
  delete this.pizzas[id];
  return true;
}




let pizzaParlor = new PizzaParlor();
let emptyPizza = {size:"large", topping1:"mushrooms"}
pizzaParlor.addPizza(emptyPizza)

pizzaParlor.deleteId(1)
console.log(pizzaParlor);
