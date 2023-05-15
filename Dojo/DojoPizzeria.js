    function pizzaOven(crustType ,sauceType ,cheeses,toppings  ){
    var pizza ={};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
    }

    function randomPizza() {
    const crustTypes = ["deep dish", "hand tossed", "thin crust"];
    const sauceTypes = ["traditional", "marinara", "barbecue"];
    const cheeses = ["mozzarella", "cheddar", "parmesan", "feta", "gouda"];
    const toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions"];

    var randomCrustType = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    var randomSauceType = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    var randomCheese = cheeses[Math.floor(Math.random() * cheeses.length)];
    var randomToppings = [];

    var numberOfToppings = Math.floor(Math.random() * 4) + 2;
    for (let i = 0; i < numberOfToppings; i++) {
    var randomTopping = toppings[Math.floor(Math.random() * toppings.length)];
    randomToppings.push(randomTopping);
    }

    var randomPizza = pizzaOven(randomCrustType, randomSauceType, randomCheese, randomToppings);

    return randomPizza;

    }

    // random pizza

    const myRandomPizza = randomPizza();
    console.log(myRandomPizza);

    //

    var p1 = pizzaOven("deep dish","traditional","mozzarella",["pepperoni","sausage"]);
    console.log(p1);
    var p2 = pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
    console.log(p2);