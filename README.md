# Pizza Parlor

#### By Justin Lee

#### Website takes in user input to construct them a personal pizza with different toppings and different sizes which then returns a dollar amount based off user selection

## Technologies Used

* JavaScript
* HTML
* CSS

## Description

Website first takes in user input through different selection bars. It then returns the users pizza and a cost. Users may click on their pizza to see additional details, its toppings and its cost. This is done by using constructors, objects, and prototypes to handle input data that returns a personalized pizza that has a dynamic cost.

## Setup/Installation Requirements

* Push repository to personal PC through gitbash or downloading the repository on github.
* To run website, open HTML file in any browser that supports HTML files.
* Input any sized pizza and toppings to see your pizza and how much it cost!
* To see any JavaScript, CSS, or HTML file source code, use any open source code editor such as VSCode.


## Known Bugs

N/a

## License

MIT

Copyright (c) 01/27/23

# Test Driven Development

## Describe: function PizzaParlor() {}

Test: It is a constructor that should contain a Pizzas{} as an object and a currentId counter that increments with the passing of more 
pizza's.

Code : pizzaParlor = new PizzaParlor();

Expected Output : >pizzaParlor {

  this.pizzas = {}

  this.currentId = 0;

}

## Describe: PizzaParlor.prototype.addPizza = function(pizza) {
  this.pizzas = pizza;
}

Test: it should add a pizza to the Pizza parlor

Code: pizzaParlor.addPizza(newPizza1);

Expected Output: > pizzaParlor {
  this.pizzas = {newPizza1,}
}


## Describe: PizzaParlor.prototype.assignId, function();

Test: It should iterate the pizzaParlor's Id by 1 and return its current id when called by the function addPizza

code : pizzaParlor.addPizza(pizza)

Expected Output : pizzaParlor {

  this.pizzas = {1:pizza}

  this.currentId = 1;

}

## Describe: PizzaParlor.prototype.findId = function(id);

Test: It should look at a pizza's ID and if it does not return undefined, return it's ID, otherwise return false;

Code: pizzaParlor.findId(1)

Expected Output : 1 OR false

## Describe: PizzaParlor.prototype.deleteId = function(id);

Test: It should look at a pizza's ID and if it returns an ID, delete the ID, if it is undefined, just return false.

Code: pizzaParlor.deleteId(1)

Expected Output : pizzaParlor's id 1 gets deleted or returns false.

## Describe : function Pizza(size, meatArray, veggieArray) {}

Test: It is a constructor that should construct an object based off 3 paramters, the size, a meatArray, and a veggieArray.

Code: let pizza = new Pizza(newSize, newMeatArray, newVeggieArray)

Expected output : new Pizza will an object that has those 3 elements.

## Describe : function pizzaPrice(size, meatArray, veggieArray) {}

Test: It should return a price amount based off the amounts of topping you choose for your pizza and its size.

Code: pizzaPrice("Large", ["sausage", "pepperoni", "bacon", "chicken"], ["mushroom"]);

Expected output : 21, As large is 7$, there are 4 meat toppings (4x3)
and one veggie topping (1x2);