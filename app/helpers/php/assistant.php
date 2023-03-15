<?php

class assistantInProc
{

    
   

    public function __construct()
    {
       
    }

    public function validateCSRFToken($postToken,$sessToken)
    {
        if(!isset($postToken) || !isset($sessToken)){
            $final_result = array(
                'status' => 'error',
                'code' => false,
                'data' => false
            );
            echo json_encode($final_result);exit;
        }

        if($postToken != $sessToken){

            $final_result = array(
                'status' => 'error',
                'code' => false,
                'data' => false
            );
            echo json_encode($final_result);exit;
            
        }
    }

    
    


}

?>