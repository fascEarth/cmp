<?php
require $_SERVER['DOCUMENT_ROOT'] . '/app/helpers/php/backend.php';
   

if($_POST){
  if(isset($_POST) && !empty($_POST)){
    //print_r($_POST);
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
            if($_POST['from'] == "currentusage"){
                $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_billingCurrentUsage']);           
            }else if($_POST['from'] == "away"){
                $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_common_formSubmit']);           
                
            }else{
                return false;
            }

        }
        
        if($_POST['portalsubmit'] == 'level_1'){
            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
                 
            $_SESSION["localTimeZone"] = $_POST['zone'];
            $timeZone_Default = $_SESSION["localTimeZone"];
            date_default_timezone_set($timeZone_Default);

            $reversecommonKeysBUT = [
                "vminstances" => "VM Instances",
                "snapshots" => "VM Snapshots",
                "additionalstorages" => "Additional Storages",
                "ipaddress" => "Public IPv4 Address",
                "internetspeed" => "Internet Speed",
                "operatingsystem" => "Operating Systems",
            ];



            $start = $_POST['start'];
            $length = $_POST['length'];
            if(isset($length) && !empty($length)){
                if($length == -1){
                    $length = 10;
                }
            }

            $searchKeywords = "";
            if(isset($_POST['search']['value']) && !empty($_POST['search']['value'])){
                $searchKeywords = "&search=".$_POST['search']['value'];
            }

            
            
            

            $posturl = $webAPI."/dcc/api/vms/getestimatedcost?".$vccommQueryParam."&expandfilter=".$_POST['expandfilter']."&start=".$start."&length=".$length."".$searchKeywords."".commonTableSortingParam($_POST);
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            
            $final_result = $result;
            //print_r($final_result);exit;
            /*if(isset($final_result) && !empty($final_result)){
                if($_POST['expandfilter'] != "default"){
                    $fval = $reversecommonKeysBUT[$_POST['expandfilter']];
                    if(isset(json_decode($final_result['data'])->message->$fval) && !empty(json_decode($final_result['data'])->message->$fval)){
                        $final_data_nk = json_decode($final_result['data']);
                        $final_data = $final_data_nk->message->$fval;
                        if(isset($final_data->details) && !empty($final_data->details)){
                            foreach($final_data->details as $row){
                                
    
                                $start_date = timezoneDate(
                                    $row->start,
                                    $timeZone_Default
                                );
    
                                $row->start = str_replace(
                                    "",
                                    "T",
                                    date(
                                        "d-m-Y H:i",
                                        strtotime($start_date)
                                    )
                                );
    
    
                                $end_date = timezoneDate(
                                    $row->end,
                                    $timeZone_Default
                                );
    
                                $row->end = str_replace(
                                    "",
                                    "T",
                                    date(
                                        "d-m-Y H:i",
                                        strtotime($end_date)
                                    )
                                );
    
    
    
                            }
                        }
                        
                        $final_result['data'] = json_encode($final_data_nk);
                    }
                }
               

            }*/
            
           
            
            $final_result['data_org'] = $result;
           //print_r($final_result);exit;
            $final_result['query'] = $posturl;
            echo json_encode($final_result);exit;

        }


        }
    }
}

?>