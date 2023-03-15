
var tableAccTagsT;
var lengthAccTagsTable = 10;
var startAccTagsTable = 0;
function tagsShow() {

    $('#account-table-usermgmt-org').hide();
    $('#account-table-usermgmt-skeleton').show();
    $('#account-table-usermgmt-title').hide();
    $('#account-table-usermgmt-plus').hide();
    
    $('#account-table-teams-org').hide();
    $('#account-table-teams-skeleton').show();
    $('#account-table-teams-title').hide();
    $('#account-table-teams-plus').hide();

    initAccTagsTable();
}

var dropdownAccTagsTable = function (){
    
    $(".dropdown-trigger-acc-tags").dropdown()
}


function getAccTagsTable(){





    return [
      
        
    {
        title: 'Name',name:"tagName"
    },
    {
        title: 'Description',name:"tagDec"
    },   
    {
        title: 'Elastic Instances',name:"vms"
    },    
    {
        title: 'Action',name:"Action"
    }
  ];
  }

function callBackAccTagsTable(){
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 


 
    return {
      "data": function(d){
        
  
        d.from = 'accounts';
        d.secudeco = $('#establish_surfAccounts').val();
        d.portal =  'account';
        d.portalsubmit =  'level_1';
        d.tenant_id =  dcc_siginin_info.tenant_id;
        
        },
        
        url: 'app/views/html/surface/settings/account/tags.php',
        type: 'POST',
        dataFilter: function(data) {                
          
            var json = jQuery.parseJSON(data);                
            
            json.recordsTotal = JSON.parse(json.data).totalRecords;
            json.recordsFiltered = JSON.parse(json.data).totalRecords;
            json.data = JSON.parse(json.data).data;
  
            var commonDataJson = [];                
            currentInvData = json.data;
            json.data.map(function(elem) { 
               
                                
                var finalDJs = getDesignAccTagsTable(elem);
                commonDataJson.push(finalDJs);
            });            
  
                       
            json.data = commonDataJson;
            return JSON.stringify(json); 
        }
    }
  }

  function getDesignAccTagsTable(elem){
    

  
    var actionHtml = "";
    if (elem.tagName != "Default") {
        actionHtml = `<div class="invoice-action">
    <a class='dropdown-trigger-acc-tags' href='#' data-target='action-btn-filter` + elem.tagId + `'>
      <span ><i class="material-icons dp48">more_horiz</i></span></a>
  </div>
  <!-- Dropdown Structure -->
  <ul id='action-btn-filter` + elem.tagId + `' class='dropdown-content'>
    <li onClick="suraccuseredittagsDatatags('` + elem.tagId + `')"><a  class="modal-trigger" href="#tagsmodal"><i class="material-icons dp48">edit</i> Edit</a></li>
    
    <li onClick="suraccuserdeletetags('` + elem.tagId + `','Delete Tag ?','Tag Name','` + elem.tagName + `','Are you sure you want to Delete tag?')" ><a ><i class="material-icons dp48">delete</i> Delete</a></li>
  </ul>`;
    } else {
        actionHtml = `<div class="invoice-action" style="cursor:not-allowed;">
    <a >
      <span ><i class="material-icons dp48">more_horiz</i></span></a>
  </div>
  `;
    }

     
    var abc = [
        
        ((elem.tagName) ? elem.tagName : "-"),
        ((elem.tagDec) ? elem.tagDec : "-"),
       
         `<span class="elastic-circle">` + ((elem.vms.length > 0) ? elem.vms.length : "-") + `</span>`,
        actionHtml
    ]
    
    return abc;








  }


  
