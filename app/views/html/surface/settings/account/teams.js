var tableAccTeamsT;
var lengthAccTeamsTable = 10;
var startAccTeamsTable = 0;
function teamsShow() {
    $('#account-table-usermgmt-org').hide();
    $('#account-table-usermgmt-skeleton').show();
    $('#account-table-usermgmt-title').hide();
    $('#account-table-usermgmt-plus').hide();

    $('#account-table-tags-org').hide();
    $('#account-table-tags-skeleton').show();
    $('#account-table-tags-title').hide();
    $('#account-table-tags-plus').hide();

    initAccTeamsTable();
}

var dropdownAccTeamsTable = function (){
    
    $(".dropdown-trigger-acc-teams").dropdown()
}


function getAccTeamsTable(){


   

    return [
      
        {
            title: 'Status',name:'currentstate'
        },   
    {
        title: 'Name',name:'teamName'
    },
    {
        title: 'Description',name:'teamDec'
    },
    {
        title: 'Members',name:'memebers'
    },
    {
        title: 'Elastic Instances',name:'vms'
    }, 
    {
        title: 'Created By',name:'createdBy'
    }, 
    {
        title: 'Created Time',name:'createdDate'
    },    
    {
        title: 'Action',name:'Action'
    }
  ];
  }
var sttramRefreshRate = false;
function callBackAccTeamsTable(){
    //sttramRefreshRate = false;
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
        
        url: 'app/views/html/surface/settings/account/teams.php',
        type: 'POST',
        dataFilter: function(data) {                
          
            var json = jQuery.parseJSON(data);                
            
            json.recordsTotal = JSON.parse(json.data).totalRecords;
            json.recordsFiltered = JSON.parse(json.data).totalRecords;
            json.data = JSON.parse(json.data).data;
  
            var commonDataJson = [];                
            currentInvData = json.data;
            sttramRefreshRate = false;
            json.data.map(function(elem) { 
               
                                
                var finalDJs = getDesignAccTeamsTable(elem);
                commonDataJson.push(finalDJs);
            });            
  
                       
            json.data = commonDataJson;
            return JSON.stringify(json); 
        }
    }
  }

  function getDesignAccTeamsTable(elem){
   

  
    var actionHtml = "";
    if (elem.teamName != "Default") {
        actionHtml =  `            <div class="invoice-action">
      <a class='dropdown-trigger-acc-teams' href='#' data-target='action-btn-filter` + elem.teamId + `'>
        <span ><i class="material-icons dp48">more_horiz</i></span></a>
    </div>
    <!-- Dropdown Structure -->
    <ul id='action-btn-filter` + elem.teamId + `' class='dropdown-content'>
      <li onClick="suraccusereditTeamsData('` + elem.teamId + `')"><a  class="modal-trigger" href="#teammodal"><i class="material-icons dp48">edit</i> Edit</a></li>
     
      <li onClick="suraccuserdeleteTeams('` + elem.teamId + `','Delete Team ?','Team Name','` + elem.teamName + `','Are you sure you want to Delete team?')" ><a ><i class="material-icons dp48">delete</i> Delete</a></li>
    </ul>
    `;
    } else {
        actionHtml =  `            <div class="invoice-action" style="cursor:not-allowed;" >
    <a >
      <span ><i class="material-icons dp48">more_horiz</i></span></a>
  </div>`;
    }
    var cby = ((elem.createdBy) ? elem.createdBy : "-");
     var cstate = `<span class="bullet green"></span> Active`;
    if(elem.currentstate == "1"){
        sttramRefreshRate = true;
        cstate = `<span class="bullet orange"></span> Processing`;
        actionHtml =  `            <div class="invoice-action" style="cursor:not-allowed;" >
        <a >
          <span ><i class="material-icons dp48">more_horiz</i></span></a>
      </div>`;
    }
    var abc = [
        cstate,
        ((elem.teamName) ? elem.teamName : "-"),
        ((elem.teamDec) ? elem.teamDec : "-"),
        `<span class="member-circle">` + ((elem.memebers.length > 0) ? elem.memebers.length : "-") + `</span>`,
         `<span class="elastic-circle">` + ((elem.vms.length > 0) ? elem.vms.length : "-") + `</span>`,
         cby,
         ((elem.createdDate) ? elem.createdDate : "-"),
        actionHtml
    ]
    
    return abc;








  }

