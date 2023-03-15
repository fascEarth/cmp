'use stict';

function Socket() {
    try {
      /*if (!defaultRoute) {
          throw 'error: routes param is mandatory';
      }
      this.constructor(defaultRoute);
      this.connect();*/
    } catch (e) {
        console.error(e);
    }
}

Socket.prototype = {
    socket: undefined,
    url: undefined,
    constructor: function () {
        //this.url = defaultRoute;
    },
    connect: function (defaultRoute) {
      //var res = false;
      this.socket = new WebSocket(defaultRoute);
      console.log(this.socket);
       this.socket.onopen = function(e) {
        console.log("[open] Connection established");
        return true;
        //res = true;
      };
      //return res;
    },
    send: function (message) {
      //var res = false;
      console.log(this.socket);
      if(message){
        console.log("Sending to server");
        this.socket.send(message);
        //res = true;
      }
      //return res;
    },
    receive: function () {
      this.socket.onmessage = function(event) {
        console.log(`[message] Data received from server: ${event.data}`);
        return event.data;
      };
    },
    close: function () {
      this.socket.onclose = function(event) {
        if (event.wasClean) {
          console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
          return event.code;
        } else {
          // e.g. server process killed or network down
          // event.code is usually 1006 in this case
          console.log('[close] Connection died');
          return 1006;
        }
      };
    },
    error: function () {
      this.socket.onerror = function(error) {
        console.log(`[error] ${error.message}`);
        return error.message;
      };
    }
}
