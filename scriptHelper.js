// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.

   document.getElementById("missionTarget").innerHTML = 
   
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
   
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

function validateInput(testInput) {
    //Validate the user input
   if(testInput === ""){
    return "Empty";
   }
   else if(isNaN(testInput)){
    return "Not a Number";
   }
   else{
    return "Is a Number";
   }
    
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //using validateInput() function to complete the formSubmission.
    
    let form = document.querySelector("form");

        if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
            alert("All field required");
        }
        else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
            alert("Make sure to enter valid information for each field");
        }
        else{
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Pilot ${copilot} is ready for launch`;

            //Updating Shuttle Requirement

            //check fuel level
            if(fuelLevel < 10000){
                document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                //for visiblity 
                //list.style.visibility = "visible";
                document.getElementById("faultyItems").style.visibility = "visible";
                let status = document.querySelector("#launchStatus");
                status.style.color = "rgb(253, 4, 4)"; 
                //document.getElementById("launchStatus").style.color = "red";
            }
            //check cargoLevel
            if(cargoLevel > 10000){
                document.getElementById("fuelStatus").innerHTML = "Fuel level high for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                //list.style.visibility = "visible";
                document.getElementById("faultyItems").style.visibility = "visible";
                let status = document.querySelector("#launchStatus");
                status.style.color = "rgb(253, 4, 4)";
                //document.getElementById("launchStatus").style.color = "red";
            }

            //condition for low fuel and heavy cargo
            if(fuelLevel < 10000 && cargoLevel > 10000){
                document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                //list.style.visibility = "visible";
                //id selector: document.querySelector("#main");
                document.getElementById("faultyItems").style.visibility = "visible";
                let status = document.querySelector("#launchStatus");
                status.style.color = "rgb(253, 4, 4)";
                //document.getElementById("launchStatus").style.color = "red";
            }
            if(fuelLevel >= 10000 && cargoLevel <= 10000){
                document.getElementById("fuelStatus").innerHTML = "Fuel level enough for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
                document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
                //for visiblity 
                //list.style.visibility = "visible";
                document.getElementById("faultyItems").style.visibility = "visible";
                //document.getElementById("launchStatus").style.color = "green";
                let status = document.querySelector("#launchStatus");
                status.style.color = "rgb(36, 185, 23)";
            }
            
        }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    //select the planet randomly
    let selection = Math.floor(Math.random()*6);
    return planets[selection];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
