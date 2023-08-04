// Write your JavaScript code here!

const { formSubmission, myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoLevel]").value;
        let list = document.getElementById("faultItems");
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       addDestinationInfo(pickPlanet(listedPlanetsResponse));
   })
   

window.addEventListener("submit", function {
formSubmission(document)
})   //listener for submit function
   
});
