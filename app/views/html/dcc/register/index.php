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
    
    //print_r($_POST); echo '<br />';
    //$data = (array)json_decode($_POST['data']);
    //print_r($data ); echo '<br />';

    //print_r(json_decode($_POST['data']));
    //exit;

    if(isset($_POST['portal']) && !empty($_POST['portal'])){

        if($_POST['portalsubmit'] == 'level_2'){
            if(!isset($_POST['secudeco']) || !isset($_SESSION['token_illustrate_signup_individual_form'])){
                $final_result = array(
                    'status' => 'error',
                    'code' => false,
                    'data' => false
                  );
                  echo json_encode($final_result);exit;
            }

            if($_POST['secudeco'] != $_SESSION['token_illustrate_signup_individual_form']){

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
            
        }else if($_POST['portalsubmit'] == 'level_1'){
            
            if(!isset($_POST['secudeco']) || !isset($_SESSION['token_illustrate_signup_individual_form'])){
                $final_result = array(
                    'status' => 'error',
                    'code' => false,
                    'data' => false
                  );
                  echo json_encode($final_result);exit;
            }

            if($_POST['secudeco'] != $_SESSION['token_illustrate_signup_individual_form']){

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
            
            $uniqueLoginId = "tempuuid";
            
            if($_POST['recall'] == "true"){
                
                       

                        $geturl = $webAPI."/api/dcc/v2/get_tk_status";
                        $postData = array(
                            "task_uuid" => $_SESSION[$uniqueLoginId]
                        );
                        
                        $final_result = $curlPHPhelp->curl_POST_Auth_json($geturl,$postData);
                        if($final_result['data']['status_code'] == 200){

                            $final_result['data']['data'] = (Array)$final_result['data']['data'];                                                
                            $final_result['data']['data'] = (array)json_decode($final_result['data']['data'][0]);
                            $final_result['data']['data']['lang'] = "en";
                            $_SESSION['login_information_protected'] = $final_result['data']['data'];

                            $_SESSION['verifyEmail'] = $data['email_id'];
                            $_SESSION['authenticate'] = true;
                            $_SESSION['verifyAuthenticate'] = false;
                            $_SESSION['login_information'] = false;
                            $timeout = 7200;
                            ini_set('session.cookie_lifetime', $timeout);
                            ini_set('session.gc_maxlifetime', $timeout);
                        }
                        echo json_encode($final_result);exit;
            }
            $posturl = $webAPI."/api/dcc/v2/signup/create_account";
            $result = $curlPHPhelp->curl_POST_Auth_json($posturl,$data);
            $final_result = [];
            if(isset($result) && !empty($result)){
                if($result['status'] == "success"){
                    if($result['data']['status_code'] == 200){                        
                        $_SESSION[$uniqueLoginId] = $result['data']['task_uid'];
                       

                        $geturl = $webAPI."/api/dcc/v2/get_tk_status";
                        $postData = array(
                            "task_uuid" => $_SESSION[$uniqueLoginId]
                        );
                        
                        $final_result = $curlPHPhelp->curl_POST_Auth_json($geturl,$postData);
                        //print_r(gettype($final_result['data']['status_code']));
                        //print_r($final_result['data']['status_code']);
                        //$final_result['statusType'] = gettype($final_result['data']['status_code']);
                        //$final_result['statusCode'] = $final_result['data']['status_code'];
                        
                        if($final_result['data']['status_code'] == 200){

                            $final_result['data']['data'] = (Array)$final_result['data']['data'];                                                
                            $final_result['data']['data'] = (array)json_decode($final_result['data']['data'][0]);
                            $final_result['data']['data']['lang'] = "en";
                            $_SESSION['login_information_protected'] = $final_result['data']['data'];

                            
                            $_SESSION['verifyEmail'] = $data['email_id'];
                            
                            $_SESSION['authenticate'] = true;
                            $_SESSION['verifyAuthenticate'] = false;
                            $_SESSION['login_information'] = false;

                            $timeout = 7200;
                            ini_set('session.cookie_lifetime', $timeout);
                            ini_set('session.gc_maxlifetime', $timeout);
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