
function calculateLateFee() {
    var bookLateFee = 0.25;
    var DVDLateFee = 0.50;
    // get number of books that were late
    var lateBooks = parseInt(prompt("How many books are late?"));
    // get number of DVDs that were late
    var lateDVD = parseInt(prompt("How many DVDs are late?"));
    // get number of days late
    var daysLate = parseInt(prompt("How many days are the items late?"));
    // do math for books - number of days books were late * book late fee * number of books
    var booksLateFee = daysLate * bookLateFee * lateBooks;
    //make formatted display version of number
    var prettyBLateFee = booksLateFee.toFixed(2);
    // do math for DVDs - number of days books were late * DVD late fee * number of DVDs
    var DVDsLateFee = daysLate * DVDLateFee * lateDVD;
    //make formatted display version of number
    var prettyDLateFee = DVDsLateFee.toFixed(2);
    // add individual fees together
    var totalLateFee = (booksLateFee + DVDsLateFee).toFixed(2);
    // Display book late fee
    alert(`The late fee for your books is $${prettyBLateFee}`);
    // Display DVD late fee
    alert(`The late fee for your DVDs is $${prettyDLateFee}`);
    // Display total late fee
    alert(`Your total late fee is $${totalLateFee}`);
}

function calculatePizzaPrice() {
    var basePriceOfPizza = 15.00;
    var toppingPrice = 1.25;
    //get number of toppings added to pizza
    var numToppings = parseInt(prompt("How many toppings are you getting?"));
    // get number of coworkers eating pizza
    var numCoworkers = parseInt(prompt("How many people are having the pizza?"))
    // do math for total pizza - 15 + 1.25 * number of toppings
    var totalPizzaPrice = basePriceOfPizza + (numToppings * toppingPrice);
    // do math for pizza per person- total pizza price / number of coworkers
    var pricePerPerson = totalPizzaPrice / numCoworkers;
    //Display total cost of pizza
    var displayTotalPizzaPrice = totalPizzaPrice.toFixed(2);
    alert(`The total cost of the pizza is $${displayTotalPizzaPrice}`);
    //Display price per person
    var displayPricePerPerson = pricePerPerson.toFixed(2);
    alert(`The price per person for the pizza is $${displayPricePerPerson}`);
}