// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {//feels not done
    let numberInput = Number(testInput);
    if (numberInput === '') {
        return "Empty";
    }
    else if (isNaN(numberInput)) {
        return "Not a Number";
    }
    else if (isNaN(numberInput) === false) {
        return "Is a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {     
    let pilotName = document.getElementByID('pilotName');
    let copilotName = document.getElementByID('copilotName');
    let fuel = document.getElementById('fuelLevel');
    let cargo = document.getElementByID('cargoLevel');
    //validate pilot & copilot as string
    //validate fuel & cargo as number
    validateInput(pilotName) //should be "Not a Number"
    validateInput(copilotName) //should be "Not a Number"
    validateInput(fuel) //should be "Is a Number"
    validateInput(cargo) //should be "Is a Number"



}

async function myFetch() { //feels done
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
        .then(function (response) {
            return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) { //done
    return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
