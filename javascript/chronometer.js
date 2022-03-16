class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime=0;
    this.intervalId=null;
  }

  start(callback) {
    // ... your code goes here
    /* The Chronometer class needs to have a start method. 
    When called, start will start keeping track of time, 
    by running a function in a 1 second interval, 
    which will increment the amount of seconds stored in the property currentTime by 1. */

    //RE READ INSTRUCTIONS


    //setInterval method
    this.currentTime=0;
    this.currentTime++;
    setInterval(function, 1000);  //EDIT FUNCTION
    return intervalId;
  }

  getMinutes() {
    // ... your code goes here
    /* We're storing the number of seconds that have passed on the currentTime property. 
    However, we might want to find out how many minutes have passed.

    The getMinutes method should take no arguments, 
    and it should return the number of minutes that have passed as an integer. */
    const numberOfMinutes=0;

    return this.numberOfMinutes;
  }

  getSeconds() {
    // ... your code goes here
    /* The getSeconds method 
    should return the number of seconds that have passed 
    after the start of the current minute.

    For example, if the property currentTime holds 75, 
    getSeconds should return 15. If currentTime holds 210, 
    getSeconds should return 30, and so on. */

    const numberOfSeconds=0;
    
    return numberOfSeconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    /* The computeTwoDigitNumber method should take a number, 
    and return a string where the number received as an argument 
    has been padded with 0s to ensure the value is at least 2 characters long */

    const twoDigitNumberString=" ";

    return twoDigitNumberString;
  }

  stop() {
    // ... your code goes here
    /* When invoked, the stop method 
    should clear the interval with the id that had been stored 
    in the intervalId property. It's as simple as that. */

  }

  reset() {
    // ... your code goes here
    /* The reset() will reset our chronometer. 
    Since our code is super clean, we just need to set our currentTime property back to 0 */
  }

  split() {
    // ... your code goes here
    /* The split method should expect no arguments, 
    and return a string where the time since the start 
    is formatted as "mm:ss". 
    Internally, the split method can make usage of previously declared methods 
    such as getMinutes, getSeconds, and computeTwoDigitNumber. */
    const formattedTimeString=" ";

    return formattedTimeString;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}