<?php

require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/backend.php';

$_SESSION['token_illustrate_fgp_dcc_form'] =(
  (
    isset($_SESSION['token_illustrate_fgp_dcc_form']) 
    && 
    !empty($_SESSION['token_illustrate_fgp_dcc_form'])
  )
  ?
  $_SESSION['token_illustrate_fgp_dcc_form']
  :
  bin2hex(random_bytes(32))
);

$_SESSION['token_common_formSubmit'] =(
  (
    isset($_SESSION['token_common_formSubmit']) 
    && 
    !empty($_SESSION['token_common_formSubmit'])
  )
  ?
  $_SESSION['token_common_formSubmit']
  :
  bin2hex(random_bytes(32))
);



echo '<input type="hidden" value="'.$_SESSION['token_common_formSubmit'].'" id="establish_common_formSubmit" >';
?>

<link rel="stylesheet" type="text/css" href="app/views/html/dcc/login/developer.css">
<link rel="stylesheet" type="text/css" href="app/views/html/dcc/forgotpassword/index.css">
<style>
  /* .login-bg {
  background-image: url(../../../../../app/views/assets/img/login/BG-Login.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #F4FFFE;
} */

.login-bg {
  /* background-image: url(../../../../../app/views/assets/img/login/BG-Login.png); */
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: #F4FFFE; */
  background: linear-gradient(45deg,#013850,#0773a5)!important;
}

.login-bg-img {
  width: 100%;
  height: 100%;
  position: fixed;
  display: inline-block;
}
.login-bg-img  img {
  width: 100%;
  position: absolute;
  top: -162px;
}

#login-page .login-card {
  position: fixed;
  display: flex;
  align-items: center;
  right: 0;
  height: 100%;
  margin: 0;
}

#login-page .card-panel {
 border-radius: 0px;
}

#login-page .bg-opacity-8 {
  background-color: #fff;
}

.forgot-btn {
  height: 47px;
  padding: 7px !important;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
  color: #212121;
}

a {
  color: #205865;
  font-weight: 500;
}

.gradient-45deg-purple-deep-orange {
  border-radius: 7px;
  background: #06597F !important;
  background: #06597F !important;
}

/* Input field  Css*/
.input-field>label {
  color: #BDBEC6;
}
.input-field.input-outlined > input {
  border: 1px solid #c7c7c7;
  padding: 0px 15px;
  width: calc(100% - 2.5rem);
  float: none;
  display: block;
  border-radius: 7px;
  transition: box-shadow, border-color 0.15s;
}
.input-field.input-outlined > input:focus:not([readonly]) {
  border-color: #7BCCC8;
  box-shadow: 0 1px 0 0px #7BCCC8;
}
.input-field.input-outlined > label {
  left: 27px;
  display: inline-flex;
  width: auto !important;
}
.input-field.input-outlined > label.active {
  background: white;
  border-left: 4px solid white;
  border-right: 4px solid white;
  transform: translateY(-1.75rem);
  top: 1rem;
}

.input-field .prefix {
  position: absolute;
  right: 5px;
  font-size: 20px;
  color: #90B2BA;
}

.input-field .prefix.active {
  color: #7BCCC8;
}

[type=checkbox]+span:not(.lever):before, [type=checkbox]:not(.filled-in)+span:not(.lever):after {
  border: 2px solid #D9D9DB;
}

[type=checkbox]:checked+span:not(.lever):before {
  border-right: 2px solid #7BCCC8;
  border-bottom: 2px solid #7BCCC8;
}

input:not([type]):focus:not([readonly])+label, input[type=date]:not(.browser-default):focus:not([readonly])+label, input[type=datetime-local]:not(.browser-default):focus:not([readonly])+label, input[type=datetime]:not(.browser-default):focus:not([readonly])+label, input[type=email]:not(.browser-default):focus:not([readonly])+label, input[type=number]:not(.browser-default):focus:not([readonly])+label, input[type=password]:not(.browser-default):focus:not([readonly])+label, input[type=search]:not(.browser-default):focus:not([readonly])+label, input[type=tel]:not(.browser-default):focus:not([readonly])+label, input[type=text]:not(.browser-default):focus:not([readonly])+label, input[type=time]:not(.browser-default):focus:not([readonly])+label, input[type=url]:not(.browser-default):focus:not([readonly])+label, textarea.materialize-textarea:focus:not([readonly])+label {
  color: #01404F;
}

input:not([type]):disabled, input:not([type])[readonly='readonly'], input[type=text]:not(.browser-default):disabled, input[type=text]:not(.browser-default)[readonly='readonly'], input[type=password]:not(.browser-default):disabled, input[type=password]:not(.browser-default)[readonly='readonly'], input[type=email]:not(.browser-default):disabled, input[type=email]:not(.browser-default)[readonly='readonly'], input[type=url]:not(.browser-default):disabled, input[type=url]:not(.browser-default)[readonly='readonly'], input[type=time]:not(.browser-default):disabled, input[type=time]:not(.browser-default)[readonly='readonly'], input[type=date]:not(.browser-default):disabled, input[type=date]:not(.browser-default)[readonly='readonly'], input[type=datetime]:not(.browser-default):disabled, input[type=datetime]:not(.browser-default)[readonly='readonly'], input[type=datetime-local]:not(.browser-default):disabled, input[type=datetime-local]:not(.browser-default)[readonly='readonly'], input[type=tel]:not(.browser-default):disabled, input[type=tel]:not(.browser-default)[readonly='readonly'], input[type=number]:not(.browser-default):disabled, input[type=number]:not(.browser-default)[readonly='readonly'], input[type=search]:not(.browser-default):disabled, input[type=search]:not(.browser-default)[readonly='readonly'], textarea.materialize-textarea:disabled, textarea.materialize-textarea[readonly='readonly'] {
  border-bottom: 2px solid #c7c7c7;
}