function askreloadTeams(){
    console.log("coming");
    if(sttramRefreshRate){
        setTimeout(function(){
            console.log("coming");
            tableAccTeamsT.ajax.reload(null, false);  
        },45000);
        
    }
}
  
function initAccTeamsTable(){
   /* if(tableAccTeamsT != undefined){
        tableAccTeamsT.destroy();
    }*/
    
    
    var p = `
    <div class="col s12">
    <div class="responsive-table">
      <table class="striped team-datatable" id="team-datatable">
       
      </table>
    </div>
  </div>
    `;  
    $('#account-table-teams-org').html(p); 

    
    tableAccTeamsT = $('#team-datatable').DataTable({
        responsive:true,
    serverSide: true,
    columns: getAccTeamsTable(),
    columnDefs: [
        { responsivePriority: 1, targets: 0 },
             
                     { responsivePriority: 2, targets: 7, orderable:false }
                    ],
    drawCallback: function () {
        askreloadTeams();
        dropdownAccTeamsTable();
        var api = this.api();
        startAccTeamsTable = api.page.info().start;
       lengthAccTeamsTable = api.page.info().length;
       
       
      },
    initComplete: function(settings, json) {  
      
        dropdownAccTeamsTable();
        $('#account-table-teams-title').show();
        $('#account-table-teams-plus').show();
        $('#account-table-teams-org').show();  
        $('#account-table-teams-skeleton').hide();  
      },
    ajax: callBackAccTeamsTable(),
    lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, 'All'],
    ],
    "bStateSave": true,
    "fnStateSave": function (oSettings, oData) {
        localStorage.setItem('offersDataTablesAccTeams', JSON.stringify(oData));
    },
    "fnStateLoad": function (oSettings) {
        return JSON.parse(localStorage.getItem('offersDataTablesAccTeams'));
    },
    search: {
        return: true,
    },

        lengthChange: true,
    displayStart: startAccTeamsTable,
    pageLength: lengthAccTeamsTable,
    dom: '<"top display-flex"<"action-filters"f><"actions action-btns display-flex align-items-center">><"clear">rt<"bottom"i p>',
    
    language: {
        search: "",
        searchPlaceholder: "Search Teams"
    },
   
    /*order: [
        [1, 'asc']
    ]*/
});


//tableAccTeamsT.search('').draw();

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





function initTeamShowL() {
  var p = ` <h4  class="card-title mb-0">Manage Team</h4>
  <a  onClick="modaluserMgmtCtrlTeams('add')" class="modal-trigger" href="#teammodal"><i class="fa fa-plus-circle dp48 table-header table-add-icon fs-30" aria-hidden="true"></i></a>
  <div  class="row">
    <div class="col s12">
      <table class="striped" id="team-datatable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Members</th>
            <th>Elastic Instances</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="team-datatable-body" >
          
        </tbody>
      </table>
    </div>
  </div>`;

  setTimeout(function() {
      $('#teams').html(p);
      listuserMgmtCtrlTeams();

  }, 500);




}

function listuserMgmtCtrlTeams() {
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
  let reqParams = {
    'from':'accounts',
    'secudeco':$('#establish_surfAccounts').val(),
      "tenant_id": dcc_siginin_info.tenant_id,
      'portal': 'account',
      'portalsubmit': 'level_1'
  };
  var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/teams.php', 'html', false);
  if (data) {
      data = JSON.parse(data);
      if (data.code == "200") {
          var idata = JSON.parse(data.data);
          plotusermgmtTableTeams(idata);
      } else {
        plotusermgmtTableTeams([]);
          
      }
  }
}


