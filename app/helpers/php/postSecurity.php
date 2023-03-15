<?php

class postsecurity
{
    public function __construct()
    {
        if(isset($_POST) && !empty($_POST)){
            header('Content-Type: application/json; charset=utf-8');
            $this->checkPost();
         }
       
    }

    public function clearPost(){
        
        $cpost = array_map(function($v){
            
            $itype = gettype($v); 
            
            if($itype == "string"){
                $v = trim(strip_tags($v));
            }
            return $v;
        }, $_POST);
    
        $_POST = $cpost;
    }
    public function checkPost()
    {
        $commonTallow = false;
        if(json_encode($_POST) != strip_tags(json_encode($_POST))){
            $commonTallow = true;
        } 
        
        if($commonTallow){
            $return_msg = array(
                'status' => 'error',
                'code' => "0",
                'data' => "0"
              );
              echo json_encode($return_msg);exit;
              
        }
        $this->clearPost();   
    }

   
}

?>