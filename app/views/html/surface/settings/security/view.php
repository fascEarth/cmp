<?php
   require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/backend.php';
   
   $_SESSION['token_illustrate_surfSecResetPwd'] =(
      (
        isset($_SESSION['token_illustrate_surfSecResetPwd']) 
        && 
        !empty($_SESSION['token_illustrate_surfSecResetPwd'])
      )
      ?
      $_SESSION['token_illustrate_surfSecResetPwd']
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
<link rel="stylesheet" type="text/css" href="app/views/html/surface/settings/security/index.css">
<style>
   /*********** Card Skeleton ********/
   .card-tab-skeleton .tab-heading-skeleton {
   width: 165px;
   height: 12px;
   position: relative;
   top: 34px;
   background: #8d8d8d;
   border-radius: 5px;
   margin: 0 auto;
   }
   .card-tab-skeleton .tabs .indicator {
   background: transparent;
   }
   .card-tab-skeleton .header-skeleton {
   width: 175px;
   height: 12px;
   position: relative;
   top: -12px;
   background: #8d8d8d;
   border-radius: 5px;
   }
   .card-tab-skeleton .header-animate {
   animation: shimmer 2s infinite linear;
   /* background: linear-gradient(to right, #ababab 4%, #8d8d8d 25%, #8d8d8d 36%); */
   background: linear-gradient(to right, #00577e 4%, #024766 25%, #024766 36%);
   background-size: 1000px 100%;
   }
   .card-tab-skeleton .animate {
   animation : shimmer 2s infinite linear;
   background: linear-gradient(to right, #efefef 4%, #f5f5f5 25%, #f5f5f5 36%);
   background-size: 1000px 100%;
   }
   @keyframes shimmer {
   0% {
   background-position: -1000px 0;
   }
   100% {
   background-position: 1000px 0;
   }
   }
   /************** Modify Password ************/
   .modify-password-skeleton .modify-header {
   width: 175px;
   height: 12px;
   position: relative;
   background: #8d8d8d;
   border-radius: 5px;
   }
   .modify-password-skeleton .modify-input {
   width: 100%;
   height: 47px;
   position: relative;
   background: #8d8d8d;
   border-radius: 7px;
   margin-bottom: 8px;
   }
   .modify-password-skeleton .modify-collection-item {
   width: 295px;
   height: 12px;
   top: 15px;
   position: relative;
   background: #8d8d8d;
   border-radius: 5px;
   }
   .modify-password-skeleton .modify-btn {
   width: 250px;
   height: 36px;
   position: relative;
   display: inline-block;
   background: #8d8d8d;
   border-radius: 7px;
   box-shadow: none;
   }
   .modify-password-skeleton .animate {
   animation : shimmer 2s infinite linear;
   background: linear-gradient(to right, #efefef 4%, #f5f5f5 25%, #f5f5f5 36%) !important;
   background-size: 1000px 100%;
   }
   @keyframes shimmer {
   0% {
   background-position: -1000px 0;
   }
   100% {
   background-position: 1000px 0;
   }
   }
   /************** Modify Password ************/
   /************ Two-Factor Authentication Skeleton **********/
   .factor-auth-skeleton .fact-auth-img {
   width: 100px;
   height: 100px;
   background: #ccc;
   border-radius: 20px;
   margin: 0 auto;
   }
   .factor-auth-skeleton .fact-auth-header {
   width: 350px;
   height: 12px;
   position: relative;
   top: 20px;
   bottom: 20px;
   background: #8d8d8d;
   border-radius: 5px;
   margin: 0 auto;
   }
   .factor-auth-skeleton .fact-auth-p {
   width: 80%;
   height: 12px;
   position: relative;
   top: 20px;
   bottom: 20px;
   background: #8d8d8d;
   border-radius: 5px;
   margin: 0 auto !important;
   }
   .factor-auth-skeleton .animate {
   animation : shimmer 2s infinite linear;
   background: linear-gradient(to right, #efefef 4%, #f5f5f5 25%, #f5f5f5 36%);
   background-size: 1000px 100%;
   }
   @keyframes shimmer {
   0% {
   background-position: -1000px 0;
   }
   100% {
   background-position: 1000px 0;
   }
   }
   /************ Table Skeleton **********/
   .security-skeleton .table-header-skeleton {
   width: 175px;
   height: 12px;
   position: relative;
   top: 35px;
   background: #8d8d8d;
   border-radius: 5px;
   }
   .security-skeleton .table-header-search {
   width: 260px;
   height: 30px;
   border-radius: 20px;
   float: right;
   top: 0px;
   position: relative;
   border: 1px solid #c7c7c7;
   }
   .security-skeleton tr {
   border-bottom: 0px;
   }
   .security-skeleton thead tr {
   height: 48px;
   background-color: #dbdada;
   }
   .security-skeleton table.striped > tbody > tr > td {
   height: 50px;
   }
   .security-skeleton .table-td-skeleton {
   width: 70%;
   height: 12px;
   position: relative;
   top: 2px;
   background: #8d8d8d;
   border-radius: 5px;
   margin: 0 auto;
   }
   .security-skeleton .animate {
   animation : shimmer 2s infinite linear;
   background: linear-gradient(to right, #efefef 4%, #f5f5f5 25%, #f5f5f5 36%);
   background-size: 1000px 100%;
   }
   .security-skeleton .header-animate {
   animation : shimmer 2s infinite linear;
   /* background: linear-gradient(to right, #ababab 4%, #8d8d8d 25%, #8d8d8d 36%); */
   background: linear-gradient(to right, #00577e 4%, #024766 25%, #024766 36%);
   background-size: 1000px 100%;
   }
   @keyframes shimmer {
   0% {
   background-position: -1000px 0;
   }
   100% {
   background-position: 1000px 0;
   }
   }
</style>
<div class="content-wrapper-before gradient-45deg-indigo-purple"></div>
<div class="breadcrumbs-dark pb-0" id="breadcrumbs-wrapper">
   <input type="hidden" id="establish_surfSecResetPwd" value="<?php echo $_SESSION['token_illustrate_surfSecResetPwd']; ?>" >
   <!-- Search for small screen-->
   <div class="container">
      <div class="row">
         <div class="col s10 m6 l6">
            <h5 class="breadcrumbs-title mt-0 mb-0"><span>Security</span></h5>
         </div>
      </div>
   </div>
</div>
<div class="col s12" id="settingssecurity_common_org" style="display:none" >
   <div class="container">
      <div class="section section-data-tables">
         <div class="card border-radius-10">
            <div class="card-content tab-card">
               <div class="row">
                  <div class="col s12">
                     <ul class="tabs tabs-fixed-width">
                        <li id="placemodifypassword" onClick="secdefaultOne()" class="tab"><a id="placemodifypasswordhead" class="commonsettingsecuritybill active" href="#modify-password">Modify Password</a></li>
                        <li id="placefactorauth"     onClick="secdefaultTwo()" class="tab"><a id="placefactorauthhead" class="commonsettingsecuritybill" href="#factor-auth">Multi Factor Auth </a></li>
                        <li id="placesshkey"         onClick="secdefaultThree()" class="tab"><a id="placesshkeyhead" class="commonsettingsecuritybill" href="#ssh-key">SSH Keys</a></li>
                        <li id="placeactivity"        onClick="secdefaultFour()" class="tab"><a id="placeactivityhead" class="commonsettingsecuritybill" href="#activity">My Activity</a></li>
                        <li id="placeauditlogs"      onClick="secdefaultFive()" class="tab"><a id="placeauditlogshead" class="commonsettingsecuritybill" href="#audit-logs">Audit Logs</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div class="card border-radius-10">
            <div class="card-content">
               <div class="row">
                  <div id="modify-password" class="col s12">
                     <div class="row pas-strength-container" id="modify-password-inner-org" style="display:none;">
                        <form id="surfSecResetPwd">
                           <div class="col s12">
                              <h4 class="card-title">Reset Your Login Password</h4>
                           </div>
                           <div class="col s12 m6 l6 offset-l1 mt-3">
                              <div class="row margin">
                                 <div class="col s12 input-field input-outlined mt-0">
                                    <input autocomplete="off" readonly
                                    onclick="this.removeAttribute(
                    'readOnly');" onkeyup="this.removeAttribute(
                    'readOnly');" id="surf_security_cpwd" name="surf_security_cpwd" type="password" class=" validate">
                                    <label for="surf_security_cpwd">Current Password</label>
                                    <i toggle="#surf_security_cpwd" class="toggle-password fa fa-eye prefix pt-2 cursor-pointer"></i>
                                 </div>
                                 <div class="col s12 input-field input-outlined mt-0">
                                    <input autocomplete="off" readonly
                                    onclick="this.removeAttribute(
                    'readOnly');" onkeyup="this.removeAttribute(
                    'readOnly');" id="surf_security_npwd" name="surf_security_npwd" type="password" class=" validate ">
                                    <label for="surf_security_npwd">New Password</label>
                                    <i toggle="#surf_security_npwd" class="toggle-password fa fa-eye prefix pt-2 cursor-pointer"></i>
                                 </div>
                                 <div class="col s12 input-field input-outlined mt-0">
                                    <input autocomplete="off" readonly
                                    onclick="this.removeAttribute(
                    'readOnly');" onkeyup="this.removeAttribute(
                    'readOnly');" id="surf_security_confpwd" name="surf_security_confpwd" type="password" class=" validate">
                                    <label for="surf_security_confpwd">Confirm New Password</label>
                                    <i toggle="#surf_security_confpwd" class="toggle-password fa fa-eye prefix pt-2 cursor-pointer"></i>
                                 </div>
                              </div>
                           </div>
                           <div class="col s12 m6 l5 mt-3">
                              <div class="row">
                                 <div class="col s12">
                                    <h4 class="card-title mb-0 default-text">Password Requirements</h4>
                                 </div>
                                 <div class="col s12">
                                    <ul class="collection">
                                       <li class="collection-item" ><i class="fa fa-times dp48 red-text" aria-hidden="true" id="surf_security_validate_8cl" ></i> Must be at least 8 characters long</li>
                                       <li class="collection-item" ><i class="fa fa-times dp48 red-text" aria-hidden="true" id="surf_security_validate_1ul" ></i> Must contain 1 uppercase letter </li>
                                       <li class="collection-item" ><i class="fa fa-times dp48 red-text" aria-hidden="true" id="surf_security_validate_1ll" ></i> Must contain 1 lowercase letter </li>
                                       <li class="collection-item" ><i class="fa fa-times dp48 red-text" aria-hidden="true" id="surf_security_validate_1n" ></i> Must contain 1 number</li>
                                       <li class="collection-item" ><i class="fa fa-times dp48 red-text" aria-hidden="true" id="surf_security_validate_1sc" ></i> Must contain 1 special character</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                           <div class="col s12 m6 offset-m3 l6 offset-l3 psw-length-sm">
                              <style>
                                 .progress-bar_wrap {
                                 width: 100%;
                                 height: 5px;
                                 background: #d5d0d0;
                                 display: inline-block;
                                 vertical-align: middle;
                                 overflow: hidden;
                                 border-radius: 5px;
                                 }
                              </style>
                              <label >Password Strength</label>
                              <div class="progress-bar_wrap">
                                 <div class="progress-bar_item progress-bar_item-1"></div>
                                 <div class="progress-bar_item progress-bar_item-2"></div>
                                 <div class="progress-bar_item progress-bar_item-3"></div>
                              </div>
                              <span class="progress-bar_text"></span> 
                           </div>
                           <div class="col s12 mt-2 mb-2 center" >
                              <button type="submit"  id="surf_security_submit_btn"  class="btn waves-effect waves-light gradient-45deg-light-blue-cyan gradient-shadow">CHANGE PASSWORD</button>
                           </div>
                        </form>
                     </div>
                     <div class="row pas-strength-container modify-password-skeleton" id="modify-password-inner-disp">
                        <div class="col s12">
                           <h4 class="card-title modify-header animate"></h4>
                        </div>
                        <div class="col s12 m6 l6 offset-l1 mt-3">
                           <div class="row margin">
                              <div class="col s12 input-field input-outlined mt-0">
                                 <div class="modify-input animate"></div>
                              </div>
                              <div class="col s12 input-field input-outlined mt-0">
                                 <div class="modify-input animate"></div>
                              </div>
                              <div class="col s12 input-field input-outlined mt-0">
                                 <div class="modify-input animate"></div>
                              </div>
                           </div>
                        </div>
                        <div class="col s12 m6 l5 mt-3">
                           <div class="row">
                              <div class="col s12">
                                 <h4 class="card-title mb-0 modify-header animate"></h4>
                              </div>
                              <div class="col s12">
                                 <ul class="collection">
                                    <li class="modify-collection-item animate"></li>
                                    <li class="modify-collection-item animate mt-4"></li>
                                    <li class="modify-collection-item animate mt-4"></li>
                                    <li class="modify-collection-item animate mt-4"></li>
                                    <li class="modify-collection-item animate mt-4"></li>
                                    <li class="modify-collection-item animate mt-4"></li>
                                    <li class="modify-collection-item animate mt-4"></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div class="col s12 mt-2 mb-2 center">
                           <div class="animate modify-btn"></div>
                        </div>
                     </div>
                  </div>
                  <div id="factor-auth" class="col s12" style="display:none;">
                     <div class="row" id="factor-auth-inner-org" style="display:none;">
                        <div class="col s12 center mt-2">
                           <form id="2faSecurityScrForm">
                              <img width="100" src="app/views/html/surface/settings/security/img/2FA.png" alt="two-factor" />
                              <h4 class="card-title mt-2 mb-3 fs-26">Two-Factor Authentication</h4>
                              <p>Two-factor authentication (2FA) provides an additional layer of security beyond passwords and is strongly recommended. Your account is protected by requiring both your password and an authentication code from an authenticator app.
                              </p>
                              <p class="mt-3 hide" style="color: #46aec7;
                                 font-weight: 600;">Enter your phone number and we will send you a verification code.</p>
                              <div style="display:none;" class="row mt-4" id="2faSecurityScr">
                                 <div class="col s12 m12 push-m2 l8 push-l4 verifi-col-sm" style="left: 30.33333%;">
                                    <div class="row">
                                       <div class="col s4 m2 l2 input-field input-outlined mt-0 pr-0">
                                          <img class="phone-code-flog" src="app/views/html/surface/settings/security/img/flag.png" width="30" alt="flag" />
                                          <input  id="surfSectfaphcode" name="surfSectfaphnum" disabled type="text" class="validate center" value="+966" style="padding: 0px 0px 0 25px;">
                                          <!-- <label for="Code_id">Code</label> -->
                                       </div>
                                       <div class="col s8 m5 l5 input-field input-outlined mt-0" style="margin-left: -16px;">
                                          <input id="surfSectfaphnum" name="surfSectfaphnum" type="text" class="validate" value="" >
                                          <label for="surfSectfaphnum" id="surfSectfaphnumLabel" >Phone Number</label>
                                          <img style="display:none;cursor: pointer;" title="Resend Code" id="phone-code-flog_overall" onClick="wizContactPhoneResendCode()"  class="phone-code-arrow" src="app/views/html/surface/settings/security/img/send.png" width="30" alt="flag" />
                                          <img style="display:none;"  id="phone-code-flog_overall_success"  class="phone-code-arrow" src="app/views/html/surface/settings/security/img/successMark.png" width="30" alt="flag" />
                                       </div>
                                       <div class="col s12 m7 l7 input-field input-outlined" id="surf_vseccode_verify_overall" style="display:none;">
                                          <div class="verification-code">
                                             <div class="verification-code--inputs">
                                                <input disabled class="ml-0 surf_vseccode_verify" name="verifyemailseccode[]" type="text" maxlength="1">
                                                <input disabled class=" surf_vseccode_verify" name="verifyemailseccode[]" type="text" maxlength="1">
                                                <input disabled class=" surf_vseccode_verify" name="verifyemailseccode[]" type="text" maxlength="1">
                                                <input disabled class=" surf_vseccode_verify" name="verifyemailseccode[]" type="text" maxlength="1">
                                                <input disabled class=" surf_vseccode_verify" name="verifyemailseccode[]" type="text" maxlength="1">
                                                <input disabled class=" surf_vseccode_verify" name="verifyemailseccode[]" type="text" maxlength="1">
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <input type="hidden" id="tfa_state_common" >
                              <button  type="submit" style="display:none;"  id="2faSecurityScrSubmit" class="btn waves-effect waves-light gradient-45deg-light-blue-cyan mt-2">Send SMS</button>
                              <button onClick="wizContactPhoneVerifyCode()" type="button" style="display:none;"  id="2faSecurityScrVerify" class="btn waves-effect waves-light gradient-45deg-light-blue-cyan mt-2">SUBMIT</button>
                              <button type="button" onClick="changeTFa()" id="2faSecurityScrBtn" class="btn waves-effect waves-light gradient-45deg-light-blue-cyan mt-2">ENABLE 2FA</button>
                           </form>
                        </div>
                     </div>
                     <div class="row factor-auth-skeleton" id="factor-auth-inner-disp">
                        <div class="col s12 center mt-2">
                           <div class="fact-auth-img animate"></div>
                           <h4 class="card-title mt-2 mb-3 fs-26 fact-auth-header animate"></h4>
                           <p class="fact-auth-p animate"></p>
                           <button class="btn animate factor-btn-sk-sm mt-6 mb-4" style="width: 150px;"></button>
                        </div>
                     </div>
                  </div>
                  <div id="ssh-key" class="col s12" style="display:none;">
                     <div class="row hide">
                        <div class="col s12 center mt-2">
                           <img width="100" src="app/views/html/surface/settings/security/img/ssh-key.png" alt="two-factor" />
                           <h4 class="card-title mt-2 mb-3 fs-26">No SSH Keys added</h4>
                           <p>SSH Key is a secure way to log into your Elastic Instances through SSH.</p>
                           <a onClick="addAllSecuritySSHKeys()" href="#sshadd-modal" class="modal-trigger btn waves-effect waves-light gradient-45deg-light-blue-cyan modal-trigger border-round mt-4 mb-4">ADD SSH KEY</a>
                        </div>
                     </div>
                     <div class="row" id="ssh-key-inner-org" style="display:none;">
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
                        </div>
                     </div>
                     <div class="row security-skeleton" id="ssh-key-inner-disp">
                        <div class="col s12 m12 l12">
                           <h4 class="card-title table-header-skeleton animate" style="position: absolute;"></h4>
                           <div class="table-header-search animate"></div>
                           <table class="mt-5 striped">
                              <thead>
                                 <tr>
                                    <th></th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
                  <div id="activity" class="col s12" style="display:none;">
                     <div class="row" id="activity-inner-org" style="display:none;" >
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
                                 <!--<tr>
                                    <td>28/07/2022</td>
                                    <td>Client has logged in (106.195.41.122)</td>
                                    <td>106.195.41.122</td>
                                    </tr>
                                    <tr>
                                    <td>28/07/2022</td>
                                    <td>user.two_factor_backup_method_activated-recovery_codes</td>
                                    <td>106.195.41.122</td>
                                    </tr>
                                    <tr>
                                    <td>28/07/2022</td>
                                    <td>user.two_factor_enable-sms</td>
                                    <td>106.195.41.122</td>
                                    </tr>
                                    <tr>
                                    <td>28/07/2022</td>
                                    <td>user.two_factor_disable</td>
                                    <td>106.195.41.122</td>
                                    </tr>-->
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div class="row security-skeleton " id="activity-inner-disp" >
                        <div class="col s12 m12 l12">
                           <h4 class="card-title table-header-skeleton animate" style="position: absolute;"></h4>
                           <div class="table-header-search animate"></div>
                           <table class="mt-5 striped">
                              <thead>
                                 <tr>
                                    <th></th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
                  <div id="audit-logs" class="col s12" style="display:none;">
                     <div class="row" id="audit-logs-inner-org" style="display:none;" >
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
                                 <!-- <tr>
                                    <td>28/07/2022</td>
                                    <td>instance.destroy</td>
                                    <td>Senthilraj</td>
                                    <td>106.195.41.122</td>
                                    </tr>
                                    <tr>
                                    <td>28/07/2022</td>
                                    <td>instance.resize</td>
                                    <td>Senthilraj</td>
                                    <td>106.195.41.122</td>
                                    </tr>
                                    <tr>
                                    <td>28/07/2022</td>
                                    <td>firewall.destroyed</td>
                                    <td>Gopal</td>
                                    <td>2402:3a80:1326..</td>
                                    </tr>
                                    <tr>
                                    <td>28/07/2022</td>
                                    <td>organization.remove_member</td>
                                    <td>Senthilraj</td>
                                    <td>106.195.41.122</td>
                                    </tr>
                                    <tr>
                                    <td>28/07/2022</td>
                                    <td>user.leave_organization</td>
                                    <td>Karthi</td>
                                    <td>106.195.41.122</td>
                                    </tr>-->
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div class="row security-skeleton " id="audit-logs-inner-disp" >
                        <div class="col s12 m12 l12">
                           <h4 class="card-title table-header-skeleton animate" style="position: absolute;"></h4>
                           <div class="table-header-search animate"></div>
                           <table class="mt-5 striped">
                              <thead>
                                 <tr>
                                    <th></th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="table-td-skeleton animate"></div>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>



<div class="col s12" id="settingssecurity_common_skel" >
   <div class="container">
      <div class="section section-data-tables">
         <div class="card border-radius-10 card-tab-skeleton">
            <div class="card-content tab-card">
               <div class="row">
                  <div class="col s12">
                  <ul class="tabs tabs-fixed-width">
                        <li class="tab"><a class="animate active"></a></li>
                        <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                        <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                        <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                        <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                  </ul>
                  </div>
               </div>
            </div>
         </div>
         <div class="card border-radius-10">
            <div class="card-content">
               <div class="row">
                  <div  class="col s12">
                  
                     <div class="row pas-strength-container modify-password-skeleton" >
                        <div class="col s12">
                           <h4 class="card-title modify-header animate"></h4>
                        </div>
                        <div class="col s12 m6 l6 offset-l1 mt-3">
                           <div class="row margin">
                              <div class="col s12 input-field input-outlined mt-0">
                                 <div class="modify-input animate"></div>
                              </div>
                              <div class="col s12 input-field input-outlined mt-0">
                                 <div class="modify-input animate"></div>
                              </div>
                              <div class="col s12 input-field input-outlined mt-0">
                                 <div class="modify-input animate"></div>
                              </div>
                           </div>
                        </div>
                        <div class="col s12 m6 l5 mt-3">
                           <div class="row">
                              <div class="col s12">
                                 <h4 class="card-title mb-0 modify-header animate"></h4>
                              </div>
                              <div class="col s12">
                                 <ul class="collection">
                                    <li class="modify-collection-item animate"></li>
                                    <li class="modify-collection-item animate mt-4"></li>
                                    <li class="modify-collection-item animate mt-4"></li>
                                    <li class="modify-collection-item animate mt-4"></li>
                                    <li class="modify-collection-item animate mt-4"></li>
                                    <li class="modify-collection-item animate mt-4"></li>
                                    <li class="modify-collection-item animate mt-4"></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div class="col s12 mt-2 mb-2 center">
                           <div class="animate modify-btn"></div>
                        </div>
                     </div>
                  </div>

                  
               </div>
            </div>
         </div>
      </div>
   </div>
</div>




<!-- SSH Key Modal Trigger -->
<div id="sshadd-modal" class="modal border-radius-10">


   <div class="modal-content">
      <h6 class="card-title center">
      Add SSH Key</h5>
      <form id="submitsshkeysAdd" class="mt-3" autocomplete="off" >
      
         <div class="row margin">
            <div class="col s12 input-field input-outlined mt-0">
               <input id="nameAllSecuritySSHKeys" name="sshKeyName" type="text" class="validate">
               <label for="nameAllSecuritySSHKeys">Name</label>
            </div>
         </div>
         <div class="row margin">
            <div class="col s12 input-field input-outlined mt-0">
               <textarea id="fingerPrintAllSecuritySSHKeys" name="sshKeyFingerPrint" class="validate" data-length="120" placeholder="Enter your public SSH key in OpenSSH format"></textarea>               
            </div>
         </div>

         <button id="submitsshkeysAddBtn" type="submit" style="display:none;" >ADD</button>

      </form>
   </div>
   <div class="modal-footer">
      <input type="hidden" id="sshKeyIdAllSecuritySSHKeys">
      <input type="hidden" id="typeAllSecuritySSHKeys" value="add">
      <button onClick="presubmitAllSecuritySSHKeys()"  type="button" class="modal-action modal-invite  waves-effect waves-light gradient-45deg-light-blue-cyan gradient-shadow btn-flat white-text" style="width:auto;">ADD</button>
      <a href="javascript:void(0);" style="color:#46aec7; font-weight: 500;" class="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
   </div>
   

</div>
<!-- END SSH Key Modal Trigger -->