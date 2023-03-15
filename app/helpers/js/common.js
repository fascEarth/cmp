var indexMessagescommon;
$(function(){
  //opensessPoper();
  var langC = localStorage.getItem("langC");
    loadJSONgeneral(function(response) {  
      indexMessagescommon = JSON.parse(response);              
      },"app/helpers/json/lang/"+langC+".json");

})


function commonJqueryMessageActivator(){
  jQuery.extend(jQuery.validator.messages, {
      required: indexMessagescommon.general_validation_required,
      remote:indexMessagescommon.general_validation_remote,
      email:indexMessagescommon.general_validation_email,
      url:indexMessagescommon.general_validation_url,
      date:indexMessagescommon.general_validation_date,
      dateISO:indexMessagescommon.general_validation_dateISO,
      number:indexMessagescommon.general_validation_number,
      digits:indexMessagescommon.general_validation_digits,
      creditcard:indexMessagescommon.general_validation_creditcard,
      equalTo:indexMessagescommon.general_validation_equalTo,
      accept:indexMessagescommon.general_validation_accept,
      maxlength: jQuery.validator.format(indexMessagescommon.general_validation_maxlength),
      minlength: jQuery.validator.format(indexMessagescommon.general_validation_minlength),
      rangelength: jQuery.validator.format(indexMessagescommon.general_validation_rangelength),
      range: jQuery.validator.format(indexMessagescommon.general_validation_range),
      max: jQuery.validator.format(indexMessagescommon.general_validation_max),
      min: jQuery.validator.format(indexMessagescommon.general_validation_min)
  });
}

function commonDatatableLangC(data){
  var searchPlaceholderData = ((data.searchPlaceholder)?data.searchPlaceholder:indexMessagescommon.common_datatable_opr_label_searchPlaceholder);
  var searchData = "";
  if(data.searchVal){
    searchData = indexMessagescommon.common_datatable_opr_label_search;
  }
  return {
    "decimal":indexMessagescommon.common_datatable_opr_label_decimal,
    "emptyTable":indexMessagescommon.common_datatable_opr_label_emptyTable,
    "info":indexMessagescommon.common_datatable_opr_label_info,
    "infoEmpty":indexMessagescommon.common_datatable_opr_label_infoEmpty,
    "infoFiltered":indexMessagescommon.common_datatable_opr_label_infoFiltered,
    "infoPostFix":indexMessagescommon.common_datatable_opr_label_infoPostFix,
    "thousands":indexMessagescommon.common_datatable_opr_label_thousands,
    "lengthMenu":indexMessagescommon.common_datatable_opr_label_lengthMenu,
    "loadingRecords":indexMessagescommon.common_datatable_opr_label_loadingRecords,
    "processing":indexMessagescommon.common_datatable_opr_label_processing,
    "search":         searchData,
    "zeroRecords":    indexMessagescommon.common_datatable_opr_label_zeroRecords,
    "paginate": {
        "first":indexMessagescommon.common_datatable_opr_label_paginate_first,
        "last":indexMessagescommon.common_datatable_opr_label_paginate_last,
        "next":indexMessagescommon.common_datatable_opr_label_paginate_next,
        "previous":indexMessagescommon.common_datatable_opr_label_paginate_previous
    },
    "aria": {
        "sortAscending":  indexMessagescommon.common_datatable_opr_label_aria_sortAscending,
        "sortDescending": indexMessagescommon.common_datatable_opr_label_aria_sortDescending
    },
    
    searchPlaceholder: searchPlaceholderData
}
 
}

function opensessPoper(){
  var loginSessTime = ((localStorage.getItem("loginSessTime"))?localStorage.getItem("loginSessTime"):"false");
//if(loginSessTime == "true"){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
})

swalWithBootstrapButtons.fire({
    title:'Might be your session has expired!',
    //title: 'The page has expired due to inactivity.',
    text: "You won't be able to revert this!",
    html: `Please refresh and try again. Or you can click the proceed button to continue` ,
    icon: 'warning',
    confirmButtonText: 'Proceed',
    showCancelButton: false
}).then((result) => {
    if (result.isConfirmed) {
       // localStorage.clear();
        localStorage.setItem("loginSessTime","false");
        location.reload();
    }
})
//}

}


