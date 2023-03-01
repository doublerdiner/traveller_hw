const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return startLocations = this.journeys.map(journey => journey.startLocation)
}; //MAP

Traveller.prototype.getJourneyEndLocations = function () {
  return endLocations = this.journeys.map(journey => journey.endLocation)
}; //MAP

Traveller.prototype.getJourneysByTransport = function (transport) {
  return journeyByTransport = this.journeys.filter(journey => (journey.transport === transport))
}; //FILTER

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return journeysOverDistance = this.journeys.filter(journey => (journey.distance >= minDistance))
}; //FILTER

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return totalDistanceTravelled = this.journeys.reduce((runningTotal, journey) => (runningTotal += journey.distance), 0)
}; //REDUCE

Traveller.prototype.getUniqueModesOfTransport = function () {
  const mapTransport = this.journeys.map(journey => journey.transport);
  return Array.from(new Set(mapTransport))
}; //FILTER


module.exports = Traveller;
