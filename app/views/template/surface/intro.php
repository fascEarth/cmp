
<!-- / Intro -->
<div id="intro">
    <div class="row">
        <div class="col s12">
            <div id="img-modal" class="modal white border-radius-10">
                <div class="modal-content">
                    <div class="bg-img-div"></div>
                    <div class="carousel carousel-slider center intro-carousel">
                        <div class="carousel-fixed-item center middle-indicator">
                            <div class="left">
                                <button class="movePrevCarousel middle-indicator-text btn btn-flat purple-text waves-effect waves-light btn-prev">
                                    <i class="fa fa-angle-left"></i> <span class="hide-on-small-only"><?php echo $header_lang_data['common_introcard_prev']; ?></span>
                                </button>
                            </div>

                            <div class="right">
                                <button class="moveNextCarousel middle-indicator-text btn btn-flat purple-text waves-effect waves-light btn-next">
                                    <span class="hide-on-small-only"><?php echo $header_lang_data['common_introcard_next']; ?></span> <i class="fa fa-angle-right"></i>
                                </button>
                            </div>
                        </div>
                        <div class="carousel-item slide-1">
                            <img src="app/views/html/surface/dashboard/img/welcome-1.png" alt="" class="responsive-img animated fadeInUp slide-1-img">
                            <h5 class="intro-step-title mt-7 center animated fadeInUp"><?php echo $header_lang_data['common_introcard_scr1_label_0']; ?></h5>
                            <p class="intro-step-text mt-5 animated fadeInUp"><?php echo $header_lang_data['common_introcard_scr1_label_1']; ?></p>
                        </div>
                        <div class="carousel-item slide-2">
                            <img src="app/views/html/surface/dashboard/img/welcome-2.png" alt="" class="responsive-img slide-2-img">
                            <h5 class="intro-step-title mt-7 center"><?php echo $header_lang_data['common_introcard_scr2_label_0']; ?></h5>
                            <p class="intro-step-text mt-5"><?php echo $header_lang_data['common_introcard_scr2_label_1']; ?></p>
                        </div>
                        <div class="carousel-item slide-3">
                            <img src="app/views/html/surface/dashboard/img/welcome-3.png" alt="" class="responsive-img slide-1-img">
                            <h5 class="intro-step-title mt-0 center"><?php echo $header_lang_data['common_introcard_scr3_label_0']; ?></h5>
                            <div class="row">
                                <div class="col m6 s12">
                                    <ul class="feature-list left-align">
                                        <li><i class="material-icons">check</i> <?php echo $header_lang_data['common_introcard_scr3_label_1']; ?></li>
                                        <li><i class="material-icons">check</i> <?php echo $header_lang_data['common_introcard_scr3_label_2']; ?></li>
                                        <li><i class="material-icons">check</i> <?php echo $header_lang_data['common_introcard_scr3_label_1']; ?></li>
                                    </ul>
                                </div>
                                <div class="col m6 s12">
                                    <ul class="feature-list left-align">
                                        <li><i class="material-icons">check</i> <?php echo $header_lang_data['common_introcard_scr3_label_3']; ?></li>
                                        <li><i class="material-icons">check</i> <?php echo $header_lang_data['common_introcard_scr3_label_4']; ?></li>
                                        <li><i class="material-icons">check</i> <?php echo $header_lang_data['common_introcard_scr3_label_5']; ?></li>
                                    </ul>
                                </div>
                                <div class="row">
                                    <div class="col s12 center">
                                        <button type="button" onClick="redirecttocinstance()" class="get-started btn waves-effect waves-light gradient-45deg-purple-deep-orange mt-3 modal-close cursor-pointer"> <?php echo $header_lang_data['common_introcard_getstarted']; ?></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- / Intro -->