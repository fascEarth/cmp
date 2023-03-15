var lengthCVMLTInvoices = 10;
var startCVMLTInvoices = 0;
var tableVmListInvoices;
var filterValInv = "";
var currentInvData = [];
$(function(){
    var mainPage = "invoices";    
    $('.csidenavtitles').removeClass("active");
    $('.csidenavtitles a').removeClass("active");
    $('#'+mainPage+"Main").addClass("active");
    $('#'+mainPage+"Main a").addClass("active");
    surfCpaymethInvoices();
  
})

function generateOverallTopCardInv(){
  var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
  var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
  
  
 
    let reqParams = {
      'from':'invoices',
      'secudeco':$('#establish_invoices_status').val(),
      'portal': 'invoices',
      'tenantid':dcc_siginin_info.tenant_id,
      
       
       'portalsubmit':'level_5'
     };
     var data = ajaxDuty(reqParams, 'app/views/html/surface/billing/invoices/index.php', 'html', false);
     if (data) {        
      
       data = JSON.parse(data);
       
       if(data.code == 200){
        
        data = JSON.parse(data.data);
        
        if(data.status == "ok"){
          var kdata = JSON.parse(data.message);
          var lastinvVal = kdata.lastInvoice+` <span>SAR</span>`;
          var pendingAmtVal = kdata.pendingAmount+` <span>SAR</span>`;

          lastinvVal = ((numberWithCommas(lastinvVal))?numberWithCommas(lastinvVal):"0");

          pendingAmtVal = ((numberWithCommas(pendingAmtVal))?numberWithCommas(pendingAmtVal):"0");


          $('#lastinvVal').html(lastinvVal);
          $('#pendingAmtVal').html(pendingAmtVal);
        }
        if(data.errorCode == "1000"){
          
        }else if(data.errorCode == "1001"){  
        
        
        }
       
        
        
       }else{
        
       
       }
       

   
     }else{
      
      
     }
}


var cartId = "";
var cardIdDetails = {};
var stateDetails = {};
var cardIdDetailsKeys = [];
function surfCpaymethInvoices(){
generateOverallTopCardInv();
var urlString = window.location.href;
var paramString = urlString.split('?')[1];
var queryString = new URLSearchParams(paramString);



for (let pair of queryString.entries()) {
  cardIdDetailsKeys.push(pair[0]);
  if(pair[0] == "id"){
    cardIdDetails.id = pair[1]; 
  }else if(pair[0] == "ref"){
    cardIdDetails.ref = pair[1]; 
  }else if(pair[0] == "state"){
    stateDetails.state = pair[1];
  }   
   
}
if(cardIdDetailsKeys.length>0){
  if(cardIdDetailsKeys.includes("state") && stateDetails.state == "cancel"){
    initInvoices();
  }else{
    cartId = cardIdDetails.id;
    applyPaymentDesignInvoices();
  }
}else{
  initInvoices();
}

}


function applyPaymentDesignInvoices(){
  var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
  var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
  var cartCardDetails = ((JSON.parse(localStorage.getItem("cartCardDetailsSurfaceInvoice")))?JSON.parse(localStorage.getItem("cartCardDetailsSurfaceInvoice")):false);
  
 
    let reqParams = {
      'from':'invoices',
      'secudeco':$('#establish_invoices_status').val(),
      'portal': 'invoices',
      'tenantid':dcc_siginin_info.tenant_id,
      'userserialid':dcc_siginin_info.user_serial_id,
      'cartId':cartId,   
       
       'portalsubmit':'level_4'
     };
     var data = ajaxDuty(reqParams, 'app/views/html/surface/billing/invoices/index.php', 'html', false);
     if (data) {        
       
       data = JSON.parse(data);
       
       if(data.code == 200){
        localStorage.setItem("cartCardDetailsSurfaceInvoice",data.data);
        data = JSON.parse(data.data);
        
        if(data.errorCode == "1000"){
          
        }else if(data.errorCode == "1001"){  
          indexToastr("error",'Error','Invalid Credit Card!',{timeOut: 5000});
         
        }
        initInvoices();
        
        
       }else{
        indexToastr("error",'Error','Error Occured! Contact Administrator.',{timeOut: 5000});
       
       }
       

   
     }else{
      indexToastr("error",'Error','Error Occured! Contact Administrator.',{timeOut: 5000});
      initInvoices();
     }
 
  
  
}


function getVMLTColumnsInvoices(){



  return [
  {
      title: 'Invoice Number',"name": "invoiceNo",
  },
  {
      title: 'Date',"name": "invoiceDate",
  },
  {
      title: 'Amount',"name": "invoiceAmount",
  },
  {
      title: 'Payment Method',"name": "invoicePaymentMethod",
  },
  {
      title: 'Balance',"name": "invoiceBalance",
  },
  {
      title: 'Status',"name": "invoiceStatus",
  },
  {
      title: 'Action',"name": "Action",
  }
];
}


