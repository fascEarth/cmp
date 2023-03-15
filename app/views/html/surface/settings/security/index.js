var clickedcpwd = clickednpwd = clickedconfpwd = 1;

$(document).ready(function() {








    commonOTPFocuser('surf_vseccode_verify');

    var mainPage = "security";
    

    $('.csidenavtitles').removeClass("active");
    $('.csidenavtitles a').removeClass("active");
    $('#' + mainPage + "Main").addClass("active");
    $('#' + mainPage + "Main a").addClass("active");




    $(".toggle-password").click(function(e) {
        e.preventDefault();
        var clickedpwd = 0;

        if ($(this).attr("toggle") == '#surf_security_cpwd') {
            clickedpwd = clickedcpwd;
        } else if ($(this).attr("toggle") == '#surf_security_npwd') {
            clickedpwd = clickednpwd;
        } else if ($(this).attr("toggle") == '#surf_security_confpwd') {
            clickedpwd = clickedconfpwd;

        }

        $(this).toggleClass("toggle-password");
        if (clickedpwd == 0) {
            $(this).removeClass('fa-eye');
            $(this).addClass('fa-eye-slash');
            clickedpwd = 1;
        } else {
            $(this).removeClass('fa-eye-slash');
            $(this).addClass('fa-eye');
            clickedpwd = 0;
        }

        if ($(this).attr("toggle") == '#surf_security_cpwd') {
            clickedcpwd = clickedpwd;
        } else if ($(this).attr("toggle") == '#surf_security_npwd') {
            clickednpwd = clickedpwd;
        } else if ($(this).attr("toggle") == '#surf_security_confpwd') {
            clickedconfpwd = clickedpwd;

        }


        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    checkandloadsettingsecurity();

    


});


function checkandloadsettingsecurity(){
  
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]);       
    var roleResponse = dcc_siginin_info.roleRoutes;
    var settingsecurityPageInfo = ((JSON.parse(localStorage.getItem("settingsecurityPageInfo")))?JSON.parse(localStorage.getItem("settingsecurityPageInfo")):false);
    if(!settingsecurityPageInfo){
      if(roleResponse){
        roleResponse.map(function(elem){
          if(elem.children){
            elem.children.map(function(selem){
              if(selem.title == "menu_label_12"){
                settingsecurityPageInfo = selem;
                localStorage.setItem("settingsecurityPageInfo",JSON.stringify(selem));
                return;
              }
            })
          }
        })
      }
    }
    var typessettingsecuritysettings = {
        "placemodifypassword":"Modify Password",
        "placefactorauth":"Multi Factor Auth",
        "placesshkey":"SSH Keys",
        "placeactivity":"My Activity",
        "placeauditlogs":"Audit Logs",
      };
  
    
      
    
    if(settingsecurityPageInfo){
       
        
      if(!settingsecurityPageInfo.tabs.includes("Modify Password")){
        
        delete typessettingsecuritysettings.placemodifypassword;
        $('#placemodifypassword').hide();
        $('#modify-password').hide();
      }
      if(!settingsecurityPageInfo.tabs.includes("Multi Factor Auth")){  
        
        delete typessettingsecuritysettings.placefactorauth;
        $('#placefactorauth').hide();
        $('#factor-auth').hide();
      }
      if(!settingsecurityPageInfo.tabs.includes("SSH Keys")){  
        
        delete typessettingsecuritysettings.placesshkey;
        $('#placesshkey').hide();
        $('#ssh-key').hide();
    }
    if(!settingsecurityPageInfo.tabs.includes("My Activity")){  
        
        delete typessettingsecuritysettings.placeactivity;
        $('#placeactivity').hide();
        $('#activity').hide();
      }
      if(!settingsecurityPageInfo.tabs.includes("Audit Logs")){  
        
        delete typessettingsecuritysettings.placeauditlogs;
        $('#placeauditlogs').hide();
        $('#audit-logs').hide();  
        
      }
      
  
      if(Object.keys(typessettingsecuritysettings).length > 0){
        
        if(Object.keys(typessettingsecuritysettings).includes("placemodifypassword")){  
          $(".commonsettingsecuritybill").removeClass("active");
          $('#placemodifypasswordhead').addClass("active");  
          $('#modify-password').show();   
          
          secdefaultOne();  
          
          setTimeout(function(){
            $('#settingssecurity_common_skel').hide();
              $('#settingssecurity_common_org').show();
              $('.tabs').tabs();  
            },1000);
          return;
  
        }else if(Object.keys(typessettingsecuritysettings).includes("placefactorauth")){
            
          $(".commonsettingsecuritybill").removeClass("active");
          $('#placefactorauthhead').addClass("active");   
          $('#factor-auth').show();  
          
          secdefaultTwo();
          
          setTimeout(function(){
            
            $('#factor-auth').show();  
            $('#settingssecurity_common_skel').hide();
              $('#settingssecurity_common_org').show();
              $('.tabs').tabs();   
          
            },1000);
          return;
        }else if(Object.keys(typessettingsecuritysettings).includes("placesshkey")){  
            
          $(".commonsettingsecuritybill").removeClass("active");
          $('#placesshkeyhead').addClass("active");  
          $('#ssh-key').show();  
          
          secdefaultThree();
          
          setTimeout(function(){
            $('#settingssecurity_common_skel').hide();
              $('#settingssecurity_common_org').show();
              $('.tabs').tabs();       
            },1000);
          return;

        }else if(Object.keys(typessettingsecuritysettings).includes("placeactivity")){   
            $(".commonsettingsecuritybill").removeClass("active");
            $('#placeactivityhead').addClass("active");  
            $('#activity').show();  
            
            secdefaultFour();
            
            setTimeout(function(){
              $('#settingssecurity_common_skel').hide();
                $('#settingssecurity_common_org').show();
                $('.tabs').tabs();       
              },1000);
            return;
            
        }else if(Object.keys(typessettingsecuritysettings).includes("placeauditlogs")){   
            $(".commonsettingsecuritybill").removeClass("active");
            $('#placeauditlogshead').addClass("active");  
            $('#audit-logs').show();  
            
            secdefaultFive();
            
            setTimeout(function(){
              $('#settingssecurity_common_skel').hide();
                $('#settingssecurity_common_org').show();
                $('.tabs').tabs();       
              },1000);
            return;    
  
        }
       
  
      }
  
    }
    
    
    
  }


function secdefaultOne() {



  checksecurityMP();
    setTimeout(function() {
        document.getElementById("modify-password-inner-disp").style.display = "none";

        document.getElementById("modify-password-inner-org").style.display = "block";
        

    }, 500);

}

