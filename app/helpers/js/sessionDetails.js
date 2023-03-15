
var is_session_triggered = false;
var is_timer_expired = true;

var session_check_count = 0;



//moment.tz.setDefault(localStorage.getItem("defTimeZone"));
var timeoutmilliseconds = 3600;
var stimer;
var is_online = true;
var is_offline_alert_triggered = false;
var timer_connection_ID;
var timer_session;

if(navigator.connection){
  navigator.connection.onchange=function(){
      if(navigator.onLine)
      {
        if(!is_online){
          check_server_connection();
        }
      }
  }
}



    $(function(){
      //$('#most_fav_title').show();
      //$('#fav_title').hide();
        //document.getElementById("fav_title").innerHTML = "";
        if(localStorage.getItem("is_time_out1")=="yes"){
          localStorage.setItem("is_time_out1","no");
          logout_via_session();
        }
        localStorage.setItem("session_renew_click","no");
        recheck_connection_stat();
        startSessionTimeout('init');
      })



      function recheck_connection_stat(){
        if(timer_connection_ID==null){
          timer_connection_ID = setInterval(function() {
            check_server_connection();
          }, 60 * 1000);
        }
      }

      function startSessionTimeout(type){


        let reqParams = {  
          'data':"",    
          'portal':'common',
          'portalsubmit':'setSessionTimeout'
        };
        var data = ajaxDuty(reqParams, 'app/helpers/php/common.php', 'html', false);
        if (data) { 
          
          data = JSON.parse(data);
          

          if(data.status == "success"){
            timeoutmilliseconds = data.data;
            localStorage.setItem("timeoutmilliseconds",timeoutmilliseconds);
              if(type == "init"){
                initSessionTimeout();
              }
              session_check_count = session_check_count+1;
              if(session_check_count>=20){
                session_check_count = 0;
                checkSessionUser();
              }
          }else if(data.status == "never_expire"){
            //no timeout function
          }
          
        }
       
      }

      

    
    function checkSessionUser(){

      let reqParams = {  
        'data':"",    
        'portal':'common',
        'portalsubmit':'checkSessionUser'
      };
      var data = ajaxDuty(reqParams, 'app/helpers/php/common.php', 'html', false);
      if (data) { 
        
        if(!data){
          logout_via_session();
        }
        data = JSON.parse(data);
        
        
        if(!data){
          logout_via_session();
        }
        

      }

        
      }

      function logout_via_session(){
        localStorage.setItem("loginSessTime","true");
        logoutSurface();
      
      }


    function check_server_connection(){
      var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
        
        if(earl_dcc_dignin_info){


          let reqParams = {  
            'data':"",    
            'portal':'common',
            'portalsubmit':'checkSessionUser'
          };
          var data = ajaxDuty(reqParams, 'app/helpers/php/common.php', 'html', false);
          if (data) { 
            
            
            data = JSON.parse(data);
            
            
            if(data){
              is_online = true;
              if(is_offline_alert_triggered){
                is_offline_alert_triggered = false;
                Swal.close();
              }
            }else{
              if(is_online){
                if(!is_session_triggered){
                  is_online = false;
                  trigger_offline_alert();
                }else{
                  is_offline_alert_triggered = false;
                  init_swal_timeout();
                }
      
              }
            }
           

            
    
          }else{
            if(is_online){
              if(!is_session_triggered){
                is_online = false;
                trigger_offline_alert();
              }else{
                is_offline_alert_triggered = false;
                init_swal_timeout();
              }
    
            }
          }


          /*$.ajax({
            type: 'POST',
            url: 'app/helpers/php/common.php',
            timeout:30000,
            data: 'portalsubmit='+'checkSessionUser',
            dataType: 'json',
            cache: false,
            success: function (data) {
              
              is_online = true;
              if(is_offline_alert_triggered){
                is_offline_alert_triggered = false;
                Swal.close();
              }
            },error:function(response){
              if(is_online){
                if(!is_session_triggered){
                  is_online = false;
                  trigger_offline_alert();
                }else{
                  is_offline_alert_triggered = false;
                  init_swal_timeout();
                }
      
              }
            }
          });*/
        }else{
          
          if(is_online){
            clearInterval(timer_connection_ID);
            localStorage.clear();
            document.location.href='/';
          }
      
        }
      
      }



      function init_swal_timeout(){
       // $('#most_fav_title').show();
        //$('#fav_title').hide();
        //document.getElementById("fav_title").innerHTML = "";
        clearInterval(timer_connection_ID);
      
        swal_image_display_session_expire();
        call_swal_class_session();
      

        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger '
          },
          buttonsStyling: false
      })
    
      swalWithBootstrapButtons.fire({
          title: "Session Timeout",
          text: "You won't be able to revert this!",
          html:  ` <p>Your session has expired due to inactivity.\nTo continue, please login again.</p> </br> <span class="black-text swal2-text-highlight">  <p id="fav_title">  </p> </span>  ` ,
         // text: "Your session has expired due to inactivity.\nTo continue, please login again.",
         // html: `Your session has expired due to inactivity.\nTo continue, please login again.  <span class="black-text swal2-text-highlight" id="fav_title" ></span> </br> ` ,
          icon: 'warning',
          confirmButtonText: 'Proceed',
          showCancelButton: true
      }).then((result) => {
          if (result.isConfirmed) {
            document.getElementById("oneCtitle").innerHTML = "Detacloud";
            init_session_reset();
            logout_via_session();
            localStorage.setItem("loginSessTime","true");  
            location.reload();
          }else{
            document.getElementById("oneCtitle").innerHTML = "Detacloud";
          }
      })

        
        document.getElementById("session_sweet_button").innerHTML = "Login" ;
      }



      function init_session_reset(){
        is_session_triggered = false;

        //$('#most_fav_title').show();
        //$('#fav_title').hide();

        //document.getElementById("fav_title").innerHTML = "";
      
        if(is_timer_expired){
      
          init_swal_timeout();
          localStorage.clear();
          localStorage.setItem("is_time_out1","yes");
          document.getElementById("session_sweet_button").innerHTML = `<div class="session-loader session-loader-1"></div> Login` ;
          logout_via_session();
      
      
          setTimeout(function() {
            //document.location.href='/login';
            swal_image_display_session_notrechable();
            $('#session_sweet_title').addClass("mt-4");
            document.getElementById("session_sweet_title").innerHTML = "Server Unreachable" ;
            document.getElementById("session_sweet_text").innerHTML = "Sorry, we’re unable to reach the detacloud server right now. </br>Please check network connection and try refreshing this page." ;
            document.getElementById("session_sweet_button").innerHTML = "" ;
            document.getElementById("session_sweet_button").style.display="none";
          }, 10000);
          //window.location.href='/login';
        }else{
          localStorage.setItem("session_renew_click","yes");
          Swal.close();
          checkSessionUser();
          initSessionTimeout();
          recheck_connection_stat();
          clearInterval(timer_session);
        }

    }


    function initSessionTimeout(){
        stimer = new IdleTimer({
            timeout: timeoutmilliseconds,
            onTimeout: () => {
      
              if(is_offline_alert_triggered||!is_online){
                is_offline_alert_triggered = false;
                init_swal_timeout();
              }else{
                trigger_session_timmer();
              }
      
      
            }
          });
      
      }
      function trigger_session_timmer(){
      
        is_session_triggered = true;
      
      
        swal_image_display_session_timer();
        call_swal_class_session();
      
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger retrycancelSwtSessTimeout'
          },
          buttonsStyling: false
      })
    
      swalWithBootstrapButtons.fire({
          title: "Session Timeout",

          text: "You won't be able to revert this!",
          html:  `<p>Your session is about to expire and you will be automatically signed out. To continue your session, click below button</p>  </br>  <span class="black-text swal2-text-highlight"> <p id="fav_title">  </p> </span> ` ,

          //text: "Your session is about to expire and you will be automatically signed out. To continue your session, click below button",
          //html: ` : <span class="black-text swal2-text-highlight" id="fav_title" ></span> </br> ` ,
          icon: 'warning',
          confirmButtonText: 'Renew Session',
          showCancelButton: true
      }).then((result) => {
          if (result.isConfirmed) {
            document.getElementById("oneCtitle").innerHTML = "Detacloud";
            init_session_reset();
          }else{
            document.getElementById("oneCtitle").innerHTML = "Detacloud";
          }
      })


        
        timer_swal = createSessionTimer();
        localStorage.setItem("session_renew_click","no");
      
      }

      /* timer function */
