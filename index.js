// Problem 1: Let's play a mind game
//This is a function named mindGame().Addition,subtraction, multiplication and division formula used here .

function mindGame(numberOfMindGame){
    if(typeof numberOfMindGame === "number"){
        let result = ((numberOfMindGame * 3 + 10) / 2) - 5;
        return result;
    }
    return 'Please provide number';
}

// console.log(mindGame(5));

// Problem 2: Finding even or odd
// This is a function named evenOdd().In this function,we are using remainder formula.

function evenOdd(inputEvenOdd){
    if(typeof inputEvenOdd === "string"){
        let evenOddString = inputEvenOdd;
        if(evenOddString.length % 2 === 0){
            return 'even';
        }
        return 'odd';
    }
    return 'Please provide string';
}

// console.log(evenOdd('batch7'));

// Problem 3: Is Less or Greater than seven
// This is a function named isLGSeven().Here, we used if else rules and basic large or greater than formula.

function isLGSeven(givenNumber){
    if(typeof givenNumber === "number"){
        let subtraction = givenNumber - 7;
        if(subtraction >= 7){
            let multiplication = givenNumber * 2;
            return multiplication;
        }
        else{
            return subtraction;
        }
    }
    return "Please provide a number";
}

// console.log(isLGSeven(-15));

// Problem 4: Finding Bad data
// This is a function named findingBadData().This function used for loop and pushed some value on a blank array.

function findingBadData(arrayOfAges){
    if(typeof arrayOfAges === "object"){
        let badData = [];
        for(let i = 0; i < arrayOfAges.length; i++){
            let numberOfAge = arrayOfAges[i];
            if(numberOfAge < 0){
                badData.push(numberOfAge);
            }
        }
        const totalBadData = badData.length;
        return totalBadData;
    }
    return 'Please provide array';
}

// let arrayOfAges = [ -4, -9, -5, -33, -55 ];
// console.log(findingBadData(arrayOfAges));

// Problem 5: Convert your gems into diamond
// This is a function named gemsToDiamond().This function required basic greater than rules and if else formula.

function gemsToDiamond(gemOfFriend1, gemOfFriend2, gemOfFriend3){
    if(typeof gemOfFriend1 === "number" && typeof gemOfFriend2 === "number" && typeof gemOfFriend3 === "number"){
        let diamondOfFriend1 = gemOfFriend1 * 21;
        let diamondOfFriend2 = gemOfFriend2 * 32;
        let diamondOfFriend3 = gemOfFriend3 * 43;
        let totalDiamond = diamondOfFriend1 + diamondOfFriend2 + diamondOfFriend3;
        if(totalDiamond > 1000 * 2){
            return totalDiamond - 2000;
        }
        return totalDiamond;
    }
    return 'Please provide numbers';
}

// console.log(gemsToDiamond(100, 5, 1));