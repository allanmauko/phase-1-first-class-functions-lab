// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier (fare) {
return function(value){
    return fare*value;
}
}

const fareDoubler = createFareMultiplier(2);
let fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers,driversReturn) =>{
    return driversReturn(drivers)
}