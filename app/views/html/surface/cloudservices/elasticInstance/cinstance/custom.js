var indexMsgcins;
  $(function() {
    var langC = localStorage.getItem("langC");
    loadJSONgeneral(function(response) {  
        indexMsgcins = JSON.parse(response);      
        callcinsFiles();   
      },"app/views/html/surface/cloudservices/elasticInstance/cinstance/lang/"+langC+".json");

 
   
  });
  function callcinsFiles(){
    soldoutVal = indexMsgcins.cins_label_45;
    $('#surfCloader').show();
    initCinstance();
  }

  var soldoutVal = "";
  var queryJSONData = [];
  var platforms = [];
  var datacenter = [];
  var cteams = [];
  var ctags = [];
  var cloudServerType = [];
  var cloudServerPrinterTypes = [];
  var profileData = [];
  var imageCategory = [];
  var storages = [];
  var authData = [];
  var networkSt = [];
  var pergbcost = "";
  var cdefaultStorageId = "";
  var detailedNetworks = [];
  
  var selectedOSName = "";
  var selectedOsCost = 0;
  var selectedDataCenter = "";
  var osversionId = "";
  var selectedProfileData = "";
  var selectedCloudServerVal = "";
  var selectedSizingPolicy = "";
  var commonImgLoc = "app/views/html/surface/cloudservices/elasticInstance/cinstance/img";
  
  
  function captureInstancesList(reqParams = {}) {
    var rooter = true;
    if (Object.keys(reqParams.data).length > 0) {
        rooter = false;
  
        reqParams.specialData = JSON.stringify(reqParams.data);
        
    }
  
    
  
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var loguserInfo = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    
    
    
    reqParams.from = 'cinstance';
    reqParams.secudeco = $('#establish_cinstance_finalbtn').val();
    reqParams.tenantId = loguserInfo.tenant_id;
    reqParams.userserialid = loguserInfo.userserialid;
    reqParams.portal = 'cinstance';
    reqParams.portalsubmit = 'level_2';
  
    var data = ajaxDuty(reqParams, 'app/views/html/surface/cloudservices/elasticInstance/cinstance/index.php', 'html', false);
    if (data) {
     
        data = JSON.parse(data);
        
        data = JSON.parse(data.data);
  
  
        if (rooter) {
            queryJSONData = data;
        } else {
            if (Object.keys(reqParams.data).length == 1) {
                for (var j = 0; j < platforms.list.length; j++) {
                    if (platforms.list[j].id == platforms.defaultId) {
                        platforms.list[j] = data;
                    }
  
                }
  
            } else if (Object.keys(reqParams.data).length == 2) {
                for (var j = 0; j < datacenter.list.length; j++) {
                    if (datacenter.list[j].id == datacenter.defaultId) {
                        datacenter.list[j] = data;
                    }
  
                }
  
            } else if (Object.keys(reqParams.data).length == 3) {
                for (var j = 0; j < cloudServerType.list.length; j++) {
                    if (cloudServerType.list[j].id == cloudServerType.defaultId) {
                        cloudServerType.list[j] = data;
                    }
  
                }
  
  
            } else if (Object.keys(reqParams.data).length == 4) {
  
  
                for (var i = 0; i < cloudServerType.list.length; i++) {
                    if (cloudServerType.list[i].id == cloudServerType.defaultId) {
                        for (var j = 0; j < cloudServerType.list[i].list.length; j++) {
                            if (cloudServerType.list[i].list[j].id == cloudServerType.list[i].defaultId) {
                                cloudServerType.list[i].list[j] = data;
                            }
                        }
                    }
                }
  
  
  
  
            } else if (Object.keys(reqParams.data).length == 5) {
  
  
                for (var i = 0; i < profileData.list[0].list.length; i++) {
                    if (profileData.list[0].list[i].id == profileData.list[0].defaultId) {
                        profileData.list[0].list[i] = data;
                    }
                }
  
  
  
  
            } else if (Object.keys(reqParams.data).length == 6) {
  
                imageCategory = data;
  
  
  
  
            }
  
  
  
        }
  
  
  
  
        return true;
    }
    return false;
  }
  
  function initCinstance() {
    var data = captureInstancesList({
        data: {}
    });
    if (data) {
        setTimeout(function() {
            queryJSONData.map(function(elem) {
                if (elem.type == "platforms") {
                    platforms = elem;
                    setTimeout(function() {
                        callPlatforms();
                    }, 400);
  
  
  
                } else if (elem.type == "imageCategory") {
                    imageCategory = elem;
  
                } else if (elem.type == "storages") {
  
  
                    storages = {
                        "type": "storages",
                        "defaultId": 1,
                        "list": [{
                            "id": 1,
                            "value": "Boot Disk",
                            "size": "20",
                            "pergbcost": "0.46"
                        }]
                    };
                    setTimeout(function() {
                        callStorages();
                    }, 400);
  
  
  
                } else if (elem.type == "publicip") {
                    detailedNetworks = elem;
  
  
                    setTimeout(function() {
                        callNetworkSt();
                    }, 400);
  
  
                } else if (elem.type == "bandwidthpolicy") {
                    networkSt = elem;
  
  
  
  
                } else if (elem.type == "teams") {
                    cteams = elem;
                    setTimeout(function() {
  
                    }, 400);
  
                } else if (elem.type == "tags") {
                    ctags = elem;
                    setTimeout(function() {
  
                    }, 400);
  
                } else if (elem.type == "authtype") {
                    authData = elem;
                    setTimeout(function() {
                        callAuthentication();
                    }, 400);
  
                }
  
  
  
            })
        }, 800);
  
    }
  
  }
  
  function callPlatforms() {
  
  
    var getPreparedContent = "";
    if (platforms) {
        platforms.list.map(function(elem) {
            var checkavailability = "";
            var changeClick = `onClick="applyPlatformMarker(` + elem.id + `)"`;
            if (!elem.availabilty) {
                changeClick = "";
                checkavailability = `<span class="sold-out red-text">`+soldoutVal+`</span>`;
            }
            var aclass = "";
            if (elem.id == platforms.defaultId) {
                datacenter = elem.list[0];
                aclass = "active-select";
            }
            getPreparedContent += `<div ` + changeClick + ` class="col s12 m6 l6">
      <div class="card border-radius-7 ` + ((elem.availabilty) ? "cursor-pointer" : "") + `  ` + aclass + `">
          <div class="card-content pt-2 pb-2">
              
              <div class="display-flex align-items-center mt-1">
                <img src="` + commonImgLoc + `/platform/` + elem.image + `" width="95" height="70" alt="vmware" class="mr-3 vertical-text-middle">
                <h6 class="pt-0">` + elem.value + `</h6>
              </div>
              ` + checkavailability + `
              <img class="select-mark" width="40" src="` + commonImgLoc + `/activeicon/select.png" alt="select" />
              
          </div>
      </div>
  </div>`;
        })
    }
  
    $('#platformPrinter').html(`
      
        <div class="card border-radius-10">
          <div class="card-content">
            <h4 class="card-title mb-0">`+indexMsgcins.cins_label_1+`</h4>
            <p>`+indexMsgcins.cins_label_2+`
            </p>
            <div class="row">
                ` + getPreparedContent + `
            </div>
          </div>
        </div>
      
      `);
    setTimeout(function() {
        callDataCenter();
    }, 400);
  }
  
  function applyPlatformMarker(id) {
    platforms.defaultId = id;
    captureInstancesList(reqParams = {
        data: {
            platformid: platforms.defaultId
        }
    });
    callPlatforms();
  
  }
  
  
  function callDataCenter() {
    var p = "";
  
    p += `
  
    <div class="card border-radius-10">
      <div class="card-content">
        <h4 class="card-title mb-0">`+indexMsgcins.cins_label_3+`</h4>
        <p>`+indexMsgcins.cins_label_4+`</p>
        <div class="row">
        `;
  
    if (datacenter.list) {
        datacenter.list.map(function(elem) {
            var checkavailability = "";
            var changeClick = `onClick="applyDataCenterMarker(` + elem.id + `)"`;
            var aclass = "";
            if (elem.id == datacenter.defaultId) {
                cloudServerType = elem.list[0];
                selectedDataCenter = elem;
  
                aclass = "active-select";
            }
            if (!elem.availabilty) {
                changeClick = "";
                checkavailability = `<span class="sold-out red-text">`+soldoutVal+`</span>`;
            }
  
            p += `<div ` + changeClick + ` class="col s12 m6 l6">
      <div class="card ` + ((elem.availabilty) ? "cursor-pointer" : "") + ` border-radius-7 ` + aclass + `">
          <div class="card-content pt-2 pb-2">              
              <div class="display-flex align-items-center mt-1">
                <img src="` + commonImgLoc + `/datacenter/` + elem.image + `" width="95" height="70" alt="vmware" class=" vertical-text-middle">
                <h6 class="pt-0">` + elem.value + `</h6>
              </div>
              ` + checkavailability + `
              <img class="select-mark" width="40" src="app/views/html/surface/cloudservices/elasticInstance/cinstance/img/activeicon/select.png" alt="select" />
          </div>
      </div>
      </div>
    `;
  
        });
    }
  
  
  
    p += `
  </div>
  </div>
  </div>
  `;
  
    $('#datacenterPrinter').html(p);
    setTimeout(function() {
        callCloudServer();
    }, 400);
  }
  
  function applyDataCenterMarker(id) {
    datacenter.defaultId = id;
    captureInstancesList(reqParams = {
        data: {
            platformid: platforms.defaultId,
            datacenterid: datacenter.defaultId
        }
    });
    callDataCenter();
  
  }
  
  function callCloudServer() {
  
    var p = "";
  
    p += `<div class="card border-radius-10">
  <div class="card-content">
    <h4 class="card-title">`+indexMsgcins.cins_label_5+`</h4>
    <p>`+indexMsgcins.cins_label_6+`</p>
    <div class="row mt-2">
        <div class="col s12">
            <div class="row" id="main-view">`;
  
    p += ` <div class="col s12">
            <ul class="tabs tab-demo z-depth-1">`;
  
  
  
    if (cloudServerType.list) {
        cloudServerType.list.map(function(elem) {
            var availTop = "";
            var disableTop = "";
            var actClass = "";
            var changeClick = `onClick="applycallCloudServerMarker(` + elem.id + `)"`;
            if (elem.availabilty === true) {
                changeClick = `onClick="applycallCloudServerMarker(` + elem.id + `)"`;
                disableTop = "";
                availTop = ``;
            } else {
                changeClick = "";
                disableTop = "disabled";
                availTop = `<span class="tab-sold-out red-text">`+soldoutVal+`</span>`;
            }
            if (elem.id == cloudServerType.defaultId) {
                actClass = "active";
                cloudServerPrinterTypes = elem;
            }
            p += `<li ` + changeClick + `  class="tab col m3 ` + disableTop + `"><a class="` + actClass + `" href="#cloudservertop` + elem.id + `">` + elem.value + `</a> ` + availTop + ` </li>`;
        });
    }
  
  
    p += `</ul>
        </div>`;
    p += `<div class="col s12" >`;
  
  
    if (cloudServerType.list) {
        cloudServerType.list.map(function(elem) {
            var cloudServerCard = elem;
            p += `
  <div id="cloudservertop` + elem.id + `" class="col s12 mt-3 pl-0 pr-0">
    <div class="owl-carousel owl-theme cloud-server-carousel">`;
            if (cloudServerCard.list) {
                cloudServerCard.list.map(function(inelem) {
                    var actin = "";
                    if (inelem.id == cloudServerCard.defaultId) {
                        selectedCloudServerVal = inelem.id;
                        profileData = inelem;
                        actin = "active-select";
                    }
                    var disableTopiA = "";
                    var onclickAct = `onClick="applycallCloudServerCardMarker(` + inelem.id + `)"`;
                    if (!inelem.availabilty) {
                        onclickAct = "";
                        disableTopiA = "cursor: not-allowed;";
                    }
                    p += `
          <div ` + onclickAct + ` class="item pl-0 pr-0" style="` + disableTopiA + `">
            <div style="` + disableTopiA + `" class="card-panel border-radius-6 mt-10 card-animation-1 center ` + actin + `">
              <img style="` + disableTopiA + `" class="responsive-img border-radius-8 z-depth-4 image-n-margin"
                src="app/views/html/surface/cloudservices/elasticInstance/cinstance/img/cloud-server/dark/` + inelem.others.image + `" alt="images" />
              <h6 class="mt-10">` + inelem.value + `</h6>
              <p class="mt-2 fs-12">` + inelem.others.desc + `</p>
              <div class="row" style="margin-top:50px;">
                <div class="col s12">
                    <p class="fs-12 starting-sr">`+indexMsgcins.cins_label_7+` <span>` + inelem.others.prise + `</span></p>
                </div>
              </div>
              <img class="select-mark" width="40" src="app/views/html/surface/cloudservices/elasticInstance/cinstance/img/activeicon/select.png" alt="select" />
            </div>
          </div>`;
  
                });
  
            }
  
  
  
            p += `
    </div>           
  </div>
  `;
  
  
        });
    }
  
  
    p += ` </div>`;
  
    p += ` </div>
  </div>
  </div>
  </div>
  </div>`;
  
  
    $('#cloudServerPrinter').html(p);
  
  
  
    $(".cloud-server-carousel").owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
  
  
  
    $('.tabs').tabs();
  
  
    setTimeout(function() {
        callProfile();
    }, 400);
  }
  
  function applycallCloudServerMarker(id) {
    cloudServerType.defaultId = id;
    captureInstancesList(reqParams = {
        data: {
            platformid: platforms.defaultId,
            datacenterid: datacenter.defaultId,
            cloudservertypeid: cloudServerType.defaultId
        }
    });
    callCloudServer();
  }
  
  function applycallCloudServerCardMarker(id) {
  
    for (var i = 0; i < cloudServerType.list.length; i++) {
        if (cloudServerType.list[i].id == cloudServerType.defaultId) {
            selectedCloudServerVal = id;
            cloudServerType.list[i].defaultId = id;
        }
    }
    captureInstancesList(reqParams = {
        data: {
            platformid: platforms.defaultId,
            datacenterid: datacenter.defaultId,
            cloudservertypeid: cloudServerType.defaultId,
            cloudserverid: selectedCloudServerVal
        }
    });
    callCloudServer();
  
  }
  
  function applyProfileMarker(id) {
  
    profileData.list[0].defaultId = id;
    captureInstancesList(reqParams = {
        data: {
            platformid: platforms.defaultId,
            datacenterid: datacenter.defaultId,
            cloudservertypeid: cloudServerType.defaultId,
            cloudserverid: selectedCloudServerVal,
            sizingpolicygroupid: profileData.list[0].defaultId
        }
    });
  
    callProfile();
  
  }
  
  function applyProfileCardMarker(id) {
  
    for (var i = 0; i < profileData.list[0].list.length; i++) {
  
        if (profileData.list[0].list[i].id == profileData.list[0].defaultId) {
  
            selectedSizingPolicy = id;
            profileData.list[0].list[i].defaultId = id;
            profileData.list[0].list[i].list[0].defaultId = id;
            profileData.list[0].list[i].list[0].selectedId = id;
  
        }
  
    }
  
  
    captureInstancesList(reqParams = {
        data: {
            platformid: platforms.defaultId,
            datacenterid: datacenter.defaultId,
            cloudservertypeid: cloudServerType.defaultId,
            cloudserverid: selectedCloudServerVal,
            sizingpolicygroupid: profileData.list[0].defaultId,
            sizingpolicyid: selectedSizingPolicy
        }
    });
  
  
  
  
    callProfile();
  
  
  }
  var initPro = true;
  
  function callProfile() {
  
  
    var p = ` <div class="card border-radius-10">
  <div class="card-content">
    <h4 class="card-title">`+indexMsgcins.cins_label_8+`</h4>
    <p>`+indexMsgcins.cins_label_9+`</p>
    <div class="row mt-2">
        <div class="col s12">
            <div class="row" id="main-view">`;
    if (profileData.list[0].list) {
        p += `<div class="col s12">
    <ul class="tabs tab-demo z-depth-1">`;
        profileData.list[0].list.map(function(elem) {
            var actClass = "";
            var disabledClass = "";
            var onclickAct = `onClick="applyProfileMarker(` + elem.id + `)"`;
            if (!elem.availabilty) {
                onclickAct = "";
                disabledClass = "disabled";
            }
            if (parseInt(elem.id) == parseInt(profileData.list[0].defaultId)) {
                
                actClass = "active";
            }
            p += `
        <li class="tab col m3 ` + disabledClass + `" ` + onclickAct + `><a class="` + actClass + `" href="#profileMainTop` + elem.id + `">` + elem.value + `</a></li>
        
     `;
        });
        p += ` </ul>
    </div>`;
    }
  
  
  
  
    if (profileData.list[0].list) {
        p += `<div class="col s12">`;
        for (var i = 0; i < profileData.list[0].list.length; i++) {
            var elem = profileData.list[0].list[i];
  
  
  
            p += `
      <div id="profileMainTop` + elem.id + `" class="col s12 mt-3 pl-0 pr-0">`;
  
            if (elem.list[0].list) {
                p += ` <div class="owl-carousel owl-theme">`;
                for (var j = 0; j < elem.list[0].list.length; j++) {
                    var inelem = elem.list[0].list[j];
  
  
                    var actClass = "";
                    var actImg = "";
                    var styledisable = "cursor: pointer;";
                    var onclickAct = `onClick="applyProfileCardMarker(` + inelem.id + `)"`;
                    if (!inelem.availabilty) {
                        onclickAct = "";
                        styledisable = "cursor: not-allowed;";
                    }
                    if (profileData.list[0].defaultId == profileData.list[0].list[i].id) {
                        
                            if (inelem.id == elem.list[0].defaultId) {
                                initPro = false;
                                selectedSizingPolicy = inelem.id;
                                selectedProfileData = inelem;
  
  
                                actClass = "active-select";
                                actImg = `<img class="select-mark" width="40" src="app/views/html/surface/cloudservices/elasticInstance/cinstance/img/activeicon/select.png" alt="select" />`;
                            }
                        
                        if (inelem.id == elem.list[0].selectedId) {
  
  
                            selectedSizingPolicy = inelem.id;
                            selectedProfileData = inelem;
  
  
                            actClass = "active-select";
                            actImg = `<img class="select-mark" width="40" src="app/views/html/surface/cloudservices/elasticInstance/cinstance/img/activeicon/select.png" alt="select" />`;
  
                        }
                    }
  
                    p += `
                <div ` + onclickAct + ` class="item ` + actClass + `" style="` + styledisable + `">
                  <h4 class="profile-owl-card mb-10"> <span>` + inelem.value + `</span> /mo</h4>
                  <h4 class="fs-12 text-color pb-3 center"><span class="fs-18">` + inelem.others.cpu + `</span> `+indexMsgcins.cins_label_10+`</h4>
                  <h4 class="fs-12 text-color pb-3 center"><span class="fs-18">` + inelem.others.memory + `</span> `+indexMsgcins.cins_label_11+`</h4>
                  <!--<h4 class="fs-12 text-color pb-3 center"><span class="fs-18">` + inelem.others.nvm + `</span> NVMe</h4>-->
                  ` + actImg + `
                </div>
                
           `
  
  
                }
                p += ` </div>`;
            }
            p += `</div>
      `;
  
  
  
        }
        p += `</div>`;
    }
  
  
    p += ` </div>
  </div>
  </div>
  </div>
  </div>`;
  
    $('#profilePrinter').html(p);
  
    $('.tabs').tabs();
  
  
  
  
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
  
    callImageCategory();
  
  }
  
  function applyImageCategoryMarker(id) {
      
    imageCategory.defaultId = id;
    callImageCategory();
  
  }
  
  function applyImageCategoryCardMarker(id) {
  
      if(id == 12){
        
        
        defaultSsize = 50;
          $('#storageSizeDefaultS').html(50);
          $('#storageCostDefaultS').html((50 * pergbcost).toFixed(2));
          defaultStorages[0].storageSizeName = "50G";
          defaultStorages[0].storagePrize = (50 * pergbcost).toFixed(2);
      }else{
        
        defaultSsize = 20;
          $('#storageSizeDefaultS').html(20);
          $('#storageCostDefaultS').html((20 * pergbcost).toFixed(2));
          defaultStorages[0].storageSizeName = "20G";
          defaultStorages[0].storagePrize = (20 * pergbcost).toFixed(2);
      }
  
  
    for (var i = 0; i < imageCategory.list.length; i++) {
  
        if (imageCategory.list[i].id == imageCategory.defaultId) {
  
            selectedImageType = id;
            imageCategory.list[i].list[0].defaultId = id;
            if (imageCategory.list[i].list[0].list) {
                imageCategory.list[i].list[0].list.map(function(elem) {
                    if (elem.id == id) {
                        selectedImageType = elem.id;
                        selectedOSName = elem;
                        selectedOsCost = parseFloat(elem.cost);
                        osversionId = "operatingSystemVersion" + elem.id;
                        $('#uos' + elem.id).addClass("active-select");
                    } else {
                        $('#uos' + elem.id).removeClass("active-select");
                    }
                })
            }
  
        }
  
    }
  
    
    initHostname = true;
    changeHostname();
    
  
  
  
  }
  
  function callImageCategory() {
    for (var i = 0; i < imageCategory.list.length; i++) {
        imageCategory.list[i].id = i + 1;
    }
    var p = `<div class="card border-radius-10">
  <div class="card-content">
    <h4 class="card-title">`+indexMsgcins.cins_label_12+`</h4>
    <div class="row">
        <div class="col s12">
            <div class="row" id="main-view">`;
  
    if (imageCategory.list) {
  
        p += `<div class="col s12">
  <ul class="tabs tab-demo z-depth-1">`;
  
        imageCategory.list.map(function(elem) {
            var onclickAct = `onClick="applyImageCategoryMarker(` + elem.id + `)"`;
            var disableAct = "";
            if (!elem.availabilty) {
                onclickAct = "";
                disableAct = "disabled";
            }
            var actClass = "";
            if (elem.id == imageCategory.defaultId) {
                actClass = "active";
            }
            p += ` <li ` + onclickAct + ` class="tab ` + disableAct + ` col m3"><a class=" ` + actClass + `"  href="#operatingSystem` + elem.id + `">` + elem.value + `</a></li>`;
  
  
        });
  
        p += ` </ul>
  </div>`;
  
    }
  
    if (imageCategory.list) {
        p += `<div class="col s12">`;
  
  
        imageCategory.list.map(function(elem) {
  
            p += `<div id="operatingSystem` + elem.id + `" class="col s12 mt-2 pl-0 pr-0">
  <div class="row os-card">`;
            if (elem.availabilty && elem.list.length > 0) {
                if (elem.list[0].list) {
  
                    elem.list[0].list.map(function(inelem) {
                        var aclass = "";
                        if (inelem.id == elem.list[0].defaultId) {
                            selectedImageType = inelem.id;
                            selectedOSName = inelem;
                            aclass = "active-select";
                        }
                        var onclickAct = `onClick="applyImageCategoryCardMarker(` + inelem.id + `)"`;
                        if (!inelem.availabilty) {
                            onclickAct = "";
                        }
  
                        p += `<div class="col s12 m3 l2" >
  <div class="card ` + aclass + `" id="uos` + inelem.id + `">
    <div class="card-content center" ` + onclickAct + `>
      <img src="app/views/assets/img/os-image/` + inelem.image + `" width="40" height="40" alt="sample"> <span class="card-title mb-0">` + inelem.value + `</span>
    </div>
    <div class="card-action">
      <select id="operatingSystemVersion` + inelem.id + `">`;
                        if (inelem.list[0].list) {
                            inelem.list[0].list.map(function(ininelem) {
                                var selOpt = "";
                                if (ininelem.id == inelem.list[0].list.defaultId) {
                                    selOpt = "selected";
                                }
                                p += ` <option ` + selOpt + ` value="` + ininelem.id + `">` + ininelem.value + `</option>`;
  
  
                            });
                        }
  
  
                        p += `</select>
    </div>
    <img class="select-mark" width="40" src="app/views/html/surface/cloudservices/elasticInstance/cinstance/img/activeicon/select.png" alt="select" />
  </div>
  </div>`;
  
  
  
                    })
  
                }
            }
            p += `</div></div>`;
  
  
        });
  
        p += `</div>`;
  
    }
  
  
    p += `</div>
  </div>
  </div>
  </div>
  </div>`;
  
  
  
    $('#imageCategoryPrinter').html(p);
  
  
    imageCategory.list.map(function(elem) {
        if (elem.availabilty && elem.list.length > 0) {
  
            elem.list[0].list.map(function(inelem) {
                if (inelem.id == elem.list[0].defaultId) {
                    osversionId = "operatingSystemVersion" + inelem.id;
                }
  
                $('#operatingSystemVersion' + inelem.id).change(function() {
  
  
                    osversionId = $(this).attr('id');
                    changeHostname();
                });
            });
        }
    });
  
    $('.tabs').tabs();
  
  
  
    setTimeout(function() {
        $("select").formSelect();
    }, 400);
  
    callInstanceLabels();
    changeHostname();
  
    $('#surfCloader').hide();
  
  }
  
  var rowIdx = 0;
  
  function addMoreStorage() {
      
    rowIdx = rowIdx + 1;
  
    defaultStorages.push({
        "storageName": "Volume " + rowIdx,
        "storageTypeName": "NVMe",
        "storageSizeName": "1G",
        "storagePrize": (1 * pergbcost).toFixed(2)
    });
  
  
  
  
    $('#storagesVList').append(`
   
   
   <tr id="R${rowIdx}">
  
  <td class="td-active-color disk-td text-color">Volume ${rowIdx}</td>
  
  <td class="td-active-color type-td">
    <select class="">
      <option value="NVMe">NVMe</option>
    </select>
  </td>
  
  <td class="td-active-color size-td text-color center">
  <span style="cursor:not-allowed;" id="minus${rowIdx}" class="size-td-minus">
  <i class="fa fa-minus" aria-hidden="true"></i></span> 
  
  <span id="storageSize${rowIdx}" >1</span> <span>GB</span> 
  
  <span id="plus${rowIdx}" class="size-td-add"><i class='fa fa-plus'></i></span>
  </td>
  
  <td class="td-active-color cost-td text-color" id="storageCost${rowIdx}" >` + (1 * pergbcost).toFixed(2) + `</td>
  
  <td class="action-td "><i class="remove material-icons dp48 fs-30 cursor-pointer">remove_circle</i></td>
  
  </tr>
  
   
   `);
  
    changeHostname();
    var passId = rowIdx;
  
    $('select').formSelect();
  
  
    $("#plus" + passId).click(function() {
  
        $("#minus" + passId).css("cursor","pointer");
        var defaultSv = $('#storageSize' + passId).html();
        var storageSizeVal = parseInt(defaultSv) + 1;
        $('#storageSize' + passId).html(storageSizeVal);
        var storageSizeValCost = (storageSizeVal * pergbcost).toFixed(2);
        $('#storageCost' + passId).html(storageSizeValCost);
  
        updateSizeandCost(passId, storageSizeVal, storageSizeValCost);
    });
  
    $("#minus" + passId).click(function() {
  
        var defaultSv = $('#storageSize' + passId).html();
  
        var storageSizeVal = parseInt(defaultSv) - 1;

        if (parseInt(storageSizeVal) == 1) {
            $("#minus" + passId).css("cursor","not-allowed");
        }

        if (parseInt(storageSizeVal) >= 1) {
  
  
            $('#storageSize' + passId).html(storageSizeVal);
            var storageSizeValCost = (storageSizeVal * pergbcost).toFixed(2);
            $('#storageCost' + passId).html(storageSizeValCost);
            updateSizeandCost(passId, storageSizeVal, storageSizeValCost);
        }
  
  
    });
  
  }
  
  function updateSizeandCostDefault(storageSizeVal, storageSizeValCost) {
    if (defaultStorages.length > 0) {
        for (var i = 0; i < defaultStorages.length; i++) {
            if (defaultStorages[i].storageName == "Boot Disk") {
                defaultStorages[i].storageSizeName = storageSizeVal + "G";
                defaultStorages[i].storagePrize = storageSizeValCost;
            }
        }
    }
  
    changeHostname();
  }
  
  function updateSizeandCost(passId, storageSizeVal, storageSizeValCost) {
    if (defaultStorages.length > 0) {
        for (var i = 0; i < defaultStorages.length; i++) {
            if (defaultStorages[i].storageName == "Volume " + passId) {
                defaultStorages[i].storageSizeName = storageSizeVal + "G";
                defaultStorages[i].storagePrize = storageSizeValCost;
            }
        }
    }
    changeHostname();
  }
  var defaultStorages = [];
  var defaultSsize = 1;
  function callStorages() {
    
    var p = `<div class="card border-radius-10">
  <div class="card-content">
    <div class="display-flex align-items-center  pb-1">
      <h4 class="card-title mb-0">`+indexMsgcins.cins_label_13+`</h4>
     <span class="add-storage-btn display-flex cursor-pointer" onClick="addMoreStorage()">
        <i   class="material-icons vertical-text-middle dp48 pt-3 fs-30 add-storage-plus">add_circle</i>
        <h6  class="pl-2 blue-text">`+indexMsgcins.cins_label_14+`</h6> 
      </span>
    </div>
    <div class="row">
      <div class="col s12 m12 l12" id="view-borderless-table">
  
  
      <div class="responsive-table" style="border: 1px solid #c7c7c7;">
                          <table class="add-storage">
                            <thead>
                            <tr>
                              <th>`+indexMsgcins.cins_label_15+`</th>
                              <th>`+indexMsgcins.cins_label_16+`</th>
                              <th>`+indexMsgcins.cins_label_17+`</th>
                              <th>`+indexMsgcins.cins_label_18+` <span class="fs-10">(SAR)</span></th>
                              <th class="center">`+indexMsgcins.cins_label_19+`</th>
                            </tr>
                            </thead>
                            <tbody id="storagesVList">
                              
        
  `;
  
  
    if (storages) {
        storages.list.map(function(elem) {
  
            defaultSsize = elem.size;
            pergbcost = parseFloat(elem.pergbcost);
            defaultStorages.push({
                "storageName": elem.value,
                "storageTypeName": "NVMe",
                "storageSizeName": elem.size + "G",
                "storagePrize": (parseInt(elem.size) * pergbcost).toFixed(2)
            });
  
            cdefaultStorageId = elem.id;
  
            p += `  <tr>
  
  <td class="disk-td text-color">` + elem.value + `</td>
  
  <td class="type-td">
    <select class="">
      <option value="NVMe">NVMe</option>
    </select>
  </td>
  
  <td class="size-td text-color center">
  <span  style="cursor:not-allowed;" id="minusDefaultS" class="size-td-minus">
  <i class="fa fa-minus" aria-hidden="true"></i></span> 
  
  <span id="storageSizeDefaultS" >` + elem.size + `</span> <span>GB</span> 
  
  <span  id="plusDefaultS" class="size-td-add"><i class='fa fa-plus'></i></span>
  </td>
  
  <td class="cost-td text-color" id="storageCostDefaultS" >` + (parseInt(elem.size) * pergbcost).toFixed(2) + `</td>
  
  <td class="action-td "><i class=" disabled material-icons dp48 fs-30 cursor-pointer">remove_circle</i></td>
  
  </tr>`;
  
        });
    }
  
  
    p += `</tbody>
  </table>
  
  </div>
  </div>
  </div>
  </div>
  </div>
  `;
  
  
    $('#storagesPrinter').html(p);
  
    $('select').formSelect();
  
    $('#storagesVList').on('click', '.remove', function() {
  
  
  
        var child = $(this).closest('tr').nextAll();
  
  
  
        child.each(function() {
  
  
            var id = $(this).attr('id');
  
  
            var idx = $(this).children('.row-index').children('p');
  
  
            var dig = parseInt(id.substring(1));
  
  
            idx.html(`Row ${dig - 1}`);
  
  
            $(this).attr('id', `R${dig - 1}`);
        });
  
  
        $(this).closest('tr').remove();
  
        removeByAttr(defaultStorages, 'storageName', "Volume " + rowIdx);
  
  
  
  
        rowIdx--;
  
        changeHostname();
  
  
  
  
    });
  
  
    $("#plusDefaultS").click(function() {
        $("#minusDefaultS").css("cursor","pointer");
        var defaultSv = $('#storageSizeDefaultS').html();
        var storageSizeVal = parseInt(defaultSv) + 1;
        $('#storageSizeDefaultS').html(storageSizeVal);
        var storageSizeValCost = (storageSizeVal * pergbcost).toFixed(2);
        $('#storageCostDefaultS').html(storageSizeValCost);
  
        updateSizeandCostDefault(storageSizeVal, storageSizeValCost);
    });
    $('#storageSizeDefaultS').change(function(){
        
        var defaultSv = $('#storageSizeDefaultS').html();
        var storageSizeVal = parseInt(defaultSv);
        if(parseInt(storageSizeVal) > parseInt(defaultSsize)){
            $("#minusDefaultS").css("cursor","pointer");
        }else{
            $("#minusDefaultS").css("cursor","not-allowed");
        }
    });
   
    $("#minusDefaultS").click(function() {
          
        var defaultSv = $('#storageSizeDefaultS').html();
            
        
        var storageSizeVal = parseInt(defaultSv) - 1;

        if(parseInt(storageSizeVal) == parseInt(defaultSsize)){
            
            $("#minusDefaultS").css("cursor","not-allowed");
        }
        if (parseInt(storageSizeVal) >= parseInt(defaultSsize)) {
  
  
            $('#storageSizeDefaultS').html(storageSizeVal);
            var storageSizeValCost = (storageSizeVal * pergbcost).toFixed(2);
            $('#storageCostDefaultS').html(storageSizeValCost);
            updateSizeandCostDefault(storageSizeVal, storageSizeValCost);
        }
  
  
    });
  
  
  
  }
  
  
  var removeByAttr = function(arr, attr, value) {
    var i = arr.length;
    while (i--) {
        if (arr[i] &&
            arr[i].hasOwnProperty(attr) &&
            (arguments.length > 2 && arr[i][attr] === value)) {
  
            arr.splice(i, 1);
  
        }
    }
    return arr;
  }
  
  function callNetworkSt() {
  
  
  
  
    var networkStlist = "";
    var selectednetworkSt = "";
    var selectedSar = "";
  
  
    if (networkSt) {
        networkSt.list.map(function(elem) {
  
            if (elem.id == networkSt.defaultId) {
                selectedSar = elem.data;
                var selectedSarSpl = selectedSar.split(" ");
                selectedSar = selectedSarSpl[0];
                selectednetworkSt = "selected";
            } else {
                selectednetworkSt = "";
            }
            networkStlist += `<option ` + selectednetworkSt + `  value="` + elem.id + `">` + elem.value + `</option>`;
        });
    } else {
        networkStlist += `<option value="" disabled selected>`+indexMsgcins.cins_label_58+`</option>`;
    }
  
  
    var p = ` <div class="card border-radius-10" data-select2-id="8">
  <div class="card-content" data-select2-id="7">
    <div class="row">
      <div class="col ` + ((detailedNetworks.list[0].value == "true") ? "s12 m12 l7" : "s12 m12 l6") + ` border-right" id="networkMain">
         <div class="row">
          <div class="col s12">
            <h4 class="card-title">`+indexMsgcins.cins_label_20+`</h4>
          </div>
           <div class="col s12 m6 l6 mt-2">
              <div class="ip-request text-center text-overflow">`+indexMsgcins.cins_label_21+`</div>
           </div>
           <div class="col ` + ((detailedNetworks.list[0].value == "true") ? "s12 m4 l4" : "s12 m4 l6") + ` mt-2" id="networkTogleCh">
              <div class="switch">
                <label><span class="switch-no">`+indexMsgcins.cins_label_22+`</span><input ` + ((detailedNetworks.list[0].value == "true") ? "checked" : "") + ` id="dccnetworkIpRequired" type="checkbox" class=""><span class="lever"></span><span class="switch-yes">`+indexMsgcins.cins_label_23+`</span></label>
              </div>
           </div>
  <div id="networkPolicyCho"  class="col s6 m2 l2 input-field input-outlined mt-2" style="`+((detailedNetworks.list[0].value == "true")?'display:block;':'display:none;')+` position: relative;
      right: 36px;">
      <span class="network-sar-amount">SAR</span>
       <input class="bandwidth-sar" style="width: 100% !important; margin-left: 0px !important;" id="dccnetworkpolicyValue" type="text" value="` + ((detailedNetworks.list[0].cost) ? parseFloat(detailedNetworks.list[0].cost) : 0) + `" readonly="">
      </div>
  
  
         </div>
      </div>
      <div class="col ` + ((detailedNetworks.list[0].value == "true") ? "s12 m12 l5" : "s12 m12 l6") + `" data-select2-id="6" id="bwMain">
        <div class="row">
          <div class="col s12">
            <h4 class="card-title">`+indexMsgcins.cins_label_24+`</h4>
          </div>
          <!--<div class="col s12 m8 l8  mt-2" data-select2-id="5"></div>-->
          <div class="col s12 m12 l12  mt-2" data-select2-id="5">
            <select disabled id="dccbandwidthpolicy" class=" select2 browser-default select2-hidden-accessible" data-select2-id="1" tabindex="-1" aria-hidden="true">
               
               ` + networkStlist + `
            </select>
          </div>
         <!-- <div class="col s8 m4 l4 input-field input-outlined mt-2 bandwidth-sar-amount-sm" >
            <span class="bandwidth-sar-amount">SAR</span>
            <input  style="margin-left: 0px !important;" class="bandwidth-sar" type="text" value="` + selectedSar + `" id="dccbandwidthpolicyValue" readonly="">
          </div>-->
        </div>
      </div>
    </div>
  </div>
  </div>`;
  
    setTimeout(function() {
        $('#networkSPrinter').html(p);
          $('#dccnetworkIpRequired').change(function(){
              if(document.getElementById("dccnetworkIpRequired").checked){
                  
  
  
                  $('#networkMain').removeClass("l6");
                  $('#networkMain').addClass("l7");
  
  
                  $('#bwMain').removeClass("l6");
                  $('#bwMain').addClass("l5");
  
                  
                  $('#networkTogleCh').removeClass("l6");
                  $('#networkTogleCh').addClass("l4");
  
                  $("#networkPolicyCho").show();
                  
              }else{
  
                  $('#networkMain').removeClass("l7");
                  $('#networkMain').addClass("l6");
  
  
                  $('#bwMain').removeClass("l5");
                  $('#bwMain').addClass("l6");
  
  
  
                  $('#networkTogleCh').addClass("l6");
                  $('#networkTogleCh').removeClass("l4");
                  $("#networkPolicyCho").hide();
                  
              }
              
              changeHostname();
  
              
          })
        $(".select2").select2({
            dropdownAutoWidth: true,
            width: '100%',
        });
  
        
  
    }, 500);
  
  }
  
  function selectCommonCheck(total, val) {
    var felem;
    total.map(function(elem) {
        if (elem.id == val) {
  
            felem = elem;
        }
    })
    return felem;
  }
  var ifexistHostName = false;
  var initHostname = true;
  var fitOS = "";
  var fitOStype = true;
  var storedOsHit = "";
  function changeHostname() {
    ifexistHostName = true;
  
  
    var place = selectedDataCenter.value;
    var os = selectedOSName.value;
    if (os == "MSWindows") {
        $('#sshkeySecurityChec').addClass("disabled")
        $('#tabpassword').show();
        $('#shhkey').hide();
        $('#sshkeyPwdChec a').addClass("active");
        $('#sshkeySecurityChec a').removeClass("active");
    } else {
        $('#sshkeySecurityChec').removeClass("disabled")
    }
  
  
  
    var osversion = selectCommonCheck(selectedOSName.list[0].list, $('#' + osversionId).val());
    var verse = osversion.value;
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    os = os.replace("(", "");
    os = os.replace(")", "");
    var uid = Math.floor(Math.random() * Math.pow(10, 15)).toString().substring(0, 6);
  if(initHostname){
    
    initHostname = false;
    if(os == "RedHat(RHEL)" || os == "RedhatRHEL"){
        os = "RHEL";
    }else if(os == "PhotonOS"){   
        os = "Photon"; 
    }else if(os == "MSWindows"){    
        os = "Windows"; 
    }
    if(fitOStype){
        fitOStype = false;
        fitOS = os;
        storedOsHit = os + "-" + uid;
        $('#dcc_cinstance_hostname').val(storedOsHit);
    }else{
       
        if(fitOS == os){
            //
        }else{
            fitOS = os;
            storedOsHit = os + "-" + uid;
            $('#dcc_cinstance_hostname').val(storedOsHit);
        }
    }
    
    
  }
    
  
  
    var finalSizeStorge = 0;
    var finalAllCost = 0;
    
    var costPro = selectedProfileData.value.split(" ");
    finalAllCost = parseFloat(finalAllCost) + parseFloat(costPro[1]);
    
    finalAllCost = parseFloat(finalAllCost) + parseFloat(selectedOsCost);
    
    if (defaultStorages.length > 0) {
        defaultStorages.map(function(elem) {
            var ks = elem.storageSizeName.split("G");
            finalSizeStorge = parseFloat(finalSizeStorge) + parseFloat(ks[0]);
            finalAllCost = parseFloat(finalAllCost) + parseFloat(elem.storagePrize);
  
        });
        
    }
    if(document.getElementById("dccnetworkIpRequired").checked){
      var dccnetworkpolicyValue = $('#dccnetworkpolicyValue').val();
  
      finalAllCost = parseFloat(finalAllCost) + parseFloat(dccnetworkpolicyValue);
      
    }
    
  
    
   
    
    finalAllCost = parseFloat(finalAllCost); 
    
  
    $('#dccinstanceSummaryOs').html(os + " " + verse);
    $('#dccinstanceSummaryOs').attr("title",os + " " + verse);
    $('#dccinstanceSummaryLocation').html(`<img src="` + commonImgLoc + `/datacenter/` + selectedDataCenter.image + `" width="25" alt="vmware" class="mr-3 vertical-text-middle"> ` + place);
    $('#dccinstanceSummaryLocation').attr("title",place);
    $('#dccinstanceSummarySpecification').html(selectedProfileData.others.cpu + "vCPU/" + selectedProfileData.others.memory + "/" + finalSizeStorge + "G");
    $('#dccinstanceSummarySpecification').attr("title",selectedProfileData.others.cpu + "vCPU/" + selectedProfileData.others.memory + "/" + finalSizeStorge + "G");
    $('#dccinstanceSummaryCost').html(`<span class="fs-10">SAR </span>` + finalAllCost.toFixed(2) + ` <span class="fs-10">/Month</sapn>`);
    $('#dccinstanceSummaryCost').attr("title",`SAR ` + finalAllCost.toFixed(2) + ` /Month`);
  
    $('#cintanceFooter').hide();
    $('#cintanceFooterOrg').show();
  
  
  }
  
  function callAuthentication() {
  
    var p = ` <div class="card border-radius-10">
  <div class="card-content">
    <h4 class="card-title">`+indexMsgcins.cins_label_25+`</h4>
    <div class="row mt-2">
      <div class="col s12">
          <div class="row" id="main-view">
            <div class="col s12">
                <ul class="tabs tab-demo z-depth-1">
                  <li class="tab col m3" id="sshkeyPwdChec" ><a class="active" href="#tabpassword">`+indexMsgcins.cins_label_26+`</a></li>
                  <li class="tab disabled col m3" id="sshkeySecurityChec_remove" ><a href="#shhkey">`+indexMsgcins.cins_label_33+`</a></li>
                  <!--<li class="tab  col m3" id="sshkeySecurityChec" ><a href="#shhkey">SSH Key</a></li>-->
                </ul>
            </div>
            <div class="col s12">
                <div id="tabpassword" class="col s12 mt-1 pl-0 pr-0">
                  <div class="row">
                    <div class="col s12 m12 l6 input-field input-outlined mt-4">
                      <input autocomplete="off" readonly  onclick="this.removeAttribute('readOnly');" onkeyup="this.removeAttribute('readOnly');" id="cintance_auth_pwd" type="password" class="validate" value="">

                          <div style="display:none" id="cintance_auth_pwd-error" class="error"></div>

                      <label for="cintance_auth_pwd" class="">`+indexMsgcins.cins_label_27+` </label>
                      <i toggle="#cintance_auth_pwd" class="toggle-password material-icons prefix pt-2 cursor-pointer">visibility_on</i>
                   </div>
                   <div class="col s12 m1 l1 input-field input-outlined mt-5 hide-on-small-only center">
                    <img width="30" src="app/views/html/surface/cloudservices/elasticInstance/cinstance/img/authentication/info.png" alt="info" />
                   </div>
                    <div class="col s12 m11 l5 pl-0 password-req-sm">  
                      <h4 class="card-title fs-12 mb-0">`+indexMsgcins.cins_label_28+`</h4>
                      <ul class="collection">
                        <li class="collection-item">• `+indexMsgcins.cins_label_29+`</li>
                        <li class="collection-item">• `+indexMsgcins.cins_label_30+` </li>
                        <li class="collection-item">• `+indexMsgcins.cins_label_31+`</li>
                        <li class="collection-item">• `+indexMsgcins.cins_label_32+`</li>
                      </ul>
                    </div>
                  </div>          
                </div>
                <div id="shhkey" class="col s12 mt-3 pl-0 pr-0">
                <div class="row">
                <div class="col s12 m6 l6 input-field input-outlined">
                  <select multiple id="sshKeysCommon">
                    <option value="" disabled selected>`+indexMsgcins.cins_label_34+`</option>
                   
                  </select>
               </div>
               <a class="modal-trigger add-sshkey" href="#sshadd-modal"><i class="material-icons dp48 table-header table-add-icon fs-30">add_circle</i> `+indexMsgcins.cins_label_35+`</a>
              </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  </div>`;
  
    $('#authenticationPrinter').html(p);
  
    $('select').formSelect();
    getAllSecuritySSHKeys();
    checkpwdVisib();
  
   /* $('#sshKeysCommon').change(function() {
        var regularExpression = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\w)(?!.* ).{8,16}$/;
        $(this).val();
  
        var regex = new RegExp(regularExpression, );
        var rex = regex.test($(this).val());
        if ($('#cintance_auth_pwd').val().length == 0) {
            if ($('#sshKeysCommon').val().length > 0) {
  
  
                $('#finaldccinstanceSubmit').removeAttr("disabled");
                //$('#finaldccinstanceSubmit').attr("onclick", "finaldccinstanceSubmit()");
                $('#finaldccinstanceSubmit').css("cursor", "pointer");
            } else {
  
                $('#finaldccinstanceSubmit').attr("disabled","disabled");
               // $('#finaldccinstanceSubmit').removeAttr("onclick");
                $('#finaldccinstanceSubmit').css("cursor", "not-allowed");
            }
        }
    });*/
  
    

      

      $('#cintance_auth_pwd').keyup(function() {
        var regularExpression = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\w)(?!.* ).{8,16}$/;
        $(this).val();
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var regex = new RegExp(regularExpression, );
        var rex = regex.test($(this).val());
        if ($('#sshKeysCommon').val().length == 0) {
            if (rex && format.test($(this).val()) && hasWhiteSpace($(this).val())) {
  
  
               $('#cintance_auth_pwd').attr("class", " valid");
               $('#cintance_auth_pwd-error').html("");
               $('#cintance_auth_pwd-error').hide();
               // $('#finaldccinstanceSubmit').removeAttr("disabled");
                //$('#finaldccinstanceSubmit').attr("onclick", "finaldccinstanceSubmit()");
               // $('#finaldccinstanceSubmit').css("cursor", "pointer");
            } else {
                $('#cintance_auth_pwd').attr("class", " invalid");
                if($(this).val().length == 0){
                    $('#cintance_auth_pwd-error').html(indexMsgcins.cins_label_46);
                    $('#cintance_auth_pwd-error').show();
                    
                }else if($(this).val().length < 3 && $(this).val().length >0){    
                    $('#cintance_auth_pwd-error').html(indexMsgcins.cins_label_47);
                    $('#cintance_auth_pwd-error').show();
                }
               // $('#cintance_auth_pwd').attr("class", " invalid");
               // $('#finaldccinstanceSubmit').attr("disabled","disabled");
                //$('#finaldccinstanceSubmit').removeAttr("onclick");
               // $('#finaldccinstanceSubmit').css("cursor", "not-allowed");
            }
        }
    })

      /*
    $('#cintance_auth_pwd').change(function() {
        var regularExpression = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\w)(?!.* ).{8,16}$/;
        $(this).val();
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var regex = new RegExp(regularExpression, );
        var rex = regex.test($(this).val());
        if ($('#sshKeysCommon').val().length == 0) {
            if (rex && format.test($(this).val()) && hasWhiteSpace($(this).val())) {
  
  
                $('#cintance_auth_pwd').attr("class", " valid");
                $('#finaldccinstanceSubmit').removeAttr("disabled");
                //$('#finaldccinstanceSubmit').attr("onclick", "finaldccinstanceSubmit()");
                $('#finaldccinstanceSubmit').css("cursor", "pointer");
            } else {
  
                $('#cintance_auth_pwd').attr("class", " invalid");
                $('#finaldccinstanceSubmit').attr("disabled","disabled");
                //$('#finaldccinstanceSubmit').removeAttr("onclick");
                $('#finaldccinstanceSubmit').css("cursor", "not-allowed");
            }
        }
    });
    $('#cintance_auth_pwd').keyup(function() {
        var regularExpression = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\w)(?!.* ).{8,16}$/;
        if ($(this).val().length > 4) {
            var regex = new RegExp(regularExpression, );
            var rex = regex.test($(this).val());
            if ($('#sshKeysCommon').val().length == 0) {
                if (rex) {
  
  
                    $('#cintance_auth_pwd').attr("class", " valid");
                    $('#finaldccinstanceSubmit').removeAttr("disabled");
                   // $('#finaldccinstanceSubmit').attr("onclick", "finaldccinstanceSubmit()");
                    $('#finaldccinstanceSubmit').css("cursor", "pointer");
                } else {
  
                    $('#cintance_auth_pwd').attr("class", " invalid");
                    $('#finaldccinstanceSubmit').attr("disabled","disabled");
                   // $('#finaldccinstanceSubmit').removeAttr("onclick");
                    $('#finaldccinstanceSubmit').css("cursor", "not-allowed");
                }
            }
        }
    })

    */
  }
  
  function hasWhiteSpace(s) {
    if(/\s/g.test(s)){
        return false;
    }else{
        return true;
    }
  }
  function checkpwdVisib() {
    var clickedPwd = 0;
    $(".toggle-password").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("toggle-password");
        if (clickedPwd == 0) {
            $(this).html('visibility_off');
            clickedPwd = 1;
        } else {
            $(this).html('visibility');
            clickedPwd = 0;
        }
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
  }
  
  function callInstanceLabels() {
  
    initHostname = true;
    var cteamslist = "";
    var selectedteams = "";
    if (cteams) {
        cteams.list.map(function(elem) {
            selectedteams = "";
            if (elem.id == cteams.defaultId) {
                selectedteams = "selected";
            }
            cteamslist += `<option ` + selectedteams + `  value="` + elem.id + `">` + elem.value + `</option>`;
        });
    } else {
        cteamslist += `<option value="" disabled selected>`+indexMsgcins.cins_label_59+`</option>`;
    }
  
  
    var ctagslist = "";
    var selectedtags = "";
    if (ctags) {
        ctags.list.map(function(elem) {
            selectedtags = "";
            if (elem.id == ctags.defaultId) {
                selectedtags = "selected";
            }
            ctagslist += `<option ` + selectedtags + `  value="` + elem.id + `">` + elem.value + `</option>`;
        });
    } else {
        ctagslist += `<option value="" disabled selected>`+indexMsgcins.cins_label_60+`</option>`;
    }
    var p = `<div class="card border-radius-10">
  <div class="card-content footer-top-sm" style="margin-bottom: 120px;">
  
    <div class="row">
  
    
    <div class="col s12 m6 l4 input-field input-outlined mt-0 mb-0">
      <h4 class="card-title">`+indexMsgcins.cins_label_40+` <div class="instance-info">
      <img  src="app/views/html/surface/cloudservices/elasticInstance/cinstance/img/authentication/info.png" width="22" height="22" alt="info" />
      <div class="card border-radius-10 instance-info-detail">
        <div class="card-content">
          <div class="row">
            <div class="col s12">
              <p>`+indexMsgcins.cins_label_43+`</p>
              <p>`+indexMsgcins.cins_label_44+`</p>
            </div>
          </div>
        </div>
      </div>
    </div></h4>
    
      <input value="`+((storedOsHit)?storedOsHit:"")+`" id="dcc_cinstance_hostname" name="dcc_cinstance_hostname" minlength="3" maxlength="15" type="text" class="validate" value="" placeholder="Enter hostname">
      
    </div>

    <div class="col s12 m6 l4 input-field input-outlined mt-0 mb-0">
      <h4 class="card-title">`+indexMsgcins.cins_label_41+`</h4>
        <select id="instanceLabelTeams">
       ` + cteamslist + `
        </select>
     </div>
     <div class="col s12 m6 l4 input-field input-outlined mt-0 mb-0">
      <h4 class="card-title">`+indexMsgcins.cins_label_42+`</h4>
      <select id="instanceLabelTags">
      ` + ctagslist + `
      </select>
      </div>
      


    </div>
  </div>
  </div>`;
  
  
    $('#instanceLabelPrinter').html(p);
  
    jQuery.validator.addMethod("particularSpecialChar", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9._-]+$/i.test(value);
      }, "Invalid name."); 

      $("#dcc_cinstance_hostname_form").submit(function(e){ e.preventDefault(); }).validate({
        rules: {
            dcc_cinstance_hostname: {
                required: true,
                minlength:3,
                maxlength:15,
                particularSpecialChar: true
            }
    
        },
        submitHandler: function(form) {
          
            finaldccinstanceSubmit();
         
         
         },
        messages: {
            email: {
                required: "Enter email"
            },
    
            curl: "Enter your website",
        },
        errorElement: 'div',
        errorPlacement: function(error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        }
    });

    

    $('#dcc_cinstance_hostname').keyup(function() {
        storedOsHit = $('#dcc_cinstance_hostname').val();
    });

    /*$('#dcc_cinstance_hostname').keyup(function() {
        
        var regularExpressionHost = /^[a-zA-Z0-9._-]+$/;
        
        var regexHost = new RegExp(regularExpressionHost, );
        $(this).val();
  
  
        var rexHost = regexHost.test($(this).val());
  
        if (rexHost && $(this).val().length >2 && $(this).val().length <16) {
  
  
            $('#dcc_cinstance_hostname').attr("class", " valid");
            $('#finaldccinstanceSubmit').attr("onclick", "finaldccinstanceSubmit()");
            $('#finaldccinstanceSubmit').css("cursor", "pointer");
        } else {
  
            $('#dcc_cinstance_hostname').attr("class", " invalid");
            $('#finaldccinstanceSubmit').removeAttr("onclick");
            $('#finaldccinstanceSubmit').css("cursor", "not-allowed");
        }
  
    });*/
  
  }

  function finaldccinstanceSubmitOld(){
    $('#finalscreatinst').click();
  }
  
  
  function finaldccinstanceSubmit() {
  
    var instanceLabelTeams = $('#instanceLabelTeams').val();
    var instanceLabelTags = $('#instanceLabelTags').val();
    var dcc_cinstance_hostname = $('#dcc_cinstance_hostname').val();
    /*var regularExpression = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\w)(?!.* ).{8,16}$/;
  
    var regex = new RegExp(regularExpression, );
  
  
    var regularExpressionHost = /^[a-zA-Z._-](?!.* ).{2,35}$/;
  
    var regexHost = new RegExp(regularExpressionHost, );
  
  
    var rex = regex.test($('#cintance_auth_pwd').val());
  
    var rexHost = regexHost.test(dcc_cinstance_hostname);*/
  
  
    var sshKeysCommon = $('#sshKeysCommon').val();

    

    var regularExpression = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\w)(?!.* ).{8,16}$/;
    var cpwds = $('#cintance_auth_pwd').val();
        
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var regex = new RegExp(regularExpression, );
        var rex = regex.test(cpwds);
        if ($('#sshKeysCommon').val().length == 0) {
            if (rex && format.test(cpwds) && hasWhiteSpace(cpwds)) {
  
  
             
         
    
          if (instanceLabelTeams && instanceLabelTags && dcc_cinstance_hostname) {
            $('#cintance_auth_pwd').attr("class", " valid");
            $('#cintance_auth_pwd-error').html("");
            $('#cintance_auth_pwd-error').hide();


     openBodyProgress();
     $('#finaldccinstanceSubmit').attr("disabled","disabled");
     $('#finaldccinstanceSubmit').css("cursor", "not-allowed");
            setTimeout(function(){
              processFinalEntries();
            },1000);
          }else{
            if(!instanceLabelTeams){

                indexToastr("error", 'Error', indexMsgcins.cins_label_48, {
                    timeOut: 5000
                });
                return;

            }   
            if(!instanceLabelTags){

                indexToastr("error", 'Error', indexMsgcins.cins_label_49, {
                    timeOut: 5000
                });
                return;
                
            }
            if(!dcc_cinstance_hostname){
                
                indexToastr("error", 'Error', indexMsgcins.cins_label_50, {
                    timeOut: 5000
                });
                return;

            }
          }


               
            } else {
                $('#cintance_auth_pwd').attr("class", " invalid");
                if(cpwds.length == 0){
                    $('#cintance_auth_pwd-error').html(indexMsgcins.cins_label_46);
                    $('#cintance_auth_pwd-error').show();
                    
                }else if(cpwds.length < 3 && cpwds.length >0){    
                    $('#cintance_auth_pwd-error').html(indexMsgcins.cins_label_47);
                    $('#cintance_auth_pwd-error').show();
                }
               
            }
        }else{

        openBodyProgress();
        $('#finaldccinstanceSubmit').attr("disabled","disabled");
        $('#finaldccinstanceSubmit').css("cursor", "not-allowed");
         
    
          if (instanceLabelTeams && instanceLabelTags && dcc_cinstance_hostname) {
            setTimeout(function(){
              processFinalEntries();
            },1000);
          }

        }


   /* if ((rex || sshKeysCommon.length > 0)) {
  
        openBodyProgress();
      $('#finaldccinstanceSubmit').attr("disabled","disabled");
      $('#finaldccinstanceSubmit').css("cursor", "not-allowed");
       
  
        if (instanceLabelTeams && instanceLabelTags && dcc_cinstance_hostname) {
          setTimeout(function(){
            processFinalEntries();
          },1000);
        }
    } else {
  
  
      //  $('#finaldccinstanceSubmit').attr("disabled","disabled");
        //$('#finaldccinstanceSubmit').css("cursor", "not-allowed");
    }*/
  
  
  
  
  }
  
  function processFinalEntries() {
  
  
    var os = selectedOSName.value;
  
  
  
    if ($('#dcc_cinstance_hostname').val().length < 3) {
        indexToastr("error", 'Error', indexMsgcins.cins_label_51, {
            timeOut: 5000
        });
        return;
    }
    if ($('#dcc_cinstance_hostname').val().length > 35) {
        indexToastr("error", 'Error', indexMsgcins.cins_label_52, {
            timeOut: 5000
        });
        return;
    }
  
  
  
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var loguserInfo = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
  
    
    var postData = {
        "tenantId": loguserInfo.tenant_id,
  
        "hostname": $('#dcc_cinstance_hostname').val(),
  
  
        "vmtagId": $('#instanceLabelTags').val(),
        "authTypeId": 1,
  
  
  
        "vmTotal": selectedProfileData.value,
  
        "teamId": $('#instanceLabelTeams').val(),
  
        "cloudType": 1,
        "cloudComponent": 1,
  
        "platforms": platforms.defaultId,
        "datacenters": datacenter.defaultId,
        "cloudServerType": cloudServerType.defaultId,
        "placementGroups": selectedCloudServerVal,
  
        "sizingPolicyGroup": profileData.list[0].defaultId,
        "sizingPolicy": selectedSizingPolicy,
  
        "imageCategory": imageCategory.defaultId,
        "imageType": selectedImageType,
        "imageTypeVersion": $('#' + osversionId).val(),
  
  
  
        "dataCenter": selectedDataCenter.value,
        "ipAddress": "-",
        "osDetails": $('#dccinstanceSummaryOs').html(),
        "sizingPolicyName": selectedProfileData.value,
        "specification": $('#dccinstanceSummarySpecification').html(),
  
        "bandwidthPolicyId": $('#dccbandwidthpolicy').val(),
        "networkIpRequired": document.getElementById("dccnetworkIpRequired").checked,
  
        "storages": defaultStorages
    };
  
    if ($('#cintance_auth_pwd').val()) {
        postData.vmpassword = $('#cintance_auth_pwd').val();
  
    }
    if ($('#sshKeysCommon').val().length > 0) {
        postData.sshKeys = $('#sshKeysCommon').val();
    }
  
  
    var reqParams = {
      'from':'cinstance',
    'secudeco':$('#establish_cinstance_finalbtn').val(),
        'user_serial_id': loguserInfo.user_serial_id,
        'data': JSON.stringify(postData),
        'portal': 'cinstance',
        'portalsubmit': 'level_1'
    };
    var data = ajaxDuty(reqParams, 'app/views/html/surface/cloudservices/elasticInstance/cinstance/index.php', 'html', false);
    if (data) {
  
        data = JSON.parse(data);
  
        if (data.data.status == "ok") {
          
          closeBodyProgress();
            indexToastr("success", 'Success', indexMsgcins.cins_label_53, {
                timeOut: 5000
            });
            location.href = "#minstance";
            //$('#finaldccinstanceSubmit').attr("onclick", "finaldccinstanceSubmit()");
            $('#finaldccinstanceSubmit').removeAttr("disabled");
            $('#finaldccinstanceSubmit').css("cursor", "pointer");
        } else {
          closeBodyProgress();
            indexToastr("error", 'Error', data.data.message, {
                timeOut: 5000
            });
            $('#finaldccinstanceSubmit').removeAttr("disabled");
           // $('#finaldccinstanceSubmit').attr("onclick", "finaldccinstanceSubmit()");
            $('#finaldccinstanceSubmit').css("cursor", "pointer");
        }
  
    } else {
      closeBodyProgress();
        indexToastr("error", 'Error', indexMsgcins.cins_label_54, {
            timeOut: 5000
        });
        $('#finaldccinstanceSubmit').removeAttr("disabled");
        //$('#finaldccinstanceSubmit').attr("onclick", "finaldccinstanceSubmit()");
        $('#finaldccinstanceSubmit').css("cursor", "pointer");
    }
  
  
  }
  
  
  function submitAllSecuritySSHKeys() {
      openBodyProgress();
    var nameAllSecuritySSHKeys = $('#nameAllSecuritySSHKeys').val();
    if (!nameAllSecuritySSHKeys) {
        indexToastr("error", 'Error', indexMsgcins.cins_label_55, {
            timeOut: 5000
        });
        return;
    }
  
    var fingerPrintAllSecuritySSHKeys = $('#fingerPrintAllSecuritySSHKeys').val();
    if (!(/^ssh-rsa/.test(fingerPrintAllSecuritySSHKeys))) {
  
        indexToastr("error", 'Error', indexMsgcins.cins_label_56, {
            timeOut: 5000
        });
        return;
  
    }
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
  
    let reqParams = {
      'from':'cinstance',
      'secudeco':$('#establish_cinstance_finalbtn').val(),
        'data': JSON.stringify({
            'userSerialId': dcc_siginin_info.user_serial_id,
            'sshKeyName': $('#nameAllSecuritySSHKeys').val(),
            'sshKeyFingerPrint': $('#fingerPrintAllSecuritySSHKeys').val()
        }),
        'type': "add",
        'portal': 'security',
        'portalsubmit': 'level_3'
    };
  
  
  
  
    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/security/index.php', 'html', false);
    if (data) {
  
        data = JSON.parse(data);
  
  
        if (data.data.status == "ok") {
          closeBodyProgress();
            indexToastr("success", 'Success', indexMsgcins.cins_label_57, {
                timeOut: 5000
            });
            setTimeout(function(){
            getAllSecuritySSHKeys();
            $('#sshadd-modal').modal("close");
            },1000);
        } else {
          closeBodyProgress();
            indexToastr("error", 'Error', indexMsgcins.cins_label_54, {
                timeOut: 5000
            });
        }
  
    }
  
  }
  
  function getAllSecuritySSHKeys() {
      var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
      var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    let reqParams = {
      'from':'cinstance',
      'secudeco':$('#establish_cinstance_finalbtn').val(),
        "userserialid": dcc_siginin_info.user_serial_id,
        'portal': 'security',
        'portalsubmit': 'level_1'
    };
    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/security/index.php', 'html', false);
    if (data) {
        data = JSON.parse(data);
  
        if (data.code == "200") {
            var idata = JSON.parse(data.data);
            plotAllSecuritySSHKeys(idata);
        } else {
         
        }
    }
  }
  
  
  function plotAllSecuritySSHKeys(data) {
  
  
  
    if (data.data.length > 0) {
        var p = "";
        p += `<option value="" disabled selected>`+indexMsgcins.cins_label_34+`</option>`;
        data.data.map(function(elem) {
  
            p += ` <option value="` + elem.sshKeyId + `">
      
          ` + elem.sshKeyName + `
        </option>`;
  
  
  
  
        });
  
        $('#sshKeysCommon').html(p);
  
  
  
    }
  
    $('#sshKeysCommon').formSelect();
  
  
  
  }