function secdefaultTwo() {
    
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    var mfa_auth = dcc_siginin_info.mfa_auth;

    if (mfa_auth) {
        $('#tfa_state_common').val(false);
    } else {
        $('#tfa_state_common').val(true);
    }

    if (dcc_siginin_info.mfa_auth) {

        $('#2faSecurityScr').show();


        const myArray = dcc_siginin_info.mobile_no.split("+966");
        $('#surfSectfaphnum').attr("disabled", "disabled");
        $('#surfSectfaphnum').val(myArray[1]);
        $('#surfSectfaphnumLabel').addClass("active");
        $('#phone-code-flog_overall').hide();
        $('#phone-code-flog_overall_success').show();
        $('#surf_vseccode_verify_overall').hide();
        $('#2faSecurityScrBtn').html("DISABLE 2FA");



        $('#2faSecurityScrVerify').hide();
        $('#2faSecurityScrBtn').show();
    } else {


        $('#2faSecurityScrVerify').hide();
        $('#surf_vseccode_verify_overall').hide();
        $('#2faSecurityScr').hide();
        $('#surfSectfaphnum').removeAttr("disabled");
        $('#phone-code-flog_overall').hide();
        $('#phone-code-flog_overall_success').hide();
        $('#2faSecurityScrBtn').html("ENABLE 2FA");
        $('#2faSecurityScrBtn').show();
    }
    setTimeout(function() {
        document.getElementById("factor-auth-inner-disp").style.display = "none";

        document.getElementById("factor-auth-inner-org").style.display = "block";
        tfaSecurityScrForm();
    }, 500);
    

}
function tfaSecurityScrForm(){
    
  $("#2faSecurityScrForm").submit(function(e){ e.preventDefault();   }).validate({
    
    rules: {

        surfSectfaphnum: {
            required: true,
            number: true,
            minlength:9,
            maxlength:9
        }
    },

    submitHandler: function(form) {
      
      
        wizContactPhoneResendCode();
       
       },
    messages: {


        curl: "Enter your website",
    },
    errorElement: 'div',
    errorPlacement: function(error, element) {
        var placement = $(element).data('error');
        if (placement) {
            $(placement).append(error)
        } else {
            error.insertAfter(element);
        }
    }
});

}

function secdefaultThree() {

    //$('#ssh-key-inner-org').hide();
    //$('#ssh-key-inner-disp').show();
    $('#activity-inner-org').hide();
    $('#activity-inner-disp').show();   
    
    $('#audit-logs-inner-org').hide();
    $('#audit-logs-inner-disp').show();

    

    setTimeout(function() {
        

        
        getAllSecuritySSHKeys();
    }, 500);

}

function secdefaultFour() {
    $('#audit-logs-inner-org').hide();
    $('#audit-logs-inner-disp').show();

    $('#ssh-key-inner-org').hide();
    $('#ssh-key-inner-disp').show();

    setTimeout(function() {
        

        
        getAllSecurityMyActivity();
    }, 500);

}

function secdefaultFive() {
    $('#ssh-key-inner-org').hide();
    $('#ssh-key-inner-disp').show();
    $('#activity-inner-org').hide();
    $('#activity-inner-disp').show();   

    setTimeout(function() {
       

        
        getAllSecurityAuditLogs();
    }, 500);

}

function checkindivsecMP(val) {

    if (val.length >= 8) {
        ecl = true;
    } else {
        ecl = false;
    }
    var regularExpressionoul = /^(?=.*[A-Z]).*$/;
    var regexoul = new RegExp(regularExpressionoul, );
    var oul = regexoul.test(val);

    var regularExpressionoll = /^(?=.*[a-z]).*$/;
    var regexoll = new RegExp(regularExpressionoll, );
    var oll = regexoll.test(val);

    var regularExpressionon = /^(?=.*[0-9]).*$/;
    var regexon = new RegExp(regularExpressionon, );
    var on = regexon.test(val);

    var regularExpressionosc = /^(?=.*\w)(?!.* ).*$/;
    var regexosc = new RegExp(regularExpressionosc, );
    var osc = regexosc.test(val);

    
    osc = format.test(val);
    if (ecl) {
        $('#surf_security_validate_8cl').attr('class', 'fa fa-check-circle dp48 green-text');
        //$('#surf_security_validate_8cl').html('check_circle');
    } else {
        $('#surf_security_validate_8cl').attr('class', 'fa fa-times dp48 red-text');
       // $('#surf_security_validate_8cl').html('close');
    }

    if (oul) {
        $('#surf_security_validate_1ul').attr('class', 'fa fa-check-circle dp48 green-text');
      //  $('#surf_security_validate_1ul').html('check_circle');
    } else {
        $('#surf_security_validate_1ul').attr('class', 'fa fa-times dp48 red-text');
       // $('#surf_security_validate_1ul').html('close');
    }

    if (oll) {
        $('#surf_security_validate_1ll').attr('class', 'fa fa-check-circle dp48 green-text');
       // $('#surf_security_validate_1ll').html('check_circle');
    } else {
        $('#surf_security_validate_1ll').attr('class', 'fa fa-times dp48 red-text');
        //$('#surf_security_validate_1ll').html('close');
    }

    if (on) {
        $('#surf_security_validate_1n').attr('class', 'fa fa-check-circle dp48 green-text');
       // $('#surf_security_validate_1n').html('check_circle');
    } else {
        $('#surf_security_validate_1n').attr('class', 'fa fa-times dp48 red-text');
       // $('#surf_security_validate_1n').html('close');
    }

    if (osc) {
        $('#surf_security_validate_1sc').attr('class', 'fa fa-check-circle dp48 green-text');
       // $('#surf_security_validate_1sc').html('check_circle');
    } else {
        $('#surf_security_validate_1sc').attr('class', 'fa fa-times dp48 red-text');
        //$('#surf_security_validate_1sc').html('close');
    }

}


function hasWhiteSpace(s) {
    if(/\s/g.test(s)){
        return false;
    }else{
        return true;
    }
  }

  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

