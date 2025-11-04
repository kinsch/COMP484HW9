//Javascript excercises

//SET ONE ---------------------------------------------------------------------------------------------------------

/***Exercise 1: Complex Arithmetic and Standard Rules**
Calculate the final result of the following expression, making sure to use `camelCase` for the final variable name and end all lines with a semicolon:
$3 + 5 * (10 / 2) - (8 - 4)$.
Output the result using `console.log()`.*/
var value;
value = 3 + 5 * (10 / 2) - (8 - 4);
console.log("Excercise 1 output: " + value + "\n");

/***Exercise 2: Case Sensitivity Test**
Declare a variable named `projectIdentifier` and assign it the string value "COMP484". On the next line, attempt to reassign its value to "JS_Advanced" using an incorrect casing (e.g., `ProjectIdentifier`).
Use a comment to explain why this reassignment attempt fails based on JavaScript's rules. Finally, correctly reassign and log the correct final value.*/
var projectIdentifier;
projectIdentifier = "COMP484";
/* ProjectIdentifier = "JS_Advanced"; does not work because ProjectIdentifier does not follow the same casing as projectIdentifier (which is in camel case).
Javascript is case sensitive and variable names must be exact. */
projectIdentifier = "JS_Advanced";
console.log("Excercise 2 output: " + projectIdentifier + "\n");

/***Exercise 3: String Quoting Challenge**
Declare a variable named `courseDescription` using `var` and `camelCase`. Assign it the string value: `The course is "interactive" and involves 'scripting' logic.` Define the string using double quotes, and ensure no escaping is required by using single quotes internally for the word 'scripting'.*/
var courseDescription;
courseDescription = "The course is \"interactive\" and involves 'scripting' logic.";
console.log("Excercise 3 output: " + courseDescription + "\n");

/***Exercise 4: Escaping and Console Output**
Declare a variable named `errorMessage` and assign it a string defined using single quotes. The string content must be: `An internal server error occurred: "Access Denied"`. Use the backslash escape character to properly include the double quotes within the single-quoted string definition. Log the `errorMessage` variable.*/
var errorMessage;
errorMessage = 'An internal server error occurred: \"Access Denied\"';
console.log("Excercise 4 output: " + errorMessage + "\n");

/***Exercise 5: Type Coercion with Non-Plus Operators**
Set `valueA` to the number 10 and `valueB` to the string "4". Calculate `resultSubtraction` using the subtraction operator (`-`) and `resultMultiplication` using the multiplication operator (`*`). Log the final values and use the `typeof` operator in separate console logs to demonstrate that JavaScript coerces `valueB` into a numeric type for these operations.*/
var valueA = 10;
var valueB = "4"; //valueB is a string yet types are returning as number
var resultSubtraction = valueA - valueB;
var resultMultiplication = valueA * valueB;
console.log("Excercise 5 outputs: ");
console.log("Subtraction results: " + resultSubtraction + ", Multiplication results: " + resultMultiplication);
console.log("Subtraction type: " + typeof resultSubtraction + ", Multiplication type: " + typeof resultMultiplication + "\n");

// SET TWO --------------------------------------------------------------------------------------------------------
/***Exercise 6: Understanding `null` and `undefined` Types**
Declare a variable `unassignedVar` without giving it a value. Declare a second variable `explicitNull` and set its value explicitly to `null`. Log the results of `typeof unassignedVar` and `typeof explicitNull`. Explain in a multi-line comment why the `typeof` operator returns "object" for `null`.*/
var unassignedVar;
var explicitNull = null;
console.log("Excercise 6 outputs: ");
console.log("unassignedVar type: " + typeof unassignedVar + ", explicitNull type: " + typeof explicitNull + "\n");
/*typeof is returning as object because of Javascript's history. Since its first implementation, javascript values were represented as a type tag and a value. Type tag for objects was 0
and null was represented as the NULL pointer (0x00 in most platforms). Null had 0 as type tag and so
typeof returns object. Changes have since been proposed, but were ultimately rejected.*/

/***Exercise 7: Boolean Assignment and Type Identification**
Declare a variable `isBlocking` and assign it the boolean value `true`. Then, reassign `isBlocking` to the string value "true" (with quotes). Use `console.log(typeof isBlocking)` after each assignment to demonstrate how JavaScript variables are weakly typed and hold typed values.*/
var isBlocking = true;
console.log("Excercise 7 outputs: ");
console.log(typeof isBlocking);
isBlocking = "true";
console.log(typeof isBlocking + "\n");

/***Exercise 8: Invalid Variable Naming**
Write three attempted variable declarations that would violate JavaScript's naming rules (e.g., starting with a number, using a space, or using symbols not allowed). Comment out these three lines, and next to each one, provide an explanation for why the declaration fails.*/
/*var 0; //variable names cannot be a number
var this is a variable; //variable names cannot have spaces
var &&; //variable names cannot have special characters */
console.log("Excercise 8 output: No output. See comments.\n");

