

<?php

require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/backend.php';

$_SESSION['token_illustrate_login_dcc_form'] =(
  (
    isset($_SESSION['token_illustrate_login_dcc_form']) 
    && 
    !empty($_SESSION['token_illustrate_login_dcc_form'])
  )
  ?
  $_SESSION['token_illustrate_login_dcc_form']
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


    <!-- BEGIN: Custom CSS-->
    
    <link rel="stylesheet" type="text/css" href="app/views/html/dcc/login/index.css">
    <style>
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
        margin: 0 3px;
      }
      .verification-code--inputs input[type="text"]:focus {
        border: 1px solid #6DCCDD !important;
        box-shadow: 0 1px 0 0 #6dccdd !important;
      }
      
      /* @media only screen and (min-width: 992px)
      { 
      .verification-code--inputs input[type="text"] {   
        margin: 0 9px 0 8px !important;
      }
      } */
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
    <!-- END: Custom CSS-->
    
    
      <div class="col s12 login-bg" >
        <div class="container">
          <div class="login-bg-img">
            <img src="app/views/assets/img/login/bg-login.png" alt="Logo" />
          </div>
          <div id="login-page" class="row">
            <div class="col s12 m6 l4 z-depth-4 card-panel border-radius-0 login-card bg-opacity-8">

              <form    class="login-form" id="login_dcc_form" method="post"  enctype="multipart/form-data" autocomplete="off">
                <input type="hidden" id="establish_login_dcc_form" value="<?php echo $_SESSION['token_illustrate_login_dcc_form']; ?>" >
                <a href="#login"><div class="center login-logo-m">
                  <img src="app/views/assets/img/login/detacloud.png" width="250"  alt="Logo" />
                </div></a>
                <div class="row">
                  <div class="input-field col s12">
                    <h5 class="ml-4 center">Welcome !</h5>
                    <p class="ml-4 center mb-2">Please sign-in to your account.</p>
                  </div>
                </div>
                <div class="row margin">
                  <div class="col s12 input-field input-outlined mt-0">
                    <input name="email" id="login_dcc_email" type="text" class="validate" autocomplete="off" readonly
                onclick="this.removeAttribute(
                    'readOnly');" onkeyup="this.removeAttribute(
                    'readOnly');" >
                    <label id="login_dcc_email_label" for="login_dcc_email">Email Address</label>
                  </div>
                </div>
                <div class="row margin">
                  <div class="col s12 input-field input-outlined mt-0">
                    <input name="password" id="login_dcc_pwd" type="password" class="validate " autocomplete="off" readonly
                onclick="this.removeAttribute(
                    'readOnly');" onkeyup="this.removeAttribute(
                    'readOnly');">
                    <label id="login_dcc_pwd_label" for="login_dcc_pwd">Password</label>
                    <i toggle="#login_dcc_pwd" class="fa fa-eye prefix pt-2 toggle-password cursor-pointer"></i>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s6 m6 l6 mt-0 pl-7">
                    <p class="mt-0">
                      <label>
                        <input  class="rememberMeDccLogin" onclick="lsRememberMe()" id="rememberMeDccLogin"  type="checkbox" />
                        <span>Remember Me</span>
                      </label>
                    </p>
                  </div>
                  <div class="input-field col s6 m6 l6 mt-0 pr-7">
                    <p class="margin right-align medium-small">
                      <a href="#forgotpassword" style="color:#46aec7; font-weight: 500;">Forgot password ?</a>
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 pl-7 pr-7 mt-0" id="login_dcc_form_submit_wrapper" >
                    <button type="submit"  id="login_dcc_form_submit"   class="btn login-btn waves-effect waves-light border-round-7 gradient-45deg-purple-deep-orange col s12">LOGIN</button>
                  </div>
                </div>                
                <div class="row">                 
                  <p class="center">Do not have an account yet ? <a href="#register" style="color:#46aec7; font-weight: 500;">Create an account</a></p>
                </div>
                
              </form>


              <form style="display:none;" class="login-form" id="login_email_ver_dcc_form" autocomplete="off" >
              <input type="hidden" id="establish_login_email_ver_dcc_form" value="<?php echo $_SESSION['token_illustrate_login_dcc_form']; ?>" >
                <div class="center">
                  <img src="app/views/assets/img/login/detacloud.png" width="250"  alt="Logo" />
                  </div>
                <div class="row">
                  <div class="input-field col s12">
                    <h5 class="center">Email Verification</h5>
                    <p class="pt-4 center">We've send you a verification code message. Please enter the 6-digit code below.</p>
                  </div>
                </div>
                <div class="row margin">
                    <div class="col s12 input-field input-outlined mt-0">
                      <input disabled name="email" id="emailverify_dcc_email" type="text" class="validate" disabled>
                      <label class="active" for="emailverify_dcc_email">Email Address</label>
                    </div>
                </div>
                <div class="row">
                  <div class="col s12 input-field input-outlined mt-0">
                    <div class="verification-code">
                      <div class="verification-code--inputs">
                        <input  class="ml-0 dcc_vcode_verify validate" name="verifyemaillogincode[]" type="text" maxlength="1">
                        <input  class=" dcc_vcode_verify validate" name="verifyemaillogincode[]" type="text" maxlength="1">
                        <input  class=" dcc_vcode_verify validate" name="verifyemaillogincode[]" type="text" maxlength="1">
                        <input  class=" dcc_vcode_verify validate" name="verifyemaillogincode[]" type="text" maxlength="1">
                        <input  class=" dcc_vcode_verify validate" name="verifyemaillogincode[]" type="text" maxlength="1">
                        <input  class=" dcc_vcode_verify validate" name="verifyemaillogincode[]" type="text" maxlength="1">
                        <div style="display:none;" id="dcc_vcode_verify-error" class="error" style="">Please enter otp.</div>
                      </div>
                    </div>
                  </div>
                  <p class="red-text center hide">Incorrect 2FA code. Try re-entering the code.</p>
                </div>
                <div class="row">
                  <div class="input-field col s12 pl-7 pr-7" id="login_email_ver_dcc_form_submit_wrapper">
                    <button type="submit"  id="login_email_ver_dcc_form_submit" class="btn login-btn verify-btn waves-effect waves-light border-round-7 gradient-45deg-purple-deep-orange col s12">Verify</button>
                  </div>
                </div>
                <div class="row">
                    <div class="input-field col s12 pl-7 center">
                      <p class="margin medium-small"><a onClick="wizContactEmailResendCode()" id="login_email_resend_dcc_form_submit" style="color:#46aec7; font-weight: 500;cursor:pointer;">Resend Code</a></p>
                    </div>
                </div>
              </form>


              <form style="display:none;" class="login-form" id="login_twofact_ver_dcc_form" autocomplete="off" >
              <input type="hidden" id="establish_login_twofact_ver_dcc_form" value="<?php echo $_SESSION['token_illustrate_login_dcc_form']; ?>" >
                <div class="center">
                  <img src="app/views/assets/img/login/detacloud.png" width="250"  alt="Logo" />
                  </div>
                <div class="row">
                  <div class="input-field col s12">
                    <h5 class="center">Two-Factor Authentication</h5>
                    <p class="pt-4 center">Your account is protected with 2FA. We've sent you a verfication code message. Please enter the 6-digit code below.</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12 input-field input-outlined mt-0">
                    <div class="verification-code">
                      <div class="verification-code--inputs">
                        <input class="ml-0 dcc_vcode_tfa_verify validate" name="verifytfactorlogincode[]" type="text" maxlength="1">
                        <input class="dcc_vcode_tfa_verify validate" name="verifytfactorlogincode[]" type="text" maxlength="1">
                        <input class="dcc_vcode_tfa_verify validate" name="verifytfactorlogincode[]" type="text" maxlength="1">
                        <input class="dcc_vcode_tfa_verify validate" name="verifytfactorlogincode[]" type="text" maxlength="1">
                        <input class="dcc_vcode_tfa_verify validate" name="verifytfactorlogincode[]" type="text" maxlength="1">
                        <input class="dcc_vcode_tfa_verify validate" name="verifytfactorlogincode[]" type="text" maxlength="1">
                        <div style="display:none;" id="dcc_vcode_tfa_verify-error" class="error" style="">Please enter otp.</div>
                      </div>
                    </div>
                  </div>
                  <p class="col s12 red-text center hide">Incorrect 2FA code. Try re-entering the code.</p>
                </div>
                <div class="row">
                  <div class="input-field col s12 pl-7 pr-7" id="login_tfactorauth_dcc_form_submit_wrapper">
                    <button type="submit"  id="login_tfactorauth_dcc_form_submit" class="btn login-btn verify-btn waves-effect waves-light border-round-7 gradient-45deg-purple-deep-orange col s12">Verify</button>
                  </div>
                </div>
                <div class="row">
                    <div class="input-field col s12 pl-7 center">
                      <p onClick="wizContactPhoneResendCode()" class="margin medium-small"><a id="login_tfactorauth_resend_dcc_form_submit" style="color:#46aec7; font-weight: 500;    cursor: pointer;">Resend Code</a></p>
                    </div>
                </div>
              </form>



            </div>
          </div>
        </div>
        <div class="content-overlay"></div>
      </div>
    
   
