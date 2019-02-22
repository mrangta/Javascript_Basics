// java basic
console.log("Hello World");

/* *********************
variable and data types
*/
var firstName = 'Monika';
var lastName = 'Rangta';
var age = 26;
var fullAge = true;
/*var job;
console.log(job);
job = 'Project Manager';
*/

/* ********************* 
variable naming rules
*/
var _test = true;
var $test1 = true;
// reserved words cannot be used as variable name
//var if = 1;

console.log('First Name = ' + firstName + '\n' + 'Last Name = ' + lastName + '\n' + 'Age = ' + age + '\n' + 'Full Age = ' + fullAge);

/* *********************
variable mutation and type coercion
*/

// type coercion
var job, isMarried;
job = 'Project Manager';
isMarried = true;

console.log( firstName +' '+ 'is a '+ age + ' year old ' + job +'. Is she married? '+ isMarried);

// variable mutation

job = 'Quality Analyst' ;
age = 'twenty six';

// alert
alert( firstName +' '+ 'is a '+ age + ' year old ' + job +'. Is she married? '+ isMarried);

// enter value on run time
lastName = prompt('Enter your LastName below:');
console.log(firstName +' '+ lastName);

/* *********************
basic operators
*/

var currentYear = 2018;
ageMonika = 26 ;
ageManeesh = 31;
yearMonika = currentYear - ageMonika;
yearManeesh = currentYear - ageManeesh;
console.log(yearMonika);
console.log(yearManeesh);
console.log(currentYear + 2);
console.log(currentYear * 2);
console.log(currentYear / 2);


// logical operators
var monikaOlder = ageMonika > ageManeesh;
console.log(monikaOlder);

// typeof operator
console.log(typeof ageMonika );
console.log(typeof monikaOlder);
console.log(typeof 'What type Iam?');
var x;
console.log(typeof x);

/*****************
 Operator Precedence
 */

 // Multiple operators
var legalFullAge = 18;
var isFullAge = currentYear - yearMonika >= legalFullAge; //true;
 console.log(isFullAge);

 //Grouping operators
 var averageAge = (ageMonika + ageManeesh) / 2;
 console.log(averageAge);

 // Multiple assignment
  var x , y;
  x = y = (3 + 5) * 5 - 6; // 8 * 5 - 6 // 40 - 6 // 34 // assignment operator has right-to-left associativity
  console.log(x , y);

  // More operators
 x += 5; // x = x + 5
 console.log(x);
 x *= 5; // x = x * 5 
 console.log(x);
 x /= 4; // x = x / 5
 console.log(x);
 x -= x; // x = x - x
 console.log(x);
 x++; // x = x + 1 // increement
 console.log(x);
 x--; // x = x - 1 // decrement
 console.log(x);

 /******************************
 * If / else statement
 */

 var civilStatus = 'single';

 if (civilStatus === 'single')
 { 
     console.log( firstName + ' will hopefully marry soon :)');
 }
 else
 {
    console.log( firstName + ' is married');
 }



if (isMarried)
{
    console.log( firstName + ' is married');
}
else
{
 console.log( firstName + ' will hopefully marry soon :)');
}

 /******************************
 * Boolean Logic
 */

 if ( ageMonika < 13)
 {
     console.log( firstName + ' is a girl.');
 }
 else if ( ageMonika >= 13 && ageMonika < 20)
 {
     console.log( firstName + ' is a teenager.');
 }
 else if ( ageMonika >= 20 && ageMonika < 30)
 {
     console.log( firstName + ' is a young woman.');
 }
 else
 {
     console.log( firstName + ' is a woman.');
 }

  /******************************
 * The Terenary operator and switch statements
 */

 switch (true)
 {
     case ageMonika < 13:
     console.log( firstName + ' is a girl.');
     break;

     case ageMonika >= 13 && ageMonika < 20:
     console.log( firstName + ' is a teenager.');
     break;

     case ageMonika >= 20 && ageMonika < 30:
     console.log( firstName + ' is a young woman.');
     break;

     default:
     console.log( firstName + ' is a woman.');
 }

 switch (job)
 {
     case job = 'teacher':
     console.log ( firstName + ' teaches kids how to code.');
     break;

     case job = 'Project Mangaer':
     console.log ( firstName + ' manage the projects delivery to client.');
     break;

     case job = 'Quality Analyst':
     console.log ( firstName + ' ensures there is no bug in the code.');
     break;

     default:
     console.log( firstName + ' does something else');

 }

 // Terenary operator

  ageMonika >= 18 ? console.log( firstName + ' drinks beer.') : console.log( firstName + ' drinks juice.');

  var drink = ageMonika >= 18 ? 'beer' : 'juice';
  console.log(drink);

   /******************************
 * Truthy and Falsy Values and Equality opertors
 */

