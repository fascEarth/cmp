<?php
require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/backend.php';
   

if($_POST){
  if(isset($_POST) && !empty($_POST)){

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
        if($_POST['from'] == "billingsettings"){
            $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_billingSettings']);           
        }        
      }

      if($_POST['portalsubmit'] == 'level_8'){

        

        $env = $configurations['app_conn_env'];
        $conn = $configurations['app_conn'];
        $webservAddress = $conn[$env]['webServices'];
        $webAPI = $webservAddress[1];

        
        $geturl = $webAPI."/dcc/api/billing/updatebillingcontact"."?".$vccommQueryParam;
        $postData = json_decode($_POST['data']);
        $final_result = $curlPHPhelp->curl_PUT_Auth($geturl,$postData);
        echo json_encode($final_result);exit;  

      }else if($_POST['portalsubmit'] == 'level_7'){
        $env = $configurations['app_conn_env'];
        $conn = $configurations['app_conn'];
        $webservAddress = $conn[$env]['webServices'];
        $webAPI = $webservAddress[1];
       // $data = (array)json_decode($_POST['data']);
        
        
        $posturl = $webAPI."/dcc/api/billing/getbillingcontact/".$_POST['tenantId']."?".$vccommQueryParam;
        $result = $curlPHPhelp->curl_GET_Auth($posturl,array());
        $final_result = $result;
        
        echo json_encode($final_result);exit;

      }else if($_POST['portalsubmit'] == 'level_6'){

        $env = $configurations['app_conn_env'];
        $conn = $configurations['app_conn'];
        $webservAddress = $conn[$env]['webServices'];
        $webAPI = $webservAddress[1];
       // $data = (array)json_decode($_POST['data']);
        
        
        $posturl = $webAPI."/dcc/api/billing/getbilling/".$_POST['user_serial_id']."?".$vccommQueryParam;
        $result = $curlPHPhelp->curl_GET_Auth($posturl,array());
        $final_result = $result;
        
        echo json_encode($final_result);exit;


    }else if($_POST['portalsubmit'] == 'level_5'){
        $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
            
            $posturl = $webAPI."/dcc/api/payments/deletecart/".$_POST['cardId']."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_DELETE_Auth($posturl,[]);
            $final_result = $result;
            
            echo json_encode($final_result);exit;
      }else if($_POST['portalsubmit'] == 'level_4'){
        $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
            
            $posturl = $webAPI."/dcc/api/payments/activecart/".$_POST['tenantId']."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_PUT_Auth_string($posturl,$_POST['cardId']);
            $final_result = $result;
            
            echo json_encode($final_result);exit;
      }else if($_POST['portalsubmit'] == 'level_3'){
        $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];

            //$_POST['tenantid'];
            //$_POST['userserialid'];
            $posturl = $webAPI."/dcc/api/payments/status/".$_POST['cartId'].'?'.$vccommQueryParam;
            //$posturl = $webAPI."/dcc/api/payments/status/".$_POST['cartId'];
            $result = $curlPHPhelp->curl_GET_Auth($posturl,[]);
            $final_result = $result;
            
            echo json_encode($final_result);exit;
    }else if($_POST['portalsubmit'] == 'level_2'){
     
        $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
            $data = (array)json_decode($_POST['data']);
            $data['paymentDomain'] = $_SERVER['HTTP_HOST'];
            $posturl = $webAPI."/dcc/api/payments"."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_POST_Auth_json($posturl,$data);
            /*$final_result = [];
            if(isset($result) && !empty($result)){

            } */  
            echo json_encode($result);exit;

    }else if($_POST['portalsubmit'] == 'level_1'){
            
            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
           // $data = (array)json_decode($_POST['data']);
            
            
            $posturl = $webAPI."/dcc/api/payments/getallcards/".$_POST['tenantId']."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_GET_Auth($posturl,array());
            $final_result = $result;
            
            echo json_encode($final_result);exit;



            
        }    

        }
    }
}

?>