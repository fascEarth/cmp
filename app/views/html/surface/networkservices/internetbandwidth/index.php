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
            if($_POST['from'] == "nsinternetw"){
                $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_ns_internetbth']);           
            }        
          }
    if($_POST['portalsubmit'] == 'level_2'){  
        $env = $configurations['app_conn_env'];
        $conn = $configurations['app_conn'];
        $webservAddress = $conn[$env]['webServices'];
        $webAPI = $webservAddress[1];

        
        $geturl = $webAPI."/dcc/api/bandwidth/setbandwidth?".$vccommQueryParam;
        $postData = $_POST['data'];
        
        $final_result = $curlPHPhelp->curl_PUT_Auth($geturl,$postData);
        echo json_encode($final_result);exit;  
    }else if($_POST['portalsubmit'] == 'level_1'){
        
        $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
            $data = ""; 
            $posturl = $webAPI."/dcc/api/bandwidth/getallbandwidth?".$vccommQueryParam;
            
            $result = $curlPHPhelp->curl_GET_Auth($posturl,$data);
            $final_result = $result;
            $final_result['url'] = $posturl;
            echo json_encode($final_result);exit;
    }    

        }
    }
}

?>