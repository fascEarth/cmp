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
            if($_POST['from'] == "signup"){
                $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_surfSignup']);                               
            }else if($_POST['from'] == "login"){
                $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_login_dcc_form']);                               
            } else if($_POST['from'] == "forgotPassword"){
                $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_fgp_dcc_form']);                                               
            } else if($_POST['from'] == "security"){
                $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_surfSecResetPwd']);                               
            }   
        }

    if($_POST['portalsubmit'] == 'level_7'){
        $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
            //$posturl = $webAPI."/dcc/api/payments/status/".$_POST['cartId'];
            $posturl = $webAPI."/dcc/api/payments/status/".$_POST['cartId'].'?tenantid='.$_POST['tenantid'].'&userserialid='.$_POST['userserialid'];
            $result = $curlPHPhelp->curl_GET_Auth($posturl,[]);
            $final_result = $result;
            
            echo json_encode($final_result);exit;
    }else if($_POST['portalsubmit'] == 'level_6'){
        $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
            $data = (array)json_decode($_POST['data']);
            $data['paymentDomain'] = $_SERVER['HTTP_HOST'];
            
            $posturl = $webAPI."/dcc/api/payments";
            $result = $curlPHPhelp->curl_POST_Auth_json($posturl,$data);
            $result['return_data'] = $data;
            /*$final_result = [];
            if(isset($result) && !empty($result)){

            } */  
            echo json_encode($result);exit;

    }else if($_POST['portalsubmit'] == 'level_5'){
            
            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[0];
            $data = (array)json_decode($_POST['data']);
            
            $uniqueLoginId = "tempuuidgetallbilling";
            
            if($_POST['recall'] == "true"){
                
                       

                        $geturl = $webAPI."/api/dcc/v2/get_tk_status";
                        $postData = array(
                            "task_uuid" => $_SESSION[$uniqueLoginId]
                        );
                        
                        $final_result = $curlPHPhelp->curl_POST_Auth($geturl,$postData);
                        
                        echo json_encode($final_result);exit;
            }
            $posturl = $webAPI."/api/dcc/v2/signup/get_billing_info";
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

            
        }else if($_POST['portalsubmit'] == 'level_11'){
            
            if(isset($_POST['from']) && !empty($_POST['from'])){
                if($_POST['from'] == "forgotPassword"){

                    $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_fgp_dcc_form']);                                                   

                }
            }

            

            
            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[0];
            $data = (array)json_decode($_POST['data']);
            

            if(isset($_POST['from']) && !empty($_POST['from'])){
                if($_POST['from'] != "forgotPassword"){

                    if(isset($data['email']) && !empty($data['email'])){
                        if($_SESSION['verifyEmail'] != $data['email']->email_id){
                            $final_result = array(
                               'data' => array(
                                'status_code' => '603'
                               )
                            );
                            echo json_encode($final_result);exit;
                        }
                    }

                }
            }


           

            if(isset($data['sms']) && !empty($data['sms'])){
                if($_SESSION['verifyEmail'] != $data['sms']->email_id){
                    $final_result = array(
                       'data' => array(
                        'status_code' => '603'
                       )
                    );
                    echo json_encode($final_result);exit;
                }
            }
            
            $uniqueLoginId = "tempuuidvertoken";
            $final_result = [];
            if($_POST['recall'] == "true"){
                
                       

                        $geturl = $webAPI."/api/dcc/v2/get_tk_status";
                        $postData = array(
                            "task_uuid" => $_SESSION[$uniqueLoginId]
                        );
                        
                        $final_result = $curlPHPhelp->curl_POST_Auth($geturl,$postData);
                        if($final_result['data']['status_code'] == 200){
                           
                            $_SESSION['authenticate'] = true;
                            $_SESSION['verifyAuthenticate'] = false;
                            $_SESSION['login_information'] = false;
                        }
                        echo json_encode($final_result);exit;
            }
            $posturl = $webAPI."/api/dcc/v2/signup/forget/verify_token";
            $result = $curlPHPhelp->curl_POST_Auth($posturl,$data);
            $final_result['old_result'] = $result;
            $final_result['old_query'] = $posturl;
            if(isset($result) && !empty($result)){
                if($result['status'] == "success"){
                    if($result['data']['status_code'] == 200){                        
                        $_SESSION[$uniqueLoginId] = $result['data']['task_uid'];
                       

                        $geturl = $webAPI."/api/dcc/v2/get_tk_status";
                        $postData = array(
                            "task_uuid" => $_SESSION[$uniqueLoginId]
                        );
                        
                        $final_result = $curlPHPhelp->curl_POST_Auth($geturl,$postData);
                        //print_r(gettype($final_result['data']['status_code']));
                        //print_r($final_result['data']['status_code']);
                        //$final_result['statusType'] = gettype($final_result['data']['status_code']);
                        //$final_result['statusCode'] = $final_result['data']['status_code'];
                        
                        if($final_result['data']['status_code'] == 200){
                           
                            $_SESSION['authenticate'] = true;
                            $_SESSION['verifyAuthenticate'] = false;
                            $_SESSION['login_information'] = false;
                        }
                        //exit;
                        echo json_encode($final_result);exit;


                    }
                }                
            }
            echo json_encode($final_result);exit;



        }else if($_POST['portalsubmit'] == 'level_1'){
            
            if(isset($_POST['from']) && !empty($_POST['from'])){
                if($_POST['from'] == "security"){
                    $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_surfSecResetPwd']);                               
                }                
            }

            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[0];
            $data = (array)json_decode($_POST['data']);
            
            if(isset($data['email']) && !empty($data['email'])){
                if($_SESSION['verifyEmail'] != $data['email']->email_id){
                    $final_result = array(
                       'data' => array(
                        'status_code' => '603'
                       )
                    );
                    echo json_encode($final_result);exit;
                }
            }

            if(isset($data['sms']) && !empty($data['sms'])){
                if($_SESSION['verifyEmail'] != $data['sms']->email_id){
                    $final_result = array(
                       'data' => array(
                        'status_code' => '603'
                       )
                    );
                    echo json_encode($final_result);exit;
                }
            }
            
            $uniqueLoginId = "tempuuidvertoken";
            
            if($_POST['recall'] == "true"){
                
                       

                        $geturl = $webAPI."/api/dcc/v2/get_tk_status";
                        $postData = array(
                            "task_uuid" => $_SESSION[$uniqueLoginId]
                        );
                        
                        $final_result = $curlPHPhelp->curl_POST_Auth($geturl,$postData);
                        if($final_result['data']['status_code'] == 200){
                           
                            $_SESSION['authenticate'] = true;
                            $_SESSION['verifyAuthenticate'] = false;
                            $_SESSION['login_information'] = false;
                        }
                        echo json_encode($final_result);exit;
            }
            $posturl = $webAPI."/api/dcc/v2/signup/verify_token";
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
                        //print_r(gettype($final_result['data']['status_code']));
                        //print_r($final_result['data']['status_code']);
                        //$final_result['statusType'] = gettype($final_result['data']['status_code']);
                        //$final_result['statusCode'] = $final_result['data']['status_code'];
                        
                        if($final_result['data']['status_code'] == 200){
                           
                            $_SESSION['authenticate'] = true;
                            $_SESSION['verifyAuthenticate'] = false;
                            $_SESSION['login_information'] = false;
                        }
                        //exit;
                        echo json_encode($final_result);exit;


                    }
                }                
            }
            echo json_encode($final_result);exit;



            
        }else if($_POST['portalsubmit'] == 'level_2'){
            if(isset($_POST['from']) && !empty($_POST['from'])){
                if($_POST['from'] == "login"){

                    $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_login_dcc_form']);                               

                } else if($_POST['from'] == "forgotPassword"){

                    $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_fgp_dcc_form']);                               
                    
                } else if($_POST['from'] == "security"){

                    $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_surfSecResetPwd']);                               


                }

                

            }
            


            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[0];
            $data = (array)json_decode($_POST['data']);
            
            $_SESSION['verifyEmail'] = $data['email_id'];
            $uniqueLoginId = "tempuuidresendtoken";
            
           
            $posturl = $webAPI."/api/dcc/v2/signup/resend_token";
            $result = $curlPHPhelp->curl_POST_Auth($posturl,$data);
            $final_result = $result;
          
            echo json_encode($final_result);exit;



        }else if($_POST['portalsubmit'] == 'level_3'){
            $_SESSION['authenticate'] = false;
            $_SESSION['verifyAuthenticate'] = false;
            $_SESSION['login_information'] = false;
            $final_result = array(
                "status" => 200
            );
            echo json_encode($final_result);exit;
        }else if($_POST['portalsubmit'] == 'level_4'){    
            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[0];
            $data = (array)json_decode($_POST['data']);
            
            $uniqueLoginId = "tempuuidupdatebillinginfo";
            
            if($_POST['recall'] == "true"){
                
                       

                        $geturl = $webAPI."/api/dcc/v2/get_tk_status";
                        $postData = array(
                            "task_uuid" => $_SESSION[$uniqueLoginId]
                        );
                        
                        $final_result = $curlPHPhelp->curl_POST_Auth($geturl,$postData);
                        if($final_result['data']['status_code'] == 200){
                           
                            $_SESSION['authenticate'] = true;
                            $_SESSION['verifyAuthenticate'] = false;
                            $_SESSION['login_information'] = false;
                        }
                        echo json_encode($final_result);exit;
            }
            
            $result = array();
            if($_POST['processType'] == "update"){
                $posturl = $webAPI."/api/dcc/v2/signup/update_billing_info";
                $result = $curlPHPhelp->curl_POST_Auth_json($posturl,$data);
            }
            if($_POST['processType'] == "add"){
                $posturl = $webAPI."/api/dcc/v2/signup/billing_info";
                $result = $curlPHPhelp->curl_POST_Auth_json($posturl,$data);
            }

            
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
                       
                        
                        if($final_result['data']['status_code'] == 200){
                           
                            $_SESSION['authenticate'] = true;
                            $_SESSION['verifyAuthenticate'] = false;
                            $_SESSION['login_information'] = false;
                        }
                        //exit;
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