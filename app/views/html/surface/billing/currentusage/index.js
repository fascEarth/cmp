var commonKeysBUT = {
  'VM Instances':"vminstance",
  'VM Snapshots':"vmsnapshots",
  'Storages':"storages",
  'Public IPv4 Address':"publicipv4address",
  'Internet Bandwidth':"internetbandwidth",
  'Operating Systems':"os",
  'total':"total",
};

var reversecommonKeysBUT = {
  "vminstance":"VM Instances",
  "vmsnapshots":"VM Snapshots",
  "storages":"Storages",
  "publicipv4address":"Public IPv4 Address",
  "internetbandwidth":"Internet Bandwidth",
  "os":"Operating Systems",
  "total":"Total",
};






var incommonKeysBUT = {
  "vminstance":"vminstances",
  "vmsnapshots":"snapshots",
  "storages":"storages",
  "publicipv4address":"ipaddress",
  "internetbandwidth":"internetbandwidth",
  "os":"operatingsystem"
};



var tableBUTvminstance;
var tableBUTvmsnapshots;
var tableBUTstorages;
var tableBUTpublicipv4address;
var tableBUTinternetbandwidth;
var tableBUTos;


var paginateBUTvminstance = false;
var paginateBUTvmsnapshots = false;
var paginateBUTstorages = false;
var paginateBUTpublicipv4address = false;
var paginateBUTinternetbandwidth = false;
var paginateBUTos = false;



var lengthBUTvminstance = 10;
var lengthBUTvmsnapshots = 10;
var lengthBUTstorages = 10;
var lengthBUTpublicipv4address = 10;
var lengthBUTinternetbandwidth = 10;
var lengthBUTos = 10;




var startBUTvminstance = 0;
var startBUTvmsnapshots = 0;
var startBUTstorages = 0;
var startBUTpublicipv4address = 0;
var startBUTinternetbandwidth = 0;
var startBUTos = 0;


var skeletonCommonLoad = true;
$(document).ready(function(){

    var mainPage = "currentusage";   
    
      $('.csidenavtitles').removeClass("active");
      $('.csidenavtitles a').removeClass("active");
      $('#'+mainPage+"Main").addClass("active");
      $('#'+mainPage+"Main a").addClass("active");
        
      
      
      surfBillingCurUsage();    
  });

  function surfBillingCurUsage(){
    surfBillingCurUsageControls();
    initBillingCurUsage();
  }

  function surfBillingCurUsageControls(){
    $('.estimatedcost-collapsible').collapsible({ 
        accordion: false
    });
       

    


  }



function expandAll(){
    $('#expandAll').hide();
    $('#collapseAll').show();
    $(".estimate-collapse").addClass("active");
    $(".estimatedcost-collapsible").collapsible({accordion: false});

    CallAllBillingUsageTbls();
}

function collapseAll(){
    $('#expandAll').show();
    $('#collapseAll').hide();
    
      $(".estimate-collapse").removeClass(function(){
        return "active";
      });
      $(".estimatedcost-collapsible").collapsible({accordion: true});
      $(".estimatedcost-collapsible").collapsible({accordion: false});
      CollAllBillingUsageTbls();
}
  
