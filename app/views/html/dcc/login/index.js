var indexMessagesLogin;
$(function () {   

   checkSessionExistL();
   loadJSONgeneral(function(response) {      
      indexMessagesLogin = JSON.parse(response);      
      callLoginFiles();
    },"app/views/html/dcc/login/index.json");
});
function checkSessionExistL(){
   let reqParams = {
      'secudeco': $('#establish_login_dcc_form').val(),       
        'portal': 'login',
        'portalsubmit': 'level_4'        
   };
   var data = ajaxDuty(reqParams, 'app/views/html/dcc/login/index.php', 'html', false);
   if (data) {
      
      data = JSON.parse(data);
      
      if(data.status == "error"){

         
         localStorage.setItem("loginSessTime","true");
        opensessPoper();
      }else if(data.status == "screen"){
         location.reload();
      }else{
         setTimeout(function() {
            checkSessionExistL();
         },60000);
      }
      
   }
}
function callLoginFiles(){
   initLogin();
   commonOTPFocuser('dcc_vcode_verify');
   commonOTPFocuser('dcc_vcode_tfa_verify');
   localStorage.removeItem("account_type_signup_pob");
}
function initLogin() {   
  checkLocalLoginUser();
  dccLoginFormHandlers();
}

function checkLocalLoginUser() {
  if (localStorage.checkbox && localStorage.username !== "" && localStorage.password != "") {
     $('#rememberMeDccLogin').attr("checked", "checked");
     $('#login_dcc_email').val(localStorage.username);
     $('#login_dcc_pwd').val(localStorage.password);
     $('#login_dcc_email_label').addClass("active");
     $('#login_dcc_pwd_label').addClass("active");
     var login_dcc_email = ValidateEmail($('#login_dcc_email').val());
     var login_dcc_pwd = $('#login_dcc_pwd').val();
     var regularExpression = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\w)(?!.* ).{8,16}$/;
     var regex = new RegExp(regularExpression, );
     var rex = regex.test(login_dcc_pwd);
     if (login_dcc_email && rex) {
        $('#login_dcc_form_submit').removeAttr("disabled");
     } else {
        $('#login_dcc_form_submit').attr("disabled", "disabled");
     }
  } else {
     $('#rememberMeDccLogin').removeAttr("checked");
     $('#login_dcc_email').val("");
     $('#login_dcc_pwd').val("");
  }
}

function lsRememberMe() {
  if ($('input#rememberMeDccLogin').is(':checked') && $('#login_dcc_email').val() !== "") {
     localStorage.username = $('#login_dcc_email').val();
     localStorage.password = $('#login_dcc_pwd').val();
     localStorage.checkbox = $('input#rememberMeDccLogin').is(':checked');
  } else {
     localStorage.password = "";
     localStorage.username = "";
     localStorage.checkbox = "";
  }
}

function checkpwdVisib() {
  var clickedPwd = 0;
  $(".toggle-password").click(function (e) {
     e.preventDefault();
     $(this).toggleClass("toggle-password");
     if (clickedPwd == 0) {
        $(this).removeClass('fa-eye');
        $(this).addClass('fa-eye-slash');
        clickedPwd = 1;
     } else {
        $(this).removeClass('fa-eye-slash');
        $(this).addClass('fa-eye');
        clickedPwd = 0;
     }
     var input = $($(this).attr("toggle"));
     if (input.attr("type") == "password") {
        input.attr("type", "text");
     } else {
        input.attr("type", "password");
     }
  });
}

function hasWhiteSpace(s) {
  if (/\s/g.test(s)) {
     return false;
  } else {
     return true;
  }
}

var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


function loginFormValidators() {

  var regularExpression = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\w)(?!.* ).{8,16}$/;
  var regex = new RegExp(regularExpression, );

  jQuery.validator.addMethod("password", function (value, element) {

     if (this.optional(element) || regularExpression.test(value)) {

        if (format.test(value)) {
           if (hasWhiteSpace(value)) {
              return true;
           }
        }

     }


  }, 'Please enter a valid password.');


  


  jQuery.validator.addMethod("loginmailvalidator", function(value, element) {
   return this.optional(element) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(value);
}, "Please enter a valid email");


  $("#login_dcc_form").submit(function(e){ e.preventDefault(); }).validate({
     rules: {
        password: {
           required: true,
           password: true
        },
        email: {
           required: true,
           email: true,
           loginmailvalidator:true
        }
     },
     submitHandler: function(form) {
      logincFormSubmit();
      
      },
     
     messages: {
        email: {
           required: "Enter email"
        },

        curl: "Enter your website",
     },
     errorElement: 'div',
     errorPlacement: function (error, element) {
        var placement = $(element).data('error');
        if (placement) {
           $(placement).append(error)
        } else {
           error.insertAfter(element);
        }
     }
  });
}

