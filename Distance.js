// Internal helper functions
const feetToMeters = (feet) => {
    let meters = (feet * 0.304).toFixed(2);
    return `${feet} is ${meters} meters`

}

const metersToFeet = (meters) => {
    let feet = (meters* 3.28084).toFixed(2);
    return `${meters} is ${feet} feet.`
}

const milesToKm = (miles) => {
    let kilometer = (miles * 1.60934).toFixed(2);
    return `${miles} is ${kilometer} kilometers.`
}

const kmToMiles = (km) => {
    let miles = (km * 0.621371).toFixed(2);
    return `${km} is ${miles} miles.`
}


// Calculate function
exports.calculate = function (unit, value) {
    if (unit == 'feet') {
        return feetToMeters (value)
    } else if (unit == 'meters'){
        return metersToFeet (value)
    }else if (unit == 'miles') {
        return milesToKm (value)
    }else {
        return kmToMiles (value)
    }
}
