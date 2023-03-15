var indexMessagesregister;
$(function(){
  checkSessionExistSignup();
  loadJSONgeneral(function(response) {  
    indexMessagesregister = JSON.parse(response);      
    callregisterFiles();   
  },"app/views/html/dcc/register/index.json");

  
});

function checkSessionExistSignup(){
  let reqParams = {
     'secudeco': $('#establish_signup_individual_form').val(),       
       'portal': 'signup',
       'portalsubmit': 'level_2'        
  };
  var data = ajaxDuty(reqParams, 'app/views/html/dcc/register/index.php', 'html', false);
  if (data) {
     
     data = JSON.parse(data);
     
     if(data.status == "error"){

        
        localStorage.setItem("loginSessTime","true");
       opensessPoper();
     }else if(data.status == "screen"){
        location.reload();
     }else{
        setTimeout(function() {
           checkSessionExistSignup();
        },60000);
     }
     
  }
}

function callregisterFiles(){
  initSignup();   
  localStorage.removeItem("account_type_signup_pob");
  
}
var dccSignupRecallState = false;
var allowCaptchaResponse = false;

function initSignup(){

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


var clickedNPwd = 0;

$(".togglen-password").click(function (e) {
   e.preventDefault();

  $(this).toggleClass("togglen-password");
    if (clickedNPwd == 0) {
      
      $(this).removeClass('fa-eye');
        $(this).addClass('fa-eye-slash');

       clickedNPwd = 1;
    } else {
      $(this).removeClass('fa-eye-slash');
        $(this).addClass('fa-eye');
        
        clickedNPwd = 0;
     }

  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
     input.attr("type", "text");
  } else {
     input.attr("type", "password");
  }
});
  
  dccSignupCaptcha(); 
  dccSignupFormHandlers();   
  loginFormValidators();
}

function dccSignupCaptcha(){
  $('.recaptcha').each(function() {
    grecaptcha.render(this.id, {
      
      'sitekey': '6Lc5io4hAAAAAKpevcsm1gYAMOrL_iR4uGOl76KO',
      "theme":"light",
      "callback":"dccSignupCatchaVerification",
      "expired-callback":"dccSignupExpiredVerification"
    });
  });
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
    
    
  }, 'Minimum 8 characters long, number, uppercase & symbol without empty spaces');


jQuery.validator.addMethod("loginmailvalidator", function(value, element) {
  return this.optional(element) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(value);
}, "Please enter a valid email");

  $("#signup_individual_form").submit(function(e){ e.preventDefault(); }).validate({
  
    rules: {          
      email: {
        required: true,
        email:true,
        loginmailvalidator:true                        
      },
      signup_indiv_pwd:{
        required: true,
        password:true
      },
      signup_indiv_npwd:{
        required: true,
        password:true,
        equalTo:"#signup_indiv_pwd"
      }

      },
      submitHandler: function(form) {
        
        var dcc_signup_agree = (($('#agree_terms_signup:checkbox:checked').length == 1)?true:false);
        if(!allowCaptchaResponse){
          indexToastr("error",'Error',"Kindly complete the captcha",{timeOut: 5000});      
        }
        if(allowCaptchaResponse && dcc_signup_agree ){
          regFSubmit();
        }
       
       
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
function regFSubmit(){
  openBodyProgress(); 
    $('#signup_indiv_form_submit').attr("disabled","disabled");
    $('#signup_indiv_form_submit').css("cursor", "progress");    
    $('#signup_indiv_form_submit_wrapper').css("cursor", "progress");    
    var reqParams = {
      'secudeco':$('#establish_signup_individual_form').val(),
      'data':JSON.stringify(
        {
          'email_id':$('#signup_indiv_email').val().toLowerCase(),
          'password':$('#signup_indiv_pwd').val(),
          'account_type':$('#type_customer_signup').val(),
          'social_login':'0'
        }
      ),
      'portal':'signup',
      'portalsubmit':'level_1',
      'recall':dccSignupRecallState
    };
    setTimeout(function(){
      dccSignupFormSubmit(reqParams);      
    },1000);

}
function dccSignupFormHandlers(){
  $("#signup_individual").click(function(){
    $(this).addClass("active");
    $('#signup_indiv_email_label').html("Email Address");
    $("#signup_legal").removeClass("active");
    $('#type_customer_signup').val("personal");
  });

  $("#signup_legal").click(function(){
    $(this).addClass("active");
    $('#signup_indiv_email_label').html(" Email Address");
    $("#signup_individual").removeClass("active");
    $('#type_customer_signup').val("legal");            
  });

}

function ValidateEmail(inputText){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.match(mailformat)){  
    $('#signup_indiv_email').addClass("valid");
    $('#signup_indiv_email').removeClass("invalid");
    return true;
  }else{    
    $('#signup_indiv_email').removeClass("valid");
    $('#signup_indiv_email').addClass("invalid");
    return false;
  }
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  
}

function dccSignupFormSubmit(reqParams){
  
  var data = ajaxDuty(reqParams, 'app/views/html/dcc/register/index.php', 'html', false);
  if (data) {    
    
    data = JSON.parse(data);  
    
    if((data.data.status_code == "500" && data.data.status_msg == "inprogess") || (data.data.status_code == "415")){
      setTimeout(function(){
        dccSignupRecallState = true;
        reqParams.recall = dccSignupRecallState;
        dccSignupFormSubmit(reqParams);
      },3000);
    }else if(data.data.status_code == "200"){
      closeBodyProgress();
      
      setLocalStorageInServ("dcc_siginin_info",JSON.stringify({
        "email": JSON.parse(reqParams.data).email_id,
        "pwd":JSON.parse(reqParams.data).password,
        "account_type":JSON.parse(reqParams.data).account_type,
        "social_login":"0",
        "tenant_id":data.data.tenant_id,
        "user_serial_id":data.data.user_serial_id,          
        "completed_stepper": data.data.completed_stepper,
        "payment_card_status": data.data.payment_card_status,
        "legal_status": data.data.legal_status,
        "lang": data.data.lang         
      }));

      


     

      setTimeout(function(){
        localStorage.removeItem("cartCardDetails");
        localStorage.removeItem("wizpersonalOrgInfo");
        localStorage.removeItem("wizContactCompletion");
        

        dccSignupRecallState = false;
        window.location.href = "signup#home";
        location.reload();
      },300);
    }else if(data.data.status_code == "401"){  
      closeBodyProgress();
      $('#signup_indiv_form_submit').removeAttr("disabled");
    $('#signup_indiv_form_submit').css("cursor", "pointer");    
    $('#signup_indiv_form_submit_wrapper').css("cursor", "pointer");   
      dccSignupRecallState = false;  
      indexToastr("error",'Error',data.data.status_msg,{timeOut: 5000});      
    }else{  
      closeBodyProgress();      
      $('#signup_indiv_form_submit').removeAttr("disabled");
      $('#signup_indiv_form_submit').css("cursor", "pointer");    
      $('#signup_indiv_form_submit_wrapper').css("cursor", "pointer"); 
      dccSignupRecallState = false;  
      indexToastr("error",'Error','Error Occured! Contact Administrator.',{timeOut: 5000});
      localStorage.setItem("loginSessTime","true");
        opensessPoper();
    }
    $('#signup_indiv_form_submit').css("cursor", "pointer");
    
  } 
}

function dccSignupCatchaVerification(){
  allowCaptchaResponse = true;  
  $('#signup_indiv_form_submit').keyup();
}
 
function dccSignupExpiredVerification(){
  allowCaptchaResponse = false;  
  $('#signup_indiv_form_submit').keyup();
}

