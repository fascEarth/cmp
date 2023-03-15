class IdleTimer {
    constructor({ timeout, onTimeout }) {
      this.timeout = parseInt(localStorage.getItem("timeoutmilliseconds"));
      this.onTimeout = onTimeout;
  
      this.eventHandler = this.updateExpiredTime.bind(this);
      this.tracker();
      this.startInterval();
    }
  
    startInterval() {
      this.updateExpiredTime();
  
     
      this.interval = setInterval(() => {
        const expiredTime = parseInt(localStorage.getItem("_expiredTime"), 10);
        if (expiredTime < Date.now()) {
          if (this.onTimeout) {
            localStorage.setItem("session_expiredTime", Date.now() + 180000);
            this.onTimeout();
            this.cleanUp();
          }
        }
      }, 1000);
    }
  
    updateExpiredTime() {
      
      if (this.timeoutTracker) {
        clearTimeout(this.timeoutTracker);
      }
      this.withoutIntervalcleanUp();
      this.tracker();
      this.timeoutTracker = setTimeout(() => {
        if(is_online){
          localStorage.setItem("_expiredTime", Date.now() + this.timeout * 1000);
          startSessionTimeout("next");
        }
  
      }, 300);
    }
  
    tracker() {
      setTimeout(() => {
      window.addEventListener("click", this.eventHandler);
      window.addEventListener("keypress", this.eventHandler);
      window.addEventListener("wheel", this.eventHandler);
      window.addEventListener("mousewheel", this.eventHandler);
  
      window.addEventListener("mousemove", this.eventHandler);
      window.addEventListener("scroll", this.eventHandler);
      window.addEventListener("keydown", this.eventHandler);

     
      }, 30000);
    }
    withoutIntervalcleanUp(){
      window.removeEventListener("click", this.eventHandler);
      window.removeEventListener("keypress", this.eventHandler);
      window.removeEventListener("wheel", this.eventHandler);
      window.removeEventListener("mousewheel", this.eventHandler);
  
  
      window.removeEventListener("mousemove", this.eventHandler);
      window.removeEventListener("scroll", this.eventHandler);
      window.removeEventListener("keydown", this.eventHandler);
    }
    cleanUp() {
     // setTimeout(() => {
      clearInterval(this.interval);
      window.removeEventListener("click", this.eventHandler);
      window.removeEventListener("keypress", this.eventHandler);
      window.removeEventListener("wheel", this.eventHandler);
      window.removeEventListener("mousewheel", this.eventHandler);
  
  
      window.removeEventListener("mousemove", this.eventHandler);
      window.removeEventListener("scroll", this.eventHandler);
      window.removeEventListener("keydown", this.eventHandler);
    //}, 30000);
    }
  }