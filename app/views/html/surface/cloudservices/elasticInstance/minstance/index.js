var tableVmList;
var allowVMLTProvisioning = false;
var lengthCVMLT = 10;
var startCVMLT = 0;

var indexMessagesminsL;
  $(function() {
    var langC = localStorage.getItem("langC");
    loadJSONgeneral(function(response) {  
        indexMessagesminsL = JSON.parse(response);      
        callminslFiles();   
      },"app/views/html/surface/cloudservices/elasticInstance/minstance/lang/"+langC+".json");

  

})

function callminslFiles(){

    $('#surfCloader').show();
  sideNavMenuSelector({"menuType":"multiple","main":"instance","sub":"minstance"});
  setTimeout(function() {
    callTableDataMinstance();
  }, 100);

}
function noInstanceIn(){
    $('#nomsintance').show();
    $('#yesmsintance').hide();
    $('#surfCloader').hide();
}
function checkVMLTProvisioning(data){
    data.map(function(elem){
        if(elem.power_status == 0){
            allowVMLTProvisioning = true;
        }
    })    
}
function callTableDataMinstance() {   


    if(commonVMExistC){
       
        formTableMinstance();
        setTimeout(function() {
            $('#surfCloader').hide();
        }, 200);
    }else{
        noInstanceIn();
    }

}

function getVMLTColumns(){
    return [
        /*{
        title: ''
    },
    {
        title: ''
    },*/
    {
        title: indexMessagesminsL.minsl_tbl_column_0,"name": "power_status",
    },
    {
        title:indexMessagesminsL.minsl_tbl_column_1,"name": "host_name",
    },
    {
        title:indexMessagesminsL.minsl_tbl_column_2,"name": "ip_adress",
    },
    {
        title:indexMessagesminsL.minsl_tbl_column_3,"name": "specification",
    },
    {
        title:indexMessagesminsL.minsl_tbl_column_4,"name": "data_center",
    },
    {
        title:indexMessagesminsL.minsl_tbl_column_5,"name": "os_details",
    },
    {
        title:indexMessagesminsL.minsl_tbl_column_6,"name": null,
    }
];
}

