// Function to Get Coin Information (including Invalid Input)
function getCoinInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("pence").value;
    // Check if the input is valid
    if (isNaN(num) || num.toString().length == 0 || num<1 || num>1000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter the value between 1 and 1000 as a whole number.`;
    } else {
        // Remove any leading zeros
        num = parseInt(num);
        txt += `You have entered ${num} pence. <p>`;
        txt += `There are ${coinSums(num)} ways to make ${num} pence.`;
    }

    // Display Information in the Browser
    document.getElementById("coininfo").innerHTML = txt;
}