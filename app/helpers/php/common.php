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


        if ($_POST["portalsubmit"] == "setSessionTimeout") {
            
            $timeout = 60;
            if($timeout!="Never Expire"){
              $timeout = preg_replace("/[^0-9]/", "", $timeout );
              $timeout = ($timeout*60);
              ini_set('session.cookie_lifetime', $timeout);
              ini_set('session.gc_maxlifetime', $timeout);
              $res = array(
                "status" => "success",
                "data" => $timeout
              );
              echo json_encode($res);exit;
            }else{
              $res = array(
                "status" => "never_expire"
              );
              echo json_encode($res);exit;
            }

        }else if ($_POST["portalsubmit"] == "checkSessionUser") {
        $returnMsg = false;
        
        if (isset($_SESSION['authenticate']) && !empty($_SESSION['authenticate'])) {
            $returnMsg = $_SESSION['authenticate'];
        }
        echo json_encode($returnMsg);
        exit();
    }else if($_POST['portalsubmit'] == 'level_6'){
        $type = $_POST['type'];
        
        //        $_SESSION['langType'] = $type;
        $_SESSION['login_information_protected']['lang'] = $type;
        //var_dump($_SESSION['langType']);
        echo "success";exit;
    }else if($_POST['portalsubmit'] == 'level_5'){
            
            

            
            $label = $_POST['label'];
            
            $res = $redisStore->getData($label);
            $res->lang = $_SESSION['login_information_protected']['lang'];
            //$_SESSION['langSurface'] = $res->lang;
            //var_dump($_SESSION['langSurface']);
            echo json_encode($res);exit;
    }else if($_POST['portalsubmit'] == 'level_4'){
            $secudeco = $_POST['secudeco'];
            $assistantInProc->validateCSRFToken($secudeco,$_SESSION['token_common_formSubmit']);           
            

            
            $label = $_POST['label'];
            
            $res = $redisStore->getData($label);
           
            echo json_encode($res);exit;
    }else if($_POST['portalsubmit'] == 'level_3'){

        $secudeco = $_POST['secudeco'];
            $assistantInProc->validateCSRFToken($secudeco,$_SESSION['token_common_formSubmit']);           

            $data = json_decode($_POST['data']);
            $label = $_POST['label'];
            
            $redisStore->setData($data,$label);
            
            echo json_encode(array("res" => "success"));exit;
        }else if($_POST['portalsubmit'] == 'level_2'){
            $_SESSION["localTimeZone"] =$_POST['zone'];
            $timeZone_Default = $_SESSION["localTimeZone"];
            echo "success";exit;
    }else if($_POST['portalsubmit'] == 'level_1'){

        //print_r("text");exit;

            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[0];
            $data = (array)json_decode($_POST['data']);
            $data["ipAddress"] = $_SERVER['REMOTE_ADDR'];
            
            $posturl = $webAPI."/api/dcc/v2/logout"."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_POST_Auth($posturl,$data);
            //print_r($result);exit;
            $final_result = [];
            if(isset($result) && !empty($result)){
                if($result['status'] == "success"){
                    if($result['data']['status_code'] == 200){                        
                        
                        $_SESSION['authenticate'] = false;
                            $_SESSION['verifyAuthenticate'] = false;
                            $_SESSION['login_information'] = false;
                            if (isset($_COOKIE['PHPSESSID'])) {
                            unset($_COOKIE['PHPSESSID']); 
                            setcookie('PHPSESSID', null, -1, '/'); 
                            }
                            if (isset($_COOKIE['Path'])) {
                            unset($_COOKIE['Path']); 
                            setcookie('Path', null, -1, '/'); 
                            }
                            ini_set("session.cookie_secure", 1);
                            session_unset();
                            session_destroy();

                            $final_result = $result;
                        echo json_encode($final_result);exit;


                    }
                }                
            }
            


            
        }

        }
    }
}

?>