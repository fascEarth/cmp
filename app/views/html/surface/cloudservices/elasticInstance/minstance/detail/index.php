
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
            if($_POST['from'] == "minstance"){
                $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_minstance_status']);           
            }else if($_POST['from'] == "minstancedetail"){
                $assistantInProc->validateCSRFToken($_POST['secudeco'],$_SESSION['token_illustrate_minstancedetail_status']);           
            }
        }


        if($_POST['portalsubmit'] == 'level_11'){ 

            $env = $configurations['app_conn_env'];
        $conn = $configurations['app_conn'];
        $webservAddress = $conn[$env]['webServices'];
        $webAPI = $webservAddress[1];

        
        $geturl = $webAPI."/dcc/api/vms/setvmstorages/".$_POST['tenantvmid']."?".$vccommQueryParam;
        $postData = $_POST['data'];
        
        $final_result = $curlPHPhelp->curl_PUT_Auth($geturl,$postData);
        echo json_encode($final_result);exit;  

        }else if($_POST['portalsubmit'] == 'level_10'){ 
            //echo json_encode([]);exit;    
            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
                 
            $posturl = $webAPI."/dcc/api/vms/getvmstorages/".$_POST['tenantvmid']."?".$vccommQueryParam;
            
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            $final_result= $result;
            
            $final_result['queries'] = $posturl;
            echo json_encode($final_result);exit; 

        }else if($_POST['portalsubmit'] == 'level_9'){ 

            

            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
            
            $data = array(
                "action" => $_POST['action'],
                "options" => ((isset($_POST['options']) && !empty($_POST['options']))?$_POST['options']:"")
            );
             

            $ipAddress = $_SERVER['REMOTE_ADDR'];
            $userserialid = $_POST['user_serial_id'];

            $posturl = $webAPI."/dcc/api/vms/setvmaction/".$_POST['tenantvmid']."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_POST_Auth_json($posturl,$data);
            $final_result = $result;
           $final_result['queries'] = $posturl;
            echo json_encode($final_result);exit;  

    }else if($_POST['portalsubmit'] == 'level_8'){

        $_SESSION["localTimeZone"] = $_POST['timeZone_Default'];
        $timeZone_Default = $_SESSION["localTimeZone"];
        date_default_timezone_set($timeZone_Default);

            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
            $ipAddress = $_SERVER['REMOTE_ADDR'];
            
            $posturl = $webAPI."/dcc/api/vms/getvmsnapshot/".$_POST['tenantvmid']."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            $final_result = $result;
            $fdates = "";
            if(isset(json_decode($final_result['data'])->message->snapshotDate) && !empty(json_decode($final_result['data'])->message->snapshotDate)){
                $final_result['old-date'] = json_decode($final_result['data'])->message->snapshotDate;
                $date = timezoneDate(
                    json_decode($final_result['data'])->message->snapshotDate,
                    $timeZone_Default
                );
                $fdates = str_replace(
                    "",
                    "T",
                    date("Y-m-d H:i:s", strtotime($date))
                );
            }
            
            $final_result['date'] = $fdates;
            
            $final_result['queries'] = $posturl;
            echo json_encode($final_result);exit; 


    }else if($_POST['portalsubmit'] == 'level_7'){

            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[2];

            $tenantvmid = $_POST['tenantvmid'];
            $tenantId = $_POST['tenantId'];
            $data = array(
                "tenant_id" => $tenantId,"tenant_vm_id" => $tenantvmid
            );
            $posturl = $webAPI."/api/dcc/v2/internal/get_console_id"."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_POST_Auth_json($posturl,$data);
            $final_result = $result;
           
            echo json_encode($final_result);exit; 



        }else if($_POST['portalsubmit'] == 'level_6'){ 
            

            

            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
            
            $data = array(
                "action" => $_POST['action'],
                "options" => ((isset($_POST['options']) && !empty($_POST['options']))?$_POST['options']:"")
            );
             

            $ipAddress = $_SERVER['REMOTE_ADDR'];
            $userserialid = $_POST['user_serial_id'];

            $posturl = $webAPI."/dcc/api/vms/setvmaction/".$_POST['tenantvmid']."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_POST_Auth_json($posturl,$data);
            $final_result = $result;
           $final_result['queries'] = $posturl;
            echo json_encode($final_result);exit;  


        }else if($_POST['portalsubmit'] == 'level_5'){ 

            $fieldGraphs = array(
                "getusageavgcpu" => array(
                    "cpu_usage_average"
                ),
                "getusagemaxcpu" => array(
                    "cpu_usage_maximum"
                ),
                "getusageavgcpumhz" => array(
                    "cpu_usagemhz_average"
                ),
                "getusageavgmemory" => array(
                    "mem_usage_average"
                ),
                "getusageavgreadspeed" => array(
                    "disk_read_average"
                ),
                "getusageavgwritespeed" => array(
                    "disk_write_average"
                )
                );


            $resValRaw = array();
            $resVal = array();
            $d_unit = "";
            $_SESSION["localTimeZone"] = $_POST['zone'];
            $timeZone_Default = $_SESSION["localTimeZone"];
            date_default_timezone_set($timeZone_Default);

            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
                 
            $posturl = $webAPI."/dcc/api/graph/".$_POST['graphId']."/".$_POST['tenantvmid']."?".$vccommQueryParam."&filtertime=".$_POST['filtertime'];
            $wholeRes = [];
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            if(isset($result) && !empty($result)){

                $resultData = ((json_decode($result['data']))?json_decode($result['data']):false);
                
                if($resultData){
                    if($resultData->status == "ok"){
                        $d_unit = $resultData->message->unit;
                        $d_data = $resultData->message->data;
                        
                        $takefields = $fieldGraphs[$_POST['graphId']];
                        if(isset($d_data) && !empty($d_data)){
                        
                        foreach ($d_data as $row) {
                            
                            $date = timezoneDate(
                                $row->time,
                                $timeZone_Default
                            );

                            for (
                                $i = 0;
                                $i < count($takefields);
                                $i++
                            ) {
                                $row = (Array)$row;
                               // print_r($row );
                                $valrow = $takefields[$i];
                                $resValRaw[$valrow][] = $row[$valrow];
                                $resVal[$valrow][] = [
                                    str_replace(
                                        "",
                                        "T",
                                        date(
                                            "Y-m-d H:i:s",
                                            strtotime($date)
                                        )
                                    ),
                                    $row[$valrow],
                                ];
                                
                            }


                        }

                        }

                        foreach ($resVal as $key => $value) {
                            $wholeRes[] = [
                                "label" => $key,
                                "value" => $value,
                            ];
                        }

                        

                    }
                }

            }
            
            
            $final_result = array(
                "unit" => $d_unit,
                "data" => $resValRaw,
                "rawData" => $wholeRes,
                "fields" => $fieldGraphs[$_POST['graphId']]
            );
            //$final_result = $result;
            
            echo json_encode($final_result);exit;  
            

            
        }else if($_POST['portalsubmit'] == 'level_4'){   
            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
                 
            $posturl = $webAPI."/dcc/api/graph/getoverviewavgdisk/".$_POST['tenantvmid']."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            $final_result = $result;
           
            echo json_encode($final_result);exit;  
    }else if($_POST['portalsubmit'] == 'level_3'){   
            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
                 
            $posturl = $webAPI."/dcc/api/graph/getoverviewstorageused/".$_POST['tenantvmid']."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            $final_result = $result;
           
            echo json_encode($final_result);exit;  
     }else if($_POST['portalsubmit'] == 'level_2'){   
            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
                 
            $posturl = $webAPI."/dcc/api/graph/getoverviewcpumemory/".$_POST['tenantvmid']."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            $final_result = $result;
           
            echo json_encode($final_result);exit;
    }else if($_POST['portalsubmit'] == 'level_1'){
            
            $env = $configurations['app_conn_env'];
            $conn = $configurations['app_conn'];
            $webservAddress = $conn[$env]['webServices'];
            $webAPI = $webservAddress[1];
                 
            $posturl = $webAPI."/dcc/api/vms/getvmdetailsid/".$_POST['tenantvmid']."?".$vccommQueryParam;
            $result = $curlPHPhelp->curl_GET_Auth($posturl,"");
            $final_result = $result;
            $final_result['query'] = $posturl;
            echo json_encode($final_result);exit;



            
        }    

        }
    }
}

?>