"use strict";
let speed = null;
let speed2 = null;
let ride = {
    // Speed is either what user gave or use 30 as default value1
    // speed: speed || 30 // in old JS: speed or 30 meaning trurth=> value or for falsy use 30
    // Falsy values in pain JS: undefined, null, '', false, 0
    // but what if 0 is a valid value for speed?
    speed: speed !== null ? speed : 30, // correctly done using js
    // Short alternative in TS? us nullish coalescing
    // What? The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. It’s commonly used to provide default values for variables.
    speed2: speed2 !== null && speed2 !== void 0 ? speed2 : 30
};