function initBillingCurUsage(){
  var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
  var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
  
  let reqParams = {
    'from':'currentusage',
    'secudeco':$('#establish_billingCurrentUsage_formSubmit').val(),
   'tenantId':dcc_siginin_info.tenant_id,
   'expandfilter':"default",
   'data':JSON.stringify(
      { 
        'expandfilter':"default",        
      "customerId": dcc_siginin_info.tenant_id,
        "userId":dcc_siginin_info.user_serial_id
      }
    ),
    'portal':'currentusage',
    'portalsubmit':'level_1',
    'zone': Intl.DateTimeFormat().resolvedOptions().timeZone,
    'start':0,
    'length':10
  };
  var data = ajaxDuty(reqParams, 'app/views/html/surface/billing/currentusage/index.php', 'html', false);
  if (data) {        
    
    data = JSON.parse(data);
    data = JSON.parse(data.data);
  
    for(var i=0;i<Object.keys(data.message).length;i++){
      
      var caps = Object.keys(data.message)[i];
      
        var valP = Object.values(data.message)[i];
        var fcaps = commonKeysBUT[caps];
        fixAllCapVals(caps,fcaps,valP);
        
      
    }
    
    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();    
    var firstDay = new Date(year, date.getMonth(), 1).getDate();
    let currentDate = `${month} ${firstDay} - ${day}, ${year}`;
    
    $('#currentusageDate').html(currentDate);

    setTimeout(function(){
      if(data.status == "ok" && data.message){
        var twoPlacedFloatTotal = parseFloat(data.message.total).toFixed(2);
        $('#currentusageTotalTop').html(twoPlacedFloatTotal);
        $('#currentusageTotalBottom').html(twoPlacedFloatTotal);
        setTimeout(function(){
          $('#currentusage_org_default').show();  
            $('#currentusage_skel_default').hide(); 
          $('#collapsible-div-vminstance').click();
          },500);
      }
     
      
    },500);

  }else{
   
  }

}
function fixAllCapVals(aVal,bVal,cVal){
  
  if($("#collapsible-count-"+bVal).length >0){
    
    
    var emVal = cVal.totalCount;
    if(emVal >0){
      if(emVal >10){
        window['paginateBUT'+bVal] = true;
      }
      
      $("#collapsible-count-"+bVal).html(emVal);
      $("#collapsible-count-"+bVal).show();
    }
    
  }
  if($("#header-cost-"+bVal).length >0){
    var cmVal = parseFloat(cVal.totalCost).toFixed(2);
    if(cmVal >0){
      $("#header-cost-"+bVal).html(cmVal);
      $("#header-cost-"+bVal).show();
    }
    
  }
}
function CallAllBillingUsageTbls(){

  setTimeout(function(){
  CallParticularBillingUsageTbls("vminstance");
  setTimeout(function(){
    CallParticularBillingUsageTbls("vmsnapshots");
    setTimeout(function(){
      CallParticularBillingUsageTbls("storages");
      setTimeout(function(){
        CallParticularBillingUsageTbls("publicipv4address");
        setTimeout(function(){
          CallParticularBillingUsageTbls("internetbandwidth");
          setTimeout(function(){
            CallParticularBillingUsageTbls("os");
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 500);

}

function CollAllBillingUsageTbls(){

  
  collapseEverythingBUT("vminstance");
  
    collapseEverythingBUT("vmsnapshots");
    
      collapseEverythingBUT("storages");
      
        collapseEverythingBUT("publicipv4address");
        
          collapseEverythingBUT("internetbandwidth");
          
            collapseEverythingBUT("os");
         

}

function expandEverythingBUT(selectedType){
  $('#collapsible-body-org-'+selectedType).hide();
  $('#collapsible-body-skeleton-'+selectedType).show();

  $('#collapsible-body-type-'+selectedType).show();
  $('#collapsible-div-'+selectedType).removeAttr("onClick");
  
}
function collapseEverythingBUT(selectedType){
  $('#collapsible-div-'+selectedType).attr("onClick","CallParticularBillingUsageTbls('"+selectedType+"')");
  $('#collapsible-body-org-'+selectedType).hide();
  $('#collapsible-body-skeleton-'+selectedType).show();
  $('#collapsible-body-type-'+selectedType).hide();
 
}
function CallParticularBillingUsageTbls(selectedType){
  expandEverythingBUT(selectedType);

getAllBUTKeys(selectedType);
}








function getAllBUTKeys(selectedType) {
  
    initSecButTable(selectedType);
}

var dropdownSecButTable = function (){
    
    $(".dropdown-trigger-but").dropdown()
}


function getSecButTable(selectedType){
  var DurationLabel = "Hours";  
  if(selectedType == "storages" || selectedType == "publicipv4address" || selectedType == "vmsnapshots" ){
    DurationLabel = "Month";
  }

    return [
      
        
    {
        title: 'Name', name: 'name'
    },
    {
        title: DurationLabel, name: 'hours'
    },     
    {
        title: 'Start (UTC)', name: 'start'
    },
    {
      title: 'End (UTC)', name: 'end'
  },
  {
    title: 'Cost', name: 'cost'
}
  ];
  }

function callBackSecButTable(selectedType){
  var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
   var setterPas = incommonKeysBUT[selectedType];
    
    
    return {
      "data": function(d){
        
  
        d.from = 'currentusage';
        d.secudeco = $('#establish_billingCurrentUsage_formSubmit').val();
        d.portal =  'currentusage';
        d.portalsubmit =  'level_1';
        d.userserialid =  dcc_siginin_info.user_serial_id;
        d.tenantId =  dcc_siginin_info.tenant_id;
        d.expandfilter =  setterPas;
        d.zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        },
        
        url: 'app/views/html/surface/billing/currentusage/index.php',
        type: 'POST',
        dataFilter: function(data) {      
          
           var json = {};
            var sungD = reversecommonKeysBUT[selectedType];
            var jsonolder = jQuery.parseJSON(data);                
          
            
            json.data = JSON.parse(jsonolder.data).message[sungD].details;
            json.recordsTotal = ((JSON.parse(jsonolder.data).message[sungD].totalCount)?JSON.parse(jsonolder.data).message[sungD].totalCount:0);
            json.recordsFiltered = ((JSON.parse(jsonolder.data).message[sungD].totalCount)?JSON.parse(jsonolder.data).message[sungD].totalCount:0);
            
            var commonDataJson = [];                
           
            json.data.map(function(elem) { 
               
                                
                var finalDJs = getDesignSecButTable(setterPas,elem,selectedType);
                commonDataJson.push(finalDJs);
            });            
  
                       
            json.data = commonDataJson;
            return JSON.stringify(json); 
        }
    }
  }

  function getDesignSecButTable(filter,elem,selectedType){
   
   var pcost = elem.cost;
     if(elem.cost){
      pcost = parseFloat(elem.cost).toFixed(2);
      if(filter == "storages"){
        pcost = parseFloat(elem.cost).toFixed(4);
      }
      
     }

     var pstart = elem.start.split(":");
     var apstart = pstart[0]+":"+pstart[1];
     var pend = elem.end.split(":");
     var apend = pend[0]+":"+pend[1];

    var abc = [
        
        elem.name,
        elem.hours,
        apstart,
        apend,
        pcost
    ]
    
    return abc;

  }


  
function initSecButTable(selectedType){
  
  
  
  
    if(window['tableBUT'+selectedType] != undefined){
        window['tableBUT'+selectedType].destroy();
    }
    
    
      
    window['tableBUT'+selectedType] = $('#common-but-datatable-'+selectedType).DataTable({
        responsive:true,
    serverSide: true,
    columns: getSecButTable(selectedType),
    columnDefs: [
        { responsivePriority: 1, targets: 0},
             
                     { responsivePriority: 2, targets: 2 }],
    drawCallback: function () {
        dropdownSecButTable();
        var api = this.api();
        window['lengthBUT'+selectedType] = api.page.info().start;
        window['startBUT'+selectedType] = api.page.info().length;
       
       
      },
    initComplete: function(settings, json) {  
      
        dropdownSecButTable();
        $('#collapsible-body-org-'+selectedType).show();  
        $('#collapsible-body-skeleton-'+selectedType).hide();  
        if(skeletonCommonLoad){
          setTimeout(function(){
          skeletonCommonLoad = false;
          
          
          },200); 
        }
        
        
      },
    ajax: callBackSecButTable(selectedType),
    lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, 'All'],
    ],
    //"ordering": false,
    "bPaginate": window['paginateBUT'+selectedType], 
    "bStateSave": true,
    "fnStateSave": function (oSettings, oData) {
        localStorage.setItem('offersDataTablesButKeys'+selectedType, JSON.stringify(oData));
    },
    "fnStateLoad": function (oSettings) {
        return JSON.parse(localStorage.getItem('offersDataTablesButKeys'+selectedType));
    },
    search: {
        return: true,
    },

        lengthChange: true,
    displayStart: window['startBUT'+selectedType],
    pageLength: window['lengthBUT'+selectedType],
    dom: '<"top display-flex mb-2"<"action-filters"f><"actions action-btns display-flex align-items-center">><"clear">rt<"bottom"i p>',
    
    language: {
        search: "",
        searchPlaceholder: "Search "+reversecommonKeysBUT[selectedType]
    },
   
    /*order: [
        [1, 'asc']
    ]*/
});


var invoiceFilterAction = $(".invoice-filter-action");
var invoiceCreateBtn = $(".invoice-create-btn");  
var filterButton = $(".filter-btn");
$(".action-btns").append(invoiceFilterAction, invoiceCreateBtn);
$(".dataTables_filter label").append(filterButton);
$('.dropdown-button').dropdown({
    constrainWidth: false, 
    closeOnClick: false
});  



}



