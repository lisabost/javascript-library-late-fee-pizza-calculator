$(document).ready(function() {

    $("#fineButton").click(calculateLateFee);
    $("#pizzaButton").click(calculatePizzaPrice);

    function calculateLateFee() {
        var bookLateFee = 0.25;
        var DVDLateFee = 0.50;

        /*
        Gather input from the webpage and parse to number data type
         */
        //get value from box with id lateBooks
        var lateBooks = parseInt($("#lateBooks").val());

        // get number of DVDs that were late
        var lateDVD = parseInt($("#lateDVD").val());

        // get number of days late
        var daysLate = parseInt($("#numDaysLate").val());

        /*
        Do math and display output
         */

        //calculate book late fees
        var booksLateFee = daysLate * bookLateFee * lateBooks;
        //make formatted display version of number
        var bookFeeDisplay = booksLateFee.toFixed(2);

        // calculate late fee for DVDs
        var DVDsLateFee = daysLate * DVDLateFee * lateDVD;
        //make formatted display version of number
        var DvdFeeDisplay = DVDsLateFee.toFixed(2);

        // add individual fees together
        var totalLateFee = (booksLateFee + DVDsLateFee).toFixed(2);

        // Update text in span with id=bookLateFee
        $("#bookLateFee").text(bookFeeDisplay);
        // Update text in span with id=DvdLateFee
        $("#DvdLateFee").text(DvdFeeDisplay);
        //Update text in span with id=totalLateFee
        $("#totalLateFee").text(totalLateFee);
        //Un-hide the output div
        $(".output").show();

    }

    function calculatePizzaPrice() {
        var basePriceOfPizza = 15.00;
        var toppingPrice = 1.25;

        /*
        Gather information from webpage and parse to number data type
         */

        //get number of toppings added to pizza
        var numToppings = parseInt($("#toppings").val());

        // get number of coworkers eating pizza
        var numCoworkers = parseInt($("#peopleToShare").val());

        /*
        Do the math and make display versions with 2 decimal places
         */
        // do math for total pizza
        var totalPizzaPrice = basePriceOfPizza + (numToppings * toppingPrice);
        var displayTotalPizzaPrice = totalPizzaPrice.toFixed(2);

        // do math for pizza per person
        var pricePerPerson = totalPizzaPrice / numCoworkers;
        var displayPricePerPerson = pricePerPerson.toFixed(2);

        /*
        Output display
         */
        //Update text in span with id=totalPizzaPrice
        $("#totalPizzaPrice").text(displayTotalPizzaPrice);
        //Update text in span with id=pricePerPerson
        $("#pricePerPerson").text(displayPricePerPerson);
        //un-hide output display for pizza calculator
        $(".pizzaOutput").show();
    }

});