// Falsy Values = undefined, null, 0, NaN.
// Truthy values = NOT Falsy values

var height;
if (height || height === 0)
{
     console.log('Variable is defined');
}
else{
    console.log('Variable has not been defined');
}

// Equality operators

height = 23;
if (height == '23')
{
     console.log('The == operator does Type coercion and is not a strict equality operator'); // 23 == '23' // true // string datatype is equal to  numeric // 23 ==='23' // false
}

   /******************************
 * Functions
 */

 function calculateAge(birthYear)
 {
     return 2018 - birthYear;
 }

 var ageJohn = calculateAge(1992);
 var ageMike = calculateAge(1982);
 var ageJane = calculateAge(1965);
console.log(ageJohn, ageMike, ageJane);

function calculateRetirementAge( year, firstName)
{
    var retirement = 65 - calculateAge(year);
    console.log( firstName + ' is gettting retired after ' + retirement + ' years') ;
}

calculateRetirementAge(1990, 'Pankaj');
calculateRetirementAge( 1992, 'Monika');
calculateRetirementAge(1987 , 'Maneesh');


  /******************************
 * Function Declarations and Expressions
 */

 // Function declaration
 //function whatDoYouDo(job , firstName){};

 // Function Expressions
 var whatDoYouDo = function(job,firstName)
 {
    switch(job)
    {
        case 'teacher':
        return console.log(firstName + ' teaches kid how to code');
        case 'driver':
        return console.log(firstName + ' drives a school van');
        case 'designer':
        return console.log(firstName + ' designs various good websites');
        default:
        return console.log(firstName + ' does something else ');
    }
 }

 whatDoYouDo('teacher' , 'Marry');
 whatDoYouDo('driver', 'Mike');
 whatDoYouDo('designer','John');
 whatDoYouDo('painter','Sam');

  /******************************
 * Arrays
 */

 // Initialize new Array

 var names =['John','Monika','Maneesh'];
 var years = new Array(1990,1992,1987);

 console.log(names[2]);
 console.log(names.length);

 // Mutate Array Data
 names[1] = 'Riya';
 names[5] = 'Pankaj'
 names[names.length]='Trisha';
 console.log(names);

 //  Different Data types
  var john = ['John', 'Smith', 26,'teacher',false];
  john.push('blue');
  john.unshift('Mr.');
  console.log(john);

  john.pop();
  john.pop();
  john.shift();
  console.log(john);
  
  console.log(john.indexOf('23')); // if any value is not in the array, it's output will be -1
  console.log(john.indexOf('teacher'));

  var jobDesigner = john.indexOf('designer')===-1? console.log('John is not a designer') : console.log('John is a designer'); 

/******************************
 * Object and Properties
 */
// object literal
 var monika =
  {
    firstName : 'Monika',
    lastName : 'Rangta',
    birthYear: 1992,
    family : ['Maneesh', 'Pankaj', 'Pratibha'],
    job : 'Project Manager',
    isMarried : true
 };

 console.log(monika);
 console.log(monika.firstName);
 console.log(monika['lastName']);
  var x = 'birthYear';
  console.log(monika[x]);

  monika.job = 'Quality Analyst';
  monika['isMarried'] = false;
  console.log(monika);

  // New Object Syntax
var maneesh = new Object();
 maneesh.firstName ='Maneesh';
 maneesh['lastNmae'] = 'Chauhan';
 maneesh.birthYear = 1987;
 console.log(maneesh);

 /******************************
 * Object and Methods
 */

var monika =
{
  firstName : 'Monika',
  lastName : 'Rangta',
  birthYear: 1992,
  family : ['Maneesh', 'Pankaj', 'Pratibha'],
  job : 'Project Manager',
  isMarried : true,
  calcAge : function() {
      this.age = 2018 - this.birthYear ;
  }
};

monika.calcAge();
console.log(monika);


/*****************************
* Loops and iteration
*/

// For Loop

for ( var i = 0 ; i<=20; i+=2){
    console.log(i);
}

var john = ['John', 'Smith', 26,'teacher',false];
for ( var i = 0; i < john.length ; i++)
{
    console.log(john[i]);
}

// While Loop

var i = 0;
while ( i < john.length)
{
    console.log(john[i]);
    i++;
}

// Continue and Break Statements

var john = ['John', 'Smith', 26,'teacher',false];
for ( var i = 0; i < john.length ; i++)
{
    if (typeof john[i] !== 'string')
    {
        continue;
    }
    console.log(john[i]);
}

var john = ['John', 'Smith', 26,'teacher',false];
for ( var i = 0; i < john.length ; i++)
{
    if (typeof john[i] !== 'string')
    {
        break;
    }
    console.log(john[i]);
}

// Looping backwards
 for ( i = john.length -1 ; i >= 0 ; i--)
 {
    console.log(john[i]);
 }
