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
        if($_POST['portalsubmit'] == 'level_4'){

            if(!isset($_POST['secudeco']) || !isset($_SESSION['token_illustrate_login_dcc_form'])){
                $final_result = array(
                    'status' => 'error',
                    'code' => false,
                    'data' => false
                  );
                  echo json_encode($final_result);exit;
            }

            if($_POST['secudeco'] != $_SESSION['token_illustrate_login_dcc_form']){
                $final_result = array(
                    'status' => 'error',
                    'code' => false,
                    'data' => false
                  );
                  echo json_encode($final_result);exit;

            }

            if(isset($_SESSION['authenticate']) && $_SESSION['authenticate'] == true){

                echo json_encode(array('status' => 'screen',
                'code' => true,
                'data' => true));exit;

            }

            echo json_encode(array('status' => 'success',
            'code' => true,
            'data' => true));exit;
        }else if($_POST['portalsubmit'] == 'level_3'){
            

            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
            $webAPIPost = $webservAddress[0];
           
                    
                    
                    $postURI = $webAPIPost."/api/dcc/v2/internal/email_sms_code";
                        $postData = array(
                            "email_id" => $_POST['email_id']
                        );
                        
                    $final_post_result = $curlPHPhelp->curl_POST_Auth($postURI,$postData);


                    $final_result = $result;
                    $final_result['secondQuery'] = $postURI;
                    $final_result['secondRes'] = $final_post_result;
                    //$final_result['auth'] = $base_url;
                    echo json_encode($final_result);exit;

                    
        }else if($_POST['portalsubmit'] == 'level_2'){

            if(!isset($_POST['secudeco']) || !isset($_SESSION['token_illustrate_login_dcc_form'])){
                $final_result = array(
                    'status' => 'error',
                    'code' => false,
                    'data' => false
                  );
                  echo json_encode($final_result);exit;
            }

            if($_POST['secudeco'] != $_SESSION['token_illustrate_login_dcc_form']){
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
            
            $uniqueLoginId = "tempuuidvertoken";
            
            if($_POST['recall'] == "true"){
                
                       

                        $geturl = $webAPI."/api/dcc/v2/get_tk_status";
                        $postData = array(
                            "task_uuid" => $_SESSION[$uniqueLoginId]
                        );
                        
                        $final_result = $curlPHPhelp->curl_POST_Auth($geturl,$postData);
                        if($final_result['data']['status_code'] == 200 || $final_result['data']['status_code'] == 600 || $final_result['data']['status_code'] == 602){
                           
                            $_SESSION['authenticate'] = true;
                            $_SESSION['verifyAuthenticate'] = true;
                            $_SESSION['login_information'] = true;
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
                        
                        if($final_result['data']['status_code'] == 200 || $final_result['data']['status_code'] == 600 || $final_result['data']['status_code'] == 602){
                           
                            $_SESSION['authenticate'] = true;
                            $_SESSION['verifyAuthenticate'] = true;
                            $_SESSION['login_information'] = true;
                        }
                        //exit;
                        echo json_encode($final_result);exit;


                    }
                }                
            }
            echo json_encode($final_result);exit;



        }else if($_POST['portalsubmit'] == 'level_1'){
            
            
            
            if(!isset($_POST['secudeco']) || !isset($_SESSION['token_illustrate_login_dcc_form'])){
                $final_result = array(
                    'status' => 'error',
                    'code' => false,
                    'data' => false
                  );
                  echo json_encode($final_result);exit;
            }

            if($_POST['secudeco'] != $_SESSION['token_illustrate_login_dcc_form']){
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

            $data["ipAddress"] = $_SERVER['REMOTE_ADDR'];
            
            $uniqueLoginId = "tempuuid";

            $zone = ((isset($_POST["zone"]) && !empty($_POST["zone"]))?$_POST["zone"]:"Asia/Calcutta");

            function getRecallResult($curlPHPhelp,$geturl,$postData, $data,$zone,$webAPI){
                $final_result = array();

                
                $final_result = $curlPHPhelp->curl_POST_Auth($geturl,$postData);
                
                if($final_result['data']['status_code'] == 200 || $final_result['data']['status_code'] == 700){
                   // print_r($final_result['data'] );
                    $final_result['data']['data'] = (Array)$final_result['data']['data'];
                    
                    //print_r((array)json_decode($final_result['data']['data'][0]) );
                    $final_result['data']['data'] = (array)json_decode($final_result['data']['data'][0]);
                    $final_result['data']['data']['lang'] = "en";
                    $_SESSION['login_information_protected'] = $final_result['data']['data'];
                    //print_r($final_result['data']['data']);
                    //exit;
                    //$final_result['data']['data']['mfa_auth'] = ((isset($final_result['data']['data']['mfa_auth']) && !empty($final_result['data']['data']['mfa_auth']) )? $final_result['data']['data']['mfa_auth'] : true);
                   // $final_result['data']['data']['email_verify'] = ((isset($final_result['data']['data']['email_verify']) && !empty($final_result['data']['data']['email_verify']) )? $final_result['data']['data']['email_verify'] : true);
                    //$final_result['data']['data']['legal_status'] = ((isset($final_result['data']['data']['legal_status']) && !empty($final_result['data']['data']['legal_status']) )? $final_result['data']['data']['legal_status'] : true);
                    
                    /*if($final_result['data']['data']['email_verify'] && !$final_result['data']['data']['mfa_auth']){
                        
                        $final_result['data']['data']['role_name'] = "owner";
                        $role_name = (($final_result['data']['data']['role_name'])?$final_result['data']['data']['role_name']:"billingadmin");
                                        // Read the JSON file 
                        $json = file_get_contents('/opt/cmp/UI/app/helpers/json/roles/'.$role_name.'.json');
                        
                        // Decode the JSON file
                        $json_data = json_decode($json,true);*/


                         //$final_result['data']['data']['role_name'] = "owner";
                         $final_result['data']['data']['role_name'] = str_replace(' ', '', $final_result['data']['data']['role_name']);
                         $role_name = (($final_result['data']['data']['role_name'])?$final_result['data']['data']['role_name']:"billingadmin");
                                         // Read the JSON file 
                         $json = file_get_contents('/opt/cmp/UI/app/helpers/json/roles/'.$role_name.'.json');
                         
                         // Decode the JSON file
                         $json_data = json_decode($json,true);


                     $uriAddrList = array();
                     if(isset($json_data) && !empty($json_data)){
                         foreach($json_data as $row){
                            
                             if(isset($row['children']) && !empty($row['children'])){
                                 foreach($row['children'] as $crow){
                                     if($crow['uriAddr']){
                                         array_push($uriAddrList,$crow['uriAddr']);
                                     }
                                     if(isset($crow['submenu']) && !empty($crow['submenu'])){
                                         foreach($crow['submenu'] as $scrow){
                                             if($scrow['uriAddr']){
                                                 array_push($uriAddrList,$scrow['uriAddr']);
                                             }
                                         }
                                     }
                                 }
                             }
                         }
                     }

                     
                     $_SESSION['verifyEmail'] = $data['userName'];
                    // $_SESSION['route_souvenir'] = $data['accessToken'];
                            $_SESSION['uriAddrList'] = $uriAddrList;
                            $final_result['data']['data']['uriAddrList'] = $uriAddrList;
                            $final_result['data']['data']['roleRoutes'] = $json_data;
                            $_SESSION["localTimeZone"] = $zone;
                            $_SESSION['roleRoutes'] = $json_data;
                        
                     if($final_result['data']['data']['mfa_auth']){

                       
            
                        
                        $postURI = $webAPI."/api/dcc/v2/internal/email_sms_code";
                            $postDataSp = array(
                                "email_id" => $data['userName']
                            );

                            
                            
                        $final_post_result_sp = $curlPHPhelp->curl_POST_Auth($postURI,$postDataSp);


                        
                        $final_result['secondQuery'] = $postURI;
                        $final_result['secondRes'] = $final_post_result_sp;
                     }
                           


                        if($final_result['data']['data']['legal_status'] && $final_result['data']['data']['completed_stepper'] == 5){


                            if($final_result['data']['data']['email_verify'] && !$final_result['data']['data']['mfa_auth']){
                        
                               
                            
                            
                            $_SESSION['authenticate'] = true;
                            $_SESSION['verifyAuthenticate'] = true;
                            $_SESSION['login_information'] = true;

                            

                        }


                           }else{


                            
                            
                            $_SESSION['authenticate'] = true;
                            $_SESSION['verifyAuthenticate'] = false;
                            $_SESSION['login_information'] = false;

                            


                           }
                    }

                    
                    
                // }
                    $timeout = 7200;
                ini_set('session.cookie_lifetime', $timeout);
                ini_set('session.gc_maxlifetime', $timeout);
                 return $final_result;

            }
            if($_POST['recall'] == "true"){
                
                       

                        $geturl = $webAPI."/api/dcc/v2/get_tk_status";
                        $postData = array(
                            "task_uuid" => $_SESSION[$uniqueLoginId]
                        );
                        
                        $final_result = getRecallResult($curlPHPhelp,$geturl,$postData, $data,$zone,$webAPI);
                        
                        echo json_encode($final_result);exit;
            }
            $posturl = $webAPI."/api/dcc/v2/login";
            $result = $curlPHPhelp->curl_POST_Auth($posturl,$data);
            //print_r($result);exit;
            $final_result = [];
            if(isset($result) && !empty($result)){
                if($result['status'] == "success"){
                    if($result['data']['status_code'] == 200){                        
                        $_SESSION[$uniqueLoginId] = $result['data']['task_uid'];
                       

                        $geturl = $webAPI."/api/dcc/v2/get_tk_status";
                        $postData = array(
                            "task_uuid" => $_SESSION[$uniqueLoginId]
                        );
                        
                        $final_result = getRecallResult($curlPHPhelp,$geturl,$postData, $data,$zone,$webAPI);
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