var commonNSinetrnetWData = false;
var selectedWdata = {};

var indexMsgnetib;
  $(function() {
    var langC = localStorage.getItem("langC");
    loadJSONgeneral(function(response) {  
        indexMsgnetib = JSON.parse(response);      
        callnetibFiles();   
      },"app/views/html/surface/networkservices/internetbandwidth/lang/"+langC+".json");

 


   

});
function callnetibFiles(){
    var mainPage = "internetbandwidth";   
    
    $('.csidenavtitles').removeClass("active");
    $('.csidenavtitles a').removeClass("active");
    $('#'+mainPage+"Main").addClass("active");
    $('#'+mainPage+"Main a").addClass("active");

 

 

  initNSInternetW();
}

function initNSInternetW(){
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var loguserInfo = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 

    var reqParams = {
        'from':'nsinternetw',
      'secudeco':$('#establish_ns_internetbth_formSubmit').val(),
          'user_serial_id': loguserInfo.user_serial_id,
          "tenantId": loguserInfo.tenant_id,
          'portal': 'nsinternetw',
          'portalsubmit': 'level_1'
      };
      var data = ajaxDuty(reqParams, 'app/views/html/surface/networkservices/internetbandwidth/index.php', 'html', false);
      if (data) {
        
          data = JSON.parse(data);
          data = JSON.parse(data.data);
          
          if (data.status == "ok") {
            commonNSinetrnetWData = data.message;
            setTimeout(function(){
                plotNSInternetW();
            },500);
            
          
          } else {
            
          }
    
      } else {
        
       
        
      }
}

function plotNSInternetW(){
    

    var commonNSinetrnetWDatalist = "";
    var selectedcommonNSinetrnetWData = "";
    var selectedSar = "";
    var selectedVals = "";
  
  
    if (commonNSinetrnetWData) {
        commonNSinetrnetWData.list.map(function(elem) {
  
            if (elem.id == commonNSinetrnetWData.defaultId) {
                selectedWdata = elem;
                selectedVals = elem.value;
                selectedSar = elem.data;
                var selectedSarSpl = selectedSar.split(" ");
                selectedSar = selectedSarSpl[0];
                selectedcommonNSinetrnetWData = "selected";
            } else {
                selectedcommonNSinetrnetWData = "";
            }
            commonNSinetrnetWDatalist += `<option ` + selectedcommonNSinetrnetWData + `  value="` + elem.id + `">` + elem.value + `</option>`;
        });
    } else {
        commonNSinetrnetWDatalist += `<option value="" disabled selected>`+indexMsgnetib.netib_label_6+`</option>`;
    }


    $('#networkSTSSelector').html(commonNSinetrnetWDatalist);
    $('#networkSTSSelectorVal').html(selectedSar+" SAR");
    $('#networkSTSSelectorAVal').html(selectedVals);
    $('#networkSTSSelectorBVal').html(selectedVals);
    $(".select2").select2({
        dropdownAutoWidth: true,
        width: '100%',
    });

    $('#networkSTSSelector').change(function() {
        var networkSTSSelectorId = $('#networkSTSSelector').val();
        commonNSinetrnetWData.list.map(function(elem) {

            if (elem.id == networkSTSSelectorId) {
                selectedWdata = elem;
                var ksr = elem.data.split(" ");
                $('#networkSTSSelectorVal').html(ksr[0]+" SAR");

                

            }

        });
        


    });


    setTimeout(function(){
        $('#original_content_ns_ibh').show();
        $('#skeleton_content_ns_ibh').hide();
    },500);



}

function upgradeBtnNSinternetw(){
        openBodyProgress();
        $('#upgradeBtnNSinternetw').addClass("disabled");    
        $('#upgradeBtnNSinternetw').removeAttr("onClick");


        setTimeout(function(){

        

            var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
        var loguserInfo = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    
        var reqParams = {
            'from':'nsinternetw',
          'secudeco':$('#establish_ns_internetbth_formSubmit').val(),
          'data':selectedWdata,
              'user_serial_id': loguserInfo.user_serial_id,
              "tenantId": loguserInfo.tenant_id,
              'portal': 'nsinternetw',
              'portalsubmit': 'level_2'
          };
          var data = ajaxDuty(reqParams, 'app/views/html/surface/networkservices/internetbandwidth/index.php', 'html', false);
          if (data) {
            
              data = JSON.parse(data);
              
            
              
              if (data.data.status_code == "9000") {
                
                
                $('#networkSTSSelectorAVal').html(selectedWdata.value);
                $('#networkSTSSelectorBVal').html(selectedWdata.value);
                
                  indexToastr("success", 'Success', indexMsgnetib.netib_label_7, {
                      timeOut: 5000
                  });

                  $('#upgradeBtnNSinternetw').removeClass("disabled");    
                    $('#upgradeBtnNSinternetw').attr("onClick","upgradeBtnNSinternetw()");
                    closeBodyProgress();

                  
              } else {
                
                  /*indexToastr("error", 'Error', data.data.message, {
                      timeOut: 5000
                  });*/
                  indexToastr("error", 'Error', indexMsgnetib.netib_label_8, {
                    timeOut: 5000
                });
                 

                  $('#upgradeBtnNSinternetw').removeClass("disabled");    
                    $('#upgradeBtnNSinternetw').attr("onClick","upgradeBtnNSinternetw()");
                    closeBodyProgress();


              }
        
          } else {
            
            
              indexToastr("error", 'Error', indexMsgnetib.netib_label_8, {
                  timeOut: 5000
              });

              $('#upgradeBtnNSinternetw').removeClass("disabled");    
                    $('#upgradeBtnNSinternetw').attr("onClick","upgradeBtnNSinternetw()");
                    closeBodyProgress();
              
            
          }

        },500);

}