function checksecurityMP() {
    const changeText = function(el, text, color) {
        el.text(text).css('color', color);
    };


    var regularExpression = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\w)(?!.* ).{8,16}$/;
    var regex = new RegExp(regularExpression, );

  jQuery.validator.addMethod("password", function(value, element) {
    
    if(this.optional( element ) || regularExpression.test( value )){
      
      if(format.test(value)){
        if(hasWhiteSpace(value)){
            return true;
        }
      }
      
    }
    
    
  }, 'Minimum 8 characters long, number, uppercase & symbol without empty spaces');


  $("#surfSecResetPwd").submit(function(e){ e.preventDefault();   }).validate({
    
        rules: {

            surf_security_cpwd: {
                required: true,
                password:true
            },
            surf_security_npwd: {
                required: true,
                password:true
            },
            surf_security_confpwd: {
                required: true,
                password:true,
                equalTo: "#surf_security_npwd"
            }
        },

        submitHandler: function(form) {
          
          
            submitSecurityChangePwd();
           
           },
        messages: {


            curl: "Enter your website",
        },
        errorElement: 'div',
        errorPlacement: function(error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        }
    });


   
    $('#surf_security_cpwd , #surf_security_npwd , #surf_security_confpwd').on('keyup keypress blur change mouseenter click', function() {
        
        let len = this.value.length;
        const pbText = $('.pas-strength-container .progress-bar_text');

        checkindivsecMP(this.value)
        if (len === 0) {
            $('.pas-strength-container .progress-bar_item').each(function() {
                $(this).removeClass('active')
            });
            changeText(pbText, '');
            //$('#surf_security_submit_btn').attr("disabled", "disabled");
            //$('#surf_security_submit_btn').removeAttr("onClick");
            //$('#surf_security_submit_btn').css("cursor", "not-allowed");
        } else if (len <= 7) {

            $('.pas-strength-container .progress-bar_item-1').addClass('active');
            $('.pas-strength-container .progress-bar_item-2').removeClass('active');
            $('.pas-strength-container .progress-bar_item-3').removeClass('active');
            //$('#surf_security_submit_btn').attr("disabled", "disabled");
            //$('#surf_security_submit_btn').removeAttr("onClick");
            //$('#surf_security_submit_btn').css("cursor", "not-allowed");
            changeText(pbText, 'Weak');
        } else if (len > 7 && len <= 8 && regex.test(this.value) && hasWhiteSpace(this.value) && format.test(this.value)  ) {

            $('.pas-strength-container .progress-bar_item-2').addClass('active');
            $('.pas-strength-container .progress-bar_item-3').removeClass('active');

            
            if(($('#surf_security_cpwd ').val().length >7 && $('#surf_security_cpwd ').val().length <= 8 && regex.test($('#surf_security_cpwd ').val()))
        && 
        ($('#surf_security_npwd ').val().length >7 && $('#surf_security_npwd ').val().length <= 8 && regex.test($('#surf_security_npwd ').val())) 
        && 
        ($('#surf_security_confpwd ').val().length >7 && $('#surf_security_confpwd ').val().length <= 8 && regex.test($('#surf_security_confpwd ').val()))){

            //$('#surf_security_submit_btn').removeAttr("disabled");
            //$('#surf_security_submit_btn').attr("onClick", "submitSecurityChangePwd()");
            //$('#surf_security_submit_btn').css("cursor", "pointer");
            
        }

            changeText(pbText, 'Moderate');
        } else if (len >= 8 && regex.test(this.value) && hasWhiteSpace(this.value) && format.test(this.value)  ) {
            $('.pas-strength-container .progress-bar_item').each(function() {
                $(this).addClass('active');
            });
            

            if(($('#surf_security_cpwd ').val().length >= 8 && regex.test($('#surf_security_cpwd ').val()))
        && 
        ($('#surf_security_npwd ').val().length >= 8 && regex.test($('#surf_security_npwd ').val())) 
        && 
        ($('#surf_security_confpwd ').val().length >= 8 && regex.test($('#surf_security_confpwd ').val()))){

            //$('#surf_security_submit_btn').removeAttr("disabled");
            //$('#surf_security_submit_btn').attr("onClick", "submitSecurityChangePwd()");
            //$('#surf_security_submit_btn').css("cursor", "pointer");
            
        }


            changeText(pbText, 'Strong');
        }else{
            $('.pas-strength-container .progress-bar_item').each(function() {
                $(this).removeClass('active')
            });
            changeText(pbText, '');
            //$('#surf_security_submit_btn').attr("disabled", "disabled");
            //$('#surf_security_submit_btn').removeAttr("onClick");
            //$('#surf_security_submit_btn').css("cursor", "not-allowed");
        }


        


    });
}

var checkbox = $('#multi-select tbody tr th input')
var selectAll = $('#multi-select .select-all')


$(document).ready(function() {
    checkbox.on('click', function() {
        $(this).parent().parent().parent().toggleClass('selected');
    })

    checkbox.on('click', function() {
        if ($(this).attr("checked")) {
            $(this).attr('checked', false);
        } else {
            $(this).attr('checked', true);
        }
    })



    selectAll.on('click', function() {
        $(this).toggleClass('clicked');
        if (selectAll.hasClass('clicked')) {
            $('#multi-select tbody tr').addClass('selected');
        } else {
            $('#multi-select tbody tr').removeClass('selected');
        }

        if ($('#multi-select tbody tr').hasClass('selected')) {
            checkbox.prop('checked', true);

        } else {
            checkbox.prop('checked', false);

        }
    })
})



$(document).ready(function() {




});

function submitSecurityChangePwd() {
    

    if ($('#surf_security_confpwd').val() != $('#surf_security_npwd').val()) {
        indexToastr("error", 'Error', 'Entered confirm new password does not match with the new password.', {
            timeOut: 5000
        });
        return;
    }

    openBodyProgress();
    $('#surf_security_submit_btn').attr("disabled","disabled");
    $('#surf_security_submit_btn').css("cursor", "not-allowed");

   


    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 

    var pdata = JSON.stringify({
        "userSerialId": dcc_siginin_info.user_serial_id,
        "emailId": dcc_siginin_info.email,
        "currentPassword": $('#surf_security_cpwd').val(),
        "newPassword": $('#surf_security_npwd').val()
    });
    let reqParams = {
        'from':'security',
        'secudeco':$('#establish_surfSecResetPwd').val(),
        "data": pdata,
        "userserialid": dcc_siginin_info.user_serial_id,
        'portal': 'security',
        'portalsubmit': 'level_4'
    };
    setTimeout(function() {
    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/security/index.php', 'html', false);
    if (data) {

        data = JSON.parse(data);


        if (data.data.status == "ok") {
            $('#surf_security_cpwd').val("");
            $('#surf_security_npwd').val("");
            $('#surf_security_confpwd').val("");
            closeBodyProgress();
             $('#surf_security_submit_btn').removeAttr("disabled");
            $('#surf_security_submit_btn').css("cursor", "pointer");

            indexToastr("success", 'Success', 'Success', {
                timeOut: 5000
            });
         }else if (data.data.status == "error") {
            $('#surf_security_cpwd').val("");
            $('#surf_security_npwd').val("");
            $('#surf_security_confpwd').val("");
            closeBodyProgress();
             $('#surf_security_submit_btn').removeAttr("disabled");
            $('#surf_security_submit_btn').css("cursor", "pointer");

            indexToastr("error", 'Error', data.data.message, {
                timeOut: 5000
            });
        } else {
            $('#surf_security_cpwd').val("");
            $('#surf_security_npwd').val("");
            $('#surf_security_confpwd').val("");
            closeBodyProgress();
             $('#surf_security_submit_btn').removeAttr("disabled");
            $('#surf_security_submit_btn').css("cursor", "pointer");

            indexToastr("error", 'Error', 'Something went wrong!', {
                timeOut: 5000
            });
        }
    }else{
        $('#surf_security_cpwd').val("");
        $('#surf_security_npwd').val("");
        $('#surf_security_confpwd').val("");
        closeBodyProgress();
        $('#surf_security_submit_btn').removeAttr("disabled");
        $('#surf_security_submit_btn').css("cursor", "pointer");
        indexToastr("error", 'Error', 'Something went wrong! Contact Administrator', {
            timeOut: 5000
        });

    }
    },1000);

}



var tableSecSshKeysT;
var lengthSecSshKeysTable = 10;
var startSecSshKeysTable = 0;
function getAllSecuritySSHKeys() {
    initSecSshKeysTable();
}

var dropdownSecSshKeysTable = function (){
    
    $(".dropdown-trigger-sec-sshkeys").dropdown()
}


function getSecSshKeysTable(){


   
    return [
      
        
    {
        title: 'Name',name:'sshKeyName'
    },
    {
        title: 'Fingerprint',name:'sshKeyFingerPrint'
    },     
    {
        title: 'Action',name:'Action'
    }
  ];
  }

