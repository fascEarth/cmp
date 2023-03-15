<?php

class redisStore
{

    
   public $redis;

    public function __construct()
    {
        $this->redis = new Redis(); 
        $this->redis->connect('127.0.0.1', 6379);
    }
   
    public function setData($data,$label)
    {       
        $label = session_id()."_".$label;
        //print_r(json_decode($label));exit;
        $this->redis->set(base64_encode($label), json_encode($data),86400);
        
    }

    public function getData($label)
    {
        $label = session_id()."_".$label;
        
        
        $res = array();
        $res = $this->redis->get(base64_encode($label));
        
        if(isset($res) && !empty($res)){
            $res = json_decode($res);
        }
        return $res;
    }

    
    


}

?>