function initAccTagsTable(){
    /*if(tableAccTagsT != undefined){
        tableAccTagsT.destroy();
    }*/

    var p = `
    <div class="col s12">
    <div class="responsive-table">
      <table class="striped tag-datatable" id="tag-datatable">
       
      </table>
    </div>
  </div>
    `;  
    $('#account-table-tags-org').html(p); 
    
    
    
    tableAccTagsT = $('#tag-datatable').DataTable({
        responsive:true,
    serverSide: true,
    columns: getAccTagsTable(),
    columnDefs: [
        { responsivePriority: 1, targets: 0 },
             
                     { responsivePriority: 2, targets: 3, orderable:false }
                    ],
    drawCallback: function () {
        dropdownAccTagsTable();
        var api = this.api();
        startAccTagsTable = api.page.info().start;
       lengthAccTagsTable = api.page.info().length;
       
       
      },
    initComplete: function(settings, json) {  
      
        dropdownAccTagsTable();
        $('#account-table-tags-title').show();
        $('#account-table-tags-plus').show();
        $('#account-table-tags-org').show();  
        $('#account-table-tags-skeleton').hide();  
      },
    ajax: callBackAccTagsTable(),
    lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, 'All'],
    ],
    "bStateSave": true,
    "fnStateSave": function (oSettings, oData) {
        localStorage.setItem('offersDataTablesAccTags', JSON.stringify(oData));
    },
    "fnStateLoad": function (oSettings) {
        return JSON.parse(localStorage.getItem('offersDataTablesAccTags'));
    },
    search: {
        return: true,
    },

        lengthChange: true,
    displayStart: startAccTagsTable,
    pageLength: lengthAccTagsTable,
    dom: '<"top display-flex mb-2"<"action-filters"f><"actions action-btns display-flex align-items-center">><"clear">rt<"bottom"i p>',
    
    language: {
        search: "",
        searchPlaceholder: "Search Tags"
    },
   
   /* order: [
        [1, 'asc']
    ]*/
});

//tableAccTagsT.search('').draw();

var invoiceFilterAction = $(".invoice-filter-action");
var invoiceCreateBtn = $(".invoice-create-btn");  
var filterButton = $(".filter-btn");
$(".action-btns").append(invoiceFilterAction, invoiceCreateBtn);
$(".dataTables_filter label").append(filterButton);
$('.dropdown-button').dropdown({
    constrainWidth: false, 
    closeOnClick: false
});  



}





function initTagsShowL() {
    var p = ` <h4 class="card-title mb-0">List of Tags</h4>
    <a onClick="modaluserMgmtCtrltags('add')" class="modal-trigger" href="#tagsmodal"><i class="fa fa-plus-circle dp48 table-header table-add-icon fs-30" aria-hidden="true"></i></a>
    <div class="row">fa fa-plus-circle
      <div class="col s12">
        <table class="striped" id="tag-datatable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Elastic Instances</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="tag-datatable-body" >
            
          </tbody>
        </table>
      </div>
    </div>`;

    setTimeout(function() {
        $('#tags').html(p);
        listuserMgmtCtrltags();

    }, 500);




}

var ceventHdlerTags = true;

