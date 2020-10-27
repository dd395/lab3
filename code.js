//App to Determine Total Patron Late Fee Charges
//Patron returns late books and late dvds.
//prompt for number of late books and days late
//prompt for number of late dvds and days late
function myLibrary() {

    var x = prompt("Enter number of late books");
    var y = prompt("Enter number of days the books were late");

    var num1 = parseInt(x);
    var num2 = parseInt(y);

    var a = prompt("Enter number of late DVDs");
    var b = prompt("Enter number of days the DVDs were late");

    var num3 = parseInt(a);

    var num4 = parseInt(b);

//late fee charge for books $0.25 per day per book
//late fee charge for DVDs $0.50 per day per DVD
//Calculate late charges for books
    var lateBooksCharge = x * y * 0.25;

//Calculate late charges for DVDs
    var lateDVDsCharge = a * b * 0.50;

//Calculate total Patron Late Fee Charge(late charges for all books plus late charges for all DVDs.
    var totLateCharges = lateBooksCharge + lateDVDsCharge;
    {

        document.getElementById("demo").innerHTML = "Total late charges:" + "$" + totLateCharges.toFixed(2);
    }
}


//App to Determine the Cost of Pizza per Coworker.
//prompt for number of coworkers who would like to order pizza
//prompt for number of basic cheese pizza without toppings
//prompt for number of basic cheese pizzas with toppings
//prompt for number of total toppings

function myPizza(){
    var coWorkers= prompt("Enter number of coworkers who are ordering pizza");
    var basicCheese = prompt("Enter number of cheese pizzas with NO toppings");
    var basicCheesePlus = prompt("Enter number of pizzas with toppings");
    var tops = prompt("Enter total number of toppings");

    var num5 = parseInt(coWorkers);
    var num6 = parseInt(basicCheese);
    var num7 = parseInt(basicCheesePlus);
    var num8 =parseInt(tops);

//A basic cheese pizza cost $15.00
// A basic cheese pizza cost with toppings, $15.00 plus $1.25 per topping
//Calculate basic cheese pizza cost = number of pizzas times $15.00
//Calculate basic cheese pizza cost plus toppings = (number pizza with toppings *$15.00)+(1.25*number of toppings
//Calculate total pizza cost = basic cheese pizza cost + basic cheese pizza cost plus toppings
//Calculate total pizza cost/number of coworkers = cost per coworker


    var coworkerCost = ((num6*15.00)+ (num7*15.00)+(1.25*num8)) /num5;

    {

        document.getElementById("copizza").innerHTML = "Cost per coworker:" + "$" + coworkerCost.toFixed(2);
    }

}

function clickMe()
{
    var button= document.getElementById("learn"),
        count= 0;
    button.onclick = function() {
        count += 1;
        button["innerHTML"] = "Click me: " + count;
        alert("You pressed the button " + count + " times!");
    };
}


