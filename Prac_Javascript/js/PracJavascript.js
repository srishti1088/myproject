//This is the first line that would be printed when this JS file is called using src in script tag
document.write("Hi, This is printed from the external JS file, Thankyou very much!" +"<br/>");


//Function to add two numbers - this is a simple function to take two inputs, do manipulations and return output
function addNums(numOne, numTwo){
	var total = numOne + numTwo;
	return total;
}


//Function to change the color to the specified color in parameters
function changeColor(id, color){
	document.getElementById(id).style.color=color;
	return true;
}


//Function to change the text to the specific text in parameters and color
function changeText(id, text, color){
	document.getElementById(id).style.color=color;
	document.getElementById(id).firstChild.nodeValue=text;
	return true;
}


//Function to change the visiblity