function modaluserMgmtCtrltags(type) {

    
    if(tagsvalidatorc){
        tagsvalidatorc.resetForm();
    }

    clearValstags();
    $('#sur_acc_tags_form_submit').removeAttr("disabled");
      $('#sur_acc_tags_form_submit').css("cursor", "unset");
    
    if (type == "add") {
        $('#suracctagprocess').val("add");
        $('#ctagTitle').html("Create Tag");
        $('#sur_acc_tags_form_submit').html("CREATE");
        localStorage.removeItem("particularTags");
        $('#suraccuserprocess').val("add");
        $('#sur_acc_tag_vms').formSelect();
    } else {
        $('#suracctagprocess').val("edit");
        $('#suraccuserprocess').val("edit");
        $('#sur_acc_tags_form_submit').html("UPDATE");
    }

    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    let reqParams = {
        'from':'accounts',
        'secudeco':$('#establish_surfAccounts').val(),
        "tenant_id": dcc_siginin_info.tenant_id,
        'portal': 'account',
        'portalsubmit': 'level_2'
    };
    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/tags.php', 'html', false);
    if (data) {
        data = JSON.parse(data);
        if (data.code == "200") {
            var idata = JSON.parse(data.data);
            designSelectItemsUsersmodltags(idata);
            if (ceventHdlerTags) {
                ceventHdlerTags = false;
                userModalEventHdTags();
            }
        } else {
            indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
                timeOut: 5000
            });
        }
    }
}
var tagsvalidatorc = "";
function userModalEventHdTags() {
    /*$('form#sur_acc_tags_form').keyup(function() {

        var sur_acc_tag_name = $('#sur_acc_tag_name').val();
        var sur_acc_tag_desc = $('#sur_acc_tag_desc').val();
        var sur_acc_tag_vms = (($('#sur_acc_tag_vms').val()) ? $('#sur_acc_tag_vms').val() : false);




        if (sur_acc_tag_name && sur_acc_tag_desc && sur_acc_tag_vms) {
            $('#sur_acc_tags_form_submit').removeAttr("disabled");
        } else {
            $('#sur_acc_tags_form_submit').attr("disabled", "disabled");
        }
    });*/




    $('select[required]').css({
        position: 'absolute',
        display: 'inline',
        height: 0,
        padding: 0,
        border: '1px solid rgba(255,255,255,0)',
        width: 0
    });

    jQuery.validator.addMethod("particularSpecialChar", function(value, element) {

        var regularExpression = /^(?=.*[a-z])(?!.* ).{3,25}$/;
        return this.optional( element ) || regularExpression.test( value );
        
    
        
      }, "Min 3 characters without empty spaces"); 
    
    
      jQuery.validator.addMethod("particularSpecialCharSpecialchar", function(value, element) {
    
        var regularExpression = /^(?=.*[a-z])(?!.* ).{3,25}$/;
        if(this.optional( element ) || regularExpression.test( value )){
          
            return this.optional(element) || /^[a-zA-Z0-9.-]+$/i.test(value);
            
          }
    
        
      }, "Only hyphen and numbers are allowed"); 


    tagsvalidatorc = $("#sur_acc_tags_form").submit(function(e){ e.preventDefault(); }).validate({
        rules: {
            sur_acc_tag_name: {
                required: true,
                particularSpecialChar: true,
              particularSpecialCharSpecialchar:true  
            },
            
            sur_acc_tag_vms: {
                required: true,
            }
        },
        submitHandler: function(form) {
        
       
            fstagsfinalsbt();
           
           },
    
        messages: {


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



}

function fstagsfinalsbt(){

    


        
    var sur_acc_tag_vms = $('#sur_acc_tag_vms').val();
      var sur_acc_tags_form_n = $('form#sur_acc_tags_form').serialize();
        if(sur_acc_tag_vms.length > 0 ){

            if ( (sur_acc_tags_form_n.indexOf('=&') > -1 || sur_acc_tags_form_n.substr(sur_acc_tags_form_n.length - 1) == '=')) {
            }else{


                openBodyProgress();



        $('#sur_acc_tags_form_submit').attr("disabled", "disabled");
        $('#sur_acc_tags_form_submit').css("cursor", "progress");
        var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
        var reqParams = {
            'from':'accounts',
        'secudeco':$('#establish_surfAccounts').val(),
            'data': JSON.stringify({
                'tenantId': dcc_siginin_info.tenant_id,
                'tagName': $('#sur_acc_tag_name').val(),
                'tagDec': $('#sur_acc_tag_desc').val(),
                'vms': $('#sur_acc_tag_vms').val()
            }),
            'portal': 'account',
            'portalsubmit': 'level_4'
        };

        var suraccuserprocess = $('#suraccuserprocess').val();


        if (suraccuserprocess == "edit") {
            reqParams = {
                'from':'accounts',
        'secudeco':$('#establish_surfAccounts').val(),
                'data': JSON.stringify({
                    'tagId': $('#suracctagId').val(),
                    'tenantId': dcc_siginin_info.tenant_id,
                    'tagName': $('#sur_acc_tag_name').val(),
                    'tagDec': $('#sur_acc_tag_desc').val(),
                    'vms': $('#sur_acc_tag_vms').val()
                }),
                'portal': 'account',
                'portalsubmit': 'level_5'
            };
            setTimeout(function() {
                suraccuserEdittags(reqParams);
            }, 1000);
        } else {
            setTimeout(function() {
                suraccuserAddtags(reqParams);
            }, 1000);
        }


            }
        }
        
        

    

}

function listuserMgmtCtrltags() {
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    let reqParams = {
        'from':'accounts',
        'secudeco':$('#establish_surfAccounts').val(),
        "tenant_id": dcc_siginin_info.tenant_id,
        'portal': 'account',
        'portalsubmit': 'level_1'
    };
    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/tags.php', 'html', false);
    if (data) {
        data = JSON.parse(data);
        if (data.code == "200") {
            var idata = JSON.parse(data.data);
            plotusermgmtTabletags(idata);
        } else {
            plotusermgmtTabletags([]);
            
        }
    }
}



function plotusermgmtTabletags(data) {


    var p = "";
    if (data.data) {

        data.data.map(function(elem) {

            p += ` <tr>
        
        <td>` + ((elem.tagName) ? elem.tagName : "-") + `</td>
        <td>` + ((elem.tagDec) ? elem.tagDec : "-") + `</td>        
        
        <td><span class="elastic-circle">` + ((elem.vms.length > 0) ? elem.vms.length : "-") + `</span></td>        
        <td>`;
            if (elem.tagName != "Default") {
                p += `<div class="invoice-action">
            <a class='dropdown-trigger' href='#' data-target='action-btn-filter` + elem.tagId + `'>
              <span ><i class="material-icons dp48">more_horiz</i></span></a>
          </div>
          <!-- Dropdown Structure -->
          <ul id='action-btn-filter` + elem.tagId + `' class='dropdown-content'>
            <li onClick="suraccuseredittagsDatatags('` + elem.tagId + `')"><a  class="modal-trigger" href="#tagsmodal"><i class="material-icons dp48">edit</i> Edit</a></li>
            
            <li onClick="suraccuserdeletetags('` + elem.tagId + `','Delete Tag ?','Tag Name','` + elem.tagName + `','Are you sure you want to Delete tag?')" ><a ><i class="material-icons dp48">delete</i> Delete</a></li>
          </ul>`;
            } else {
                p += `<div class="invoice-action" style="cursor:not-allowed;">
            <a >
              <span ><i class="material-icons dp48">more_horiz</i></span></a>
          </div>
          `;
            }

            p += ` </td>
      </tr>`;
        });


    }
    $('#tag-datatable-body').html(p);


    if (plotusermgmtTabletagsa) {
        plotusermgmtTabletagsa = false;
        $('#tag-datatable').DataTable({
            "responsive": true,
            "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
            ]
        });
    }

    $('.dropdown-trigger').dropdown();
}

function suraccuserstatetags(state, tagId) {
    var reqParams = {
        'from':'accounts',
        'secudeco':$('#establish_surfAccounts').val(),
        'data': JSON.stringify(
            state
        ),
        "tagId": tagId,
        'portal': 'account',
        'portalsubmit': 'level_6'
    };
    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/tags.php', 'html', false);
    if (data) {

        data = JSON.parse(data);


        if (data.data.status == "ok") {
            indexToastr("success", 'Success', 'Success', {
                timeOut: 5000
            });
            tableAccTagsT.ajax.reload(null, false);  
            //tableAccTagsT.ajax.reload(dropdownAccTagsTable);  
            
            $('#tagsmodal').modal("close");
        } else {
            indexToastr("error", 'Error', data.data.message, {
                timeOut: 5000
            });
        }
    } else {
        indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
            timeOut: 5000
        });
    }
}