function callBackSecSshKeysTable(){
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
   
 
    return {
      "data": function(d){
        
  
        d.from = 'security';
        d.secudeco = $('#establish_surfSecResetPwd').val();
        d.portal =  'security';
        d.portalsubmit =  'level_1';
        d.userserialid =  dcc_siginin_info.user_serial_id;
        
        },
        
        url: 'app/views/html/surface/settings/security/index.php',
        type: 'POST',
        dataFilter: function(data) {                
          
            var json = jQuery.parseJSON(data);                
            
            json.recordsTotal = JSON.parse(json.data).totalRecords;
            json.recordsFiltered = JSON.parse(json.data).totalRecords;
            json.data = JSON.parse(json.data).data;
  
            var commonDataJson = [];                
            currentInvData = json.data;
            json.data.map(function(elem) { 
               
                                
                var finalDJs = getDesignSecSshKeysTable(elem);
                commonDataJson.push(finalDJs);
            });            
  
                       
            json.data = commonDataJson;
            return JSON.stringify(json); 
        }
    }
  }

  function getDesignSecSshKeysTable(elem){
   
     
    var abc = [
        
        elem.sshKeyName,
        elem.sshKeyFingerPrint.substr(0, 18),
        `<i onClick="deleteAllSecuritySSHKeys('` + elem.sshKeyId + `','` + elem.sshKeyName + `')" class="material-icons dp48 cursor-pointer">delete</i>`
    ]
    
    return abc;

  }


  
function initSecSshKeysTable(){
   /* if(tableSecSshKeysT != undefined){
        tableSecSshKeysT.destroy();
    }*/
    
    var p = `
    <div class="col s12">
    <h4 class="card-title mb-0">List of SSH Keys</h4>
    <a onClick="addAllSecuritySSHKeys()" href="#sshadd-modal" class="modal-trigger btn table-header waves-effect waves-light gradient-45deg-light-blue-cyan modal-trigger border-round mt-4 mb-4">ADD SSH KEY</a>
    <table class="striped mt-4" id="security-ssh-datatable" >
       <thead>
          <tr>
             <th>Name</th>
             <th>Fingerprint</th>
             <th>Action</th>
          </tr>
       </thead>
       <tbody id="security-ssh-datatable-body">          
       </tbody>
    </table>
 </div>
    `;  
    $('#ssh-key-inner-org').html(p);

    
      
    tableSecSshKeysT = $('#security-ssh-datatable').DataTable({
        responsive:true,
    serverSide: true,
    columns: getSecSshKeysTable(),
    columnDefs: [
        { responsivePriority: 1, targets: 0 },
             
                     { responsivePriority: 2, targets: 2,orderable:false }],
    drawCallback: function () {
        dropdownSecSshKeysTable();
        var api = this.api();
        startSecSshKeysTable = api.page.info().start;
       lengthSecSshKeysTable = api.page.info().length;
       
       
      },
    initComplete: function(settings, json) {  
      
        dropdownSecSshKeysTable();
        
        $('#ssh-key-inner-org').show();  
        $('#ssh-key-inner-disp').hide();  
      },
    ajax: callBackSecSshKeysTable(),
    lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, 'All'],
    ],
    "bStateSave": true,
    "fnStateSave": function (oSettings, oData) {
        localStorage.setItem('offersDataTablesSecSshKeys', JSON.stringify(oData));
    },
    "fnStateLoad": function (oSettings) {
        return JSON.parse(localStorage.getItem('offersDataTablesSecSshKeys'));
    },
    search: {
        return: true,
    },

        lengthChange: true,
    displayStart: startSecSshKeysTable,
    pageLength: lengthSecSshKeysTable,
    dom: '<"top display-flex mb-2"<"action-filters"f><"actions action-btns display-flex align-items-center">><"clear">rt<"bottom"i p>',
    
    language: {
        search: "",
        searchPlaceholder: "Search SSH Keys"
    },
   
   /* order: [
        [1, 'asc']
    ]*/
});


//tableSecSshKeysT.search('').draw();

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





function oldgetAllSecuritySSHKeys() {
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    let reqParams = {
        'from':'security',
        'secudeco':$('#establish_surfSecResetPwd').val(),
        "userserialid": dcc_siginin_info.user_serial_id,
        'portal': 'security',
        'portalsubmit': 'level_1'
    };
    
    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/security/index.php', 'html', false);
    
    if (data) {
        
        data = JSON.parse(data);
        
        if (data.code == "200") {
            var idata = JSON.parse(data.data);
            
            plotAllSecuritySSHKeys(idata);
        } else {
            plotAllSecuritySSHKeys([]);
          
        }
    } else {
        plotemptyAllSecuritySSHKeys();
    }
}




var tableSecMyActivityT;
var lengthMyActivityTable = 10;
var startMyActivityTable = 0;
function getAllSecurityMyActivity() {
    initMyActivityTable();
}

var dropdownMyActivityTable = function (){
    
    $(".dropdown-trigger-sec-myactivity").dropdown()
}


function getMyActivityTable(){

   
    return [
      
        
    {
        title: 'Date & Time',name:'eventDate'
    },
    {
        title: 'Description',name:'eventDec'
    },     
    {
        title: 'IP Address',name:'ipAddress'
    }
  ];
  }

function callBackMyActivityTable(){
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
   
 
    return {
      "data": function(d){
        
  
        d.from = 'security';
        d.secudeco = $('#establish_surfSecResetPwd').val();
        d.portal =  'security';
        d.eventtype = 'myactivity';
        d.portalsubmit =  'level_5';
        d.userserialid =  dcc_siginin_info.user_serial_id;
        
        },
        
        url: 'app/views/html/surface/settings/security/index.php',
        type: 'POST',
        dataFilter: function(data) {                
          
            var json = jQuery.parseJSON(data);                
            
            json.recordsTotal = JSON.parse(json.data).totalRecords;
            json.recordsFiltered = JSON.parse(json.data).totalRecords;
            json.data = JSON.parse(json.data).data;
  
            var commonDataJson = [];                
            currentInvData = json.data;
            json.data.map(function(elem) { 
               
                                
                var finalDJs = getDesignMyActivityTable(elem);
                commonDataJson.push(finalDJs);
            });            
  
                       
            json.data = commonDataJson;
            return JSON.stringify(json); 
        }
    }
  }

  function getDesignMyActivityTable(elem){
    
     
    var abc = [
        
        elem.eventDate,
        elem.eventDec,
        elem.ipAddress
    ]
    
    return abc;

  }


  
