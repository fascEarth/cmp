var cardIdDetailsid = "";
var exister = false;
var selectedVMName = null;

//var myIntervalVMLTStorages;

var indexMsgsminsD;
$(document).ready(function() {
    var langC = localStorage.getItem("langC");
    loadJSONgeneral(function(response) {  
        indexMsgsminsD = JSON.parse(response);   
        setTimeout(function() {   
        callminsDFiles();   
        },100);
      },"app/views/html/surface/cloudservices/elasticInstance/minstance/detail/lang/"+langC+".json");

  

})
function callminsDFiles(){

  listGraphs = [
    {
      "id":"getusageavgcpu",
      "title":indexMsgsminsD.minsD_gen_usagegraph_tab_graph_label_0
    },
    {
      "id":"getusagemaxcpu",
      "title":indexMsgsminsD.minsD_gen_usagegraph_tab_graph_label_1
    },
    {
      "id":"getusageavgcpumhz",
      "title":indexMsgsminsD.minsD_gen_usagegraph_tab_graph_label_2
    },
    {
      "id":"getusageavgmemory",
      "title":indexMsgsminsD.minsD_gen_usagegraph_tab_graph_label_3
    },
    {
      "id":"getusageavgreadspeed",
      "title":indexMsgsminsD.minsD_gen_usagegraph_tab_graph_label_4
    },
    {
      "id":"getusageavgwritespeed",
      "title":indexMsgsminsD.minsD_gen_usagegraph_tab_graph_label_5
    }
  ];


  var pst  = `<ul class="tabs ">
  <li class="tab"><a onClick="callOverviewTab()" class="active" href="#Overview">`+indexMsgsminsD.minsD_gen_main_tab_title_0+`</a></li>
  <li class="tab "><a onClick="callUsageGraphs()"  href="#Graphs">`+indexMsgsminsD.minsD_gen_main_tab_title_1+`</a></li>
  <li class="tab "><a onClick="callMIDStorage('direct')"  href="#StorageMinstanceDetails">`+indexMsgsminsD.minsD_gen_main_tab_title_2+`</a></li>
  <!--<li class="tab"><a href="#Network">Network</a></li>-->
  <li class="tab"><a onClick="callCSnapshots('direct')"  href="#Snapshots">`+indexMsgsminsD.minsD_gen_main_tab_title_3+`</a></li>
  <!--<li class="tab"><a href="#Backups">Backups</a></li>
  <li class="tab"><a href="#Tags">Tags</a></li>
  <li class="tab"><a href="#Events">Events</a></li>-->
  <li class="tab disabled"><a href="#Settings">`+indexMsgsminsD.minsD_gen_main_tab_title_4+`</a></li>
</ul>`;
setTimeout(function() {
 $('#surfAllTabs').html(pst); 
$('.tabs').tabs();
},500);
  
 

    let urlString = window.location.href;
    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    
    for (let pair of queryString.entries()) {
        
        if(pair[0] == "id"){
          exister = true;
          cardIdDetailsid = pair[1]; 
        } 
         
      }

      

      var mainPage = "instance";
        var thisPage = "minstance";

        
        $('#'+mainPage+"bodyMain").css("display","block");
        $('#'+mainPage+"bodyMain").addClass("active");

        $('.csidenavtitles').removeClass("active");
        $('.csidenavtitles a').removeClass("active");
        $('#'+mainPage+"Main").addClass("active");
        
        
        $('#'+mainPage+thisPage+"Main").addClass("active");
        $('#'+mainPage+thisPage+"Main a").addClass("active");




    const progress = document.querySelector('.progress-done');
    
    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.style.opacity = 1;
     


    var pselect = "";
    var vmAllDetails = ((JSON.parse(localStorage.getItem("vmAllDetails")))?JSON.parse(localStorage.getItem("vmAllDetails")):[]);
    
    pselect += `<select id="surf_minsdetail_topc_listip" style="display:none;"  onChange="surfminsdetailtopclistip()" >`;
    if(vmAllDetails){
      pselect += `<option value="" disabled >`+indexMsgsminsD.minsD_selany_btn+`</option>`;
        vmAllDetails.map(function(elem){
          var selectedtopc = "";
          if(cardIdDetailsid == elem.tenant_vm_id){
            selectedVMName = elem.host_name;
            selectedtopc = "selected";
            partiSpeci = elem.specification;
          }
            pselect += `<option `+selectedtopc+` value="`+elem.tenant_vm_id+`" >`+elem.host_name+`</option>`;
        });
        
        
    }
    pselect += `</select>`;
    
    setTimeout(function() {

      $('#selectbuttonsurfminsdetailoverall').html(pselect);
      $('#backbuttonsurfminsdetailskel').hide();
      $('#backbuttonsurfminsdetailreal').show();
      
      
    $('#surf_minsdetail_topc_listip').formSelect();
    $('#surfMinstGraphs').formSelect();
    $(".dropdown-trigger").dropdown();
    },500); 
    


    if(exister){

      var vmAllDetails = ((JSON.parse(localStorage.getItem("vmAllDetails")))?JSON.parse(localStorage.getItem("vmAllDetails")):false);
    
    if(vmAllDetails){
      var comero = false;
      vmAllDetails.map(function(elem){
        
        if(cardIdDetailsid == elem.tenant_vm_id){
          comero = true;
        }
         
      });
      
      if(comero){
        
        captureTopCard();
      callOverviewTab(); 
      }else{
        location.href = "#minstance";
      }
    }else{
      location.href = "#minstance";
    }  
      
    }else{
      location.href = "#minstance";
    }

     
    }



    var connectionRetry = true;
    var wmks = null;

    var connectionTicket = null;
    
    
    var wmksHeightPercent = 0.6;
    
    function updateSize() {
      var winW = window.innerWidth, winH = window.innerHeight;
      var floatW = 700;
    
    }
    
    
    function enterFullScreen() {
      if (!wmks) return;
      wmks.enterFullScreen();
    }
    
    function sendCAD() {
      if (!wmks) return;
      wmks.sendCAD();
      
      registerLog("NOT-KNOWN","send Ctrl + Alt + Delete")      
    }

    $(window).on('resize', function(e) {
      updateSize();
      updateScreen();
    });
    
    function updateScreen() {
     if (!wmks) return;
     wmks.updateScreen();
     registerLog("NOT-KNOWN","updateScreen!!")      
    }
    
    
    function createWMKS(type) {
      
      
      disconnect();
     destroy();
      updateSize();

     var rescale = true;
     var changeResolution = true;
     var position = 0;
    
     var options = {
      
     retryConnectionInterval:2000,
       rescale: rescale,
       changeResolution: changeResolution,
       position: WMKS.CONST.Position.LEFT_TOP,
       useVNCHandshake: true
     };
     
     
     wmks = WMKS.createWMKS("wmksContainer", options);
    
     
     registerLog("SUCCESS","createWMKS successfully!")
     registerEvents(type);
     connectWMKS(type);
     
    }
    function destroy() {
     
      try {
        wmks.destroy();
      } catch (err) {
        
        registerLog("FAILED",'destroy call failed: ' + err.description)
        
        return;
      }
      registerLog("SUCCESS",'destroy call returned successfully')

     

      
    }
    
    function connectWMKS(type) {
     if (!wmks) {
       registerLog("NOT-KNOWN",'Please createWMKS first!')               
       return;
     }
     var host = "detacloud-ruh.detasad.com";
     var port = "8443";
     var ticket = 'cst-y2xZob6uwg9PcePjmPJZbuTrirg9Bnolyil4UeYRhP3S+ltk7mArGwpCxP5nS0E6j49p/4NzwOmCLGDweiMshw5gzIfMbPpMt4ypzOquNaeZSmkCid3pvKAbsmpuK1y7t/Lpv06qwWOsOQr/XhgxSI2CB/FCsO3mxyDiqQjcNwL4oqGuL9CJqyl4wvme/Z7Mr9eAUYjf50GIjtmdtGbNTc+S18cRm2EQZS4D/E9qXW6HS1cX99Zh5Y6XNk2wpZweqPvGnVY6paPN3PkolJkvdXxMiqkopxXEDSyHhj5e0N2onxqMxRFzQRKD1oS5NPic-uxOM5J+liAfTgLb8qTv0e/2+Hxe5z/aRs5+i9g==--tp-2A:9E:1E:77:B8:53:24:7A:6F:7A:88:AE:16:5D:FD:66:F3:49:00:E2--';
     var url = "ws://" + host + ":" + port;
     if (connectionTicket) {
        var url = "wss://" + host + ":" + port + "/443;" + connectionTicket ;
     
     }
     
     try {
       wmks.connect(url);
       

       

       setTimeout(function() {
        
        if(wmks.getConnectionState() != "connected"){
       
  
       }
       
      },10000);

      
       
       registerLog("SUCCESS",'connect succeeded');
       
        
        

       
       
       
     } catch (err) {
       registerLog("ERROR",'connect failed')        
     }
    }
    
    function registerLog(status,message){
     var wmksArr = ((JSON.parse(localStorage.getItem("wmksArr"+cardIdDetailsid)))?JSON.parse(localStorage.getItem("wmksArr"+cardIdDetailsid)):[]);
    
     wmksArr.push(
       {
         status:message
       }
       );
    
       localStorage.setItem("wmksArr"+cardIdDetailsid,JSON.stringify(wmksArr));
    }
    
    function onConnectionStateChangeHandler(event, data) {
      
      if(data.state == "connected"){
        $('.loadingVMConsole').hide();
        connectionRetry = false;
      }
     registerLog("NOT-KNOWN",'onConnectionStateChange - connectionState: ' + data.state);      
     if (data.state == WMKS.CONST.ConnectionState.DISCONNECTED) {
       registerLog("NOT-KNOWN","Can't connect to VCD, reason is " + data.reason + ", code is" + data.code);
       if(wmks.getConnectionState() != "connected"){
        disconnect();
        destroy();
        openConsoleVM();
        }
      
       
     }
    }
    
    function onScreenSizeChangeHandler(event, data) {
     registerLog("NOT-KNOWN",'onScreenSizeChange - width: ' + data.width + ', height: ' + data.height)      
    }
    
    function onFullscreenChangeHandler(event, data) {
      if(data.isFullScreen){
        $('#mainCanvas').css("margin","unset");
      }else{
        $('#mainCanvas').css("margin","auto");
      }
     registerLog("NOT-KNOWN",'onFullscreenChange - fullscreen: ' + data.isFullScreen)            
    }
    

    function disconnect() {
      try {
        wmks.disconnect();
        registerLog("NOT-KNOWN",'disconnect succeeded')            
        
      } catch (err) {
        registerLog("NOT-KNOWN",'disconnect failed: ' + err)            

      }
    }


    function onErrorHandler(event, data) {
     registerLog("NOT-KNOWN",'onErrorHandler - error type ' + data.errorType) 
     disconnect();
     destroy();
     
    }
    
    function onLedChangeHandler(event, data) {
     registerLog("NOT-KNOWN",'onLEDChange , key is ' + data)                        
    }
    
    function onHeartbeatHandler(event, data) {
     registerLog("NOT-KNOWN",'on Heartbeat Event, interval is ' + data)                              
    }
    
    function registerEvents(type) {
     
      


     if (!wmks) return;
     var constEvent = WMKS.CONST.Events;
     wmks.register(constEvent.CONNECTION_STATE_CHANGE, onConnectionStateChangeHandler)
       .register(constEvent.REMOTE_SCREEN_SIZE_CHANGE, onScreenSizeChangeHandler)
       .register(constEvent.FULL_SCREEN_CHANGE, onFullscreenChangeHandler)
       .register(constEvent.ERROR, onErrorHandler)
       .register(constEvent.KEYBOARD_LEDS_CHANGE, onLedChangeHandler)
       .register(constEvent.HEARTBEAT, onHeartbeatHandler);

      

    }
    
    function collectandcall(type){

      
      var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
      
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 

      let reqParams = {
        'from':'minstancedetail',
        'secudeco':$('#establish_minstancedetail_status').val(),
        'tenantId':dcc_siginin_info.tenant_id,
        'tenantvmid':cardIdDetailsid,          
       'portal':'minstanceDetail',
       'portalsubmit':'level_7'
     };
     
     var data = ajaxDuty(reqParams, 'app/views/html/surface/cloudservices/elasticInstance/minstance/detail/index.php', 'html', false);
     if (data) {        
       
       data = JSON.parse(data);
       
       data = data.data;
       
       if(data.status_code == 200){
        connectionTicket = data.web_session;
        setTimeout(function() {
        createWMKS(type);
        },500);
       }
       
     }
      
     
      
    }
    function openConsoleVM(){
      if(connectionRetry){
      
      $('#titleVMConsole').html(selectedVMName);
      
     collectandcall("init");
      }
    }
    