var dccLoginRecallState = false;
var dccLoginSubmitState = true;


function logincFormSubmit(){
   dccLoginSubmitState = false;
     $('#login_dcc_form_submit').attr("disabled", "disabled");
     $('#login_dcc_form_submit').css("cursor", "progress");
     $('#login_dcc_form_submit_wrapper').css("cursor", "progress");
     var reqParams = {
        'secudeco': $('#establish_login_dcc_form').val(),
        'data': JSON.stringify({

           'userName': $('#login_dcc_email').val().toLowerCase(),
           'password': $('#login_dcc_pwd').val(),
           'social_login': '0'

        }),
        'portal': 'login',
        'portalsubmit': 'level_1',
        'recall': dccLoginRecallState
     };
     openBodyProgress();
     setTimeout(function () {
        dccLoginFormSubmit(reqParams);
     }, 1000);
}
function dccLoginFormHandlers() {
  checkpwdVisib();
  loginFormValidators();



}

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
     return true;
  } else {
     return false;
  }
}
var passingsigninfo = "";

function dccLoginFormSubmit(reqParams) {

  var data = ajaxDuty(reqParams, 'app/views/html/dcc/login/index.php', 'html', false);
  if (data) {
     localStorage.removeItem("cartCardDetails");
     localStorage.removeItem("wizpersonalOrgInfo");
     localStorage.removeItem("wizContactCompletion");
     localStorage.removeItem("provisioningData");
     localStorage.removeItem("particularTags");
     localStorage.removeItem("particularMembers");
     localStorage.removeItem("particularVms");
     localStorage.removeItem("particularTeam");
     localStorage.removeItem("particularRole");
     localStorage.removeItem("particularVms");

     localStorage.removeItem("oneTomeCarouselModel");
     data = JSON.parse(data);


     if (data.data.status_code == "200" || data.data.status_code == "700") {

      closeBodyProgress();


        passingsigninfo = {
           "role_name": data.data.data.role_name, // administrator, billing_admin,manager,operator
           "email": JSON.parse(reqParams.data).userName,
           "pwd": JSON.parse(reqParams.data).password,
           "account_type": ((data.data.data.account_type) ? data.data.data.account_type : "personal"),
           "social_login": "0",
           "tenant_id": data.data.data.tenant_id,
           "user_serial_id": data.data.data.user_serial_id,
           "completed_stepper": data.data.data.completed_stepper,
           "payment_card_status": data.data.data.payment_card_status,
           "legal_status": data.data.data.legal_status,
           "expiry": data.data.data.expiry,
           "jwt_token": data.data.data.jwt_token,
           "mfa_auth": data.data.data.mfa_auth,
           "email_verify": data.data.data.email_verify,
           "sms_verify": data.data.data.sms_verify,
           "mobile_no": ((data.data.data.mobile_no) ? data.data.data.mobile_no : ""),
           "roleRoutes": data.data.data.roleRoutes,
           "localUriList": data.data.data.uriAddrList,
           "accessToken": data.data.data.accessToken,
           "lang":data.data.data.lang
        };


        setLocalStorageInServ("dcc_siginin_info", JSON.stringify(passingsigninfo));


        var earl_dcc_dignin_info = passingsigninfo;

        var dcc_siginin_info = ((earl_dcc_dignin_info) ? earl_dcc_dignin_info : []);


        if (data.data.data.legal_status && data.data.data.completed_stepper == 5) {
           if (!dcc_siginin_info.email_verify) {
              $('#emailverify_dcc_email').val(JSON.parse(reqParams.data).userName);
              $('#login_email_ver_dcc_form').show();
              $('#login_dcc_form').hide();
              $('#login_twofact_ver_dcc_form').hide();
              callemailverifysupporters();
              wizContactEmailResendCode();
              return;
           }

           if (dcc_siginin_info.mfa_auth) {
              $('#login_twofact_ver_dcc_form').show();

              $('#login_dcc_form').hide();
              $('#login_email_ver_dcc_form').hide();

              callemailtftauthsupporters();
              oldwizContactPhoneResendCode();
              return;
           }
           if (dcc_siginin_info.email_verify) {
              setTimeout(function () {
                 dccLoginRecallState = false;
                 var ruri = "signup#home";


                 var passingsigninfolocalUriList = passingsigninfo.localUriList;


                 var uriAddLi = passingsigninfolocalUriList;

                 if (data.data.data.uriAddrList.includes("dashboard")) {
                    ruri = "surface#dashboard";
                 } else {
                    ruri = "surface#" + uriAddLi[0];
                 }

                 localStorage.setItem("loginSessTime","false");
                 window.location.href = ruri;
                 location.reload();
              }, 300);
           }
        } else {
         localStorage.setItem("loginSessTime","false");
           var ruri = "signup#home";
           window.location.href = ruri;
           location.reload();
        }

     } else if ((data.data.status_code == "500" && data.data.status_msg == "inprogess") || (data.data.status_code == "415")) {

      setTimeout(function () {
         dccLoginRecallState = true;
         reqParams.recall = dccLoginRecallState;
         dccLoginFormSubmit(reqParams);
      }, 3000);

   }else if (data.data.status_code == "701" || data.data.status_code == "702" || data.data.status_code == "703" || data.data.status_code == "707") {
     

      
      closeBodyProgress();
        dccLoginSubmitState = true;
        $('#login_dcc_form_submit').removeAttr("disabled");
        $('#login_dcc_form_submit').css("cursor", "pointer");
        $('#login_dcc_form_submit_wrapper').css("cursor", "pointer");
        dccLoginRecallState = false;
        indexToastr("error", 'Error', indexMessagesLogin[data.data.status_code], {
           timeOut: 5000
        });
        
      }else{ 

        closeBodyProgress();
        dccLoginSubmitState = true;
        $('#login_dcc_form_submit').removeAttr("disabled");
        $('#login_dcc_form_submit').css("cursor", "pointer");
        $('#login_dcc_form_submit_wrapper').css("cursor", "pointer");
        dccLoginRecallState = false;
        indexToastr("error", 'Error', 'Might be your session has expired!', {
           timeOut: 5000
        });
        //localStorage.clear();
        localStorage.setItem("loginSessTime","true");
        opensessPoper();

       
     }
     //indexMessagesLogin


     /*

     if (data.data.status_code == "707" || data.data.status_code == "703") {
        closeBodyProgress();
        dccLoginSubmitState = true;
        $('#login_dcc_form_submit').removeAttr("disabled");
        $('#login_dcc_form_submit').css("cursor", "pointer");
        $('#login_dcc_form_submit_wrapper').css("cursor", "pointer");
        dccLoginRecallState = false;
        indexToastr("error", 'Error', data.data.data, {
           timeOut: 5000
        });

     } else if (data.data.status_code == "701" || data.data.status_code == "702") {
        closeBodyProgress();
        dccLoginSubmitState = true;
        $('#login_dcc_form_submit').removeAttr("disabled");
        $('#login_dcc_form_submit').css("cursor", "pointer");
        $('#login_dcc_form_submit_wrapper').css("cursor", "pointer");
        dccLoginRecallState = false;
        indexToastr("error", 'Error', "Invalid Credentials.", {
           timeOut: 5000
        });
     } else if ((data.data.status_code == "500" && data.data.status_msg == "inprogess") || (data.data.status_code == "415")) {
        setTimeout(function () {
           dccLoginRecallState = true;
           reqParams.recall = dccLoginRecallState;
           dccLoginFormSubmit(reqParams);
        }, 3000);
     } else if (data.data.status_code == "200" || data.data.status_code == "700") {
        closeBodyProgress();


        passingsigninfo = {
           "role_name": data.data.data.role_name, // administrator, billing_admin,manager,operator
           "email": JSON.parse(reqParams.data).userName,
           "pwd": JSON.parse(reqParams.data).password,
           "account_type": ((data.data.data.account_type) ? data.data.data.account_type : "personal"),
           "social_login": "0",
           "tenant_id": data.data.data.tenant_id,
           "user_serial_id": data.data.data.user_serial_id,
           "completed_stepper": data.data.data.completed_stepper,
           "payment_card_status": data.data.data.payment_card_status,
           "legal_status": data.data.data.legal_status,
           "expiry": data.data.data.expiry,
           "jwt_token": data.data.data.jwt_token,
           "mfa_auth": data.data.data.mfa_auth,
           "email_verify": data.data.data.email_verify,
           "sms_verify": data.data.data.sms_verify,
           "mobile_no": ((data.data.data.mobile_no) ? data.data.data.mobile_no : ""),
           "roleRoutes": data.data.data.roleRoutes,
           "localUriList": data.data.data.uriAddrList,
           "accessToken": data.data.data.accessToken
        };


        setLocalStorageInServ("dcc_siginin_info", JSON.stringify(passingsigninfo));


        var earl_dcc_dignin_info = passingsigninfo;

        var dcc_siginin_info = ((earl_dcc_dignin_info) ? earl_dcc_dignin_info : []);


        if (data.data.data.legal_status && data.data.data.completed_stepper == 5) {
           if (!dcc_siginin_info.email_verify) {
              $('#emailverify_dcc_email').val(JSON.parse(reqParams.data).userName);
              $('#login_email_ver_dcc_form').show();
              $('#login_dcc_form').hide();
              $('#login_twofact_ver_dcc_form').hide();
              callemailverifysupporters();
              wizContactEmailResendCode();
              return;
           }

           if (dcc_siginin_info.mfa_auth) {
              $('#login_twofact_ver_dcc_form').show();

              $('#login_dcc_form').hide();
              $('#login_email_ver_dcc_form').hide();

              callemailtftauthsupporters();
              oldwizContactPhoneResendCode();
              return;
           }
           if (dcc_siginin_info.email_verify) {
              setTimeout(function () {
                 dccLoginRecallState = false;
                 var ruri = "signup#home";


                 var passingsigninfolocalUriList = passingsigninfo.localUriList;


                 var uriAddLi = passingsigninfolocalUriList;

                 if (data.data.data.uriAddrList.includes("dashboard")) {
                    ruri = "surface#dashboard";
                 } else {
                    ruri = "surface#" + uriAddLi[0];
                 }

                 localStorage.setItem("loginSessTime","false");
                 window.location.href = ruri;
                 location.reload();
              }, 300);
           }
        } else {
         localStorage.setItem("loginSessTime","false");
           var ruri = "signup#home";
           window.location.href = ruri;
           location.reload();
        }
     } else if (data.data.status_code == "401") {
        closeBodyProgress();
        dccLoginSubmitState = true;
        $('#login_dcc_form_submit').removeAttr("disabled");
        $('#login_dcc_form_submit').css("cursor", "pointer");
        $('#login_dcc_form_submit_wrapper').css("cursor", "pointer");
        dccLoginRecallState = false;
        indexToastr("error", 'Error', data.data.status_msg, {
           timeOut: 5000
        });
     } else {
        closeBodyProgress();
        dccLoginSubmitState = true;
        $('#login_dcc_form_submit').removeAttr("disabled");
        $('#login_dcc_form_submit').css("cursor", "pointer");
        $('#login_dcc_form_submit_wrapper').css("cursor", "pointer");
        dccLoginRecallState = false;
        indexToastr("error", 'Error', 'Might be your session has expired!', {
           timeOut: 5000
        });
        localStorage.clear();
        localStorage.setItem("loginSessTime","true");
        opensessPoper();
        // location.reload();
     }

     */
     $('#signup_indiv_form_submit').css("cursor", "pointer");

  } else {
     indexToastr("error", 'Error', "Error Occured! Contact Administrator.", {
        timeOut: 5000
     });
     location.reload();
     closeBodyProgress();
  }
}

