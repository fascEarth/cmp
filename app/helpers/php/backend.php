<?php

session_start(); #start the session
error_reporting(E_ALL); #show server errors
//ini_set("session.cookie_secure", 1);
//ini_set("session.cookie_httponly", 1);

$params = session_get_cookie_params();
setcookie("PHPSESSID", session_id(), 0, $params["path"], $params["domain"],
    true,  // this is the secure flag you need to set. Default is false.
    true  // this is the httpOnly flag you need to set
);


ini_set('display_errors', 'Off'); #show server errors


/*if(!isset($_SESSION['authenticate']) || $_SESSION['authenticate'] != true){
  header("location: /login");

}*/
#support functions
require $_SERVER['DOCUMENT_ROOT'] . '/app/config/app_config.php';


require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/supports.php';

require $_SERVER['DOCUMENT_ROOT'] . '/app/libraries/logs/logs.php';

require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/curl.class.php';

require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/assistant.php';

require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/postSecurity.php';

require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/redis.php';

$curlPHPhelp = new curlPHPhelp();

$assistantInProc = new assistantInProc();

$possecurity = new postsecurity();

$redisStore = new redisStore(); 

$res_dcc_siginin_info = (($redisStore->getData("dcc_siginin_info"))?$redisStore->getData("dcc_siginin_info"):false);
if($res_dcc_siginin_info){
  $vccommQueryParam = "tenantid=".$res_dcc_siginin_info->tenant_id."&userserialid=".$res_dcc_siginin_info->user_serial_id."&ipaddress=".$_SERVER['REMOTE_ADDR'];
}
function commonTableSortingParam($data){
  
  
  $finalParam = "";
  if(isset($data['columns'][$data['order'][0]['column']]['name']) && !empty($data['columns'][$data['order'][0]['column']]['name'])){
    
    $orderColumn = $data['columns'][$data['order'][0]['column']]['name'];
    
    $finalParam .= "&order=".$orderColumn;
    
  }
  if(isset($data['order'][0]["dir"]) && !empty($data['order'][0]["dir"])){
    $orderColumnType = $data['order'][0]["dir"];
    $finalParam .= "&orderBY=".$orderColumnType;
  }
  return $finalParam;
}


function getLangData($pathP){
  
  $jsonType = ((isset($_SESSION['login_information_protected']['lang']) && !empty($_SESSION['login_information_protected']['lang']))?$_SESSION['login_information_protected']['lang']:"en");
  
  $epath = $_SERVER['DOCUMENT_ROOT'] .$pathP.$jsonType.'.json';
  
  // Read the JSON file 
  $json = file_get_contents($epath);
    
  // Decode the JSON file
  $json_data = json_decode($json,true);
  return $json_data;
}



 ?>