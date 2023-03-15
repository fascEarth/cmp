<?php

require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/backend.php';

$_SESSION['token_illustrate_surfSignup'] =(
   (
     isset($_SESSION['token_illustrate_surfSignup']) 
     && 
     !empty($_SESSION['token_illustrate_surfSignup'])
   )
   ?
   $_SESSION['token_illustrate_surfSignup']
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

 $language_data = getLangData("/app/views/html/signup/home/lang/");
 

echo '<input type="hidden" value="'.$_SESSION['token_common_formSubmit'].'" id="establish_common_formSubmit" >';
?>
<style>
   .upload-container {
       position: relative;
   }
   .upload-container input {
       border: 1px solid #92b0b3;
       background: #f1f1f1;
       outline: 2px dashed #92b0b3;
       outline-offset: -10px;
       padding: 60px 0px 20px 20px;
       
       text-align: center !important;
       width: 500px;
   }
    
   .upload-container input:hover {
       background: #ddd;
   }
    
   .upload-container:before {
       position: absolute;
       bottom: 50px;
       left: 245px;
       content: " Drop files here. - Allowed *.jpeg, *.jpg, *.png, *.pdf / Max file size 2MB.";
       color: #3f8188;
       font-weight: 900;
   }
    
   .upload-btn {
       margin-left: 300px;
       padding: 7px 20px;
   }
</style>

<input type="hidden" id="establish_surfSignup" value="<?php echo $_SESSION['token_illustrate_surfSignup']; ?>" >
<!-- BEGIN: Page Main-->
<div class="col s12 form-page-skeleton">
   
   <ul class="stepper horizontal" id="horizStepper">
         <li class="step active" id="step_level_wiz_1">
         
            <!--<div class="step-title waves-effect">Account Creation</div>-->
            <div class="step-title waves-effect" title="<?php echo $language_data['tab_title_accreate']; ?>" ><?php echo $language_data['tab_title_accreate']; ?></div>
            <div class="step-content overall-page-skeleton">
            <!-- Start Over All Skeleton -->
            <div class="card border-radius-7">
               <div class="card-content">
                  <div class="card-inside1-skeleton animate"></div>
                  <div class="card-inside2-skeleton animate"></div>
                  <div class="card-inside3-skeleton animate"></div>
               </div>
            </div>
            <!-- End Over All Skeleton -->
         </div>
         </li>
         <li class="step" id="step_level_wiz_2">
            <!--<div class="step-title waves-effect">Contact Validation</div>-->
            <div class="step-title waves-effect" title="<?php echo $language_data['tab_title_contvalid']; ?>" ><?php echo $language_data['tab_title_contvalid']; ?></div>
            

         <div class="step-content" id="step_level_wiz_2_org" style="display:none;">
            <div class="card border-radius-7">
               <div class="card-content">
                     <div class="row">
                        <div class="col s12 center">
                        
                        <!--<h6>Please confirm your email address & phone number. </h6>
                        <p>We sent 6-digit verification code to following contact.</p>-->

                        <h6><?php echo $language_data['tab_contvalid_primary_title']; ?> </h6>
                        <p><?php echo $language_data['tab_contvalid_secondary_title']; ?></p>

                        </div>
                     </div>
                     <div class="row center mt-1">
                        <div class="col s12 m6 l6 col-border-right">
                           <form id="dcc_cont_val_form" method="post"  enctype="multipart/form-data" autocomplete="off">
                           <div class="row margin">
                                 <div class="col s12 input-field input-outlined mt-5">
                                    <img src="app/views/html/signup/home/img/mail.png" width="80" height="80" alt="mail" />
                                 </div>
                                 <div class="verification-code">
                                    <div class="col s12 input-field input-outlined pl-0 pr-0">
                                       <input id="dcc_cont_val_email_id" name="email" type="email"  class="" >
                                       <label id="dcc_cont_val_email_id_label" for="dcc_cont_val_email_id" class="active"><?php echo $language_data['tab_contvalid_email_addr_label']; ?></label>
                                    </div>
                                 </div>
                                 <div class="col s12 input-field input-outlined mt-0">
                                    <div class="verification-code">
                                       <label class="control-label"><?php echo $language_data['tab_contvalid_common_vcode_label']; ?></label>
                                       <div class="verification-code--inputs">
                                             <input class="dcc_cont_val_verification" name="verification[]" type="number" minlength="1"  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="1" />
                                             <input class="dcc_cont_val_verification" name="verification[]" type="number" minlength="1"  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="1" />
                                             <input class="dcc_cont_val_verification" name="verification[]" type="number" minlength="1"  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="1" />
                                             <input class="dcc_cont_val_verification" name="verification[]" type="number" minlength="1"  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="1" />
                                             <input class="dcc_cont_val_verification" name="verification[]" type="number" minlength="1"  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="1" />
                                             <input class="dcc_cont_val_verification" name="verification[]" type="number" minlength="1"  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="1" />
                                             <div style="display:none;" id="dcc_cont_val_verification-error" class="error" style=""><?php echo $language_data['tab_contvalid_common_otperror_label']; ?></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col s12 input-field input-outlined">
                                    <img style="display:none;" id="wizcontactEmailVerifiedImg" class="" src="app/views/html/signup/home/img/verify.png" width="50" alt="verify" />
                                    <p style="display:none;" id="wizcontactEmailVerifiedLabel" class="bold" style="color:#333; font-weight: 600;"><?php echo $language_data['tab_contvalid_common_verified_label']; ?></p>
                                    <button type="button" onClick="wizContactEmailResendCode()" id="wizcontactEmailResendBtn" class="waves-effect waves-light btn gradient-45deg-light-blue-cyan mr-1 mb-2 contact-btn-w"><?php echo $language_data['tab_contvalid_common_resendcode_label']; ?></button>
                                    <button type="submit"  id="wizcontactEmailVerifyBtn" class="waves-effect waves-light btn gradient-45deg-light-blue-cyan mr-1 mb-2 contact-btn-w"><?php echo $language_data['tab_contvalid_common_verify_label']; ?></button>
                                 </div>
               
                              
                                 <div style="display:none;" class="col s12 input-field input-outlined mt-0" >
                                    
                                 </div>
                           </div>
                        </form>
                        </div>
                        <div class="col s12 m6 l6" >
                           <form id="dcc_ph_val_form" method="post"  enctype="multipart/form-data" autocomplete="off">
                           <div class="row margin">
                                 <div class="col s12 input-field input-outlined mt-5">
                                    <img src="app/views/html/signup/home/img/mobile.png" width="80" height="80" alt="mobile" />
                                 </div>
                                 <div class="verification-code">
                                    <div class="col s3 input-field input-outlined pl-0 pr-0">
                                       <input id="dcc_cont_val_phone_id" type="text" class="validate" value="+966" disabled >
                                    </div>
                                       <div class="col s9 input-field input-outlined pl-0 pr-0">
                                       <input  id="dcc_cont_val_phone" name="dcc_cont_val_phone" type="number" class="validate" >
                                       <label for="dcc_cont_val_phone" class="active"><?php echo $language_data['tab_contvalid_phone_addr_label']; ?></label>
                                    </div>
                                 </div>
                                 <div class="col s12 input-field input-outlined mt-0">
                                    <div class="verification-code">
                                       <label class="control-label"><?php echo $language_data['tab_contvalid_common_vcode_label']; ?></label>
                                       <div class="verification-code--inputs">
                                             <input disabled class="dcc_cont_val_verification_phone" name="verificationPhone[]" type="number" minlength="1"  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="1"  />
                                             <input disabled class="dcc_cont_val_verification_phone" name="verificationPhone[]" type="number" minlength="1"  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="1"  />
                                             <input disabled class="dcc_cont_val_verification_phone" name="verificationPhone[]" type="number" minlength="1"  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="1"  />
                                             <input disabled class="dcc_cont_val_verification_phone" name="verificationPhone[]" type="number" minlength="1"  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="1"  />
                                             <input disabled class="dcc_cont_val_verification_phone" name="verificationPhone[]" type="number" minlength="1"  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="1"  />
                                             <input disabled class="dcc_cont_val_verification_phone" name="verificationPhone[]" type="number" minlength="1"  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="1"  />
                                             <div style="display:none;" id="dcc_cont_val_verification_phone-error" class="error" style=""><?php echo $language_data['tab_contvalid_common_otperror_label']; ?></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col s12 input-field input-outlined">
                                    <img style="display:none;" id="wizcontactPhoneVerifiedImg" src="app/views/html/signup/home/img/verify.png" width="50" alt="verify" />
                                    <p style="display:none;" id="wizcontactPhoneVerifiedLabel" class="bold" style="color:#333; font-weight: 600;"><?php echo $language_data['tab_contvalid_common_verified_label']; ?></p>
                                    <a type="button" onClick="wizContactPhoneResendCode()" id="wizcontactPhoneResendBtn" class="waves-effect waves-light btn gradient-45deg-light-blue-cyan mr-1 mb-2 contact-btn-w"><?php echo $language_data['tab_contvalid_common_sendcode_label']; ?></a>
                                    <button type="submit"  id="wizcontactPhoneVerifyBtn" class="waves-effect waves-light btn gradient-45deg-light-blue-cyan mr-1 mb-2 contact-btn-w d-none"><?php echo $language_data['tab_contvalid_common_verify_label']; ?></button>
                                 </div>
                                 <div class="col s12 input-field input-outlined mt-0 hide">
                                    
                                 </div>
                           </div>
                           </form>
                        </div>
                        <div class="col s12 center mt-2">
                           <p style="color:#85CBDA;"><?php echo $language_data['tab_contvalid_common_footer_title']; ?></p>
                        </div>
               
                     </div>
                     <div class="row">
                        <div class="col m12 s12 mb-1">
                           <button id="wiz_contact_ver_next" disabled class="disabled waves-effect waves dark btn btn-primary next-step float-right" type="submit"><?php echo $language_data['tab_general_next']; ?></button>
                        </div>
                     </div>
               </div>
               </div>
         </div>
            <div class="step-content" id="step_level_wiz_2_disp">

            <div class="card border-radius-7">
               <div class="card-content">
                  <div class="row">
                     <div class="col s12 center">
                        <h6 class="content-h animate"></h6>
                        <p class="content-p animate"></p>
                     </div>
                  </div>
                  <div class="row center mt-2">
                     <div class="col s12 m6 l6 col-border-right">
                        <div class="row margin">
                           <div class="col s12 input-field input-outlined mt-5">
                              <div class="content-img animate"></div>
                           </div>
                           <div class="col s12 m8 push-m2 l8 push-l2 input-field input-outlined">
                              <div class="form-input-skeleton animate"></div>
                           </div>
                           <div class="col s12 m12 l8 push-l2 input-field input-outlined mt-0">
                              <div class="verification-code mt-6">
                                 <div class="verification-code--inputs">
                                    <div class="input-box animate"></div>
                                    <div class="input-box animate"></div>
                                    <div class="input-box animate"></div>
                                    <div class="input-box animate"></div>
                                    <div class="input-box animate"></div>
                                    <div class="input-box animate"></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col s12 input-field input-outlined">
                              <div class="contact-btn-w btn mr-1 mb-2 cursor-none btn-skeleton animate"></div>
                              <div class="contact-btn-w btn mr-1 mb-2 cursor-none btn-skeleton animate"></div>
                           </div>
                        </div>
                     </div>
                     <div class="col s12 m6 l6">
                        <div class="row margin">
                           <div class="col s12 input-field input-outlined mt-5">
                              <div class="content-img animate"></div>
                           </div>
                           <div class="col s12 m8 push-m2 l8 push-l2 input-field input-outlined">
                              <div class="form-input-skeleton animate"></div>
                           </div>
                           <div class="col s12 m12 l8 push-l2 input-field input-outlined mt-0">
                              <div class="verification-code mt-6">
                                 <div class="verification-code--inputs">
                                    <div class="input-box animate"></div>
                                    <div class="input-box animate"></div>
                                    <div class="input-box animate"></div>
                                    <div class="input-box animate"></div>
                                    <div class="input-box animate"></div>
                                    <div class="input-box animate"></div>
                                 </div>
                              </div>
                           </div>
                           <div class="col s12 input-field input-outlined">
                              <div class="contact-btn-w btn mr-1 mb-2 cursor-none btn-skeleton animate"></div>
                              <div class="contact-btn-w btn mr-1 mb-2 cursor-none btn-skeleton animate"></div>
                           </div>
                        </div>
                     </div>
                     <div class="col s12 center mt-2">
                        <p class="content-p-length animate"></p>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col m12 s12 mb-1">
                        <button style="width: 110px;" class="animate btn btn-primary cursor-none btn-skeleton float-right submit-sk-sm" type="submit"></button>
                     </div>
                  </div>
               </div>
            </div>
            </div>
            
         </li>
         <li class="step" id="step_level_wiz_3" >
            <!-- <div class="step-title waves-effect" title="Personal / Org Information">Personal / Org Information</div> -->
            <div class="step-title waves-effect" title="<?php echo $language_data['tab_title_persorginfo']; ?>"><?php echo $language_data['tab_title_persorginfo']; ?></div>
            <div class="step-content" id="step_level_wiz_3_org" style="display:none;" >

               <div class="card border-radius-7">
               <div class="card-content">
                  <div class="row" id="main-view">
                     <div class="col s12 border-bottom-1">
                     <input id="wiz_comIndiv_next" type="hidden" value="personal">
                        <ul class="tabs tab-demo"  >
                           <li class="tab" id="poi_personal_tab" ><a class="active" href="#personal"><?php echo $language_data['tab_persorginfo_tab_poi']; ?> </a></li>
                           <li class="tab disabled" id="poi_billing_tab" ><a href="#billing"><?php echo $language_data['tab_persorginfo_tab_bilAddr']; ?></a></li>
                           <li class="tab disabled" id="poi_orginfo_tab"><a href="#orginfo"><?php echo $language_data['tab_persorginfo_tab_orgInfo']; ?></a></li>
                        </ul>

                        <!--<ul class="tabs tab-demo" id="personalDispTab" >
                           <li class="tab"><a class="tab-active-skeleton animate active"></a></li>
                           <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                           <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                        </ul>-->


                     </div>
                     <div class="col s12 form-m-sm">
                        <div id="personal" class="col s12 mt-4">
                              <div class="row">
                                 <div class="col s12">
                                 <form id="wiz_personal_form" method="post"  enctype="multipart/form-data" autocomplete="off">
                                    <div class="row margin">
                                       <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                          <input id="wiz_personal_familyName" name="familyName" type="text" class="validate">
                                          <label id="wiz_personal_familyName_wrapper" for="wiz_personal_familyName"><?php echo $language_data['tab_persorginfo_tab_poi_label_famName']; ?></label>
                                       </div>
                                       <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                          <input id="wiz_personal_fname" name="firstName" type="text" class="validate">
                                          <label id="wiz_personal_fname_wrapper" for="wiz_personal_fname"><?php echo $language_data['tab_persorginfo_tab_poi_label_firstName']; ?></label>
                                       </div>
                                       <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                          <input id="wiz_personal_mname"  type="text" class="">
                                          <label id="wiz_personal_mname_wrapper" for="wiz_personal_mname"><?php echo $language_data['tab_persorginfo_tab_poi_label_middleName']; ?></label>
                                       </div>
                                       <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                       <label class="custom-select-label"><?php echo $language_data['tab_persorginfo_tab_poi_label_selNationality']; ?></label>
                                       <select id="wiz_personal_nationality" name="nationality" class="validate select2 browser-default select2-hidden-accessible" data-select2-id="1" tabindex="-1" aria-hidden="true">
                                       <option disabled selected value=""><?php echo $language_data['signup_toastr_selectAny']; ?></option>
                                                               <option value="afghan">Afghan</option>
                                                               <option value="albanian">Albanian</option>
                                                               <option value="algerian">Algerian</option>
                                                               <option value="american">American</option>
                                                               <option value="andorran">Andorran</option>
                                                               <option value="angolan">Angolan</option>
                                                               <option value="antiguans">Antiguans</option>
                                                               <option value="argentinean">Argentinean</option>
                                                               <option value="armenian">Armenian</option>
                                                               <option value="australian">Australian</option>
                                                               <option value="austrian">Austrian</option>
                                                               <option value="azerbaijani">Azerbaijani</option>
                                                               <option value="bahamian">Bahamian</option>
                                                               <option value="bahraini">Bahraini</option>
                                                               <option value="bangladeshi">Bangladeshi</option>
                                                               <option value="barbadian">Barbadian</option>
                                                               <option value="barbudans">Barbudans</option>
                                                               <option value="batswana">Batswana</option>
                                                               <option value="belarusian">Belarusian</option>
                                                               <option value="belgian">Belgian</option>
                                                               <option value="belizean">Belizean</option>
                                                               <option value="beninese">Beninese</option>
                                                               <option value="bhutanese">Bhutanese</option>
                                                               <option value="bolivian">Bolivian</option>
                                                               <option value="bosnian">Bosnian</option>
                                                               <option value="brazilian">Brazilian</option>
                                                               <option value="british">British</option>
                                                               <option value="bruneian">Bruneian</option>
                                                               <option value="bulgarian">Bulgarian</option>
                                                               <option value="burkinabe">Burkinabe</option>
                                                               <option value="burmese">Burmese</option>
                                                               <option value="burundian">Burundian</option>
                                                               <option value="cambodian">Cambodian</option>
                                                               <option value="cameroonian">Cameroonian</option>
                                                               <option value="canadian">Canadian</option>
                                                               <option value="cape verdean">Cape Verdean</option>
                                                               <option value="central african">Central African</option>
                                                               <option value="chadian">Chadian</option>
                                                               <option value="chilean">Chilean</option>
                                                               <option value="chinese">Chinese</option>
                                                               <option value="colombian">Colombian</option>
                                                               <option value="comoran">Comoran</option>
                                                               <option value="congolese">Congolese</option>
                                                               <option value="costa rican">Costa Rican</option>
                                                               <option value="croatian">Croatian</option>
                                                               <option value="cuban">Cuban</option>
                                                               <option value="cypriot">Cypriot</option>
                                                               <option value="czech">Czech</option>
                                                               <option value="danish">Danish</option>
                                                               <option value="djibouti">Djibouti</option>
                                                               <option value="dominican">Dominican</option>
                                                               <option value="dutch">Dutch</option>
                                                               <option value="east timorese">East Timorese</option>
                                                               <option value="ecuadorean">Ecuadorean</option>
                                                               <option value="egyptian">Egyptian</option>
                                                               <option value="emirian">Emirian</option>
                                                               <option value="equatorial guinean">Equatorial Guinean</option>
                                                               <option value="eritrean">Eritrean</option>
                                                               <option value="estonian">Estonian</option>
                                                               <option value="ethiopian">Ethiopian</option>
                                                               <option value="fijian">Fijian</option>
                                                               <option value="filipino">Filipino</option>
                                                               <option value="finnish">Finnish</option>
                                                               <option value="french">French</option>
                                                               <option value="gabonese">Gabonese</option>
                                                               <option value="gambian">Gambian</option>
                                                               <option value="georgian">Georgian</option>
                                                               <option value="german">German</option>
                                                               <option value="ghanaian">Ghanaian</option>
                                                               <option value="greek">Greek</option>
                                                               <option value="grenadian">Grenadian</option>
                                                               <option value="guatemalan">Guatemalan</option>
                                                               <option value="guinea-bissauan">Guinea-Bissauan</option>
                                                               <option value="guinean">Guinean</option>
                                                               <option value="guyanese">Guyanese</option>
                                                               <option value="haitian">Haitian</option>
                                                               <option value="herzegovinian">Herzegovinian</option>
                                                               <option value="honduran">Honduran</option>
                                                               <option value="hungarian">Hungarian</option>
                                                               <option value="icelander">Icelander</option>
                                                               <option value="indian">Indian</option>
                                                               <option value="indonesian">Indonesian</option>
                                                               <option value="iranian">Iranian</option>
                                                               <option value="iraqi">Iraqi</option>
                                                               <option value="irish">Irish</option>
                                                               <option value="israeli">Israeli</option>
                                                               <option value="italian">Italian</option>
                                                               <option value="ivorian">Ivorian</option>
                                                               <option value="jamaican">Jamaican</option>
                                                               <option value="japanese">Japanese</option>
                                                               <option value="jordanian">Jordanian</option>
                                                               <option value="kazakhstani">Kazakhstani</option>
                                                               <option value="kenyan">Kenyan</option>
                                                               <option value="kittian and nevisian">Kittian and Nevisian</option>
                                                               <option value="kuwaiti">Kuwaiti</option>
                                                               <option value="kyrgyz">Kyrgyz</option>
                                                               <option value="laotian">Laotian</option>
                                                               <option value="latvian">Latvian</option>
                                                               <option value="lebanese">Lebanese</option>
                                                               <option value="liberian">Liberian</option>
                                                               <option value="libyan">Libyan</option>
                                                               <option value="liechtensteiner">Liechtensteiner</option>
                                                               <option value="lithuanian">Lithuanian</option>
                                                               <option value="luxembourger">Luxembourger</option>
                                                               <option value="macedonian">Macedonian</option>
                                                               <option value="malagasy">Malagasy</option>
                                                               <option value="malawian">Malawian</option>
                                                               <option value="malaysian">Malaysian</option>
                                                               <option value="maldivan">Maldivan</option>
                                                               <option value="malian">Malian</option>
                                                               <option value="maltese">Maltese</option>
                                                               <option value="marshallese">Marshallese</option>
                                                               <option value="mauritanian">Mauritanian</option>
                                                               <option value="mauritian">Mauritian</option>
                                                               <option value="mexican">Mexican</option>
                                                               <option value="micronesian">Micronesian</option>
                                                               <option value="moldovan">Moldovan</option>
                                                               <option value="monacan">Monacan</option>
                                                               <option value="mongolian">Mongolian</option>
                                                               <option value="moroccan">Moroccan</option>
                                                               <option value="mosotho">Mosotho</option>
                                                               <option value="motswana">Motswana</option>
                                                               <option value="mozambican">Mozambican</option>
                                                               <option value="namibian">Namibian</option>
                                                               <option value="nauruan">Nauruan</option>
                                                               <option value="nepalese">Nepalese</option>
                                                               <option value="new zealander">New Zealander</option>
                                                               <option value="ni-vanuatu">Ni-Vanuatu</option>
                                                               <option value="nicaraguan">Nicaraguan</option>
                                                               <option value="nigerien">Nigerien</option>
                                                               <option value="north korean">North Korean</option>
                                                               <option value="northern irish">Northern Irish</option>
                                                               <option value="norwegian">Norwegian</option>
                                                               <option value="omani">Omani</option>
                                                               <option value="pakistani">Pakistani</option>
                                                               <option value="palauan">Palauan</option>
                                                               <option value="panamanian">Panamanian</option>
                                                               <option value="papua new guinean">Papua New Guinean</option>
                                                               <option value="paraguayan">Paraguayan</option>
                                                               <option value="peruvian">Peruvian</option>
                                                               <option value="polish">Polish</option>
                                                               <option value="portuguese">Portuguese</option>
                                                               <option value="qatari">Qatari</option>
                                                               <option value="romanian">Romanian</option>
                                                               <option value="russian">Russian</option>
                                                               <option value="rwandan">Rwandan</option>
                                                               <option value="saint lucian">Saint Lucian</option>
                                                               <option value="salvadoran">Salvadoran</option>
                                                               <option value="samoan">Samoan</option>
                                                               <option value="san marinese">San Marinese</option>
                                                               <option value="sao tomean">Sao Tomean</option>
                                                               <option value="saudi">Saudi</option>
                                                               <option value="scottish">Scottish</option>
                                                               <option value="senegalese">Senegalese</option>
                                                               <option value="serbian">Serbian</option>
                                                               <option value="seychellois">Seychellois</option>
                                                               <option value="sierra leonean">Sierra Leonean</option>
                                                               <option value="singaporean">Singaporean</option>
                                                               <option value="slovakian">Slovakian</option>
                                                               <option value="slovenian">Slovenian</option>
                                                               <option value="solomon islander">Solomon Islander</option>
                                                               <option value="somali">Somali</option>
                                                               <option value="south african">South African</option>
                                                               <option value="south korean">South Korean</option>
                                                               <option value="spanish">Spanish</option>
                                                               <option value="sri lankan">Sri Lankan</option>
                                                               <option value="sudanese">Sudanese</option>
                                                               <option value="surinamer">Surinamer</option>
                                                               <option value="swazi">Swazi</option>
                                                               <option value="swedish">Swedish</option>
                                                               <option value="swiss">Swiss</option>
                                                               <option value="syrian">Syrian</option>
                                                               <option value="taiwanese">Taiwanese</option>
                                                               <option value="tajik">Tajik</option>
                                                               <option value="tanzanian">Tanzanian</option>
                                                               <option value="thai">Thai</option>
                                                               <option value="togolese">Togolese</option>
                                                               <option value="tongan">Tongan</option>
                                                               <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                                                               <option value="tunisian">Tunisian</option>
                                                               <option value="turkish">Turkish</option>
                                                               <option value="tuvaluan">Tuvaluan</option>
                                                               <option value="ugandan">Ugandan</option>
                                                               <option value="ukrainian">Ukrainian</option>
                                                               <option value="uruguayan">Uruguayan</option>
                                                               <option value="uzbekistani">Uzbekistani</option>
                                                               <option value="venezuelan">Venezuelan</option>
                                                               <option value="vietnamese">Vietnamese</option>
                                                               <option value="welsh">Welsh</option>
                                                               <option value="yemenite">Yemenite</option>
                                                               <option value="zambian">Zambian</option>
                                                               <option value="zimbabwean">Zimbabwean</option>

                                          </select>


                                          <!--<input id="wiz_personal_nationality" name="nationality" type="text" class="validate">
                                          <label id="wiz_personal_nationality_wrapper" for="wiz_personal_nationality">Nationality</label>-->
                                       </div>
                                       <div  class="col s12 m6 l2 input-field mt-0 id-proof">
                                          <label class="custom-select-label"><?php echo $language_data['tab_persorginfo_tab_poi_label_proofOId']; ?></label>
                                          <select required class="error validate" id="wiz_personal_proofId" name="idProof">
                                             <option disabled selected value=""><?php echo $language_data['signup_toastr_selectAny']; ?></option>
                                             <option value="National ID">National ID</option>
                                             <option value="Iqama">Iqama</option>
                                             <option value="Passport">Passport</option>
                                          </select>
                                          <div class="input-field">
                                          </div>
                                       </div>
                                       <div class="col s12 m6 l4 input-field input-outlined mt-0">
                                          <input id="wiz_personal_idNumber" name="idProofNo" type="number" class="validate">
                                          <label id="wiz_personal_idNumber_wrapper" for="wiz_personal_idNumber"><?php echo $language_data['tab_persorginfo_tab_poi_label_idNumber']; ?></label>
                                       </div>
                                       <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                          <input id="wiz_personal_poi" name="placeOfIssuance" type="text" class="validate">
                                          <label id="wiz_personal_poi_wrapper" for="wiz_personal_poi"><?php echo $language_data['tab_persorginfo_tab_poi_label_placeOIs']; ?></label>
                                       </div>
                                       <div class="col s12 m6 l6 input-field input-outlined mt-0 icon-input">
                                       <img class="date-icon" src="app/views/assets/img/calendar/calendar.svg" alt="calendar" />
                                          <input id="wiz_personal_doi" name="dateOfIssue" type="text" class="validate maxdatepicker">
                                          <label id="wiz_personal_doi_wrapper" for="wiz_personal_doi"><?php echo $language_data['tab_persorginfo_tab_poi_label_dateOfissue']; ?></label>
                                       </div>
                                       <div class="col s12 m6 l6 input-field input-outlined mt-0 icon-input">
                                       <img class="date-icon" src="app/views/assets/img/calendar/calendar.svg" alt="calendar" />
                                          <input id="wiz_personal_doe" name="dateOfExpiry" type="text" class="validate mindatepicker">
                                          <label id="wiz_personal_doe_wrapper" for="wiz_personal_doe"><?php echo $language_data['tab_persorginfo_tab_poi_label_expiry']; ?></label>
                                       </div>
                                       <div  class="col s12 m6 l6 input-field mt-0" id="wiz_personal_pouWrapper">
                                       <label class="custom-select-label"><?php echo $language_data['tab_persorginfo_tab_poi_label_purpofUse']; ?></label>
                                          <select required class="error validate" id="wiz_personal_pou" name="purposeOfUse">
                                             <option disabled selected value=""   ><?php echo $language_data['signup_toastr_selectAny']; ?></option>
                                             <option value="Personal">Personal</option>
                                             <option value="Commercial">Commercial</option>
                                          </select>
                                          <div class="input-field">
                                          </div>
                                       </div>
                                       <div class="col s12 m6 l6 input-field input-outlined mt-0 icon-input">
                                       <img class="date-icon" src="app/views/assets/img/calendar/calendar.svg" alt="calendar" />
                                          <input id="wiz_personal_dob" name="dateOfBirth" type="text" class="validate maxdatepicker">
                                          <label id="wiz_personal_dob_wrapper" for="wiz_personal_dob"><?php echo $language_data['tab_persorginfo_tab_poi_label_dateOfBirth']; ?></label>
                                       </div>


                                       


                                    </div> 
                                    <button id="wiz_persIndiv_next" style="display:none;" type="submit"><?php echo $language_data['tab_general_next']; ?></button>
                                    </form>
                                 </div>
                              </div>
                           </div>
                           <div id="billing" class="col s12 mt-4">
                              <div class="row">
                                 <div class="col s12">
                                    <form id="wiz_billing_form" method="post"  enctype="multipart/form-data" autocomplete="off">
                                       <div class="row margin">
                                          <div class="col s12 m6 l6 input-field input-outlined mt-0 mb-3">
                                             <input id="wiz_billing_buildingNum" name="buildingNumber" type="text" class="validate">
                                             <label id="wiz_billing_buildingNum_wrapper" for="wiz_billing_buildingNum"><?php echo $language_data['tab_persorginfo_tab_bilAddr_label_bilNum']; ?></label>
                                          </div>
                                          <div class="col s12 m6 l6 input-field input-outlined mt-0 mb-3">
                                             <input id="wiz_billing_streetRoad" name="street" type="text" class="validate">
                                             <label id="wiz_billing_streetRoad_wrapper" for="wiz_billing_streetRoad"><?php echo $language_data['tab_persorginfo_tab_bilAddr_label_streetRd']; ?></label>
                                          </div>
                                          <div class="col s12 m6 l6 input-field input-outlined mt-0 mb-3">
                                             <input id="wiz_billing_postalZipCode" name="zipCode" type="number" class="validate">
                                             <label id="wiz_billing_postalZipCode_wrapper" for="wiz_billing_postalZipCode"><?php echo $language_data['tab_persorginfo_tab_bilAddr_label_postalZip']; ?></label>
                                          </div>
                                          <div class="col s12 m6 l6 input-field input-outlined mt-0 mb-3">
                                             <input id="wiz_billing_pobox" name="postBox" type="number" class="validate">
                                             <label id="wiz_billing_pobox_wrapper" for="wiz_billing_pobox"><?php echo $language_data['tab_persorginfo_tab_bilAddr_label_pobox']; ?></label>
                                          </div>
                                          <div id="wiz_billing_city_wrapper" class="col s12 m6 l6 input-field input-outlined mt-0 mb-3 city-dropdown">
                                             <label class="custom-select-label"><?php echo $language_data['tab_persorginfo_tab_bilAddr_label_city']; ?></label>
                                             <select required class="error validate" name="city" id="wiz_billing_city">
                                                <option  disabled selected value=""><?php echo $language_data['signup_toastr_selectAny']; ?></option>
                                                <option value="Riyadh">Riyadh</option>
                                                <option value="Jeddah">Jeddah</option>
                                                <option value="Makkah">Makkah</option>
                                                <option value="Madinah">Madinah</option>
                                                <option value="Dammam">Dammam</option>
                                                <option value="Taif">Taif</option>
                                                <option value="Al-Kharj">Al-Kharj</option>
                                                <option value="Khobar">Khobar</option>
                                                <option value="Tabuk">Tabuk</option>
                                                <option value="Dhahran">Dhahran</option>
                                                <option value="Others">Others</option>
                                             </select>
                                             <div class="input-field">
                                          </div>
                                          </div>
                                          <div class="col s12 m6 l6 input-field input-outlined mt-0 mb-3">
                                             <label class="custom-select-label"><?php echo $language_data['tab_persorginfo_tab_bilAddr_label_country']; ?></label>
                                             <select required class="error validate" name="country" id="wiz_billing_country">
                                                <option  disabled selected value=""><?php echo $language_data['signup_toastr_selectAny']; ?></option>
                                                <option value="Saudi Arabia (KSA)">Saudi Arabia (KSA)</option>
                                             </select>
                                             <div class="input-field">
                                          </div>
                                          </div>
                                          <div class="col s12 m6 l6 input-field input-outlined mt-0 mb-3 " style="display:none;" id="wiz_billing_ocity_wrapper" >
                                             <input  onkeydown="return /[a-z]/i.test(event.key)" id="wiz_billing_ocity" type="text" class="validate" >
                                             <label id="wiz_billing_ocity_iwrapper" for="wiz_billing_ocity"><?php echo $language_data['tab_persorginfo_tab_bilAddr_label_otherscity']; ?></label>
                                          </div>
                                       </div>

                                       <button id="wiz_billingIndiv_next" style="display:none;" type="submit"><?php echo $language_data['tab_general_next']; ?></button>

                                    </form>
                                 </div>
                              </div>
                           </div>
                           <div id="orginfo" class="col s12 mt-4">
                              <div class="row">
                                 <div class="col s12">
                                    <form id="wiz_orginfo_form" method="post"  enctype="multipart/form-data" autocomplete="off">
                                    <div class="row">
                                       <div class="col s12 m6 l6 input-field input-outlined mt-0 mb-2">
                                          <input id="wiz_orginfo_companyName" name="companyName" type="text" class="validate">
                                          <label id="wiz_orginfo_companyName_wrapper" for="wiz_orginfo_companyName"><?php echo $language_data['tab_persorginfo_tab_orgInfo_label_compName']; ?></label>
                                       </div>
                                       <div class="col s12 m6 l6 input-field input-outlined mt-0 mb-2 industry-dropdown">
                                          <label class="custom-select-label"><?php echo $language_data['tab_persorginfo_tab_orgInfo_label_industry']; ?></label>
                                          <select required class="error validate" name="companyType" id="wiz_orginfo_industry">
                                             <option  disabled selected value=""><?php echo $language_data['signup_toastr_selectAny']; ?></option>
                                             <option value="Consumer & Industrial Products">Consumer & Industrial Products</option>
                                             <option value="Energy & Resources">Energy & Resources</option>
                                             <option value="Financial Services">Financial Services</option>
                                             <option value="Life Sciences & Health Care">Life Sciences & Health Care</option>
                                             <option value="Public Sector">Public Sector</option>
                                             <option value="Technology, Media & Telecommunications">Technology, Media & Telecommunications</option>
                                             <option value="Others">Others</option>
                                          </select>
                                          <div class="input-field">
                                          </div>
                                       </div>
                                       <div id="wiz_orginfo_oindustry_wrapper" class="col s12 m6 l6 input-field input-outlined mt-0 mb-2" style="display:none;" id="wiz_billing_ocity_wrapper" >
                                          <input  onkeydown="return /[a-z]/i.test(event.key)"  id="wiz_orginfo_oindustry" type="text" class="validate" >
                                          <label for="wiz_orginfo_oindustry"><?php echo $language_data['tab_persorginfo_tab_orgInfo_label_othersindustry']; ?></label>
                                       </div>
                                       <div class="col s12 m6 l6 input-field input-outlined mt-0 mb-3">
                                          <input name="crNo" id="wiz_orginfo_crnumber" type="text" class="validate">
                                          <label id="wiz_orginfo_crnumber_wrapper" for="wiz_orginfo_crnumber"><?php echo $language_data['tab_persorginfo_tab_orgInfo_label_commregNum']; ?></label>
                                       </div>
                                       <div class="col s12 m6 l6 file-field input-field  mt-0 mb-3">
                                          <div id="value_file_remove" class="float-right mt-2 hide-on-small-only hide-on-med-only">
                                             <img src="app/views/html/signup/home/img/upload.png" alt="" width="40">
                                             <input id="file_upload" name="file_upload" onChange="uploadPersonalOrgInfoFile()" type="file">
                                          </div>
                                          <div onClick="removeFileUpl()" id="file_remove" style="display:none;" class="float-right mt-2 hide-on-small-only hide-on-med-only ">
                                             <span ><i class="material-icons pink-text">highlight_off</i></span>
                                          </div>
                                          <div class="file-path-wrapper input-field input-outlined mt-0 mb-0 pl-0" style="position: revert;">
                                          
                                          <input name="crFilaName" id="wiz_orginfo_filePath" class="file-path " type="text" placeholder="Upload files here. - Allowed *.jpeg, *.jpg, *.png, *.pdf / Max file size 2MB." readonly>
                                          </div>
                                       </div>
                                       <div class="col s12 m6 l6 input-field input-outlined  mt-0 mb-3 icon-input">
                                       <img class="date-icon" src="app/views/assets/img/calendar/calendar.svg" alt="calendar" />
                                          <input name="issueDate" id="wiz_orginfo_issueDate" type="text" class=" maxdatepicker">
                                          <label id="wiz_orginfo_issueDate_wrapper" for="wiz_orginfo_issueDate"><?php echo $language_data['tab_persorginfo_tab_orgInfo_label_issueDt']; ?></label>
                                       </div>
                                       <div class="col s12 m6 l6 input-field input-outlined  mt-0 mb-3 icon-input">
                                       <img class="date-icon" src="app/views/assets/img/calendar/calendar.svg" alt="calendar" />
                                          <input name="expiryDate" id="wiz_orginfo_expiryDate" type="text" class=" mindatepicker">
                                          <label id="wiz_orginfo_expiryDate_wrapper" for="wiz_orginfo_expiryDate"><?php echo $language_data['tab_persorginfo_tab_orgInfo_label_expireDt']; ?></label>
                                       </div>
                                       <div class="col s11 m6 l5 input-field input-outlined  mt-0 mb-3 data-class-sm data-class">
                                          <label class="custom-select-label"><?php echo $language_data['tab_persorginfo_tab_orgInfo_label_dataClassify']; ?></label>
                                          <select required class="error validate" name="dataClassification" id="wiz_orginfo_dataClassification" >
                                             <option disabled selected value=""><?php echo $language_data['signup_toastr_selectAny']; ?></option>
                                             <option value="Public">Public </option>
                                             <option value="Restricted">Restricted	</option>
                                             <option value="Confidential">Confidential</option>
                                             <option value="Extremely Confidential">Extremely Confidential</option>
                                          </select>
                                          <div class="input-field">
                                          </div>
                                       </div>
                                       <div class="col s1 m1 l1 input-field input-outlined  mt-0 mb-3 hide-on-small-only hide-on-med-only">
                                          <a class="modal-trigger data-class s1 m1 l1" href="#modal1"><img class="org-info-class" src="app/views/html/signup/home/img/info.png" width="40" alt="" /></a>
                                       </div>
                                       <div class="col s12 m6 l6 input-field input-outlined  mt-0 mb-3">
                                          <label class="custom-select-label"><?php echo $language_data['tab_persorginfo_tab_orgInfo_label_purpose']; ?></label>
                                          <select required class="error validate" name="purposeOfUse" id="wiz_orginfo_purposeoftheuse">
                                             <option disabled selected value=""><?php echo $language_data['signup_toastr_selectAny']; ?></option>
                                             <option value="Resale">Resale</option>
                                             <option value="Live support system">Live support system</option>
                                             <option value="Plants/Factories">Plants/Factories</option>
                                             <option value="Others">Others</option>
                                          </select>
                                          <div class="input-field">
                                          </div>
                                       </div>
                                    </div>

                                    <button id="wiz_orgInfoIndiv_next" style="display:none;" type="submit"><?php echo $language_data['tab_general_next']; ?></button>


                                    </form>
                                 </div>
                              </div>
                           </div>
                     </div>
                  </div>
                  
                  <div class="row">
                     <!--<div class="col m12 s12 mb-1">
                        <button id="wiz_personalOrgInfo_next" class=" waves-effect waves dark btn btn-primary disabled" type="button">Submit</button>
                        </div>-->
                     <div class="col m12 s12 mb-1">
               
                        <input type="hidden" id="wiz_pob_profileId">
                        <input type="hidden" id="wiz_pob_billingId">
                        <input type="hidden" id="wiz_pob_orgId">
                        <!-- <button class="red btn mr-1 btn-reset" type="reset"> BACK </button> -->
                        <button id="wiz_personalOrgInfo_next" class=" waves-effect waves dark btn btn-primary float-right" type="button"><?php echo $language_data['tab_general_next']; ?></button>
                        <button style="display:none;" disabled id="wiz_personalOrgInfo_next_actual" class=" waves-effect waves dark btn btn-primary next-step float-right " type="submit"><?php echo $language_data['tab_general_next']; ?></button>
                        
                     </div>
                  </div>
               </div>
               </div>

            </div>
            <div class="step-content" id="step_level_wiz_3_disp" style="display:none;">
               
            <div class="card border-radius-7">
               <div class="card-content">
                  <div class="row" id="main-view">
                     <div class="col s12 border-bottom-1">
                        <ul class="tabs tab-demo" id="personalDispTab" >
                           <li class="tab"><a class="tab-active-skeleton animate active"></a></li>
                           <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                           <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                        </ul>
                     </div>
                     <div class="col s12">
                        <div id="personal" class="col s12 mt-4 active" style="display: block;">
                           
                           <!-- PERSONAL INFO Skeleton -->
                           <div class="row ">
                              <div class="col s12">
                                 <div class="row margin">
                                    <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                       <div class="form-input-skeleton animate mb-4"></div>
                                    </div>
                                    <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                       <div class="form-input-skeleton animate mb-4"></div>
                                    </div>
                                    <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                       <div class="form-input-skeleton animate mb-4"></div>
                                    </div>
                                    <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                       <div class="form-input-skeleton animate mb-4"></div>
                                    </div>
                                    <div class="col s12 m6 l2 input-field mt-0 id-proof">
                                       <div class="form-input-skeleton animate mb-4"></div>
                                    </div>
                                    <div class="col s12 m6 l4 input-field input-outlined mt-0">
                                       <div class="form-input-skeleton animate mb-4"></div>
                                    </div>
                                    <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                       <div class="form-input-skeleton animate mb-4"></div>
                                    </div>
                                    <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                       <div class="form-input-skeleton animate mb-4"></div>
                                    </div>
                                    <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                       <div class="form-input-skeleton animate mb-4"></div>
                                    </div>
                                    <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                       <div class="form-input-skeleton animate mb-4"></div>
                                    </div>
                                    <div class="col s12 m6 l6 input-field mt-0">
                                       <div class="form-input-skeleton animate mb-4"></div>
                                    </div>
                                 </div> 
                              </div>
                           </div>
                           <!-- PERSONAL INFO Skeleton -->
                        </div>
                        
                        
                     </div>
                  </div>
                  <div class="row">
                     <div class="col m12 s12 mb-1">
                        <!-- <button class="red btn mr-1 btn-reset" type="reset"> BACK </button> -->
                        <button disabled class="waves-effect waves dark btn btn-primary  float-right" type="submit"><?php echo $language_data['tab_general_next']; ?></button>
                     </div>
                     <!-- Next button Skeleton -->
                     <div class="col m12 s12 mb-1 hide">
                        <button style="width:110px;" class="btn btn-primary btn-skeleton cursor-none animate float-right" type="submit"></button>
                     </div>
                     <!-- Next button Skeleton -->
                  </div>
               </div>
            </div>

            </div>
         </li>
         <li class="step" id="step_level_wiz_4">
            <!-- <div class="step-title waves-effect">Payment Methods</div> -->
            <div class="step-title waves-effect" title="<?php echo $language_data['tab_title_payminfo']; ?>" ><?php echo $language_data['tab_title_payminfo']; ?></div>

            <div class="step-content" id="step_level_wiz_4_org" style="display:none;">

            <div class="card border-radius-7">
               <div class="card-content">
                     <div class="row mt-2">
                        <div class="col s12 center" id="paymentsignupBefore">
                           <h6><?php echo $language_data['tab_payminfo_label_title']; ?></h6>
                           <img class="mt-2 credit-card-sm" src="app/views/html/signup/home/img/credit-card.png" alt="credit-card" />
                        </div>
                        <div id="paymentsignupAfter" class="col s12 center " style="display:none;">
                           <div class="container preload">
                              <div class="creditcard">
                                 <div class="front">
                                    <div id="ccsingle"></div>
                                    <svg version="1.1" id="cardfront" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 750 471" style="enable-background:new 0 0 750 471;" xml:space="preserve">
                                       <g id="Front">
                                       <g id="CardBackground">
                                          <g id="Page-1_1_">
                                             <g id="amex_1_">
                                             <path id="Rectangle-1_1_" class="lightcolor grey" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                                                C0,17.9,17.9,0,40,0z" />
                                             </g>
                                          </g>
                                          <path class="darkcolor greydark" d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z" />
                                       </g>
                                       <text transform="matrix(1 0 0 1 60.106 295.0121)" id="svgnumber" class="st2 st3 st4">0123 4567 8910 1112</text>
                                       <text transform="matrix(1 0 0 1 54.1064 428.1723)" id="svgname" class="st2 st5 st6">JOHN DOE</text>
                                       <text transform="matrix(1 0 0 1 54.1074 389.8793)" class="st7 st5 st8">cardholder name</text>
                                       <text transform="matrix(1 0 0 1 479.7754 388.8793)" class="st7 st5 st8">expiration</text>
                                       <text transform="matrix(1 0 0 1 65.1054 241.5)" class="st7 st5 st8">card number</text>
                                       <g>
                                          <text transform="matrix(1 0 0 1 574.4219 433.8095)" id="svgexpire" class="st2 st5 st9">01/23</text>
                                          <text transform="matrix(1 0 0 1 479.3848 417.0097)" class="st2 st10 st11">VALID</text>
                                          <text transform="matrix(1 0 0 1 479.3848 435.6762)" class="st2 st10 st11">THRU</text>
                                          <polygon class="st2" points="554.5,421 540.4,414.2 540.4,427.9 		" />
                                       </g>
                                       <g id="cchip">
                                          <g>
                                             <path class="st2" d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                                                c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z" />
                                          </g>
                                          <g>
                                             <g>
                                             <rect x="82" y="70" class="st12" width="1.5" height="60" />
                                             </g>
                                             <g>
                                             <rect x="167.4" y="70" class="st12" width="1.5" height="60" />
                                             </g>
                                             <g>
                                             <path class="st12" d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                                                c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                                                C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                                                c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                                                c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z" />
                                             </g>
                                             <g>
                                             <rect x="82.8" y="82.1" class="st12" width="25.8" height="1.5" />
                                             </g>
                                             <g>
                                             <rect x="82.8" y="117.9" class="st12" width="26.1" height="1.5" />
                                             </g>
                                             <g>
                                             <rect x="142.4" y="82.1" class="st12" width="25.8" height="1.5" />
                                             </g>
                                             <g>
                                             <rect x="142" y="117.9" class="st12" width="26.2" height="1.5" />
                                             </g>
                                          </g>
                                       </g>
                                       </g>
                                       <g id="Back"></g>
                                    </svg>
                                 </div>
                                 <div class="back">
                                    <svg version="1.1" id="cardback" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 750 471" style="enable-background:new 0 0 750 471;" xml:space="preserve">
                                       <g id="Front">
                                       <line class="st0" x1="35.3" y1="10.4" x2="36.7" y2="11" />
                                       </g>
                                       <g id="Back">
                                       <g id="Page-1_2_">
                                          <g id="amex_2_">
                                             <path id="Rectangle-1_2_" class="darkcolor greydark" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                                                C0,17.9,17.9,0,40,0z" />
                                          </g>
                                       </g>
                                       <rect y="61.6" class="st2" width="750" height="78" />
                                       <g>
                                          <path class="st3" d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5
                                                C707.1,246.4,704.4,249.1,701.1,249.1z" />
                                          <rect x="42.9" y="198.6" class="st4" width="664.1" height="10.5" />
                                          <rect x="42.9" y="224.5" class="st4" width="664.1" height="10.5" />
                                          <path class="st5" d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z" />
                                       </g>
                                       <text transform="matrix(1 0 0 1 621.999 227.2734)" id="svgsecurity" class="st6 st7">985</text>
                                       <g class="st8">
                                          <text transform="matrix(1 0 0 1 518.083 280.0879)" class="st9 st6 st10">security code</text>
                                       </g>
                                       <rect x="58.1" y="378.6" class="st11" width="375.5" height="13.5" />
                                       <rect x="58.1" y="405.6" class="st11" width="421.7" height="13.5" />
                                       <text transform="matrix(1 0 0 1 59.5073 228.6099)" id="svgnameback" class="st12 st13">John Doe</text>
                                       </g>
                                    </svg>
                                 </div>
                              </div>
                           </div>
                           <div class="row">
                              <div class="col s12 m8 l6 push-m2 push-l3">
                                 <div class="row">
                                    <div class="col s12 input-field input-outlined mb-0">
                                       <input disabled id="cardnumber" type="text" class="validate" >
                                       <label id="cardnumberLabel" for="cardnumber">Card Number</label>
                                       <svg id="ccicon" class="ccicon" width="750" height="471" viewBox="0 0 750 471" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                       </svg>
                                    </div>
                                    <div class="col s12 m8 l8 input-field input-outlined card-name-sm pr-0">
                                       <input disabled id="name" type="text" class="validate" value="">
                                       <label id="nameLabel" for="name">Name on Card</label>
                                    </div>
                                    <div class="col s12 m4 l4 input-field input-outlined">
                                       <input disabled id="expirationdate" type="text" class="validate" >
                                       <label id="expirationdateLabel" for="expirationdate">Expiry</label>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div  class="col s12 center payment-btn-sm">
                           <button id="paymentsignupBeforeBtn" onClick="modalPaymentInfo()"  type="button"  class="btn waves-effect waves-light gradient-45deg-light-blue-cyan mt-2"><?php echo $language_data['tab_payminfo_label_addcard']; ?></button>
                           <button id="paymentsignupAfterBtn" type="button" class="btn waves-effect waves-light  gradient-45deg-light-blue-cyan " style="display:none;">
                              <img class="padlock-icon" src="app/views/html/signup/home/img/padlock.png" width="18" alt="padlock"><?php echo $language_data['tab_payminfo_label_saved']; ?> </button>
                        </div>
                     </div>
                     <div class="row mt-4">
                        <div id="paymentSarInfo" class="col m12 s12 mb-1 center credit-msg hide-on-small-only hide-on-small-only hide-on-med-only">
                           <p><?php echo $language_data['tab_payminfo_label_footer_title']; ?></p>
                           <p><?php echo $language_data['tab_payminfo_label_footer_subtitle']; ?></p>
                        </div>
                        <div class="col m12 s12 mb-1">
                           <button onClick="activateParticularWizPersonalOrg()" class="red btn mr-1 previous-step pin-top" > <?php echo $language_data['tab_general_back']; ?> </button>
                           <button id="enablePayBtn" disabled style="display:none;" onClick="fromPaymentNext()" class="waves-effect waves dark btn btn-primary next-step float-right" type="submit"><?php echo $language_data['tab_general_next']; ?></button>
                           <button id="disablePayBtn" disabled class="waves-effect waves dark btn btn-primary float-right" type="submit"><?php echo $language_data['tab_general_next']; ?></button>
                        </div>
                     </div>
               </div>
               </div>



            </div>

            <div class="step-content" id="step_level_wiz_4_disp" style="display:none;">
               
               <div class="card border-radius-7">
                  <div class="card-content">
                  <div class="row mt-2">
                        <div class="col s12 center">
                           <h6 class="content-h animate"></h6>
                           <div class="credit-card animate mt-2"></div>
                        </div>
                        <div class="col s12 center">
                           <button type="button" style="width:110px;" class="btn cursor-none payment-btn-sm btn-skeleton animate mt-2"></button>
                        </div>
                  </div>
                  <div class="row mt-4">
                        <div class="col m12 s12 mb-1 center credit-msg hide-on-small-only hide-on-small-only hide-on-med-only">
                           <p class="content-p-length animate"></p><br>
                           <p class="content-p animate"></p>
                        </div>
                        <div class="col m12 s12 mb-1">
                           <button style="width:110px;" class="red btn mr-1 cursor-none btn-skeleton animate pin-top" type="reset"></button>
                           <button style="width:110px;" class="btn btn-primary cursor-none btn-skeleton animate float-right" type="submit"></button>
                        </div>
                  </div>
                  </div>
               </div>

            </div>
         </li>
         <li class="step" id="step_level_wiz_5">
            <!-- <div class="step-title waves-effect">Submit</div> -->
            <div class="step-title waves-effect" title="<?php echo $language_data['tab_title_sbt']; ?>" ><?php echo $language_data['tab_title_sbt']; ?></div>

            <div class="step-content" id="step_level_wiz_5_org_public" style="display:none;">
               <div class="card border-radius-7">
               <div class="card-content">
                  <div class="row" id="legally_dcc_allow_public">
                     <div class="col m12 s12 center">
                     <img class="mt-4" src="app/views/html/signup/home/img/success.png" width="200" alt="success" />
                     <h5 class="mt-4"><?php echo $language_data['tab_sbt_label_scr1_title']; ?></h5>
                     <p class="mt-4"><?php echo $language_data['tab_sbt_label_scr1_subtitle']; ?></p>
                     </div>
                  </div>
                  
                  <div class="row mt-4 mb-3">
                     <div class="col m12 s12 mb-1 center">
                     <!-- <button class="red btn mr-1 btn-reset" type="reset"> BACK </button> -->
                     <button onClick="finalBtnwiz()" class="waves-effect waves-dark btn btn-primary" type="submit"><?php echo $language_data['tab_general_finish']; ?></button>
                     </div>
                  </div>
               </div>
               </div>
            </div>

            <div class="step-content" id="step_level_wiz_5_org_rest" style="display:none;">

            <div class="card border-radius-7">
               <div class="card-content">
                  
                  <div class="row " id="legally_dcc_allow_restricted" >
                     <div class="col m12 s12 center">
                     <img class="mt-4" src="app/views/html/signup/home/img/KYC.min.png" width="200" alt="success" />
                        <h5 class="mt-2"><?php echo $language_data['tab_sbt_label_scr2_title']; ?></h5>
                        <p class="mt-3"><?php echo $language_data['tab_sbt_label_scr2_subtitle_0']; ?></p>
                        <p class=""><?php echo $language_data['tab_sbt_label_scr2_subtitle_1']; ?></p>
                        <p class=""><?php echo $language_data['tab_sbt_label_scr2_subtitle_2']; ?></p>
                     </div>
                  </div>
                  <div class="row mt-4 mb-3">
                     <div class="col m12 s12 mb-1 center">
                     <!-- <button class="red btn mr-1 btn-reset" type="reset"> BACK </button> -->
                     <button onClick="finalBtnwiz()" class="waves-effect waves-dark btn btn-primary" type="submit"><?php echo $language_data['tab_general_finish']; ?></button>
                     </div>
                  </div>
               </div>
            </div>


            </div>

            <div class="step-content" id="step_level_wiz_5_disp" style="display:none;">
               <div class="card border-radius-7">
                  <div class="card-content">
                     <div class="row">
                     <div class="col m12 s12 center">
                        <div class="mt-4 submit-circle animate"></div>
                        <h5 class="mt-4 content-h animate"></h5>
                        <h5 class="mt-4 content-h animate"></h5>
                     </div>
                     </div>
                     <div class="row mt-4 mb-3">
                     <div class="col m12 s12 mb-1 center">
                        <button style="width:110px;" class="btn btn-primary cursor-none btn-skeleton animate" type="submit"></button>
                     </div>
                     </div>
                  </div>
               </div>
            </div>

         </li>    
   </ul>

</div>
<!-- END: Page Main-->
<!-- Modal -->
<div id="modal1" class="modal">
   <div class="modal-content">
      <h6>Data Classification</h6>
      <div class="row">
         <div class="col s12">
            <p>Based on the Cloud Computing Regulatory Framework, issued by the Saudi Communication, Information, and Technology Commission; Cloud customers need to choose the appropriate classification of their data as follows:</p>
         </div>
         <div class="col s12">
            <ul class="collapsible collapsible-accordion">
                  <li class="active">
                  <div class="collapsible-header"><i class="material-icons">blur_circular</i> Extremely Confidential</div>
                  <div class="collapsible-body">
                     <span>Data is classified as (Extremely Confidential) if unauthorized access to this data or its disclosure or its content leads to serious and exceptional damage that cannot be remedied or repaired on:</span>
                     <ul class="collection">
                     <li class="collection-item">• National interests, including breaching agreements and treaties, harming the Kingdom's reputation, diplomatic relations and political affiliations, or the operational efficiency of security or military operations, the national economy, national infrastructure, or government business. </li>
                     <li class="collection-item">• The performance of government agencies, which is harmful to the national interest. </li>
                     <li class="collection-item">• Broader individual health and safety and the privacy of senior officials. Environmental or natural resources </li>
                     </ul>
                  </div>
                  </li>
                  <li>
                  <div class="collapsible-header"><i class="material-icons">details</i> Confidential</div>
                  <div class="collapsible-body">
                     <span>Data is classified as (Confidential) if unauthorized access to this data or its disclosure or its content leads to serious and exceptional damage that cannot be remedied or repaired on: </span>
                     <ul class="collection">
                     <li class="collection-item">• National interests, including partially harming the Kingdom's reputation, diplomatic relations and political affiliations, or the operational efficiency of security or military operations, the national economy, national infrastructure, or government business. </li>
                     <li class="collection-item">• Causes a financial loss at the organizational level that leads to bankruptcy, the inability of the entities to perform their duties, a serious loss of competitiveness, or both. </li>
                     <li class="collection-item">• Causes serious harm or injury that affects the life of a group of individuals.</li>
                     <li class="collection-item">• Leads to long-term damage to environmental or natural resources. Investigating major cases as specified by law, such as terrorism financing cases.</li>
                     </ul>
                  </div>
                  </li>
                  <li>
                  <div class="collapsible-header"><i class="material-icons">filter_center_focus</i> Restricted</div>
                  <div class="collapsible-body">
                     <span>Data is classified as (Restricted): If unauthorized access to or disclosure of this data or its content leads to:</span>
                     <ul class="collection">
                     <li class="collection-item">• A limited negative impact on the work of government agencies or economic activities in the Kingdom, or on the work of a specific person</li>
                     <li class="collection-item">• Limited damage to any entity's assets and limited loss on its financial and competitive position. Limited damage in the short term to environmental or natural resources.</li>
                     </ul>
                  </div>
                  </li>
                  <li>
                     <div class="collapsible-header"><i class="material-icons">public</i> Public</div>
                     <div class="collapsible-body">
                        <span>Data is classified as (Public) when unauthorized access to or disclosure of this data or its content does not result in any of the effects mentioned above - in the event that there is no effect on the following: </span>
                        <ul class="collection">
                        <li class="collection-item">• National interest</li>
                        <li class="collection-item">• Entity activities</li>
                        <li class="collection-item">• Interests of individuals Environmental resources</li>
                        </ul>
                        <span>For more information regarding the Cloud Computing Regulatory Framework please visit <a target="_blank" href="https://www.citc.gov.sa/en/RulesandSystems/RegulatoryDocuments/Pages/CCRF.aspx">CITC website.</a></span>
                     </div>
                  </li>
            </ul>
         </div>
      </div>
   </div>
   <div class="modal-footer">
      <a href="javascript:void(0);" class="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
   </div>
</div>



<!-- START Tags Modal Trigger -->
 <div id="paymentInfomodal" class="modal border-radius-10">
   <style>
       #telr {
         width: 100%;
         min-width: 600px;
         height: 600px;
         border: 0;
       }
     </style>
   
   <div class="modal-content">
     
     
      
           <iframe id= "telr" sandbox="allow-forms allow-modals allow-popups-to-escape-sandbox allow-popups allow-scripts allow-top-navigation allow-same-origin"  ></iframe>
       
       
     
   </div>
  

 </div>
<!-- END Tags Modal Trigger -->