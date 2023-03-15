var indexMessagesfpwd;
$(function(){
  checkSessionExistforgotPwd();
  loadJSONgeneral(function(response) {  
    indexMessagesfpwd = JSON.parse(response);      
    callfpwdFiles();   
  },"app/views/html/dcc/forgotpassword/index.json");


  
})


function checkSessionExistforgotPwd(){
  let reqParams = {
     'secudeco': $('#establish_fgp_dcc_form').val(),       
       'portal': 'fgp',
       'portalsubmit': 'level_3'        
  };
  var data = ajaxDuty(reqParams, 'app/views/html/dcc/forgotpassword/index.php', 'html', false);
  if (data) {
     
     data = JSON.parse(data);
     
     if(data.status == "error"){

        
        localStorage.setItem("loginSessTime","true");
       opensessPoper();
     
     }else{
        setTimeout(function() {
           checkSessionExistforgotPwd();
        },60000);
     }
     
  }
}

function callfpwdFiles(){

  initFgp();
  commonOTPFocuser('dcc_vcode_verify');

}

function ValidateEmail(inputText){
 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if(inputText.match(mailformat)){  
   $('#dcc_fgp_email').addClass("valid");
   $('#dcc_fgp_email').removeClass("invalid");
   return true;
 }else{    
   $('#dcc_fgp_email').removeClass("valid");
   $('#dcc_fgp_email').addClass("invalid");
   return false;
 }
}
var wizContactVerifyEmailResendState = false;
var wizContactVerifyEmailState = false;
var wizContactResetPwdState = false;
function initFgp(){
//loginFormValidators();
  callSupportFgp();
  formEventHandlers();
}


function hasWhiteSpace(s) {
  if(/\s/g.test(s)){
      return false;
  }else{
      return true;
  }
}

var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


function loginFormValidators(){
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
  
  
}, 'Please enter a valid password.');