var wizContactVerifyEmailState = false;
var dccLoginVerSubmitState = true;
function loginemailverifyvalidator(){


  jQuery.validator.addMethod("loginmailvalidator", function(value, element) {
   return this.optional(element) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(value);
}, "Please enter a valid email");




  $("#login_email_ver_dcc_form").submit(function(e){ e.preventDefault(); }).validate({
     rules: {   
      verifyemaillogincode:{
         required:true
      }, 
      email: {
           required: true,
           email: true,
           loginmailvalidator:true
        }
     },
     submitHandler: function(form) {
      
      var inputs = document.getElementsByClassName('dcc_vcode_verify'),
        names = [].map.call(inputs, function (input) {
           return input.value;
        }).join('');
        if(names.length < 6){
         $('#dcc_vcode_verify-error').show();
         $('#dcc_vcode_verify-error').html("Please enter otp");
        }else{
         $('#dcc_vcode_verify-error').hide();
         $('#dcc_vcode_verify-error').html("");
        }
        if (names.length == 6 && dccLoginVerSubmitState) {
         logincFormEmailSubmit();
         }
      
      
      
      },
     
     messages: {
        email: {
           required: "Enter email"
        },

        curl: "Enter your website",
     },
     errorElement: 'div',
     errorPlacement: function (error, element) {
        var placement = $(element).data('error');
        if (placement) {
           $(placement).append(error)
        } else {
           error.insertAfter(element);
        }
     }
  });

}

