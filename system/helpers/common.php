<?php
  class Common {
  /* Member variables */
    var $returnval;
    /* Member functions */
    function getJSONdata($par){      
      $jsondata = file_get_contents($par);
      $this->returnval = json_decode($jsondata, true);
      return $this->returnval;
    }
  }
?>
