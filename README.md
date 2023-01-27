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

Test: It should iterate the pizzaParlor's Id by 1 and return its current id.

code : Address

Expected Output : 1,








