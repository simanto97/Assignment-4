
function mindGame(numberOfMindGame){
    //This is a function named mindGame().
    // Addition,subtraction, multiplication and division formula used here .
    if(typeof numberOfMindGame === "number" && numberOfMindGame >= 0){
        let result = ((numberOfMindGame * 3 + 10) / 2) - 5;
        return result;
    }
    return 'Please provide valid and positive number';
}



function evenOdd(inputEvenOdd){
    // This is a function named evenOdd().
    // In this function,we are using remainder formula.
    if(typeof inputEvenOdd === "string"){
        let evenOddString = inputEvenOdd;
        if(evenOddString.length % 2 === 0){
            return 'even';
        }
        return 'odd';
    }
    return 'Please provide string';
}



function isLGSeven(givenNumber){
    // This is a function named isLGSeven().
    // Here, we used if else rules and basic large or greater than formula.
    if(typeof givenNumber === "number"){
        let subtraction = givenNumber - 7;
        if(subtraction < 7){
            return subtraction;
        }
        else{
            let multiplication = givenNumber * 2;
            return multiplication;
        }
    }
    return "Please provide a number";
}



function findingBadData(arrayOfAges){
    // This is a function named findingBadData().
    // This function used for loop and pushed some value on a blank array.
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



function gemsToDiamond(gemOfFriend1, gemOfFriend2, gemOfFriend3){
    // This is a function named gemsToDiamond().
    // This function required basic greater than rules and if else formula.
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

