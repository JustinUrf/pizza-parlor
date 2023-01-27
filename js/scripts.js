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
    return this.pizzas[id];
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
  
  return "$" + price;
};

Pizza.prototype.pizzaInfo = function() {
  return this.size + " " + this.price;
};

function Pizza(size, meatArray, veggieArray, price) {
  this.size = size;
  this.meatArray = meatArray;
  this.veggieArray = veggieArray;
  this.price = price;
};
// User Interface Logic
let pizzaParlor = new PizzaParlor();
function handleFormSubmission(event) {
  event.preventDefault();
  let meatArray = [];
  let veggieArray = [];
  const size = document.getElementById("pizza-size-id").value;
  const meatToppings = document.getElementsByClassName("meat-toppings");
  for (i = 0; i < meatToppings.length; i++) {
    if (meatToppings[i].value !== "null") {
    meatArray.push(meatToppings[i].value);
    };
  };

  const vegetableToppings = document.getElementsByClassName("vegetable-toppings");
  for (i = 0; i < vegetableToppings.length; i++) {
    if (vegetableToppings[i].value !== "null") {
      veggieArray.push(vegetableToppings[i].value);
    };
  };
  const price = pizzaPrice(size, meatArray, veggieArray)
  let newPizza = new Pizza(size, meatArray, veggieArray, price);

  pizzaParlor.addPizza(newPizza);
  listPizzaParlor(pizzaParlor);
};

function listPizzaParlor(pizzaParlorToDisplay) {
  let pizzaDiv = document.querySelector("div#user-pizzas");
  pizzaDiv.innerText = null;
  const ul = document.createElement("u");
  Object.keys(pizzaParlorToDisplay.pizzas).forEach(function(key) {
    const pizza = pizzaParlorToDisplay.findId(key);
    const li = document.createElement("li");
    li.append(pizza.pizzaInfo());
    li.setAttribute("id", pizza.id);
    ul.append(li);
  });
  pizzaDiv.append(ul);
}

function displayPizzaDetails(event) {
  const pizza = pizzaParlor.findId(event.target.id);
  document.querySelector(".size").innerText = pizza.size;
  document.querySelector(".meats").innerText = pizza.meatArray;
  document.querySelector(".vegetables").innerText = pizza.veggieArray;
  document.querySelector(".price").innerText= pizza.price;
  document.querySelector("button.delete").setAttribute("id", pizza.id);
  document.querySelector("div#pizza-details").removeAttribute("class");
}

window.addEventListener("load", function(){
  document.querySelector("form#user-vegetable-toppings").addEventListener("submit", handleFormSubmission);
  document.querySelector("div#user-pizzas").addEventListener("click",displayPizzaDetails);
});