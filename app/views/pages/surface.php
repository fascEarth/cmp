<?php 


$header_lang_data = getLangDataOuter("/app/views/template/surface/lang/");

echo '<!DOCTYPE html>
      <html class="loading" lang="en" data-textdirection="ltr">';
      include   'app/views/template/surface/header-script.php';
      echo '    <body class="vertical-layout vertical-menu-collapsible page-header-dark vertical-modern-menu preload-transitions 2-columns   " data-open="click" data-menu="vertical-modern-menu" data-col="2-columns">';
      include   'app/views/template/surface/header.php';
      include   'app/views/template/surface/sidenavbar.php';
      echo              '<div id="main">
      
      <div class="row" id="app">  <style>.loader {
        width: 0;
        height: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        padding: 15px;
        border: 6px solid #27a3dd;
        border-right-color: #013850;
        border-radius: 22px;
        -webkit-animation: rotate 1s infinite linear;
      }
      @-webkit-keyframes rotate {
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      </style>
      <div class="loader"></div>';
      
      
      echo '</div>
      </div>';
      echo '
    ';
      include   'app/views/template/surface/intro.php';
      include   'app/views/template/surface/footer.php';
      include     'app/views/template/surface/footer-script.php';
      echo '      <div id="appSpScripts">    
     <script src="system/router/route.js"></script>
      <script src="system/router/router.js"></script>
      <script src="system/router/app.js"></script></div><div id="endScript"></div>';
      echo '   </body>
             </html>';
             
?>