function surfminsdetailtopclistip(){
  var surf_minsdetail_topc_listip = $('#surf_minsdetail_topc_listip').val();
  location.href = "#minstancedetail?id="+surf_minsdetail_topc_listip;

}
    function captureTopCard(){
        let reqParams = {
          'from':'minstancedetail',
        'secudeco':$('#establish_minstancedetail_status').val(),
            'tenantvmid':cardIdDetailsid,          
           'portal':'minstanceDetail',
           'portalsubmit':'level_1'
         };
         
         var data = ajaxDuty(reqParams, 'app/views/html/surface/cloudservices/elasticInstance/minstance/detail/index.php', 'html', false);
         if (data) {        
           
           data = JSON.parse(data);
           
           data = JSON.parse(data.data);
           
            plotTopCard(data);
         }
    }

    function plotTopCard(data){
      
      
      

      data = data.message;
        
        
        var storedStateVMListParticular = ((JSON.parse(localStorage.getItem("storedStateVMListParticular"+cardIdDetailsid))) ? JSON.parse(localStorage.getItem("storedStateVMListParticular"+cardIdDetailsid)) : {});  
        
      if(Object.keys(storedStateVMListParticular).length >0){
        
        var ptenantvmid = parseFloat(storedStateVMListParticular.tenantvmid);
          var ppowerstate = parseFloat(storedStateVMListParticular.prestate);
          
              var mptenantvmid = parseFloat(data.tenantVmId);
              var mppowerstate = parseFloat(data.powerStatus);
              if ((ptenantvmid == mptenantvmid)) {              
                  if ((ppowerstate == mppowerstate)) {                  
                      data.pendingLoader = false;
                      storedStateVMListParticular = {};
    
                  } else {                  
                      data.pendingLoader = true;
                  }
              }
    
          
            
      localStorage.setItem("storedStateVMListParticular"+cardIdDetailsid, JSON.stringify(storedStateVMListParticular));
      }

      
      
        
          

      
              
              
      
        var postStates = {
          "poweron": `<li><a onClick="changeVMstatus('2','power_on','Power On Server ?','Elastic Instance','`+data.hostname+`','Are you sure you want to Power On server?','`+indexMsgsminsD.minsD_gen_vm_action_0+`')" href="javascript:void(0);">`+indexMsgsminsD.minsD_gen_vm_action_0+`</a></li>`,
          "poweroff": `<li><a onClick="changeVMstatus('1','power_off','Power Off Server ?','Elastic Instance','`+data.hostname+`','Are you sure you want to Power Off server?','`+indexMsgsminsD.minsD_gen_vm_action_1+`')" href="javascript:void(0);"> `+indexMsgsminsD.minsD_gen_vm_action_1+`</a></li>`,
          "shutdown": `<li><a onClick="changeVMstatus('3','shutdown','Shutdown Server ?','Elastic Instance','`+data.hostname+`','Are you sure you want to Shutdown server?','`+indexMsgsminsD.minsD_gen_vm_action_2+`')" href="javascript:void(0);"> `+indexMsgsminsD.minsD_gen_vm_action_2+`</a></li>`,
          "reset": `<li><a onClick="changeVMstatus('4','reset','Reset Server ?','Elastic Instance','`+data.hostname+`','Are you sure you want to Reset server?','`+indexMsgsminsD.minsD_gen_vm_action_3+`')" href="javascript:void(0);"> `+indexMsgsminsD.minsD_gen_vm_action_3+`</a></li>`,
          "suspend": `<li><a onClick="changeVMstatus('5','suspend','Suspend Server ?','Elastic Instance','`+data.hostname+`','Are you sure you want to Suspend server?','`+indexMsgsminsD.minsD_gen_vm_action_4+`')" href="javascript:void(0);">`+indexMsgsminsD.minsD_gen_vm_action_4+`</a></li>`,
          "deletedevice": ` <li class="divider" tabindex="-1"></li>
          <li><a onClick="changeVMstatus('6','delete','Delete Server ?','Elastic Instance','`+data.hostname+`','Are you sure you want to Delete server?','`+indexMsgsminsD.minsD_gen_vm_action_5+`')" href="javascript:void(0);" class="red-text">`+indexMsgsminsD.minsD_gen_vm_action_5+`</a></li>`
        };


        

        
        var finalPostStates = "";
        var pstatus = `<h6 class="media-heading mt-0 orange-text fs-12"><span class="bullet orange"></span> `+indexMsgsminsD.minsD_tbl_vm_status_0+`</h6>`;
        if(data.powerStatus == 1){
          delete postStates.poweroff;
          delete postStates.shutdown;
          delete postStates.reset;
          delete postStates.suspend;
          pstatus = `<h6 class="media-heading mt-0 red-text fs-12"><span class="bullet red"></span> `+indexMsgsminsD.minsD_tbl_vm_status_1+`</h6>`;
        }else if(data.powerStatus == 2){
          delete postStates.poweron;
          delete postStates.deletedevice;
          pstatus = `<h6 class="media-heading mt-0 green-text fs-12"><span class="bullet green"></span> `+indexMsgsminsD.minsD_tbl_vm_status_2+`</h6>`;
        }else if(data.powerStatus == 3){
          delete postStates.poweroff;
          delete postStates.reset;
          delete postStates.shutdown;        
          delete postStates.suspend;        
          delete postStates.deletedevice;
          pstatus = `<h6 class="media-heading mt-0 red-text fs-12"><span class="bullet orange"></span> `+indexMsgsminsD.minsD_tbl_vm_status_3+`</h6>`;
        }else if(data.powerStatus == 4){
          delete postStates.shutdown;
          delete postStates.reset;
          delete postStates.suspend;
          delete postStates.poweroff;
          delete postStates.deletedevice;
          pstatus = `<h6 class="media-heading mt-0 orange-text fs-12"><span class="bullet orange"></span>`+indexMsgsminsD.minsD_tbl_vm_status_4+`</h6>`;
        }else if(data.powerStatus == 5){
          delete postStates.suspend;
          delete postStates.shutdown;
          delete postStates.reset;
          delete postStates.suspend;          
          delete postStates.deletedevice;
          pstatus = `<h6 class="media-heading mt-0 grey-text fs-12"><span class="bullet orange"></span> `+indexMsgsminsD.minsD_tbl_vm_status_5+`</h6>`;

        }



        

        if (data.pendingLoader || data.currentstate == "7001") {
          pstatus = `<h6 class="media-heading mt-0 grey-text fs-12"><span class="bullet blue"></span> `+data.currentmsg+` Please Wait...</h6>`;
          }

          
          if (data.powerStatus == 0) {

            if(data.currentstate == 7002 || data.currentstate == 7008 ){
  
  
              data.currentmsg = "Provisioning Failed";
              if(data.currentstate == 7002 ){
                  data.currentmsg = "Provisioning Failed";
              }else if(data.currentstate == 7008 ){  
                  data.currentmsg = "Provisioning Failed";
              }
  
  
              
              
              pstatus = `<h6 class="media-heading mt-0 grey-text fs-12"><span class="bullet orange"></span> `+data.currentmsg+` </h6>`;
           }else {
              
  if(data.currentmsg == "null" || data.currentmsg == "" && data.currentmsg == null || data.currentmsg == undefined){
    data.currentmsg = "";
  }
  data.currentmsg = "Provisioning";
  if(data.currentstate == 7001 ){
      data.currentmsg = "Provisioning Started";
  }else if(data.currentstate == 7005 ){  
      data.currentmsg = "Provisioning: Power On";
  }else if(data.currentstate == 7006 ){  
      data.currentmsg = "Provisioning: Adding Disk";
  }else if(data.currentstate == 7007 ){  
      data.currentmsg = "Provisioning: Mapping Private IP";                         
  }else{
      data.currentmsg = "Provisioning";
  }   
  
  pstatus = `<h6 class="media-heading mt-0 grey-text fs-12"><span class="bullet orange"></span> `+data.currentmsg+` </h6>`;
          }
  
            
  
          }



          

        Object.values(postStates).map(function(elem){        
          finalPostStates += elem;
        });
        


        var ttags = data.tags.split(",");
        var kpm = "";
        if(ttags.length >0){
          
          ttags.map(function(elem){
            kpm += `<div class="chip gradient-45deg-purple-deep-orange white-text">`+elem+`</div></br>`;
          });          
        }

        var specification = data.specification;
        var kspecification = specification.split("/");
        
        
        data.ipAddress = ((data.ipAddress == "None")?"-":data.ipAddress);
        
        var ctime = data.createDatetime.split(".");
        data.createDatetime = ctime[0];

        var kcpu = kspecification[0].split("vCPU");
        kspecification[0] = kcpu[0];

        var kcpu1 = kspecification[1].split("GB");
        kspecification[1] = kcpu1[0];

        var kcpu2 = kspecification[2].split("GB");
        var kcpum2 = kcpu2[0].split("G");
        kspecification[2] = kcpum2[0];

        var ipLists = "";

        if(data.privateIp){
          ipLists +=  `<p><span class="gray-text">`+indexMsgsminsD.minsD_topc_label_13+` :</span> `+data.privateIp+`</p>`;
        
        }

        if(data.publicIp){
          ipLists +=  `<p><span class="gray-text">`+indexMsgsminsD.minsD_topc_label_14+` &ensp;:</span> `+data.publicIp+`</p>`;
        }
        
        

        var cVmactions = `<img class="action-icon" src="app/views/html/surface/cloudservices/elasticInstance/minstance/img/detail/action.png" width="25" height="25" alt="action" />
        <a class='dropdown-trigger header-dropdown' href='#' data-target='dropdown`+data.tenantVmId+`'>`+indexMsgsminsD.minsD_topc_label_12+` <i class="material-icons dp48" style="top: 7px;
          position: relative;">keyboard_arrow_down</i></a>
        <!-- Dropdown Structure -->

        <ul id='dropdown`+data.tenantVmId+`' class='dropdown-content'>
          `+finalPostStates+`
         
        </ul>`;

        if (data.powerStatus == 0 || data.pendingLoader || data.currentstate == "7001") {
          
          cVmactions = `<img style="cursor:not-allowed;"  class="action-icon" src="app/views/html/surface/cloudservices/elasticInstance/minstance/img/detail/action.png" width="25" height="25" alt="action" />
        <a style="cursor:not-allowed;" class='dropdown-trigger header-dropdown' >`+indexMsgsminsD.minsD_topc_label_12+` <i class="material-icons dp48" style="cursor:not-allowed; top: 7px;
          position: relative;">keyboard_arrow_down</i></a>`;

          }


        
        var p = `<div class="row border-bottom-1" style="padding-bottom: 4px;">
        <div class="col col s12 m6 l7">
          <div class="display-flex media media-sm">
            <img src="app/views/assets/img/os-image/`+data.osLogoName+`" alt="`+data.osLogoName+`" class="mr-1" height="30" width="30">
            <div class="media-body">
              <h6 class="media-heading blue-text" style="line-height: 14px;" id="surf_minsdetail_topc_hostname">`+data.hostname+`</h6>
            </div>
          </div>
        </div>
        <div class="col s12 m6 l5 quick-action-btns display-flex justify-content-end align-items-center">
          <div class="media-body mr-4" id="surf_minsdetail_topc_powerStatus">
            `+pstatus+`
          </div>
          <img src="app/views/html/surface/cloudservices/elasticInstance/minstance/img/detail/riyadh.png" alt="ubuntu" class="mr-1" height="35" width="35">
          <div class="media-body mr-4">
            <h6 class="media-heading mt-7 mb-1 fs-12" id="surf_minsdetail_topc_dataCenter">`+data.dataCenter+`</h6>
          </div>
          <img src="app/views/html/surface/cloudservices/elasticInstance/minstance/img/detail/duplicated.png" alt="ubuntu" class="mr-1" height="25" width="25">
          <div class="media-body">
            <h6 style="cursor:pointer;" class="media-heading mt-7 blue-text fs-12 modal-trigger" href="#consoleVMmodal" onClick="openConsoleVM()" >`+indexMsgsminsD.minsD_topc_label_0+`</h6>
          </div>
        </div>
      </div>
      <div class="row mt-2 border-bottom-1">
        <div class="col s12 m6 l4">
          <table>
            <tbody class="header-card-table">
            <tr>
              <th>`+indexMsgsminsD.minsD_topc_label_1+`</th>
              <td class="font-weight-extrabold" id="surf_minsdetail_topc_createDatetime">`+data.createDatetime+`</td>
            </tr>
            <tr>
              <th>`+indexMsgsminsD.minsD_topc_label_2+`</th>
              <td class="font-weight-extrabold" id="surf_minsdetail_topc_userName">`+data.userName+`</td>
            </tr>
            <tr>
              <th>`+indexMsgsminsD.minsD_topc_label_3+`</th>
              <td class="font-weight-extrabold" id="surf_minsdetail_topc_teams">`+data.teams+`</td>
            </tr>
            <tr>
              <th>`+indexMsgsminsD.minsD_topc_label_4+`</th>
              <td class="font-weight-extrabold" id="surf_minsdetail_topc_osDetails">`+data.osDetails+`</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col s12 m6 l3">
          <h4 class="card-title gray-text fs-15">`+indexMsgsminsD.minsD_topc_label_5+`</h4>
          <div class="tag-h " id="surf_minsdetail_topc_tags">
           `+kpm+`
          </div>
        </div>
        <div class="col s12 m12 l5">
          <div class="row">
            <div class="col s6 m3 l3">
              <img src="app/views/html/surface/cloudservices/elasticInstance/minstance/img/detail/processor.min.png" width="50" height="50" alt="processor" />
              <h4 class="card-title fs-15 black-text font-weight-extrabold">`+indexMsgsminsD.minsD_topc_label_6+`</h4>
              <h4 class="card-title fs-25 font-weight-extrabold" id="surf_minsdetail_topc_vcpu">`+kspecification[0]+`</h4>
            </div>
            <div class="col s6 m3 l3">
              <img src="app/views/html/surface/cloudservices/elasticInstance/minstance/img/detail/storage.png" width="50" height="50" alt="storage" />
              <h4 class="card-title fs-15 black-text font-weight-extrabold">`+indexMsgsminsD.minsD_topc_label_7+`</h4>
              <h4 class="card-title fs-25 font-weight-extrabold" id="surf_minsdetail_topc_storage">`+kspecification[2]+` <span class="fs-15">GB</span></h4>
            </div>
            <div class="col s6 m3 l3">
              <img src="app/views/html/surface/cloudservices/elasticInstance/minstance/img/detail/memory.min.png" width="50" height="50" alt="memory" />
              <h4 class="card-title fs-15 black-text font-weight-extrabold">`+indexMsgsminsD.minsD_topc_label_8+`</h4>
              <h4 class="card-title fs-25 font-weight-extrabold" id="surf_minsdetail_topc_memory" >`+kspecification[1]+` <span class="fs-15">GB</span></h4>
            </div>
            <div class="col s6 m3 l3">
              <img src="app/views/html/surface/cloudservices/elasticInstance/minstance/img/detail/global-network.png" width="50" height="50" alt="network" />
              <h4 class="card-title fs-15 black-text font-weight-extrabold">`+indexMsgsminsD.minsD_topc_label_9+`</h4>
              <div class="network-info">
              <img src="app/views/html/surface/cloudservices/elasticInstance/minstance/img/detail/information.png" class="mt-8" width="20" height="20" alt="information" />
                <div class="card border-radius-10 network-info-detail">
                  <div class="card-content">
                    <div class="row">
                      <div class="col s12">
                       `+ipLists+`
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
      .tooltip {
        position: relative;
        display: inline-block;
      }
      
      .tooltip .tooltiptext {
        visibility: hidden;
        width: 140px;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 150%;
        left: 50%;
        margin-left: -75px;
        opacity: 0;
        transition: opacity 0.3s;
      }
      
      .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
      }
      
      .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
      }


      .tooltipssh {
        position: relative;
        display: inline-block;
      }
      
      .tooltipssh .tooltiptextssh {
        visibility: hidden;
        width: 140px;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 150%;
        left: 50%;
        margin-left: -75px;
        opacity: 0;
        transition: opacity 0.3s;
      }
      
      .tooltipssh .tooltiptextssh::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
      }
      
      .tooltipssh:hover .tooltiptextssh {
        visibility: visible;
        opacity: 1;
      }


      </style>
      <div class="row mt-1 ">
          <div class="col s12 m6 l5 tooltip">
          <h4 class="fs-14 card-title mt-1 mb-0 gray-text">`+indexMsgsminsD.minsD_topc_label_10+` : <span class="ip-box black-text" id="surf_minsdetail_topc_ipAddress"><span id="surf_minsdetail_topc_ipAddress_inner"  >`+data.ipAddress+`</span> <span class="tooltiptext" id="myTooltip">`+indexMsgsminsD.minsD_topc_label_15+`</span> <i  onclick="myFunctionCTIP()" onmouseout="outFuncCTIP()"  class=" material-icons dp48 blue-text copy-icon"> content_copy</i> </span> </h4>
          </div>
          <div class="col s12 m6 l5 tooltipssh">
          <h4 class="fs-14 card-title mt-1 mb-0 gray-text">`+indexMsgsminsD.minsD_topc_label_11+` : <span class="ip-box ip-box-sm black-text" id="surf_minsdetail_topc_sshAddress"><span id="surf_minsdetail_topc_sshAddress_inner" >`+data.sshCmd+`</span> <span class="tooltiptextssh" id="myTooltipssh">`+indexMsgsminsD.minsD_topc_label_15+`</span>  <i onclick="myFunctionCTSSH()" onmouseout="outFuncCTSSH()"  class=" material-icons dp48 blue-text copy-icon">  content_copy</i></span></h4>
          </div>
          <div class="col s12 m12 l2 mb-0">
          <div class="input-field header-ip-select">
            `+cVmactions+`
           
          </div>
          </div>
      </div>`;

        setTimeout(function() {
        $('#surfminsdetailtopcardplacement').html(p);
        $(".dropdown-trigger").dropdown();
        },500);


       /* var storedStateVMListParticularD = ((JSON.parse(localStorage.getItem("storedStateVMListParticular"+cardIdDetailsid))) ? JSON.parse(localStorage.getItem("storedStateVMListParticular"+cardIdDetailsid)) : {});  
        
      if(Object.keys(storedStateVMListParticularD).length >0){

        
        
      }*/

      if(data.currentstate == 7001 || data.powerStatus == 0){
        setTimeout(function() {
          captureTopCard();
          },45000);
      }

      
    }


    function myFunctionCTIP() {
     

      var copyt = $('#surf_minsdetail_topc_ipAddress_inner').html();
      navigator.clipboard.writeText(copyt);
      
      var tooltip = document.getElementById("myTooltip");
      tooltip.innerHTML =indexMsgsminsD.minsD_topc_label_16;
    }

    function outFuncCTIP(){
      var tooltip = document.getElementById("myTooltip");
      tooltip.innerHTML = indexMsgsminsD.minsD_topc_label_15;
    }


    function myFunctionCTSSH() {
      

      var copyt = $('#surf_minsdetail_topc_sshAddress_inner').html();
      navigator.clipboard.writeText(copyt);
      
      var tooltip = document.getElementById("myTooltipssh");
      tooltip.innerHTML =indexMsgsminsD.minsD_topc_label_16 ;
    }

    function outFuncCTSSH(){
      var tooltip = document.getElementById("myTooltipssh");
      tooltip.innerHTML = indexMsgsminsD.minsD_topc_label_15;
    }

    
   
    function callOverviewTab(){
      captureoverviewcpuandmemoryCard();
      captureoverviewstorageCard();
      captureoverviewdiskCard();

    }
    function captureoverviewcpuandmemoryCard(){
      var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
     
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 

      let reqParams = {
        'from':'minstancedetail',
        'secudeco':$('#establish_minstancedetail_status').val(),
        'tenantId':dcc_siginin_info.tenant_id,
        'tenantvmid':cardIdDetailsid,          
       'portal':'minstanceDetail',
       'portalsubmit':'level_2'
     };
     
     var data = ajaxDuty(reqParams, 'app/views/html/surface/cloudservices/elasticInstance/minstance/detail/index.php', 'html', false);
     if (data) {        
       
       data = JSON.parse(data);
       
       data = JSON.parse(data.data);
       
        plotoverviewcpuandmemoryCard(data);
     }
    }

    function plotoverviewcpuandmemoryCard(data){
      
      data = data.message.data;
     


      var pst = `
      <div class="card border-radius-10">
      <div class="card-content pt-1 pb-1 pr-0 pl-0">
        <h4 class="card-title fs-15 font-weight-extrabold border-bottom-1 pl-2 pb-1">`+indexMsgsminsD.minsD_gen_overview_tab_cpumem_label_0+`</h4>
        <div class="row mt-2">
          <div class="col s6 m6 l3 center">
            <div id="element">
              <div class="inner" id="surfoverview-cpu_usage_avg">`+data.cpu_usage_avg+`<span class="fs-14 ml-2 mt-8">%</span></div>
            </div>
            <h4 class="card-title fs-15 font-weight-extrabold memory-heading mt-6">`+indexMsgsminsD.minsD_gen_overview_tab_cpumem_label_1+`</h4>
          </div>
          <div class="col s6 m6 l3 center">
            <div id="element" class="maximum-bg">
              <div class="inner" id="surfoverview-cpu_usage_max">`+data.cpu_usage_max+`<span class="fs-14 ml-2 mt-8">%</span></div>
            </div>
            <h4 class="card-title fs-15 font-weight-extrabold memory-heading mt-6">`+indexMsgsminsD.minsD_gen_overview_tab_cpumem_label_2+`</h4>
          </div>
          <div class="col s6 m6 l3 center">
            <div id="element" class="average-bg">
              <div class="inner" id="surfoverview-cpu_usagemhz_avg">`+data.cpu_usagemhz_avg+`<span class="fs-14 ml-2 mt-8">Mhz</span></div>
            </div>
            <h4 class="card-title fs-15 font-weight-extrabold memory-heading mt-6">`+indexMsgsminsD.minsD_gen_overview_tab_cpumem_label_3+`</h4>
          </div>
          <div class="col s6 m6 l3 center">
            <div id="element" class="memory-bg">
              <div class="inner" id="surfoverview-mem_usage_avg">`+data.mem_usage_avg+`<span class="fs-14 ml-2 mt-8">%</span></div>
            </div>
            <h4 class="card-title fs-15 font-weight-extrabold memory-heading mt-6">`+indexMsgsminsD.minsD_gen_overview_tab_cpumem_label_4+`</h4>
          </div>
        </div>
      </div>
    </div>`;

    setTimeout(function() {

    $('#surfaceoverviewcpuandmemoryCard').html(pst);


    },500);

    }
    
    function captureoverviewstorageCard(){
      var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 

      let reqParams = {
        'from':'minstancedetail',
        'secudeco':$('#establish_minstancedetail_status').val(),
        'tenantId':dcc_siginin_info.tenant_id,
        'tenantvmid':cardIdDetailsid,          
       'portal':'minstanceDetail',
       'portalsubmit':'level_3'
     };
     
     var data = ajaxDuty(reqParams, 'app/views/html/surface/cloudservices/elasticInstance/minstance/detail/index.php', 'html', false);
     if (data) {        
       
       data = JSON.parse(data);
       
       data = JSON.parse(data.data);
       
        plotoverviewstorageCard(data);
     }
    }

    function plotoverviewstorageCard(data){
      data = data.message.data;
      
      
      var perc = 100;
     
      var cka = inFormatKBitsDstorageRateVolume(data.disk_used_latest);
      var ckb = inFormatKBitsDstorageRateVolume(data.disk_provisioned_latest);
     
      if(!data.disk_used_latest || data.disk_used_latest == "-"){
        cka = 0;
      }

      if(!data.disk_provisioned_latest || data.disk_provisioned_latest == "-" ){
        ckb = 0;
      }
      var pst = `
      <div class="card border-radius-10" style="height: 250px;">
                            <div class="card-content pt-1 pb-1 pr-0 pl-0">
                              <h4 class="card-title fs-15 font-weight-extrabold border-bottom-1 pl-2 pb-1">`+indexMsgsminsD.minsD_gen_overview_tab_storage_label_0+`</h4>
                              <div class="progress-value mt-5">
                               <!-- <h4 class="card-title fs-20 font-weight-extrabold" id="surfoverview-disk_used_latest" >`+cka+`</h4>-->
                                <span style="top: 20px !important;" class="progress-value-span gray-text fs-15">`+indexMsgsminsD.minsD_gen_overview_tab_storage_label_1+`</span>
                                <h4 class="card-title fs-20 font-weight-extrabold" style="float: right;
                                top: 105px; position: relative;" id="surfoverview-disk_provisioned_latest">`+ckb+`</h4>
                                <!--<span class="progress-value-span gray-text fs-10">Disk Provisioned</span>-->
                              </div>
                              <div class="progress">
                                <div class="progress-done" id="diskoverviewStored" data-done="`+perc+`"></div>
                              </div>
                            </div>
                          </div>`;

                          

                          setTimeout(function() {
                            $('#surfaceoverviewstorageCard').html(pst);
                          const progress = document.querySelector('.progress-done');
    
    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.style.opacity = 1;
                          },500);



    }


    function postchangeVMstatus(prestate,state){
      
      var storedStateVMListParticular = ((JSON.parse(localStorage.getItem("storedStateVMListParticular"+cardIdDetailsid))) ? JSON.parse(localStorage.getItem("storedStateVMListParticular"+cardIdDetailsid)) : {});  
      
      var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var loguserInfo = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 

      let reqParams = {
        
        'from':'minstancedetail',
        'secudeco':$('#establish_minstancedetail_status').val(),
        'user_serial_id':loguserInfo.user_serial_id,     
        'options':"",
        'action':state,
        'tenantvmid':cardIdDetailsid,          
       'portal':'minstanceDetail',
       'portalsubmit':'level_6'
     };
     
     var data = ajaxDuty(reqParams, 'app/views/html/surface/cloudservices/elasticInstance/minstance/detail/index.php', 'html', false);
     
     if (data) {   
      
      data = JSON.parse(data);  
      
      if (data.code == 204 || data.data.status_code == 9000) {

        
        if (Object.keys(storedStateVMListParticular).length >0) {
            var founderVMLT =true;                 
            if (parseFloat(storedStateVMListParticular.tenantvmid) == parseFloat(cardIdDetailsid)) {
              founderVMLT =false;
                storedStateVMListParticular.prestate = prestate;
            }
              if(founderVMLT){
                storedStateVMListParticular = {
                    "prestate": prestate,
                    "tenantvmid": cardIdDetailsid
                };
              }
          } else {                  
              storedStateVMListParticular = {
                  "prestate": prestate,
                  "tenantvmid": cardIdDetailsid
              };
          }
      
      localStorage.setItem("storedStateVMListParticular"+cardIdDetailsid, JSON.stringify(storedStateVMListParticular));

        if(state == "delete"){
          location.href = "#minstance";
         }else{
  
          captureTopCard();
          callOverviewTab(); 
         }


      } else {
        indexToastr("error", 'Error', indexMsgsminsD.minsD_gen_toastr_msg_0, {
            timeOut: 5000
        });
      }
       
       
       
     }


    }
    function changeVMstatus(prestate,state,mtitle,stitle,svalue,ftitle,fbtn){
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
    
      swalWithBootstrapButtons.fire({
        title: mtitle,
        text: "You won't be able to revert this!",
        html:
        stitle+` : <span class="black-text swal2-text-highlight">`+svalue+`</span> </br> ` +
          `<p>`+ftitle+`  </p> `,
        icon: 'warning', 
        confirmButtonText: fbtn,
        showCancelButton: true  
      }).then((result) => {
        if (result.isConfirmed) {
          setTimeout(function() {
          postchangeVMstatus(prestate,state);
          },200);
        }
      })

    

     

    }
    function captureoverviewdiskCard(){
      var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
      let reqParams = {
        'from':'minstancedetail',
        'secudeco':$('#establish_minstancedetail_status').val(),
        'tenantId':dcc_siginin_info.tenant_id,
        'tenantvmid':cardIdDetailsid,          
       'portal':'minstanceDetail',
       'portalsubmit':'level_4'
     };
     
     var data = ajaxDuty(reqParams, 'app/views/html/surface/cloudservices/elasticInstance/minstance/detail/index.php', 'html', false);
     if (data) {        
       
       data = JSON.parse(data);
       
       data = JSON.parse(data.data);
       
        plotoverviewdiskCard(data);
     }
    }

    function plotoverviewdiskCard(data){
      
      data = data.message.data;
      

      var pst = `<div class="card disk-card-sm border-radius-10" style="height: 250px;">
      <div class="card-content pt-1 pb-1 pr-0 pl-0">
        <h4 class="card-title fs-15 font-weight-extrabold border-bottom-1 pl-2 pb-1">`+indexMsgsminsD.minsD_gen_overview_tab_drw_label_0+`</h4>
        <div class="row">
          <div class="col s12 m6 l6 center">
            <div class="block">
              <div class="button-absolute"><h4 class="card-title fs-25 font-weight-extrabold white-text text-overflow mb-0" id="surfoverview-disk_read_average" style="width:135px;">`+formatBitsDtransferRateWithoutLabel(data.disk_read_average,"")+` <span class="fs-14">`+formatBitsDtransferRateLabelOnly(data.disk_read_average,"")+`</span></h4></div>
            </div>
            <h4 class="card-title fs-15 font-weight-extrabold memory-heading mt-6">`+indexMsgsminsD.minsD_gen_overview_tab_drw_label_1+`</h4>
          </div>
          <div class="col s12 m6 l6 center">
            <div class="block speed-bg">
              <div class="button-absolute"><h4 class="card-title fs-25 font-weight-extrabold white-text text-overflow mb-0" id="surfoverview-disk_write_average" style="width:135px;">`+formatBitsDtransferRateWithoutLabel(data.disk_write_average)+` <span class="fs-14">`+formatBitsDtransferRateLabelOnly(data.disk_write_average,"")+`</span></h4></div>
            </div>
            <h4 class="card-title fs-15 font-weight-extrabold memory-heading mt-6">`+indexMsgsminsD.minsD_gen_overview_tab_drw_label_2+`</h4>
          </div>
        </div>
      </div>
    </div>`;
      setTimeout(function() {
        $('#surfaceoverviewDiskCard').html(pst);      
      },500);


    }

    var listGraphs = [];
    

    var defaultStorages = [];
    var cdefaultStorageId = "";
    var cstoragesDetails = [];
    var pergbcost = 0;

    var rowIdx = 0;
    var updatedValueVM = 0;
    function submitStorageList(){
      //disableStorageUBtn();
      openBodyProgress();
      $('#commonStorageSbtn').addClass("disabled");
      $('#commonStorageSbtn').removeAttr("onClick");
      $('#commonStorageSbtn').hide();
      $('#commonStorageSbtnOther').show();
      var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
      var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
        let reqParams = {
          'from':'minstancedetail',
          'secudeco':$('#establish_minstancedetail_status').val(),
          'data':defaultStorages,
          'tenantId':dcc_siginin_info.tenant_id,
          'tenantvmid':cardIdDetailsid,  
          
          'zone':Intl.DateTimeFormat().resolvedOptions().timeZone,        
         'portal':'minstanceDetail',
         'portalsubmit':'level_11'
       };
       
       var data = ajaxDuty(reqParams, 'app/views/html/surface/cloudservices/elasticInstance/minstance/detail/index.php', 'html', false);
       if (data) {        
         

         
         data = JSON.parse(data);
         
         if(data.data.status_code == 9000){
         // closeBodyProgress();
         callMIDStorage("indirect");
         
         }else if(data.data.status_code == 9002){
          closeBodyProgress();
         $('#commonStorageSbtn').removeClass("disabled");
        $('#commonStorageSbtn').attr("onClick","submitStorageList()");

        $('#commonStorageSbtn').show();
        $('#commonStorageSbtnOther').hide();
          indexToastr("error",'Error',data.data.message,{timeOut: 5000});
        
          
        }else if(data.data.status_code == 9004){
          closeBodyProgress();
           $('#commonStorageSbtn').removeClass("disabled");
        $('#commonStorageSbtn').attr("onClick","submitStorageList()");

        $('#commonStorageSbtn').show();
        $('#commonStorageSbtnOther').hide();
          indexToastr("error",'Error',data.data.message,{timeOut: 5000});
         }else{
          closeBodyProgress();
           $('#commonStorageSbtn').removeClass("disabled");
        $('#commonStorageSbtn').attr("onClick","submitStorageList()");

        $('#commonStorageSbtn').show();
        $('#commonStorageSbtnOther').hide();
          indexToastr("error",'Error',data.data.message,{timeOut: 5000});
         }
         
       }else{
        closeBodyProgress();
         $('#commonStorageSbtn').removeClass("disabled");
        $('#commonStorageSbtn').attr("onClick","submitStorageList()");

        $('#commonStorageSbtn').show();
        $('#commonStorageSbtnOther').hide();
        
       }

    }
    function removeRestrictionStorageUBtn(){
      $('#commonStorageSbtn').removeClass("disabled");
        $('#commonStorageSbtn').attr("onClick","submitStorageList()");
    }
    function disableStorageUBtn(){
      $('#commonStorageSbtn').addClass("disabled");
        $('#commonStorageSbtn').removeAttr("onClick");
    }
    function addMoreStorage() {
      $('#commonStorageSbtn').removeClass("disabled");
        $('#commonStorageSbtn').attr("onClick","submitStorageList()");
      rowIdx = rowIdx + 1;
    
      defaultStorages.push({
          "storageName": "Volume " + rowIdx,
          "storageTypeName": "NVMe",
          "storageSizeName": "1G",
          "storagePrize": (1 * pergbcost).toFixed(2)
      });

      if (defaultStorages.length > 0) {
        updatedCostRangeSt = 0;
          for (var i = 0; i < defaultStorages.length; i++) {
            updatedCostRangeSt += parseFloat(defaultStorages[i].storageSizeName.split("G")[0]);
              
          }
      }

    
    
    
    
      $('#storagesVList').append(`
     
     
     <tr id="R${rowIdx}">
    
    <td class="td-active-color disk-td text-color">Volume ${rowIdx}</td>
    
    <td class="td-active-color type-td">
      <select class="" id="selectStorageSub${rowIdx}">
        <option value="NVMe">NVMe</option>
      </select>
    </td>
    
    <td class="td-active-color size-td text-color center">
    <span id="minus${rowIdx}" class="size-td-minus">
    <i class="fa fa-minus" aria-hidden="true"></i></span> 
    
    <span id="storageSize${rowIdx}" >1</span> <span>GB</span> 
    
    <span id="plus${rowIdx}" class="size-td-add"><i class='fa fa-plus'></i></span>
    </td>
    
    <td class="td-active-color cost-td text-color" id="storageCost${rowIdx}" >` + (1 * pergbcost).toFixed(2) + `</td>
    
    <td class="action-td "><i class="remove material-icons dp48 fs-30 cursor-pointer">remove_circle</i></td>
    
    </tr>
    
     
     `);
    
     
      var passId = rowIdx;
      $('select').formSelect();
      
    
    
      $("#plus" + passId).click(function() {
        $('#commonStorageSbtn').removeClass("disabled");
        $('#commonStorageSbtn').attr("onClick","submitStorageList()");
          var defaultSv = $('#storageSize' + passId).html();
          var storageSizeVal = parseFloat(defaultSv) + 1;
          $('#storageSize' + passId).html(storageSizeVal);
          var storageSizeValCost = (storageSizeVal * pergbcost).toFixed(2);
          $('#storageCost' + passId).html(storageSizeValCost);
    
          updateSizeandCost(passId, storageSizeVal, storageSizeValCost);
          commonDecresFl();
      });
    
      $("#minus" + passId).click(function() {
        $('#commonStorageSbtn').removeClass("disabled");
        $('#commonStorageSbtn').attr("onClick","submitStorageList()");
          var defaultSv = $('#storageSize' + passId).html();
    
          var storageSizeVal = parseFloat(defaultSv) - 1;
          if (parseFloat(storageSizeVal) >= 1) {
    
    
              $('#storageSize' + passId).html(storageSizeVal);
              var storageSizeValCost = (storageSizeVal * pergbcost).toFixed(2);
              $('#storageCost' + passId).html(storageSizeValCost);
              updateSizeandCost(passId, storageSizeVal, storageSizeValCost);
          }
          commonDecresFl();
    
    
      });
    
    }
    var updatedCostRangeSt = 0;
    function updateSizeandCostDefault(storageId,storageSizeVal, storageSizeValCost) {
      if (defaultStorages.length > 0) {
        updatedCostRangeSt = 0;
          for (var i = 0; i < defaultStorages.length; i++) {
            updatedCostRangeSt += parseFloat(storageSizeVal);
              if (defaultStorages[i].storageId == storageId) {
                  defaultStorages[i].storageSizeName = storageSizeVal + "G";
                  defaultStorages[i].storagePrize = storageSizeValCost;
              }
          }
      }
    
      
    }
    
    function updateSizeandCost(passId, storageSizeVal, storageSizeValCost) {
      if (defaultStorages.length > 0) {
        updatedCostRangeSt = 0;
          for (var i = 0; i < defaultStorages.length; i++) {
            updatedCostRangeSt += parseFloat(storageSizeVal);
              if (defaultStorages[i].storageName == "Volume " + passId) {
                  defaultStorages[i].storageSizeName = storageSizeVal + "G";
                  defaultStorages[i].storagePrize = storageSizeValCost;
              }
          }
      }
      
    }

    var defaultOverallStSize = 0;
    function plotMIDStorage(data){
      
      cstoragesDetails = data;
      var defaultSsize = 1;
       pergbcost = parseFloat(data.perstorage);
       var buttonlu = ` <button id="commonStorageSbtn" type="button" class="disabled waves-effect waves-light btn gradient-45deg-light-blue-cyan z-depth-4">`+indexMsgsminsD.minsD_gen_storage_tab_label_6+`</button>
       <button style="display:none;" id="commonStorageSbtnOther" type="button" class="disabled waves-effect waves-light btn gradient-45deg-light-blue-cyan z-depth-4">`+indexMsgsminsD.minsD_gen_storage_tab_label_7+`</button>`;
       if (data.state == "processing") {
        buttonlu = ` <button style="display:none;"  id="commonStorageSbtn" type="button" class="disabled waves-effect waves-light btn gradient-45deg-light-blue-cyan z-depth-4">`+indexMsgsminsD.minsD_gen_storage_tab_label_6+`</button>
       <button id="commonStorageSbtnOther" type="button" class="disabled waves-effect waves-light btn gradient-45deg-light-blue-cyan z-depth-4">`+indexMsgsminsD.minsD_gen_storage_tab_label_7+`</button>`;
       }
      var ps =` <div class="card card-storage border-radius-10">
      <div class="card-content">
        <div class="row">
          <div class="col s12 m12 l12" id="view-borderless-table">
            <div class="responsive-table" style="border: 1px solid #c7c7c7;">
              <table class="add-storage">
                <thead>
                <tr>
                  <th>`+indexMsgsminsD.minsD_gen_storage_tab_label_1+`</th>
                  <th>`+indexMsgsminsD.minsD_gen_storage_tab_label_2+`</th>
                  <th>`+indexMsgsminsD.minsD_gen_storage_tab_label_3+`</th>
                  <th>`+indexMsgsminsD.minsD_gen_storage_tab_label_4+` <span class="fs-10">(SAR)</span></th>
                  <th class="center">`+indexMsgsminsD.minsD_gen_storage_tab_label_5+`</th>
                </tr>
                </thead>
                <tbody id="storagesVList">`;

                if (data) {
                  defaultOverallStSize = 0;
                  data.list.map(function(elem) {
                    defaultOverallStSize += parseFloat(elem.storageSizeName);
                    
                    if(elem.storageName != "Boot Disk"){
                      var splitStoreName = elem.storageName.split(" ");
                      updatedValueVM = parseFloat(splitStoreName[1]);
                      rowIdx = parseFloat(splitStoreName[1]);
                      
                      
                    }
                    
                    var splitSize = elem.storageSizeName.split("G");
                    elem.storageSizeName = splitSize[0];
                      defaultSsize = elem.storageSizeName;
                      
                      defaultStorages.push({
                        "storageId":elem.storageId,
                          "storageName": elem.storageName,
                          "storageTypeName": elem.storageTypeName,
                          "storageSizeName": elem.storageSizeName + "G",
                          "storagePrize": (parseFloat(elem.storagePrize)).toFixed(2)
                      });
            
                      cdefaultStorageId = elem.storageId;
            
                      ps += `  <tr>
            
            <td class="disk-td text-color">` + elem.storageName + `</td>
            
            <td class="type-td">
              <select class="" id="storageSelectMID`+elem.storageId+`">
                <option value="`+elem.storageTypeName+`">`+elem.storageTypeName+`</option>
              </select>
            </td>
            
            <td class="size-td text-color center">
            <span data-storageid="`+elem.storageId+`"  id="minusDefaultS`+elem.storageId+`" class="minusDefaultS size-td-minus">
            <i class="fa fa-minus" aria-hidden="true"></i></span> 
            <input type="hidden" id="defaultStoredVal_`+elem.storageId+`" value="` + elem.storageSizeName + `">
            <span id="storageSizeDefaultS_`+elem.storageId+`" >` + elem.storageSizeName + `</span> <span>GB</span> 
            
            <span data-storageid="`+elem.storageId+`" id="plusDefaultS`+elem.storageId+`" class="plusDefaultS size-td-add"><i class='fa fa-plus'></i></span>
            </td>
            
            <td class="cost-td text-color" id="storageCostDefaultS_`+elem.storageId+`" >` + (parseFloat(elem.storagePrize)).toFixed(2) + `</td>
            
            <td class="action-td "><i class=" disabled material-icons dp48 fs-30 cursor-pointer">remove_circle</i></td>
            
            </tr>`;
            
                  });
              }

                 
               ps += ` </tbody>
              </table>
            </div>
          </div>
          <div class="col s12 mt-2 center">
           `+buttonlu+`
          </div>
        </div>
      </div>
    </div>`;

      setTimeout(function() {
        $('#surfallStorageMinstanceDetails').html(ps);

        setTimeout(function() {
          $("select").formSelect();
      }, 200);


      $('#storagesVList').on('click', '.remove', function() {
  
        
  
        var child = $(this).closest('tr').nextAll();
  
  
  
        child.each(function() {
  
  
            var id = $(this).attr('id');
  
  
            var idx = $(this).children('.row-index').children('p');
  
  
            var dig = parseFloat(id.substring(1));
  
  
            idx.html(`Row ${dig - 1}`);
  
  
            $(this).attr('id', `R${dig - 1}`);
        });
  
  
        $(this).closest('tr').remove();
  
        removeByAttr(defaultStorages, 'storageName', "Volume " + rowIdx);
  
  
  
        commonDecresFl();
        rowIdx--;
  
        
        
  
  
  
    });
  
  
    $(".plusDefaultS").click(function() {
      $('#commonStorageSbtn').removeClass("disabled");
        $('#commonStorageSbtn').attr("onClick","submitStorageList()");

      var capstorageid = $(this).attr("data-storageid");
          
        var defaultSv = $('#storageSizeDefaultS_'+capstorageid).html();
        var storageSizeVal = parseFloat(defaultSv) + 1;
        $('#storageSizeDefaultS_'+capstorageid).html(storageSizeVal);
        var storageSizeValCost = (storageSizeVal * pergbcost).toFixed(2);
        $('#storageCostDefaultS_'+capstorageid).html(storageSizeValCost);
  
        updateSizeandCostDefault(capstorageid,storageSizeVal, storageSizeValCost);
        commonDecresFl();

    });
  
    $(".minusDefaultS").click(function() {
          var capstorageid = $(this).attr("data-storageid");
          

          
        var defaultSv = $('#storageSizeDefaultS_'+capstorageid).html();
  
        var storageSizeVal = parseFloat(defaultSv) - 1;
        var defaultSsize = $('#defaultStoredVal_'+capstorageid).val();
        
        if (parseFloat(storageSizeVal) >= parseFloat(defaultSsize)) {
  
  
            $('#storageSizeDefaultS_'+capstorageid).html(storageSizeVal);
            var storageSizeValCost = (storageSizeVal * pergbcost).toFixed(2);
            $('#storageCostDefaultS_'+capstorageid).html(storageSizeValCost);
            updateSizeandCostDefault(capstorageid,storageSizeVal, storageSizeValCost);
        }

        commonDecresFl();
  
  
    });




        },500);

    }

    
    function commonDecresFl(){
      
      if (defaultStorages.length > 0) {
        updatedCostRangeSt = 0;
          for (var i = 0; i < defaultStorages.length; i++) {
            updatedCostRangeSt += parseFloat(defaultStorages[i].storageSizeName.split("G")[0]);
              
          }
          if(defaultOverallStSize == updatedCostRangeSt){
            disableStorageUBtn();
          }
      }

      
    }

    var removeByAttr = function(arr, attr, value) {
      var i = arr.length;
      while (i--) {
          if (arr[i] &&
              arr[i].hasOwnProperty(attr) &&
              (arguments.length > 2 && arr[i][attr] === value)) {
    
              arr.splice(i, 1);
    
          }
      }
      return arr;
    }

    
    var checkinitialStatePrStorage = false;
    function callMIDStorage(dtype){
      rowIdx = 0;
      defaultStorages = [];
      var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
      var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
        let reqParams = {
          'from':'minstancedetail',
          'secudeco':$('#establish_minstancedetail_status').val(),
          
          'tenantId':dcc_siginin_info.tenant_id,
          'tenantvmid':cardIdDetailsid,  
          
          'zone':Intl.DateTimeFormat().resolvedOptions().timeZone,        
         'portal':'minstanceDetail',
         'portalsubmit':'level_10'
       };
       
       var data = ajaxDuty(reqParams, 'app/views/html/surface/cloudservices/elasticInstance/minstance/detail/index.php', 'html', false);
       if (data) {        
         
         data = JSON.parse(data);
         
        // if(data.length >0){
          data = JSON.parse(data.data).message;
          
        
          
       
          
          //if (getMyScr() === "#minstancedetail") {
             //myIntervalVMLTStorages = setInterval(function() {  
              
               
                if (data.state == "error") {
                  closeBodyProgress();                  
                  $('#commonStorageSbtn').show();
                  $('#commonStorageSbtnOther').hide();

                  setTimeout(function(){
                    if(dtype == "indirect"){
                      indexToastr("error",'Error',indexMsgsminsD.indexMsgsminsD.minsD_gen_toastr_msg_0,{timeOut: 5000});
                    }
                  
                  setTimeout(function(){
                    plotMIDStorage(data);
                  },300);
                  },100);

                  
                  

                    //clearInterval(myIntervalVMLTStorages);
                    
                   // return;
                }else if (data.state == "success") { 
                  closeBodyProgress();
                
                $('#commonStorageSbtn').show();
                $('#commonStorageSbtnOther').hide();
                  //clearInterval(myIntervalVMLTStorages);
                  setTimeout(function(){
                    if(dtype == "indirect"){
                    indexToastr("success", 'success', indexMsgsminsD.minsD_gen_toastr_msg_1, {
                      timeOut: 5000
                  });
                }
                  setTimeout(function(){
                    plotMIDStorage(data);
                    captureTopCard();
                  },300);
                  
                  },200);
                  
                  

                  
                  //return;
                 }else if (data.state == "processing") {
                  setTimeout(function(){
                    
                    callMIDStorage("indirect");
                  },45000);
                  
                   /* myIntervalVMLTStorages = setInterval(function() {  
                   // if(checkinitialStatePrStorage){
                        
                   if (getMyScr() == "#minstancedetail") {
                       callMIDStorage("indirect");
                      }else{
                        //clearInterval(myIntervalVMLTStorages);
                      }
                      
                     // }
                      //checkinitialStatePrStorage = true;
                    }, 45000);*/
                  
                  
                
                  }else{
                    closeBodyProgress();
                    $('#commonStorageSbtn').show();
                    $('#commonStorageSbtnOther').hide();

                      //clearInterval(myIntervalVMLTStorages);
                      setTimeout(function(){
                    plotMIDStorage(data);
                  },300);
                     // return;
                  }  
                  
             
         // }, 45000);
        //}  
         //}
        

          
       }

      
      
    }
    function callUsageGraphs(){
      

      var ps ="";
      listGraphs.map(function(elem){
        ps += ` <div class="col s12 m6 l6">
        <div class="card border-radius-10">
          <div class="card-content pt-1 pb-1 pr-0 pl-0">
            <h4 class="card-title fs-15 font-weight-extrabold border-bottom-1 pl-2 pb-1">`+elem.title+`</h4>
            
            <div class="total-transaction-container">
            <div class="total-transaction-shadow" id="container_chart_`+elem.id+`_chart" style="width:100%; height:250px;">
           </div>
            </div>
          </div>
        </div>
      </div>`;
      });
      setTimeout(function() {
      $('#surfallGraphs').html(ps);
      plotAllGraphs();
      },500);
    }
    function plotAllGraphs(){


      listGraphs.map(function(elem){
        captureandplotGraphsData(elem);
      });


    }

    function captureandplotGraphsData(pdata){
      
      var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
      let reqParams = {
        'from':'minstancedetail',
        'secudeco':$('#establish_minstancedetail_status').val(),
        'graphId':pdata.id,
        'tenantId':dcc_siginin_info.tenant_id,
        'tenantvmid':cardIdDetailsid,  
        'filtertime':$('#surfMinstGraphs').val(),
        'zone':Intl.DateTimeFormat().resolvedOptions().timeZone,        
       'portal':'minstanceDetail',
       'portalsubmit':'level_5'
     };
     
     var data = ajaxDuty(reqParams, 'app/views/html/surface/cloudservices/elasticInstance/minstance/detail/index.php', 'html', false);
     if (data) {        
       
       data = JSON.parse(data);
       
        var fdata = {
          pdata:pdata,
          data:data
        };
       plotGraphsData(fdata);
     }
    }

    function placeLabelNames(label){
      var labelNames = {
        "cpu_usage_average":indexMsgsminsD.minsD_gen_usagegraph_tab_graph_keyLabel_0,
        "cpu_usage_maximum":indexMsgsminsD.minsD_gen_usagegraph_tab_graph_keyLabel_1,
        "cpu_usagemhz_average":indexMsgsminsD.minsD_gen_usagegraph_tab_graph_keyLabel_2,
        "mem_usage_average":indexMsgsminsD.minsD_gen_usagegraph_tab_graph_keyLabel_3,
        "disk_read_average":indexMsgsminsD.minsD_gen_usagegraph_tab_graph_keyLabel_4,
        "disk_write_average":indexMsgsminsD.minsD_gen_usagegraph_tab_graph_keyLabel_5
      };
      return labelNames[label];
    }
    function eLabelTooltipFormatter(func, params) {	
      
      var ff = '';
      for (var i = 0; i < params.length; i++) {
    
        ff += '<span>' + params[i].seriesName + ': ' + window[func](params[i].value[1],"","") + '</span><br/>';
      }
      return ff;
    }


    function plotGraphsData(data){
      
      var metrics = metricsTypeNew(data.data.unit);
      var chart_Id = "container_chart_" + data.pdata.id + "_chart";
      var dom = document.getElementById(chart_Id);
      var myChart = "";
      myChart = echarts.init(dom, 'light');
      var prepareSeriesData = [];

      data.data.rawData.map(function(elem){
        prepareSeriesData.push({
          smooth: 0.6,
          symbol: 'none',
          lineStyle: {
            color: '#da6cde'
          },
          name: placeLabelNames(elem.label),
          type: 'line',
          showSymbol: false,
          data: elem.value
        });
      })

      

      
      if(prepareSeriesData.length == 0){
        prepareSeriesData = [
          {"smooth":0.6,"symbol":"none","lineStyle":{"color":"#da6cde"},
          "name":"avg",
          "type":"line",
          "showSymbol":false,
          "data":[["2022-09-01 15:15:00",0],["2022-09-01 15:30:00",0]]}];
      }
      

      

      option = {

        animation: false,

		dataZoom: [{
			type: 'select',
			throttle: 50
		}],
    
    grid:{
      
      left:'left',
      left:'5',
      right: '8',
      containLabel:true,
      top:'15',
      bottom:'20'
    },

		
        
        tooltip: {
          trigger: 'axis',

          
          formatter: function (params) {
           
            return '<span> '+indexMsgsminsD.minsD_gen_usagegraph_tab_graph_keyLabel_6+': ' + params[0].value[0] + '</span><br />' + eLabelTooltipFormatter(metrics, params);            
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: [
          {
            type: "time",
            boundaryGap: true,
            show:true,
            splitLine: {
              show: true              
            }
          }
        ],
        yAxis: [
          {
        alignTicks:true,
        axisLabel: {
          formatter: function (params) {

            return window[metrics](params,"","");            
          },
         
        },
        type: "value",
              
              splitLine: {
                  show: true                  
              }              
          }
      ],
        series: prepareSeriesData
      };


      

      if (option && typeof option === "object") {
        myChart.setOption(option, true);
        myChart.dispatchAction({
          type: 'takeGlobalCursor',
          key: 'dataZoomSelect',
          dataZoomSelectActive: true
        });
      }

      



    }


    function callCSnapshots(dttype){
      

     
     
      viewSnapshots(dttype);
     

    }

    function actionSnapshots(state,options){

      var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var loguserInfo = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 


      

      let reqParams = {
        'from':'minstancedetail',
        'secudeco':$('#establish_minstancedetail_status').val(),
        'tenant_id':loguserInfo.tenant_id,
        'user_serial_id':loguserInfo.user_serial_id,     
        'options':options,
        'action':state,
        'tenantvmid':cardIdDetailsid,          
       'portal':'minstanceDetail',
       'portalsubmit':'level_9'
     };
     
     return ajaxDuty(reqParams, 'app/views/html/surface/cloudservices/elasticInstance/minstance/detail/index.php', 'html', false);
     

    }

    function reverttoSnapshots(){
      $('#create-loading-bar').html(indexMsgsminsD.minsD_gen_snapshot_tab_label_9);
      $('#border-hero-show').hide();
      $('#create-snapshot-card').hide();
      $('#create-snapshot-btn').hide();
      $('#create-loading').show();

     /* $('#overall_snapshot_skel').show();
      $('#overall_snapshot_org').hide();
      $('#reverttoSnapshotsBtn').removeAttr("onClick");
      $('#reverttoSnapshotsBtn').attr("disabled","disabled");
      $('#reverttoSnapshotsBtn').attr("style","cursor: progress;");
      $('body').attr("style","cursor: progress;");  */   

      var state = "revert_snapshot";
      var options = "";
      var data = actionSnapshots(state,options);
      
     if (data) {        
       
       data = JSON.parse(data);      
       
       if(data.code == 204 || data.data.status_code == 9000){
        setTimeout(function() {
          viewSnapshots('indirect');
       /* setTimeout(function() {
          $('#overall_snapshot_skel').hide();
          $('#overall_snapshot_org').show();
          $('#reverttoSnapshotsBtn').attr("onClick","reverttoSnapshots");
      $('#reverttoSnapshotsBtn').removeAttr("disabled");
      $('#reverttoSnapshotsBtn').attr("style","cursor: pointer;");
      $('body').attr("style","cursor: unset;");
          
          
          indexToastr("success",'Success','Snapshot reverted successfully!',{timeOut: 5000});
          
         },500);*/
        },60000);
       }else{
        viewSnapshots('indirect');
        /*$('#reverttoSnapshotsBtn').attr("onClick","reverttoSnapshots");
      $('#reverttoSnapshotsBtn').removeAttr("disabled");
      $('#reverttoSnapshotsBtn').attr("style","cursor: pointer;");
      $('body').attr("style","cursor: unset;");*/
      
       }

       
       
       
     }else{
      $('#reverttoSnapshotsBtn').attr("onClick","reverttoSnapshots");
      $('#reverttoSnapshotsBtn').removeAttr("disabled");
      $('#reverttoSnapshotsBtn').attr("style","cursor: pointer;");
      $('body').attr("style","cursor: unset;");
     
       
      indexToastr("error",'Error',indexMsgsminsD.minsD_gen_toastr_msg_0,{timeOut: 5000});
      
     }


    }
   
    function removeSnapshots(){
      
      $('#create-loading-bar').html(indexMsgsminsD.minsD_gen_snapshot_tab_label_10);
      $('#border-hero-show').hide();
      $('#create-snapshot-card').hide();
      $('#create-snapshot-btn').hide();
      $('#create-loading').show();

      /*$('#overall_snapshot_skel').show();
      $('#overall_snapshot_org').hide();*/
      
      var state = "remove_snapshot";
      var options = "";
      var data = actionSnapshots(state,options);
      
     if (data) {        
       
       data = JSON.parse(data);      
       
       if(data.code == 204 || data.data.status_code == 9000){
        setTimeout(function() {
          viewSnapshots('indirect');

        /*$('#create-snapshot-card').hide();
        $('#create-snapshot-btn').show();
        $('#create-loading').hide();
        $('#border-hero-show').hide();

        
        setTimeout(function() {
          $('#overall_snapshot_skel').hide();
          $('#overall_snapshot_org').show();
          indexToastr("success",'Success','Snapshot removed successfully!',{timeOut: 5000});
          
         },500);*/
        },60000);
       }else{
        //$('#overall_snapshot_skel').hide();
          //$('#overall_snapshot_org').show();
          viewSnapshots('indirect');
       }
       
       
     }else{
      viewSnapshots('indirect');
     /* $('#overall_snapshot_skel').hide();
          $('#overall_snapshot_org').show();*/
      indexToastr("error",'Error',indexMsgsminsD.minsD_gen_toastr_msg_0,{timeOut: 5000});
      
     }


    }
    function createSnapshots(){
      $('#create-loading-bar').html(indexMsgsminsD.minsD_gen_snapshot_tab_label_4);
      $('#border-hero-show').hide();
      $('#create-snapshot-card').hide();
      $('#create-snapshot-btn').hide();
      $('#create-loading').show();
      
      var state = "create_snapshot";
      var options = "os_snapshot/memory_snapshot";
      var data = actionSnapshots(state,options);
      
     if (data) {        
       
       data = JSON.parse(data);      
       
       if(data.code == 204 || data.data.status_code == 9000){        
        setTimeout(function() {
          //indexToastr("success",'Success','Snapshot created successfully!',{timeOut: 5000});
          viewSnapshots('indirect');
         },60000);
       }
       
       
     }else{
      indexToastr("error",'Error',indexMsgsminsD.minsD_gen_toastr_msg_0,{timeOut: 5000});
      //$('#create-snapshot-card').hide();
      //$('#create-snapshot-btn').show();
      //$('#create-loading').hide();
      viewSnapshots('indirect');
     }
     
    }

    function viewSnapshots(ddtype){

      var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var loguserInfo = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 

      

      let reqParams = {
        'from':'minstancedetail',
        'secudeco':$('#establish_minstancedetail_status').val(),
        'tenant_id':loguserInfo.tenant_id,
        'user_serial_id':loguserInfo.user_serial_id,     
        'timeZone_Default':Intl.DateTimeFormat().resolvedOptions().timeZone,
        'tenantvmid':cardIdDetailsid,          
       'portal':'minstanceDetail',
       'portalsubmit':'level_8'
     };
     
     var data = ajaxDuty(reqParams, 'app/views/html/surface/cloudservices/elasticInstance/minstance/detail/index.php', 'html', false);

     if (data) {        
      
      data = JSON.parse(data);  
      data = JSON.parse(data.data); 
      if(data.message.snapshotAction == "processing"){

        setTimeout(function(){
          viewSnapshots(ddtype);
        },45000);
      }else if(data.message.snapshotAction == "create_snapshot"){ 
        if(ddtype == "indirect"){
        indexToastr("success",'Success',indexMsgsminsD.minsD_gen_toastr_msg_2,{timeOut: 5000});
        }
        plotSnapshotsCard(data); 
        
      }else if(data.message.snapshotAction == "remove_snapshot"){ 
        if(ddtype == "indirect"){
        indexToastr("success",'Success',indexMsgsminsD.minsD_gen_toastr_msg_3,{timeOut: 5000});
        }
        plotSnapshotsCard(data);   
      }else if(data.message.snapshotAction == "revert_snapshot"){  
        if(ddtype == "indirect"){
        indexToastr("success",'Success',indexMsgsminsD.minsD_gen_toastr_msg_4,{timeOut: 5000});
        }
        plotSnapshotsCard(data);    
      
      }else{
        plotSnapshotsCard(data);
      }
       
    }

    }

    function plotSnapshotsCard(edata){
      
      data = edata;
     // data = JSON.parse(edata.data);   
      
      
      
      


      var p = `
      <div class="col s12" id="overall_snapshot_skel" style="display:none;">
      <div class="card border-radius-10">
        <div class="card-content">
          <div class="row mt-3">
            <div class="col s9 push-s1 center" style="left: 12%;">
              <p class="paragrap-skeleton animate"></p>
              <p class="paragrap-skeleton animate p2"></p>
              <p class="paragrap-skeleton animate p3"></p>
              <button class="btn snapshots-skeleton-btn animate mt-10 mb-10"></button>
            </div>
          </div>
        </div>
      </div>
    </div>

      
                                <div class="col s12" id="overall_snapshot_org">
                                  <div class="card border-radius-10">
                                    <div class="card-content">
                                    
                                      <div class="row mt-3">
                                        <div class="col s12 m12 l9 push-l1 snapshort-sm center" style="left: 12%;">
                                          <p>`+indexMsgsminsD.minsD_gen_snapshot_tab_label_0+`</p>
                                          <p>`+indexMsgsminsD.minsD_gen_snapshot_tab_label_1+`</p>
                                          <p>`+indexMsgsminsD.minsD_gen_snapshot_tab_label_2+`</p>
                                          <button onClick="createSnapshots()" class="btn waves-effect waves-light btn-create-bg mt-10 mb-10 " id="create-snapshot-btn">`+indexMsgsminsD.minsD_gen_snapshot_tab_label_3+`</button>
                                          <div class="row mt-10 mb-10 create-loading-top" id="create-loading" style="display: none;">
                                            <div class="col s12">
                                              <h4 class="fs-14 blue-text" id="create-loading-bar">`+indexMsgsminsD.minsD_gen_snapshot_tab_label_4+`</h4>
                                              <div id="progress-bar"></div>
                                            </div>
                                          </div>
                                          <div class="row mt-2" id="create-snapshot-card" style="display: none;">
                                            <div class="col s12 m6 l5 push-l1">
                                              <div class="card border-radius-10">
                                                <div class="card-content pt-5 pb-5 pr-5 pl-5">
                                                   <p class="fs-15 black-text font-weight-extrabold">`+indexMsgsminsD.minsD_gen_snapshot_tab_label_5+`</p>
                                                   <h4 class="fs-20 blue-text font-weight-bold mb-0" id="snapDate" >11/09/2022: 23:36</h4>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col s12 m6 l5 push-l1">
                                              <div class="card border-radius-10">
                                                <div class="card-content pt-5 pb-5 pr-5 pl-5">
                                                  <p class="fs-15 black-text font-weight-bold">`+indexMsgsminsD.minsD_gen_snapshot_tab_label_6+`</p>
                                                  <h4 class="fs-20 blue-text font-weight-extrabold mb-0 text-overflow" id="snapName" >Senthilraj Kappini</h4>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col s12 m4 l4 mt-8">
                                              <button onClick="createSnapshots()" class="btn waves-effect waves-light btn-create-bg pl-10 pr-10">`+indexMsgsminsD.minsD_gen_snapshot_tab_label_3+`</button>
                                            </div>
                                            <div class="col s12 m4 l4 mt-8">
                                              <button onClick="reverttoSnapshots()" id="reverttoSnapshotsBtn" class="btn waves-effect waves-light btn-revert-bg pl-5 pr-5">`+indexMsgsminsD.minsD_gen_snapshot_tab_label_7+`</button>
                                            </div>
                                            <div class="col s12 m4 l4 mt-8">
                                              <button onClick="removeSnapshots()" class="btn waves-effect waves-light btn-remove-bg pl-10 pr-10">`+indexMsgsminsD.minsD_gen_snapshot_tab_label_8+`</button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              

      `;

      if(data.status == "ok"){
        
        if(!data.message.vmSnapshotTO || data.message.vmSnapshotTO == "" || typeof data.message.vmSnapshotTO == "undefined"){
          
          $('#create-snapshot-card').hide();
          $('#create-snapshot-btn').show();
          $('#create-loading').hide();
          
          
        }else{
          

          var p = `
      
          <div class="col s12" id="overall_snapshot_skel" style="display:none;">
          <div class="card border-radius-10">
            <div class="card-content">
              <div class="row mt-3">
                <div class="col s9 push-s1 center" style="left: 12%;">
                  <p class="paragrap-skeleton animate"></p>
                  <p class="paragrap-skeleton animate p2"></p>
                  <p class="paragrap-skeleton animate p3"></p>
                  <button class="btn snapshots-skeleton-btn animate mt-10 mb-10"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
          
                                    <div class="col s12" id="overall_snapshot_org">
                                  <div class="card border-radius-10">
                                    <div class="card-content">
                                    <div id="border-hero-show" class="btn-top-border"></div>
                                      <div class="row mt-3">
                                        <div class="col s12 m12 l9 push-l1 snapshort-sm center" style="left: 12%;">
                                          <p>`+indexMsgsminsD.minsD_gen_snapshot_tab_label_0+`</p>
                                          <p>`+indexMsgsminsD.minsD_gen_snapshot_tab_label_1+`</p>
                                          <p>`+indexMsgsminsD.minsD_gen_snapshot_tab_label_2+`</p>
                                          <button style="display: none;" onClick="createSnapshots()" class="btn waves-effect waves-light btn-create-bg mt-10 mb-10 " id="create-snapshot-btn">`+indexMsgsminsD.minsD_gen_snapshot_tab_label_3+`</button>
                                          <div class="row mt-10 mb-10" id="create-loading" style="display: none;">
                                            <div class="col s12">
                                              <h4 class="fs-14 blue-text" id="create-loading-bar">`+indexMsgsminsD.minsD_gen_snapshot_tab_label_4+`</h4>
                                              <div id="progress-bar"></div>
                                            </div>
                                          </div>
                                          <div class="row mt-2" id="create-snapshot-card" >
                                            <div class="col s12 m6 l5 push-l1">
                                              <div class="card border-radius-10">
                                                <div class="card-content pt-5 pb-5 pr-5 pl-5">
                                                   <p class="fs-15 black-text font-weight-extrabold">`+indexMsgsminsD.minsD_gen_snapshot_tab_label_5+`</p>
                                                   <h4 class="fs-20 blue-text font-weight-bold mb-0" id="snapDate" >`+((data.message.vmSnapshotTO.snapshotDate)?data.message.vmSnapshotTO.snapshotDate:"-")+`</h4>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="col s12 m6 l5 push-l1">
                                              <div class="card border-radius-10">
                                                <div class="card-content pt-5 pb-5 pr-5 pl-5">
                                                  <p class="fs-15 black-text font-weight-bold">`+indexMsgsminsD.minsD_gen_snapshot_tab_label_6+`</p>
                                                  <h4 class="fs-20 blue-text font-weight-extrabold mb-0 text-overflow" id="snapName" >`+data.message.vmSnapshotTO.userName+`</h4>
                                                </div>
                                              </div>
                                            </div>
                                            <!--<div class="btn-top-border"></div>-->
                                            <div class="col s12 m4 l4 mt-8">
                                              <button disabled class="btn waves-effect waves-light  pl-10 pr-10">`+indexMsgsminsD.minsD_gen_snapshot_tab_label_3+`</button>
                                            </div>
                                            <div class="col s12 m4 l4 mt-8">
                                              <button onClick="reverttoSnapshots()" class="btn waves-effect waves-light btn-revert-bg pl-5 pr-5">`+indexMsgsminsD.minsD_gen_snapshot_tab_label_7+`</button>
                                            </div>
                                            <div class="col s12 m4 l4 mt-8">
                                              <button onClick="removeSnapshots()" class="btn waves-effect waves-light btn-remove-bg pl-10 pr-10">`+indexMsgsminsD.minsD_gen_snapshot_tab_label_8+`</button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              

      `;

          setTimeout(function() {
            
            $('#create-snapshot-card').show();
            $('#create-snapshot-btn').hide();
            $('#create-loading').hide();
            },500);
        }

      }else{

        indexToastr("error",'Error',indexMsgsminsD.minsD_gen_toastr_msg_0,{timeOut: 5000});
        $('#create-snapshot-card').hide();
          $('#create-snapshot-btn').show();
          $('#create-loading').hide();


      }



      setTimeout(function() {
        $('#snapshotsInnerPlace').html(p);
        
        },500);


      
      

    }