function plotusermgmtTableTeams(data) {
  var p = "";
  if (data.data) {

      data.data.map(function(elem) {

          p += ` <tr>
      
      <td>` + ((elem.teamName) ? elem.teamName : "-") + `</td>
      <td>` + ((elem.teamDec) ? elem.teamDec : "-") + `</td>
      <td><span class="member-circle">` + ((elem.memebers.length > 0) ? elem.memebers.length : "-") + `</span></td>
      <td><span class="elastic-circle">` + ((elem.vms.length > 0) ? elem.vms.length : "-") + `</span></td>        
      <td>`;
          if (elem.teamName != "Default") {
              p += `            <div class="invoice-action">
            <a class='dropdown-trigger' href='#' data-target='action-btn-filter` + elem.teamId + `'>
              <span ><i class="material-icons dp48">more_horiz</i></span></a>
          </div>
          <!-- Dropdown Structure -->
          <ul id='action-btn-filter` + elem.teamId + `' class='dropdown-content'>
            <li onClick="suraccusereditTeamsData('` + elem.teamId + `')"><a  class="modal-trigger" href="#teammodal"><i class="material-icons dp48">edit</i> Edit</a></li>
           
            <li onClick="suraccuserdeleteTeams('` + elem.teamId + `','Delete Team ?','Team Name','` + elem.teamName + `','Are you sure you want to Delete team?')" ><a ><i class="material-icons dp48">delete</i> Delete</a></li>
          </ul>
          `;
          } else {
              p += `            <div class="invoice-action" style="cursor:not-allowed;" >
          <a >
            <span ><i class="material-icons dp48">more_horiz</i></span></a>
        </div>`;
          }

          p += `</td>
    </tr>`;
      });


  }
  $('#team-datatable-body').html(p);
  if (plotusermgmtTableTeamsa) {
      plotusermgmtTableTeamsa = false;
      $('#team-datatable').DataTable({
          "responsive": true,
          "lengthMenu": [
              [10, 25, 50, -1],
              [10, 25, 50, "All"]
          ]
      });
  }

  $('.dropdown-trigger').dropdown();
}

function clearValsTeams() {

  var sur_acc_team_name = $('#sur_acc_team_name').val("");
  var sur_acc_team_desc = $('#sur_acc_team_desc').val("");
  var sur_acc_team_members = $('#sur_acc_team_members').val("");
  var sur_acc_team_vms = $('#sur_acc_team_vms').val("");

}

var ceventHdlerTeam = true;

function modaluserMgmtCtrlTeams(type) {
    if(teamvalidatorc){
        teamvalidatorc.resetForm();
    }
    
  clearValsTeams();
  $('#sur_acc_teams_form_submit').html("UPDATE");

  if (type == "add") {
    $('#suraccteamprocess').val("add");
      $('#cteamCom').html("Create Team");
      $('#sur_acc_teams_form_submit').html("CREATE");
      localStorage.removeItem("particularMembers");
      localStorage.removeItem("particularVms");
  } else {
    $('#suraccteamprocess').val("edit");
      $('#cteamCom').html("Update Team");
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
  var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/teams.php', 'html', false);
  if (data) {
      data = JSON.parse(data);
      if (data.code == "200") {
          var idata = JSON.parse(data.data);
          designSelectItemsUsersmodlTeams(idata);

          if (ceventHdlerTeam) {
              ceventHdlerTeam = false;
              userModalEventHdTeam();
          }


      } else {
          indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
              timeOut: 5000
          });
      }
  }
}
var teamvalidatorc = "";

function hasWhiteSpace(s) {
    if (/\s/g.test(s)) {
       return false;
    } else {
       return true;
    }
  }