function callBackVMLTAjaxInvoices(){
  var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
  var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
  var reqParams = {
      'from':'invoices',
      'secudeco':$('#establish_invoices_status').val(),
      'portal': 'invoices',
      'portalsubmit': 'level_1',
      'tenant_id': dcc_siginin_info.tenant_id,
      'customFilter':$('#establish_common_formSubmit').val()      
  };
  
  return {
    "data": function(d){
      

      d.from = 'invoices';
      d.secudeco = $('#establish_invoices_status').val();
      d.portal =  'invoices';
      d.portalsubmit =  'level_1';
      d.tenant_id =  dcc_siginin_info.tenant_id;
      d.customFilter = filterValInv;  
      },
      
      url: 'app/views/html/surface/billing/invoices/index.php',
      type: 'POST',
      dataFilter: function(data) {                
        
          var json = jQuery.parseJSON(data);                
          
          json.recordsTotal = JSON.parse(json.data).totalRecords;
          json.recordsFiltered = JSON.parse(json.data).totalRecords;
          json.data = JSON.parse(json.data).data;

          var commonDataJson = [];                
          currentInvData = json.data;
          json.data.map(function(elem) { 
             
                              
              var finalDJs = getDesignVMLT(elem);
              commonDataJson.push(finalDJs);
          });            

                     
          json.data = commonDataJson;
          return JSON.stringify(json); 
      }
  }
}

function DownloadFile(fileName) {
  
  if(fileName == "" || fileName == "-"){
    indexToastr("error",'Error','Invoice not generated !',{timeOut: 5000});
    
    return;
  }
  
  var url = window.location.origin +"/"+ fileName;
  var downloadFlname = "invoice_"+new Date().getTime()+".pdf";
  
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.responseType = "blob";
  req.onload = function () {
      
      var blob = new Blob([req.response], { type: "application/octetstream" });

      
      var isIE = false || !!document.documentMode;
      if (isIE) {
          window.navigator.msSaveBlob(blob, fileName);
      } else {
          var url = window.URL || window.webkitURL;
          link = url.createObjectURL(blob);
          var a = document.createElement("a");
          a.setAttribute("download", downloadFlname);
          
          a.setAttribute("href", link);
          document.body.appendChild(a);
          a.click();
         
          document.body.removeChild(a);
      }
  };
  req.send();
};



function modalPaymentInfo(ids){
    
  var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
  var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
  let reqParams = {
    'from':'invoices',
    'secudeco':$('#establish_invoices_status').val(),
   'tenantId':dcc_siginin_info.tenant_id,
   'data':JSON.stringify(
      { 
        'invoiceId':parseInt(ids),             
      "customerId": dcc_siginin_info.tenant_id,
        "userId":dcc_siginin_info.user_serial_id
      }
    ),
    'portal':'invoices',
    'portalsubmit':'level_3'
  };
  var data = ajaxDuty(reqParams, 'app/views/html/surface/billing/invoices/index.php', 'html', false);
  if (data) {        
    
    data = JSON.parse(data);
    

    $('#telr').attr("src",data.data.url);

   

    setTimeout(function(){

      $('#paymentInfomodal').modal({
        dismissible: false
     } );
     
     $('#paymentInfomodal').modal("open");
    },500);

  }else{
    indexToastr("error",'Error','Error Occured! Contact Administrator.',{timeOut: 5000});
  }
 
}


function downloadRecInvoice(invId){
  

  var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    var reqParams = {
        'from':'invoices',
        'secudeco':$('#establish_invoices_status').val(),
        'portal': 'invoices',
        'portalsubmit': 'level_2',
        'invoice_id':invId,
        'tenant_id': dcc_siginin_info.tenant_id
    };    
    var data = ajaxDuty(reqParams, 'app/views/html/surface/billing/invoices/index.php', 'html', false);
    if (data) {  
        
        data = JSON.parse(data);
        

        
        if(JSON.parse(data.data).message){
          DownloadFile(JSON.parse(data.data).message);
        }
        
    }else{
      indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
        timeOut: 5000
    });
    } 


}

function DownloadInvFile(invId){
  var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]);
    
  var request = new XMLHttpRequest();
  request.open('GET', location.origin+'/api/files/downloadinvoice?'+invId, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.setRequestHeader('Authorization', 'Basic_'+dcc_siginin_info.accessToken);
  request.responseType = 'blob';
request.onload = function() {
    
    if(request.status === 200) {
      
      var disposition = request.getResponseHeader('content-disposition');
      var matches = /"([^"]*)"/.exec(disposition);
      var filename = (matches != null && matches[1] ? matches[1] : 'file.pdf');

      var blob = new Blob([request.response], { type: 'application/pdf' });
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
    }
    
    
  };