function checkProvisioningData(data){
    
    var exist = false;
    if(data){
        data.map(function(elem){
            
            if(elem.power_status == 0){
                exist = true;
            }
        });
       
        if(!exist){
            localStorage.removeItem("provisioningData");
        }
    }
}
function applyIfProvisioning(elem,provisioningData){
    if (elem.power_status == 0) {
        if (provisioningData.length > 0) {
            var matchedN = true;
            provisioningData.map(function(kelem) {
                if (parseInt(kelem.tenant_vm_id) == parseInt(elem.tenant_vm_id)) {
                    matchedN = false;
                    return;
                }
            });
            if (matchedN) {
                elem.percentage = 10;
                provisioningData.push(elem);
            }
        } else {
            elem.percentage = 10;
            provisioningData.push(elem);
        }
        localStorage.setItem("provisioningData", JSON.stringify(provisioningData));
    }
}
function getVMLTParticularStatus(elem,provisioningData){
    //prestate, state, tenantvmid, mtitle, stitle, svalue, ftitle, fbtn
    
    var finalPostStates = "";
    var fstatus = "orange";
    var fstname = indexMessagesminsL.minsl_tbl_vm_status_0;
    var postStates = {
        "poweron": `<li><a onClick="changethisVMstatus('2','power_on','` + elem.tenant_vm_id + `','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_1+`','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_0+`','` + elem.host_name + `','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_1_1+`','`+indexMessagesminsL.minsl_tbl_vm_action_0+`')" href="javascript:void(0);"> `+indexMessagesminsL.minsl_tbl_vm_action_0+`</a></li>`,
        "poweroff": `<li><a onClick="changethisVMstatus('1','power_off','` + elem.tenant_vm_id + `','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_2+`','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_0+`','` + elem.host_name + `','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_2_2+`','`+indexMessagesminsL.minsl_tbl_vm_action_1+`')" href="javascript:void(0);"> `+indexMessagesminsL.minsl_tbl_vm_action_1+`</a></li>`,
        "shutdown": `<li><a onClick="changethisVMstatus('3','shutdown','` + elem.tenant_vm_id + `','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_3+`','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_0+`','` + elem.host_name + `','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_3_3+`','`+indexMessagesminsL.minsl_tbl_vm_action_2+`')" href="javascript:void(0);"> `+indexMessagesminsL.minsl_tbl_vm_action_2+`</a></li>`,
        "reset": `<li><a onClick="changethisVMstatus('4','reset','` + elem.tenant_vm_id + `','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_4+`','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_0+`','` + elem.host_name + `','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_4_4+`','`+indexMessagesminsL.minsl_tbl_vm_action_3+`')" href="javascript:void(0);"> `+indexMessagesminsL.minsl_tbl_vm_action_3+`</a></li>`,
        "suspend": `<li><a onClick="changethisVMstatus('5','suspend','` + elem.tenant_vm_id + `','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_5+`','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_0+`','` + elem.host_name + `','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_5_5+`','`+indexMessagesminsL.minsl_tbl_vm_action_4+`')" href="javascript:void(0);">`+indexMessagesminsL.minsl_tbl_vm_action_4+`</a></li>`,
        "deletedevice": `<li class="divider" tabindex="-1"></li>
        <li><a class="red-text" onClick="changethisVMstatus('6','delete','`+elem.tenant_vm_id+`','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_6+`','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_0+`','`+elem.host_name+`','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_6_6+`','`+indexMessagesminsL.minsl_tbl_vm_action_5+`')" href="javascript:void(0);"> `+indexMessagesminsL.minsl_tbl_vm_action_5+`</a></li>`
    };
    
    if (elem.power_status == 1) {
        fstatus = "red";
        fstname = indexMessagesminsL.minsl_tbl_vm_status_1;
        delete postStates.poweroff;
        delete postStates.shutdown;
        delete postStates.reset;
        delete postStates.suspend;
    } else if (elem.power_status == 2) {
        fstatus = "green";
        fstname = indexMessagesminsL.minsl_tbl_vm_status_2;
        delete postStates.poweron;
        delete postStates.deletedevice;
    } else if (elem.power_status == 3) {
        fstatus = "red";
        fstname = indexMessagesminsL.minsl_tbl_vm_status_3;
        delete postStates.poweroff;

        delete postStates.reset;
        delete postStates.shutdown;
        //delete postStates.reset;
        delete postStates.suspend;        
        delete postStates.deletedevice;


    } else if (elem.power_status == 4) {
        fstatus = "orange";
        fstname = indexMessagesminsL.minsl_tbl_vm_status_4;
        //delete postStates.reset;
        delete postStates.shutdown;
        delete postStates.reset;
        delete postStates.suspend;
        delete postStates.poweroff;
        delete postStates.deletedevice;
    } else if (elem.power_status == 5) {
        fstatus = "grey";
        fstname = indexMessagesminsL.minsl_tbl_vm_status_5;
        delete postStates.suspend;
        delete postStates.shutdown;
        delete postStates.reset;
        delete postStates.suspend;
        //delete postStates.poweroff;
        delete postStates.deletedevice;

    }
    if(elem.power_status == 0 || elem.pendingLoader || elem.currentstate == 7001){
        finalPostStates = ` <div style="cursor:not-allowed;" class="invoice-action">
    <a style="cursor:not-allowed;" href='javascript:void(0);'>
      <span class=""><i class="material-icons dp48">more_horiz</i></span></a>
  </div>
    `;
    }else{

        finalPostStates = ` <div class="invoice-action">
    <a class='dropdown-trigger' href='javascript:void(0);' data-target='action-btn-filter`+elem.tenant_vm_id+`'>
      <span class=""><i class="material-icons dp48">more_horiz</i></span></a>
  </div>
  <!-- Dropdown Structure -->

    <ul id='action-btn-filter`+elem.tenant_vm_id+`' class='dropdown-content'>          
    <li><a href="#minstancedetail?id=`+elem.tenant_vm_id+`" style="color:#3A85BF;">`+indexMessagesminsL.minsl_tbl_vm_action_6+`</a></li>`;
    Object.values(postStates).map(function(selem) {
        finalPostStates += selem;
    });
    
    finalPostStates += `
    <!--<li class="divider" tabindex="-1"></li>
    <li><a class="red-text" onClick="changethisVMstatus('6','delete','`+elem.tenant_vm_id+`','Delete Server ?','Elastic Instance','`+elem.host_name+`','Are you sure you want to Delete server?','Delete')" href="javascript:void(0);"> Delete</a></li>-->
  </ul> `; 

    }
      


    var fstt = `<span class="bullet ` + fstatus + `"></span> ` + fstname;
    if(elem.currentstate == 7009){
        fstt = indexMessagesminsL.minsl_tbl_vm_state_msg_0;
    }

    if (elem.power_status == 0) {




        stateRefresh = true;
        
        
          
                
               
                    if(elem.currentstate == 7002 || elem.currentstate == 7008 ){


                        var thisentmsg = indexMessagesminsL.minsl_tbl_vm_state_msg_1;
                        if(elem.currentstate == 7002 ){
                            thisentmsg = indexMessagesminsL.minsl_tbl_vm_state_msg_1;
                        }else if(elem.currentstate == 7008 ){  
                            thisentmsg = indexMessagesminsL.minsl_tbl_vm_state_msg_1;
                        }


                        finalPostStates = `<button onClick="retrythisVMstatus('` + elem.tenant_vm_id + `','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_7+`','`+indexMessagesminsL.minsl_tbl_vm_action_alert_state_7_7+`','`+indexMessagesminsL.general_lbl_yes+`')" type="button" class="btn btn-retry waves-effect waves-light"><i class="fa fa-refresh btn-retry-i fs-16" aria-hidden="true"></i> `+indexMessagesminsL.general_lbl_retry+`</button>`;
                        
                        fstt = `<div class="pro-failed">
                        <div class="mt-8 blue-text">`+thisentmsg+`</div>
                        <div class="stripes-width stripesLoader" style="background-position:100%;background-color: orange"></div>
                        <span class="float-right blue-text fs-12"><img src="app/views/html/surface/cloudservices/elasticInstance/minstance/img/warning.png" width="18" height="18" alt="warning" /></span>
                      </div>`;
                     }else {
                        
            if(elem.currentmsg == "null" || elem.currentmsg == "" && elem.currentmsg == null || elem.currentmsg == undefined){
                elem.currentmsg = "";
            }
            elem.currentmsg = indexMessagesminsL.minsl_tbl_vm_status_0;
            if(elem.currentstate == 7001 ){
                elem.currentmsg = indexMessagesminsL.minsl_tbl_vm_state_msg_2;
            }else if(elem.currentstate == 7005 ){  
                elem.currentmsg = indexMessagesminsL.minsl_tbl_vm_state_msg_3;
            }else if(elem.currentstate == 7006 ){  
                elem.currentmsg = indexMessagesminsL.minsl_tbl_vm_state_msg_4;
            }else if(elem.currentstate == 7007 ){  
                elem.currentmsg = indexMessagesminsL.minsl_tbl_vm_state_msg_5; 
                
                
            }else if(elem.currentstate == 7009){
                elem.currentmsg = indexMessagesminsL.minsl_tbl_vm_state_msg_6;
            }else if(elem.currentstate == 7010 ){  
                elem.currentmsg = indexMessagesminsL.minsl_tbl_vm_state_msg_7;
            }else if(elem.currentstate == 7011 ){  
                elem.currentmsg = indexMessagesminsL.minsl_tbl_vm_state_msg_8;

                
            }else{
                elem.currentmsg = indexMessagesminsL.minsl_tbl_vm_status_0;
            }   
            
                        fstt = `<div class="mt-8 blue-text">`+elem.currentmsg+`</div>
                        <div class="stripes-width stripesLoader" style="background-position:` + parseFloat(elem.vmpercentage) + `%;background-color: orange"></div>
                        <span class="float-right blue-text fs-12">` + parseFloat(elem.vmpercentage) + `%</span>`;
                    }
                   
              
           
        


        

    }else{
        if (elem.currentstate == 7001 ) {
            
            if(elem.currentmsg == "null" || elem.currentmsg == "" && elem.currentmsg == null || elem.currentmsg == undefined){
                elem.currentmsg = "";
            }
    
    
            fstt = `<div class="mt-8 blue-text"> `+elem.currentmsg+` `+indexMessagesminsL.minsl_tbl_vm_state_msg_9+`</div>
      <div class="stripes-width stripesLoader" style="background-position:50%;background-color: blue"></div>
      <span class="float-right blue-text fs-12">50%</span>`;
        }
    }



    
   
   
    return {"fstt":fstt,"finalPostStates":finalPostStates};
}  

