 <?php
 $displayMenu = "";
 if(isset($_SESSION['roleRoutes']) && !empty($_SESSION['roleRoutes'])){
  $roleRoutes = $_SESSION['roleRoutes'];
  if($roleRoutes){
    foreach($roleRoutes as $row){
      if($row['pool']){
        $displayMenu .= '<li class="navigation-header">
        <a class="navigation-header-text">'.$header_lang_data[$row['poolName']].'</a>
        <i class="navigation-header-icon material-icons">more_horiz</i>
        </li>';
      }
      if($row['children']){
        foreach($row['children'] as $crow){
          if($crow['submenu']){
            $displayMenu .= ' <li id="'.$crow['main'].'Main" class="bold csidenavtitles"><a class="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"> <img src="app/views/assets/img/menu-icon/'.$crow['imageIcon'].'" alt="" /> <span class="menu-title" data-i18n="'.$header_lang_data[$crow['title']].'">'.$header_lang_data[$crow['title']].'</span><span style="display:none;"  id="'.$crow['main'].'Notification" class="badge badge pill orange float-right mr-10">1</span></a>
              ';
              $displayMenu .= ' <div class="collapsible-body" id="'.$crow['main'].'bodyMain" >
              <ul class="collapsible collapsible-sub" data-collapsible="accordion">';
              if($crow['submenu']){
                foreach($crow['submenu'] as $scrow){
                  $passURI = "javascript:void(0);";
                  if($scrow['uriAddr']){
                    $passURI = "#".$scrow['uriAddr'];
                  }
                 
                  $displayMenu .= '<li class="active" id="'.$crow['main'].$scrow['main'].'Main"><a class="active" href="'.$passURI.'"><img class="sidenav-sub" src="app/views/assets/img/menu-icon/'.$scrow['imageIcon'].'" alt="" /><span data-i18n="Modern">'.$header_lang_data[$scrow['title']].'</span></a>
              </li>';
                }
              }
            

              $displayMenu .= ' </ul>
              </div>';
              $displayMenu .= ' 
        </li>';
          }else{
            $passURI = "javascript:void(0);";
                  if($crow['uriAddr']){
                    $passURI = "#".$crow['uriAddr'];
                  }
            $displayMenu .= '<li class="bold csidenavtitles" id="'.$crow['main'].'Main"><a class="waves-effect waves-cyan " href="'.$passURI.'"> <img src="app/views/assets/img/menu-icon/'.$crow['imageIcon'].'" alt="" /> <span class="menu-title" data-i18n="'.$header_lang_data[$crow['title']].'">'.$header_lang_data[$crow['title']].'</span></a>';
          }
          
        }
      }  
    }
  }
 }
 ?>
 <!-- BEGIN: SideNav-->
 <aside class="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square">
      <div class="brand-sidebar">
        <h1 class="logo-wrapper">
          <a class="brand-logo darken-1" href="#dashboard">
            <img id="detasadLogoM1" class="hide-on-med-and-down" src="app/views/assets/img/logo/cloud-icon.png" height="35" alt="logo" style="display:none;" />
            <img id="detasadLogoM2" class="show-on-medium-and-down hide-on-med-and-up" src="app/views/assets/img/logo/logo-icon.png" alt="logo" style="display:none;" />
            <span class="logo-text hide-on-med-and-down">
              <img id="detasadLogoL1" class="hide-on-med-and-down" src="app/views/assets/img/logo/deta-cloud-logo.png" width="185" height="35" alt="logo" />
            </span>
          </a>
          <!-- <a class="navbar-toggler" href="javascript:void(0);">
            <i class="material-icons">radio_button_checked</i></a> -->
          </h1>
      </div>
      <ul class="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow" id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion">

        <!-- HTML MENU ICON -->
        <!--
        <li id="dashboardMain" class="active bold csidenavtitles"><a class="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><img src="app/views/assets/img/menu-icon/dashboard.svg" alt="" /><span class="menu-title" data-i18n="Dashboard">Dashboard</span></a>
          <div class="collapsible-body">
            <ul class="collapsible collapsible-sub" data-collapsible="accordion">
              <li class="active" id="dashboarddefaultMain"><a class="active" href="#dashboard"><i class="fa fa-circle-thin" aria-hidden="true"></i><span data-i18n="Modern">Default Dashboard</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li class="navigation-header"><a class="navigation-header-text">CLOUD SERVICES</a><i class="navigation-header-icon material-icons">more_horiz</i>
        </li>
        <li class="bold csidenavtitles" id="instanceMain"><a class="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><img src="app/views/assets/img/menu-icon/elastic-instance.svg" alt="" /><span class="menu-title" data-i18n="Invoice">Elastic Instance</span></a>
          <div class="collapsible-body">
            <ul class="collapsible collapsible-sub" data-collapsible="accordion">
              <li id="instanceminstanceMain" ><a href="#minstance"><i class="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">Manage Instance</span></a>
              </li>
              <li id="instancecinstanceMain"><a href="#cinstance"><i class="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">Create Instance</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li class="navigation-header"><a class="navigation-header-text">BILLING</a><i class="navigation-header-icon material-icons">more_horiz</i>
        </li>
        <li class="bold csidenavtitles" id="invoicesMain"><a class="waves-effect waves-cyan " href="#invoices"><img src="app/views/assets/img/menu-icon/invoice.svg" alt="" /><span class="menu-title" data-i18n="Contacts">Invoices</span></a>
        <li class="bold csidenavtitles"><a class="waves-effect waves-cyan " href="javascript:void(0);"><img src="app/views/assets/img/menu-icon/payment.svg" alt="" /><span class="menu-title" data-i18n="Contacts">Payment Method</span></a>
        </li>
        <li class="navigation-header"><a class="navigation-header-text">SETTINGS</a><i class="navigation-header-icon material-icons">more_horiz</i>
        </li>
        <li class="bold csidenavtitles"><a class="waves-effect waves-cyan " href="#account"><img src="app/views/assets/img/menu-icon/account.svg" alt="" /><span class="menu-title" data-i18n="Contacts">Account</span></a></li>
        <li class="bold"><a class="waves-effect waves-cyan " href="#"><img src="app/views/assets/img/menu-icon/shield.svg" alt="" /><span class="menu-title" data-i18n="Contacts">Security</span></a>
        </li>
        <li class="navigation-header"><a class="navigation-header-text">MISC</a><i class="navigation-header-icon material-icons">more_horiz</i>
        </li>
        <li class="bold"><a class="waves-effect waves-cyan " href="#"><img src="app/views/assets/img/menu-icon/support.svg" alt="" /><span class="menu-title" data-i18n="Contacts">Support</span></a></li>
        <li class="bold"><a class="waves-effect waves-cyan " href="#"><img src="app/views/assets/img/menu-icon/faq.svg" alt="" /><span class="menu-title" data-i18n="Contacts">FAQ</span></a>
        </li>

        -->
        <!-- END HTML MENU ICON -->




        <?php  echo $displayMenu; ?>
        <!--<li id="dashboardMain" class="active bold csidenavtitles"><a class="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i class="material-icons">dashboard</i><span class="menu-title" data-i18n="Dashboard">Dashboard</span><span class="badge badge pill orange float-right mr-10">1</span></a>
          <div class="collapsible-body">
            <ul class="collapsible collapsible-sub" data-collapsible="accordion">
              <li class="active" id="dashboarddefaultMain"><a class="active" href="#dashboard"><i class="material-icons">radio_button_unchecked</i><span data-i18n="Modern">Default Dashboard</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li class="navigation-header"><a class="navigation-header-text">CLOUD SERVICES</a><i class="navigation-header-icon material-icons">more_horiz</i>
        </li>
        <li class="bold csidenavtitles" id="instanceMain"><a class="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i class="material-icons">branding_watermark</i><span class="menu-title" data-i18n="Invoice">Elastic Instance</span></a>
          <div class="collapsible-body">
            <ul class="collapsible collapsible-sub" data-collapsible="accordion">
              <li id="instanceminstanceMain" ><a href="#minstance"><i class="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">Manage Instance</span></a>
              </li>
              <li id="instancecinstanceMain"><a href="#cinstance"><i class="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">Create Instance</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li class="navigation-header"><a class="navigation-header-text">BILLING</a><i class="navigation-header-icon material-icons">more_horiz</i>
        </li>
        <li class="bold csidenavtitles" id="invoicesMain"><a class="waves-effect waves-cyan " href="#invoices"><i class="material-icons">description</i><span class="menu-title" data-i18n="Contacts">Invoices</span></a>
        <li class="bold csidenavtitles"><a class="waves-effect waves-cyan " href="javascript:void(0);"><i class="material-icons">credit_card</i><span class="menu-title" data-i18n="Contacts">Payment Method</span></a>
        </li>
        <li class="navigation-header"><a class="navigation-header-text">SETTINGS</a><i class="navigation-header-icon material-icons">more_horiz</i>
        </li>
        <li class="bold csidenavtitles"><a class="waves-effect waves-cyan " href="#account"><i class="material-icons">person</i><span class="menu-title" data-i18n="Contacts">Account</span></a></li>
        <li class="bold"><a class="waves-effect waves-cyan " href="#"><i class="material-icons">security</i><span class="menu-title" data-i18n="Contacts">Security</span></a>
        </li>
        <li class="navigation-header"><a class="navigation-header-text">MISC</a><i class="navigation-header-icon material-icons">more_horiz</i>
        </li>
        <li class="bold"><a class="waves-effect waves-cyan " href="#"><i class="material-icons">help</i><span class="menu-title" data-i18n="Contacts">Support</span></a></li>
        <li class="bold"><a class="waves-effect waves-cyan " href="#"><i class="material-icons">chat_bubble</i><span class="menu-title" data-i18n="Contacts">FAQ</span></a>
        </li>-->
      </ul>
      <div class="navigation-background"></div><a class="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only" href="javascript:void(0);" data-target="slide-out"><i class="fa fa-bars fs-20" aria-hidden="true"></i></a>
    </aside>
    <!-- END: SideNav-->