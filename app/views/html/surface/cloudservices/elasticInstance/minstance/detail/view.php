<?php

require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/backend.php';

$_SESSION['token_illustrate_minstancedetail_status'] =(
  (
    isset($_SESSION['token_illustrate_minstancedetail_status']) 
    && 
    !empty($_SESSION['token_illustrate_minstancedetail_status'])
  )
  ?
  $_SESSION['token_illustrate_minstancedetail_status']
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

$language_data = getLangData("/app/views/html/surface/cloudservices/elasticInstance/minstance/detail/lang/");

echo '<input type="hidden" value="'.$_SESSION['token_common_formSubmit'].'" id="establish_common_formSubmit" >';
?>


<link rel="stylesheet" type="text/css" href="app/views/html/surface/cloudservices/elasticInstance/minstance/detail/index.css">

<style>

  /********** Chart 2 ************/
.total-transaction-line-chart
{
    height: 240px;
}
.total-transaction-line-chart .ct-series-a.ct-series .ct-line
{
    stroke: url(#lineLinearStats) !important;
    stroke-width: 3px;
}
.total-transaction-line-chart .ct-series-a .ct-point
{
    fill: transparent;
    stroke: transparent;
}
.total-transaction-line-chart .ct-series-a .ct-point:hover
{
    fill: url(#lineLinearStats) !important;
    stroke-width: 4;
    stroke: #fff;
}
.total-transaction-line-chart .ct-series-a .ct-point-circle
{
    fill: #fff;
    stroke-width: 4;
    stroke: #7b1fa2;
}
.total-transaction-line-chart .ct-grid
{
    stroke: rgba(0, 0, 0, .05);
    stroke-width: 1px;
    stroke-dasharray: 0;
}

  /************** Skeleton Css ************/
.manage-detail-skeleton .back-btn-skeleton {
  width: 70px;
  height: 12px;
  position: relative;
  top: -19px;
  left: 33px;
  background: #8d8d8d;
  border-radius: 5px;
  }
  .manage-detail-skeleton .header-select-skeleton {
  width: 235px !important;
  height: 32px;
  position: absolute;
  top: -6px;
  right: 20px;
  padding: 0px 15px;
  background: #8d8d8d;
  border-radius: 10px;
  }
  .manage-detail-skeleton .img-heading-skeleton {
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
  .manage-detail-skeleton .card-heading-skeleton {
  width: 150px;
  height: 12px;
  position: relative;
  top: 0px;
  background: #8d8d8d;
  border-radius: 5px;
  }
  .manage-detail-skeleton .card-head-right-skeleton {
  width: 120px;
  height: 12px;
  position: relative;
  top: 0px;
  left: 8px;
  background: #8d8d8d;
  border-radius: 5px;
  }
  .manage-detail-skeleton .card-head-list-skeleton {
  width: 85px;
  height: 12px;
  position: relative;
  top: 0px;
  background: #8d8d8d;
  border-radius: 5px;
  }
  .manage-detail-skeleton .card-head-list-right-skeleton {
  width: 150px;
  height: 12px;
  position: relative;
  margin-top: 10px;
  top: -4px;
  background: #8d8d8d;
  border-radius: 5px;
  }
  .manage-detail-skeleton .chip {
  width: 150px;
  height: 22px;
  }
  .manage-detail-skeleton .img-circle-card-skeleton {
  width: 50px;
  height: 50px;
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
  .manage-detail-skeleton .card-bottom-skeleton {
  width: 90%;
  height: 12px;
  position: relative;
  margin-top: 10px;
  top: 0px;
  background: #8d8d8d;
  border-radius: 5px;
  }
  .manage-detail-skeleton .tabs .tab {
  width: 105px;
  }
  .manage-detail-skeleton .tabs .tab a {
  padding: 0 15px;
  }
  .manage-detail-skeleton .tab-heading-skeleton {
  width: 85px;
  height: 12px;
  position: relative;
  top: 20px;
  background: #8d8d8d;
  border-radius: 5px;
  margin: 0 auto;
  }
  .manage-detail-skeleton .cpu-circle-heading-skeleton {
  width: 150px;
  height: 12px;
  position: relative;
  top: 0px;
  background: #8d8d8d;
  border-radius: 5px;
  margin: 0 auto;
  }
  .manage-detail-skeleton .storage-gb-skeleton {
  width: 85px;
  height: 12px;
  position: relative;
  top: 16px;
  background: #8d8d8d;
  border-radius: 5px;
  }
  .manage-detail-skeleton .animate {
  animation : shimmer 2s infinite linear;
  background: linear-gradient(to right, #efefef 4%, #f5f5f5 25%, #f5f5f5 36%);
  background-size: 1000px 100%;
  }
  .manage-detail-skeleton .header-animate {
  animation : shimmer 2s infinite linear;
  /* background: linear-gradient(to right, #ababab 4%, #8d8d8d 25%, #8d8d8d 36%); */
  background: linear-gradient(to right, #00577e 4%, #024766 25%, #024766 36%);
  background-size: 1000px 100%;
  }
  .manage-detail-skeleton .header-input-animate {
  animation : shimmer 2s infinite linear;
    /* background: linear-gradient(to right, #ababab 4%, #8d8d8d 25%, #8d8d8d 36%); */
    background: linear-gradient(to right, #057db5 4%, #0773a5 25%, #0773a5 36%);
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
<div class="breadcrumbs-dark pb-0 manage-detail-skeleton" id="breadcrumbs-wrapper">

<input type="hidden" id="establish_minstancedetail_status" value="<?php echo $_SESSION['token_illustrate_minstancedetail_status']; ?>" >

  <!-- Search for small screen-->
  <div class="container">
    <div class="row">
      <div class="col s6 m6 l6">
        <h5 id="backbuttonsurfminsdetailskel" class="breadcrumbs-title mt-0 mb-0 fs-14"><i class="circle-back-btn header-animate"></i> <div class="back-btn-skeleton header-animate"></div></h5>
        <h5 id="backbuttonsurfminsdetailreal" style="display:none;" class="breadcrumbs-title mt-0 mb-0 fs-14"><a href="#minstance"><i class="material-icons dp48 circle-back-btn">keyboard_arrow_left</i> <?php echo $language_data['minsD_back_btn']; ?></a></h5>
      </div>
      <div class="col s6 m6 l6 input-field input-outlined header-select" id="selectbuttonsurfminsdetailoverall">
        <div id="selectbuttonsurfminsdetailskel" class="header-select-skeleton header-input-animate"></div>
        <select id="surf_minsdetail_topc_listip" style="display:none;"  onChange="surfminsdetailtopclistip()" >
            <option value="" disabled selected ><?php echo $language_data['minsD_back_btn']; ?></option>
        </select>
      </div>
    </div>
  </div>
</div>
<div class="col s12 manage-detail-skeleton ">
  <div class="container">
    <div class="section">
        <div class="card border-radius-10">
            <div class="card-content pt-1 pb-1" id="surfminsdetailtopcardplacement">
              <div class="card-content pt-1 pb-1">  
                <div class="row border-bottom-1 pb-1">  
                  <div class="col col s12 m7 l7">
                    <div class="display-flex media">
                      <div class="img-heading-skeleton animate mr-1"></div>
                      <div class="media-body">
                        <h6 class="media-heading card-heading-skeleton animate"></h6>
                      </div>
                    </div>
                  </div>
                  <div class="col col s12 m5 l5 quick-action-btns display-flex justify-content-end align-items-center">
                    <div class="media-body mr-4">
                      <h6 class="media-heading card-head-right-skeleton animate"></h6>
                    </div>
                    <div class="media-body mr-4">
                      <h6 class="media-heading card-head-right-skeleton animate"></h6>
                    </div>
                    <div class="media-body">
                      <h6 class="media-heading card-head-right-skeleton animate"></h6>
                    </div>
                  </div>
                </div>
                <div class="row mt-2 pb-2 border-bottom-1">
                  <div class="col s12 m6 l4">
                    <table>
                      <tbody class="header-card-table">
                      <tr>
                        <th><div class="card-head-list-skeleton animate"></div></th>
                        <td><div class="media-heading card-head-list-right-skeleton animate"></div></td>
                      </tr>
                      <tr>
                        <th><div class="card-head-list-skeleton animate"></div></th>
                        <td><div class="media-heading card-head-list-right-skeleton animate"></div></td>
                      </tr>
                      <tr>
                        <th><div class="card-head-list-skeleton animate"></div></th>
                        <td><div class="media-heading card-head-list-right-skeleton animate"></div></td>
                      </tr>
                      <tr>
                        <th><div class="card-head-list-skeleton animate"></div></th>
                        <td><div class="media-heading card-head-list-right-skeleton animate"></div></td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="col s12 m6 l3">
                    <h4 class="card-title card-head-list-skeleton animate mt-5"></h4>
                    <div class="tag-h">
                      <div class="chip animate"></div>
                      <div class="chip animate"></div>
                      <div class="chip animate"></div>
                    </div>
                  </div>
                  <div class="col s12 m12 l5">
                    <div class="row list-container-skeleton-sm">
                      <div class="col s6 m3 l3">
                        <div class="img-circle-card-skeleton animate"></div>
                        <h4 class="card-title card-head-list-skeleton animate" style="top: 12px;"></h4>
                        <h4 class="card-title card-head-list-skeleton head-list-skeleton-sm animate" style="top: 32px;"></h4>
                      </div>
                      <div class="col s6 m3 l3">
                        <div class="img-circle-card-skeleton animate"></div>
                        <h4 class="card-title card-head-list-skeleton animate" style="top: 12px;"></h4>
                        <h4 class="card-title card-head-list-skeleton head-list-skeleton-sm animate" style="top: 32px;"></h4>
                      </div>
                      <div class="col s6 m3 l3 list-row-skeleton-sm">
                        <div class="img-circle-card-skeleton animate"></div>
                        <h4 class="card-title card-head-list-skeleton animate" style="top: 12px;"></h4>
                        <h4 class="card-title card-head-list-skeleton head-list-skeleton-sm animate" style="top: 32px;"></h4>
                      </div>
                      <div class="col s6 m3 l3 list-row-skeleton-sm">
                        <div class="img-circle-card-skeleton animate"></div>
                        <h4 class="card-title card-head-list-skeleton animate" style="top: 12px;"></h4>
                        <h4 class="card-title card-head-list-skeleton head-list-skeleton-sm animate" style="top: 32px;"></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-1">
                   <div class="col s4">
                    <h4 class="card-bottom-skeleton animate card-title"></h4>
                   </div>
                   <div class="col s4">
                    <h4 class="card-bottom-skeleton animate card-title"></h4>
                   </div>
                   <div class="col s4 mb-0">
                    <h4 class="card-bottom-skeleton animate card-title"></h4>
                   </div>
                </div>
            </div>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
              <div class="card border-radius-10">
                <div class="card-content">
                  <div class="row">
                    <div class="col s12" id="surfAllTabs">
                      <ul class="tabs">
                        <li class="tab"><a class="animate active"></a></li>
                        <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                        <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                        <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                        <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                        <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                        <!-- <li class="tab"><div class="tab-heading-skeleton animate"></div></li>
                        <li class="tab"><div class="tab-heading-skeleton animate"></div></li> -->
                      <li class="indicator" style="left: 0px; right: 806px;"></li></ul>
                     <!-- <ul class="tabs">
                        <li class="tab"><a onClick="callOverviewTab()" class="active" href="#Overview">Overview</a></li>
                        <li class="tab"><a onClick="callUsageGraphs()"  href="#Graphs">Usage Graphs</a></li>
                        <li class="tab"><a href="#Network">Network</a></li>
                        <li class="tab"><a href="#Snapshots">Snapshots</a></li>
                        <li class="tab"><a href="#Backups">Backups</a></li>
                        <li class="tab"><a href="#Tags">Tags</a></li>
                        <li class="tab"><a href="#Events">Events</a></li>
                        <li class="tab"><a href="#Settings">Settings</a></li>
                      </ul>-->
                    </div>
                    <div id="Overview" class="col s12" >
                      <div class="row">
                          <div class="col s12">
                          <p class="mt-2 pb-2 border-bottom-1"><?php echo $language_data['minsD_gen_overview_tab_title']; ?></p>
                          </div>
                          <div class="col s12" id="surfaceoverviewcpuandmemoryCard">
                            <div class="card border-radius-10">
                              <div class="card-content pt-1 pb-1 pr-0 pl-0">
                                <h4 class="card-title card-heading-skeleton animate ml-2 mt-1"></h4>
                                <div class="border-bottom-1 mt-2"></div>
                                <div class="row mt-4 mb-2">
                                  <div class="col s6 m6 l3 center">
                                    <div id="element">
                                      <div class="inner animate"></div>
                                    </div>
                                    <h4 class="card-title cpu-circle-heading-skeleton animate mt-8"></h4>
                                  </div>
                                  <div class="col s6 m6 l3 center">
                                    <div id="element" class="maximum-bg">
                                      <div class="inner animate"></div>
                                    </div>
                                    <h4 class="card-title cpu-circle-heading-skeleton animate mt-8"></h4>
                                  </div>
                                  <div class="col s6 m6 l3 center">
                                    <div id="element" class="average-bg">
                                      <div class="inner animate"></div>
                                    </div>
                                    <h4 class="card-title cpu-circle-heading-skeleton animate mt-8"></h4>
                                  </div>
                                  <div class="col s6 m6 l3 center">
                                    <div id="element" class="memory-bg">
                                      <div class="inner animate"></div>
                                    </div>
                                    <h4 class="card-title cpu-circle-heading-skeleton animate mt-8"></h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col s12 m12 l6" id="surfaceoverviewstorageCard">
                            <div class="card border-radius-10" style="height: 250px;">
                              <div class="card-content pt-1 pb-1 pr-0 pl-0">
                                <h4 class="card-title card-heading-skeleton animate ml-2 mb-3 mt-3"></h4>
                                <div class="border-bottom-1 mt-2"></div>
                                <div class="progress-value mt-5">
                                  <h4 class="card-title storage-gb-skeleton animate"></h4>
                                </div>
                                <div class="progress animate">
                                  <div class="progress-done"></div>
                                </div>
                                <div class="progress-value mt-5 float-right" style="width: 165px;">
                                  <h4 class="card-title storage-gb-skeleton storage-gb-sm-skeleton animate"></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col s12 m12 l6" id="surfaceoverviewDiskCard">
                            <div class="card border-radius-10 disk-card-sm" style="height: 250px;">
                              <div class="card-content pt-1 pb-1 pr-0 pl-0">
                                <h4 class="card-title card-heading-skeleton animate ml-2 mb-3 mt-3"></h4>
                                <div class="border-bottom-1 mt-2"></div>
                                <div class="row">
                                  <div class="col s12 m6 l6 center">
                                    <div class="block animate"></div>
                                    <h4 class="card-title cpu-circle-heading-skeleton animate mt-10"></h4>
                                  </div>
                                  <div class="col s12 m6 l6 center">
                                    <div class="block animate"></div>
                                    <h4 class="card-title cpu-circle-heading-skeleton animate mt-10"></h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div id="Graphs" class="col s12" style="display:none;" >
                      <div class="row">
                        <div class="col s12 graphs-select">
                          <p class="mt-2 mb-2 pb-2 border-bottom-1"><?php echo $language_data['minsD_gen_usagegraph_tab_title']; ?></p>
                          <select id="surfMinstGraphs" onChange="callUsageGraphs()" >
                            <option value="" disabled ><?php echo $language_data['minsD_gen_usagegraph_tab_sel_0']; ?></option>
                            <option value="1h" selected><?php echo $language_data['minsD_gen_usagegraph_tab_sel_1']; ?></option>
                            <option value="24h"><?php echo $language_data['minsD_gen_usagegraph_tab_sel_2']; ?></option>
                            <option value="7d"><?php echo $language_data['minsD_gen_usagegraph_tab_sel_3']; ?></option>
                            <option value="30d"><?php echo $language_data['minsD_gen_usagegraph_tab_sel_4']; ?></option>
                          </select>
                        </div>

                        <div id="surfallGraphs">
                          <div class="col s12 m6 l6">
                            <div class="card border-radius-10">
                              <div class="card-content pt-1 pb-1 pr-0 pl-0">
                                <h4 class="card-title card-heading-skeleton animate ml-2 mt-3 mb-3"></h4>
                                <div class="border-bottom-1 mt-2"></div>
                                <div class="total-transaction-container">
                                  <div id="total-transaction-line-chart" class="total-transaction-shadow total-transaction-line-chart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col s12 m6 l6">
                            <div class="card border-radius-10">
                              <div class="card-content pt-1 pb-1 pr-0 pl-0">
                                <h4 class="card-title card-heading-skeleton animate ml-2 mt-3 mb-3"></h4>
                                <div class="border-bottom-1 mt-2"></div>
                                <div class="total-transaction-container">
                                  <div id="total-transaction-line-chart" class="total-transaction-shadow total-transaction-line-chart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col s12 m6 l6">
                            <div class="card border-radius-10">
                              <div class="card-content pt-1 pb-1 pr-0 pl-0">
                                <h4 class="card-title card-heading-skeleton animate ml-2 mt-3 mb-3"></h4>
                                <div class="border-bottom-1 mt-2"></div>
                                <div class="total-transaction-container">
                                  <div id="total-transaction-line-chart" class="total-transaction-shadow total-transaction-line-chart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col s12 m6 l6">
                            <div class="card border-radius-10">
                              <div class="card-content pt-1 pb-1 pr-0 pl-0">
                                <h4 class="card-title card-heading-skeleton animate ml-2 mt-3 mb-3"></h4>
                                <div class="border-bottom-1 mt-2"></div>
                                <div class="total-transaction-container">
                                  <div id="total-transaction-line-chart" class="total-transaction-shadow total-transaction-line-chart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col s12 m6 l6">
                            <div class="card border-radius-10">
                              <div class="card-content pt-1 pb-1 pr-0 pl-0">
                                <h4 class="card-title card-heading-skeleton animate ml-2 mt-3 mb-3"></h4>
                                <div class="border-bottom-1 mt-2"></div>
                                <div class="total-transaction-container">
                                  <div id="total-transaction-line-chart" class="total-transaction-shadow total-transaction-line-chart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col s12 m6 l6">
                            <div class="card border-radius-10">
                              <div class="card-content pt-1 pb-1 pr-0 pl-0">
                                <h4 class="card-title card-heading-skeleton animate ml-2 mt-3 mb-3"></h4>
                                <div class="border-bottom-1 mt-2"></div>
                                <div class="total-transaction-container">
                                  <div id="total-transaction-line-chart" class="total-transaction-shadow total-transaction-line-chart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>


                    <div style="display:none;" id="StorageMinstanceDetails" class="col s12">

                    <!-- Storage -->



                    <div class="row">
                                <div class="col s12">
                                  <p class="mt-2 pb-2 border-bottom-1"><?php echo $language_data['minsD_gen_storage_tab_title']; ?></p>
                                  <div class="add-storage-container" onClick="addMoreStorage()">
                                    <span class="display-flex cursor-pointer">
                                      <i class="material-icons vertical-text-middle dp48 pt-3 fs-30 add-storage-plus">add_circle</i>
                                      <h6 class="pl-2 blue-text" id="btnAdd"><?php echo $language_data['minsD_gen_storage_tab_label_0']; ?></h6>
                                    </span>
                                  </div>
                                </div>
                                <div class="col s12 m12 l12" id="surfallStorageMinstanceDetails" >
                                
                                
                                <!-- Storage Skeleton-->
                               <div class="card card-storage border-radius-10 storage-skeleton">
                                <div class="card-content">
                                  <div class="row">
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
                                    <div class="col s12 mt-2 center">
                                      <button type="text" class="btn storage-btn z-depth-4 animate"></button>
                                    </div>
                                  </div>
                                </div>
                               </div>
                               <!-- Storage Skeleton-->


                                </div>
                              </div> 

                  
                  
                  </div>


                    <div style="display:none;" id="Network" class="col s12">Network</div>
                    <div style="display:none;" id="Snapshots" class="col s12">

                     

                      <div class="row snapshort-container snapshots-skeleton" id="snapshotsInnerPlace">
                        <div class="col s12">
                          <div class="card border-radius-10">
                            <div class="card-content">
                              <div class="row mt-3">
                                <div class="col s9 push-s1 center" style="left: 12%;">
                                  <p class="paragrap-skeleton animate"></p>
                                  <p class="paragrap-skeleton animate p2"></p>
                                  <p class="paragrap-skeleton animate p3"></p>
                                  <button class="btn snapshots-skeleton-btn animate mt-10 mb-10"></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
                    <div style="display:none;" id="Backups" class="col s12">Backups</div>
                    <div style="display:none;" id="Tags" class="col s12">Tags</div>
                    <div style="display:none;" id="Events" class="col s12">Events</div>
                    <div style="display:none;" id="Settings" class="col s12">Settings</div>
                  </div>
                </div>
              </div>
                <!-- <div class="card border-radius-10">
                    <div class="card-content pt-2 pb-2">
                        <h4 class="card-title border-bottom-1 pb-1">CPU Information</h4>
                        <div class="row">
                            <div class="col s6">
                                <div class="card border-radius-10">
                                    <h4 class="card-title border-bottom-1 pl-2 pt-2 pb-2 fs-15">CPU Usage (MHz)</h4>
                                    <div class="card-content">
                                        <div class="sample-chart-wrapper"><canvas id="line-chart" height="400"></canvas></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col s6">
                                <div class="card border-radius-10">
                                    <h4 class="card-title border-bottom-1 pl-2 pt-2 pb-2 fs-15">CPU Usage (%)</h4>
                                    <div class="card-content">
                                        <div class="sample-chart-wrapper"><canvas id="bar-chart" height="400"></canvas></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 class="card-title border-bottom-1 pb-1">Memory Information </h4>
                        <div class="row">
                            <div class="col s6">
                                <div class="card border-radius-10">
                                    <h4 class="card-title border-bottom-1 pl-2 pt-2 pb-2 fs-15">Memory Usage (KB)</h4>
                                    <div class="card-content">
                                        <div id="ct1-chart" height="400" class="ct-chart"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col s6">
                                <div class="card border-radius-10">
                                    <h4 class="card-title border-bottom-1 pl-2 pt-2 pb-2 fs-15">Memory Usage (%)</h4>
                                    <div class="card-content">
                                        <div id="ct8-chart"  height="400" class="ct-chart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 class="card-title border-bottom-1 pb-1">Storage Information</h4>
                        <div class="row">
                            <div class="col s6">
                                <div class="card border-radius-10">
                                    <h4 class="card-title border-bottom-1 pl-2 pt-2 pb-2 fs-15">Read/Write Throughput (KBPS)</h4>
                                    <div class="card-content">
                                        <div id="ct10-chart" height="400" class="ct-chart"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col s6">
                                <div class="card border-radius-10">
                                    <h4 class="card-title border-bottom-1 pl-2 pt-2 pb-2 fs-15">Read/Write (IOPS)</h4>
                                    <div class="card-content">
                                        <div id="ct9-chart" height="400" class="ct-chart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 class="card-title border-bottom-1 pb-1">Network Information</h4>
                        <div class="row">
                            <div class="col s6">
                                <div class="card border-radius-10">
                                    <h4 class="card-title border-bottom-1 pl-2 pt-2 pb-2 fs-15">Network Rate (KBPS)</h4>
                                    <div class="card-content">
                                        <div id="invoice-line" class="center"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col s6">
                                <div class="card border-radius-10">
                                    <h4 class="card-title border-bottom-1 pl-2 pt-2 pb-2 fs-15">Network Packets Dropped (Count)</h4>
                                    <div class="card-content">
                                        <div id="clients-bar" class="center"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
  </div>
</div>



<!-- modal -->
<!-- START Console Modal Trigger -->
<div id="consoleVMmodal" class="modal border-radius-10">
  <div class="modal-content">
    <div class="display-flex">
      <h6 class="card-title mb-2" id="titleVMConsole">3TierApp - Web Console</h5>
      <button onClick="sendCAD()" type="button" class="btn control-btn  form-btn waves-effect waves-light gradient-45deg-light-blue-cyan">CTRL+ALT+DEL</button>
      <!--<button type="button" class="btn option-btn form-btn waves-effect waves-light gradient-45deg-light-blue-cyan">OPTIONS</button>-->
      <button onClick="enterFullScreen()" type="button" id="fullscreen-btn" class="btn fullscreen-btn form-btn waves-effect waves-light gradient-45deg-light-blue-cyan">FULL SCREEN</button>
      <!--<button style="display:none;" type="button" id="exit-fullscreen-btn" class="btn  fullscreen-btn form-btn waves-effect waves-light gradient-45deg-light-blue-cyan">EXIT SCREEN</button>-->
      <a href="javascript:void(0);" class="modal-action modal-close modal-close-icon waves-effect waves-green"><i class="material-icons dp48 fs-18">close</i></a>
    </div>
    <div>
      <div id="wmksContainer" style="width: 100%;
      height: auto;">
        <div class="loadingVMConsole"></div>
      </div>
    </div>
  </div>
</div>
<!-- END Console Modal Trigger -->



      