function initMyActivityTable(){
    /*if(tableSecMyActivityT != undefined){
        tableSecMyActivityT.destroy();
    }*/
    
    
    var p = `
    <div class="col s12">
                           <h4 class="card-title mb-0">My Activity Logs</h4>
                           <table class="striped" id="activity-datatable">
                              <thead>
                                 <tr>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>IP Address</th>
                                 </tr>
                              </thead>
                              <tbody id="activity-datatable-body">

                              </tbody>
                           </table>
                        </div>
    `;  
    $('#activity-inner-org').html(p); 
      
    tableSecMyActivityT = $('#activity-datatable').DataTable({
        responsive:true,
    serverSide: true,
    columns: getMyActivityTable(),
    columnDefs: [
        { responsivePriority: 1, targets: 0 },
             
                     { responsivePriority: 2, targets: 2}],
    drawCallback: function () {
        dropdownMyActivityTable();
        var api = this.api();
        startMyActivityTable = api.page.info().start;
       lengthMyActivityTable = api.page.info().length;
       
       
      },
    initComplete: function(settings, json) {  
      
        dropdownMyActivityTable();
        
        $('#activity-inner-org').show();  
        $('#activity-inner-disp').hide();  
      },
    ajax: callBackMyActivityTable(),
    lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, 'All'],
    ],
    "bStateSave": true,
    "fnStateSave": function (oSettings, oData) {
        localStorage.setItem('offersDataTablesSecMyActivity', JSON.stringify(oData));
    },
    "fnStateLoad": function (oSettings) {
        return JSON.parse(localStorage.getItem('offersDataTablesSecMyActivity'));
    },
    search: {
        return: true,
    },

        lengthChange: true,
    displayStart: startMyActivityTable,
    pageLength: lengthMyActivityTable,
    dom: '<"top display-flex mb-2"<"action-filters"f><"actions action-btns display-flex align-items-center">><"clear">rt<"bottom"i p>',
    
    language: {
        search: "",
        searchPlaceholder: "Search Activity"
    },
   
    /*order: [
        [1, 'asc']
    ]*/
});


//tableSecMyActivityT.search('').draw();

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






function oldgetAllSecurityMyActivity() {

    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    let reqParams = {
        'from':'security',
        'secudeco':$('#establish_surfSecResetPwd').val(),
        "userserialid": dcc_siginin_info.user_serial_id,
        "eventtype": "myactivity",
        'portal': 'security',
        'portalsubmit': 'level_5'
    };
    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/security/index.php', 'html', false);
    if (data) {
        data = JSON.parse(data);
        if (data.code == "200") {
            var idata = JSON.parse(data.data);
            plotAllSecurityMyActivity(idata);
        } else {
            plotAllSecurityMyActivity([]);
            
        }
    }

}
var plotAllSecurityMyActivityA = true;

function plotAllSecurityMyActivity(data) {

    var p = "";
    if (data.data.length > 0) {

        data.data.map(function(elem) {

            p += ` <tr>
        

            <td>` + elem.eventDate + `</td>
            <td>` + elem.eventDec + `</td>
            <td>` + elem.ipAddress + `</td>`;


            p += ` </tr>`;


        });


    }
    $('#activity-datatable-body').html(p);


    if (plotAllSecurityMyActivityA) {
        plotAllSecurityMyActivityA = false;
        $('#activity-datatable').DataTable({
            "responsive": true,
            "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
            ]
        });


        $(window).on('load', function() {
            $(".dropdown-content.select-dropdown li").on("click", function() {
                var that = this;
                setTimeout(function() {
                    if ($(that).parent().parent().find('.select-dropdown').hasClass('active')) {

                        $(that).parent().parent().find('.select-dropdown').removeClass('active');
                        $(that).parent().hide();
                    }
                }, 100);
            });
        });
    }

}




var tableSecAuditLogsT;
var lengthAuditLogsTable = 10;
var startAuditLogsTable = 0;
function getAllSecurityAuditLogs() {
    initAuditLogsTable();
}

var dropdownAuditLogsTable = function (){
    
    $(".dropdown-trigger-sec-auditlogs").dropdown()
}


function getAuditLogsTable(){


    

    return [
      
        
    {
        title: 'Date & Time',name:'eventDate'
    },
    {
        title: 'Description',name:'eventDec'
    },
    {
        title: 'User',name:'userName'
    },     
    {
        title: 'IP Address',name:'ipAddress'
    }
  ];
  }

function callBackAuditLogsTable(){
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
   
 
    return {
      "data": function(d){
        
  
        d.from = 'security';
        d.secudeco = $('#establish_surfSecResetPwd').val();
        d.portal =  'security';
        d.eventtype = 'auditlog';
        d.portalsubmit =  'level_5';
        d.userserialid =  dcc_siginin_info.user_serial_id;
        
        },
        
        url: 'app/views/html/surface/settings/security/index.php',
        type: 'POST',
        dataFilter: function(data) {                
          
            var json = jQuery.parseJSON(data);                
            
            json.recordsTotal = JSON.parse(json.data).totalRecords;
            json.recordsFiltered = JSON.parse(json.data).totalRecords;
            json.data = JSON.parse(json.data).data;
  
            var commonDataJson = [];                
            currentInvData = json.data;
            json.data.map(function(elem) { 
               
                                
                var finalDJs = getDesignAuditLogsTable(elem);
                commonDataJson.push(finalDJs);
            });            
  
                       
            json.data = commonDataJson;
            return JSON.stringify(json); 
        }
    }
  }

  function getDesignAuditLogsTable(elem){
    
     
    var abc = [
        
        elem.eventDate,
        elem.eventDec,
        elem.userName,
        elem.ipAddress
    ]
    
    return abc;

  }


  
function initAuditLogsTable(){
    /*if(tableSecAuditLogsT != undefined){
        tableSecAuditLogsT.destroy();
    }*/
    
    
      var p = `
      <div class="col s12">
      <h4 class="card-title mb-0">Audit Logs</h4>
      <table class="striped" id="auditlogs-datatable">
         <thead>
            <tr>
               <th>Date</th>
               <th>Description</th>
               <th>User</th>
               <th>IP Address</th>
            </tr>
         </thead>
         <tbody id="auditlogs-datatable-body">            
         </tbody>
      </table>
   </div>
    `;  
    $('#audit-logs-inner-org').html(p);

    tableSecAuditLogsT = $('#auditlogs-datatable').DataTable({
        responsive:true,
    serverSide: true,
    columns: getAuditLogsTable(),
    columnDefs: [
        { responsivePriority: 1, targets: 0 },
             
                     { responsivePriority: 2, targets: 3 }],
    drawCallback: function () {
        dropdownAuditLogsTable();
        var api = this.api();
        startAuditLogsTable = api.page.info().start;
       lengthAuditLogsTable = api.page.info().length;
       
       
      },
    initComplete: function(settings, json) {  
      
        dropdownAuditLogsTable();
        
        $('#audit-logs-inner-org').show();  
        $('#audit-logs-inner-disp').hide();  
      },
    ajax: callBackAuditLogsTable(),
    lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, 'All'],
    ],
    "bStateSave": true,
    "fnStateSave": function (oSettings, oData) {
        localStorage.setItem('offersDataTablesSecAuditLogs', JSON.stringify(oData));
    },
    "fnStateLoad": function (oSettings) {
        return JSON.parse(localStorage.getItem('offersDataTablesSecAuditLogs'));
    },
    search: {
        return: true,
    },

        lengthChange: true,
    displayStart: startAuditLogsTable,
    pageLength: lengthAuditLogsTable,
    dom: '<"top display-flex mb-2"<"action-filters"f><"actions action-btns display-flex align-items-center">><"clear">rt<"bottom"i p>',
    
    language: {
        search: "",
        searchPlaceholder: "Search Audit Logs"
    },
   
    /*order: [
        [1, 'asc']
    ]*/
});


