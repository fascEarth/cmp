var earl_dcc_dignin_info_oc = "";
'use strict';

(function () {
  
  /*
  Note: No need to give the full path. default route path is already defined. mention the path&filename&filetype that you've created within the HTML directory.
  */
  function init() {
    
    let route_config;
    var router = [];

    var orgPathName =window.location.pathname;
    var divededPathName = orgPathName.split("/");
    var pathName = ((divededPathName[1])?divededPathName[1]:"");
    
    var appPathAddr = 'system/router/'+pathName+'approute.json';
    if(pathName == "surface"){
      earl_dcc_dignin_info_oc = JSON.parse(getLocalStorageFromServOut("dcc_siginin_info"));
      localStorage.setItem("langC",earl_dcc_dignin_info_oc.lang);
        
      var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
      var dcc_siginin_info = ((earl_dcc_dignin_info)?earl_dcc_dignin_info:[]);  
        
     
      var roleResponse = dcc_siginin_info.roleRoutes;
      
        loadJSONMain(function(response) {

          var listPagesR = [];
          
            roleResponse.map(function(relem){
              if(relem.children){
                relem.children.map(function(relemchildelem){
                  if(relemchildelem.uriAddr){
                    listPagesR.push(relemchildelem.uriAddr);                    
                  }
                  
                  if(relemchildelem.listuriAddr){
                    
                    listPagesR = listPagesR.concat(relemchildelem.listuriAddr);   
                    
                    
                  }
                  if(relemchildelem.submenu){
                    relemchildelem.submenu.map(function(relemchildsubmenuelem){
                      
                      if(relemchildsubmenuelem.uriAddr){
                        listPagesR.push(relemchildsubmenuelem.uriAddr);                    
                      }
                      if(relemchildsubmenuelem.listuriAddr){
                        
                        
                        listPagesR = listPagesR.concat(relemchildsubmenuelem.listuriAddr);   
                        
                        
                      }
                    });
                  }
                });
              }
            });  
            


          JSON.parse(response).map(function(elem){
            if(listPagesR.includes(elem.page)){
              router.push(new Route(elem.page, elem.path));
            }
            
          });
        
          router = new Router(router,undefined);
        },appPathAddr);
      
      }else if(pathName == "signup"){

        earl_dcc_dignin_info_oc = JSON.parse(getLocalStorageFromServOut("dcc_siginin_info"));
        localStorage.setItem("langC",earl_dcc_dignin_info_oc.lang);
        
        loadJSONMain(function(response) {
          JSON.parse(response).map(function(elem){
        
            router.push(new Route(elem.page, elem.path));
          });
        
          router = new Router(router,undefined);
        },appPathAddr);


    }else{
      loadJSONMain(function(response) {
        JSON.parse(response).map(function(elem){
      
          router.push(new Route(elem.page, elem.path));
        });
      
        router = new Router(router,undefined);
      },appPathAddr);
    }  





  }
  init();
}());
async function loadJSONMain(callback,url) {
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
