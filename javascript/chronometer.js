class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=null;
  }

  start(callback) {
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

  getMinutes() {
    const minutes=Math.floor((this.currentTime)/60);
    return minutes;
  }

  getSeconds() {
    const seconds=this.currentTime%60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    if(value<10){
      return (`0${value}`)
    }else{
      return value;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime=0;
  }

  split() {
    return (`"${this.getMinutes()}:${this.getSeconds()}"`);
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
