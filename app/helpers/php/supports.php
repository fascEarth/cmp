<?php
class Supports {
  public function __construct(){}

}
/* useful functions */
function exceptionBlock($returnData,$errorMsg){
	try{
		if (!$returnData) {
			throw new Exception($errorMsg);
		}
	} catch(Exception $e){
		captureLog($e->getMessage());
	}
	return $returnData;
}
function captureLog($msg){
  $log = new Logging();
  $log->lwrite($msg);
  $log->lclose();
}
function formatUptime($diff, $format = "long"){
    $yearsDiff = floor($diff/31536000);
    $diff -= $yearsDiff*31536000;
    $daysDiff = floor($diff/86400);
    $diff -= $daysDiff*86400;
    $hrsDiff = floor($diff/60/60);
    $diff -= $hrsDiff*60*60;
    $minsDiff = floor($diff/60);
    $diff -= $minsDiff*60;
    $secsDiff = $diff;
    $uptime = "";
    if ($format == "short") {
        if ($yearsDiff > '0') {
            $uptime .= $yearsDiff . "y ";
        }
        if ($daysDiff > '0') {
            $uptime .= $daysDiff . "d ";
        }
        if ($hrsDiff > '0') {
            $uptime .= $hrsDiff . "h ";
        }
        if ($minsDiff > '0') {
            $uptime .= $minsDiff . "m ";
        }
        if ($secsDiff > '0') {
            $uptime .= $secsDiff . "s ";
        }
    } else {
        if ($yearsDiff > '0') {
            $uptime .= $yearsDiff . " years, ";
        }
        if ($daysDiff > '0') {
            $uptime .= $daysDiff . " day" . ($daysDiff != 1 ? 's' : '') . ", ";
        }
        if ($hrsDiff > '0') {
            $uptime .= $hrsDiff     . "h ";
        }
        if ($minsDiff > '0') {
            $uptime .= $minsDiff   . "m ";
        }
        if ($secsDiff > '0') {
            $uptime .= $secsDiff   . "s ";
        }
    }
    return trim($uptime);
}
function setInterval($f, $milliseconds){
  $seconds=(int)$milliseconds/1000;
  while(true){
    sleep($seconds);
    $f();
  }
}
function timeZone_Default(){
  if($_SESSION['localTimeZone']){
    $timezone_offset_minutes = $_SESSION['localTimeZone'];
    return $timezone_offset_minutes;
  }
}
function timezoneDate($time,$timeZone_Default){
  $time = str_replace("T"," ",$time);
  $time = str_replace("Z","",$time);
  $pre_date = date('Y-m-d H:i:s',strtotime($time));
  $utc_date = DateTime::createFromFormat('Y-m-d H:i:s',$pre_date,new DateTimeZone('UTC'));
  $nyc_date = $utc_date;
  $nyc_date->setTimeZone(new DateTimeZone($timeZone_Default));
  $date = $nyc_date->format('Y-m-d H:i:s');
  return $date;
}
function defaultUTCZoneDates($diff){
  date_default_timezone_set('UTC');
  $unixstartdate = date('Y-m-d@H:i:s.uZ', strtotime(date('Y-m-d H:i:s') .' '.$diff));
  $unixenddate = date('Y-m-d@H:i:s.uZ',strtotime(date('Y-m-d H:i:s') ));
  $unixstdate = str_replace("@","T",$unixstartdate);
  $unixEdate = str_replace("@","T",$unixenddate);
  $return_array = array(
    $unixstdate,
    $unixEdate
  );
  return $return_array;
}
function getPercentage($total,$acq){
  if($total > 0){
      return round(($acq/$total)*100);
  }else{
    return 0;
  }

}
function singleTodoubleBackslash($url) {
    return substr_replace($url, '\\\\', strrpos($url, '\\'), 1);
}
/* useful functions */




?>