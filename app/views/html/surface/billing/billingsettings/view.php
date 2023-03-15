<?php

require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/backend.php';


$_SESSION['token_illustrate_billingSettings'] =(
    (
      isset($_SESSION['token_illustrate_billingSettings']) 
      && 
      !empty($_SESSION['token_illustrate_billingSettings'])
    )
    ?
    $_SESSION['token_illustrate_billingSettings']
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
<link rel="stylesheet" type="text/css" href="app/views/html/surface/billing/billingsettings/index.css">
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
    top: 10px;
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
  
  /************* Payment Method ************/
  .payment-method-skeleton .payment-method-header { 
    width: 175px;
    height: 12px;
    position: relative;
    background: #8d8d8d;
    border-radius: 5px;
  }
  .payment-method-skeleton .checkmark-circle-skeleton {
    width: 40px;
    height: 40px;
    background: #8d8d8d;
    border-radius: 50%;
  }
  .payment-method-skeleton .credit-card-skeleton {
    width: 245px;
    height: 150px;
    background: #8d8d8d;
    border-radius: 20px;
    margin: 0 auto;
  }
  .payment-method-skeleton .credit-card-input {
    width: 100%;
    height: 47px;
    position: relative;
    background: #8d8d8d;
    border-radius: 7px;
    margin-bottom: 8px;
  }
  .payment-method-skeleton .payment-method-p {
    width: 650px;
    height: 12px;
    position: relative;
    background: #8d8d8d;
    border-radius: 5px;
  }
  .payment-method-skeleton .animate {
    animation: shimmer 2s infinite linear;
    background: linear-gradient(to right, #efefef 4%, #f5f5f5 25%, #f5f5f5 36%);
    background-size: 1000px 100%;
  }
</style>
<div class="content-wrapper-before gradient-45deg-indigo-purple"></div>
<div class="breadcrumbs-dark pb-0" id="breadcrumbs-wrapper">

<input type="hidden" id="establish_surfbillingSettings" value="<?php echo $_SESSION['token_illustrate_billingSettings']; ?>" >

    <!-- Search for small screen-->
    <div class="container">
    <div class="row">
        <div class="col s10 m6 l6">
        <h5 class="breadcrumbs-title mt-0 mb-0"><span>Billing Settings</span></h5>
        </div>
    </div>
    </div>
</div>
<div class="col s12" id="billingsettings_common_org" style="display:none;">
    <div class="container">
        <div class="section section-data-tables">
            <div class="card border-radius-10">
                <div class="card-content tab-card">
                    <div class="row">
                        <div class="col s12">
                            <ul class="tabs tabs-fixed-width">
                                <li id="tabpaymentmethod" onClick="surfCpaymeth()" class="tab"><a id="tabpaymentmethodhead" class="commonheadbill active" href="#payment-method">Payment Method</a></li>
                                <li id="tabbillingaddress" onClick="surfCbillAddr()" class="tab"><a id="tabbillingaddresshead" class="commonheadbill" href="#billing-address">Billing Address</a></li>
                                <li id="tabbillingcontact" onClick="surfCbillCont()" class="tab"><a  id="tabbillingcontacthead" class="commonheadbill" href="#billing-contact">Billing Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card border-radius-10">
                <div class="card-content">
                    <div class="row" >
                        <div id="payment-method" class="col s12" style="display:none;"> 
                            <div class="row" id="paymethod_org" style="display:none;">
                                <div class="col s12">
                                    <h4 class="card-title mb-0">Credit/Debit Card</h4>
                                    <ul class="credit-card-tab tabs tabspayments">
                                        <li class="tab disabled"><a href="#bank-transfer" class="pr-0">Bank Transfer
                                        </a></li>
                                        <li class="tab "><a class="active" href="#credit-card-tab">Credit Card</a></li>
                                    </ul>
                                </div>
                                <div class="col s12 mt-2">
                                    <div id="credit-card-tab" class="col s12 pl-0 pr-0">
                                        <div id="credit-card-inside-view">

                                            <div class="row">
                                                <div class="col s12">
                                                <div class="card border-radius-10 credit-card-active">
                                                    <div class="card-content">
                                                        <h4 class="card-title mb-0 blue-text">Default</h4>
                                                        <div class="row">
                                                            
                                                            <div class="col s12 m8 l4">
                                                                <div class="credit-container preload">
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
                                                            </div>
                                                            <div class="col s12 m12 l7">
                                                                <div class="row">
                                                                    <h3>Cards Loading...</h3>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                </div>

                                        <!--
                                        <div class="row">
                                        <div class="col s12">
                                        <div class="card border-radius-10 credit-card-active">
                                            <div class="card-content">
                                                <h4 class="card-title mb-0 blue-text">Primary</h4>
                                                <div class="row">
                                                    <div class="col s12 m4 l1 hide-on-small-only">
                                                        <i class="material-icons dp48 fs-40 credit-card-check check-mark-active">check_circle</i>
                                                    </div>
                                                    <div class="col s12 m8 l4">
                                                        <div class="credit-container preload">
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
                                                    </div>
                                                    <div class="col s12 m12 l7">
                                                        <div class="row">
                                                            <div class="col s12 input-field input-outlined mb-0">
                                                                <input id="cardnumber" type="text" class="validate" value="" pattern="[0-9]*" inputmode="numeric">
                                                                <label for="cardnumber">Card Number</label>
                                                            </div>
                                                            <div class="col s12 m8 l8 input-field input-outlined">
                                                                <input id="name" type="text" class="validate" value="">
                                                                <label for="name">Name on Card</label>
                                                            </div>
                                                            <div class="col s12 m4 l4 input-field input-outlined">
                                                                <input id="expirationdate" type="text" class="validate" value="" pattern="[0-9]*" inputmode="numeric">
                                                                <label for="expirationdate">Expiry</label>
                                                            </div>
                                                            <div class="col s12 hide">
                                                                <i class="material-icons dp48 credit-card-delete fs-24 cursor-pointer">delete</i>
                                                            </div>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                        -->
                                        <!--
                                        <div class="row">
                                        <div class="col s12">
                                        <div class="card border-radius-10">
                                            <div class="card-content">
                                                <h4 class="card-title mb-0 blue-text">Secondary</h4>
                                                <div class="row">
                                                    <div class="col s12 m4 l1 hide-on-small-only">
                                                        <i class="material-icons dp48 fs-40 credit-card-check check-mark-active">check_circle</i>
                                                    </div>
                                                    <div class="col s12 m8 l4">
                                                        <div class="credit-container preload">
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
                                                    </div>
                                                    <div class="col s12 m12 l7">
                                                        <div class="row">
                                                            <div class="col s12 input-field input-outlined mb-0">
                                                                <input id="cardnumber1" type="text" class="validate" value="" pattern="[0-9]*" inputmode="numeric">
                                                                <label for="cardnumber1">Card Number</label>
                                                            </div>
                                                            <div class="col s12 m8 l8 input-field input-outlined">
                                                                <input id="name1" type="text" class="validate" value="">
                                                                <label for="name1">Name on Card</label>
                                                            </div>
                                                            <div class="col s12 m4 l4 input-field input-outlined">
                                                                <input id="expirationdate1" type="text" class="validate" value="" pattern="[0-9]*" inputmode="numeric">
                                                                <label for="expirationdate1">Expiry</label>
                                                            </div>
                                                            <div class="col s12">
                                                                <i class="material-icons dp48 credit-card-delete fs-24 cursor-pointer">delete</i>
                                                            </div>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                        -->

                                        </div>

                                        <div class="row" id="secondaryPaymBtn" style="display:none;">
                                        <div class="col s12 center">
                                        <button onClick="modalPaymentInfo('secondary')" class="btn waves-effect waves-light gradient-45deg-light-blue-cyan border-round mt-2">ADD SECONDARY CARD</button>
                                        </div>
                                        </div>
                                    </div>
                                    <div id="bank-transfer" class="col s12" style="display:none;">bank-transfer</div>
                                </div>
                            </div>

                            <div class="row payment-method-skeleton " id="paymethod_disp">
                                <div class="col s12">
                                    <h4 class="card-title mb-0 payment-method-header animate"></h4>
                                   <!-- <ul class="credit-card-tab tabs card-tab-skeleton">
                                        <li class="tab"><div class="tab-heading-skeleton animate" style="top: 0;"></div></li>
                                        <li class="tab mr-3"><div class="tab-heading-skeleton animate" style="top: 0;"></div></li>
                                    </ul>-->
                                </div>
                                <div class="col s12 mt-2 payment-method-skeleton">
                                    <div id="credit-card-tab" class="col s12 pl-0 pr-0">
                                        <div class="row">
                                            <div class="col s12">
                                                <div class="card border-radius-10 credit-card-active">
                                                    <div class="card-content">
                                                        <h4 class="card-title mb-3 payment-method-header animate"></h4>
                                                        <div class="row">
                                                            <div class="col s12 m4 l1 hide-on-small-only">
                                                                <div class="credit-card-check check-mark-active">
                                                                    <div class="checkmark-circle-skeleton animate"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col s12 m8 l4">
                                                                <div class="credit-card-skeleton animate"></div>
                                                            </div>
                                                            <div class="col s12 m12 l7">
                                                                <div class="row">
                                                                    <div class="col s12 input-field input-outlined mb-0 input-name-sm">
                                                                        <div class="credit-card-input animate"></div>
                                                                    </div>
                                                                    <div class="col s12 m8 l8 input-field input-outlined">
                                                                        <div class="credit-card-input animate"></div>
                                                                    </div>
                                                                    <div class="col s12 m4 l4 input-field input-outlined">
                                                                        <div class="credit-card-input animate"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col s12">
                                                <div class="card border-radius-10">
                                                    <div class="card-content">
                                                        <h4 class="card-title mb-3 payment-method-header animate"></h4>
                                                        <div class="row">
                                                            <div class="col s12 m4 l1 hide-on-small-only">
                                                                <div class="credit-card-check check-mark-active">
                                                                    <div class="checkmark-circle-skeleton animate"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col s12 m8 l4">
                                                                <div class="credit-card-skeleton animate"></div>
                                                            </div>
                                                            <div class="col s12 m12 l7">
                                                                <div class="row">
                                                                    <div class="col s12 input-field input-outlined mb-0">
                                                                        <div class="credit-card-input animate"></div>
                                                                    </div>
                                                                    <div class="col s12 m8 l8 input-field input-outlined">
                                                                        <div class="credit-card-input animate"></div>
                                                                    </div>
                                                                    <div class="col s12 m4 l4 input-field input-outlined">
                                                                        <div class="credit-card-input animate"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col s12 center">
                                                <button class="btn animate border-round mt-2" style="width: 300px;"></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="billing-address" class="col s12" style="display:none;"> 
                            <div id="billing-address-note" style="display:none;">
                            <h4 class="card-title billing-heading-sm mb-0">Billing Address</h4>
                            <div class="row mt-2">
                                <div class="col s12">
                                    <div class="row margin">
                                        <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                            <input id="surf_bs_buildingNumber" name="buildingNumber" type="text" class="validate">
                                            <label id="surf_bs_buildingNumber_label" for="surf_bs_buildingNumber">Building Number</label>
                                        </div>
                                        <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                            <input id="surf_bs_street" name="street" type="text" class="validate">
                                            <label id="surf_bs_street_label" for="surf_bs_street">Street / Road</label>
                                        </div>
                                        <div class="col s12 m6 l6 input-field input-outlined mt-1">
                                            <input id="surf_bs_zipCode" name="surf_bs_zipCode" type="text" class="validate">
                                            <label id="surf_bs_zipCode_label" for="surf_bs_zipCode">Postal / Zip Code</label>
                                        </div>
                                        <div class="col s12 m6 l6 input-field input-outlined mt-1">
                                            <input id="surf_bs_postBox" name="postBox" type="text" class="validate">
                                            <label id="surf_bs_postBox_label" for="surf_bs_postBox">P.O. Box</label>
                                        </div>
                                        <div class="col s12 m6 l6 input-field mt-1">
                                            <select id="surf_bs_city" name="city">
                                            <option value="" disabled selected>City</option>
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
                                        </div>
                                        <div class="col s12 m6 l6 input-field mt-1">
                                            <select id="surf_bs_country" name="country">
                                            <option value="" disabled selected>Country</option>
                                            <option value="Saudi Arabia (KSA)">Saudi Arabia (KSA)</option>
                                            </select>
                                        </div>
                                        <input type="hidden" name="billingId" id="surf_bs_billingId" >
                                    </div>
                                </div>
                            </div>
                            </div>

                            <div class="payment-method-skeleton" id="billing-address-skel">
                                <h4 class="card-title mb-3 billing-heading-sm payment-method-header animate"></h4>
                                <div class="row mt-2">
                                    <div class="col s12">
                                        <div class="row margin">
                                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                                <div class="credit-card-input animate"></div>
                                            </div>
                                            <div class="col s12 m6 l6 input-field input-outlined mt-0">
                                                <div class="credit-card-input animate"></div>
                                            </div>
                                            <div class="col s12 m6 l6 input-field input-outlined mt-1">
                                                <div class="credit-card-input animate"></div>
                                            </div>
                                            <div class="col s12 m6 l6 input-field input-outlined mt-1">
                                                <div class="credit-card-input animate"></div>
                                            </div>
                                            <div class="col s12 m6 l6 input-field mt-1">
                                                <div class="credit-card-input animate"></div>
                                            </div>
                                            <div class="col s12 m6 l6 input-field mt-1">
                                                <div class="credit-card-input animate"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div id="billing-contact" class="col s12" style="display:none;"> 

                            <div id="billing-contact-note" style="display:none;" >
                                <h4 class="card-title mb-0">Billing Email Contact</h4>
                                <p class="mt-1">You can add a billing contact if you want invoices to be sent to a specific address each month.</p>

                                <form class="mt-3" id="sur_acc_billingCon_form" method="post"  enctype="multipart/form-data" autocomplete="off">
                                <div class="row border-bottom-1">
                                    <div class="col s12 m6 l5 input-field input-outlined mt-2">
                                        <input id="sur_acc_billingCon_billingEmail" name="billingEmail" type="text" class="validate">
                                        <label id="sur_acc_billingCon_billingEmail_label" for="sur_acc_billingCon_billingEmail">Billing Email Address</label>
                                    </div>
                                </div>
                                <h4 class="card-title mt-2 mb-0">Enable Billing Alerts</h4>
                                <p class="mt-1">Configure automated billing alerts to receive emails when a specified estimated cost is reached.</p>
                                <div class="row">
                                    <div class="col s12 m1 l1 input-field input-outlined mt-2">
                                        <div class="switch">
                                            <label>
                                            <input id="sur_acc_billingCon_billingAlert" name="sur_acc_billingCon_billingAlert" type="checkbox">
                                            <span class="lever"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col s9 m5 l4 input-field input-outlined mt-2">
                                        <input id="sur_acc_billingCon_billingEstimate" name="billingEstimate" type="text" class="validate">
                                        <label id="sur_acc_billingCon_billingEstimate_label" for="sur_acc_billingCon_billingEstimate">Set Estimated Billing Amount</label>
                                    </div>
                                    <div class="col s3 m2 l2 input-field input-outlined mt-2">
                                        <div class="billing-sar">SAR</div>
                                    </div>


                                    <div class="col s12">
                                        <input type="hidden" id="sur_acc_billingCon_billingContactId" name="billingContactId">
                                        <input type="hidden" id="sur_acc_billingCon_tenantId" name="tenantId">
                                        <button   id="sur_acc_profileid_form_submit" type="submit" class="btn form-btn waves-effect waves-light gradient-45deg-light-blue-cyan float-right">SAVE</button>
                                    </div>
                                    

                                </div>
                                </form>
                            </div>

                            <div class="payment-method-skeleton " id="billing-contact-skel">
                                <h4 class="card-title card-title mb-0 payment-method-header animate"></h4>
                                <p class="mt-2 payment-method-p animate"></p>
                                <div class="row border-bottom-1 mt-2">
                                    <div class="col s12 m6 l5 input-field input-outlined mt-2">
                                        <div class="credit-card-input animate"></div>
                                    </div>
                                </div>
                                <h4 class="card-title mt-3 card-title mb-0 enable-billing-sm payment-method-header animate"></h4>
                                <p class="mt-2 payment-method-p animate"></p>
                                <div class="row">
                                    <div class="col s12 m1 l1 input-field input-outlined mt-2">
                                        <div class="credit-card-input animate"></div>
                                    </div>
                                    <div class="col s9 m5 l4 input-field input-outlined mt-2">
                                        <div class="credit-card-input animate"></div>
                                    </div>
                                    <div class="col s3 m2 l2 input-field input-outlined mt-2">
                                        <div class="billing-sar credit-card-input animate"></div>
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

<div class="col s12" id="billingsettings_common_skel">
   <div class="container">
      <div class="section section-data-tables">
      <div class="card border-radius-10 card-tab-skeleton ">
            <div class="card-content tab-card">
                <div class="row">
                    <div class="col s12">
                    <ul class="tabs tabs-fixed-width">
                        <li class="tab"><a class="animate active"></a></li>
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
                     <div class="row payment-method-skeleton " >
                        <div class="col s12">
                           <h4 class="card-title mb-0 payment-method-header animate"></h4>
                           <!-- <ul class="credit-card-tab tabs card-tab-skeleton">
                              <li class="tab"><div class="tab-heading-skeleton animate" style="top: 0;"></div></li>
                              <li class="tab mr-3"><div class="tab-heading-skeleton animate" style="top: 0;"></div></li>
                              </ul>-->
                        </div>
                        <div class="col s12 mt-2 payment-method-skeleton">
                           <div id="credit-card-tab" class="col s12 pl-0 pr-0">
                              <div class="row">
                                 <div class="col s12">
                                    <div class="card border-radius-10 credit-card-active">
                                       <div class="card-content">
                                          <h4 class="card-title mb-3 payment-method-header animate"></h4>
                                          <div class="row">
                                             <div class="col s12 m4 l1 hide-on-small-only">
                                                <div class="credit-card-check check-mark-active">
                                                   <div class="checkmark-circle-skeleton animate"></div>
                                                </div>
                                             </div>
                                             <div class="col s12 m8 l4">
                                                <div class="credit-card-skeleton animate"></div>
                                             </div>
                                             <div class="col s12 m12 l7">
                                                <div class="row">
                                                   <div class="col s12 input-field input-outlined mb-0 input-name-sm">
                                                      <div class="credit-card-input animate"></div>
                                                   </div>
                                                   <div class="col s12 m8 l8 input-field input-outlined">
                                                      <div class="credit-card-input animate"></div>
                                                   </div>
                                                   <div class="col s12 m4 l4 input-field input-outlined">
                                                      <div class="credit-card-input animate"></div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col s12">
                                    <div class="card border-radius-10">
                                       <div class="card-content">
                                          <h4 class="card-title mb-3 payment-method-header animate"></h4>
                                          <div class="row">
                                             <div class="col s12 m4 l1 hide-on-small-only">
                                                <div class="credit-card-check check-mark-active">
                                                   <div class="checkmark-circle-skeleton animate"></div>
                                                </div>
                                             </div>
                                             <div class="col s12 m8 l4">
                                                <div class="credit-card-skeleton animate"></div>
                                             </div>
                                             <div class="col s12 m12 l7">
                                                <div class="row">
                                                   <div class="col s12 input-field input-outlined mb-0">
                                                      <div class="credit-card-input animate"></div>
                                                   </div>
                                                   <div class="col s12 m8 l8 input-field input-outlined">
                                                      <div class="credit-card-input animate"></div>
                                                   </div>
                                                   <div class="col s12 m4 l4 input-field input-outlined">
                                                      <div class="credit-card-input animate"></div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col s12 center">
                                    <button class="btn animate border-round mt-2" style="width: 300px;"></button>
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