function getDesignVMLT(finalPostStates,fsttnew,elem){
    
    var abc = [
        //'',
        //'',
        fsttnew,
        `<a class="blue-text" href="#minstancedetail?id=`+elem.tenant_vm_id+`">` + elem.host_name + `</a>`,
        `<a class="blue-text" href="#minstancedetail?id=`+elem.tenant_vm_id+`">` + elem.ip_adress + `</a>`,
        elem.specification,
        `<span><img src="app/views/html/surface/cloudservices/elasticInstance/minstance/img/saudiflag.png" width="20" height="20" alt="saudiflag"></span>` + elem.data_center,
        `<span><img src="app/views/assets/img/os-image/`+elem.os_logo_name+`" width="20" height="20" alt="`+elem.os_logo_name+`"></span>` + elem.os_details,
        finalPostStates
    ]
    
    return abc;
} 
var stateRefreshSt = false;
function callBackVMLTAjax(){
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
   
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    var reqParams = {
        'from':'minstance',
        'secudeco':$('#establish_minstance_status').val(),
        'portal': 'minstance',
        'portalsubmit': 'level_1',
        'tenant_id': dcc_siginin_info.tenant_id
    };
    return {
        data: reqParams,
        url: 'app/views/html/surface/cloudservices/elasticInstance/minstance/index.php',
        type: 'POST',
        dataFilter: function(data) { 
            
            var json = jQuery.parseJSON(data);                
           
            json.recordsTotal = JSON.parse(json.data).totalRecords;
            json.recordsFiltered = JSON.parse(json.data).totalRecords;
            json.data = JSON.parse(json.data).data;

            var commonDataJson = [];                
            if (json.data.length == 0) {
                
                return JSON.stringify({
                    data: []
                });
            }
            var provisioningData = ((JSON.parse(localStorage.getItem("provisioningData"))) ? JSON.parse(localStorage.getItem("provisioningData")) : []);
            var storedStateVMList = ((JSON.parse(localStorage.getItem("storedStateVMList")))?JSON.parse(localStorage.getItem("storedStateVMList")):[]);                   
            localStorage.setItem("vmAllDetails",JSON.stringify(json.data));
            json.data = getfilteredLoadTableMins(storedStateVMList,json.data); 
            stateRefreshSt = false;
           
           checkVMLTProvisioning(json.data)
            json.data.map(function(elem) { 
                
                if(elem.currentstate == 7001 || elem.power_status == 0){
                
                    stateRefreshSt = true;
                }
               
                var fsttnewComm = getVMLTParticularStatus(elem,provisioningData);   
                                
                var finalDJs = getDesignVMLT(fsttnewComm.finalPostStates,fsttnewComm.fstt,elem);
                commonDataJson.push(finalDJs);
            });            

                       
            json.data = commonDataJson;
            return JSON.stringify(json); 
        },
        error: function(xhr, error, thrown) {
            
            
        }
    }
}
function formTableMinstance() {

    /*if(tableVmList != undefined){
        tableVmList.destroy();
    }*/
    var p = `
    <h4 class="card-title" style="position: absolute;">`+indexMessagesminsL.minsl_title+`</h4>
                        <a class="invoice-add-icon" href="#cinstance"><i class="material-icons dp48 table-header table-add-icon fs-30">add_circle</i></a>
    <div class="responsive-table" id="applyMinstanceDataOverall">
    <table id="uniqueVmListTable" class="table invoice-data-table striped highlight white border-radius-4 pt-1"></table>
    </div>
    `;  
    $('#applyMinstanceDataOverall').html(p);  
    $(".dropdown-trigger").dropdown();          
    tableVmList = $('#uniqueVmListTable').DataTable({
        responsive:true,
        
       //"stateSave": true,
  "stateLoadParams": function (settings, data) {
    data.search.search = "";
  },
        serverSide: true,
        columns: getVMLTColumns(),
        drawCallback: function () {
            //console.log("coming");
            loadVMLTforProvisioning();    
            $(".dropdown-trigger").dropdown();          
            var api = this.api();
            
            
            startCVMLT = api.page.info().start;
           lengthCVMLT = api.page.info().length;

           $('#applyMinstanceDataOverall').show();  
           $('#applyMinstanceDataOverallSkel').hide();  
           
           
          },
        initComplete: function(settings, json) {
            
            //console.log("coming");
            
            $(".dropdown-trigger").dropdown();  
                
          },
          updateCount: function()
{
    
},
        ajax: callBackVMLTAjax(),
        lengthMenu: [
            [10, 25, 50, -1],
            [10, 25, 50, 'All'],
        ],
        
        "bStateSave": true,
        /*"fnStateSave": function (oSettings, oData) {
            localStorage.setItem('DataTables_'+'_vmlistT_' + settings.sInstance, JSON.stringify(oData));
        },
        "fnStateLoad": function (oSettings) {
            return JSON.parse(localStorage.getItem('DataTables_'+'_vmlistT_' + settings.sInstance));
        },*/
        search: {
            return: true,
        },

            lengthChange: true,
        displayStart: startCVMLT,
        pageLength: lengthCVMLT,
        dom: '<"top display-flex mb-2"<"action-filters"f><"actions action-btns display-flex align-items-center">><"clear">rt<"bottom"i p>',
        language: commonDatatableLangC({"searchPlaceholder":indexMessagesminsL.minsl_datatable_search_label,"searchVal":false}),
        
        columnDefs: [
           // { responsivePriority: 1, targets: 0,  className: "control" ,"orderable": false},
            { responsivePriority: 1, targets: 0},
            
		            { responsivePriority: 2, targets: 6, orderable:false },
            
            /*{
              targets: [0, 1],
              orderable: false
            },
            {  targets: 1,"orderable": false},
            { "orderable": false, "targets": 6 },*/
          ],
        
       /* select: {
            style: "multi",
            selector: "td:first-child>",
            items: "row"
        },*/
        order: [
            [6, 'asc']
        ]/*,
        responsive: {
            details: {
                
              type: "column",
              target: 0
            }
          }*/
    });
    

    //tableVmList.search('').draw();
    var invoiceFilterAction = $(".invoice-filter-action");
    var invoiceCreateBtn = $(".invoice-create-btn");  
    $(".action-btns").append(invoiceFilterAction, invoiceCreateBtn);
    $('.dropdown-button').dropdown({
        constrainWidth: false, 
        closeOnClick: false
    });  
    $('#filter-btn-skeleton-secmins').hide();  
    
    
    
   
}
var myIntervalVMLT;
var checkinitialStatePr = false;
function loadVMLTforProvisioning(){
   // console.log("coming");
    //console.log(stateRefreshSt);
    if( stateRefreshSt){
        
        //myIntervalVMLT = setInterval(function() {  
            if (getMyScr() == "#minstance") {
               // console.log("coming");
                
                setTimeout(function(){
                  //  console.log("coming");
                    //if(checkinitialStatePr){
                        
                            tableVmList.ajax.reload(null, false);  
                      
                        
                   // }
                    //checkinitialStatePr = true;
                    
                }, 20000);
                 
                
                
            }  
       // }, 45000);
    }    
}
function retrythisVMstatus(tenantvmid,mtitle,ftitle,fbtn){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger retrycancelSwt',
            denyButton: 'btn btn-danger retrycancelSwt'
        },
        buttonsStyling: false
    })
  
    swalWithBootstrapButtons.fire({
        title: mtitle,
        text: "You won't be able to revert this!",
        html: `<p id="retrymsgSwt">` + ftitle + `  </p> `,
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: fbtn,
        denyButtonText: indexMessagesminsL.general_delete_btn,
        showCancelButton: false,
        showCloseButton: true
    }).then((result) => {
        if (result.isConfirmed) {
           

            setTimeout(function() {
            postretrythisVMstatus(tenantvmid);
            },200);    

        } else if (result.isDenied) {
            setTimeout(function() {
                cancelretrythisVMstatus(tenantvmid);
                },200);
        }
    })
}