function openBodyProgress(){
  $('body').css("cursor","progress");
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function closeBodyProgress(){
  $('body').css("cursor","unset");
}
function commonOTPFocuser(id){
  $('input.'+id).keyup(function(e){
      if(e.keyCode == 8){
          $(this).prev().focus();
      }else{
          if ($(this).val()) {
              $(this).next().focus();
          }
      }
  })

}

function bodyLoaderOn(id){
  $('body').attr('style',"cursor:progress;");
  $('#'+id).css('cursor',"progress");
}

function bodyLoaderOff(id){
  $('body').removeAttr('style');
  $('#'+id).css('cursor',"pointer");
}

/*toastr.options = {
  
  "closeButton": true,
  "debug": true,
  "newestOnTop": true,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": 5000,
  "extendedTimeOut": 0,
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut",
  "tapToDismiss": true,
  "closeHtml": '<button type="button"><i class="icofont-close-line"></i></button>'
}*/
/*
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "30000000000000",
  "hideDuration": "30000000000000",
  "timeOut": "30000000000000",
  "extendedTimeOut": "30000000000000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

function indexToastr(type,title,msg,other){
  if(type == "success"){
    toastr.success(capitalizeFirstLetter(msg),'',other);
  }else if(type == "error"){
    toastr.error(capitalizeFirstLetter(msg),'',other);
  }else if(type == "warning"){
    toastr.warning(capitalizeFirstLetter(msg),'',other);
  }else{
    toastr.info(capitalizeFirstLetter(msg),'',other);
  }
}*/


function indexToastr(type,title,msg,other){
  const Toast = Swal.mixin({
    
    toast: true,
    position: 'top-right',
    showCloseButton: true,
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })



  if(type == "success"){

   Toast.fire({
    icon: 'success',
    title: capitalizeFirstLetter(msg)
  })

    
  }else if(type == "error"){
    Toast.fire({
      icon: 'error',
      title: capitalizeFirstLetter(msg)
    })
  }else if(type == "warning"){
    Toast.fire({
      icon: 'warning',
      title: capitalizeFirstLetter(msg)
    })
  }else if(type == "question"){
    Toast.fire({
      icon: 'question',
      title: capitalizeFirstLetter(msg)
    })
  }else{
    Toast.fire({
      icon: 'info',
      title: capitalizeFirstLetter(msg)
    })
  }
  
}


function capitalizeFirstLetter(str) {
  if(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }else{
    return '-';
  }
}
function removeLastExclamation(s){
  return s.replace(/!$/, '')
}
function jqueryExceptionHandler(jqXHR,exception){
  var returnError = {};
  returnError.status = 'error';
  returnError.code = jqXHR.status;
  if (jqXHR.status === 0) {
    returnError.message = 'Not connect.\n Verify Network.';
  } else if (jqXHR.status == 404) {
    returnError.message = 'Requested page not found. [404]';
  } else if (jqXHR.status == 500) {
    returnError.message = 'Internal Server Error [500].';
  } else if (exception === 'parsererror') {
    returnError.message = 'Requested JSON parse failed.';
  } else if (exception === 'timeout') {
    returnError.message = 'Time out error.';
  } else if (exception === 'abort') {
    returnError.message = 'Ajax request aborted.';
  } else {
    returnError.message = 'Uncaught Error.\n' + jqXHR.responseText;
  }
  return returnError;
}
function ajaxDuty(ajaxData,uri,ajaxDataType,asyncType){
  var returnData = "";
  $.ajax({
    type: 'POST',
    url: uri,
    data: ajaxData,
    async : asyncType,
    cache:false,
    //contentType: "application/json",
    dataType: ajaxDataType,
    success: function (data) {
      returnData = data;
    },error:function(jqXHR,exception){
      console.log(jqXHR);
      console.log(exception);
      returnData = jqueryExceptionHandler(jqXHR,exception);
     // location.reload();
    }
  });
  return returnData;
}

function testCommonAj() {
  
  
  
    
      let reqParams = {
        
      'portal':'common',
      'portalsubmit':'level_3'
    };
    
    var data = ajaxDuty(reqParams, 'app/helpers/php/common.php', 'html', false);
    console.log(data);
    
  
  

}
function callCommonLang(type){
  
  let reqParams = {
    'secudeco':$('#establish_common_formSubmit').val(),
      'type':type,     
    'portal':'common',
    'portalsubmit':'level_6'
  };
  
  var data =  ajaxDuty(reqParams, 'app/helpers/php/common.php', 'html', false);
  if(data){
    localStorage.setItem("langC",type);
   location.reload();
  }
}
function setLocalStorageInServ(label,pdata){
  let reqParams = {
    'secudeco':$('#establish_common_formSubmit').val(),
      'label':label,
      'data':pdata,
    'portal':'common',
    'portalsubmit':'level_3'
  };
  
  return ajaxDuty(reqParams, 'app/helpers/php/common.php', 'html', false);
  
}

function getLocalStorageFromServ(label){
  let reqParams = {
    'secudeco':$('#establish_common_formSubmit').val(),
    'label':label,    
  'portal':'common',
  'portalsubmit':'level_4'
};

return ajaxDuty(reqParams, 'app/helpers/php/common.php', 'html', false);

}

function getLocalStorageFromServOut(label){
  let reqParams = {
    
    'label':label,    
  'portal':'common',
  'portalsubmit':'level_5'
};

return ajaxDuty(reqParams, 'app/helpers/php/common.php', 'html', false);

}



async function loadJSONgeneral(callback,url) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', url, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {

      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}