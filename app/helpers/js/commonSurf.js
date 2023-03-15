
function myTimerSesDate() {
  
    //var dcc_siginin_info = ((JSON.parse(localStorage.getItem("dcc_siginin_info")))?JSON.parse(localStorage.getItem("dcc_siginin_info")):[]);  
    if(localStorage.getItem("localTimeZone") != Intl.DateTimeFormat().resolvedOptions().timeZone){
      localStorage.setItem("localTimeZone",Intl.DateTimeFormat().resolvedOptions().timeZone);
        let reqParams = {
          'zone':Intl.DateTimeFormat().resolvedOptions().timeZone,             
        'portal':'minstanceDetail',
        'portalsubmit':'level_2'
      };
      //console.log(reqParams);
      var data = ajaxDuty(reqParams, 'app/helpers/php/common.php', 'html', false);
      if (data) {        
        //console.log(data);
        if(data == "success"){
          //success
        }
      }
    }else{
     // console.log("timeSame")
    }
    
  
  }
  
  function myStopFunctionSesDate() {
    clearInterval(myIntervalSesDate);
  }
  const myIntervalSesDate = setInterval(myTimerSesDate, 5000);
  