function suraccuserdeletetags(tagId, mtitle, stitle, svalue, ftitle) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: mtitle,
        text: "You won't be able to revert this!",
        html: stitle + ` : <span class="black-text swal2-text-highlight">` + svalue + `</span> </br> ` +
            `<p>` + ftitle + `  </p> `,
        icon: 'warning',
        confirmButtonText: 'Proceed',
        showCancelButton: true
    }).then((result) => {
        if (result.isConfirmed) {
            postsuraccuserdeletetags(tagId);
        }
    })




}

function postsuraccuserdeletetags(tagId) {
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    var reqParams = {
        'from':'accounts',
        'secudeco':$('#establish_surfAccounts').val(),
        "tagId": tagId,
        "tenant_id": dcc_siginin_info.tenant_id,
        'portal': 'account',
        'portalsubmit': 'level_7'
    };
    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/tags.php', 'html', false);
    if (data) {

        data = JSON.parse(data);


        if (data.data.status == "ok") {
            indexToastr("success", 'Success', 'Success', {
                timeOut: 5000
            });
            var cvalue = tableAccTagsT.page.info().recordsTotal - tableAccTagsT.page.info().start;
          
          
          cvalue = cvalue-1;
          if(cvalue > 0){
            
            tableAccTagsT.state.clear();
            tableAccTagsT.ajax.reload(null, false);  
          }else{
            
            tableAccTagsT.state.clear();
            tableAccTagsT.ajax.reload(dropdownAccTagsTable);  
          }

           // tableAccTagsT.ajax.reload(dropdownAccTagsTable);  
            
            $('#tagsmodal').modal("close");
        }else  if (data.data.status == "error") {
            indexToastr("error", 'Error', data.data.message, {
                timeOut: 5000
            });
        } else {
            indexToastr("error", 'Error', 'Something went wrong!', {
                timeOut: 5000
            });
        }
    } else {
        indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
            timeOut: 5000
        });
    }
}