//tableSecAuditLogsT.search('').draw();

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





function oldgetAllSecurityAuditLogs() {

    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    let reqParams = {
        'from':'security',
        'secudeco':$('#establish_surfSecResetPwd').val(),
        "userserialid": dcc_siginin_info.user_serial_id,
        "eventtype": "auditlog",
        'portal': 'security',
        'portalsubmit': 'level_5'
    };
    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/security/index.php', 'html', false);
    if (data) {
        data = JSON.parse(data);
        if (data.code == "200") {
            var idata = JSON.parse(data.data);
            plotgetAllSecurityAuditLogs(idata);
        } else {
            plotgetAllSecurityAuditLogs([]);
           
        }
    }

}

var plotgetAllSecurityAuditLogsA = true;

function plotgetAllSecurityAuditLogs(data) {


    var p = "";
    if (data.data.length > 0) {

        data.data.map(function(elem) {

            p += ` <tr>
        

            <td>` + elem.eventDate + `</td>
            <td>` + elem.eventDec + `</td>
            
            <td>` + elem.userName + `</td>
            <td>` + elem.ipAddress + `</td>`;


            p += ` </tr>`;


        });


    }
    $('#auditlogs-datatable-body').html(p);


    if (plotgetAllSecurityAuditLogsA) {
        plotgetAllSecurityAuditLogsA = false;
        $('#auditlogs-datatable').DataTable({
            "responsive": true,
            "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
            ]
        });


        $(window).on('load', function() {
            $(".dropdown-content.select-dropdown li").on("click", function() {
                var that = this;
                setTimeout(function() {
                    if ($(that).parent().parent().find('.select-dropdown').hasClass('active')) {

                        $(that).parent().parent().find('.select-dropdown').removeClass('active');
                        $(that).parent().hide();
                    }
                }, 100);
            });
        });
    }

}

function callDisableAction() {
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    let reqParams = {
        'from':'security',
        'secudeco':$('#establish_surfSecResetPwd').val(),
        "userserialid": dcc_siginin_info.user_serial_id,
        'portal': 'security',
        'portalsubmit': 'level_7'
    };
    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/security/index.php', 'html', false);
    if (data) {

        data = JSON.parse(data);

        if (data.code == "200") {

            data = JSON.parse(data.data);

            if (data.status == "ok") {
                indexToastr("success", 'Success', '2FA Disabled Successfully!', {
                    timeOut: 5000
                });
                dcc_siginin_info.mfa_auth = false;

                setLocalStorageInServ("dcc_siginin_info",JSON.stringify(dcc_siginin_info));

                
                setTimeout(function() {
                    secdefaultTwo();
                }, 500);
            } else {
                indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
                    timeOut: 5000
                });
            }


        } else {
            indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
                timeOut: 5000
            });
        }
    } else {
        indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
            timeOut: 5000
        });
    }

}

function changeTFa() {


    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    var mfa_auth = dcc_siginin_info.mfa_auth;

    if (mfa_auth) {


        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: "Confirmation",
            text: "You won't be able to revert this!",
            html:

                `<p>Are you sure you want to disable ? </p> `,
            icon: 'warning',
            confirmButtonText: 'Disable',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {


                callDisableAction();

            }
        })




    } else {



        $('#phone-code-flog_overall_success').hide();
        $('#surfSectfaphnum').removeAttr("disabled");
        $('#2faSecurityScr').show();
        $('#2faSecurityScrSubmit').show();
        $('#2faSecurityScrBtn').hide();
        $('#2faSecurityScrVerify').hide();


    }


}

var wizContactVerifyPhoneResendState = false;

function wizContactPhoneResendCode() {
    

    if ($('#surfSectfaphnum').val().length < 6) {
        indexToastr("warning", 'Warning', 'Please enter the mobile Number.', {
            timeOut: 5000
        });
        return;
    }

    openBodyProgress();
    $('#2faSecurityScrSubmit').addClass("disabled");
   // $('#2faSecurityScrSubmit').removeAttr("onClick");

    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    var dcc_cont_val_phone_id = $('#surfSectfaphcode').val();
    var dcc_cont_val_phone = $('#surfSectfaphnum').val();
    var combPhone = dcc_cont_val_phone_id + "" + dcc_cont_val_phone;
    let reqParams = {
        'from':'security',
        'secudeco':$('#establish_surfSecResetPwd').val(),
        'data': JSON.stringify({
            'mobile_no': ((combPhone) ? combPhone : ""),
            'email_id': ((dcc_siginin_info.email) ? dcc_siginin_info.email : ""),
            'reset_password': false
        }),
        'portal': 'verification',
        'portalsubmit': 'level_2',
        'recall': wizContactVerifyPhoneResendState
    };
    setTimeout(function(){
    var data = ajaxDuty(reqParams, 'app/views/html/signup/home/index.php', 'html', false);
    if (data) {

        data = JSON.parse(data);

        if (data.data.status_code == "415") {
            setTimeout(function() {
                wizContactVerifyPhoneResendState = true;
                wizContactPhoneResendCode();
            }, 3000);
        } else if (data.data.status_code == "200") {
            closeBodyProgress();
            $('#2faSecurityScrSubmit').hide();
            $('#2faSecurityScrBtn').hide();
            $('#2faSecurityScrVerify').show();
            $('#surf_vseccode_verify_overall').show();
            $('#phone-code-flog_overall_success').hide();
            $('#phone-code-flog_overall').show();
            $('.surf_vseccode_verify').removeAttr("disabled");
            wizContactVerifyPhoneResendState = false;
            indexToastr("success", 'Success', 'SMS code sent successfully!', {
                timeOut: 5000
            });
        } else {
            closeBodyProgress();
            $('#2faSecurityScrSubmit').removeClass("disabled");
           // $('#2faSecurityScrSubmit').attr("onClick", "wizContactPhoneResendCode()");
            wizContactVerifyPhoneResendState = false;
            indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
                timeOut: 5000
            });
        }
    } else {
        closeBodyProgress();
        $('#2faSecurityScrSubmit').removeClass("disabled");
        //$('#2faSecurityScrSubmit').attr("onClick", "wizContactPhoneResendCode()");

        indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
            timeOut: 5000
        });

    }

    },1000);


}

var wizContactVerifyPhoneState = false;

