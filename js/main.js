// Power card image sources
const powerSrcs = [
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
const situationSrcs = [
    "arch-nemisis",
    "bank-robbery",
    "car-theft",
    "cat-in-tree",
    "ice-cream-fell",
    "traffic-jam"
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

    // Change the sources
    document.getElementById('power-image').src = powerPath;
    document.getElementById('situation-image').src = situationPath;
}