$("#fgp_dcc_form").validate({
  rules: {          
    dcc_fgp_email: {
      required: true,
      email:true            
    },
    dcc_fgp_newpwd:{
      required: true,
      password:true
    },
    dcc_fgp_cnewpwd:{
      required: true,
      password:true,
      equalTo:"#dcc_fgp_newpwd"
    }
    },
    
    messages: {
      dcc_fgp_email:{
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
function callSupportFgp(){


 
  var clickedAPwd = 0;
  var clickedAnPwd = 0; 
$(".toggle-password").click(function (e) {
 e.preventDefault();
 var clickedPwd = 0;
 
  if($($(this).attr("toggle")).attr('id') == "dcc_fgp_newpwd"){
    clickedPwd = clickedAPwd;
  }else{
    clickedPwd = clickedAnPwd;
  }
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
   if($($(this).attr("toggle")).attr('id') == "dcc_fgp_newpwd"){
    clickedAPwd = clickedPwd;
  }else{
    clickedAnPwd = clickedPwd;
  }

var input = $($(this).attr("toggle"));
if (input.attr("type") == "password") {
   input.attr("type", "text");
} else {
   input.attr("type", "password");
}
});

}

function fplevelonevalidator(){

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
  
  
}, 'Please enter a valid password.');


jQuery.validator.addMethod("loginmailvalidator", function(value, element) {
  return this.optional(element) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(value);
}, "Please enter a valid email");


$("#fgp_dcc_form").submit(function(e){ e.preventDefault(); }).validate({
  ignore:":hidden",
  ignore:":disabled",
  rules: {   
    dcc_fgp_email: {
      required: true,
      email:true,
      loginmailvalidator:true            
    },
    verifyfgpcode:{
      required: true,
    },
    dcc_fgp_newpwd:{
      required: true,
      password:true
    },
    dcc_fgp_cnewpwd:{
      required: true,
      password:true,
      equalTo:"#dcc_fgp_newpwd"
    }
  },
  submitHandler: function(form) {
    var fgp_dcc_form_level = $('#fgp_dcc_form_level').val(); 
    
    if(fgp_dcc_form_level == "1" || fgp_dcc_form_level == "3"){
      fpfsubmitFinal();
    }else{
      
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
      if (names.length == 6) {
        fpfsubmitFinal();
       }
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

function fpfsubmitFinal(){
  var dcc_fgp_email =$('#dcc_fgp_email').val().toLowerCase();
  $('#fgp_dcc_form_submit').attr("disabled","disabled");
  $('#fgp_dcc_form_submit').css("cursor", "progress");    

  var fgp_dcc_form_level = $('#fgp_dcc_form_level').val(); 
      
  if(fgp_dcc_form_level == "1"){
     var reqParams = {
      'from':'forgotPassword',
      'secudeco':$('#establish_fgp_dcc_form').val(),
        'data':JSON.stringify(
          {
            'email_id':((dcc_fgp_email)?dcc_fgp_email:""),
            'mobile_no':"",
            'reset_password':true
          }
        ),
        'portal':'verification',
        'portalsubmit':'level_2',
        'recall':wizContactVerifyEmailResendState
      };
      openBodyProgress();
     setTimeout(function(){
        wizContactEmailResendCode(reqParams);      
     },1000);
  }else if(fgp_dcc_form_level == "2"){  
     var dcc_vcode_verify = document.getElementsByClassName( 'dcc_vcode_verify' ),
     dcc_vcode_verifynames  = [].map.call(dcc_vcode_verify, function( input ) {
        return input.value;
     }).join( '' );  
     var reqParams = {
      'from':'forgotPassword',
      'secudeco':$('#establish_fgp_dcc_form').val(),
        'data':JSON.stringify(
          {"email":{
            'email_id':((dcc_fgp_email)?dcc_fgp_email:""),
            'token':dcc_vcode_verifynames
          }}
        ),
        'portal':'verification',
        'portalsubmit':'level_11',
        'recall':wizContactVerifyEmailState
      };
      openBodyProgress();
     setTimeout(function(){
        wizContactEmailVerifyCode(reqParams);      
     },1000); 
  }else if(fgp_dcc_form_level == "3"){    
     var password =$('#dcc_fgp_newpwd').val();
     
     var reqParams = {
      'secudeco':$('#establish_fgp_dcc_form').val(),
        'data':JSON.stringify(
          {
            "reset_password":{
              'email_id':((dcc_fgp_email)?dcc_fgp_email:""),
              'new_password':password
            }
          }
        ),
        'portal':'fgp',
        'portalsubmit':'level_1',
        'recall':wizContactResetPwdState
      };
      openBodyProgress();
     setTimeout(function(){
        wizContactEmailResetPwd(reqParams);      
     },1000); 
  }
}

var fovalo = true;
var fovals = true;
var fovalt = true;
function formEventHandlers(){
  fplevelonevalidator();
  

  $('form#fgp_dcc_form').on('keyup keypress blur change mouseenter', function() {
    
    var fgp_dcc_form_level = $('#fgp_dcc_form_level').val(); 
        
    if(fgp_dcc_form_level == "1"){
     
     

      if(fovalo){
        
        fplevelonevalidator();
        fovalo = false;
      }
    }else if(fgp_dcc_form_level == "2"){
      if(fovals){
        
        fplevelonevalidator();
        fovals = false;
      }

      
    }else if(fgp_dcc_form_level == "3"){
      
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

      if(fovalt){
        
        fplevelonevalidator();
        fovalt = false;
      }
       

    }
    
  });



}

function wizContactEmailResetPwd(reqParams){
 $('#fgp_dcc_form_submit').attr("disabled","disabled");
 $('#fgp_dcc_form_submit').css("cursor", "progress"); 
 var data = ajaxDuty(reqParams, 'app/views/html/dcc/forgotpassword/index.php', 'html', false);
 if (data) {        
   
   data = JSON.parse(data);
   //indexMessagesfpwd[data.data.status_code]
   if(data.data.status_code == "1001"){  
    closeBodyProgress();
    wizContactResetPwdState = false;                
    indexToastr("error",'Error',indexMessagesfpwd[data.data.status_code],{timeOut: 5000});
    $('#fgp_dcc_form_submit').removeAttr("disabled");
   $('#fgp_dcc_form_submit').css("cursor", "pointer");           
   }else if(data.data.status_code == "415"){      
     setTimeout(function(){
       wizContactResetPwdState = true;
       reqParams.recall = wizContactResetPwdState;
       wizContactEmailResetPwd(reqParams);
     },3000);
   }else if(data.data.status_code == "200" || data.data.status_code == "1000"){  
    closeBodyProgress();      
    $('#fgp_dcc_form_submit').removeAttr("disabled");
    $('#fgp_dcc_form_submit').css("cursor", "pointer"); 
     wizContactResetPwdState = false;    
     indexToastr("success",'Success','Success',{timeOut: 5000});           
     var ruri = "dcc#login";         
       window.location.href = ruri;
       location.reload();   
     
            
   }else{   
    closeBodyProgress();  
     wizContactResetPwdState = false;                
     indexToastr("error",'Error','Error Occured! Contact Administrator.',{timeOut: 5000});
     $('#fgp_dcc_form_submit').removeAttr("disabled");
    $('#fgp_dcc_form_submit').css("cursor", "pointer");
    
    localStorage.setItem("loginSessTime","true");
       opensessPoper();


   }
 }  
}
function wizContactEmailResendCode(reqParams){
$('#dcc_fgp_email').attr("disabled","disabled");
 $('#fgp_dcc_form_submit').attr("disabled","disabled");
    $('#fgp_dcc_form_submit').css("cursor", "progress");    
 var data = ajaxDuty(reqParams, 'app/views/html/dcc/forgotpassword/index.php', 'html', false);
 if (data) {        
   
   data = JSON.parse(data);
   
   if(data.data.status_code == "415"){      
     setTimeout(function(){
       wizContactVerifyEmailResendState = true;
       reqParams.recall = wizContactVerifyEmailResendState;
       wizContactEmailResendCode(reqParams);
     },3000);
    }else if(data.data.status_code == "614"){  
      $('#dcc_fgp_email').removeAttr("disabled");
      closeBodyProgress(); 
      wizContactVerifyEmailResendState = false;                
      indexToastr("error",'Error',indexMessagesfpwd[data.data.status_code],{timeOut: 5000});
      $('#fgp_dcc_form_submit').removeAttr("disabled");
     $('#fgp_dcc_form_submit').css("cursor", "pointer");    
   }else if(data.data.status_code == "612"){  
    closeBodyProgress();
    $('#fgp_dcc_form_submit').removeAttr("disabled");
    $('.dcc_vcode_verify').removeAttr("disabled");     
    $('#fgp_dcc_form_submit').html("Verify");
    $('#fgp_dcc_form_level').val("2");
     wizContactVerifyEmailResendState = false;                
     indexToastr("success",'Success','Success',{timeOut: 5000});  
    
    $('#fgp_dcc_form_submit').css("cursor", "pointer");        
   }else{    
    $('#dcc_fgp_email').removeAttr("disabled");
    closeBodyProgress(); 
     wizContactVerifyEmailResendState = false;                
     indexToastr("error",'Error','Error Occured! Contact Administrator.',{timeOut: 5000});
     $('#fgp_dcc_form_submit').removeAttr("disabled");
    $('#fgp_dcc_form_submit').css("cursor", "pointer");  
    
    localStorage.setItem("loginSessTime","true");
       opensessPoper();

   }
 }  

}


function wizContactEmailVerifyCode(reqParams){
 $('#fgp_dcc_form_submit').attr("disabled","disabled");
 $('#fgp_dcc_form_submit').css("cursor", "progress");    

 var data = ajaxDuty(reqParams, 'app/views/html/signup/home/index.php', 'html', false);
 if (data) {        
   
   data = JSON.parse(data);
   
   if(data.data.status_code == "415"){      
     setTimeout(function(){
       wizContactVerifyEmailState = true;
       reqParams.recall = wizContactVerifyEmailState;
       wizContactEmailVerifyCode(reqParams);
     },3000);
   }else if(data.data.status_code == "603"){  
    closeBodyProgress(); 
    $('#fgp_dcc_form_submit').removeAttr("disabled");
    $('#fgp_dcc_form_submit').css("cursor", "pointer");  
     wizContactVerifyEmailState = false;          
     indexToastr("error",'Error',indexMessagesfpwd[data.data.status_code],{timeOut: 5000});  
   }else if(data.data.status_code == "200" || data.data.status_code == "602"){
    closeBodyProgress();
    $('#dcc_vcode_wrapper').hide();     
    $('#dcc_newpassword_wrapper').show();     
    $('#dcc_fgp_newpwd').removeAttr("disabled");     
    $('#dcc_confirmnewpassword_wrapper').show();  
    $('#dcc_fgp_cnewpwd').removeAttr("disabled"); 
    $('#fgp_dcc_form_submit').removeAttr("disabled");       
    $('#fgp_dcc_form_submit').html("Reset Password");
    $('#fgp_dcc_form_level').val("3");
     wizContactVerifyEmailState = false;      
     
     $('#fgp_dcc_form_submit').css("cursor", "pointer");  
     
     indexToastr("success",'Success','Success',{timeOut: 5000});
     
   }else{    
    closeBodyProgress();
    $('#fgp_dcc_form_submit').removeAttr("disabled");
    $('#fgp_dcc_form_submit').css("cursor", "pointer");  
     wizContactVerifyEmailState = false;       
     indexToastr("error",'Error','Error Occured! Contact Administrator.',{timeOut: 5000});
     localStorage.setItem("loginSessTime","true");
       opensessPoper();
       
   }
 }  
}