function postretrythisVMstatus(tenantvmid){
    var provisioningData = ((JSON.parse(localStorage.getItem("provisioningData"))) ? JSON.parse(localStorage.getItem("provisioningData")) : []);
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
  
  var loguserInfo = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 

  let reqParams = {
    'from':'minstance',
    'secudeco':$('#establish_minstance_status').val(),
      'user_serial_id': loguserInfo.user_serial_id,            
      'tenant_id': loguserInfo.tenant_id, 
      'tenantvmid': tenantvmid,  
      'portal': 'minstance',     
      'portalsubmit': 'level_3'
  };

  var data = ajaxDuty(reqParams, 'app/views/html/surface/cloudservices/elasticInstance/minstance/index.php', 'html', false);
  if (data) {
      data = JSON.parse(data);
      if (data.code == 200) {
          if (provisioningData) {
              if (provisioningData.length > 0) { 
                
                  for (var i = 0; i < provisioningData.length; i++) {
                      if (parseInt(provisioningData[i].tenant_vm_id) == parseInt(tenantvmid)) {
                        provisioningData[i].retryProvisioning = false;
                        provisioningData[i].percentage = 10;
                      }
                  }
                  
              }
          }
          localStorage.setItem("provisioningData", JSON.stringify(provisioningData));
          indexToastr("success", 'success', indexMessagesminsL.minsl_tbl_message_retry_success, {
              timeOut: 5000
          });
          setTimeout(function() {
            tableVmList.ajax.reload(null, false);  
            //tableVmList.ajax.reload(dropdownFunsVMLT);  
          }, 200);
      } else {
          indexToastr("error", 'Error', indexMessagesminsL.minsl_tbl_message_error_occured, {
              timeOut: 5000
          });
      }

  }

}
var removeByAttrHereLVM = function(arr, attr, value){
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);

       }
    }
    return arr;
}

