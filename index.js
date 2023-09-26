// Code your solution in this file!

//example array of drivers to test with
const drivers = ['anna', 'joseph', 'donna', 'fred']

//returns the first two drivers by using the first two array indexes 
const returnFirstTwoDrivers = function(arr){
    return [arr[0], arr[1]]
}

//returns the last two array indexes through .length method
const returnLastTwoDrivers = function(arr){
    return [arr[arr.length - 2], arr[arr.length - 1]]
}

// holds the func definition for return first and last two drivers in an array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// a higher order function that sets the multipler to the fare on the outer func 
// returning a func that will hold the actual fare. 
// const foo = createFareMultiplier(4) -> foo(5) will return 20
function createFareMultiplier(multiplier){
    function fareFactory(fare){
        return fare * multiplier;
    }

    return fareFactory
}

// since we have our multiplier, we can use it to create a fixed multiplier for a var
// in this case, the multiplier is 2. For fareTripler, it's 3. 
const fareDoubler = createFareMultiplier(2) 

const fareTripler = createFareMultiplier(3)

// returns a callback function using the
function selectDifferentDrivers(driversArr, driversCallBackFunc){
    return driversCallBackFunc(driversArr);
}