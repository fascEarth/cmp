<?php

require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/backend.php';

$_SESSION['token_illustrate_surfAccounts'] =(
  (
    isset($_SESSION['token_illustrate_surfAccounts']) 
    && 
    !empty($_SESSION['token_illustrate_surfAccounts'])
  )
  ?
  $_SESSION['token_illustrate_surfAccounts']
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
<link rel="stylesheet" type="text/css" href="app/views/html/surface/settings/account/index.css">
<link rel="stylesheet" type="text/css" href="app/views/html/surface/settings/account/developer.css">


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

/************* Profile Skeleton *************/
.profile-skeleton .profile-input {
  width: 100%;
  height: 47px;
  position: relative;
  background: #8d8d8d;
  border-radius: 7px;
  margin-bottom: 8px;
}
.profile-skeleton .animate {
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

/************ Account Details Table Skeleton **********/
.account-table-skeleton .table-header-skeleton {
  width: 175px;
  height: 12px;
  position: relative;
  top: 35px;
  background: #8d8d8d;
  border-radius: 5px;
}
.account-table-skeleton .table-header-search {
  width: 260px;
  height: 30px;
  border-radius: 20px;
  float: right;
  top: 0px;
  position: relative;
  border: 1px solid #c7c7c7;
}
.account-table-skeleton tr {
  border-bottom: 0px;
}
.account-table-skeleton thead tr {
  height: 48px;
  background-color: #dbdada;
}
.account-table-skeleton table.striped > tbody > tr > td {
  height: 50px;
}
.account-table-skeleton .table-td-skeleton {
  width: 70%;
  height: 12px;
  position: relative;
  top: 2px;
  background: #8d8d8d;
  border-radius: 5px;
  margin: 0 auto;
}
.account-table-skeleton .animate {
  animation : shimmer 2s infinite linear;
  background: linear-gradient(to right, #efefef 4%, #f5f5f5 25%, #f5f5f5 36%);
  background-size: 1000px 100%;
}
.account-table-skeleton .header-animate {
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
<input type="hidden" id="establish_surfAccounts" value="<?php echo $_SESSION['token_illustrate_surfAccounts']; ?>" >
<div class="content-wrapper-before gradient-45deg-indigo-purple"></div>
<div class="breadcrumbs-dark pb-0" id="breadcrumbs-wrapper">
    <!-- Search for small screen-->
    <div class="container">
    <div class="row">
        <div class="col s10 m6 l6">
        <h5 class="breadcrumbs-title mt-0 mb-0"><span>Account</span></h5>
        </div>
    </div>
    </div>
</div>
<div class="col s12">
    <div class="container">
      <div class="section section-data-tables" >

          <div class="card border-radius-10 card-tab-skeleton" id="accounttopskel" >
              <div class="card-content tab-card" style="display:none;" >
                  <div class="row">
                      <div class="col s12">
                        <ul class="tabs tabs-fixed-width">
                          <li style="display:none;" id="profileTab" class="tab"><a class="active" href="#profile">My Profile</a></li>
                          <li style="display:none;" id="organizationTab" class="tab"><a onClick="surfaccorgShow()" href="#organization">Organization </a></li>
                          <li style="display:none;" id="userMgmtShowTab" class="tab"><a onClick="userMgmtShow()" href="#user">User Management</a></li>
                          <li style="display:none;" id="teamsShowTab" class="tab"><a onClick="teamsShow()" href="#teams">Teams</a></li>
                          <li style="display:none;" id="tagsShowTab" class="tab"><a onClick="tagsShow()" href="#tags">Tags</a></li>
                          <li id="notificationsTab" class="tab"><a href="#notifications">Notifications</a></li>
                        </ul>
                      </div>
                  </div>
              </div>
              <div class="card-content tab-card">
                <div class="row">
                    <div class="col s12">
                      <ul class="tabs tabs-fixed-width">
                        <li class="tab"><a class="animate active"></a></li>
                        <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                        <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                        <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                        <!-- <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                        <li class="tab"><div class="tab-heading-skeleton animate"></div></li> -->
                      </ul>
                    </div>
                </div>
            </div>
          </div>

          
          
          <div class="card border-radius-10">
              <div class="card-content">
                  <div class="row">
                    <div id="profile" class="col s12">
                      <div class="row mt-2" style="display:none;" >
                        <div class="col s12">
                          <div class="row margin">
                            <form class="" id="sur_acc_profileid_form" method="post" enctype="multipart/form-data" autocomplete="off">
                              <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                <input id="sur_acc_profileid_familyName" name="familyName" type="text" class="validate">
                                <label id="sur_acc_profileid_familyName_label" for="sur_acc_profileid_familyName">Family Name</label>
                              </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                <input id="sur_acc_profileid_firstName" name="firstName" type="text" class="validate">
                                <label id="sur_acc_profileid_firstName_label" for="sur_acc_profileid_firstName">First Name</label>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                <input id="sur_acc_profileid_middleName" name="middleName" type="text" class="validate">
                                <label id="sur_acc_profileid_middleName_label" for="sur_acc_profileid_middleName">Middle Name</label>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                <input id="sur_acc_profileid_nationality" name="nationality" type="text" class="validate">
                                <label id="sur_acc_profileid_nationality_label" for="sur_acc_profileid_nationality" >Nationality</label>
                            </div>
                            <div class="col s12 m6 l2 input-field mt-0 pr-0 id-proof">
                                <select id="sur_acc_profileid_idProof" name="idProof" >
                                  <option value="" disabled selected>Proof of ID</option>
                                  <option value="National ID">National ID</option>
                                  <option value="Iqama">Iqama</option>
                                  <option value="Passport">Passport</option>
                                </select>
                            </div>
                            <div class="col s12 m6 l4 input-field input-outlined idProofNo mt-0 pl-0">
                                <input id="sur_acc_profileid_idProofNo" name="idProofNo" type="text" class="validate">
                                <label id="sur_acc_profileid_idProofNo_label" for="sur_acc_profileid_idProofNo" >ID Number</label>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                <input id="sur_acc_profileid_placeOfIssuance" name="placeOfIssuance" type="text" class="validate">
                                <label id="sur_acc_profileid_placeOfIssuance_label" for="sur_acc_profileid_placeOfIssuance" >Place of Issuance</label>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                <input id="sur_acc_profileid_dateOfIssue" name="dateOfIssue" type="text" class="validate datepicker">
                                <label id="sur_acc_profileid_dateOfIssue_label" for="sur_acc_profileid_dateOfIssue" >Date of issue</label>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                <input id="sur_acc_profileid_dateOfExpiry" name="dateOfExpiry" type="text" class="validate datepicker">
                                <label id="sur_acc_profileid_dateOfExpiry_label" for="sur_acc_profileid_dateOfExpiry" >Date of expiry</label>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                <input id="sur_acc_profileid_dateOfBirth" name="dateOfBirth" type="text" class="validate datepicker">
                                <label id="sur_acc_profileid_dateOfBirth_label" for="sur_acc_profileid_dateOfBirth" >Date of Birth</label>
                            </div>
                            <div class="col s12 m6 l6 input-field mt-0">
                                <select id="sur_acc_profileid_purposeOfUse" name="purposeOfUse">
                                  <option value="" disabled selected>Purpose of the use</option>
                                  <option value="Personal">Personal</option>
                                  <option value="Commercial">Commercial</option>
                                </select>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                              <input id="sur_acc_profileid_emailId" name="emailId" type="text" class="validate" value="rajkumar@iprotecs.com" disabled>
                              <!-- <label for="email_id">Email Address</label> -->
                            </div>
                            <div class="col s3 m2 l2 input-field input-outlined mt-0 pr-0">
                              <input id="sur_acc_profileid_mobileCode"  type="text" class="validate center" value="+966" disabled>
                              <!-- <label for="Code_id">Code</label> -->
                            </div>
                            <div class="col s9 m4 l4 input-field input-outlined mt-0 pl-0">
                              <input id="sur_acc_profileid_mobileNo"  name="mobileNo" type="text" class="validate" value="" >
                              <!-- <label for="Phone_id">Phone Number</label> -->
                            </div>
                            <div class="col s12">
                              <div class="card-alert card orange lighten-5 border-radius-7 mt-0">
                                <div class="card-content orange-text">
                                  <p>
                                    <i class="fa fa-exclamation-triangle fs-30 red-text" aria-hidden="true"></i> Proof of ID verification is in progress.</p>
                                </div>
                                <button type="button" class="close orange-text" data-dismiss="alert" aria-label="Close">
                                  <span aria-hidden="true">×</span>
                                </button>
                              </div>
                            </div>
                            <div class="col s12">
                              <input type="hidden" id="sur_acc_profileid_idProofVerifyStatus" name="idProofVerifyStatus">
                              <input type="hidden" id="sur_acc_profileid_profileId" name="profileId">
                              <button type="button" class="btn form-btn waves-effect waves-light cancle-btn float-right ml-1">CANCEL</button>
                              <button disabled  id="sur_acc_profileid_form_submit" type="button" class="btn form-btn waves-effect waves-light gradient-45deg-light-blue-cyan float-right">SAVE</button>
                            </div>

                          </form>
                          </div>
                        </div>
                      </div>

                      <div class="row mt-2 profile-skeleton ">
                        <div class="col s12">
                          <div class="row margin">
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l2 input-field mt-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l4 input-field input-outlined mt-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l6 input-field mt-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                              <div class="profile-input animate"></div>
                              <!-- <label for="email_id">Email Address</label> -->
                            </div>
                            <div class="col s3 m2 l2 input-field input-outlined mt-0 pr-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s9 m4 l4 input-field input-outlined mt-0 pl-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12">
                              <div class="card-alert card orange lighten-5 border-radius-7 mt-0 animate" style="height:40px"></div>
                            </div>
                            <!-- <div class="col s12">
                              <button type="button" class="btn form-btn animate float-right ml-1"></button>
                              <button type="button" class="btn form-btn animate float-right"></button>
                            </div> -->
                          </div>
                        </div>
                      </div>


                    </div>
                    <div id="organization" class="col s12" style="display:none;">
                      <div class="row mt-2" style="display:none;">

                        <form    class="mt-3" id="sur_acc_orgid_form" method="post"  enctype="multipart/form-data" autocomplete="off">
                        <div class="col s12 m6 l6 input-field input-outlined mt-0">
                            <input id="sur_acc_orgid_companyName" name="companyName" type="text" class="validate">
                            <label id="sur_acc_orgid_companyName_label" for="sur_acc_orgid_companyName">Company Name</label>
                        </div>
                        <div class="col s12 m6 l6 input-field input-outlined mt-0">
                            <select id="sur_acc_orgid_purposeOfUse" name="purposeOfUse">
                              <option value="" disabled selected>Purpose of the use</option>
                              <option value="Personal">Personal</option>
                              <option value="Commercial">Commercial</option>
                            </select>
                        </div>
                        <div class="col s12 m6 l6 input-field input-outlined mt-0">
                            <input id="sur_acc_orgid_crNo" name="crNo" type="text" class="validate">
                            <label id="sur_acc_orgid_crNo_label" for="sur_acc_orgid_crNo">Commercial Registration Number (CR)</label>
                        </div>
                        <div class="col s12 m6 l6 file-field input-field mt-0">
                            <div class="float-right mt-2">
                              <img src="app/views/html/signup/home/img/upload.png" alt="" width="40">
                              <input type="file">
                            </div>
                            <div class="file-path-wrapper input-field input-outlined mt-0 mb-0 pl-0" style="position: revert;">
                              <input class="file-path validate" type="text" placeholder="Drop files here. - Allowed *.jpeg, *.jpg, *.png, *.pdf / Max file size 2MB.">
                            </div>
                        </div>
                        <div class="col s12 m6 l6 input-field input-outlined mt-0">
                            <input id="sur_acc_orgid_issueDate" name="issueDate" type="text" class="validate datepicker">
                            <label id="sur_acc_orgid_issueDate_label" for="sur_acc_orgid_issueDate" >Issue Date</label>
                        </div>
                        <div class="col s12 m6 l6 input-field input-outlined mt-0">
                            <input id="sur_acc_orgid_expiryDate" name="sur_acc_orgid_expiryDate" type="text" class="validate datepicker">
                            <label id="sur_acc_orgid_expiryDate_label" for="sur_acc_orgid_expiryDate" >Expire Date</label>
                        </div>
                        <div class="col s12 m6 l6 input-field input-outlined mt-0 industry-dropdown">
                            <select id="sur_acc_orgid_companyType" name="companyType">
                              <option value="" disabled selected>Industry</option>
                              <option value="Consumer & Industrial Products">Consumer & Industrial Products</option>
                              <option value="Energy & Resources">Energy & Resources</option>
                              <option value="Financial Services">Financial Services</option>
                              <option value="Life Sciences & Health Care">Life Sciences & Health Care</option>
                              <option value="Public Sector">Public Sector</option>
                              <option value="Technology, Media & Telecommunications">Technology, Media & Telecommunications</option>
                              <option value="Others">Others</option>
                            </select>
                        </div>
                        <div class="col s11 m5 l5 input-field input-outlined mt-0 data-class">
                            <select id="sur_acc_orgid_dataClassification" name="dataClassification">
                              <option value="" disabled selected>Data classification</option>
                              <option value="Public">Public </option>
                              <option value="Restricted">Restricted	</option>
                              <option value="Confidential">Confidential</option>
                              <option value="Extremely Confidential">Extremely Confidential</option>
                            </select>
                        </div>
                        <div class="col s1 m1 l1 input-field input-outlined mt-0">
                            <a class="modal-trigger data-class s1 m1 l1" href="#data-classific-modal"><img class="org-info-class" src="app/views/html/signup/home/img/info.png" width="40" alt="" /></a>
                        </div>
                        <div class="col s12">
                          <div class="card-alert card orange lighten-5 border-radius-7 mt-0">
                            <div class="card-content orange-text">
                              <p>
                                <i class="fa fa-exclamation-triangle fs-30 red-text" aria-hidden="true"></i> CR Verification status : Pending</p>
                            </div>
                            <button type="button" class="close orange-text" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                        </div>

                        <!--<div class="col s12">
                          <input type="hidden" id="sur_acc_orgid_crVerifyStatus" name="crVerifyStatus">
                          <input type="hidden" id="sur_acc_orgid_orgInfoId" name="orgInfoId">
                          <input type="hidden" id="sur_acc_orgid_tenantId" name="tenantId">
                          <button type="button" class="btn form-btn waves-effect waves-light cancle-btn float-right ml-1">CANCEL</button>
                          <button disabled  id="sur_acc_orgid_form_submit" type="button" class="btn form-btn waves-effect waves-light gradient-45deg-light-blue-cyan float-right">SAVE</button>
                        </div>-->



                      </form>
                      </div>

                      <div class="row mt-2 profile-skeleton ">
                        <div class="col s12">
                          <div class="row margin">
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l2 input-field mt-0 pr-0 id-proof">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l4 input-field input-outlined mt-0 pl-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                              <div class="profile-input animate"></div>
                            </div>
                            <div class="col s12">
                              <div class="card-alert card orange lighten-5 border-radius-7 mt-0 animate" style="height:40px"></div>
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
                    <div id="user" class="col s12 mt-0" style="display:none;">
                      <h4 style="display:none;" id="account-table-usermgmt-title" class="card-title mb-0">List of Users</h4>
                      <a style="display:none;" id="account-table-usermgmt-plus" onClick="modaluserMgmtCtrl('add')" class="modal-trigger" href="#usermodal"><i class="fa fa-plus-circle dp48 table-header table-add-icon fs-30" aria-hidden="true"></i></a>
                      <div class="row " id="account-table-usermgmt-org" style="display:none;">
                        <div class="col s12">
                          <div class="responsive-table">
                            <table class="striped usermanagement-datatable" id="usermanagement-datatable">
                              <thead>
                                <tr>
                                  <th>Status</th>
                                  <th>Users</th>
                                  <th>Role</th>
                                  <th>Team</th>
                                  <th>Email Verified</th>
                                  <th>2FA</th>
                                  <th>Last Login</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody id="usermanagement-datatable-body">
                                
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div class="row account-table-skeleton " id="account-table-usermgmt-skeleton" >
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
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                      </div>

                    </div>
                    <div id="teams" class="col s12 mt-0" style="display:none;">
                      <h4 style="display:none;" id="account-table-teams-title" class="card-title mb-0">Manage Team</h4>
                      <a style="display:none;" id="account-table-teams-plus" onClick="modaluserMgmtCtrlTeams('add')" class="modal-trigger" href="#teammodal"><i class="fa fa-plus-circle dp48 table-header table-add-icon fs-30" aria-hidden="true"></i></a>
                      <div id="account-table-teams-org" style="display:none;" class="row invoice-list-wrapper">
                        <div class="col s12">
                          <table class="striped" id="team-datatable">
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Members</th>
                                <th>Elastic Instances</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody id="team-datatable-body" >
                              
                            </tbody>
                          </table>
                        </div>
                      </div>



                      <div class="row account-table-skeleton " id="account-table-teams-skeleton" >
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
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                      </div>



                    </div>
                    <div id="tags" class="col s12" style="display:none;">
                      <h4 style="display:none;" id="account-table-tags-title" class="card-title mb-0">List of Tags</h4>
                      <a style="display:none;" id="account-table-tags-plus" onClick="modaluserMgmtCtrltags('add')" class="modal-trigger" href="#tagsmodal"><i class="fa fa-plus-circle dp48 table-header table-add-icon fs-30" aria-hidden="true"></i></a>
                      <div style="display:none;" class="row" id="account-table-tags-org">
                        <div class="col s12">
                          <table class="striped" id="tag-datatable">
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Elastic Instances</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody id="tag-datatable-body" >
                              
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div class="row account-table-skeleton " id="account-table-tags-skeleton" >
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
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                                <tr>
                                  <td><div class="table-td-skeleton animate"></div></td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                      </div>


                    </div>
                    <!--<div id="notifications" class="col s12">Notifications</div>-->
                  </div>
              </div>
          </div>

      </div>
    </div>
  </div>


   <!-- ENd Data Classification Modal Trigger -->
   <div id="data-classific-modal" class="modal">
    <div class="modal-content">
       <p class="modal-header right modal-close mt-0">
          <span class="right"><i class="material-icons right-align">clear</i></span>
      </p>
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
    <!-- <div class="modal-footer">
       <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
    </div> -->
  </div>
 <!-- ENd Data Classification Modal Trigger -->


  <!-- START User Modal Trigger -->
  <div id="usermodal" class="modal border-radius-10">
    
    <div class="modal-content pl-0 pr-0 pb-0">
      <h6 class="card-title center" id="addUserComC">Add User</h5>
        <form    class="mt-3" id="sur_acc_user_form" method="post"  enctype="multipart/form-data" autocomplete="off">
        <div class="row margin">
          <div class="col s12 input-field input-outlined mt-0">
            <input autocomplete="off" readonly
                onclick="this.removeAttribute(
                    'readOnly');"  onkeyup="this.removeAttribute(
                    'readOnly');"   id="sur_acc_user_email" name="sur_acc_user_email" type="text" class="validate">
            <label id="sur_acc_user_email_label" for="sur_acc_user_email">Email Address</label>
          </div>
        </div>
        <div class="row margin">
          <div id="usPwdCommonPlace" class="col s12 m12 l6 input-field input-outlined mt-0">
            <input autocomplete="off" readonly
                onclick="this.removeAttribute(
                    'readOnly');"   onkeyup="this.removeAttribute(
                    'readOnly');" id="sur_acc_user_pwd" name="sur_acc_user_pwd" type="password" class="validate">
            <label id="sur_acc_user_pwd_label" for="sur_acc_user_pwd">Password</label>
            <i toggle="#sur_acc_user_pwd" class="toggle-password fa fa-eye prefix pt-2 cursor-pointer"></i>
          </div>
          <div id="usDescCommonPlace" class="col s12 m12 l6 input-field input-outlined mt-0">
            <input id="sur_acc_user_desc"  type="text" class="validate">
            <label id="sur_acc_user_desc_label" for="sur_acc_user_desc">Description</label>
          </div>
        </div>
        <div class="row margin">
          <div class="col s12 input-field input-outlined mt-0">
            <!--<label id="sur_acc_user_teams_label" >Select a team</label>-->
            <label class="custom-select-label">Team</label>
            <select placeholder="Select Team" id="sur_acc_user_teams" name="sur_acc_user_teams" class="team-select browser-default" multiple="multiple">                            
            </select>
         </div>
        </div>
        <div class="row margin">
          <div class="col s12 input-field input-outlined mt-1">
            <!-- <label id="sur_acc_user_roles_label">Select a role</label> -->
            <label class="custom-select-label">Select a Role</label>
            <select id="sur_acc_user_roles" name="sur_acc_user_roles" >
               
            </select>
         </div>
        </div>
      

        <div class="modal-footer">
          <input type="hidden" id="suraccuserprocess" value="add">
          <input type="hidden" id="suraccuserId">
          <button type="submit"  id="sur_acc_user_form_submit" class="modal-action modal-invite  waves-effect waves-light gradient-45deg-light-blue-cyan gradient-shadow btn-flat white-text">INVITE</button>
          <a id="userAddCloseBtn" href="javascript:void(0);" style="color:#46aec7; font-weight: 500;" class="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
        </div>
      </form>

    </div>
   
  
  </div>
  <!-- END User Modal Trigger -->
  <!-- START Team Modal Trigger -->
  <div id="teammodal" class="modal border-radius-10">
    
    <div class="modal-content pl-0 pr-0 pb-0">
      <h6 class="card-title center" id="cteamCom">Create Team</h5>
        <form    class="mt-3" id="sur_acc_teams_form" method="post"  enctype="multipart/form-data" autocomplete="off">
        <div class="row margin">
          <div class="col s12 input-field input-outlined mt-0">
            <input id="sur_acc_team_name" name="sur_acc_team_name" type="text" class="validate">
            <label id="sur_acc_team_name_label" for="sur_acc_team_name">Team Name</label>
          </div>
        </div>
        <div class="row margin">
          <div class="col s12 input-field input-outlined mt-0">
            <input id="sur_acc_team_desc"  type="text" class="validate">
            <label id="sur_acc_team_desc_label" for="sur_acc_team_desc">Description</label>
          </div>
        </div>
        <div class="row margin">
          <div class="col s12 input-field input-outlined mt-0">
           <!-- <label id="sur_acc_team_members_label" >Select a Member</label>-->
            <label class="custom-select-label">Select User</label>
            <select class="validate"  multiple id="sur_acc_team_members" placeholder="Select Member"  >
             <!-- <option value disabled selected>Members</option>
              <option value="2">Administrator</option>
              <option value="3">Manager</option>
              <option value="4">Operator</option>
              <option value="5">Billing Admin</option>-->
           </select>
         </div>
        </div>
        <div class="row margin">
          <div class="col s12 input-field input-outlined mt-1">
            <!--<label id="sur_acc_team_vms_label" >Select an Instance</label>-->
            <label class="custom-select-label">Select VM</label>
            <select class="validate"  multiple id="sur_acc_team_vms" >
              <!-- <option value disabled selected >Elastic Instances</option>
               <option value="2">Webserver-01</option>
               <option value="3">LinuxServer-LB-02</option>
               <option value="4">Win2022-MailServer03</option>-->
            </select>
         </div>
        </div>
      
        <div class="modal-footer">
          <input type="hidden" id="suraccteamprocess" value="add">
          <input type="hidden" id="suraccteamId">
          <button type="submit"  id="sur_acc_teams_form_submit" class="modal-action modal-invite  waves-effect waves-light gradient-45deg-light-blue-cyan gradient-shadow btn-flat white-text">CREATE</button>
          <a href="javascript:void(0);" style="color:#46aec7; font-weight: 500;" class="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
        </div>
      </form>

    </div>
   


  </div>
  <!-- END Team Modal Trigger -->
  <!-- START Tags Modal Trigger -->
  <div id="tagsmodal" class="modal border-radius-10">
    
    <div class="modal-content pl-0 pr-0 pb-0">
      <h6 class="card-title center" id="ctagTitle">Create Tag</h5>
      
        <form    class="mt-3" id="sur_acc_tags_form" method="post"  enctype="multipart/form-data" autocomplete="off">
        <div class="row margin">
          <div class="col s12 input-field input-outlined mt-0">
            <input id="sur_acc_tag_name" name="sur_acc_tag_name" type="text" class="validate">
            <label id="sur_acc_tag_name_label" for="sur_acc_tag_name">Tag Name</label>
          </div>
        </div>
        <div class="row margin">
          <div class="col s12 input-field input-outlined mt-0">
            <input  id="sur_acc_tag_desc" type="text" class="validate">
            <label id="sur_acc_tag_desc_label" for="sur_acc_tag_desc">Description</label>
          </div>
        </div>
        <div class="row margin">
          <div class="col s12 input-field input-outlined mt-1">
            <!--<label id="sur_acc_tag_vms_label" >Select a tag</label>-->
            <label class="custom-select-label">Select VM</label>
            <select multiple class="validate" required id="sur_acc_tag_vms" name="sur_acc_tag_vms" >
               <!--<option value="" disabled selected >Elastic Instances</option>
               <option value="2">Administrator</option>
               <option value="3">Manager</option>
               <option value="4">Operator</option>
               <option value="5">Billing Admin</option>-->
            </select>
         </div>
        </div>
      
        <div class="modal-footer">
          <input type="hidden" id="suracctagprocess" value="add">
          <input type="hidden" id="suracctagId">
          <button type="submit"  id="sur_acc_tags_form_submit" class="modal-action modal-invite  waves-effect waves-light gradient-45deg-light-blue-cyan gradient-shadow btn-flat white-text">CREATE</button>
          <a href="javascript:void(0);" style="color:#46aec7; font-weight: 500;" class="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
        </div>
      </form>

    </div>
    
  </div>
  <!-- END Tags Modal Trigger -->