<?php
  class Router {
  /* Member variables */
    var $returnval;
    /* Member functions */
    function getPage($type){
      if($type == 'request_url'){
        $request_uri =  explode('?', $_SERVER['REQUEST_URI'], 2);
        $exploded_request_uri = explode('/',$request_uri[0]);
        $this->returnval =  $exploded_request_uri[1];
      }else if($type == 'base_url'){
        $this->returnval =  sprintf(
          "%s://%s%s",
          isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
          $_SERVER['SERVER_NAME'],
          $_SERVER['REQUEST_URI']
        );
      }
      return $this->returnval;
    }

    function getAddressSelf($type){
      if($type == 'base_url'){
        $this->returnval =  sprintf(
          "%s://%s%s",
          isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
          $_SERVER['SERVER_NAME'],
          ""
        );
      }
      return $this->returnval;
    }

  }
?>
