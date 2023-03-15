<?php

require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/backend.php';


$_SESSION['token_illustrate_signup_individual_form'] =(
    (
      isset($_SESSION['token_illustrate_signup_individual_form']) 
      && 
      !empty($_SESSION['token_illustrate_signup_individual_form'])
    )
    ?
    $_SESSION['token_illustrate_signup_individual_form']
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
    
    <link rel="stylesheet" type="text/css" href="app/views/html/dcc/register/index.css">

      <div class="col s12 login-bg">
        <div class="container">
            <div class="login-bg-img">
                <img src="app/views/assets/img/login/bg-login.png" alt="Logo" />
            </div>
          <div id="login-page" class="row">
            
            <div class="col s12 m6 l4 z-depth-4 card-panel border-radius-0 login-card bg-opacity-8">
                <div class="login-form">
                <a href="#login"><div class="center">
                    <img src="app/views/assets/img/login/detacloud.png" width="250"  alt="Logo" />
                </div></a>
                <div class="row">
                    <div class="input-field col s12">
                        <h5 class="ml-4 center">Create your account</h5>
                    </div>
                </div>
                <!--Fixed Width Tabs-->
                <div class="row">
                    <div class="col s12">
                        <ul class="tabs tabs-fixed-width tab-demo z-depth-1">
                            <input type="hidden" id="type_customer_signup" value="personal">
                            <li style="cursor:pointer;" class="tab"><a class="active" id="signup_individual">Personal</a></li>
                            <li style="cursor:pointer;" class="tab"><a id="signup_legal">Legal Entity</a></li>
                        </ul>
                    </div>
                    <div class="col s12 mt-3">
                        <div id="screen_individual" class="col s12 pl-0 pr-0">
                            <form id="signup_individual_form" method="post"  enctype="multipart/form-data" autocomplete="off">
                            <input type="hidden" id="establish_signup_individual_form" value="<?php echo $_SESSION['token_illustrate_signup_individual_form']; ?>" >
                                <div class="row margin">
                                    <div class="col s12 input-field input-outlined">
                                        <input autocomplete="off" readonly
                onclick="this.removeAttribute(
                    'readOnly');" onkeyup="this.removeAttribute(
                    'readOnly');" name="email" id="signup_indiv_email"  type="email" class="validate">
                                        <label for="signup_indiv_email" id="signup_indiv_email_label">Email Address</label>
                                    </div>
                                </div>
                                <div class="row margin">
                                    <div class="col s12 input-field input-outlined mt-0">
                                      <input autocomplete="off" readonly
                onclick="this.removeAttribute(
                    'readOnly');" onkeyup="this.removeAttribute(
                    'readOnly');" name="signup_indiv_pwd" id="signup_indiv_pwd" type="password" class="validate">
                                      <label for="signup_indiv_pwd">New Password</label>
                                      <i toggle="#signup_indiv_pwd"  class="toggle-password fa fa-eye prefix pt-2 cursor-pointer"></i>
                                    </div>
                                </div>
                                <div class="row margin">
                                    <div class="col s12 input-field input-outlined mt-0">
                                      <input autocomplete="off" readonly
                onclick="this.removeAttribute(
                    'readOnly');" onkeyup="this.removeAttribute(
                    'readOnly');" name="signup_indiv_npwd" id="signup_indiv_npwd" type="password" class="validate">
                                      <label for="signup_indiv_npwd">Confirm New Password</label>
                                      <i toggle="#signup_indiv_npwd"  class="togglen-password fa fa-eye prefix pt-2 cursor-pointer"></i>
                                    </div>
                                </div>
                                <div class="row margin" >
                                    <div class="col s12 input-field input-outlined mt-0" id="applygrecaptcha" >
                                        <div class="recaptcha" id="g-recaptcha1"></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12 pl-7 pr-7" id="signup_indiv_form_submit_wrapper">
                                        
                                        <button type="submit"  id="signup_indiv_form_submit" class="create-btn btn waves-effect waves-light border-round-7 gradient-45deg-purple-deep-orange col s12">CREATE ACCOUNT</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12 center mt-0">
                                        <p class="mt-0 mb-0">
                                        <label>
                                            <input disabled  checked type="checkbox" id="agree_terms_signup"/>
                                            <span style="color: #212121;">I agree to the DETASAD Cloud</span>
                                        </label>
                                        </p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12 mt-0 center">
                                        <a href="#termsandpolicies?placement=privacypolicy" class="waves-effect btn-flat btn-flat-btn pl-2 pr-2">Privacy Policy</a>
                                        <a href="#termsandpolicies?placement=termsandcond" class="waves-effect btn-flat btn-flat-btn pl-2 pr-2">Terms of Use</a>
                                        <a href="#termsandpolicies?placement=cookiepolicy" class="waves-effect btn-flat btn-flat-cookie border-0 pl-2 pr-2">Cookie Policy</a>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    
                                    <p class="center" style="color: #212121;">Already have an account ? <a href="#login" style="color: #46aec7; font-weight: 500;">Log in</a></p>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
          </div>
          
        </div>
        <div class="content-overlay"></div>
      </div>
    </div>
    <!-- Recaptcha JS-->
    
    
    
