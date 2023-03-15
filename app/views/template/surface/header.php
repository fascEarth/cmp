
<!-- BEGIN: Header-->
<!-- <div id="most_fav_title" ></div> -->
<header class="page-topbar" id="header">
      <div class="navbar navbar-fixed"> 
        <nav class="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-purple no-shadow">
          <div class="nav-wrapper">
            <div class="header-search-wrapper hide-on-med-and-down"><i class="fa fa-search fs-20" aria-hidden="true"></i>
              <input class="header-search-input z-depth-2" type="text" name="Search" placeholder="<?php echo $header_lang_data['common_header_search_placeholder']; ?>" data-search="template-list">
              <ul class="search-list collection display-none"></ul>
             <!-- <div id="fav_title" style="display:none;"></div>-->
            </div>
            <ul class="navbar-list right">
              <li><a class="waves-effect waves-block waves-light" href="#cinstance"><span class="menu-header-icon"><img style="top: 8px; width: 22px; height: 22px;" src="app/views/assets/img/menu-icon/vm-add/createvm.png" alt="avatar"></span></a></li>
              <li class="hide-on-med-and-down"><a class="waves-effect waves-block waves-light toggle-fullscreen" href="javascript:void(0);"><span class="menu-header-icon"><img style="top: 8px;" src="app/views/assets/img/menu-icon/expand.svg" alt="avatar"></span></a></li>
              <li class="hide-on-large-only search-input-wrapper"><a class="waves-effect waves-block waves-light search-button" href="javascript:void(0);"><i class="fa fa-search fs-20" aria-hidden="true"></i></a></li>
              <li><a class="waves-effect waves-block waves-light notification-button" href="javascript:void(0);" ><span class="menu-header-icon"><img style="top: 8px;" src="app/views/assets/img/menu-icon/bell.svg" alt="avatar"></span></a></li>
              <li><a class="waves-effect waves-block waves-light profile-button" href="javascript:void(0);" data-target="profile-dropdown"><span class="avatar-status avatar-online"><img src="app/views/assets/img/logo/user-login.png" alt="avatar"><i></i></span></a></li>
            </ul>
            <!-- notifications-dropdown-->
            <ul class="dropdown-content" id="notifications-dropdown">
              <li>
                <h6>NOTIFICATIONS<span class="new badge">5</span></h6>
              </li>
              <li class="divider"></li>
              <li><a class="black-text" href="#!"><span class="material-icons icon-bg-circle cyan small">add_shopping_cart</span> A new order has been placed!</a>
                <time class="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">2 hours ago</time>
              </li>
              <li><a class="black-text" href="#!"><span class="material-icons icon-bg-circle red small">stars</span> Completed the task</a>
                <time class="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">3 days ago</time>
              </li>
              <li><a class="black-text" href="#!"><span class="material-icons icon-bg-circle teal small">settings</span> Settings updated</a>
                <time class="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">4 days ago</time>
              </li>
              <li><a class="black-text" href="#!"><span class="material-icons icon-bg-circle deep-orange small">today</span> Director meeting started</a>
                <time class="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">6 days ago</time>
              </li>
              <li><a class="black-text" href="#!"><span class="material-icons icon-bg-circle amber small">trending_up</span> Generate monthly report</a>
                <time class="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">1 week ago</time>
              </li>
            </ul>
            <!-- profile-dropdown-->
            <ul class="dropdown-content" id="profile-dropdown">
              <li>
                <ul class="collection mt-0 mb-0">
                  <li class="collection-item avatar" style="min-height: 62px; cursor: auto;">
                     <img src="app/views/assets/img/logo/user-login.png" alt="" class="circle">
                     <p class="font-weight-600 text-nowrap-profile"><?php echo ((isset($_SESSION['login_information_protected']['email']) && !empty($_SESSION['login_information_protected']['email']))?$_SESSION['login_information_protected']['email']:"none"); ?></p>
                     <p class="medium-small blue-text text-nowrap-profile"><?php echo ((isset($_SESSION['login_information_protected']['role_name']) && !empty($_SESSION['login_information_protected']['role_name']))?ucfirst($_SESSION['login_information_protected']['role_name']):"none"); ?></p>
                  </li>
                </ul>
              </li>
              <li class="divider"></li>
              <li><a class="grey-text text-darken-1" href="#account"><i class="fa fa-user-o fs-20" aria-hidden="true"></i> <?php echo $header_lang_data['profile']; ?></a></li>
              <li><a class="grey-text text-darken-1" onClick="logoutSurface()" ><i class="fa fa-sign-out fs-20" aria-hidden="true"></i> <?php echo $header_lang_data['logout']; ?></a></li>
            </ul>
          </div>
          <nav class="display-none search-sm">
            <div class="nav-wrapper">
              <form id="navbarForm">
                <div class="input-field search-input-sm">
                  <input class="search-box-sm mb-0" type="search" required="" id="search" placeholder="<?php echo $header_lang_data['common_header_search_placeholder']; ?>" data-search="template-list">
                  <label class="label-icon" for="search"><i class="material-icons search-sm-icon">search</i></label><i class="material-icons search-sm-close">close</i>
                  <ul class="search-list collection search-list-sm display-none"></ul>
                </div>
              </form>
            </div>
          </nav>
        </nav>
      </div>
    </header>
    <!-- END: Header-->




    <!-- Session Timeout Sweet Alert -->
