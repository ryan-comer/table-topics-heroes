// Power card image sources
var powerSrcs = [
    "control-weather",
    "invisibility",
    "mind-control",
    "shapeshifting",
    "super-strength",
    "talk-to-animals",
    "telekenisis",
    "time-travel"
];

const powerSrcsCopy = [
    "control-weather",
    "invisibility",
    "mind-control",
    "shapeshifting",
    "super-strength",
    "talk-to-animals",
    "telekenisis",
    "time-travel"
];

// Situation card image sources
var situationSrcs = [
    "arch-nemisis",
    "bank-robbery",
    "car-theft",
    "cat-in-tree",
    "ice-cream-fell",
    "traffic-jam",
    "wedding-crashers",
    "power-outage"
]

const situationSrcsCopy = [
    "arch-nemisis",
    "bank-robbery",
    "car-theft",
    "cat-in-tree",
    "ice-cream-fell",
    "traffic-jam",
    "wedding-crashers",
    "power-outage"
]

// Pick a random card for each slot
function drawCards(){

    // Get random power
    var powerIndex = Math.floor(Math.random() * powerSrcs.length);
    var powerSource = powerSrcs[powerIndex];
    var powerPath = "./res/powers/" + powerSource + ".jpg";
    
    // Get random situation
    var situationIndex = Math.floor(Math.random() * situationSrcs.length);
    var situationSource = situationSrcs[situationIndex];
    var situationPath = "./res/situations/" + situationSource + ".jpg";

    // Update arrays
    powerSrcs.splice(powerIndex, 1);
    situationSrcs.splice(situationIndex, 1);

    // Check for empty
    if(powerSrcs.length == 0){
        powerSrcs = powerSrcsCopy.slice();
    }
    if(situationSrcs.length == 0){
        situationSrcs = situationSrcsCopy.slice();
    }

    // Change the sources
    document.getElementById('power-image').src = powerPath;
    document.getElementById('situation-image').src = situationPath;
}