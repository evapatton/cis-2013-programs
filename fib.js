//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount, i, j, k, stringOutput;
    
    i=0;  // sets the first number in the Fibonacci series to 0
	j=1;  //sets the second number in the Fibonacci series to 1
	
	stringOutput = i + " " + j; //initialize the Fibonacci series output to include the first two numbers
    
    var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
    
    //validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100

    if (isNaN(intCount) || intCount < 2 || intCount > 100) 
    {
        $("total_fib").value = ""; 
        alert("You must enter a number between 2 and 100");
    } else {
        while (intCount > 2) 
        {
            k = i + j;
            i = j;
            j = k;
            intCount --; 
            stringOutput = stringOutput + " " + k; 
        }
        $("output").value = stringOutput; // Push solution back to Output through DOM
} 
};

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; 
}  