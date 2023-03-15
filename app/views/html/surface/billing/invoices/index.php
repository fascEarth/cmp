<?php
require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/backend.php';
   

if($_POST){
  if(isset($_POST) && !empty($_POST)){
    //print_r($_POST);
    $cpost = array_map(function($v){
            
        $itype = gettype($v); 
        
        if($itype == "string"){
            $v = trim(strip_tags($v));
        }
        return $v;
    }, $_POST);

    $_POST = $cpost;

    
    if(isset($_POST['portal']) && !empty($_POST['portal'])){

        if(isset($_POST['from']) && !empty($_POST['from'])){
            if($_POST['from'] == "invoices"){
                $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_invoices_status']);           
            }else if($_POST['from'] == "away"){
                $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_common_formSubmit']);           
                
            }else{
                return false;
            }

        }
        if($_POST['portalsubmit'] == 'level_5'){
            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
                 



            $posturl = $webAPI."/dcc/api/invoice/getinvoiceestimate?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            
            $final_result = $result;
           
            echo json_encode($final_result);exit;

        }else if($_POST['portalsubmit'] == 'level_4'){
            $env = $configurations['app_conn_env'];
                $conn = $configurations['app_conn'];
                $webservAddress = $conn[$env]['webServices'];
                $webAPI = $webservAddress[1];
    
                //$_POST['tenantid'];
                //$_POST['userserialid'];
                $posturl = $webAPI."/dcc/api/payments/payinvoicestatus/".$_POST['cartId']."?".$vccommQueryParam;
                //$posturl = $webAPI."/dcc/api/payments/status/".$_POST['cartId'];
                $result = $curlPHPhelp->curl_GET_Auth($posturl,[]);
                $final_result = $result;
                
                echo json_encode($final_result);exit;
        }else if($_POST['portalsubmit'] == 'level_3'){
     
            $env = $configurations['app_conn_env'];
                $conn = $configurations['app_conn'];
                $webservAddress = $conn[$env]['webServices'];
                $webAPI = $webservAddress[1];
                $data = (array)json_decode($_POST['data']);
                $data['paymentDomain'] = $_SERVER['HTTP_HOST'];
                $posturl = $webAPI."/dcc/api/payments/payinvoice"."?".$vccommQueryParam;
                $result = $curlPHPhelp->curl_POST_Auth_json($posturl,$data);
                /*$final_result = [];
                if(isset($result) && !empty($result)){
    
                } */  
                echo json_encode($result);exit;

            }else if($_POST['portalsubmit'] == 'level_2'){
            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
                 
            $posturl = $webAPI."/dcc/api/invoice/getinvoicepath/".$_POST['invoice_id']."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            $final_result = $result;
           // $actual_link = "http://$_SERVER[HTTP_HOST]";
             //   $address = json_decode($final_result['data'])->message;                       


            echo json_encode($final_result);exit;
        }else if($_POST['portalsubmit'] == 'level_1'){    
            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
                 

            $start = $_POST['start'];
            $length = $_POST['length'];
            $searchKeywords = "";
            if(isset($_POST['search']['value']) && !empty($_POST['search']['value'])){
                $searchKeywords = "&search=".$_POST['search']['value'];
            }

            $customFilterKeyWords = "";
            if(isset($_POST['customFilter']) && !empty($_POST['customFilter'])){
                $customFilterKeyWords = "&invoicefilter=".$_POST['customFilter'];
            }

            

            $posturl = $webAPI."/dcc/api/invoice/getallinvoices?".$vccommQueryParam."&start=".$start."&length=".$length."".$searchKeywords."".$customFilterKeyWords."".commonTableSortingParam($_POST);
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            /*$fadata = array(
                "data" => array(
                    array(
                        "invoiceId" => 1,
                    "tenantId" => 1,
                    "invoiceNo" => "INV-0101",
                    "invoiceDate" => "18-10-2022",
                    "invoiceAmount" => "100",
                    "invoiceBalance" => "0",
                    "invoicePaymentMethod" => "Credit Card",
                    "invoiceStatus" => "PAID",
                    "sapCustomerId" => null
                    ),
                    array(
                        "invoiceId" => 1,
                    "tenantId" => 1,
                    "invoiceNo" => "INV-0101",
                    "invoiceDate" => "18-10-2022",
                    "invoiceAmount" => "100",
                    "invoiceBalance" => "0",
                    "invoicePaymentMethod" => "Credit Card",
                    "invoiceStatus" => "PAID",
                    "sapCustomerId" => null
                    )
                ),
                "error"=> null,
                "recordsSize"=> 2,
                "totalRecords"=> 2
            );
            $result = array(
                'status' => 'success',
								'code' => "200",
								'data' => json_encode($fadata)
            );*/
            $final_result = $result;
            $final_result['query'] = $posturl;
            echo json_encode($final_result);exit;



            
        }    

        }
    }
}

?>