function logincFormEmailSubmit(){

   dccLoginVerSubmitState = false;
     var earl_dcc_dignin_info = passingsigninfo;


     var dcc_siginin_info = ((earl_dcc_dignin_info) ? earl_dcc_dignin_info : []);


     $('#login_email_ver_dcc_form_submit').attr("disabled", "disabled");
     $('#login_email_ver_dcc_form_submit').css("cursor", "progress");
     $('#login_email_ver_dcc_form_submit_wrapper').css("cursor", "progress");

     var inputs = document.getElementsByClassName('dcc_vcode_verify'),
        names = [].map.call(inputs, function (input) {
           return input.value;
        }).join('');
     var reqParams = {
        'secudeco': $('#establish_login_email_ver_dcc_form').val(),
        'data': JSON.stringify({
           "email": {
              'email_id': ((dcc_siginin_info.email) ? dcc_siginin_info.email : ""),
              'token': names
           }
        }),
        'portal': 'verification',
        'portalsubmit': 'level_2',
        'recall': wizContactVerifyEmailState
     };
     openBodyProgress();
     setTimeout(function () {
        wizContactEmailVerifyCode(reqParams);
     }, 1000);

}
function callemailverifysupporters() {
   loginemailverifyvalidator();
   $('.dcc_vcode_verify').keyup(function () {
     
      var inputs = document.getElementsByClassName('dcc_vcode_verify'),
         names = [].map.call(inputs, function (input) {
            return input.value;
         }).join('');
         if(names.length < 6){
            $('#dcc_vcode_verify-error').show();
            $('#dcc_vcode_verify-error').html("Please enter otp");
           }else{
            $('#dcc_vcode_verify-error').hide();
            $('#dcc_vcode_verify-error').html("");
           }
   });
 


}


