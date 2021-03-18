// Button launches the print function
document.getElementById("submitButt").onclick = printMessage;

// Reset text field on refresh
clearInput = () => document.getElementById("textField").value = "";
window.onload = clearInput;

// Function to show the message in the browser
function printMessage() {
    // Selects the value from the text field input
    var messageValue = document.getElementById("textField").value;
    // Displays it in the HTML paragraph with id of message
    document.getElementById("message").innerHTML = messageValue;
}