request.send('content=raj');


}

function getDesignVMLT(elem){
    

  


  
    var ppst = `<span class="chip lighten-5 red red-text">UNPAID</span>`;
    var passerSt = ` <li onClick="modalPaymentInfo('`+elem.invoiceId+`')" ><a href="javascript:void(0);"><i class="material-icons dp48">credit_card</i> Pay Now</a></li>
    <li onClick="DownloadInvFile('`+elem.invoiceId+`')" ><a href="javascript:void(0);"><i class="material-icons dp48">file_download</i> Invoice Download</a></li>`;
    if(elem.invoiceStatus == "PAID"){
      ppst = `<span class="chip lighten-5 green green-text">PAID</span>`;
      passerSt = `<!-- <li><a href="javascript:void(0);"><i class="material-icons dp48">receipt</i> Payment Receipt</a></li>-->
      <li onClick="DownloadInvFile('`+elem.invoiceId+`')" ><a href="javascript:void(0);"><i class="material-icons dp48">file_download</i> Invoice Download</a></li>`;
    }
  var abc = [
      '',
      '',
      `<a href="javascript:void(0);">`+elem.invoiceNo+`</a>`,
      ``+elem.invoiceDate+``,
      `<span class="invoice-amount">SR `+elem.invoiceAmount+`</span>`,
      `<span class="invoice-customer">`+elem.invoicePaymentMethod+`</span>`,
      `SR `+elem.invoiceBalance+``,
      `<span>`+ppst+`</span>` ,
      `

      <div class="invoice-action">
                          <a class='dropdown-trigger' href='#' data-target='action-btn-filter`+elem.invoiceId+`'>
                            <span class=""><i class="material-icons dp48">more_horiz</i></span></a>
                        </div>
                        
                        <ul id='action-btn-filter`+elem.invoiceId+`' class='dropdown-content'>
                          `+passerSt+`
                        </ul>


        
`
  ]
  
  return abc;
}

function initInvoices(){
  
  
  tableVmListInvoices = $('.invoice-data-table').DataTable({
    responsive:true,
    serverSide: true,
    columns: getVMLTColumnsInvoices(),
    drawCallback: function () {
        $(".dropdown-trigger").dropdown();          
        var api = this.api();
        startCVMLTInvoices = api.page.info().start;
       lengthCVMLTInvoices = api.page.info().length;
       
       
      },
    initComplete: function(settings, json) {  
      
      if(json.recordsTotal > 0){
        $('#invoiceallexportBtn').attr("onClick");
        $('#invoiceallexportBtn').removeClass("disabled","invoiceallexport()");
      }else{
        $('#invoiceallexportBtn').removeAttr("onClick");
        $('#invoiceallexportBtn').addClass("disabled");
      }

      
        $(".dropdown-trigger").dropdown();          
      },
    ajax: callBackVMLTAjaxInvoices(),
    lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, 'All'],
    ],
    "bStateSave": true,
    "fnStateSave": function (oSettings, oData) {
        localStorage.setItem('offersDataTablesInvoices', JSON.stringify(oData));
    },
    "fnStateLoad": function (oSettings) {
        return JSON.parse(localStorage.getItem('offersDataTablesInvoices'));
    },
    search: {
        return: true,
    },

        lengthChange: true,
    displayStart: startCVMLTInvoices,
    pageLength: lengthCVMLTInvoices,
    dom: '<"top display-flex mb-2"<"action-filters"f><"actions action-btns display-flex align-items-center">><"clear">rt<"bottom"i p>',
    
    language: {
        search: "",
        searchPlaceholder: "Search Invoices"
    },
    columnDefs: [
      { responsivePriority: 1, targets: 0 },
            
		            { responsivePriority: 2, targets: 6, orderable:false }/*,
      {
        orderable: false,
        targets: 1,
        checkboxes: {
            selectRow: true
        }
    },
    {
      targets: [0, 1],
      orderable: false
    },
    { "orderable": false, "targets": 1 },
    { "orderable": false, "targets": 8 }*/
  ],
    select: {
        style: "multi",
        selector: "td:first-child>",
        items: "row"
    },
    /*order: [
        [2, 'asc']
    ]*/
});

//tableVmListInvoices.search('').draw();




var invoiceFilterAction = $(".invoice-filter-action");
var invoiceCreateBtn = $(".invoice-create-btn");  
var filterButton = $(".filter-btn");
$(".action-btns").append(invoiceFilterAction, invoiceCreateBtn);
$(".dataTables_filter label").append(filterButton);
$('.dropdown-button').dropdown({
    constrainWidth: false, 
    closeOnClick: false
});  






$('#surf_invoices_org').show(); 
$('#surf_invoices_disp').hide(); 


}


