/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). 
(mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

*/

var massMark = 80;
var massJohn = 75;

var heightMark = 1.9;
var heightJohn = 1.8;

var bmiMark = massMark / ( heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
var isGreaterBMI = bmiMark > bmiJohn;

console.log('BMI of Mark = ' + bmiMark);
console.log('BMI of John = ' + bmiJohn);
console.log('Is Mark\'s BMI higher than John\'s? ' , isGreaterBMI );

if (bmiMark > bmiJohn)
{
    console.log('Mark\'s BMI is higher than John\'s. ');  
}
else
{
    console.log('John\'s BMI is higher than Mark\'s. ');  
}

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

*/

avgJohnScore = (89 + 120 + 103)/3;
avgMikeScore = (116 + 94 + 123)/3;
avgMaryScore = (97 + 134 + 105)/3;

console.log( ' John\'s Average score = ' + avgJohnScore + ' Mike\'s Average score = ' + avgMikeScore +' John\'s Average score = ' + avgMaryScore);

if ( avgJohnScore > avgMikeScore && avgJohnScore > avgMaryScore)
{
    console.log( ' John\'s team win in average and the John\'s team Average score = ' + avgJohnScore );
}
else if ( avgMikeScore > avgJohnScore && avgMikeScore > avgMaryScore)
{
    console.log( ' Mike\'s team win in average and the Mike\'s team Average score = ' + avgMikeScore );
}
else if ( avgMaryScore > avgJohnScore && avgMaryScore > avgMikeScore)
{
    console.log( ' Marry\'s team win in average and the Marry\'s team Average score = ' + avgMaryScore );
}
else
{
    console.log ('There is a draw');
}

if ( avgJohnScore > avgMikeScore)
{
    console.log( ' John\'s team win in average and the John\'s team Average score = ' + avgJohnScore );
}
else if ( avgMikeScore > avgJohnScore)
{
    console.log( ' Mike\'s team win in average and the Mike\'s team Average score = ' + avgMikeScore );
}
else
{
    console.log ('There is a draw');
}

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50,
15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/




var billAmount = [124, 48, 268];
function tipCalculator (billAmount)
{
    var tip;
 if (billAmount < 50)
 {
    tip = (20/100) 
 }
 else if (billAmount >= 50 && billAmount <= 200)
 {
    tip = (15/100) 
 }
 else
 {
    tip = (10/100) 
 }
  return tip * billAmount;
};

var allTips = [ tipCalculator(billAmount[0]), tipCalculator(billAmount[1]), tipCalculator(billAmount[2])];
var netAmount = [ billAmount[0] + allTips[0], billAmount[1] + allTips[1], billAmount[2] + allTips[2]];

console.log(allTips);
console.log(netAmount);

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

*/


var john = {
    FullName : 'John',
    Mass : 75,
    Height : 1.8,
    calcBMI : function (){
        this.BMI = this.Mass / (this.Height * this.Height );
    }
}
 /*
var mark = new Object();
mark.FullName = 'Mark';
mark.Mass = 80;
mark['Height'] = 1.9;
*/

var mark = {
    FullName : 'Mark',
    Mass : 80,
    Height : 1.9,
    calcBMI : function () {
        this.BMI = this.Mass / (this.Height * this.Height );
    }
}

john.calcBMI();
mark.calcBMI();

console.log(john);
console.log(mark);

if (mark.BMI > john.BMI)
{
    console.log('Mark\'s BMI is higher than John\'s BMI. ');  
}
else if (mark.BMI < john.BMI)
{
    console.log('John\'s BMI is higher than Mark\'s BMI. ');  
}
else
{
    console.log('John\'s BMI is equal to Mark\'s BMI. ');  
}

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

*/

/*
var billAmount = [124, 48, 268];
function tipCalculator (billAmount)
{
    var tip;
 if (billAmount < 50)
 {
    tip = (20/100) 
 }
 else if (billAmount >= 50 && billAmount <= 200)
 {
    tip = (15/100) 
 }
 else
 {
    tip = (10/100) 
 }
  return tip * billAmount;
};

var allTips = [ tipCalculator(billAmount[0]), tipCalculator(billAmount[1]), tipCalculator(billAmount[2])];
var netAmount = [ billAmount[0] + allTips[0], billAmount[1] + allTips[1], billAmount[2] + allTips[2]];

console.log(allTips);
console.log(netAmount);
*/

var john = {
    Amount : [124, 48, 268, 180, 42],
    calcTips : function()
    {
        
        this.tips = [];
        this.netAmount = [];
        for (var i =0 ; i<= this.Amount.length ; i++)
        {
        var percentage;
        var Amount = this.Amount[i];
                    if (Amount < 50)
            {
                percentage = (20/100) ;
            }
            else if (Amount >= 50 && Amount <= 200)
            {
                percentage = (15/100) ;
            }
            else
            {
                percentage = (10/100) ;
            }
            this.tips[i] = percentage * this.Amount;
            this.netAmount[i] = this.Amount + (percentage * this.Amount);
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
// Do the calculations
john.calcTips();
mark.calcTips();
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);
if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}