function userModalEventHdTeam() {
  /*$('form#sur_acc_teams_form').keyup(function() {
      var sur_acc_team_name = $('#sur_acc_team_name').val();
      var sur_acc_team_desc = $('#sur_acc_team_desc').val();
      var sur_acc_team_members = (($('#sur_acc_team_members').val()) ? $('#sur_acc_team_members').val() : false);
      var sur_acc_team_vms = $('#sur_acc_team_vms').val();

      if (sur_acc_team_name && sur_acc_team_desc && sur_acc_team_members && sur_acc_team_vms) {
          $('#sur_acc_teams_form_submit').removeAttr("disabled");
      } else {
          $('#sur_acc_teams_form_submit').attr("disabled", "disabled");
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

    var regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?!.* ).{3,25}$/;
    return this.optional( element ) || regularExpression.test( value );
    

    
  }, "Min 3 characters, Must contain one uppercase and lowercase without empty spaces"); 


  jQuery.validator.addMethod("particularSpecialCharSpecialchar", function(value, element) {

    var regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?!.* ).{3,25}$/;
    if(this.optional( element ) || regularExpression.test( value )){
      
        return this.optional(element) || /^[a-zA-Z0-9.-]+$/i.test(value);
        
      }

    
  }, "Only hyphen and numbers are allowed"); 

  
  
  

  

  teamvalidatorc = $("#sur_acc_teams_form").submit(function(e){ e.preventDefault(); }).validate({
  //$("#sur_acc_teams_form").validate({
      rules: {
          sur_acc_team_name: {
              required: true,
              minlength:3,
              maxlength:25,
              particularSpecialChar: true,
              particularSpecialCharSpecialchar:true              
          },
          
          /*sur_acc_team_members: {
              required: true,
          },
          sur_acc_team_vms: {
              required: true,
          }*/
      },

      submitHandler: function(form) {
        
       
        fsteamfinal();
       
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

function fsteamfinal(){

    
  
      var sur_acc_team_members = $('#sur_acc_team_members').val();
      var sur_acc_team_vms = $('#sur_acc_team_vms').val();
        var sur_acc_teams_form_n = $('form#sur_acc_teams_form').serialize();
          //if(sur_acc_team_vms.length > 0 && sur_acc_team_members.length > 0 ){
  
              if ( (sur_acc_teams_form_n.indexOf('=&') > -1 || sur_acc_teams_form_n.substr(sur_acc_teams_form_n.length - 1) == '=')) {
              }else{
                  openBodyProgress();
      
                  $('#sur_acc_teams_form_submit').attr("disabled", "disabled");
                  $('#sur_acc_teams_form_submit').css("cursor", "progress");
                  var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
                var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
            
                  var reqParams = {
                    'from':'accounts',
                    'secudeco':$('#establish_surfAccounts').val(),
                      'data': JSON.stringify({
                          'tenantId': dcc_siginin_info.tenant_id,
                          'teamName': $('#sur_acc_team_name').val(),
                          'teamDec': $('#sur_acc_team_desc').val(),
                          'memebers': $('#sur_acc_team_members').val(),
                          'vms': $('#sur_acc_team_vms').val()
                      }),
                      'portal': 'account',
                      'portalsubmit': 'level_4'
                  };
            
                  var suraccteamprocess = $('#suraccteamprocess').val();
            
            
                  if (suraccteamprocess == "edit") {
            
                      reqParams = {
                        'from':'accounts',
                        'secudeco':$('#establish_surfAccounts').val(),
                          'data': JSON.stringify({
                              'teamId': $('#suraccteamId').val(),
                              'tenantId': dcc_siginin_info.tenant_id,
                              'teamName': $('#sur_acc_team_name').val(),
                              'teamDec': $('#sur_acc_team_desc').val(),
                              'memebers': $('#sur_acc_team_members').val(),
                              'vms': $('#sur_acc_team_vms').val()
                          }),
                          'portal': 'account',
                          'portalsubmit': 'level_5'
                      };
                      setTimeout(function() {
                          suraccuserEditTeams(reqParams);
                      }, 1000);
                  } else {
                      setTimeout(function() {
                          suraccuserAddTeams(reqParams);
                      }, 1000);
                  }
              }
              
         // }
          
  
          
       
  
    

}

function designSelectItemsUsersmodlTeams(data) {


  var particularMembers = ((JSON.parse(localStorage.getItem("particularMembers"))) ? ((JSON.parse(localStorage.getItem("particularMembers")).length > 0) ? JSON.parse(localStorage.getItem("particularMembers")) : []) : []);
  var particularVms = ((JSON.parse(localStorage.getItem("particularVms"))) ? JSON.parse(localStorage.getItem("particularVms")) : "");
  var a = ``;
  var b = "";



  var partTeamSel = false;
  var partRoleSel = false;
  if (data) {
      data.map(function(elem) {
          if (elem.type == "members") {

              if (elem.list) {
                  var selectedmem = "";
                  elem.list.map(function(teamElem) {
                      selectedmem = "";
                      if (particularMembers.includes(teamElem.id.toString())) {
                          partTeamSel = true;
                          selectedmem = "selected";
                      }
                      
                      a += `<option  ` + selectedmem + ` value="` + teamElem.id + `">` + teamElem.value + `</option>`;
                  })

                  if (!selectedmem) {
                      a += `<option value=""  disabled >Select Users</option>`;
                  } else {
                      a += `<option value=""  disabled >Select Users</option>`;
                  }
              }
          } else if (elem.type == "vms") {


              if (elem.list) {
                  var selectedvms = "";
                  elem.list.map(function(roleElem) {
                      selectedvms = "";
                      roleElem.id = roleElem.id.toString();
                      if (particularVms.includes(roleElem.id)) {

                          partRoleSel = true;
                          selectedvms = "selected";
                      }

                      var locked = "";
                      var lockimg = "";
                      if(roleElem.isUsed){
                        locked = `disabled`;
                        lockimg = `data-icon="app/views/assets/img/global/lock.svg"`;
                      }


                      b += `<option `+locked+` `+lockimg+` ` + selectedvms + ` value="` + roleElem.id + `">` + roleElem.value + `</option>`;
                  })

                  if (!selectedvms) {
                      b += `<option value=""  disabled >Select VM</option>`;
                  } else {
                      b += `<option value=""  disabled >Select VM</option>`;
                  }

              }
          }
      });
  }

  $('#sur_acc_team_members').html(a);
  $('#sur_acc_team_vms').html(b);
  if (partTeamSel) {
      $('#sur_acc_team_members_label').hide();
  } else {
      $('#sur_acc_team_members_label').show();
  }
  $('#sur_acc_team_members_label').hide();
  $('#sur_acc_team_vms_label').hide();

  $('select').formSelect();
  $('select').formSelect();




}


function postsuraccuserstateTeams(state, teamId) {
  var reqParams = {
    'from':'accounts',
    'secudeco':$('#establish_surfAccounts').val(),
      'data': JSON.stringify(
          state
      ),
      "teamId": teamId,
      'portal': 'account',
      'portalsubmit': 'level_6'
  };
  var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/teams.php', 'html', false);
  if (data) {

      data = JSON.parse(data);


      if (data.data.status == "ok") {
          indexToastr("success", 'Success', 'Success', {
              timeOut: 5000
          });
          tableAccTeamsT.ajax.reload(null, false);  
          //tableAccTeamsT.ajax.reload(dropdownAccTeamsTable);  
          $('#teammodal').modal("close");
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

function suraccuserstateTeams(state, teamId) {


  swal({
          title: "Are you sure ?",

          icon: "warning",
          buttons: true,
          dangerMode: true,
      })
      .then((willDelete) => {
          if (willDelete) {
              postsuraccuserstateTeams(state, teamId);


              swal.close()
          } else {

          }
      });


}

function suraccuserdeleteTeams(teamId, mtitle, stitle, svalue, ftitle) {


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
          postsuraccuserdeleteTeams(teamId);
      }
  })




}

function postsuraccuserdeleteTeams(teamId) {
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
  var reqParams = {
    'from':'accounts',
    'secudeco':$('#establish_surfAccounts').val(),
      "teamId": teamId,
      "tenant_id": dcc_siginin_info.tenant_id,
      'portal': 'account',
      'portalsubmit': 'level_7'
  };
  var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/teams.php', 'html', false);
  if (data) {

      data = JSON.parse(data);


      if (data.data.status == "ok") {
          indexToastr("success", 'Success', 'Success', {
              timeOut: 5000
          });
          var cvalue = tableAccTeamsT.page.info().recordsTotal - tableAccTeamsT.page.info().start;
          
          
          cvalue = cvalue-1;
          if(cvalue > 0){
            
            tableAccTeamsT.state.clear();
            tableAccTeamsT.ajax.reload(null, false);  
          }else{
            
            tableAccTeamsT.state.clear();
            tableAccTeamsT.ajax.reload(dropdownAccTeamsTable);  
          }

          //tableAccTeamsT.ajax.reload(dropdownAccTeamsTable);  
          $('#teammodal').modal("close");
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

function suraccusereditTeamsData(teamId) {
    $('#sur_acc_teams_form_submit').removeAttr("disabled");
closeBodyProgress();
var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
  let reqParams = {
    'from':'accounts',
    'secudeco':$('#establish_surfAccounts').val(),
      "teamId": teamId,
      "tenant_id": dcc_siginin_info.tenant_id,
      'portal': 'account',
      'portalsubmit': 'level_3'
  };
  var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/teams.php', 'html', false);
  if (data) {
      data = JSON.parse(data);
      if (data.code == "200") {
          var idata = JSON.parse(data.data);
          suraccusereditTeamsDataApply(idata);
      } else {
          indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
              timeOut: 5000
          });
      }
  }
}

function suraccusereditTeamsDataApply(data) {


  if (data) {



      localStorage.setItem("particularMembers", JSON.stringify(data.memebers));
      localStorage.setItem("particularVms", JSON.stringify(data.vms));

      modaluserMgmtCtrlTeams("edit");



      $('#sur_acc_team_name').val(data.teamName);
      $('#sur_acc_team_name_label').addClass("active");

      $('#sur_acc_team_desc').val(data.teamDec);
      $('#sur_acc_team_desc_label').addClass("active");
      $("#sur_acc_team_members_label").hide();
      $("#sur_acc_team_vms_label").hide();
      $('#suraccteamprocess').val("edit");
      $('#suraccteamId').val(data.teamId);




  }
}


function suraccuserAddTeams(reqParams) {


    teamvalidatorc.resetForm();
  var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/teams.php', 'html', false);
  if (data) {
    
      data = JSON.parse(data);
      
        if(data.status == "error" || data.code == "500"){
            $('#sur_acc_teams_form_submit').removeAttr("disabled",);
        $('#sur_acc_teams_form_submit').css("cursor", "unset");
            closeBodyProgress();
            indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
                timeOut: 5000
            });
            return;
        }
      if (data.data.status == "ok") {
        $('#sur_acc_teams_form_submit').removeAttr("disabled",);
        $('#sur_acc_teams_form_submit').css("cursor", "unset");
        closeBodyProgress();
          indexToastr("success", 'Success', 'Success', {
              timeOut: 5000
          });
          tableAccTeamsT.ajax.reload(null, false);  
         // tableAccTeamsT.ajax.reload(dropdownAccTeamsTable);  
          $('#teammodal').modal("close");
      } else {
        $('#sur_acc_teams_form_submit').removeAttr("disabled",);
        $('#sur_acc_teams_form_submit').css("cursor", "unset");
          indexToastr("error", 'Error', data.data.message, {
              timeOut: 5000
          });
          closeBodyProgress();
      }
  } else {
    $('#sur_acc_teams_form_submit').removeAttr("disabled",);
        $('#sur_acc_teams_form_submit').css("cursor", "unset");
      indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
          timeOut: 5000
      });
      closeBodyProgress();
  }
}

