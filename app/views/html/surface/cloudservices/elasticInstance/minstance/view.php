<?php

require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/backend.php';

$_SESSION['token_illustrate_minstance_status'] =(
  (
    isset($_SESSION['token_illustrate_minstance_status']) 
    && 
    !empty($_SESSION['token_illustrate_minstance_status'])
  )
  ?
  $_SESSION['token_illustrate_minstance_status']
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




$language_data = getLangData("/app/views/html/surface/cloudservices/elasticInstance/minstance/lang/");
//var_dump($language_data); exit;


echo '<input type="hidden" value="'.$_SESSION['token_common_formSubmit'].'" id="establish_common_formSubmit" >';
?>

<link rel="stylesheet" type="text/css" href="app/views/html/surface/cloudservices/elasticInstance/minstance/index.css">
<link rel="stylesheet" type="text/css" href="app/views/html/surface/cloudservices/elasticInstance/minstance/developer.css">
<style>
  .invoice-list-wrapper .responsive-table .top .action-filters .dataTables_filter {
    width: 32%;
    padding-right: 0px;
}
.invoice-list-wrapper .responsive-table .top .action-filters .dataTables_filter label input[type='search'] {
    height: 33px;
    margin: 0;
    padding-left: 1.5rem;
    border: 1px solid #6FCCDD !important;
    border-bottom: none;
    border-radius: 150px;
    background: transparent;
    color: #333;
}
.invoice-list-wrapper .responsive-table .top .action-filters .dataTables_filter label .filter-btn {
    position: absolute;
    top: -8px;
    right: 5px;
}
.invoice-list-wrapper .responsive-table .top .action-filters .dataTables_filter label .filter-btn {
    position: absolute;
    top: -8px;
    right: 5px;
}




/********** Skeleton Css ***********/
.manage-instance-skeleton .header-skeleton {
  width: 175px;
  height: 12px;
  position: relative;
  top: 0px;
  background: #8d8d8d;
  border-radius: 5px;
}
.manage-instance-skeleton .table-header-skeleton {
  width: 175px;
  height: 12px;
  position: relative;
  top: 35px;
  background: #8d8d8d;
  border-radius: 5px;
}
.manage-instance-skeleton .table-header-search {
  width: 260px;
  height: 30px;
  border-radius: 20px;
  float: right;
  top: 0px;
  position: relative;
  border: 1px solid #c7c7c7;
}
.manage-instance-skeleton .animate {
  animation : shimmer 2s infinite linear;
  background: linear-gradient(to right, #ababab 4%, #8d8d8d 25%, #8d8d8d 36%);
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
.manage-instance-skeleton tr {
  border-bottom: 0px;
}
.manage-instance-skeleton thead tr {
  height: 48px;
  background-color: #dbdada;
}
.manage-instance-skeleton table.striped > tbody > tr > td {
  height: 50px;
}
.manage-instance-skeleton .table-td-skeleton {
  width: 70%;
  height: 12px;
  position: relative;
  top: 2px;
  background: #8d8d8d;
  border-radius: 5px;
  margin: 0 auto;
}
.manage-instance-skeleton .animate {
  animation : shimmer 2s infinite linear;
  background: linear-gradient(to right, #efefef 4%, #f5f5f5 25%, #f5f5f5 36%);
  background-size: 1000px 100%;
}
.manage-instance-skeleton .header-animate {
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
        <input type="hidden" id="establish_minstance_status" value="<?php echo $_SESSION['token_illustrate_minstance_status']; ?>" >
          <!-- Search for small screen-->
          <div class="container">
            <div class="row">
              <div class="col s10 m6 l6">
                <h5 class="breadcrumbs-title mt-0 mb-0"><span><?php echo $language_data['pageTitle']; ?></span></h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col s12">
          <div class="container manage-instance-skeleton">
            <div class="invoice-list-wrapper section mt-0">
              <div class="card border-radius-10">
                <div class="card-content center">
                  <!--No Instant Found -->
                  <div id="nomsintance" class="row " style="display:none;">
                    <div class="col s12 m12 l12">
                      <img class="dashboard-empty" src="app/views/html/surface/cloudservices/elasticInstance/minstance/img/elastic-empty.png" width="400" alt="" />
                      <h4 class="card-title dashboard-empty-title mb-0"><?php echo $language_data['minsl_nod_label_0']; ?></h4>
                      <p class="mt-1"><?php echo $language_data['minsl_nod_label_1']; ?></p>
                      <a href="#cinstance" class="btn btn-create waves-effect waves-light mt-2" ><?php echo $language_data['minsl_nod_label_2']; ?></a>
                    </div>
                  </div>
                  <!--No Instant Found -->
                  <!--Data Instant Found -->
                  <div id="yesmsintance" class="row">
                    <div class="col s12 m12 l12" id="applyMinstanceDataOverall" style="display:none;">
                        <h4 class="card-title" style="position: absolute;">List of Instance</h4>
                        <div class="table-header-search animate" id="filter-btn-skeleton-secmins"></div>
                        <div class="filter-btn" style="display:none;">
                            <!-- Dropdown Trigger -->
                            <a class='dropdown-trigger btn waves-effect waves-light export-bg border-round filter-btn' href='#'
                            data-target='btn-filter'>
                            <span class="hide-on-small-only">Filter</span>
                            <i class="material-icons">keyboard_arrow_down</i>
                            </a>
                           
                            <ul id='btn-filter' class='dropdown-content'>
                            <li><a href="#!">Running</a></li>
                            <li><a href="#!">Stop</a></li>
                            </ul>
                        </div>
                        <div class="responsive-table" >
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

                    <div class="col s12 m12 l12" id="applyMinstanceDataOverallSkel">
                        <h4 class="card-title" style="position: absolute;"><?php echo $language_data['minsl_title']; ?></h4>
                        <div class="table-header-search animate" id="filter-btn-skeleton-secmins"></div>
                        <div class="filter-btn" style="display:none;">
                            <!-- Dropdown Trigger -->
                            <a class='dropdown-trigger btn waves-effect waves-light export-bg border-round filter-btn' href='#'
                            data-target='btn-filter'>
                            <span class="hide-on-small-only">Filter</span>
                            <i class="material-icons">keyboard_arrow_down</i>
                            </a>
                           
                            <ul id='btn-filter' class='dropdown-content'>
                            <li><a href="#!">Running</a></li>
                            <li><a href="#!">Stop</a></li>
                            </ul>
                        </div>
                        <div class="responsive-table" >
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
                  <!--Data Instant Found -->
                </div>
              </div>
            </div>
          </div>
        </div>