.verification-code {
  width: 100%;
  position: relative;
  margin: 0px auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.control-label {
  display: block;
  font-weight: 900;
  color: #727272 !important;
  text-align: left;
  padding-bottom: 5px;
}
.verification-code--inputs input[type="text"] {
  border: 2px solid #c7c7c7;
  width: 46px;
  height: 46px;
  background: #FFF;
  padding: 10px;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 7px;
  margin: 0 5px;
}
.verification-code--inputs input[type="text"]:focus {
  border: 1px solid #6DCCDD !important;
  box-shadow: 0 1px 0 0 #6dccdd !important;
}

@media only screen and (min-width: 1920px)
{ 
.verification-code--inputs input[type="text"] {   
  margin: 0 25px !important;
}
.input-field .prefix {
  top: 3px;
}
}
</style>
<div class="col s12 login-bg">
    <div class="container">
      <div class="login-bg-img">
        <img src="app/views/assets/img/login/bg-login.png" alt="Logo" />
      </div>
      <div id="login-page" class="row">
        <div class="col s12 m6 l4 z-depth-4 card-panel border-radius-0 login-card bg-opacity-8">
          <form class="login-form" id="fgp_dcc_form" autocomplete="off">
          <input type="hidden" id="establish_fgp_dcc_form" value="<?php echo $_SESSION['token_illustrate_fgp_dcc_form']; ?>" >
          
            <a href="#login"> <div class="center">
                <img src="app/views/assets/img/login/detacloud.png" width="250" alt="Logo" />
              </div></a>
            <div class="row">
              <div class="input-field col s12">
                <h5 class="ml-4 center">Forgot your password ?</h5>
                <p class="ml-4 pt-4">Enter your email address that you used to register. We'll send you an email with a link to reset your password.</p>
              </div>
            </div>
            <div class="row margin">
              <div class="col s12 input-field input-outlined">
                <input id="dcc_fgp_email" name="dcc_fgp_email" type="email" class="validate">
                <label for="dcc_fgp_email">Email Address</label>
              </div>
            </div>
            <div class="row" id="dcc_vcode_wrapper" >
              <div class="col s12 input-field input-outlined">
                <div class="verification-code">
                  <div class="verification-code--inputs">
                    <input disabled class="ml-0 dcc_vcode_verify validate" name="verifyfgpcode[]" type="text" maxlength="1">
                    <input disabled class="dcc_vcode_verify validate" name="verifyfgpcode[]" type="text" maxlength="1">
                    <input disabled class="dcc_vcode_verify validate" name="verifyfgpcode[]" type="text" maxlength="1">
                    <input disabled class="dcc_vcode_verify validate" name="verifyfgpcode[]" type="text" maxlength="1">
                    <input disabled class="dcc_vcode_verify validate" name="verifyfgpcode[]" type="text" maxlength="1">
                    <input disabled class="dcc_vcode_verify validate" name="verifyfgpcode[]" type="text" maxlength="1">
                    <div style="display:none;" id="dcc_vcode_verify-error" class="error" style="">Please enter otp.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row margin" id="dcc_newpassword_wrapper" style="display:none;" >
              <div class="col s12 input-field input-outlined  mt-0">
                <input disabled id="dcc_fgp_newpwd" type="password" class="validate">
                <label for="dcc_fgp_newpwd">New Password</label>
                <i toggle="#dcc_fgp_newpwd" class="fa fa-eye prefix pt-2 toggle-password cursor-pointer"></i>
              </div>
            </div>
            <div class="row margin" id="dcc_confirmnewpassword_wrapper" style="display:none;" >
              <div class="col s12 input-field input-outlined  mt-0">
                <input disabled id="dcc_fgp_cnewpwd" type="password" class="validate">
                <label for="dcc_fgp_cnewpwd">Confirm Password</label>
                <i toggle="#dcc_fgp_cnewpwd" class="fa fa-eye prefix pt-2 toggle-password cursor-pointer"></i>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12 pl-7 pr-7">
                <input type="hidden" id="fgp_dcc_form_level" value="1">
                <button type="submit"  id="fgp_dcc_form_submit"  class="btn forgot-btn waves-effect waves-light border-round-7 gradient-45deg-purple-deep-orange col s12">Send Verification Code</button>
              </div>
            </div>
            <div class="row">
                <div class="input-field col s6 m6 l6 pl-7">
                  <p class="margin medium-small"><a href="#login" style="color:#46aec7; font-weight: 500;" >Back to Login</a></p>
                </div>
                <div class="input-field col s6 m6 l6 pr-7">
                  <p class="margin right-align medium-small"><a href="#register" style="color:#46aec7; font-weight: 500;" >Create your account</a></p>
                </div>
              </div>
          </form>
        </div>
      </div>
    </div>
    <div class="content-overlay"></div>
  </div>