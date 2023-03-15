<?php

require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/backend.php';

$_SESSION['token_illustrate_cinstance_finalbtn'] =(
  (
    isset($_SESSION['token_illustrate_cinstance_finalbtn']) 
    && 
    !empty($_SESSION['token_illustrate_cinstance_finalbtn'])
  )
  ?
  $_SESSION['token_illustrate_cinstance_finalbtn']
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

$language_data = getLangData("/app/views/html/surface/cloudservices/elasticInstance/cinstance/lang/");

echo '<input type="hidden" value="'.$_SESSION['token_common_formSubmit'].'" id="establish_common_formSubmit" >';
?>

<link rel="stylesheet" type="text/css" href="app/views/html/surface/cloudservices/elasticInstance/cinstance/index.css">

<style>

.tabs .disabled {
  cursor:not-allowed;
}

.tabs .disabled a {
  cursor:not-allowed;
}

   /************* Skeleton Css ************/
.createvm-skeleton .header-skeleton {
  width: 175px;
  height: 12px;
  position: relative;
  top: -12px;
  background: #8d8d8d;
  border-radius: 5px;
}
.createvm-skeleton .card-header-skeleton {
  width: 175px;
  height: 12px;
  position: relative;
  top: -5px;
  background: #8d8d8d;
  border-radius: 5px;
}
.createvm-skeleton .card-header-p-skeleton {
  width: 475px;
  height: 12px;
  position: relative;
  top: 7px;
  margin-bottom: 10px !important;
  background: #8d8d8d;
  border-radius: 5px;
}
.createvm-skeleton .tab-heading-skeleton {
  width: 165px;
  height: 12px;
  position: relative;
  top: 20px;
  background: #8d8d8d;
  border-radius: 5px;
  margin: 0 auto;
}
.createvm-skeleton .cloud-owl-img {
  width: auto;
  height: 180px;
}
.createvm-skeleton .cloud-SR-skeleton {
  width: 165px;
  height: 12px;
  position: relative;
  display: inline-block;
  margin-top: 50px !important;
  background: #8d8d8d;
  border-radius: 5px;
  margin: 0 auto;
}
.createvm-skeleton .card-addstorage-skeleton {
  width: 175px;
  height: 12px;
  position: absolute;
  top: 18px;
  right: 25px;
  background: #8d8d8d;
  border-radius: 5px;
}
.createvm-skeleton .add-storage th {
  height: 50px;
}
.createvm-skeleton .disk-td, .type-td, .size-td, .cost-td {
height: 50px;
}
.createvm-skeleton .input-skeleton {
  width: 100%;
  height: 47px;
  background: #8d8d8d;
  border-radius: 10px;
}
.createvm-skeleton .psw-circle-skeleton {
  width: 30px;
  height: 30px;
  position: relative;
  display: inline-block;
  padding: 3px;
  top: 0px;
  right: 5px;
  color: #fff;
  background: #2183AF;
  border-radius: 50%;
  line-height: 25px;
}
.createvm-skeleton .card-footer-skeleton {
  width: 135px;
  height: 12px;
  position: relative;
  top: 0px;
  background: #8d8d8d;
  border-radius: 5px;
}
.createvm-skeleton .animate {
  animation : shimmer 2s infinite linear;
  /* background: linear-gradient(to right, #ababab 4%, #8d8d8d 25%, #8d8d8d 36%); */
  background: linear-gradient(to right, #efefef 4%, #f5f5f5 25%, #f5f5f5 36%);
  background-size: 1000px 100%;
}
.createvm-skeleton .footer-animate {
  animation : shimmer 2s infinite linear;
  /* background: linear-gradient(to right, #ababab 4%, #8d8d8d 25%, #8d8d8d 36%); */
  background: linear-gradient(to right, #057db5 4%, #0773a5 25%, #0773a5 36%);
  background-size: 1000px 100%;
}
.createvm-skeleton .header-animate {
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
<!-- START Page Loader -->
<div class="Loading" id="surfCloader"></div>
<!-- END Page Loader-->
<div class="content-wrapper-before gradient-45deg-indigo-purple"></div>
<div class="breadcrumbs-dark pb-0" id="breadcrumbs-wrapper">
<input type="hidden" id="establish_cinstance_finalbtn" value="<?php echo $_SESSION['token_illustrate_cinstance_finalbtn']; ?>" >
  <!-- Search for small screen-->
  <div class="container">
    <div class="row">
      <div class="col s10 m6 l6">
        <h5 class="breadcrumbs-title mt-0 mb-0"><span><?php echo $language_data['cins_label_0']; ?></span></h5>
      </div>
    </div>
  </div>
</div>
<div class="col s12">
  <div class="container createvm-skeleton">
    <div class="row" id="commoncinstancelocation">

      <form id="dcc_cinstance_hostname_form" >

        <!-- Platform Section -->
        <div class="col s12 m12 l12" id="platformPrinter">

          <div class="card border-radius-10">
            <div class="card-content pb-1">
              <h4 class="card-title mb-0 card-header-skeleton animate"></h4>
              <p class="card-header-p-skeleton animate"></p>
              <div class="row">
                  <div class="col s12 m6 l6">
                      <div class="card border-radius-7 cursor-pointer animate" style="height:92px;">
                          <div class="card-content pt-2 pb-2"></div>
                      </div>
                  </div>
                  <div class="col s12 m6 l6">
                    <div class="card border-radius-7 cursor-pointer animate" style="height:92px;">
                      <div class="card-content pt-2 pb-2"></div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

        
        </div>
        <!-- Platform Section -->

        <!-- Datacenter/Region Section -->
        <div class="col s12 m12 l12" id="datacenterPrinter">

          <div class="card border-radius-10">
            <div class="card-content pb-1">
              <h4 class="card-title mb-0 card-header-skeleton animate"></h4>
              <p class="card-header-p-skeleton animate"></p>
              <div class="row">
                  <div class="col s12 m6 l6">
                      <div class="card border-radius-7 cursor-pointer animate" style="height:92px;">
                          <div class="card-content pt-2 pb-2"></div>
                      </div>
                  </div>
                  <div class="col s12 m6 l6">
                    <div class="card border-radius-7 cursor-pointer animate" style="height:92px;">
                      <div class="card-content pt-2 pb-2"></div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

        </div>
        <!-- Datacenter/Region Section -->

        <!-- Cloud Server Section --> 
        <div class="col s12 m12 l12" id="cloudServerPrinter">
          <div class="card border-radius-10">
            <div class="card-content">
              <h4 class="card-title mb-0 card-header-skeleton animate"></h4>
              <p class="card-header-p-skeleton animate"></p>
              <div class="row mt-3">
                  <div class="col s12">
                      <div class="row" id="main-view">
                        <div class="col s12">
                            <ul class="tabs tab-demo z-depth-1">
                              <li class="tab col m3"><a class="animate active"></a></li>
                              <li class="tab col m3 disabled"><div class="tab-heading-skeleton animate"></div></li>
                              <li class="tab col m3 disabled"><div class="tab-heading-skeleton animate"></div></li>
                            <li class="indicator" style="left: 15px; right: 693px;"></li></ul>
                        </div>
                        <div class="col s12">
                            <div id="shared" class="col s12 mt-3 pl-0 pr-0">
                              <div class="owl-carousel owl-theme cloud-server-carousel owl-loaded owl-drag">
                              <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 914px;"><div class="owl-item active" style="width: 294.5px; margin-right: 10px;"><div class="item pl-0 pr-0">
                                    <div class="card-panel border-radius-6 mt-10 card-animation-1 center">
                                      <div class="responsive-img border-radius-8 z-depth-4 image-n-margin cloud-owl-img animate"></div>
                                      <div class="tab-heading-skeleton animate mb-4" style="display: inline-block;"></div>
                                      <div class="tab-heading-skeleton animate" style="top:10px;"></div>
                                      <div class="row">
                                          <div class="col s12">
                                              <div class="fs-12 cloud-SR-skeleton  animate"></div>
                                          </div>
                                      </div>
                                    </div>
                                  </div></div><div class="owl-item active" style="width: 294.5px; margin-right: 10px;"><div class="item pl-0 pr-0">
                                    <div class="card-panel border-radius-6 mt-10 card-animation-1 center">
                                      <div class="responsive-img border-radius-8 z-depth-4 image-n-margin cloud-owl-img animate"></div>
                                      <div class="tab-heading-skeleton animate mb-4" style="display: inline-block;"></div>
                                      <div class="tab-heading-skeleton animate" style="top:10px;"></div>
                                      <div class="row">
                                          <div class="col s12">
                                              <div class="fs-12 cloud-SR-skeleton  animate"></div>
                                          </div>
                                      </div>
                                    </div>
                                  </div></div><div class="owl-item active" style="width: 294.5px; margin-right: 10px;"><div class="item pl-0 pr-0">
                                    <div class="card-panel border-radius-6 mt-10 card-animation-1 center">
                                      <div class="responsive-img border-radius-8 z-depth-4 image-n-margin cloud-owl-img animate"></div>
                                      <div class="tab-heading-skeleton animate mb-4" style="display: inline-block;"></div>
                                      <div class="tab-heading-skeleton animate" style="display: inline-block; top:10px;"></div>
                                      <div class="row">
                                          <div class="col s12">
                                              <div class="fs-12 cloud-SR-skeleton  animate"></div>
                                          </div>
                                      </div>
                                    </div>
                                  </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev disabled"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next disabled"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"><button role="button" class="owl-dot active"><span></span></button></div></div>           
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Cloud Server Section -->

        <div class="col s12 m12 l12" id="profilePrinter">
          <div class="card border-radius-10">
            <div class="card-content">
              <h4 class="card-title mb-0 card-header-skeleton animate"></h4>
              <p class="card-header-p-skeleton animate"></p>
              <div class="row mt-3">
                  <div class="col s12">
                      <div class="row" id="main-view">
                        <div class="col s12">
                            <ul class="tabs tab-demo z-depth-1">
                              <li class="tab col m3"><a class="animate active"></a></li>
                              <li class="tab col m3"><div class="tab-heading-skeleton animate"></div></li>
                              <li class="tab col m3"><div class="tab-heading-skeleton animate"></div></li>
                              <li class="tab col m3"><div class="tab-heading-skeleton animate"></div></li>
                            <li class="indicator" style="left: 15px; right: 693px;"></li></ul>
                        </div>
                        <div class="col s12">
                            <div class="col s12 mt-3 pl-0 pr-0">
                              <div class="owl-carousel owl-theme owl-loaded owl-drag">
                              <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 914px;"><div class="owl-item active" style="width: 172.7px; margin-right: 10px;"><div class="item animate">
                                    <h4 class="profile-owl-card mb-0"></h4>
                                  </div></div><div class="owl-item active" style="width: 172.7px; margin-right: 10px;"><div class="item animate">
                                    <h4 class="profile-owl-card mb-0"></h4>
                                  </div></div><div class="owl-item active" style="width: 172.7px; margin-right: 10px;"><div class="item animate">
                                    <h4 class="profile-owl-card mb-0"></h4>
                                  </div></div><div class="owl-item active" style="width: 172.7px; margin-right: 10px;"><div class="item animate">
                                    <h4 class="profile-owl-card mb-0"></h4>
                                  </div></div><div class="owl-item active" style="width: 172.7px; margin-right: 10px;"><div class="item animate">
                                    <h4 class="profile-owl-card mb-0"></h4>
                                  </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev disabled"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next disabled"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"><button role="button" class="owl-dot active"><span></span></button></div></div>             
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col s12 m12 l12" id="imageCategoryPrinter">
          <div class="card border-radius-10">
            <div class="card-content">
              <h4 class="card-title mb-0 card-header-skeleton animate"></h4>
              <div class="row mt-2">
                  <div class="col s12">
                      <div class="row" id="main-view">
                        <div class="col s12">
                            <ul class="tabs tab-demo z-depth-1">
                              <li class="tab col m3"><a class="animate active"></a></li>
                              <li class="tab disabled col m3"><div class="tab-heading-skeleton animate"></div></li>
                              <li class="tab disabled col m3"><div class="tab-heading-skeleton animate"></div></li>
                            <li class="indicator" style="left: 15px; right: 693px;"></li></ul>
                        </div>
                        <div class="col s12">
                            <div class="col s12 mt-2 pl-0 pr-0">
                              <div class="row os-card">
                                <div class="col s6 m3 l2">
                                  <div class="card animate">
                                    <div class="card-content center"></div>
                                  </div>
                                </div>
                                <div class="col s6 m3 l2">
                                  <div class="card animate">
                                    <div class="card-content center"></div>
                                  </div>
                                </div>
                                <div class="col s6 m3 l2">
                                  <div class="card animate">
                                    <div class="card-content center"></div>
                                  </div>
                                </div>
                                <div class="col s6 m3 l2">
                                  <div class="card animate">
                                    <div class="card-content center"></div>
                                  </div>
                                </div>
                                <div class="col s6 m3 l2">
                                  <div class="card animate">
                                    <div class="card-content center"></div>
                                  </div>
                                </div>
                                <div class="col s6 m3 l2">
                                  <div class="card animate">
                                    <div class="card-content center"></div>
                                  </div>
                                </div>
                                <div class="col s6 m3 l2">
                                  <div class="card animate">
                                    <div class="card-content center"></div>
                                  </div>
                                </div>
                                <div class="col s6 m3 l2">
                                  <div class="card animate">
                                    <div class="card-content center"></div>
                                  </div>
                                </div>
                                <div class="col s6 m3 l2">
                                  <div class="card animate">
                                    <div class="card-content center"></div>
                                  </div>
                                </div>
                              </div>            
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col s12 m12 l12" id="storagesPrinter">
          <div class="card border-radius-10">
            <div class="card-content">
              <div class="display-flex align-items-center">
                <h4 class="card-title mb-0 card-header-skeleton animate"></h4>
                <span class="add-storage-btn card-addstorage-skeleton animate"></span>
              </div>
              <div class="row mt-2">
                <div class="col s12 m12 l12" id="view-borderless-table">
                  <div class="responsive-table" style="border: 1px solid #c7c7c7;">
                    <table class="add-storage">
                      <thead>
                      <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                      </thead>
                      <tbody id="TextBoxContainer">
                        <tr>
                          <td class="disk-td animate"></td>
                          <td class="type-td animate"></td>
                          <td class="size-td animate"></td>
                          <td class="cost-td animate"></td>
                          <td class="action-td animate"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col s12 m12 l12" data-select2-id="9" id="networkSPrinter">
          <div class="card border-radius-10">
            <div class="card-content">
              <h4 class="card-title mt-1 mb-0 card-header-skeleton animate"></h4>
              <div class="row mt-2">
                <div class="col s12">
                    <div class="row" id="main-view">
                      <div class="col s12">
                          <div class="col s12 mt-1 pl-0 pr-0">
                            <div class="row">
                              <div class="col s12 m6 l6 input-field input-outlined mt-2">
                                <div class="input-skeleton animate"></div>
                              </div>
                              <div class="col s12 m6 l6 input-field input-outlined mt-2">
                                <div class="input-skeleton animate"></div>
                              </div>
                            </div>          
                          </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Authentication Section -->
        <div class="col s12 m12 l12" id="authenticationPrinter">
          <div class="card border-radius-10">
            <div class="card-content">
              <h4 class="card-title mt-1 mb-0 card-header-skeleton animate"></h4>
              <div class="row mt-2">
                <div class="col s12">
                    <div class="row" id="main-view">
                      <div class="col s12">
                          <ul class="tabs tab-demo z-depth-1">
                            <li class="tab col m3"><a class="animate active"></a></li>
                            <li class="tab disabled col m3"><div class="tab-heading-skeleton animate"></div></li>
                          <li class="indicator" style="left: 15px; right: 693px;"></li></ul>
                      </div>
                      <div class="col s12">
                          <div class="col s12 mt-1 pl-0 pr-0">
                            <div class="row">
                              <div class="col s12 m6 l6 input-field input-outlined mt-4">
                                <div class="input-skeleton animate"></div>
                              </div>
                              <div class="col s12 m1 l1 input-field input-outlined mt-5 hide-on-small-only center">
                              <div class="psw-circle-skeleton animate"></div>
                              </div>
                              <div class="col s12 m5 l5 pl-0 password-req-sm">  
                                <h4 class="card-title card-header-p-skeleton card-header-li-sm animate mb-0 ml-0 mr-0 hide"></h4>
                                <ul class="collection">
                                  <li class="collection-item card-header-p-skeleton animate mt-2 ml-0 mr-0"></li>
                                  <li class="collection-item card-header-p-skeleton animate mt-2 ml-0 mr-0"></li>
                                  <li class="collection-item card-header-p-skeleton animate mt-2 ml-0 mr-0"></li>
                                  <li class="collection-item card-header-p-skeleton animate mt-2 ml-0 mr-0"></li>
                                </ul>
                              </div>
                            </div>          
                          </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <!-- Instance Section -->
        <div class="col s12 m12 l12" id="instanceLabelPrinter">
          <div class="card border-radius-10">
            <div class="card-content footer-top-sm" style="margin-bottom: 120px;">
              <div class="display-flex align-items-center">
                <h4 class="card-title mt-1 mb-0 card-header-skeleton animate"></h4>
                <span class="add-storage-btn mt-1 card-addstorage-skeleton animate"></span>
              </div>
              <div class="row">
                <div class="col s12 m4 l4 input-field input-outlined">
                  <div class="input-skeleton animate"></div>
                </div>
                <div class="col s12 m4 l4 input-field input-outlined">
                  <div class="input-skeleton animate"></div>
                </div>
                <div class="col s12 m4 l4 input-field input-outlined">
                <div class="input-skeleton animate"></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <button type="submit" id="finalscreatinst"  style="display:none;">Ok</button>

      </form>

    </div>
  </div>
  <div class="content-overlay"></div>
</div>




<!-- SSH Key Modal Trigger -->
<div id="sshadd-modal" class="modal border-radius-10">
    <div class="modal-content">
      <h6 class="card-title center"><?php echo $language_data['cins_label_35']; ?></h5>
      <form class="mt-3" autocomplete="off">
        <div class="row margin">
          <div class="col s12 input-field input-outlined mt-0">
            <input id="nameAllSecuritySSHKeys" name="sshKeyName" type="text" class="validate">
            <label for="nameAllSecuritySSHKeys"><?php echo $language_data['cins_label_36']; ?></label>
          </div>
        </div>
        <div class="row margin">
          <div class="col s12 input-field input-outlined mt-0">
            <textarea id="fingerPrintAllSecuritySSHKeys" name="sshKeyFingerPrint" class="validate" data-length="120" placeholder="<?php echo $language_data['cins_label_37']; ?>"></textarea>               
          </div>
        </div>
      </form>
    </div>
    <div class="modal-footer">
    
        <input type="hidden" id="sshKeyIdAllSecuritySSHKeys">
        <input type="hidden" id="typeAllSecuritySSHKeys" value="add">
      <a onClick="submitAllSecuritySSHKeys()" href="javascript:void(0);" class="modal-action modal-invite  waves-effect waves-light gradient-45deg-light-blue-cyan gradient-shadow btn-flat white-text" style="width:auto;"><?php echo $language_data['cins_label_38']; ?></a>
      <a href="javascript:void(0);" style="color:#46aec7; font-weight: 500;" class="modal-action modal-close waves-effect waves-green btn-flat "><?php echo $language_data['cins_label_39']; ?></a>
    </div>
</div>
<!-- END SSH Key Modal Trigger -->