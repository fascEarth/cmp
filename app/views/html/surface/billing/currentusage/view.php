<?php

require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/backend.php';

$_SESSION['token_illustrate_billingCurrentUsage'] =(
  (
    isset($_SESSION['token_illustrate_billingCurrentUsage']) 
    && 
    !empty($_SESSION['token_illustrate_billingCurrentUsage'])
  )
  ?
  $_SESSION['token_illustrate_billingCurrentUsage']
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
echo '<input type="hidden" value="'.$_SESSION['token_illustrate_billingCurrentUsage'].'" id="establish_billingCurrentUsage_formSubmit" >';
?>
<link rel="stylesheet" type="text/css" href="app/views/html/surface/billing/currentusage/index.css">
<link rel="stylesheet" type="text/css" href="app/views/html/surface/billing/currentusage/developer.css">


<div id="currentusage_org_default" style="display:none;" >
<div class="content-wrapper-before gradient-45deg-indigo-purple"></div>
            <div class="breadcrumbs-dark pb-0" id="breadcrumbs-wrapper">
                <!-- Search for small screen-->
                <div class="container">
                    <div class="row">
                        <div class="col s10 m6 l6">
                        <h5 class="breadcrumbs-title mt-0 mb-0"><span>Estimated Cost</span></h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12">
                <div class="container">
                    <div class="section section-data-tables">
                        <div class="row">
                            <div class="col s12">
                                <div class="card border-radius-10">
                                    <div class="card-content tab-card pl-2 pr-2"  >
                                        <div class="row">
                                            <div class="col s12 m12 l8 card-heading-top"> 
                                                <h4 class="card-title fs-22 dark-blue">Current Consumption for this billing Period</h4>
                                                <p class="mt-2 fs-14 blue-text">This is the estimated costs for your current usage. A breakdown of your costs is available below. </p>
                                            </div>
                                            <div class="col s12 m12 l4 md-chart"> 
                                               <div class="display-flex align-items-center">
                                                 <img src="app/views/html/surface/billing/currentusage/chart.png" width="150" alt="chart" />
                                                 <h4 class="card-title fs-30 top-card-sar-value"><span id="currentusageTotalTop" >XXX.XX</span> <span class="card-title fs-18 top-card-sar">SAR</span></h4>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col s12"> 
                                <div class="card border-radius-10 mt-0">
                                    <div class="card-content pl-2 pr-2" id="billingcurrentusageView">
                                        <h4 class="card-title"><span class="dark-blue">Summary</span> <span class="blue-text ml-2" id="currentusageDate" >XXXXXX, XX-XXXX</span> <span class="blue-text expandall  fs-14" id="expandAll" onClick="expandAll();">Expand All</span> <span style="display:none;" class="blue-text expandall  fs-14" id="collapseAll" onClick="collapseAll();">Collapse All</span></h4>
                                        <div class="divider mt-1"></div>
                                        <!-- Start collapsible -->
                                        <ul class="collapsible estimatedcost-collapsible expandable mt-2" data-collapsible="expandable">
                                            <li id="collapsible-div-vminstance" class="estimate-collapse active" onClick="CallParticularBillingUsageTbls('vminstance')">
                                              <div class="collapsible-header estimate-collapse-header"><i class="fa fa-angle-right" aria-hidden="true"></i> <span class="dark-blue">VM Instance</span> <span class="collapsible-count" id="collapsible-count-vminstance" style="display:none;" >23</span> <span class="header-cost" id="header-cost-vminstance" style="display:none;" >45.2</span></div>
                                              <div id="collapsible-body-type-vminstance" class="collapsible-body">
                                                <div class="row" style="display:none;" id="collapsible-body-org-vminstance" >
                                                    <div class="col s12">
                                                      <table class="striped" id="common-but-datatable-vminstance">
                                                        <thead>
                                                          <tr>
                                                            <th>Name</th>
                                                            <th>Hours</th>
                                                            <th>Start</th>
                                                            <th>End</th>
                                                            <th>Cost</th>
                                                          </tr>
                                                        </thead>
                                                        <tbody>
                                                          <tr>
                                                            <td class="td-name">ipt-csrv-pry-blr-01</td>
                                                            <td>168</td>
                                                            <td>01Nov 00:00</td>
                                                            <td>08Nov 23:59</td>
                                                            <td>12:67</td>
                                                          </tr>
                                                          <tr>
                                                            <td class="td-name">ipt-csrv-pry-blr-02</td>
                                                            <td>56</td>
                                                            <td>05Nov 00:00</td>
                                                            <td>08Nov 23:59</td>
                                                            <td>20:00</td>
                                                          </tr>
                                                          <tr>
                                                            <td class="td-name">ipt-csrv-pry-blr-03</td>
                                                            <td>159</td>
                                                            <td>02Nov 00:00</td>
                                                            <td>08Nov 23:59</td>
                                                            <td>10:02</td>
                                                          </tr>
                                                          <tr>
                                                            <td class="td-name">ipt-csrv-pry-blr-04</td>
                                                            <td>168</td>
                                                            <td>01Nov 00:00</td>
                                                            <td>08Nov 23:59</td>
                                                            <td>5</td>
                                                          </tr>
                                                          <tr>
                                                            <td class="td-name">ipt-csrv-pry-blr-05</td>
                                                            <td>24</td>
                                                            <td>07Nov 00:00</td>
                                                            <td>08Nov 23:59</td>
                                                            <td>12:67</td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </div>
                                                </div>
                                                <!-- Estimated Cost table Skeleton -->
                                                <div class="row estimatedcost-table-list-skeleton " id="collapsible-body-skeleton-vminstance" >
                                                  <div class="col s12 m12 l12">
                                                      <table class="striped">
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
                                                <!-- Estimated Cost table Skeleton -->
                                              </div>
                                            </li>
                                            <li id="collapsible-div-vmsnapshots" class="estimate-collapse" onClick="CallParticularBillingUsageTbls('vmsnapshots')" >
                                              <div class="collapsible-header"><i class="fa fa-angle-right" aria-hidden="true"></i> <span class="dark-blue">VM Snapshots</span> <span class="collapsible-count" id="collapsible-count-vmsnapshots" style="display:none;" >4</span> <span class="header-cost" id="header-cost-vmsnapshots" style="display:none;" >0.0</span></div>
                                              <div id="collapsible-body-type-vmsnapshots" class="collapsible-body">
                                                <div class="row" style="display:none;" id="collapsible-body-org-vmsnapshots" >
                                                    <div class="col s12">
                                                      <table class="striped" id="common-but-datatable-vmsnapshots">
                                                        <thead>
                                                          <tr>
                                                            <th>Name</th>
                                                            <th>Hours</th>
                                                            <th>Start</th>
                                                            <th>End</th>
                                                            <th>Cost</th>
                                                          </tr>
                                                        </thead>
                                                        <tbody>
                                                          <tr>
                                                            <td class="td-name">ipt-csrv-pry-blr-01</td>
                                                            <td>168</td>
                                                            <td>01Nov 00:00</td>
                                                            <td>08Nov 23:59</td>
                                                            <td>12:67</td>
                                                          </tr>
                                                          <tr>
                                                            <td class="td-name">ipt-csrv-pry-blr-02</td>
                                                            <td>56</td>
                                                            <td>05Nov 00:00</td>
                                                            <td>08Nov 23:59</td>
                                                            <td>20:00</td>
                                                          </tr>
                                                          <tr>
                                                            <td class="td-name">ipt-csrv-pry-blr-03</td>
                                                            <td>159</td>
                                                            <td>02Nov 00:00</td>
                                                            <td>08Nov 23:59</td>
                                                            <td>10:02</td>
                                                          </tr>
                                                          <tr>
                                                            <td class="td-name">ipt-csrv-pry-blr-04</td>
                                                            <td>168</td>
                                                            <td>01Nov 00:00</td>
                                                            <td>08Nov 23:59</td>
                                                            <td>5</td>
                                                          </tr>
                                                          <tr>
                                                            <td class="td-name">ipt-csrv-pry-blr-05</td>
                                                            <td>24</td>
                                                            <td>07Nov 00:00</td>
                                                            <td>08Nov 23:59</td>
                                                            <td>12:67</td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </div>
                                                </div>

                                                <!-- Estimated Cost table Skeleton -->
                                                <div class="row estimatedcost-table-list-skeleton " id="collapsible-body-skeleton-vmsnapshots" >
                                                  <div class="col s12 m12 l12">
                                                      <table class="striped">
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
                                                <!-- Estimated Cost table Skeleton -->

                                              </div>
                                            </li>

                                            
                                            <li id="collapsible-div-storages" class="estimate-collapse" onClick="CallParticularBillingUsageTbls('storages')" >
                                              <div class="collapsible-header"><i class="fa fa-angle-right" aria-hidden="true"></i> <span class="dark-blue">Storages</span> <span class="collapsible-count" id="collapsible-count-storages" style="display:none;" >6</span> <span class="header-cost" id="header-cost-storages" style="display:none;" >23.8</span></div>
                                              <div id="collapsible-body-type-storages" class="collapsible-body">
                                                <div class="row" style="display:none;" id="collapsible-body-org-storages" >
                                                    <div class="col s12">
                                                      <table class="striped" id="common-but-datatable-storages">
                                                        <thead>
                                                          <tr>
                                                            <th>Name</th>
                                                            <th>Hours</th>
                                                            <th>Start</th>
                                                            <th>End</th>
                                                            <th>Cost</th>
                                                          </tr>
                                                        </thead>
                                                        <tbody>
                                                          <tr>
                                                            <td class="td-name">ipt-csrv-pry-blr-01</td>
                                                            <td>168</td>
                                                            <td>01Nov 00:00</td>
                                                            <td>08Nov 23:59</td>
                                                            <td>12:67</td>
                                                          </tr>
                                                          <tr>
                                                            <td class="td-name">ipt-csrv-pry-blr-02</td>
                                                            <td>56</td>
                                                            <td>05Nov 00:00</td>
                                                            <td>08Nov 23:59</td>
                                                            <td>20:00</td>
                                                          </tr>
                                                          <tr>
                                                            <td class="td-name">ipt-csrv-pry-blr-03</td>
                                                            <td>159</td>
                                                            <td>02Nov 00:00</td>
                                                            <td>08Nov 23:59</td>
                                                            <td>10:02</td>
                                                          </tr>
                                                          <tr>
                                                            <td class="td-name">ipt-csrv-pry-blr-04</td>
                                                            <td>168</td>
                                                            <td>01Nov 00:00</td>
                                                            <td>08Nov 23:59</td>
                                                            <td>5</td>
                                                          </tr>
                                                          <tr>
                                                            <td class="td-name">ipt-csrv-pry-blr-05</td>
                                                            <td>24</td>
                                                            <td>07Nov 00:00</td>
                                                            <td>08Nov 23:59</td>
                                                            <td>12:67</td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </div>
                                                </div>

                                                
                                                <div class="row estimatedcost-table-list-skeleton " id="collapsible-body-skeleton-storages" >
                                                  <div class="col s12 m12 l12">
                                                      <table class="striped">
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
                                            </li>
                                              

                                            <li id="collapsible-div-publicipv4address" class="estimate-collapse" onClick="CallParticularBillingUsageTbls('publicipv4address')" >
                                                <div class="collapsible-header"><i class="fa fa-angle-right" aria-hidden="true"></i> <span class="dark-blue">Public IPv4 Address</span> <span class="collapsible-count" id="collapsible-count-publicipv4address" style="display:none;" >8</span> <span class="header-cost" id="header-cost-publicipv4address" style="display:none;" >234.9</span></div>
                                                <div id="collapsible-body-type-publicipv4address" class="collapsible-body">
                                                    <div class="row" style="display:none;" id="collapsible-body-org-publicipv4address" >
                                                        <div class="col s12">
                                                          <table class="striped" id="common-but-datatable-publicipv4address">
                                                            <thead>
                                                              <tr>
                                                                <th>Name</th>
                                                                <th>Hours</th>
                                                                <th>Start</th>
                                                                <th>End</th>
                                                                <th>Cost</th>
                                                              </tr>
                                                            </thead>
                                                            <tbody>
                                                              <tr>
                                                                <td class="td-name">ipt-csrv-pry-blr-01</td>
                                                                <td>168</td>
                                                                <td>01Nov 00:00</td>
                                                                <td>08Nov 23:59</td>
                                                                <td>12:67</td>
                                                              </tr>
                                                              <tr>
                                                                <td class="td-name">ipt-csrv-pry-blr-02</td>
                                                                <td>56</td>
                                                                <td>05Nov 00:00</td>
                                                                <td>08Nov 23:59</td>
                                                                <td>20:00</td>
                                                              </tr>
                                                              <tr>
                                                                <td class="td-name">ipt-csrv-pry-blr-03</td>
                                                                <td>159</td>
                                                                <td>02Nov 00:00</td>
                                                                <td>08Nov 23:59</td>
                                                                <td>10:02</td>
                                                              </tr>
                                                              <tr>
                                                                <td class="td-name">ipt-csrv-pry-blr-04</td>
                                                                <td>168</td>
                                                                <td>01Nov 00:00</td>
                                                                <td>08Nov 23:59</td>
                                                                <td>5</td>
                                                              </tr>
                                                              <tr>
                                                                <td class="td-name">ipt-csrv-pry-blr-05</td>
                                                                <td>24</td>
                                                                <td>07Nov 00:00</td>
                                                                <td>08Nov 23:59</td>
                                                                <td>12:67</td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </div>
                                                    </div>

                                                    <!-- Estimated Cost table Skeleton -->
                                                <div class="row estimatedcost-table-list-skeleton " id="collapsible-body-skeleton-publicipv4address" >
                                                  <div class="col s12 m12 l12">
                                                      <table class="striped">
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
                                                <!-- Estimated Cost table Skeleton -->

                                                </div>
                                            </li>
                                            <li id="collapsible-div-internetbandwidth" class="estimate-collapse" onClick="CallParticularBillingUsageTbls('internetbandwidth')" >
                                                <div class="collapsible-header"><i class="fa fa-angle-right" aria-hidden="true"></i> <span class="dark-blue">Internet Bandwidth</span> <span class="collapsible-count" id="collapsible-count-internetbandwidth" style="display:none;" >8</span> <span class="header-cost" id="header-cost-internetbandwidth" style="display:none;" >100</span></div>
                                                <div id="collapsible-body-type-internetbandwidth" class="collapsible-body">
                                                    <div class="row" style="display:none;" id="collapsible-body-org-internetbandwidth" >
                                                        <div class="col s12">
                                                          <table class="striped" id="common-but-datatable-internetbandwidth">
                                                            <thead>
                                                              <tr>
                                                                <th>Name</th>
                                                                <th>Hours</th>
                                                                <th>Start</th>
                                                                <th>End</th>
                                                                <th>Cost</th>
                                                              </tr>
                                                            </thead>
                                                            <tbody>
                                                              <tr>
                                                                <td class="td-name">Bandwidth 6 Mbps Speed</td>
                                                                <td>168</td>
                                                                <td>01Nov 00:00</td>
                                                                <td>08Nov 23:59</td>
                                                                <td>12:67</td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </div>
                                                    </div>

                                                    <!-- Estimated Cost table Skeleton -->
                                                <div class="row estimatedcost-table-list-skeleton " id="collapsible-body-skeleton-internetbandwidth" >
                                                  <div class="col s12 m12 l12">
                                                      <table class="striped">
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
                                                <!-- Estimated Cost table Skeleton -->

                                                </div>
                                            </li>
                                            <!--<li id="collapsible-div-os" class="estimate-collapse" onClick="CallParticularBillingUsageTbls('os')" >
                                                <div class="collapsible-header"><i class="fa fa-angle-right" aria-hidden="true"></i> <span class="dark-blue">Operating Systems</span> <span class="collapsible-count" id="collapsible-count-os" style="display:none;" >8</span> <span class="header-cost" id="header-cost-os" style="display:none;" >50</span></div>
                                                <div id="collapsible-body-type-os" class="collapsible-body">
                                                    <div class="row" style="display:none;" id="collapsible-body-org-os" >
                                                        <div class="col s12">
                                                          <table class="striped" id="common-but-datatable-os">
                                                            <thead>
                                                              <tr>
                                                                <th>Name</th>
                                                                <th>Hours</th>
                                                                <th>Start</th>
                                                                <th>End</th>
                                                                <th>Cost</th>
                                                              </tr>
                                                            </thead>
                                                            <tbody>
                                                              <tr>
                                                                <td class="td-name">ipt-csrv-pry-blr-01</td>
                                                                <td>168</td>
                                                                <td>01Nov 00:00</td>
                                                                <td>08Nov 23:59</td>
                                                                <td>12:67</td>
                                                              </tr>
                                                              <tr>
                                                                <td class="td-name">ipt-csrv-pry-blr-02</td>
                                                                <td>56</td>
                                                                <td>05Nov 00:00</td>
                                                                <td>08Nov 23:59</td>
                                                                <td>20:00</td>
                                                              </tr>
                                                              <tr>
                                                                <td class="td-name">ipt-csrv-pry-blr-03</td>
                                                                <td>159</td>
                                                                <td>02Nov 00:00</td>
                                                                <td>08Nov 23:59</td>
                                                                <td>10:02</td>
                                                              </tr>
                                                              <tr>
                                                                <td class="td-name">ipt-csrv-pry-blr-04</td>
                                                                <td>168</td>
                                                                <td>01Nov 00:00</td>
                                                                <td>08Nov 23:59</td>
                                                                <td>5</td>
                                                              </tr>
                                                              <tr>
                                                                <td class="td-name">ipt-csrv-pry-blr-05</td>
                                                                <td>24</td>
                                                                <td>07Nov 00:00</td>
                                                                <td>08Nov 23:59</td>
                                                                <td>12:67</td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </div>
                                                    </div>

                                                    
                                                <div class="row estimatedcost-table-list-skeleton " id="collapsible-body-skeleton-os" >
                                                  <div class="col s12 m12 l12">
                                                      <table class="striped">
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
                                            </li>-->
                                        </ul>
                                        <!-- End collapsible -->
                                        <div class="row">
                                           <div class="col s12">
                                                <div class="card total-card border-radius-4 mt-0">
                                                    <div class="card-content pl-2 pr-2 pt-4">
                                                        <div class="display-flex align-items-center">
                                                          <h4 class="card-title white-text total">Total</h4>
                                                          <div class="total-value dark-blue">SAR <span class="header-cost"  id="currentusageTotalBottom" >XXX</span></div>
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
            </div>

</div>



                <!-- BEGIN: Skeleton -->
    
      <div class="estimatedcost-skeleton" id="currentusage_skel_default">
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
                  <div class="section section-data-tables">
                      <div class="row">
                          <div class="col s12">
                              <div class="card border-radius-10">
                                  <div class="card-content tab-card pl-2 pr-2">
                                      <div class="row">
                                          <div class="col s12 m8 l8 card-heading-top"> 
                                              <h4 class="card-title card-header-skeleton animate"></h4>
                                              <p class="mt-2 card-header-p-skeleton animate"></p>
                                          </div>
                                          <div class="col s12 m4 l4 chart-sm"> 
                                            <div class="display-flex align-items-center">
                                              <div class="chart-skeleton animate"></div>
                                              <h4 class="card-title top-card-sar-skeleton top-card-sar-value animate"> <span class="card-title top-sar-text-skeleton top-card-sar animate"></span></h4>
                                            </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col s12"> 
                              <div class="card border-radius-10 mt-0">
                                  <div class="card-content pl-2 pr-2">
                                      <h4 class="card-title" style="width: 100%;"><div class="summary-skeleton animate"></div> <span class="blue-text expandall animate"></span></h4>
                                      <div class="divider mt-1"></div>
                                      <!-- Start collapsible -->
                                      <ul class="collapsible estimatedcost-collapsible expandable mt-2">
                                          <li class="estimate-collapse collapsible-li-sk">
                                            <div class="display-flex">
                                              <div class="collapsible-li-arrow collaps-animate"></div>
                                              <div class="collapsible-li-header-skeleton collaps-animate"></div>
                                              <div class="collapsible-li-sar-skeleton collaps-animate"></div>
                                            </div>
                                          </li>
                                          <li class="estimate-collapse collapsible-li-sk">
                                            <div class="display-flex">
                                              <div class="collapsible-li-arrow collaps-animate"></div>
                                              <div class="collapsible-li-header-skeleton collaps-animate"></div>
                                              <div class="collapsible-li-sar-skeleton collaps-animate"></div>
                                            </div>
                                          </li>
                                          <li class="estimate-collapse collapsible-li-sk">
                                            <div class="display-flex">
                                              <div class="collapsible-li-arrow collaps-animate"></div>
                                              <div class="collapsible-li-header-skeleton collaps-animate"></div>
                                              <div class="collapsible-li-sar-skeleton collaps-animate"></div>
                                            </div>
                                          </li>
                                          <li class="estimate-collapse collapsible-li-sk">
                                            <div class="display-flex">
                                              <div class="collapsible-li-arrow collaps-animate"></div>
                                              <div class="collapsible-li-header-skeleton collaps-animate"></div>
                                              <div class="collapsible-li-sar-skeleton collaps-animate"></div>
                                            </div>
                                          </li>
                                          <li class="estimate-collapse collapsible-li-sk">
                                            <div class="display-flex">
                                              <div class="collapsible-li-arrow collaps-animate"></div>
                                              <div class="collapsible-li-header-skeleton collaps-animate"></div>
                                              <div class="collapsible-li-sar-skeleton collaps-animate"></div>
                                            </div>
                                          </li>
                                          <li class="estimate-collapse collapsible-li-sk">
                                            <div class="display-flex">
                                              <div class="collapsible-li-arrow collaps-animate"></div>
                                              <div class="collapsible-li-header-skeleton collaps-animate"></div>
                                              <div class="collapsible-li-sar-skeleton collaps-animate"></div>
                                            </div>
                                          </li>
                                      </ul>
                                      <!-- End collapsible -->
                                      <div class="row">
                                        <div class="col s12">
                                              <div class="card total-card border-radius-4 mt-0">
                                                  <div class="card-content pl-2 pr-2 pt-4">
                                                      <div class="display-flex align-items-center">
                                                        <h4 class="card-title total-bottom-value total header-animate"></h4>
                                                        <div class="total-value dark-blue"></div>
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
          </div>
      </div>
  
  <!-- END: Skeleton -->