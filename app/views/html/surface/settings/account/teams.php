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
    //print_r($_POST);exit;
    
    if(isset($_POST['portal']) && !empty($_POST['portal'])){

        if(isset($_POST['from']) && !empty($_POST['from'])){
            if($_POST['from'] == "accounts"){
                $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_surfAccounts']);           
            }
            
        }

        
        $env = $configurations['app_conn_env'];
        $conn = $configurations['app_conn'];
        $webservAddress = $conn[$env]['webServices'];
        $webAPI = $webservAddress[1];
        if($_POST['portalsubmit'] == 'level_7'){  
            $geturl = $webAPI."/dcc/api/team/deleteteam/".$_POST['teamId']."?".$vccommQueryParam;
            $postData = "";
            
            $final_result = $curlPHPhelp->curl_DELETE_Auth($geturl,$postData);
            
            echo json_encode($final_result);exit; 
        }else if($_POST['portalsubmit'] == 'level_6'){  
            $geturl = $webAPI."/dcc/api/user/setstatus/".$_POST['teamId']."?".$vccommQueryParam;
            $postData = json_decode($_POST['data']);
            
            $final_result = $curlPHPhelp->curl_POST_Auth_json_sp($geturl,$postData);
            
            echo json_encode($final_result);exit; 
        }else if($_POST['portalsubmit'] == 'level_5'){  
            $geturl = $webAPI."/dcc/api/team/updateteam"."?".$vccommQueryParam;
                        $postData = json_decode($_POST['data']);
                        
                        $final_result = $curlPHPhelp->curl_PUT_Auth($geturl,$postData);
                        
                        echo json_encode($final_result);exit;         
        }else if($_POST['portalsubmit'] == 'level_4'){  
            $geturl = $webAPI."/dcc/api/team/addteam"."?".$vccommQueryParam;
                        $postData = json_decode($_POST['data']);
                        
                        $final_result = $curlPHPhelp->curl_POST_Auth_json($geturl,$postData);
                        
                        echo json_encode($final_result);exit;    
        }else if($_POST['portalsubmit'] == 'level_3'){           
            $posturl = $webAPI."/dcc/api/team/getteam/".$_POST['teamId']."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            $final_result = $result;
           
            echo json_encode($final_result);exit;
        }else if($_POST['portalsubmit'] == 'level_2'){      
            $posturl = $webAPI."/dcc/api/team/getinitadd?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            $final_result = $result;
           
            echo json_encode($final_result);exit;

        }else if($_POST['portalsubmit'] == 'level_1'){
            $start = $_POST['start'];
            $length = $_POST['length'];
            $searchKeywords = "";
            if(isset($_POST['search']['value']) && !empty($_POST['search']['value'])){
                $searchKeywords = "&search=".$_POST['search']['value'];
            }


            $posturl = $webAPI."/dcc/api/team/getallteams?".$vccommQueryParam."&start=".$start."&length=".$length."".$searchKeywords."".commonTableSortingParam($_POST);
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            $final_result = $result;
            $final_result['query'] = $posturl;
            echo json_encode($final_result);exit;
            
        }    

        }
    }
}

?>