function wizContactPhoneVerifyCode() {
    openBodyProgress();

    $('#2faSecurityScrVerify').addClass("disabled");
    $('#2faSecurityScrVerify').removeAttr("onClick");




    if ($('#surfSectfaphnum').val().length < 6) {
        indexToastr("warning", 'Warning', 'Please enter the mobile Number.', {
            timeOut: 5000
        });
        return;
    }

    var inputs = document.getElementsByClassName('surf_vseccode_verify'),
        names = [].map.call(inputs, function(input) {
            return input.value;
        }).join('');
    if (names.length != 6) {
        indexToastr("warning", 'Warning', 'Please enter the verification code.', {
            timeOut: 5000
        });
        return;
    }


    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    var dcc_cont_val_phone_id = $('#surfSectfaphcode').val();
    var dcc_cont_val_phone = $('#surfSectfaphnum').val();
    var combPhone = dcc_cont_val_phone_id + "" + dcc_cont_val_phone;
    var mfaState = (($('#tfa_state_common').val()) ? $('#tfa_state_common').val() : false);
    let reqParams = {
        'from':'security',
        'secudeco':$('#establish_surfSecResetPwd').val(),
        'data': JSON.stringify({
            "sms": {
                'email_id': ((dcc_siginin_info.email) ? dcc_siginin_info.email : ""),
                'mobile_no': combPhone,
                'token': names,
                'mfa_status': mfaState,
                'user_serial_id': dcc_siginin_info.user_serial_id,
                'security_enabled': true
            }
        }),
        'portal': 'verification',
        'portalsubmit': 'level_1',
        'recall': wizContactVerifyPhoneState
    };
    var data = ajaxDuty(reqParams, 'app/views/html/signup/home/index.php', 'html', false);
    setTimeout(function(){

    if (data) {

        data = JSON.parse(data);

        if (data.data.status_code == "415") {
            setTimeout(function() {
                wizContactVerifyPhoneState = true;
                wizContactPhoneVerifyCode();
            }, 3000);
        } else if (data.data.status_code == "500" || data.data.status_code == "601") {
            closeBodyProgress();
            $('#2faSecurityScrVerify').removeClass("disabled");
            $('#2faSecurityScrVerify').attr("onClick", "wizContactPhoneVerifyCode()");
            wizContactVerifyPhoneState = false;
            indexToastr("error", 'Error', 'SMS verification failed', {
                timeOut: 5000
            });
        } else if (data.data.status_code == "603") {
            closeBodyProgress();
            wizContactVerifyPhoneState = false;
            indexToastr("error", 'Error', 'Mobile number already registered.', {
                timeOut: 5000
            });
        } else if (data.data.status_code == "200" || data.data.status_code == "600") {
            closeBodyProgress();
            if (mfaState == "true") {
                mfaState = true;
            }

            if (mfaState == "false") {
                mfaState = false;
            }

            $('.surf_vseccode_verify').val("");
            $('.surf_vseccode_verify').attr("disabled", "disabled");
            $('#2faSecurityScrSubmit').removeClass("disabled");
            //$('#2faSecurityScrSubmit').attr("onClick", "wizContactPhoneResendCode()");
            $('#2faSecurityScrVerify').removeClass("disabled");
            $('#2faSecurityScrVerify').attr("onClick", "wizContactPhoneVerifyCode()");
            var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
            var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
            if (mfaState) {
                dcc_siginin_info.mfa_auth = true;
                $('#tfa_state_common').val(false);

                

                setLocalStorageInServ("dcc_siginin_info",JSON.stringify(dcc_siginin_info));


                setTimeout(function() {
                    indexToastr("success", 'Success', '2FA Enabled Successfully!', {
                        timeOut: 5000
                    });
                    secdefaultTwo();
                }, 500);
            } else {
                $('#tfa_state_common').val(true);
                dcc_siginin_info.mfa_auth = false;


                setLocalStorageInServ("dcc_siginin_info",JSON.stringify(dcc_siginin_info));

                

                setTimeout(function() {
                    indexToastr("success", 'Success', '2FA Disabled Successfully!', {
                        timeOut: 5000
                    });
                    secdefaultTwo();
                }, 500);
            }


        } else {
            closeBodyProgress();
            $('#2faSecurityScrVerify').removeClass("disabled");
            $('#2faSecurityScrVerify').attr("onClick", "wizContactPhoneVerifyCode()");

            wizContactVerifyPhoneState = false;
            indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
                timeOut: 5000
            });
        }
    } else {
        closeBodyProgress();
        $('#2faSecurityScrVerify').removeClass("disabled");
        $('#2faSecurityScrVerify').attr("onClick", "wizContactPhoneVerifyCode()");
        indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
            timeOut: 5000
        });

    }

    },1000);

}

function presubmitAllSecuritySSHKeys(){
    $('#submitsshkeysAddBtn').click();
}
function addAllSecuritySSHKeys() {
    $('#nameAllSecuritySSHKeys').val("");
    $('#fingerPrintAllSecuritySSHKeys').val("");
    $('#sshKeyIdAllSecuritySSHKeys').removeAttr("name");
    $('#typeAllSecuritySSHKeys').val("add");

    

    jQuery.validator.addMethod("sshnamevalidator", function(value, element) {
        return this.optional(element) || /^ssh-rsa/.test(value);
      }, "SSH Key must be 'ssh-rsa' OpenSSH format.");

    
      
        $("#submitsshkeysAdd").submit(function(e){ e.preventDefault();   }).validate({
        
          rules: {          
                
            sshKeyName:{
              required: true
            },
            sshKeyFingerPrint:{
                required: true,
                sshnamevalidator:true
            }
      
            },
            submitHandler: function(form) {
              
              
                submitAllSecuritySSHKeys();
             
             },
            messages: {
              email:{
              required: "Enter email"
            },
            
            curl: "Enter your website",
            },
            errorElement : 'div',
            errorPlacement: function(error, element) {
              var placement = $(element).data('error');
              if (placement) {
                $(placement).append(error)
              } else {
            error.insertAfter(element);
            }
          }
        });


}

function updateAllSecuritySSHKeys(sshKeyId) {

    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    let reqParams = {
        'from':'security',
        'secudeco':$('#establish_surfSecResetPwd').val(),
        "sshKeyId": sshKeyId,
        "userSerialId": dcc_siginin_info.user_serial_id,
        'portal': 'security',
        'portalsubmit': 'level_2'
    };
    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/security/index.php', 'html', false);
    if (data) {
        data = JSON.parse(data);
        if (data.code == "200") {
            var idata = JSON.parse(data.data);
            $('#nameAllSecuritySSHKeys').val(idata.sshKeyName);
            $('#fingerPrintAllSecuritySSHKeys').val(idata.sshKeyFingerPrint);
            $('#sshKeyIdAllSecuritySSHKeys').attr("name", "sshKeyId");
            $('#sshKeyIdAllSecuritySSHKeys').val(idata.sshKeyId);
            $('#typeAllSecuritySSHKeys').val("update");
        } else {
            indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
                timeOut: 5000
            });
        }
    }



}