function wizContactEmailVerifyCode(reqParams) {
  var earl_dcc_dignin_info = passingsigninfo;

  var dcc_siginin_info = ((earl_dcc_dignin_info) ? earl_dcc_dignin_info : []);


  var data = ajaxDuty(reqParams, 'app/views/html/dcc/login/index.php', 'html', false);
  if (data) {

     data = JSON.parse(data);

     if (data.data.status_code == "415") {
        setTimeout(function () {
           wizContactVerifyEmailState = true;
           reqParams.recall = wizContactVerifyEmailState;
           wizContactEmailVerifyCode(reqParams);
        }, 3000);
    
     } else if (data.data.status_code == "604" || data.data.status_code == "603") {
        closeBodyProgress();
        wizContactVerifyEmailState = false;
        dccLoginVerSubmitState = true;
        $('#login_email_ver_dcc_form_submit').removeAttr("disabled");
        $('#login_email_ver_dcc_form_submit').css("cursor", "pointer");
        $('#login_email_ver_dcc_form_submit_wrapper').css("cursor", "pointer");
        indexToastr("error", 'Error', indexMessagesLogin[data.data.status_code], {
           timeOut: 5000
        });
     } else if (data.data.status_code == "200" || data.data.status_code == "602") {
        closeBodyProgress();
        wizContactVerifyEmailState = false;
        $('.dcc_vcode_verify').attr("disabled", "disabled");

        setTimeout(function () {
           localStorage.removeItem("provisioningData");
           localStorage.removeItem("cartCardDetails");
           localStorage.removeItem("wizpersonalOrgInfo");
           localStorage.removeItem("wizContactCompletion");

           localStorage.removeItem("particularTags");
           localStorage.removeItem("particularMembers");
           localStorage.removeItem("particularVms");
           localStorage.removeItem("particularTeam");
           localStorage.removeItem("particularRole");
           localStorage.removeItem("particularVms");


           var ruri = "signup#home";


           var uriAddLi = passingsigninfo.localUriList;

           if (uriAddLi.includes("dashboard")) {
              ruri = "surface#dashboard";
           } else {
              ruri = "surface#" + uriAddLi[0];
           }


           window.location.href = ruri;
           location.reload();

        }, 300);


     } else {
        closeBodyProgress();
        dccLoginVerSubmitState = true;
        $('#login_email_ver_dcc_form_submit').removeAttr("disabled");
        $('#login_email_ver_dcc_form_submit').css("cursor", "pointer");
        $('#login_email_ver_dcc_form_submit_wrapper').css("cursor", "pointer");
        wizContactVerifyEmailState = false;
        indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
           timeOut: 5000
        });
        localStorage.setItem("loginSessTime","true");
        opensessPoper();
     }
  }
}
var wizContactVerifyEmailTFAState = false;
var dccLogintftSubmitState = true;


