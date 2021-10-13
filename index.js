// Code your solution in this file!


const returnFirstTwoDrivers = function(input){
    return input.slice(0,2);
}

const returnLastTwoDrivers = function(input){
    return input.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



const createFareMultiplier = function(x) {
    const fareFunction = function(fare){
       return fare * x
    }
    return fareFunction;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, inputFunction) => {
    return inputFunction(arrayOfDrivers);
}
    