function suraccuserEditTeams(reqParams) {
    teamvalidatorc.resetForm();
  var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/teams.php', 'html', false);
  if (data) {

      data = JSON.parse(data);
      if(data.status == "error" || data.code == "500"){
        $('#sur_acc_teams_form_submit').removeAttr("disabled",);
        $('#sur_acc_teams_form_submit').css("cursor", "unset");
        closeBodyProgress();
        indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
            timeOut: 5000
        });
        return;
    }

      if (data.data.status == "ok") {
        $('#sur_acc_teams_form_submit').removeAttr("disabled",);
        $('#sur_acc_teams_form_submit').css("cursor", "unset");
        closeBodyProgress();
          indexToastr("success", 'Success', 'Success', {
              timeOut: 5000
          });
          tableAccTeamsT.ajax.reload(null, false);  
          //tableAccTeamsT.ajax.reload(dropdownAccTeamsTable);  
          $('#teammodal').modal("close");
          
      } else {
        $('#sur_acc_teams_form_submit').removeAttr("disabled",);
        $('#sur_acc_teams_form_submit').css("cursor", "unset");
          indexToastr("error", 'Error', data.data.message, {
              timeOut: 5000
          });
          closeBodyProgress();
      }
  } else {
    $('#sur_acc_teams_form_submit').removeAttr("disabled",);
        $('#sur_acc_teams_form_submit').css("cursor", "unset");
      indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
          timeOut: 5000
      });
      closeBodyProgress();
  }
}