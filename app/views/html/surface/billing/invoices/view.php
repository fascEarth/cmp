<?php

require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/backend.php';

$_SESSION['token_illustrate_invoices_status'] =(
  (
    isset($_SESSION['token_illustrate_invoices_status']) 
    && 
    !empty($_SESSION['token_illustrate_invoices_status'])
  )
  ?
  $_SESSION['token_illustrate_invoices_status']
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


<input type="hidden" id="establish_invoices_status" value="<?php echo $_SESSION['token_illustrate_invoices_status']; ?>" >
<link rel="stylesheet" type="text/css" href="app/views/html/surface/billing/invoices/index.css">
<div class="content-wrapper-before gradient-45deg-indigo-purple"></div>
        <div class="breadcrumbs-dark pb-0 pt-2" id="breadcrumbs-wrapper">
          <!-- Search for small screen-->
          <div class="container">
            <div class="row">
              <div class="col s10 m6 l6">
                <h5 class="breadcrumbs-title mt-0 mb-0"><span>Invoice</span></h5>
              </div>
            </div>
            <!-- Heading Skeleton -->
            <div class="row header-top-skeleton hide">
              <div class="col s10 m6 l6">
                  <h5 class="breadcrumbs-title mt-0 mb-0 header-skeleton header-animate"></h5>
              </div>
            </div>
            <!-- Heading Skeleton -->
          </div>
        </div>
        <div class="col s12" style="display:none;"  id="surf_invoices_org">
          <div class="container" id="implement_invoice_table">
            <!-- invoice list -->
            <section class="invoice-list-wrapper section">
            <!-- create invoice button-->
            <div class="card es-card center">
              <div class="card-content">
                <h4 class="card-title mb-0 mt-2 white-text" id="lastinvVal" >0 <span>SAR</span></h4>
              </div>
              <div class="card-action">Last Invoice</div>
            </div>
            <div class="card av-card center">
              <div class="card-content">
                <h4 class="card-title mb-0 mt-2 white-text" id="pendingAmtVal" >0 <span>SAR</span></h4>
              </div>
              <div class="card-action">Pending Amount</div>
            </div>
            <!-- Options and filter dropdown button-->
            <div  class="invoice-filter-action mr-3">
                <a id="invoiceallexportBtn" onClick="invoiceallexport()" href="javascript:void(0);" class="btn btn-light-indigo waves-effect waves-light invoice-export border-round z-depth-4 export-bg">
                <i class="fa fa-external-link" aria-hidden="true"></i>
                <span  class="hide-on-small-only">Export</span>
                </a>
            </div>
            <div class="filter-btn">
                <!-- Dropdown Trigger -->
                <a class='dropdown-trigger btn waves-effect waves-light export-bg border-round filter-btn' href='#'
                data-target='btn-filter'>
                <span class="hide-on-small-only">Filter</span>
                <i class="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <!-- Dropdown Structure -->
                <ul id='btn-filter' class='dropdown-content'>
                <li><a id="invoiceStFilterpaid" onClick="invoiceStFilter('PAID')" href="javascript:void(0);">Paid</a></li>
                <li><a id="invoiceStFilterunpaid" onClick="invoiceStFilter('UNPAID')" href="javascript:void(0);">Unpaid</a></li>
                <li style="display:none;" id="invoiceStFilterclear" ><a onClick="invoiceStFilter('')" href="javascript:void(0);">Clearall</a></li>
                </ul>
            </div>
            <div class="responsive-table" >
                <table class="table invoice-data-table striped highlight white border-radius-4 pt-1">
                  
               <!-- <thead>
                    <tr>
                    
                    <th></th>
                    
                    <th></th>
                    <th>
                        <span>Invoice Numbar</span>
                    </th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>Balance</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td></td>
                    <td></td>
                    <td>
                        <a href="invoice-view.html">INV-0023456</a>
                    </td>
                    <td><small>17-07-22</small></td>
                    <td><span class="invoice-amount">SR 2,000</span></td>
                    <td><span class="invoice-customer">Credit Card</span></td>
                    <td><small>SR 0</small></td>
                    <td>
                        <span class="chip lighten-5 green green-text">PAID</span>
                    </td>
                    <td>
                        <div class="invoice-action">
                          <a class='dropdown-trigger' href='#' data-target='action-btn-filter1'>
                            <span class="hide-on-small-only"><i class="material-icons dp48">more_horiz</i></span></a>
                        </div>
                        
                        <ul id='action-btn-filter1' class='dropdown-content'>
                          <li><a href="#!"><i class="material-icons dp48">receipt</i> Payment Receipt</a></li>
                          <li><a href="#!"><i class="material-icons dp48">file_download</i> Invoice Download</a></li>
                        </ul>
                    </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                          <a href="invoice-view.html">INV-0023456</a>
                      </td>
                      <td><small>17-07-22</small></td>
                      <td><span class="invoice-amount">SR 2,000</span></td>
                      <td><span class="invoice-customer">Credit Card</span></td>
                      <td><small>SR 0</small></td>
                      <td>
                          <span class="chip lighten-5 red red-text">UNPAID</span>
                      </td>
                      <td>
                          <div class="invoice-action">
                            <a class='dropdown-trigger' href='#' data-target='action-btn-filter2'>
                              <span class="hide-on-small-only"><i class="material-icons dp48">more_horiz</i></span></a>
                          </div>
                          
                          <ul id='action-btn-filter2' class='dropdown-content'>
                            <li><a href="#!"><i class="material-icons dp48">credit_card</i> Pay Now</a></li>
                            <li><a href="#!"><i class="material-icons dp48">file_download</i> Invoice Download</a></li>
                          </ul>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                          <a href="invoice-view.html">INV-0023456</a>
                      </td>
                      <td><small>17-07-22</small></td>
                      <td><span class="invoice-amount">SR 2,000</span></td>
                      <td><span class="invoice-customer">Credit Card</span></td>
                      <td><small>SR 0</small></td>
                      <td>
                          <span class="chip lighten-5 green green-text">PAID</span>
                      </td>
                      <td>
                          <div class="invoice-action">
                            <a class='dropdown-trigger' href='#' data-target='action-btn-filter3'>
                              <span class="hide-on-small-only"><i class="material-icons dp48">more_horiz</i></span></a>
                          </div>
                          
                          <ul id='action-btn-filter3' class='dropdown-content'>
                            <li><a href="#!"><i class="material-icons dp48">receipt</i> Payment Receipt</a></li>
                            <li><a href="#!"><i class="material-icons dp48">file_download</i> Invoice Download</a></li>
                          </ul>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                          <a href="invoice-view.html">INV-0023456</a>
                      </td>
                      <td><small>17-07-22</small></td>
                      <td><span class="invoice-amount">SR 2,000</span></td>
                      <td><span class="invoice-customer">Credit Card</span></td>
                      <td><small>SR 0</small></td>
                      <td>
                          <span class="chip lighten-5 red red-text">UNPAID</span>
                      </td>
                      <td>
                          <div class="invoice-action">
                            <a class='dropdown-trigger' href='#' data-target='action-btn-filter4'>
                              <span class="hide-on-small-only"><i class="material-icons dp48">more_horiz</i></span></a>
                          </div>
                          
                          <ul id='action-btn-filter4' class='dropdown-content'>
                            <li><a href="#!"><i class="material-icons dp48">credit_card</i> Pay Now</a></li>
                            <li><a href="#!"><i class="material-icons dp48">file_download</i> Invoice Download</a></li>
                          </ul>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                          <a href="invoice-view.html">INV-0023456</a>
                      </td>
                      <td><small>17-07-22</small></td>
                      <td><span class="invoice-amount">SR 2,000</span></td>
                      <td><span class="invoice-customer">Credit Card</span></td>
                      <td><small>SR 0</small></td>
                      <td>
                          <span class="chip lighten-5 green green-text">PAID</span>
                      </td>
                      <td>
                          <div class="invoice-action">
                            <a class='dropdown-trigger' href='#' data-target='action-btn-filter5'>
                              <span class="hide-on-small-only"><i class="material-icons dp48">more_horiz</i></span></a>
                          </div>
                          
                          <ul id='action-btn-filter5' class='dropdown-content'>
                            <li><a href="#!"><i class="material-icons dp48">receipt</i> Payment Receipt</a></li>
                            <li><a href="#!"><i class="material-icons dp48">file_download</i> Invoice Download</a></li>
                          </ul>
                      </td>
                    </tr>
                </tbody>-->

                </table>
            </div>
            </section>
          </div>
          <div class="content-overlay"></div>
        </div>
        <!-- Invoice Skeleton Design -->
        <div class="col s12 invoice-table-skeleton" id="surf_invoices_disp">
          <div class="container">
            <!-- invoice list -->
            <section class="invoice-list-wrapper section">
            <!-- create invoice button-->
            <div class="card es-card center">
              <div class="card-content"><div class="es-header-skeleton es-animate mt-8"></div></div>
              <div class="card-action"><div class="es-header-skeleton es-animate mt-1"></div></div>
            </div>
            <div class="card av-card center">
              <div class="card-content"><div class="es-header-skeleton es-animate mt-8"></div></div>
              <div class="card-action"><div class="es-header-skeleton es-animate mt-1"></div></div>
            </div>
            <!-- Options and filter dropdown button-->
            <div class="btn btn-light-indigo invoice-export border-round export-bg es-animate"></div>
            <div class="btn btn-light-indigo invoice-export border-round export-bg filter-skeleton es-animate"></div>
            <!-- invoice table Skeleton -->
            <div class="row invoice-table-list-skeleton">
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
            <!-- invoice table Skeleton -->
            </section>
          </div>
          <div class="content-overlay"></div>
        </div>
        <!-- Invoice Skeleton Design -->


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