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
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
        //at this point all fields valid, then:
        //check fuel level
        //check cargo mass

    } else if (cargoLevel > 10000 || fuelLevel < 10000) {
        list.style.vsibility = "visible";
        document.getElementByID("launchStatus").innerHTML = "Shuttle not ready for launch"; //also change to red
        document.getElementByID("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementByID("copilotStatus").innerHTML = `Pilot ${copilot} is ready for launch`;
        if (fuelLevel < 10000) {
            document.getElementByID("fuelStatus").innerHTML = `Fuel level too low for launch`
        } else {
            document.getElementByID("fuelStatus").innerHTML = `Fuel level high enough for launch`
        }
        if (cargoLevel > 10000) {
            document.getElementByID("cargoStatus").innerHTML = `Cargo mass too high for launch`
        } else {
            document.getElementByID("cargoStatus").innerHTML = `Cargo mass low enough for launch`
        }
    } else {
        //success
        document.getElementByID("launchStatus").innerHTML = `Shuttle is ready for Launch`
    }



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
