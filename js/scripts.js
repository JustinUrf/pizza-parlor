function PizzaParlor() {
  this.pizzas = {};
  this.currentId = 0;
};

PizzaParlor.prototype.addPizza = function(pizza) {
  this.pizzas = pizza
};


PizzaParlor.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}


let pizzaParlor = new PizzaParlor();
let emptyPizza = "nothing"
pizzaParlor.addPizza(emptyPizza)


console.log(pizzaParlor);