function invexpocolumns(){
  return [{title: 'Invoice Number', sTitle: 'Invoice Number'}
  ,{title: 'Date', sTitle: 'Date'}
  ,{title: 'Amount', sTitle: 'Amount'}
  ,{title: 'Payment Method', sTitle: 'Payment Method'}
  ,{title: 'Balance', sTitle: 'Balance'}
  ,{title: 'Status', sTitle: 'Status'}
  ]
}

function invexporows(){
  var returnData = [];
  currentInvData.map(function(elem){
    returnData.push(
      [
        elem.invoiceNo,
        elem.invoiceDate,
        elem.invoiceAmount,
        elem.invoicePaymentMethod,
        elem.invoiceBalance,
        elem.invoiceStatus
      ]
      );
  })
  return returnData;
}

function invoiceallexport(){
  window.jsPDF = window.jspdf.jsPDF;
  
var doc = new jsPDF();
var allcol = tableVmListInvoices.settings().init().columns;
allcol.shift();
allcol.pop();

var col = invexpocolumns();
var rows = [];

rows = invexporows();    

 doc.autoTable(col, rows, { startY: 10 });

 doc.save('Invoice.pdf');

}

function invoiceStFilter(value){
  
  filterValInv = value;
  $('#invoiceStFilterclear').hide();
  if(value == "PAID"){
    $('#invoiceStFilterclear').show();
    $('#invoiceStFilterpaid').addClass("active");
    $('#invoiceStFilterunpaid').removeClass("active");
  }else if(value == "UNPAID"){
    $('#invoiceStFilterclear').show();
    $('#invoiceStFilterpaid').removeClass("active");
    $('#invoiceStFilterunpaid').addClass("active");
  }


  tableVmListInvoices.draw(); 


   
   
}

$(document).ready(function () {
 
   
    var uniqueId = 1;
    if ($(".invoice-item-repeater").length) {
      $(".invoice-item-repeater").repeater({
        show: function () {
         
          $(this).find(".dropdown-button").attr("data-target", "dropdown-discount" + uniqueId + "");
          $(this).find(".dropdown-content").attr("id", "dropdown-discount" + uniqueId + "");
          uniqueId++;
        
          $(this).slideDown();
        },
        hide: function (deleteElement) {
          $(this).slideUp(deleteElement);
        }
      });
    }
    
    $(document).on("click", ".invoice-apply-btn", function () {
      var $this = $(this);
      var discount = $this.closest(".dropdown-content").find("#discount").val();
      var tax1 = $this.closest(".dropdown-content").find("#Tax1 option:selected").val();
      var tax2 = $this.closest(".dropdown-content").find("#Tax2 option:selected").val();
      $this.parents().eq(4).find(".discount-value").html(discount + "%");
      $this.parents().eq(4).find(".tax1").html(tax1);
      $this.parents().eq(4).find(".tax2").html(tax2);
      $('.dropdown-button').dropdown("close"); 
    });
    
    $(document).on("click", ".invoice-cancel-btn", function () {
      $('.dropdown-button').dropdown("close");
    });
    
    $(document).on("change", ".invoice-item-select", function (e) {
      var selectOption = this.options[e.target.selectedIndex].text;
      
      switch (selectOption) {
        case "Frest Admin Template":
          $(e.target)
            .closest(".invoice-item-filed")
            .find(".invoice-item-desc")
            .val("The most developer friendly & highly customisable HTML5 Admin");
          break;
        case "Stack Admin Template":
          $(e.target)
            .closest(".invoice-item-filed")
            .find(".invoice-item-desc")
            .val("Ultimate Bootstrap 4 Admin Template for Next Generation Applications.");
          break;
        case "Robust Admin Template":
          $(e.target)
            .closest(".invoice-item-filed")
            .find(".invoice-item-desc")
            .val(
              "Robust admin is super flexible, powerful, clean & modern responsive bootstrap admin template with unlimited possibilities"
            );
          break;
        case "Apex Admin Template":
          $(e.target)
            .closest(".invoice-item-filed")
            .find(".invoice-item-desc")
            .val("Developer friendly and highly customizable Angular 7+ jQuery Free Bootstrap 4 gradient ui admin template. ");
          break;
        case "Modern Admin Template":
          $(e.target)
            .closest(".invoice-item-filed")
            .find(".invoice-item-desc")
            .val("The most complete & feature packed bootstrap 4 admin template of 2019!");
          break;
      }
    });
    
    $('.dropdown-button').dropdown({
      constrainWidth: false, 
      closeOnClick: false
    });
    $(document).on("click", ".invoice-repeat-btn", function (e) {
      
      $('.dropdown-button').dropdown({
        constrainWidth: false, 
        closeOnClick: false
      });
    })
  
    if ($(".invoice-print").length > 0) {
      $(".invoice-print").on("click", function () {
        window.print();
      })
    }
  })
  

  