function createSessionTimer() {
    is_session_triggered = true;
    is_timer_expired = false;
      return Timer(2 * 60, function () {
        if(is_session_triggered){
          swal_image_display_session_expire();
          document.getElementById("session_sweet_text").innerHTML = "Your session has expired due to inactivity.</br>To continue, please login again." ;
          document.getElementById("session_sweet_button").innerHTML = "Login" ;
  
          is_session_triggered = false;
          is_timer_expired = true;
          logout_via_session();
        }
  
      });
  }

        




      function trigger_offline_alert(){
        if(!is_online){
          is_offline_alert_triggered = true;
          swal_image_display_internet();
          call_swal_class_internet();
      

          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger '
            },
            buttonsStyling: false
        })
      
        swalWithBootstrapButtons.fire({
            title: "Server Unreachable",

            text: "You won't be able to revert this!",
            html:  ` <span class="black-text swal2-text-highlight"> <p> Sorry, we're unable to reach the detacloud server right now. please check your network connection </p> </br> <p id="fav_title">  </p> </span>  ` ,


            //text: "Sorry, we're unable to reach the detacloud server right now. please check your network connection",
            //html: ` : <span class="black-text swal2-text-highlight" id="fav_title" ></span> </br> ` ,
            icon: 'warning',
            //confirmButtonText: 'Proceed',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {
              document.getElementById("oneCtitle").innerHTML = "Detacloud";
             // trigger_offline_alert();
              logout_via_session();
              localStorage.setItem("loginSessTime","true");
              location.reload();
            }else{
              document.getElementById("oneCtitle").innerHTML = "Detacloud";
              logout_via_session();
              localStorage.setItem("loginSessTime","true");
              location.reload();
            }
        })

          
      
        }
      
      }











      function swal_image_display_session_expire(){
        document.getElementById("session_tick").style.display="block";
        document.getElementById("session_timer").style.display="none";
        document.getElementById("header_img_del").style.display="none";
        document.getElementById("header_img_warning").style.display="none";
        document.getElementById("wifi-loader").style.display="none";
        document.getElementById("header_img_not_rechable").style.display="none";
        document.getElementById("header_img_tick").style.display="none";
      
      }
      function swal_image_display_session_timer(){
        document.getElementById("session_tick").style.display="none";
        document.getElementById("session_timer").style.display="block";
        document.getElementById("header_img_del").style.display="none";
        document.getElementById("header_img_warning").style.display="none";
        document.getElementById("wifi-loader").style.display="none";
        document.getElementById("header_img_not_rechable").style.display="none";
        document.getElementById("header_img_tick").style.display="none";
      
      }
      function swal_image_display_session_notrechable(){
        document.getElementById("session_tick").style.display="none";
        document.getElementById("session_timer").style.display="none";
        document.getElementById("header_img_del").style.display="none";
        document.getElementById("header_img_warning").style.display="none";
        document.getElementById("wifi-loader").style.display="none";
        document.getElementById("header_img_not_rechable").style.display="block";
        document.getElementById("header_img_tick").style.display="none";
      
      }
      function swal_image_display_internet(){
        document.getElementById("session_tick").style.display="none";
        document.getElementById("session_timer").style.display="none";
        document.getElementById("header_img_del").style.display="none";
        document.getElementById("header_img_warning").style.display="none";
        document.getElementById("wifi-loader").style.display="flex";
        document.getElementById("header_img_not_rechable").style.display="none";
        document.getElementById("header_img_tick").style.display="none";
      
      }
      function swal_image_display_delete(){
        document.getElementById("session_tick").style.display="none";
        document.getElementById("session_timer").style.display="none";
        document.getElementById("header_img_del").style.display="block";
        document.getElementById("header_img_warning").style.display="none";
        document.getElementById("wifi-loader").style.display="none";
        document.getElementById("header_img_not_rechable").style.display="none";
        document.getElementById("header_img_tick").style.display="none";
      
      }
      function swal_image_display_warning(){
        document.getElementById("session_tick").style.display="none";
        document.getElementById("session_timer").style.display="none";
        document.getElementById("header_img_del").style.display="none";
        document.getElementById("header_img_warning").style.display="block";
        document.getElementById("wifi-loader").style.display="none";
        document.getElementById("header_img_not_rechable").style.display="none";
        document.getElementById("header_img_tick").style.display="none";
      
      }
      function swal_image_display_tick(){
        document.getElementById("session_tick").style.display="none";
        document.getElementById("session_timer").style.display="none";
        document.getElementById("header_img_del").style.display="none";
        document.getElementById("header_img_warning").style.display="none";
        document.getElementById("wifi-loader").style.display="none";
        document.getElementById("header_img_not_rechable").style.display="none";
        document.getElementById("header_img_tick").style.display="block";
      
      }
      function call_swal_class_session(){
      
        $('#header_sweet_alert_div').removeClass("internet-error");
        $('#session_sweet_title').removeClass("mt-4");
        $('#session_sweet_button').removeClass("profile-sweet-confirm");
        $('#session_sweet_button_cancel').removeClass("profile-sweet-cancel");
        $('#session_sweet_button').removeClass("btn-yes");
        $('#session_sweet_button_cancel').removeClass("btn-yes");
      
        $('#header_sweet_alert_div').addClass("session-alert");
        $('#session_sweet_button').addClass("btn-session");
      
      }
      function call_swal_class_internet(){
      
        $('#header_sweet_alert_div').removeClass("session-alert");
        $('#session_sweet_title').removeClass("mt-4");
        $('#session_sweet_button').removeClass("btn-yes");
        $('#session_sweet_button_cancel').removeClass("btn-yes");
        $('#session_sweet_button').removeClass("profile-sweet-confirm");
        $('#session_sweet_button_cancel').removeClass("profile-sweet-cancel");
      
        $('#header_sweet_alert_div').addClass("internet-error");
      
      }
      function call_swal_class_inner(){
        $('#header_sweet_alert_div').removeClass("session-alert");
        $('#header_sweet_alert_div').removeClass("internet-error");
        $('#session_sweet_title').removeClass("mt-4");
        $('#session_sweet_button').removeClass("btn-session");
        $('#session_sweet_button').removeClass("profile-sweet-confirm");
        $('#session_sweet_button_cancel').removeClass("profile-sweet-cancel");
      
        $('#session_sweet_button').addClass("btn-yes");
        $('#session_sweet_button_cancel').addClass("btn-yes");
      
      
      }



      var Timer = function(w, callback) {
        var current = w;
        var whole = w;
        var timer_running = true;
        var paused = false;
        timer_session = setInterval(function(){ intervalFunc() }, 1000);
        changeTimer(-1);
        displayTime();
    
        function displayTime() {
            var mins = Math.floor(current / 60);
            var secs = current % 60;
           // document.getElementById("timer-mins").innerHTML = mins ;
           // document.getElementById("timer-secs").innerHTML = (secs > 9 ? secs : "0" + secs);
            if(is_session_triggered){
              //$('#most_fav_title').hide();
              
              document.getElementById("oneCtitle").innerHTML = mins+":"+(secs > 9 ? secs : "0" + secs)+" - Session Timeout" ;
              document.getElementById("fav_title").innerHTML = mins+":"+(secs > 9 ? secs : "0" + secs)+" - Session Timeout" ;
              //$('#fav_title').show();
            }
            if(localStorage.getItem("session_renew_click")=="yes"){
                is_timer_expired = false;
                init_session_reset();
            }
        }
        function changeTimer(correction) {
            if (!correction)  correction = 0;
            var value = (current + correction) / whole ;
            if (value < 0)  value = 0;
            else if (value > 1) value = 1;
    
            var circle = document.getElementById("bar");
            var r = circle.getAttribute('r');
            circle.style.strokeDashoffset = (1 - value) * Math.PI*(r * 2);
        }
        function intervalFunc() {
          const expiredTime = parseInt(localStorage.getItem("session_expiredTime"), 10);
            if ( Date.now() >=  expiredTime) {
                stopTimer();
                trigger_session_expire();
            }
    
            if (paused) return;
            current--;
            displayTime();
            changeTimer(-1);
            if (current === 0) stopTimer();
        }
        function stopTimer() {
          document.getElementById("oneCtitle").innerHTML = "Detacloud";
            document.getElementById("fav_title").innerHTML = "";

            //$('#most_fav_title').show();
            //$('#fav_title').hide();
    
            clearInterval(timer_session);
            timer_running = false;
            current = 0;
            displayTime();
            current = whole;
            changeTimer();
            callback();
        }
        return {
            isRunning: function () { return timer_running; },
            isPaused: function () { return paused; },
            stop: function () { stopTimer(); },
            pause: function () {
                paused = true;
                changeTimer(0);
            },
            play: function () {
                paused = false;
                changeTimer(-1);
            }
        };
    };
    /*timer ends */