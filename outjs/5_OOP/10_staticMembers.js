"use strict";
class Ride {
    constructor() {
        this.activeRides = 0;
    }
    start() { this.activeRides++; }
    stop() { this.activeRides--; }
}
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(ride1.activeRides); //O/P: 1
console.log(ride2.activeRides); //O/P: 1
// Here, we are dealing with two different object where each object is in its separate space in memory!
// So, each obj is independently tracking activeRides but not together as we want! (a single or global place to keep track of active rides)
// sol? use static
class Rides {
    start() { Rides._activeRides++; }
    stop() { Rides._activeRides--; }
    static get activeRides() { return Rides._activeRides; }
}
Rides._activeRides = 0; // changes
let rideup1 = new Rides();
rideup1.start();
let rideup2 = new Rides();
rideup2.start();
console.log(Rides.activeRides); //O/P: 1
console.log(Rides.activeRides); //O/P: 1