/***Exercise 9: Chained Shorthand Arithmetic**
Initialize a variable `counterValue` to 50. In a single sequence of statements, first use the shorthand division assignment operator (`/=`) to divide the value by 5, and then use the shorthand subtraction assignment operator (`-=`) to subtract 3 from the result. Log the final `counterValue`.*/
var counterValue = 50;
counterValue /= 5;
counterValue -= 3;
console.log("Excercise 9 outputs: " + counterValue + "\n");

/***Exercise 10: Prefix vs. Postfix Unary Operators**
Initialize a variable `x` to 10.

1. Create a variable `y_post` and assign it the result of `x++`. Log both `y_post` and `x`.
2. Reinitialize `x` to 10.
3. Create a variable `z_pre` and assign it the result of `++x`. Log both `z_pre` and `x`.
   Use comments to explain how the placement of the unary operator (`++` before or after) affects the timing of the increment relative to the assignment.*/

var x = 10;
var y_post = x++;
console.log("Excercise 10 outputs: ");
console.log ("Before reinitializing, x: " + x + ", y_post: " + y_post);
x = 10;
var z_pre = ++x;
console.log ("New initialization, x: " + x + ", z_pre: " + z_pre + "\n");
/*The placement of the unary operators depends whether or not the value is added before or after. 
x++ adds the value after hence 10, and ++X adds before hence 11.*/

// SET 3 ---------------------------------------------------------------------------------------------------------------
/***Exercise 11: Loose Equality and Coercion**
Set `testNumber` to 0 (a number) and `testBoolean` to `false` (a boolean). Write an `if` statement that compares them using the loose equality operator (`==`). Inside the `if` block, log a message confirming they are loosely equal. Explain in a comment why this comparison returns true (due to type coercion).*/
var testNumber = 0;
var testBoolean = false;
if (testNumber == testBoolean) {
    console.log("Excercise 11 Output: Variables are equal (==) + \n");
}
/*The two are equal because == involves type coercion, in which false is converted to 0. Since 0 == 0, the if condition executes. */

/***Exercise 12: Strict Inequality Test**
Set `versionA` to 10.0 (a number) and `versionB` to "10.0" (a string). Write an `if` statement using the strict inequality operator (`!==`). Log a message if they are _not_ strictly equal, and use an `else` block to handle the case where they _are_ strictly equal.*/
var versionA = 10.0;
var versionB = "10.0";
if (versionA !== versionB) {
    console.log("Execercise 12 Output: Not strictly equal.\n");
} else {
    console.log("Execercise 12 Output: Strictly equal.\n");
}

/***Exercise 13: Logical OR and AND Combination**
You are checking user permissions. Set three boolean variables: `isLoggedIn`, `isSubscriber`, and `isTrialExpired`. Write an `if` condition using logical operators (`&&` and `||`) that checks if access should be granted. Access is granted if (`isLoggedIn` is true AND `isSubscriber` is true) OR if (`isLoggedIn` is true AND `isTrialExpired` is false).*/
var isLoggedIn = true;
var isSubscriber = true;
var isTrialExpired = false;

if ((isLoggedIn && isSubscriber) || (isLoggedIn && !isTrialExpired)) {
    console.log("Excercise 13 Output: Access Granted \n");
} else {
    console.log("Excercise 13 Output: Access Not Granted \n");
}

/***Exercise 14: Simulating XOR using Nested Conditionals**
Simulate the Logical XOR operator (either A is true or B is true, but NOT BOTH) using variables `conditionA` and `conditionB`. Use a combination of `if` statements and logical operators to achieve this. Log "XOR Success" if the condition is met, otherwise log "XOR Fail".*/
var A = true;
var B = false;

if ((A && !B) || (!A && B)) {
    console.log("Excercise 14 Output: XOR Success \n")
} else {
    console.log("Excercise 14 Output: XOR Fail \n")
}

/***Exercise 15: Converting IF/ELSE to Ternary Operator**
Write an initial `if/else` statement that checks if a variable `scriptLoadType` (initialized to "deferred") is equal to "deferred". If true, assign the string "Non-blocking" to a variable `loadStatus`. Otherwise, assign "Potentially Blocking". Then, rewrite the entire conditional structure using only the Ternary Operator (`? :`) and store the result in a new variable `loadStatusTernary`.*/
var scriptLoadType = "deferred";
var loadStatus;

if (scriptLoadType === "deferred") {
    loadStatus = "Non-blocking";
} else {
    loadStatus = "Potentially Blocking";
}
console.log("Excercise 15 Output:");
console.log("Before being rewritten: " + loadStatus);

var loadStatusTernary = (scriptLoadType === "deferred") ? "Non-blocking" : "Potentially Blocking";
console.log("After: " + loadStatusTernary + "\n");

