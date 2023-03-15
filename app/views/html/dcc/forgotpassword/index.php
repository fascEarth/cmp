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
        if($_POST['portalsubmit'] == 'level_3'){


            if(!isset($_POST['secudeco']) || !isset($_SESSION['token_illustrate_fgp_dcc_form'])){
                $final_result = array(
                    'status' => 'error',
                    'code' => false,
                    'data' => false
                  );
                  echo json_encode($final_result);exit;
            }

            if($_POST['secudeco'] != $_SESSION['token_illustrate_fgp_dcc_form']){

                $final_result = array(
                    'status' => 'error',
                    'code' => false,
                    'data' => false
                  );
                  echo json_encode($final_result);exit;
                  
            }

            

            echo json_encode(array('status' => 'success',
            'code' => true,
            'data' => true));exit;

        }else if($_POST['portalsubmit'] == 'level_2'){
            if(isset($_POST['from']) && !empty($_POST['from'])){
                $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_fgp_dcc_form']);                               
            }
            


            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[0];
            $data = (array)json_decode($_POST['data']);                        


            $uniqueLoginId = "tempuuid";
            
            if($_POST['recall'] == "true"){
                
                       

                        $geturl = $webAPI."/api/dcc/v2/get_tk_status";
                        $postData = array(
                            "task_uuid" => $_SESSION[$uniqueLoginId]
                        );
                        
                        $final_result = $curlPHPhelp->curl_POST_Auth($geturl,$postData);                        
                        echo json_encode($final_result);exit;
            }
            $posturl = $webAPI."/api/dcc/v2/signup/forget/send_email_token";
            $result = $curlPHPhelp->curl_POST_Auth($posturl,$data);
            $final_result = [];
            if(isset($result) && !empty($result)){
                if($result['status'] == "success"){
                    if($result['data']['status_code'] == 200){                        
                        $_SESSION[$uniqueLoginId] = $result['data']['task_uid'];
                       

                        $geturl = $webAPI."/api/dcc/v2/get_tk_status";
                        $postData = array(
                            "task_uuid" => $_SESSION[$uniqueLoginId]
                        );
                        
                        $final_result = $curlPHPhelp->curl_POST_Auth($geturl,$postData);
                        
                        echo json_encode($final_result);exit;


                    }
                }                
            }
            echo json_encode($final_result);exit;

            
           
            

        }else if($_POST['portalsubmit'] == 'level_1'){
            

            if(!isset($_POST['secudeco']) || !isset($_SESSION['token_illustrate_fgp_dcc_form'])){
                $final_result = array(
                    'status' => 'error',
                    'code' => false,
                    'data' => false
                );
                echo json_encode($final_result);exit;
            }

            if($_POST['secudeco'] != $_SESSION['token_illustrate_fgp_dcc_form']){

                $final_result = array(
                    'status' => 'error',
                    'code' => false,
                    'data' => false
                );
                echo json_encode($final_result);exit;
                
            }

            
            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[0];
            $data = (array)json_decode($_POST['data']);
            

            /*if($_SESSION['verifyEmail'] != $data['reset_password']->email_id){
                $final_result = array(
                   'data' => array(
                    'status_code' => '1001'
                   )
                );
                echo json_encode($final_result);exit;
            }*/


            $uniqueLoginId = "tempuuid";
            
            if($_POST['recall'] == "true"){
                
                       

                        $geturl = $webAPI."/api/dcc/v2/get_tk_status";
                        $postData = array(
                            "task_uuid" => $_SESSION[$uniqueLoginId]
                        );
                        
                        $final_result = $curlPHPhelp->curl_POST_Auth($geturl,$postData);                        
                        echo json_encode($final_result);exit;
            }
            $posturl = $webAPI."/api/dcc/v2/signup/reset_passwd";
            $result = $curlPHPhelp->curl_POST_Auth($posturl,$data);
            $final_result = [];
            if(isset($result) && !empty($result)){
                if($result['status'] == "success"){
                    if($result['data']['status_code'] == 200){                        
                        $_SESSION[$uniqueLoginId] = $result['data']['task_uid'];
                       

                        $geturl = $webAPI."/api/dcc/v2/get_tk_status";
                        $postData = array(
                            "task_uuid" => $_SESSION[$uniqueLoginId]
                        );
                        
                        $final_result = $curlPHPhelp->curl_POST_Auth($geturl,$postData);
                        
                        echo json_encode($final_result);exit;


                    }
                }                
            }
            echo json_encode($final_result);exit;



            
        }  

        }
    }
}

?>