function submitAllSecuritySSHKeys() {
    openBodyProgress();
    var nameAllSecuritySSHKeys = $('#nameAllSecuritySSHKeys').val();
    if (!nameAllSecuritySSHKeys) {
        indexToastr("error", 'Error', 'Kindly add the SSH key name.', {
            timeOut: 5000
        });
        return;
    }
    var fingerPrintAllSecuritySSHKeys = $('#fingerPrintAllSecuritySSHKeys').val();
    if (!(/^ssh-rsa/.test(fingerPrintAllSecuritySSHKeys))) {

        indexToastr("error", 'Error', 'SSH Key must be "ssh-rsa" OpenSSH format.', {
            timeOut: 5000
        });
        return;

    }


    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    var typeAllSecuritySSHKeys = $('#typeAllSecuritySSHKeys').val();
    let reqParams = {
        'from':'security',
        'secudeco':$('#establish_surfSecResetPwd').val(),
        'data': JSON.stringify({
            'userSerialId': dcc_siginin_info.user_serial_id,
            'sshKeyName': $('#nameAllSecuritySSHKeys').val(),
            'sshKeyFingerPrint': $('#fingerPrintAllSecuritySSHKeys').val()
        }),
        'type': $('#typeAllSecuritySSHKeys').val(),
        'portal': 'security',
        'portalsubmit': 'level_3'
    };

    if (typeAllSecuritySSHKeys == "update") {

        reqParams = {
            'from':'security',
        'secudeco':$('#establish_surfSecResetPwd').val(),
            'data': JSON.stringify({
                'sshKeyId': $('#sshKeyIdAllSecuritySSHKeys').val(),
                'userSerialId': dcc_siginin_info.user_serial_id,
                'sshKeyName': $('#nameAllSecuritySSHKeys').val(),
                'sshKeyFingerPrint': $('#fingerPrintAllSecuritySSHKeys').val()
            }),
            'type': $('#typeAllSecuritySSHKeys').val(),
            'portal': 'security',
            'portalsubmit': 'level_3'
        };
    }




    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/security/index.php', 'html', false);
    if (data) {

        data = JSON.parse(data);

        setTimeout(function(){
        if (data.data.status == "ok") {
            closeBodyProgress();
            indexToastr("success", 'Success', 'SSH Key added successfully', {
                timeOut: 5000
            });
            tableSecSshKeysT.ajax.reload(null, false);  
            
            $('#sshadd-modal').modal("close");
        } else {
            closeBodyProgress();
            indexToastr("error", 'Error', 'Something went wrong!', {
                timeOut: 5000
            });
        }

    },1000);

    }

}



function deleteAllSecuritySSHKeys(sshKeyId, sshKeyName) {


    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Delete SSH Key ?',
        text: "You won't be able to revert this!",
        html: `SSH Key : <span class="black-text swal2-text-highlight">` + sshKeyName + `</span> </br> ` +
            `<p>Are you sure you want to delete your SSH key ?  </p> `,
        icon: 'warning',
        confirmButtonText: 'Proceed',
        showCancelButton: true
    }).then((result) => {
        if (result.isConfirmed) {
            postdeleteAllSecuritySSHKeys(sshKeyId);
        }
    })




}

function postdeleteAllSecuritySSHKeys(sshKeyId) {

    var reqParams = {
        'from':'security',
        'secudeco':$('#establish_surfSecResetPwd').val(),
        "sshKeyId": sshKeyId,
        'portal': 'security',
        'portalsubmit': 'level_6'
    };
    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/security/index.php', 'html', false);
    if (data) {

        data = JSON.parse(data);


        if (data.data.status == "ok") {
            indexToastr("success", 'Success', 'Success', {
                timeOut: 5000
            });

            var cvalue = tableSecSshKeysT.page.info().recordsTotal - tableSecSshKeysT.page.info().start;
          
          
          cvalue = cvalue-1;
          if(cvalue > 0){
            
            tableSecSshKeysT.state.clear();
            tableSecSshKeysT.ajax.reload(null, false);  
          }else{
            
            tableSecSshKeysT.state.clear();
            tableSecSshKeysT.ajax.reload();  
          }

            //tableSecSshKeysT.ajax.reload();  
            
            $('#sshadd-modal').modal("close");
        } else {
            indexToastr("error", 'Error', 'Something went wrong!', {
                timeOut: 5000
            });
        }
    } else {
        indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
            timeOut: 5000
        });
    }
}
var plotAllSecuritySSHKeysa = true;

function plotAllSecuritySSHKeys(data) {
    

    var ks = ` <div class="col s12">
  <h4 class="card-title mb-0">List of SSH Keys</h4>
  <a onClick="addAllSecuritySSHKeys()" href="#sshadd-modal" class="modal-trigger btn table-header waves-effect waves-light gradient-45deg-light-blue-cyan modal-trigger border-round mt-4 mb-4">ADD SSH KEY</a>
<table class="striped mt-4" id="security-ssh-datatable" >
  <thead>
  <tr>
      <th>Name</th>
      <th>Fingerprint</th>
      <th>Action</th>
  </tr>
  </thead>
  <tbody id="security-ssh-datatable-body">
  <!--<tr>
      <td>Senthilraj</td>
      <td>8f:38:fd:bc:9a:76:eb:94:71:c3:43:04:9e:62:2b:fa</td>
      <td><i class="material-icons dp48 cursor-pointer">delete</i></td>
  </tr>
  <tr>
      <td>Senthilraj</td>
      <td>8f:38:fd:bc:9a:76:eb:94:71:c3:43:04:9e:62:2b:fa</td>
      <td><i class="material-icons dp48 cursor-pointer">delete</i></td>
  </tr>
  <tr>
      <td>Senthilraj</td>
      <td>8f:38:fd:bc:9a:76:eb:94:71:c3:43:04:9e:62:2b:fa</td>
      <td><i class="material-icons dp48 cursor-pointer">delete</i></td>
  </tr>-->
  </tbody>
</table>
</div>`;

if(data.data.length == 1){
    $('#ssh-key-inner-org').html(ks);
    plotAllSecuritySSHKeysa = true;
}

    setTimeout(function() {



        if (data.data.length > 0) {
            var p = "";

            data.data.map(function(elem) {

                p += ` <tr>
        

            <td>` + elem.sshKeyName + `</td>
            <td>` + elem.sshKeyFingerPrint.substr(0, 18) + `</td>
            <td>`;


                p += `<i onClick="deleteAllSecuritySSHKeys('` + elem.sshKeyId + `','` + elem.sshKeyName + `')" class="material-icons dp48 cursor-pointer">delete</i>`;

                p += ` </td></tr>`;


            });

            $('#security-ssh-datatable-body').html(p);


            if (plotAllSecuritySSHKeysa) {
                plotAllSecuritySSHKeysa = false;
                $('#security-ssh-datatable').DataTable({
                    "responsive": true,
                    "lengthMenu": [
                        [10, 25, 50, -1],
                        [10, 25, 50, "All"]
                    ]
                });

                $(window).on('load', function() {
                    $(".dropdown-content.select-dropdown li").on("click", function() {
                        var that = this;
                        setTimeout(function() {
                            if ($(that).parent().parent().find('.select-dropdown').hasClass('active')) {

                                $(that).parent().parent().find('.select-dropdown').removeClass('active');
                                $(that).parent().hide();
                            }
                        }, 100);
                    });
                });
            }

        } else {
            plotemptyAllSecuritySSHKeys();
        }


    }, 500);


}

function plotemptyAllSecuritySSHKeys() {
    var p = `<div class="col s12 center mt-2">
  <img width="100" src="app/views/html/surface/security/img/ssh-key.png" alt="two-factor" />
  <h4 class="card-title mt-2 mb-3 fs-26">No SSH Keys added</h4>
  <p>SSH Key is a secure way to log into your Elastic Instances through SSH.</p>
  <a onClick="addAllSecuritySSHKeys()" href="#sshadd-modal" class="modal-trigger btn waves-effect waves-light gradient-45deg-light-blue-cyan modal-trigger border-round mt-4 mb-4">ADD SSH KEY</a>
</div>`;
    $('#ssh-key-inner-org').html(p);
}