function loginemailtftauthvalidator(){


   $("#login_twofact_ver_dcc_form").submit(function(e){ e.preventDefault(); }).validate({
      rules: {   
         verifytfactorlogincode:{
          required:true
       }
      },
      submitHandler: function(form) {
       
       var inputs = document.getElementsByClassName('dcc_vcode_tfa_verify'),
         names = [].map.call(inputs, function (input) {
            return input.value;
         }).join('');
         if(names.length < 6){
          $('#dcc_vcode_tfa_verify-error').show();
          $('#dcc_vcode_tfa_verify-error').html("Please enter otp");
         }else{
          $('#dcc_vcode_tfa_verify-error').hide();
          $('#dcc_vcode_tfa_verify-error').html("");
         }
         if (names.length == 6 && dccLoginVerSubmitState) {
            logincFormemailtftauthSubmit();
          }
       
       
       
       },
      
      messages: {
         email: {
            required: "Enter email"
         },
 
         curl: "Enter your website",
      },
      errorElement: 'div',
      errorPlacement: function (error, element) {
         var placement = $(element).data('error');
         if (placement) {
            $(placement).append(error)
         } else {
            error.insertAfter(element);
         }
      }
   });
 
 }
 
 function logincFormemailtftauthSubmit(){
 
   dccLogintftSubmitState = false;
   $('#login_tfactorauth_dcc_form_submit').attr("disabled", "disabled");
   $('#login_tfactorauth_dcc_form_submit').css("cursor", "progress");
   $('#login_tfactorauth_dcc_form_submit_wrapper').css("cursor", "progress");
   var earl_dcc_dignin_info = passingsigninfo;

   var dcc_siginin_info = ((earl_dcc_dignin_info) ? earl_dcc_dignin_info : []);


   var inputs = document.getElementsByClassName('dcc_vcode_tfa_verify'),
      names = [].map.call(inputs, function (input) {
         return input.value;
      }).join('');
   var reqParams = {
      'secudeco': $('#establish_login_twofact_ver_dcc_form').val(),
      'data': JSON.stringify({
         "sms": {
            'email_id': ((dcc_siginin_info.email) ? dcc_siginin_info.email : ""),
            //'mobile_no':((dcc_siginin_info.mobile_no)?dcc_siginin_info.mobile_no:""),
            'mobile_no': ((dcc_siginin_info.email) ? dcc_siginin_info.email : ""),
            'token': names,
            'mfa_status': true,
            'user_serial_id': dcc_siginin_info.user_serial_id,
            'security_enabled': false
         }
      }),
      'portal': 'verification',
      'portalsubmit': 'level_2',
      'recall': wizContactVerifyEmailTFAState
   };
   openBodyProgress();
   setTimeout(function () {
      wizContactTFTverifyCode(reqParams);
   }, 1000);
 
 }


function callemailtftauthsupporters() {
   loginemailtftauthvalidator();

   $('form#login_twofact_ver_dcc_form').keyup(function () {

      var inputs = document.getElementsByClassName('dcc_vcode_tfa_verify'),
         names = [].map.call(inputs, function (input) {
            return input.value;
         }).join('');
         if(names.length < 6){
            $('#dcc_vcode_tfa_verify-error').show();
            $('#dcc_vcode_tfa_verify-error').html("Please enter otp");
           }else{
            $('#dcc_vcode_tfa_verify-error').hide();
            $('#dcc_vcode_tfa_verify-error').html("");
           }
   });

  


}


