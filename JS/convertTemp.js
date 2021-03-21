//Detail
document.getElementById("rangeCel").innerHTML = "0" + "\xB0" + "C - 100" + "\xB0" + "C";
document.getElementById("unitCel").innerHTML = "\xB0C";

document.getElementById("rangeFah").innerHTML = "32" + "\xB0" + "F - 212" + "\xB0" + "F";
document.getElementById("unitFah").innerHTML = "\xB0F";

document.getElementById("rangeRea").innerHTML = "0" + "\xB0" + "R - 80" + "\xB0" + "R";
document.getElementById("unitRea").innerHTML = "\xB0R";

document.getElementById("rangeKel").innerHTML = "273" + "\xB0" + "K - 373" + "\xB0" + "K";
document.getElementById("unitKel").innerHTML = "\xB0K";

//Convert Temperature
function celToFah(cel){
    var fah = cel / 5 * 9 + 32;
    return fah;
};