<?php

require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/backend.php';

$_SESSION['token_illustrate_ns_internetbth'] =(
  (
    isset($_SESSION['token_illustrate_ns_internetbth']) 
    && 
    !empty($_SESSION['token_illustrate_ns_internetbth'])
  )
  ?
  $_SESSION['token_illustrate_ns_internetbth']
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

$language_data = getLangData("/app/views/html/surface/networkservices/internetbandwidth/lang/");

echo '<input type="hidden" value="'.$_SESSION['token_common_formSubmit'].'" id="establish_common_formSubmit" >';
echo '<input type="hidden" value="'.$_SESSION['token_illustrate_ns_internetbth'].'" id="establish_ns_internetbth_formSubmit" >';
?>
<link rel="stylesheet" type="text/css" href="app/views/html/surface/networkservices/internetbandwidth/index.css">
<style>
  /********* Skeleton Css ***********/
.skeleton_content_ns_ibh .header-skeleton {
width: 175px;
height: 12px;
position: relative;
background: #8d8d8d;
border-radius: 5px;
}
.skeleton_content_ns_ibh .card-header-skeleton {
width: 50%;
height: 12px;
position: relative;
top: 5px;
background: #8d8d8d;
border-radius: 5px;
margin: 0 auto;
}
.skeleton_content_ns_ibh .download-img {
width: 50px;
height: 50px;
position: relative;
background: #ccc;
border-radius: 50%;
margin: 0 auto;
}
.skeleton_content_ns_ibh .upload-text {
width: 62px;
height: 12px;
position: relative;
top: 15px;
background: #8d8d8d;
border-radius: 5px;
margin:0 auto;
}
.skeleton_content_ns_ibh .text-mbps {
width: 95px;
height: 12px;
position: relative;
top: 5px;
background: #8d8d8d;
border-radius: 5px;
}
.skeleton_content_ns_ibh .chart-img {
width: 115px;
height: 115px;
position: relative;
background: #ccc;
border-radius: 50%;
margin: 0 auto;
}
.skeleton_content_ns_ibh .select-sk {
width: 100%;
height: 47px;
position: relative;
background: #ccc;
border-radius: 7px;
}
.skeleton_content_ns_ibh .upgrade-sk {
width: 133px;
height: 36px;
position: relative;
background: #ccc;
border-radius: 7px;
box-shadow: none;
}
.skeleton_content_ns_ibh .animate {
animation: shimmer 2s infinite linear;
background: linear-gradient(to right, #efefef 4%, #f5f5f5 25%, #f5f5f5 36%);
background-size: 1000px 100%;
}
.skeleton_content_ns_ibh .header-animate {
animation: shimmer 2s infinite linear;
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

/*********** Responsive CSS **********/
@media only screen and (max-width: 600px) {
.skeleton_content_ns_ibh .select-sk {
  width: 195px !important;
  right: 15px !important;
}
.skeleton_content_ns_ibh .upload-text {
  top: 2px !important;
}
.skeleton_content_ns_ibh .download-img {
  margin: 0 auto;
}
}

@media screen and (min-device-width: 601px) and (max-device-width: 768px) {
.skeleton_content_ns_ibh .download-img {
  margin: 0 auto;
}
.skeleton_content_ns_ibh .upload-text {
  top: 2px !important;
}
.skeleton_content_ns_ibh .select-sk {
  left: -15px !important;
}

}

/* @media only screen and (min-width: 1920px) { 

} */
</style>

<div style="display:none;" id="original_content_ns_ibh">
  <div class="content-wrapper-before gradient-45deg-indigo-purple"></div>
  <div class="breadcrumbs-dark pb-0" id="breadcrumbs-wrapper">
    <!-- Search for small screen-->
    <div class="container">
      <div class="row">
        <div class="col s10 m6 l6">
          <h5 class="breadcrumbs-title mt-0 mb-0">
            <span><?php echo $language_data['netib_label_0']; ?></span>
          </h5>
        </div>
      </div>
    </div>
  </div>
  <div class="col s12">
    <div class="container">
      <div class="section">
        <div class="row">
          <div class="col s12">
            <div class="card tab-card border-radius-10">
              <div class="card-content">
                <div class="row valign-wrapper">
                  <div class="col s12 m6 l6">
                    <h4 class="card-title fs-22 dark-blue center-align mb-0"><?php echo $language_data['netib_label_1']; ?></h4>
                  </div>
                  <div class="col s12 m6 l6 border-left pl-5">
                    <div class="row">
                      <div class="col s12 m12 l6">
                        <div class="row valign-wrapper">
                          <div class="col s5 center">
                            <img src="app/views/html/surface/networkservices/internetbandwidth/img/upload.png" alt="" width="50" height="50">
                            <h4 class="card-title text-upload light-gray fs-14 mb-0"><?php echo $language_data['netib_label_2']; ?></h4>
                          </div>
                          <div class="col s7">
                            <span class="fs-18 card-title dark-gray mb-0" id="networkSTSSelectorAVal">1 Mbps</span>
                          </div>
                        </div>
                      </div>
                      <div class="col s12 m12 l6">
                        <div class="row valign-wrapper">
                          <div class="col s5 center">
                            <img src="app/views/html/surface/networkservices/internetbandwidth/img/download.png" alt="" width="50" height="50">
                            <h4 class="card-title text-upload light-gray fs-14 mb-0"><?php echo $language_data['netib_label_3']; ?></h4>
                          </div>
                          <div class="col s7">
                            <span class="fs-18 card-title dark-gray mb-0" id="networkSTSSelectorBVal">1 Mbps</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12">
            <div class="card border-radius-10 mt-0">
              <div class="card-content">
                <h4 class="card-title fs-18 dark-blue center-align mb-0"><?php echo $language_data['netib_label_4']; ?> </h4>
                <div class="row">
                  <div class="col s12 center">
                    <img class="mt-3 mb-3" src="app/views/html/surface/networkservices/internetbandwidth/img/speedometer.png" width="150" height="150" alt="speedometer" />
                  </div>
                  <div class="col s12 m4 l3 offset-m3 offset-l4">
                    <select class="select2 browser-default" id="networkSTSSelector" >
                     
                    </select>
                  </div>
                  <div class="col s12 m3 l2 pl-0 btn-sar-value-sm">
                    <button id="networkSTSSelectorVal" type="button" class="btn btn-md btn-sar-value  black-text">30 SAR</button>
                  </div>
                  <div class="col s12 center">
                    <button onClick="upgradeBtnNSinternetw()" id="upgradeBtnNSinternetw" class="btn waves-effect waves-light gradient-45deg-light-blue-cyan mt-4 mb-3"><?php echo $language_data['netib_label_5']; ?></button>
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
<div id="skeleton_content_ns_ibh"  class="skeleton_content_ns_ibh">
    <div class="row">
        <div class="content-wrapper-before gradient-45deg-indigo-purple"></div>
        <div class="breadcrumbs-dark pb-0" id="breadcrumbs-wrapper">
            <!-- Search for small screen-->
            <div class="container">
                <div class="row">
                    <div class="col s10 m6 l6">
                    <h5 class="breadcrumbs-title mt-0 mb-0 header-skeleton header-animate"></h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="col s12">
            <div class="container">
                <div class="section">
                    <div class="row">
                        <div class="col s12">
                            <div class="card tab-card border-radius-10">
                                <div class="card-content">
                                    <div class="row valign-wrapper">
                                        <div class="col s12 m6 l6"> 
                                            <h4 class="card-title card-header-skeleton animate center-align mt-7 mb-7"></h4>
                                        </div>
                                        <div class="col s12 m6 l6 border-left pl-5"> 
                                            <div class="row mt-5 mb-5">
                                              <div class="col s12 m12 l6">
                                                <div class="row valign-wrapper">
                                                    <div class="col s5 center">
                                                      <div class="download-img animate"></div>
                                                      <h4 class="card-title text-upload upload-text animate mb-0"></h4>
                                                    </div>
                                                    <div class="col s7">
                                                      <span class="fs-24 card-title text-mbps animate mb-0"></span>
                                                    </div>
                                                </div>
                                              </div>
                                              <div class="col s12 m12 l6">
                                                <div class="row valign-wrapper">
                                                    <div class="col s5 center">
                                                        <div class="download-img animate"></div>
                                                        <h4 class="card-title text-upload upload-text animate mb-0"></h4>
                                                      </div>
                                                      <div class="col s7">
                                                        <span class="fs-24 card-title text-mbps animate mb-0"></span>
                                                      </div>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col s12"> 
                            <div class="card border-radius-10 mt-0">
                                <div class="card-content">
                                    <h4 class="card-title card-header-skeleton animate center-align mb-0"></h4>
                                    <div class="row">
                                        <div class="col s12 center">
                                            <div class="mt-3 mb-3 chart-img animate"></div>
                                        </div>
                                        <div class="col s7 m4 l3 offset-m3 offset-l4">
                                            <div class="select-sk animate"></div>
                                        </div>
                                        <div class="col s5 m3 l2 pl-0">
                                            <button type="button" class="btn btn-md btn-sar-value animate" style="width: 120px;"></button>
                                        </div>
                                        <div class="col s12 center">
                                            <button class="btn upgrade-sk animate mt-4 mb-3"></button>
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
