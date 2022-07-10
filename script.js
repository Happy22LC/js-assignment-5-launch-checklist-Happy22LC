// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

       let selectedPlanet = pickPlanet(listedPlanets);
       console.log(selectedPlanet);
       addDestinationInfo(window.document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star,
        selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
   });

   faultyItems.style.visibility = "hidden";
 
         let form = document.querySelector("form");
         form.addEventListener("submit", function(event) {
             let pilotNameInput = document.querySelector("input[name=pilotName]").value;
             let copilotNameInput = document.querySelector("input[name=copilotName]").value;
             let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
             let cargoMassInput = document.querySelector("input[name=cargoMass]").value;
             let faultyItems = document.querySelector("#faultyItems");
             event.preventDefault();
             formSubmission(window.document, faultyItems, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
         });
 
   
});