function cancelretrythisVMstatus(tenantvmid){
    var provisioningData = ((JSON.parse(localStorage.getItem("provisioningData"))) ? JSON.parse(localStorage.getItem("provisioningData")) : []);
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
  
  var loguserInfo = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 

  let reqParams = {
    'from':'minstance',
    'secudeco':$('#establish_minstance_status').val(),
      'user_serial_id': loguserInfo.user_serial_id,            
      'tenant_id': loguserInfo.tenant_id,
      'tenantvmid': tenantvmid,
      'portal': 'minstance',
      'portalsubmit': 'level_4'
  };

  var data = ajaxDuty(reqParams, 'app/views/html/surface/cloudservices/elasticInstance/minstance/index.php', 'html', false);

  if (data) {
      data = JSON.parse(data);
      if (data.code == 200) {
          if (provisioningData) {
              if (provisioningData.length > 0) { 
                
                  for (var i = 0; i < provisioningData.length; i++) {
                      if (parseInt(provisioningData[i].tenant_vm_id) == parseInt(tenantvmid)) {
                      
                       removeByAttrHereLVM(provisioningData,"tenant_vm_id",parseInt(tenantvmid));
                      }
                  }
                  
              }
          }
          localStorage.setItem("provisioningData", JSON.stringify(provisioningData));
          indexToastr("success", 'success', indexMessagesminsL.minsl_tbl_message_retry_success, {
              timeOut: 5000
          });
          setTimeout(function() {
           // tableVmList.ajax.reload(null, false);  

            var cvalue = tableVmList.page.info().recordsTotal - tableVmList.page.info().start;
          
          
          cvalue = cvalue-1;
          if(cvalue > 0){
            
            tableVmList.state.clear();
            tableVmList.ajax.reload(null, false);  
          }else{
            
            tableVmList.state.clear();
            tableVmList.ajax.reload(dropdownFunsVMLT);  
          }

            //tableVmList.ajax.reload(dropdownFunsVMLT);  
          }, 200);
      } else {
          indexToastr("error", 'Error', indexMessagesminsL.minsl_tbl_message_error_occured, {
              timeOut: 5000
          });
      }

  }

}