function wizContactTFTverifyCode(reqParams) {
  var earl_dcc_dignin_info = passingsigninfo;


  var dcc_siginin_info = ((earl_dcc_dignin_info) ? earl_dcc_dignin_info : []);


  var data = ajaxDuty(reqParams, 'app/views/html/dcc/login/index.php', 'html', false);
  if (data) {

     data = JSON.parse(data);

     if (data.data.status_code == "415") {
        setTimeout(function () {
           wizContactVerifyEmailTFAState = true;
           reqParams.recall = wizContactVerifyEmailTFAState;
           wizContactTFTverifyCode(reqParams);
        }, 3000);
     } else if (data.data.status_code == "601") {
        closeBodyProgress();
        $('#login_tfactorauth_dcc_form_submit').removeAttr("disabled");
        $('#login_tfactorauth_dcc_form_submit').css("cursor", "pointer");
        $('#login_tfactorauth_dcc_form_submit_wrapper').css("cursor", "pointer");
        dccLogintftSubmitState = true;
        wizContactVerifyEmailTFAState = false;
        //
        indexToastr("error", 'Error', indexMessagesLogin[data.data.status_code], {
           timeOut: 5000
        });
     } else if (data.data.status_code == "603") {
        closeBodyProgress();
        $('#login_tfactorauth_dcc_form_submit').removeAttr("disabled");
        $('#login_tfactorauth_dcc_form_submit').css("cursor", "pointer");
        $('#login_tfactorauth_dcc_form_submit_wrapper').css("cursor", "pointer");
        dccLogintftSubmitState = true;
        wizContactVerifyEmailTFAState = false;
        indexToastr("error", 'Error', 'Mobile number already registered.', {
           timeOut: 5000
        });


     } else if (data.data.status_code == "200" || data.data.status_code == "600") {
        closeBodyProgress();
        wizContactVerifyEmailTFAState = false;
        $('.dcc_vcode_tfa_verify').attr("disabled", "disabled");

        setTimeout(function () {
           localStorage.removeItem("cartCardDetails");
           localStorage.removeItem("wizpersonalOrgInfo");
           localStorage.removeItem("wizContactCompletion");

           localStorage.removeItem("particularTags");
           localStorage.removeItem("particularMembers");
           localStorage.removeItem("particularVms");
           localStorage.removeItem("particularTeam");
           localStorage.removeItem("particularRole");
           localStorage.removeItem("particularVms");


           var ruri = "signup#home";


           var uriAddLi = passingsigninfo.localUriList;


           if (uriAddLi.includes("dashboard")) {
              ruri = "surface#dashboard";
           } else {
              ruri = "surface#" + uriAddLi[0];
           }


           window.location.href = ruri;
           location.reload();
        }, 300);

     } else {
        closeBodyProgress();
        dccLogintftSubmitState = true;
        wizContactVerifyEmailTFAState = false;
        $('#login_tfactorauth_dcc_form_submit').removeAttr("disabled");
        $('#login_tfactorauth_dcc_form_submit').css("cursor", "pointer");
        $('#login_tfactorauth_dcc_form_submit_wrapper').css("cursor", "pointer");
        indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
           timeOut: 5000
        });
        localStorage.setItem("loginSessTime","true");
        opensessPoper();

     }
  }
}
var wizContactVerifyEmailResendState = false;
var wizContactEmailResendCodeBtn = false;
function wizContactEmailResendCode() {

  var earl_dcc_dignin_info = passingsigninfo;


  var dcc_siginin_info = ((earl_dcc_dignin_info) ? earl_dcc_dignin_info : []);

  let reqParams = {
     'from': 'login',
     'secudeco': $('#establish_login_email_ver_dcc_form').val(),
     'data': JSON.stringify({
        'email_id': ((dcc_siginin_info.email) ? dcc_siginin_info.email : ""),
        'mobile_no': "",
        'reset_password': false
     }),
     'portal': 'verification',
     'portalsubmit': 'level_2',
     'recall': wizContactVerifyEmailResendState
  };
  var data = ajaxDuty(reqParams, 'app/views/html/signup/home/index.php', 'html', false);
  if (data) {

     data = JSON.parse(data);

     if (data.data.status_code == "415") {
        setTimeout(function () {
           wizContactVerifyEmailResendState = true;
           wizContactEmailResendCode();
        }, 3000);
     } else if (data.data.status_code == "200") {

        wizContactVerifyEmailResendState = false;
        if(wizContactEmailResendCodeBtn){
         
         indexToastr("success", 'Success', 'OTP sent successfully!', {
            timeOut: 5000
         });
        }
        wizContactEmailResendCodeBtn = true;
        
     } else {
        wizContactVerifyEmailResendState = false;
        indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
           timeOut: 5000
        });
        
     }
  }

}

var wizContactVerifyPhoneResendState = false;

