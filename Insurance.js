var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

var claim6 = new claim('Beuregard Enkelschmitt', 'Specialist', 2100);
var claim7 = new claim('Clinton Rogers', 'Primary Care', 425);
var claim8 = new claim('Donald Draper', 'Specialist', 45000);
var claim9 = new claim('Thomas Dolby', 'Optical', 67000);
var claim10 = new claim('Constance Cullpepper', 'Emergency', 890);

var initialList = [claim1, claim2, claim3, claim4, claim5]

initialList.push(claim6, claim7, claim8, claim9, claim10);


var totalPayedOut = 0;

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

for(var it = 0; it < initialList.length; it++){
  var totalRotalt = totalCovered(initialList[it]);
  totalPayedOut += totalRotalt;
  var currentName = getName(initialList[it]);
  console.log('Paid out $' + totalCovered(initialList[it]).toLocaleString() + ' for ' + currentName);
}
console.log('Total Payout ' + '$' + totalPayedOut.toLocaleString());

//function to determine percent covered
function totalPercent (claim){
    var percentCovered = 0.0;
    switch(claim.visitType){
      case 'Optical':
        percentCovered = 0.0;
        break;
      case 'Specialist':
        percentCovered = 0.10;
        break;
      case 'Primary Care':
        percentCovered = .50;
        break;
      case 'Emergency':
        percentCovered = 1;
        break;
      }
      return percentCovered;
    }
//function to determine amount covered
function totalCovered (claim){
  var totalOutput = totalPercent(claim);
  var individualPayout = Math.round(claim.visitCost * totalOutput);
  return individualPayout;
}
//additional function for patient name
function getName (claim){
	var name = claim.patientName;
	return name;
}
