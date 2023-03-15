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
            if($_POST['from'] == "minstance"){
                $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_minstance_status']);           
            }else if($_POST['from'] == "away"){
                $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_common_formSubmit']);           
                
            }else{
                return false;
            }

        }
        if($_POST['portalsubmit'] == 'level_4'){

            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
            
            
            $posturl = $webAPI."/dcc/api/vms/deletevm/".$_POST['tenantvmid']."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_DELETE_Auth($posturl,[]);
            $final_result = $result;
            
            

           
            echo json_encode($final_result);exit;
        }else if($_POST['portalsubmit'] == 'level_3'){
            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
                 
            $posturl = $webAPI."/dcc/api/vms/vmretry/".$_POST['tenantvmid']."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            $final_result = $result;
            $final_result['url'] =  $posturl;
           
            echo json_encode($final_result);exit;
        }else if($_POST['portalsubmit'] == 'level_2'){
            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
                 
            $posturl = $webAPI."/dcc/api/vms/getvmtenantid/".$_POST['tenant_id']."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            $final_result = $result;
           
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

            $posturl = $webAPI."/dcc/api/vms/getvmtenantid/".$_POST['tenant_id']."?".$vccommQueryParam."&start=".$start."&length=".$length."".$searchKeywords."".commonTableSortingParam($_POST);
            
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            $final_result = $result;
            $final_result['query'] = $posturl;
            echo json_encode($final_result);exit;



            
        }    

        }
    }
}

?>