<div class="sweet-overlay" tabindex="-1" style="opacity: 0; display: none;"></div>
<div id="header_sweet_alert_div" class="sweet-alert hideSweetAlert" data-custom-class="" data-has-cancel-button="true" data-has-confirm-button="true" data-allow-outside-click="false" data-has-done-function="false" data-animation="pop" data-timer="null" style="display: none; margin-top: -165px !important; opacity: 0;">
    <div class="sa-icon sa-error" style="display: none;">
        <span class="sa-x-mark" style="display: none;">
        <span class="sa-line sa-left" style="display: none;"></span>
        <span class="sa-line sa-right" style="display: none;"></span>
        </span>
    </div>
    <div class="sa-icon sa-warning" style="display: none;">
        <span class="sa-body"></span>
        <span class="sa-dot"></span>
    </div>
    <div class="sa-icon sa-info" style="display: none;"></div>
    <div class="sa-icon sa-success" style="display: none;">
        <span class="sa-line sa-tip"></span>
        <span class="sa-line sa-long"></span>

        <div class="sa-placeholder"></div>
        <div class="sa-fix"></div>
    </div>
    <div class="sa-icon sa-custom" style="display: none; background-image: url(&quot;../assets/images/brand/favicon.png&quot;); width: 80px; height: 80px;"></div>
    <div class="timer " id="session_timer" style="display:none">
      <svg class="svg-timer" viewBox="0 0 200 200" version="1.1">
        <circle class="background-circle" r="90" cx="100" cy="100"></circle>
        <circle class="timer-circle" id="bar" r="90" cx="100" cy="100" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
      </svg>
      <h4 class="timer-sign"><span class="fs-30" id="timer-mins">2</span><span class="timer-sign-up fs-20" id="timer-secs">00</span></h4>
    </div>
    <img id="session_tick" style="display:none" class="sweet-timeout-img mx-auto" src="app/views/assets/img/sweet-alert/session-timeout.png" width="100" height="100" alt="session" />
    <img id="header_img_not_rechable" style="display:none" class="mx-auto" src="app/views/assets/img/sweet-alert/session_disconnect.png" width="120" alt="disconnect" />
    <img id="header_img_del" style="display:none" class="mx-auto" src="app/views/assets/img/sweet-alert/delete-popup.svg" width="50" alt="delete" />
    <img id="header_img_warning" style="display:none" class="mx-auto" src="app/views/assets/img/sweet-alert/warning.svg" width="50" alt="warning"/>
    <img id="header_img_tick" style="display:none" class="mx-auto" src="app/views/assets/img/sweet-alert/tick.svg" width="50" alt="tick" />

    <h2 class="fs-20" id="session_sweet_title" >Are you sure ?</h2>
    <div class="" id="wifi-loader" style="display:none">
      <svg class="circle-outer" viewBox="0 0 86 86">
        <circle class="back" cx="43" cy="43" r="40"></circle>
        <circle class="front" cx="43" cy="43" r="40"></circle>
        <circle class="new" cx="43" cy="43" r="40"></circle>
      </svg>
      <svg class="circle-middle" viewBox="0 0 60 60">
        <circle class="back" cx="30" cy="30" r="27"></circle>
        <circle class="front" cx="30" cy="30" r="27"></circle>
      </svg>
      <svg class="circle-inner" viewBox="0 0 34 34">
        <circle class="back" cx="17" cy="17" r="14"></circle>
        <circle class="front" cx="17" cy="17" r="14"></circle>
      </svg>
      <div class="text" data-text="Trying to connect server..."></div>
    </div>

    <p class="fs-16 font-weight-normal mt-0 session-p" id="session_sweet_text" >Once deleted, you will not be able to recover this imaginary file!</p>
    <fieldset>
      <input style="display:none;" id="boxFirstL" type="text" tabindex="3" placeholder="">
      <div class="sa-input-error"></div>
    </fieldset>
    <div class="sa-error-container">
        <div class="icon">!</div>
        <p>Not valid!</p>
    </div>
    <div class="sa-button-container">
      <!-- KeyWord btn -->
      <div class="sa-confirm-button-container">
          <button class="confirm btn-sm mt-2" tabindex="1" style="display: inline-block; background-color: rgb(140, 212, 245); box-shadow: none;" id="session_sweet_button">Submit</button>
          <div class="la-ball-fall">
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
      <div class="sa-confirm-button-container">
        <button class="cancel btn-sm btn-cancel" tabindex="2" style="display: inline-block; box-shadow: none;" id="session_sweet_button_cancel"></button>
      </div>
    </div>
</div>