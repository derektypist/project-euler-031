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

/*
    Function to return the number of different ways to make n pence using
    any number of coins.

    coinSums(50)  returns 451
    coinSums(100) returns 4563
    coinSums(150) returns 21873
    coinSums(200) returns 73682

*/
function coinSums(n) {
    let coins = [1,2,5,10,20,50,100,200];
    // Apply Dynamic Programming
    let numWays = Array(n+1).fill(0);
    numWays[0] = 1;
    coins.forEach((coin) => {
        for (let i=coin;i<=n;i++) {
            numWays[i] += numWays[i-coin];
        }
    });
    // Return the last element in the array
    return numWays[n];
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("coininfo").innerHTML = txt;
}

