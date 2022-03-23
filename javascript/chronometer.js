class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
  }

  /**
   * keeps track of time, 
   * by running a function in a 1 second interval, 
   * which will increment the amount of seconds stored 
   * in the property `currentTime` by `1`.
   * @param {*} callback 
   */
  //setInterval()
  start(callback){
    if(callback){
      this.intervalId=setInterval(()=>{
        callback();
        this.currentTime++;
      }, 1000)
    }else{
      this.intervalId=setInterval(()=>{
        this.currentTime++;
      }, 1000)
    }  
  }

  /**
   * stores the number of seconds that have passed 
   * on the `currentTime` property
   * @returns _number_ of minutes that have passed as an int
   */
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  /**
   * @returns number of secs that have passed after start of the 
   * current min
   */
  getSeconds() {
    return Math.floor(this.currentTime-(this.getMinutes(this.currentTime)*60));
  }

  /**
   * takes a number, and returns a string where the number received 
   * as an argument has been padded with 0s 
   * to ensure the value is at least 2 characters long.
   * @param {*} value 
   * @return value string
   */
  computeTwoDigitNumber(value) {
    if(value<10){
      return (`0${value}`)
    }else{
      return value.toString();
    }
  }

  /**
   * should clear the interval 
   * with the id that had been stored in the `intervalId`
   */
  //clearInterval()
  stop() {
    clearInterval(this.intervalId);
  }

  /**
   * resets chronometer
   * setting currentTime to 0
   */
  reset() {
    this.currentTime=0;
  }

  /**
   * Extracts a formatted timestamp for the time elapsed
   * no @args
   * @return time since the start formatted as "_mm:ss_"
   */
  //computeTwoDigitNumber
  split() {
    return (`${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`);
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
