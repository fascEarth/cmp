'use strict';

function Router(routes) {
    try {
        if (!routes) {
            throw 'error: routes param is mandatory';
        }
        this.constructor(routes);
        this.init();
    } catch (e) {
        console.error(e);
    }
}

Router.prototype = {
    routes: undefined,
    rootElem: undefined,
    constructor: function (routes) {
        this.routes = routes;
        this.rootElem = document.getElementById('app');
    },

    loadHtmlScript: function(htmlName){


      $.getMultiScripts = function(arr, path) {
        var _arr = $.map(arr, function(scr) {
            return $.getScript( (path||"") + scr );
        });
        _arr.push($.Deferred(function( deferred ){
            $( deferred.resolve );
        }));
        
        return $.when.apply($, _arr);
      }


      var reshtmlName = htmlName.split("#");
      let route_config;
      var orgPathName =window.location.pathname;
      var divededPathName = orgPathName.split("/");
      var pathName = ((divededPathName[1])?divededPathName[1]:"");
      
      var appPathAddr = 'system/router/'+pathName+'approute.json';
      
      loadJSONMain(function(response) {
        JSON.parse(response).map(function(elem){
          if(elem.page == reshtmlName[1]){
            if(elem.scripts){
              if(elem.scripts.virtualScripts.getscript.plugins){
                var pluginsD = [];
                loadJSONMain(function(presponse) {
                  presponse = JSON.parse(presponse);
                  elem.scripts.virtualScripts.getscript.plugins.map(function(plElem){
                    var existScripts = (localStorage.getItem("existScripts"))?JSON.parse(localStorage.getItem("existScripts")):[];
                    if(!existScripts.includes(plElem)){
                      existScripts.push(plElem.toString());
                      localStorage.setItem("existScripts",JSON.stringify(existScripts));
                      pluginsD.push(presponse.scripts[plElem].toString());
                    }
                  })
                  $.getMultiScripts(pluginsD, '').done(function() {

                    $.getMultiScripts(elem.scripts.virtualScripts.getscript.primary, '').done(function() {
                      $.getMultiScripts(elem.scripts.virtualScripts.getscript.secondary, '').done(function() {

                      });
                    });
                  });
                },'package.json');
              }else{
                $.getMultiScripts(elem.scripts.virtualScripts.getscript.primary, '').done(function() {
                  $.getMultiScripts(elem.scripts.virtualScripts.getscript.secondary, '').done(function() {

                  });
                });
              }

            }
            if(elem.functions){
              elem.functions.map(function(func){
                param = '';
                window[func](param);
              });
            }
          }

        });


      },appPathAddr);





     },
    init: function () {
        var r = this.routes;
        (function(scope, r) {
            window.addEventListener('hashchange', function (e) {
                scope.hasChanged(scope, r);
            });
        })(this, r);
        this.hasChanged(this, r);
    },
    hasChanged: function(scope, r){

        if (window.location.hash.length > 0) {

              var action = true;
              for (var i = 0, length = r.length; i < length; i++) {
                  var route = r[i];
                  var ploa = window.location.hash.substr(1);
                  if(window.location.hash.includes("?")){
                    ploa = window.location.hash.split('?')[0];
                  }

                  if(route.isActiveRoute(ploa)) {
                      action = false;
                      
                      scope.goToRoute(route.htmlName);
                      return;
                  }
              }
               
              if(action){
                var configPageScr = (localStorage.getItem('configPageScr'))?localStorage.getItem('configPageScr'):'main';
                location.href="/";
              }




        }
    },
    disableDecorationTemplate: function(){

    },
    enableDecorationTemplate: function(){

    },
    disableDecorationTemplateAfterLoad: function(){

    },
    goToRoute: function (htmlName) {

        (function(scope) {
            var url = 'app/views/html/' + htmlName;

            var xhttp;
            if (window.XMLHttpRequest) {
              xhttp = new XMLHttpRequest();
            } else {

              xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    scope.rootElem.innerHTML = this.responseText;
                }
            };
            xhttp.onload = function () {


              var ploa = window.location.hash;
              if(window.location.hash.includes("?")){
                ploa = window.location.hash.split('?')[0];
              }
              scope.loadHtmlScript(ploa);
            };

            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);
    }
};