// Set 4 ------------------------------------------------------------------------------
// *IMPORTANT* Kindly note that excercises 17 and 20 require a reference to document, please use console on browser instance of index.html.
//I have attached screenshots for proof of console outputs. 17 and 20 also have a unique condition to allow for running without reference errors in the vscode terminal, all while maintaining functionality in the browser.

/***Exercise 16: Commenting and Code Structure**
Define a function named `calculateRenderTime` (you don't need to define its body). Use proper indentation and a multi-line comment (`/* */ //`) to describe the function's purpose (e.g., calculating the time taken to parse HTML and execute JavaScript). Include a single-line comment inside the function body using `//`.*/
/*calculateRenderTime is meant to calculate the time needed to parse HTML and run javascript when a webpage is rendered*/
function calculateRenderTime() {
    //Define function here to calculate the render time
}
console.log("Execercise 16 Output: No output. See comments.\n");

/***Exercise 17: Date Object Formatting Challenge (MM/DD/YYYY)
Complete the challenge described in the course materials. Create a new Date object. Using appropriate methods (assume basic knowledge of standard Date methods for year, month, day), extract the necessary components and use string concatenation to output the formatted string: "Today is MM/DD/YYYY". (Hint: Months are zero-indexed, so remember to add 1). Log the final formatted string to the console.*/
var date = new Date();
/*alert("Today is " + date);
console.log("Today is " + date);*/
// Based on course modules, we need to put an element in a .html file to show the date in MM/DD/YYYY format.
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();
var dateFormatted = "Today is " + month + "/" + day + "/" + year;
console.log("Excercise 17 Output: " + dateFormatted + "\n");
if (typeof document !== "undefined") { //condition to prevent reference errors while preserving functionality in the browser
    document.body.innerHTML = "<h1>" + dateFormatted + "</h1>";
}

/***Exercise 18: Mixed Type Arithmetic Explanation**
Initialize `val1` to 20 (number) and `val2` to "5" (string). Calculate `sumResult = val1 + val2` and `diffResult = val1 - val2`. Log both results. In a multi-line comment, explain why the `sumResult` differs significantly from `diffResult`, referencing JavaScript's behavior with the `+` operator versus other arithmetic operators.*/
var val1 = 20;
var val2 = "5";

console.log("Excercise 18 Output: ")
var sumResult = val1 + val2;
console.log("Sum result is: " + sumResult);
var diffResult = val1 - val2;
console.log("Diff result is: " + diffResult + "\n");
/*sumResult and diffResult differ by so much because of the behavior of '+' and '-'. In Javascript, '+' has another meaning with strings outside of being a mathematical
operator. Here, it is being used as a string concatenator. The '-' operator only has a mathematical meaning and so 20-5 yeilds 15.*/

/***Exercise 19: Conditional based on Type Check**
Initialize a variable `dataInput` to the numeric value 484. Write an `if/else` statement. Use the `typeof` operator inside the condition to check if `dataInput` is strictly equal to the string "number". If it is, log "Input is numeric." If it is not, reassign `dataInput` to the boolean value `true`, and then log the new type using `typeof`.*/
var dataInput = 484;
if (typeof dataInput === "number") {
    console.log("Excercise 19 Output: Input is numeric.\n");
} else {
    dataInput = true;
    console.log("Excercise 19 Output: New type is: " + typeof dataInput + "\n");
}

/***Exercise 20: Simulating DOM Manipulation Timing Failure (Conceptual)**
Write the standard JavaScript code sequence necessary to inject an `<h1>` element containing the text "Interactive Layer Loaded" into the document body.
Crucially, precede this injection code with a multi-line comment explaining the timing issue that occurs if this script is placed in the HTML `<head>` _without_ the `defer` or `async` attributes, leading to the error "Cannot set property 'innerHTML' of null".*/
/*The following code attempts to inject an h1 element within the body- a form of DOM manipulation. Adding attributes like defer and async have various effects on when this script gets run. 
Scripts with defer are downloaded asynchonously and also during HTML parsing. It is important to note that with defer, scripts are only executed after the HTML document
is fully parsed. Scripts with async are also downlaoded asynchronously with HTML parsing but for execution, once the script is downloaded
and HTML parsing is paused, then the script gets executed. Without either of these two elements, the script is attempting to
modify the body before the body is even created- hence the timing issue. This occurs if the script is placed in the head, but can be avoided if the script is placed within the body.
For this exercise, I've utilized the defer attribute and placed the script within the head to modify the content without the timing issue.*/
if (typeof document !== "undefined") { //condition to prevent document referene errors while preserving functionality in the browser
    var h1 = document.createElement('h1');
    h1.textContent = "Interactive Layer Loaded";
    document.body.appendChild(h1);
}
console.log("Excercise 20 Output: Kindly view index.html, script is run within the head but does not encounter errors because of use of 'defer' attribute.");
