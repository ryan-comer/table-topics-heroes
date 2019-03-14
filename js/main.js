// Power card image sources
const powerSrcs = [
    "power1",
    "power2",
    "power3"
];

// Situation card image sources
const situationSrcs = [
    "situation1",
    "situation2",
    "situation3"
]

// Pick a random card for each slot
function drawCards(){
    // Get random power
    var powerIndex = Math.floor(Math.random() * powerSrcs.length);
    var powerSource = powerSrcs[powerIndex];

    // Get random situation
    var situationIndex = Math.floor(Math.random() * situationSrcs.length);
    var situationSource = situationSrcs[situationIndex];

    // Change the sources
    alert("Power: " + powerSource + "    Situation: " + situationSource);
}