function suraccuseredittagsDatatags(tagId) {
    $('#sur_acc_tags_form_submit').removeAttr("disabled");
    closeBodyProgress();
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    let reqParams = {
        'from':'accounts',
        'secudeco':$('#establish_surfAccounts').val(),
        "tagId": tagId,
        "tenant_id": dcc_siginin_info.tenant_id,
        'portal': 'account',
        'portalsubmit': 'level_3'
    };
    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/tags.php', 'html', false);
    if (data) {
        data = JSON.parse(data);
        if (data.code == "200") {
            var idata = JSON.parse(data.data);
            suraccuseredittagsDatatagsApply(idata);
        } else {
            indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
                timeOut: 5000
            });
        }
    }
}

function suraccuseredittagsDatatagsApply(data) {


    if (data) {



        localStorage.setItem("particularTags", JSON.stringify(data));

        modaluserMgmtCtrltags("edit");

        $('#sur_acc_tag_name').val(data.tagName);
        $('#sur_acc_tag_name_label').addClass("active");

        $('#sur_acc_tag_desc').val(data.tagDec);
        $('#sur_acc_tag_desc_label').addClass("active");
        $("#sur_acc_tag_vms_label").hide();

        $('#suracctagprocess').val("edit");

        $('#ctagTitle').html("Edit Tag");
        $('#suracctagId').val(data.tagId);




    }
}

function clearValstags() {
    var sur_acc_tag_name = $('#sur_acc_tag_name').val("");
    var sur_acc_tag_desc = $('#sur_acc_tag_desc').val("");

    var sur_acc_tag_vms = $('#sur_acc_tag_vms').val("");

}