function wizContactPhoneResendCode() {

  oldwizContactPhoneResendCode();
  var earl_dcc_dignin_info = passingsigninfo;


  var dcc_siginin_info = (earl_dcc_dignin_info ? earl_dcc_dignin_info : []);
  var mobno = ((dcc_siginin_info.mobile_no) ? dcc_siginin_info.mobile_no : "");
  var request = new XMLHttpRequest();
  request.open('GET', location.origin + '/api/sms/verifycode?' + mobno, true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Authorization', 'Basic_' + dcc_siginin_info.accessToken);
  request.responseType = 'json';
  request.onload = function () {

     if (request.status === 200) {
        var rdata = request.response;
        if (rdata.status == "ok") {
           indexToastr("success", 'Success', 'SMS code sent successfully!', {
              timeOut: 5000
           });

        } else {
           indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
              timeOut: 5000
           });
        }
     }


  };
  request.send('content=raj');


}

function curlwizContactPhoneResendCode() {


  var earl_dcc_dignin_info = passingsigninfo;


  var dcc_siginin_info = ((earl_dcc_dignin_info) ? earl_dcc_dignin_info : []);


  let reqParams = {
     'from': 'login',
     'secudeco': $('#establish_login_twofact_ver_dcc_form').val(),
     'mobile_no': ((dcc_siginin_info.mobile_no) ? dcc_siginin_info.mobile_no : ""),
     'data': JSON.stringify({
        'mobile_no': ((dcc_siginin_info.mobile_no) ? dcc_siginin_info.mobile_no : ""),
        'email_id': ((dcc_siginin_info.email) ? dcc_siginin_info.email : ""),
        'reset_password': false
     }),
     'portal': 'login',
     'portalsubmit': 'level_3',
     'recall': wizContactVerifyPhoneResendState
  };
  var data = ajaxDuty(reqParams, 'app/views/html/dcc/login/index.php', 'html', false);
  if (data) {

     data = JSON.parse(data);
     if (data.data.status == "ok") {
        indexToastr("success", 'Success', 'SMS code sent successfully!', {
           timeOut: 5000
        });
        wizContactVerifyPhoneResendState = false;

     } else {
        wizContactVerifyPhoneResendState = false;
        indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
           timeOut: 5000
        });
     }

  }

}

function oldwizContactPhoneResendCode() {


  var earl_dcc_dignin_info = passingsigninfo;


  var dcc_siginin_info = ((earl_dcc_dignin_info) ? earl_dcc_dignin_info : []);


  let reqParams = {
     'from': 'login',
     'secudeco': $('#establish_login_twofact_ver_dcc_form').val(),
     'data': JSON.stringify({
        'mobile_no': ((dcc_siginin_info.mobile_no) ? dcc_siginin_info.mobile_no : ""),
        'email_id': ((dcc_siginin_info.email) ? dcc_siginin_info.email : ""),
        'reset_password': false
     }),
     'email_id': ((dcc_siginin_info.mobile_no) ? dcc_siginin_info.mobile_no : ""),
     'portal': 'verification',
     'portalsubmit': 'level_3',
     'recall': wizContactVerifyPhoneResendState
  };
  var data = ajaxDuty(reqParams, 'app/views/html/dcc/login/index.php', 'html', false);
  if (data) {

     data = JSON.parse(data);

  }

}

function olderwizContactPhoneResendCode() {


  var earl_dcc_dignin_info = passingsigninfo;


  var dcc_siginin_info = ((earl_dcc_dignin_info) ? earl_dcc_dignin_info : []);


  let reqParams = {
     'from': 'login',
     'secudeco': $('#establish_login_twofact_ver_dcc_form').val(),
     'data': JSON.stringify({
        'mobile_no': ((dcc_siginin_info.mobile_no) ? dcc_siginin_info.mobile_no : ""),
        'email_id': ((dcc_siginin_info.email) ? dcc_siginin_info.email : ""),
        'reset_password': false
     }),
     'portal': 'verification',
     'portalsubmit': 'level_2',
     'recall': wizContactVerifyPhoneResendState
  };
  var data = ajaxDuty(reqParams, 'app/views/html/signup/home/index.php', 'html', false);
  if (data) {

     data = JSON.parse(data);

     if (data.data.status_code == "415") {
        setTimeout(function () {
           wizContactVerifyPhoneResendState = true;
           wizContactPhoneResendCode();
        }, 3000);
     } else if (data.data.status_code == "200") {
        indexToastr("success", 'Success', 'SMS code sent successfully!', {
           timeOut: 5000
        });
        wizContactVerifyPhoneResendState = false;

     } else {
        wizContactVerifyPhoneResendState = false;
        indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
           timeOut: 5000
        });
     }
  }

}