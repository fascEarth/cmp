var oneTomeCarouselModel = ((localStorage.getItem("oneTomeCarouselModel"))?localStorage.getItem("oneTomeCarouselModel"):"true");
//var earl_dcc_dignin_info_oc = JSON.parse(getLocalStorageFromServ("dcc_siginin_info"));
var commonVMExistC = false;

$(function(){
  
  $('html, body').animate({ scrollTop: 0 }, 'fast');
  $('body').css("overflow","unset");


    $('#cintanceFooter').hide();
    $('#cintanceFooterOrg').hide();
      $('#surfacecommonFooter').show();

      var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
      var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
      
      var reqParams = {
        'from':'away',
        'secudeco':$('#establish_common_formSubmit').val(),
        'portal':'minstance',
        'portalsubmit':'level_2',
        'tenant_id':dcc_siginin_info.tenant_id
      };
    
    
      var data = ajaxDuty(reqParams, 'app/views/html/surface/cloudservices/elasticInstance/minstance/index.php', 'html', false);
        if (data) {    
          
          data = JSON.parse(data);  
          
          
          if(data.code == 200){


            var mdata = ((JSON.parse(data.data).data.length >0)?JSON.parse(data.data).data:[]);
        
        if(mdata.length == 0){
          commonVMExistC = false;
          if(oneTomeCarouselModel == "true"){
            oneTomeCarouselModel = "false";
            localStorage.setItem("oneTomeCarouselModel",oneTomeCarouselModel);
            setTimeout(function () { $('.modal').modal('open'); }, 1800)
        }
    
        
        }else{
          commonVMExistC = true;
        }


          }
        }

     
    

    $('.modal').modal({
        'onOpenEnd': initCarouselModal,
    });
      $('.btn-next').on('click', function (e) {
        $('.intro-carousel').carousel('next');
    })
    
    $('.btn-prev').on('click', function (e) {
        $('.intro-carousel').carousel('prev');
    })
    
    // Inti carousel when modal pops up
    
    function initCarouselModal() {
        $('.carousel.carousel-slider').carousel({
            fullWidth: true,
            indicators: true,
            onCycleTo: function () {
    
                // When carousel is at it's first step disable prev button
    
                if ($('.carousel-item.active').index() == 1) {
                    $('.btn-prev').addClass('disabled');
    
                }
    
                // When carousel is at 2nd or 3rd step 
    
                else if ($('.carousel-item.active').index() > 1) {
    
                    // activate button
    
                    $('.btn-prev').removeClass('disabled');
                    $('.btn-next').removeClass('disabled');
    
                    // on 3rd step add and remove elements
    
                    if ($('.carousel-item.active').index() == 3) {
                        $('.btn-next').addClass('disabled');
                    }
                }
            }
        })
    }

    

  });


  function objectifyForm(formArray) {
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++){
      returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
  }

  
  function redirecttocinstance(){
    $('.modal').modal('close');
    location.href = "#cinstance";
  }

  async function loadJSON(callback,url) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', url, true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }


  function logoutSurface(){

    var earl_dcc_siginin_info_org = earl_dcc_dignin_info_oc;
    var dcc_siginin_info_org = (earl_dcc_siginin_info_org?earl_dcc_siginin_info_org:[]); 
    
    
    let reqParams = {  
        'data':JSON.stringify({
          'userName':dcc_siginin_info_org.email,
          'accessToken':dcc_siginin_info_org.accessToken

        }),    
        'portal':'common',
        'portalsubmit':'level_1'
      };
      var data = ajaxDuty(reqParams, 'app/helpers/php/common.php', 'html', false);
      if (data) { 
        
        data = JSON.parse(data);
        
        if(data.code == 200 && data.data.status_code == 200){
          localStorage.removeItem("dcc_siginin_info");
          localStorage.removeItem("gatheredInfoCards");
          localStorage.removeItem("accountPageInfo");
          localStorage.removeItem("oneTomeCarouselModel");
          localStorage.removeItem("vmAllDetails");
          localStorage.removeItem("wmksArr");
          
          
          //localStorage.clear();
          window.location.href = "dcc#login";
          location.reload();
        }else{
          indexToastr("error",'Error','Error Occured! Contact Administrator.',{timeOut: 5000});
        }   
      } 
  }

  
function sideNavMenuSelector(info){
  var idLabel = info.main;
  if(info.menuType == "multiple"){
    $('#' + info.main + "bodyMain").css("display", "block");
    $('#' + info.main + "bodyMain").addClass("active");   ;
    $('#' + info.main + "Main").addClass("active");
    idLabel = info.main + info.sub; 
  }

  $('.csidenavtitles').removeClass("active");
  $('.csidenavtitles a').removeClass("active");
  $('#' + idLabel + "Main").addClass("active");
  $('#' + idLabel + "Main a").addClass("active");
  $('#' + info.main + "Main").addClass("active");
  
}

function getMyScr(){
  var ploa = window.location.hash;
  if (window.location.hash.includes("?")) {
      ploa = window.location.hash.split('?')[0];
  }

  return ploa;
}