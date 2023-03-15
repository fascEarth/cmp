<?php

echo '<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">';
include   'app/views/template/dcc/header-script.php';
echo '    <body class="vertical-layout vertical-menu-collapsible page-header-dark vertical-modern-menu preload-transitions 1-column login-bg   blank-page blank-page" data-open="click" data-menu="vertical-modern-menu" data-col="1-column">';
echo              '<div class="row" id="app">';


echo '</div>';
include     'app/views/template/dcc/footer-script.php';
echo '      <div id="appSpScripts"><script src="system/router/route.js"></script>
<script src="system/router/router.js"></script>
<script src="system/router/app.js"></script></div><div id="endScript"></div>';
echo '   </body>
       </html>';
       
?>