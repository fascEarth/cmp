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
            } else if($_POST['from'] == "security"){

                $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_surfSecResetPwd']);           
            }
            
        }

        
        $env = $configurations['app_conn_env'];
        $conn = $configurations['app_conn'];
        $webservAddress = $conn[$env]['webServices'];
        $webAPI = $webservAddress[1];
        if($_POST['portalsubmit'] == 'level_7'){

            


            $posturl = $webAPI."/dcc/api/user/mfadisable/".$_POST['userserialid']."?".$vccommQueryParam;
            
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            $final_result = $result;
           
            echo json_encode($final_result);exit;
        }else if($_POST['portalsubmit'] == 'level_6'){
            $env = $configurations['app_conn_env'];
                $conn = $configurations['app_conn'];
                $webservAddress = $conn[$env]['webServices'];
                $webAPI = $webservAddress[1];
                
                $posturl = $webAPI."/dcc/api/sshkey/deletesshkey/".$_POST['sshKeyId']."?".$vccommQueryParam;
                $result = $curlPHPhelp->curl_DELETE_Auth($posturl,[]);
                $final_result = $result;
                
                echo json_encode($final_result);exit;
        }else if($_POST['portalsubmit'] == 'level_5'){


            $start = $_POST['start'];
            $length = $_POST['length'];
            $searchKeywords = "";
            if(isset($_POST['search']['value']) && !empty($_POST['search']['value'])){
                $searchKeywords = "&search=".$_POST['search']['value'];
            }


           


           


            $posturl = $webAPI."/dcc/api/event/getallevents?".$vccommQueryParam."&eventtype=".$_POST['eventtype']."&start=".$start."&length=".$length."".$searchKeywords."".commonTableSortingParam($_POST);
            $data = array(
                "DEFAULT" => $_POST['eventtype']
            );
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            
            $final_result = $result;
            $final_result["url"] = $posturl;
           
            echo json_encode($final_result);exit;

        }else if($_POST['portalsubmit'] == 'level_4'){

            

            $geturl = $webAPI."/dcc/api/user/updateuserpassword"."?".$vccommQueryParam;
            $postData = json_decode($_POST['data']);
                
                $final_result = $curlPHPhelp->curl_PUT_Auth($geturl,$postData);
                
                echo json_encode($final_result);exit;  
        }else if($_POST['portalsubmit'] == 'level_3'){

            
            


            if($_POST['type'] == "add"){
                $geturl = $webAPI."/dcc/api/sshkey/addsshkey"."?".$vccommQueryParam;
                        $postData = json_decode($_POST['data']);
                        
                        $final_result = $curlPHPhelp->curl_POST_Auth_json($geturl,$postData);
                        
                        echo json_encode($final_result);exit; 
            }else if($_POST['type'] == "update"){ 
                
                $geturl = $webAPI."/dcc/api/sshkey/updatesshkey"."?".$vccommQueryParam;
                $postData = json_decode($_POST['data']);
                
                $final_result = $curlPHPhelp->curl_PUT_Auth($geturl,$postData);
                
                echo json_encode($final_result);exit; 

            }
        }else if($_POST['portalsubmit'] == 'level_2'){
            $posturl = $webAPI."/dcc/api/sshkey/getsshkey/".$_POST['sshKeyId']."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            $final_result = $result;
           
            echo json_encode($final_result);exit;
        }else if($_POST['portalsubmit'] == 'level_1'){
            $start = 0;
            if(isset($_POST['start']) && !empty($_POST['start'])){
                $start = $_POST['start'];
            }
            $length = 10;
            if(isset($_POST['length']) && !empty($_POST['length'])){
                $length = $_POST['length'];
            }
            
            
            $searchKeywords = "";
            if(isset($_POST['search']['value']) && !empty($_POST['search']['value'])){
                $searchKeywords = "&search=".$_POST['search']['value'];
            }


           


            $posturl = $webAPI."/dcc/api/sshkey/getallsshkeys?".$vccommQueryParam."&start=".$start."&length=".$length."".$searchKeywords."".commonTableSortingParam($_POST);
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            $final_result = $result;
            $final_result['query'] = $posturl;
            echo json_encode($final_result);exit;
            
        }    

        }
    }
}

?>