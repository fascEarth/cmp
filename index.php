<?php


/*$request_uri =  explode('?', $_SERVER['REQUEST_URI'], 2);
        $exploded_request_uri = explode('/',$request_uri[0]);
        $req_url_final =  $exploded_request_uri[1];

if($req_url_final == "dcc"){
  unset($_COOKIE['PHPSESSID']); 
  setcookie('PHPSESSID', null, -1, '/'); 
  unset($_COOKIE['Path']); 
  setcookie('Path', null, -1, '/'); 
  session_unset();
  session_destroy();
}*/


  //ini_set("session.cookie_secure", 1);
  session_start();
  error_reporting(E_ALL);

  $params = session_get_cookie_params();
setcookie("PHPSESSID", session_id(), 0, $params["path"], $params["domain"],
    true,  // this is the secure flag you need to set. Default is false.
    true  // this is the httpOnly flag you need to set
);


//$_SESSION['kml'] = "level";


  
  
  ini_set('display_errors', 'Off');
  require 'system/helpers/common.php';
  require 'system/router/router.php';
  $common = new Common;
  $routePath = new Router;

  $request_url = $routePath->getPage( 'request_url' );
  $base_url = $routePath->getPage( 'base_url' );
  //print_r($base_url);exit;
  //print_r($_SERVER['REMOTE_ADDR']);exit;
  $arr_data = $common->getJSONdata('package.json');
  

  



  $allowscripts = (file_exists ('app/views/pages/'.$request_url.'.php'))?$arr_data['allowscripts']['pages'][$request_url]:$arr_data['allowscripts']['pages']['dcc'];
  $styles = $arr_data['styles'];
  $scripts = $arr_data['scripts'];
  $advancedStyles = $arr_data['advancedStyles'];
  $advancedScripts = $arr_data['advancedScripts'];
  $devScripts = $arr_data['devScripts'];
  




$useragent=$_SERVER['HTTP_USER_AGENT'];
/*
if(preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',substr($useragent,0,4))){

  echo '<!DOCTYPE html>
  <html class="loading" lang="en" data-textdirection="ltr">';
  include   'app/views/template/dcc/header-script.php';
  echo '    <body class="vertical-layout vertical-menu-collapsible page-header-dark vertical-modern-menu preload-transitions 1-column login-bg   blank-page blank-page" data-open="click" data-menu="vertical-modern-menu" data-col="1-column">';
  
  echo              '<div class="row" id="app">';
  include  'app/views/html/dcc/notallowed/index.php';
  
  echo '</div>';
  include     'app/views/template/dcc/footer-script.php';
  echo '      <div id="appSpScripts"></div><div id="endScript"></div>';
  echo '   </body>
         </html>';
  return;


}*/







  function get_client_ip() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

function getLangDataOuter($pathP){
  
  $jsonType = ((isset($_SESSION['login_information_protected']['lang']) && !empty($_SESSION['login_information_protected']['lang']))?$_SESSION['login_information_protected']['lang']:"en");
  
  $epath = $_SERVER['DOCUMENT_ROOT'] .$pathP.$jsonType.'.json';
  
  // Read the JSON file 
  $json = file_get_contents($epath);
    
  // Decode the JSON file
  $json_data = json_decode($json,true);
  return $json_data;
}

//var_dump($_SESSION['langType']);
$_SESSION['langType'] = ((isset($_SESSION['langType']) && !empty($_SESSION['langType']))?$_SESSION['langType']:"en");
//var_dump($_SESSION['langType']);exit;

//echo get_client_ip();exit;

  //$_SESSION['authenticate'] = false;
  //$_SESSION['login_information']= false;
  //$_SESSION['verifyAuthenticate']= false;
  if(isset($_SESSION['authenticate']) && $_SESSION['authenticate'] == true){

    if(!isset($_SESSION['login_information']) && empty($_SESSION['login_information'])){

      session_unset();
      session_destroy();
      header("location: /dcc#login");
    }
    
    if(!file_exists ('app/views/pages/'.$request_url.'.php')){     
      if(isset($_SESSION['verifyAuthenticate']) && $_SESSION['verifyAuthenticate'] == true){
        if(isset($_SESSION['uriAddrList']) && !empty($_SESSION['uriAddrList'])){
          if(in_array("dashboard",$_SESSION['uriAddrList'])){
            header("location: /surface#dashboard");
          }else{
            header("location: /surface#".$_SESSION['uriAddrList'][0]);
          }
        }else{
          header("location: /surface#dashboard");
        }
        
      }else{
        header("location: /signup#home");
      }   
      
    }else{
      
      if(isset($_SESSION['verifyAuthenticate']) && $_SESSION['verifyAuthenticate'] == true){

        if($request_url == "surface"){
          
          include 'app/views/pages/surface.php';
        }else{
          if(isset($_SESSION['uriAddrList']) && !empty($_SESSION['uriAddrList'])){
            if(in_array("dashboard",$_SESSION['uriAddrList'])){
              header("location: /surface#dashboard");
            }else{
              header("location: /surface#".$_SESSION['uriAddrList'][0]);
            }
          }else{
            header("location: /surface#dashboard");
          }
        }
      }else{
        if($request_url == "signup"){
          include 'app/views/pages/signup.php';
          
        }else{
          header("location: /signup#home");
        }
      }  
      
      
    }


  }else{   
    if(!file_exists ('app/views/pages/'.$request_url.'.php')){
      //session_unset();
     // session_destroy();
      header("location: /dcc#login");
    }  
    if($request_url != "dcc"){
      //session_unset();
      //session_destroy();
      header("location: /dcc#login");
    } 
    
    include 'app/views/pages/dcc.php';
     
    

    

  }







?>
