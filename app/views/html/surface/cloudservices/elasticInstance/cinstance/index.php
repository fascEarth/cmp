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
            if($_POST['from'] == "cinstance"){
                $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_cinstance_finalbtn']);           
            }        
          }
          
    if($_POST['portalsubmit'] == 'level_2'){
       // print_r($_POST);
        if(isset($_POST['specialData']) && !empty($_POST['specialData'])){
            $fdata = (array) json_decode($_POST['specialData']);
        //print_r($fdata);exit;
        $_POST['data'] = $fdata;
        }
        
        $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
            $data = "";

            $platformAddr = "";
            if(isset($_POST['data']['platformid']) && !empty($_POST['data']['platformid'])){
                $platformAddr = "&platformid=".$_POST['data']['platformid'];
            }

            $datacenteridAddr = "";

            
            if(isset($_POST['data']['datacenterid']) && !empty($_POST['data']['datacenterid'])){
                $datacenteridAddr = "&datacenterid=".$_POST['data']['datacenterid'];
            }

            
            
            
            $cloudservertypeidAddr = "";
            if(isset($_POST['data']['cloudservertypeid']) && !empty($_POST['data']['cloudservertypeid'])){
                $cloudservertypeidAddr = "&cloudservertypeid=".$_POST['data']['cloudservertypeid'];
            }

            
            
            $cloudserveridAddr = "";
            if(isset($_POST['data']['cloudserverid']) && !empty($_POST['data']['cloudserverid'])){
                $cloudserveridAddr = "&cloudserverid=".$_POST['data']['cloudserverid'];
            }

            

            $sizingpolicygroupidAddr = "";
            if(isset($_POST['data']['sizingpolicygroupid']) && !empty($_POST['data']['sizingpolicygroupid'])){
                $sizingpolicygroupidAddr = "&sizingpolicygroupid=".$_POST['data']['sizingpolicygroupid'];
            }


            $sizingpolicyidAddr = "";
            if(isset($_POST['data']['sizingpolicyid']) && !empty($_POST['data']['sizingpolicyid'])){
                $sizingpolicyidAddr = "&sizingpolicyid=".$_POST['data']['sizingpolicyid'];
            }

            

            
            $posturl = $webAPI."/dcc/api/vms/getinitadd?".$vccommQueryParam."".$platformAddr."".$datacenteridAddr."".$cloudservertypeidAddr."".$cloudserveridAddr."".$sizingpolicygroupidAddr."".$sizingpolicyidAddr;
            //print_r($posturl);exit;
            $result = $curlPHPhelp->curl_GET_Auth($posturl,$data);
            $final_result = $result;
            $final_result['url'] = $posturl;
            echo json_encode($final_result);exit;
    }else if($_POST['portalsubmit'] == 'level_1'){
            
        

            
            
            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
            $data = (array)json_decode($_POST['data']);
            
            $ipAddress = $_SERVER['REMOTE_ADDR'];
            $userserialid = $_POST['user_serial_id'];
            $posturl = $webAPI."/dcc/api/vms/addvm?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_POST_Auth_json($posturl,$data);
            $final_result = $result;
            $final_result['queries'] = $posturl;
            echo json_encode($final_result);exit;



            
        }    

        }
    }
}

?>