function changethisVMstatus(prestate, state, tenantvmid, mtitle, stitle, svalue, ftitle, fbtn) {
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
        html: stitle + ` : <span class="black-text swal2-text-highlight">` + svalue + `</span> </br> ` +
            `<p>` + ftitle + `  </p> `,
        icon: 'warning',
        confirmButtonText: fbtn,
        showCancelButton: true,
        cancelButtonText: indexMessagesminsL.general_cancel_btn,
    }).then((result) => {
        if (result.isConfirmed) {
           

            setTimeout(function() {
            postchangethisVMstatus(prestate, state, tenantvmid);
            },200);    

        }
    })
  
  
  
  
}
var dropdownFunsVMLT = function (){
    
    $(".dropdown-trigger").dropdown()
}


function postchangethisVMstatus(prestate, state, tenantvmid) {
  var storedStateVMList = ((JSON.parse(localStorage.getItem("storedStateVMList"))) ? JSON.parse(localStorage.getItem("storedStateVMList")) : []);  
  var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
  
  var loguserInfo = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 

  let reqParams = {
    'from':'minstance',
    'secudeco':$('#establish_minstance_status').val(),
      'user_serial_id': loguserInfo.user_serial_id,
      'options': "",
      'action': state,
      'tenantvmid': tenantvmid,
      'portal': 'minstanceDetail',
      'portalsubmit': 'level_6'
  };

  var data = ajaxDuty(reqParams, 'app/views/html/surface/cloudservices/elasticInstance/minstance/detail/index.php', 'html', false);
  if (data) {
    
      data = JSON.parse(data);
      
      if (data.code == 204 || data.data.status_code == 9000) {
          if (storedStateVMList) {
              if (storedStateVMList.length > 0) { 
                var founderVMLT =true;                 
                  for (var i = 0; i < storedStateVMList.length; i++) {
                      if (parseInt(storedStateVMList[i].tenantvmid) == parseInt(tenantvmid)) {
                        founderVMLT =false;
                          storedStateVMList[i].prestate = prestate;
                      }
                  }
                  if(founderVMLT){
                    storedStateVMList.push({
                        "prestate": prestate,
                        "tenantvmid": tenantvmid
                    });
                  }
              } else {                  
                  storedStateVMList.push({
                      "prestate": prestate,
                      "tenantvmid": tenantvmid
                  });
              }
          }
          localStorage.setItem("storedStateVMList", JSON.stringify(storedStateVMList));
          indexToastr("success", 'success', indexMessagesminsL.minsl_tbl_message_status_up_success, {
              timeOut: 5000
          });
          setTimeout(function() {
            tableVmList.ajax.reload(null, false);  
           // tableVmList.ajax.reload(dropdownFunsVMLT);  
          }, 200);
      } else {
          indexToastr("error", 'Error', indexMessagesminsL.minsl_tbl_message_error_occured, {
              timeOut: 5000
          });
      }

  }

}

function getfilteredLoadTableMins(part, list) {
  for (var j = 0; j < part.length; j++) {
      var ptenantvmid = parseInt(part[j].tenantvmid);
      var ppowerstate = parseInt(part[j].prestate);
      for (var i = 0; i < list.length; i++) {
          var mptenantvmid = parseInt(list[i].tenant_vm_id);
          var mppowerstate = parseInt(list[i].power_status);
          if ((ptenantvmid == mptenantvmid)) {              
              if ((ppowerstate == mppowerstate)) {                  
                  list[i].pendingLoader = false;
                  list[i].prestate = null;
                  
                  part[j] = {};

              } else {                  
                  list[i].pendingLoader = true;
                  list[i].prestate = ppowerstate;
              }
          }

      }
  }
  if (part.length == 1 && part[0] == null) {
      part = [];
  }
  localStorage.setItem("storedStateVMList", JSON.stringify(part));
  return list;
}

