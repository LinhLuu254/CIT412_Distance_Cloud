// Internal helper functions
const feetToMeters = (feet) => {
    let meters = (feet * 0.304).toFixed(2);
    return `${meters}`

}

const metersToFeet = (meters) => {
    let feet = (meters* 3.28084).toFixed(2);
    return `${feet}`
}

const milesToKm = (miles) => {
    let kilometer = (miles * 1.60934).toFixed(2);
    return `${kilometer}`
}

const kmToMiles = (km) => {
    let miles = (km * 0.621371).toFixed(2);
    return `${miles}`
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