function designSelectItemsUsersmodltags(data) {


    var particularTags = ((JSON.parse(localStorage.getItem("particularTags"))) ? JSON.parse(localStorage.getItem("particularTags")).vms : []);

    var a = ``;
    var b = "";


    var partTeamSel = false;

    if (data) {
        data.map(function(elem) {
            if (elem.type == "vms") {
                
                if (elem.list) {
                    
                    elem.list.map(function(teamElem) {
                        var selected = "";
                        teamElem.id = teamElem.id.toString();
                        if (particularTags.includes(teamElem.id)) {
                            
                            partTeamSel = true;
                            selected = "selected";
                        }
                        a += `<option ` + selected + ` value="` + teamElem.id + `">` + teamElem.value + `</option>`;
                    })

                    if (!partTeamSel) {
                        a += `<option value="" disabled >Select VM</option>`;
                    } else {
                        a += `<option value="" disabled >Select VM</option>`;
                    }


                }
            }
        });
    }

    $('#sur_acc_tag_vms').html(a);

    if (partTeamSel) {
        $('#sur_acc_tag_vms_label').hide();
    } else {
        $('#sur_acc_tag_vms_label').show();
    }
    $('#sur_acc_tag_vms_label').hide();

    $('select').formSelect();




}

function suraccuserAddtags(reqParams) {



    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/tags.php', 'html', false);
    if (data) {

        data = JSON.parse(data);
        if(data.status == "error" || data.code == "500"){
            $('#sur_acc_tags_form_submit').removeAttr("disabled");
            $('#sur_acc_tags_form_submit').css("cursor", "unset");
            closeBodyProgress();
            indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
                timeOut: 5000
            });
            return;
        }

        if (data.data.status == "ok") {
            $('#sur_acc_tags_form_submit').removeAttr("disabled");
            $('#sur_acc_tags_form_submit').css("cursor", "unset");
            closeBodyProgress();
            indexToastr("success", 'Success', 'Success', {
                timeOut: 5000
            });
            
            tableAccTagsT.ajax.reload(null, false);  
           // tableAccTagsT.ajax.reload(dropdownAccTagsTable);  
           
            $('#tagsmodal').modal("close");
        } else {
            $('#sur_acc_tags_form_submit').removeAttr("disabled");
            $('#sur_acc_tags_form_submit').css("cursor", "unset");
            closeBodyProgress();
            indexToastr("error", 'Error', data.data.message, {
                timeOut: 5000
            });
        }
    } else {
        $('#sur_acc_tags_form_submit').removeAttr("disabled");
        $('#sur_acc_tags_form_submit').css("cursor", "unset");
        closeBodyProgress();
        indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
            timeOut: 5000
        });
    }
}

function suraccuserEdittags(reqParams) {

    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/tags.php', 'html', false);
    if (data) {

        data = JSON.parse(data);
        if(data.status == "error" || data.code == "500"){
            $('#sur_acc_tags_form_submit').removeAttr("disabled");
            $('#sur_acc_tags_form_submit').css("cursor", "unset");
            closeBodyProgress();
            indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
                timeOut: 5000
            });
            return;
        }

        if (data.data.status == "ok") {
            $('#sur_acc_tags_form_submit').removeAttr("disabled");
            $('#sur_acc_tags_form_submit').css("cursor", "unset");
            closeBodyProgress();
            indexToastr("success", 'Success', 'Success', {
                timeOut: 5000
            });
            tableAccTagsT.ajax.reload(null, false);  
            //tableAccTagsT.ajax.reload(dropdownAccTagsTable);  
            
            $('#tagsmodal').modal("close");
        } else {
            $('#sur_acc_tags_form_submit').removeAttr("disabled");
            $('#sur_acc_tags_form_submit').css("cursor", "unset");
            closeBodyProgress();
            indexToastr("error", 'Error', data.data.message, {
                timeOut: 5000
            });
        }
    } else {
        $('#sur_acc_tags_form_submit').removeAttr("disabled");
        $('#sur_acc_tags_form_submit').css("cursor", "unset");
        closeBodyProgress();
        indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
            timeOut: 5000
        });
    }
}