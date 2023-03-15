var tableAccUMT;
var lengthAccUMTable = 10;
var startAccUMTable = 0;
function userMgmtShow() {
    $('#account-table-teams-org').hide();
    $('#account-table-teams-skeleton').show();
    $('#account-table-teams-title').hide();
    $('#account-table-teams-plus').hide();
    
    $('#account-table-tags-org').hide();
    $('#account-table-tags-skeleton').show();
    $('#account-table-tags-title').hide();
    $('#account-table-tags-plus').hide();
    


    initAccUMTable();
}

var dropdownAccUMTable = function (){
    
    $(".dropdown-trigger-acc-usermgmt").dropdown()
}


$(".toggle-password").click(function(e) {
    e.preventDefault();
    var clickedpwd = 0;

   

    $(this).toggleClass("toggle-password");
    if (clickedpwd == 0) {
        $(this).removeClass('fa-eye');
        $(this).addClass('fa-eye-slash');
        clickedpwd = 1;
    } else {
        $(this).removeClass('fa-eye-slash');
        $(this).addClass('fa-eye');
        clickedpwd = 0;
    }

   


    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});


function getAccUMTable(){


    
    
    return [
      
        
    {
        title: 'Status', name: 'userStatus'
    },
    {
        title: 'Users', name: 'emailId'
    },
    {
        title: 'Role', name: 'role'
    },
    {
        title: 'Team', name: 'teams'
    },
    {
        title: 'Email Verified', name: 'emailVerifyStatus'
    },
    {
        title: '2FA', name: 'mfaAuth'
    },
    {
        title: 'Last Login', name: 'lastLogin'
    },
    {
        title: 'Action', name: 'Action'
    }
  ];
  }
var umtRolename = "";
var umtuserserialid = "";
function callBackAccUMTable(){
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 

    
    umtRolename = dcc_siginin_info.role_name;
umtuserserialid = dcc_siginin_info.user_serial_id;

    return {
      "data": function(d){
        
  
        d.from = 'accounts';
        d.secudeco = $('#establish_surfAccounts').val();
        d.portal =  'account';
        d.portalsubmit =  'level_1';
        d.tenant_id =  dcc_siginin_info.tenant_id;
        
        },
        
        url: 'app/views/html/surface/settings/account/userMgmt.php',
        type: 'POST',
        dataFilter: function(data) {                
          
            var json = jQuery.parseJSON(data);                
            
            json.recordsTotal = JSON.parse(json.data).totalRecords;
            json.recordsFiltered = JSON.parse(json.data).totalRecords;
            json.data = JSON.parse(json.data).data;
  
            var commonDataJson = [];                
            currentInvData = json.data;
            json.data.map(function(elem) { 
               
                                
                var finalDJs = getDesignAccUMTable(elem);
                commonDataJson.push(finalDJs);
            });            
  
                       
            json.data = commonDataJson;
            return JSON.stringify(json); 
        }
    }
  }

  function getDesignAccUMTable(elem){
   

    
  
    var inactVis = "hide";
    var actVis = "hide";
    var pendingVis = "hide";


    var statusVal = "-";
    var statusclass = "orange orange-text";
    if (elem.userStatus.toLowerCase() == "pending") {
        pendingVis = "";
        statusVal = "Pending";
        inactVis = "";
        actVis = "";
        statusclass = "orange orange-text";
    } else if (elem.userStatus.toLowerCase() == "active") {
        pendingVis = "";
        inactVis = "";
        actVis = "hide";
        statusVal = "Active";
        statusclass = "green green-text";
    } else if (elem.userStatus.toLowerCase() == "inactive") {
        pendingVis = "";
        inactVis = "hide";
        actVis = "";
        statusVal = "Inactive";
        statusclass = "red red-text";
    }

    var actionHtml = "";
    if (umtuserserialid != elem.userId && umtRolename == "owner") {
        actionHtml = ` <div class="invoice-action">
    <a class='dropdown-trigger-acc-usermgmt' href='#' data-target='action-btn-filter` + elem.userId + `'>
      <span><i class="material-icons dp48">more_horiz</i></span></a>
  </div>
  <!-- Dropdown Structure -->
  <ul id='action-btn-filter` + elem.userId + `' class='dropdown-content'>
    <li onClick="suraccusereditData('` + elem.userId + `')"><a  class="modal-trigger" href="#usermodal"><i class="material-icons dp48">edit</i> Edit</a></li>

    <!--<li  onClick="suraccuserstate('pending','` + elem.userId + `','Pending User ?','User','` + elem.emailId + `','Are you sure you want to Pending user?')" ><a ><i class="material-icons dp48">description</i>Pending</a></li>-->

    <li class="` + inactVis + `" onClick="suraccuserstate('inactive','` + elem.userId + `','Inactive User ?','User','` + elem.emailId + `','Are you sure you want to Inactive user?')" ><a ><i class="material-icons dp48">description</i> In-active</a></li>
    <li class="` + actVis + `" onClick="suraccuserstate('active','` + elem.userId + `','Active User ?','User','` + elem.emailId + `','Are you sure you want to Active user?')" ><a ><i class="material-icons dp48">description</i> Active</a></li>
    <li class="`+pendingVis+`" onClick="suraccuserdelete('` + elem.userId + `','Delete User ?','User','` + elem.emailId + `','Are you sure you want to Delete user?')" ><a ><i class="material-icons dp48">delete</i> Delete</a></li>
  </ul>`;
    } else {
        actionHtml = ` <div class="invoice-action" style="cursor:not-allowed">
    <a >
      <span ><i class="material-icons dp48">more_horiz</i></span></a>
  </div>`;
    }

     
    var abc = [
        
        `<span class="chip lighten-5 ` + statusclass + `">` + statusVal + `</span>`,
         ((elem.emailId) ? elem.emailId : "-"),
         ((elem.role) ? elem.role : "-"),
         ((elem.teams.length > 0) ? String(elem.teams) : "-"),
         ((elem.emailVerifyStatus) ? "Yes" : "No"),
         ((elem.mfaAuth) ? "Yes" : "No") ,
         ((elem.lastLogin) ? elem.lastLogin : "-"),
        actionHtml
    ]
    
    return abc;




  }


  
function initAccUMTable(){
    /*if(tableAccUMT != undefined){
        tableAccUMT.destroy();
        tableAccUMT.ajax.reload(dropdownAccUMTable); 
    }*/
    
    
    var p = `
    <div class="col s12">
    <div class="responsive-table">
      <table class="striped usermanagement-datatable" id="usermanagement-datatable">
        <thead>
          <tr>
            <th>Status</th>
            <th>Users</th>
            <th>Role</th>
            <th>Team</th>
            <th>Email Verified</th>
            <th>2FA</th>
            <th>Last Login</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="usermanagement-datatable-body">
          
        </tbody>
      </table>
    </div>
  </div>
    `;  
    $('#account-table-usermgmt-org').html(p);  

    tableAccUMT = $('#usermanagement-datatable').DataTable({
        responsive:true,
    serverSide: true,
    columns: getAccUMTable(),
    columnDefs: [
        { responsivePriority: 1, targets: 0 },
             
                     { responsivePriority: 2, targets: 7, orderable:false }
                    ],
    drawCallback: function () {
        dropdownAccUMTable();
        var api = this.api();
        startAccUMTable = api.page.info().start;
       lengthAccUMTable = api.page.info().length;
       
       
      },
    initComplete: function(settings, json) {  
      
        dropdownAccUMTable();
        $('#account-table-usermgmt-title').show();
        $('#account-table-usermgmt-plus').show();
        $('#account-table-usermgmt-org').show();  
        $('#account-table-usermgmt-skeleton').hide();  
      },
    ajax: callBackAccUMTable(),
    lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, 'All'],
    ],
    //"stateSave": true,
    "bStateSave": true,
    "fnStateSave": function (oSettings, oData) {
        localStorage.setItem('offersDataTablesAccUserMgmt', JSON.stringify(oData));
    },
    "fnStateLoad": function (oSettings) {
        return JSON.parse(localStorage.getItem('offersDataTablesAccUserMgmt'));
    },
    search: {
        return: true,
    },

        lengthChange: true,
    displayStart: startAccUMTable,
    pageLength: lengthAccUMTable,
    dom: '<"top display-flex mb-2"<"action-filters"f><"actions action-btns display-flex align-items-center">><"clear">rt<"bottom"i p>',
    
    language: {
        search: "",
        searchPlaceholder: "Search Users"
    },
   
   /* order: [
        [1, 'asc']
    ]*/
});

//tableAccUMT.search('').draw();
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





function initUSermgmtShow() {
  var p = `<h4  class="card-title mb-0">List of Users</h4>
  <a  onClick="modaluserMgmtCtrl('add')" class="modal-trigger" href="#usermodal"><i class="fa fa-plus-circle dp48 table-header table-add-icon fs-30" aria-hidden="true"></i></a>
  <div class="row" >
    <div class="col s12">
      <table class="striped" id="usermanagement-datatable">
        <thead>
          <tr>
            <th>Status</th>
            <th>Users</th>
            <th>Role</th>
            <th>Team</th>
            <th>Email Verified</th>
            <th>2FA</th>
            <th>Last Login</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="usermanagement-datatable-body">
          
        </tbody>
      </table>
    </div>
  </div>`;

  setTimeout(function() {
      $('#user').html(p);
      listuserMgmtCtrl();

  }, 500);


}
var ceventHdler = true;

function modaluserMgmtCtrl(type) {
    if(usermgmtvalidatorc){
        usermgmtvalidatorc.resetForm();
    }
  clearVals();
  $('#sur_acc_user_form_submit').html("UPDATE");
  if (type == "add") {
    $('#sur_acc_user_pwd').attr("name","sur_acc_user_pwd");
    $('#usPwdCommonPlace').show();
    
    $('#usDescCommonPlace').addClass("m12 l6");
    $('#suraccuserprocess').val("add");
      $('#addUserComC').html("Add User");
      $('#sur_acc_user_form_submit').html("INVITE");

      localStorage.removeItem("particularTeam");
      localStorage.removeItem("particularRole");
      $('#sur_acc_user_email').removeAttr("disabled");
  } else {
    $('#sur_acc_user_pwd').removeAttr("name");
    $('#usDescCommonPlace').removeClass("m12 l6");
    $('#usPwdCommonPlace').hide();

    $('#suraccuserprocess').val("edit");
    $('#sur_acc_user_email').attr("disabled","disabled");
      $('#addUserComC').html("Update User");
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
  var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/userMgmt.php', 'html', false);
  if (data) {
      data = JSON.parse(data);
      if (data.code == "200") {

          var idata = JSON.parse(data.data);
          designSelectItemsUsersmodl(idata);
          if (ceventHdler) {
              ceventHdler = false;
              userModalEventHd();
          }

      } else {
          indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
              timeOut: 5000
          });
      }
  }
}

function listuserMgmtCtrl() {
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
  let reqParams = {
    'from':'accounts',
    'secudeco':$('#establish_surfAccounts').val(),
      "tenant_id": dcc_siginin_info.tenant_id,
      'portal': 'account',
      'portalsubmit': 'level_1'
  };
  var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/userMgmt.php', 'html', false);
  if (data) {
      data = JSON.parse(data);
      if (data.code == "200") {
          var idata = JSON.parse(data.data);
          plotusermgmtTable(idata);
      } else {
        plotusermgmtTable([]);
         
      }
  }
}


function plotusermgmtTable(data) {
  var p = "<tr><h3>No Data Found!<h3></tr>";
  var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
  if (data.data) {
      p = "";
      data.data.map(function(elem) {

          var inactVis = "hide";
          var actVis = "hide";
          var pendingVis = "hide";


          var statusVal = "-";
          var statusclass = "orange orange-text";
          if (elem.userStatus.toLowerCase() == "pending") {
            pendingVis = "";
              statusVal = "Pending";
              inactVis = "";
              actVis = "";
              statusclass = "orange orange-text";
          } else if (elem.userStatus.toLowerCase() == "active") {
            pendingVis = "";
              inactVis = "";
              actVis = "hide";
              statusVal = "Active";
              statusclass = "green green-text";
          } else if (elem.userStatus.toLowerCase() == "inactive") {
            pendingVis = "";
              inactVis = "hide";
              actVis = "";
              statusVal = "Inactive";
              statusclass = "red red-text";
          }
          p += ` <tr>
      <td>
          <span class="chip lighten-5 ` + statusclass + `">` + statusVal + `</span>
      </td>
      <td>` + ((elem.emailId) ? elem.emailId : "-") + `</td>
      <td>` + ((elem.role) ? elem.role : "-") + `</td>
      <td>` + ((elem.teams.length > 0) ? String(elem.teams) : "-") + `</td>
      <td>` + ((elem.emailVerifyStatus) ? "Yes" : "No") + `</td>
      <td>` + ((elem.mfaAuth) ? "Yes" : "No") + `</td>
      <td>` + ((elem.lastLogin) ? elem.lastLogin : "-") + `</td>
      <td>`;
          if (dcc_siginin_info.user_serial_id != elem.userId && dcc_siginin_info.role_name == "owner") {
              p += ` <div class="invoice-action">
          <a class='dropdown-trigger' href='#' data-target='action-btn-filter` + elem.userId + `'>
            <span><i class="material-icons dp48">more_horiz</i></span></a>
        </div>
        <!-- Dropdown Structure -->
        <ul id='action-btn-filter` + elem.userId + `' class='dropdown-content'>
          <li onClick="suraccusereditData('` + elem.userId + `')"><a  class="modal-trigger" href="#usermodal"><i class="material-icons dp48">edit</i> Edit</a></li>

          <!--<li  onClick="suraccuserstate('pending','` + elem.userId + `','Pending User ?','User','` + elem.emailId + `','Are you sure you want to Pending user?')" ><a ><i class="material-icons dp48">description</i>Pending</a></li>-->

          <li class="` + inactVis + `" onClick="suraccuserstate('inactive','` + elem.userId + `','Inactive User ?','User','` + elem.emailId + `','Are you sure you want to Inactive user?')" ><a ><i class="material-icons dp48">description</i> In-active</a></li>
          <li class="` + actVis + `" onClick="suraccuserstate('active','` + elem.userId + `','Active User ?','User','` + elem.emailId + `','Are you sure you want to Active user?')" ><a ><i class="material-icons dp48">description</i> Active</a></li>
          <li class="`+pendingVis+`" onClick="suraccuserdelete('` + elem.userId + `','Delete User ?','User','` + elem.emailId + `','Are you sure you want to Delete user?')" ><a ><i class="material-icons dp48">delete</i> Delete</a></li>
        </ul>`;
          } else {
              p += ` <div class="invoice-action" style="cursor:not-allowed">
          <a >
            <span ><i class="material-icons dp48">more_horiz</i></span></a>
        </div>`;
          }

          p += ` </td>
    </tr>`;
      });


  }
  $('#usermanagement-datatable-body').html(p);
  
  if (plotusermgmtTablea) {
      plotusermgmtTablea = false;
      $('#usermanagement-datatable').DataTable({
          "responsive": true,
          "lengthMenu": [
              [10, 25, 50, -1],
              [10, 25, 50, "All"]
          ]
      });
  }


  $('.dropdown-trigger').dropdown();
}

function postsuraccuserstate(state, userId) {


  var reqParams = {
    'from':'accounts',
    'secudeco':$('#establish_surfAccounts').val(),
      'data': JSON.stringify(
          state
      ),
      "userId": userId,
      'portal': 'account',
      'portalsubmit': 'level_6'
  };
  var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/userMgmt.php', 'html', false);
  if (data) {

      data = JSON.parse(data);


      if (data.data.status == "ok") {
          indexToastr("success", 'Success', 'Success', {
              timeOut: 5000
          });
          var cvalue = tableAccUMT.page.info().recordsTotal - tableAccUMT.page.info().start;
          
          
          if(cvalue > 0){
            
            tableAccUMT.state.clear();
            tableAccUMT.ajax.reload(null, false);  
          }else{
            
            tableAccUMT.state.clear();
            tableAccUMT.ajax.reload(dropdownAccUMTable);  
          }
          
          $('#usermodal').modal("close");
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

function suraccuserstate(state, userId, mtitle, stitle, svalue, ftitle) {


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
          postsuraccuserstate(state, userId);
      }
  })



}

function postsuraccuserdelete(userId) {


    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
  var reqParams = {
    'from':'accounts',
    'secudeco':$('#establish_surfAccounts').val(),
      "userId": userId,
      "tenant_id": dcc_siginin_info.tenant_id,
      'portal': 'account',
      'portalsubmit': 'level_7'
  };
  var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/userMgmt.php', 'html', false);
  if (data) {

      data = JSON.parse(data);

      if (data.data.status == "ok") {
          indexToastr("success", 'Success', 'Success', {
              timeOut: 5000
          });
          
          var cvalue = tableAccUMT.page.info().recordsTotal - tableAccUMT.page.info().start;
          
          
          cvalue = cvalue-1;
          if(cvalue > 0){
            
            tableAccUMT.state.clear();
            tableAccUMT.ajax.reload(null, false);  
          }else{
            
            tableAccUMT.state.clear();
            tableAccUMT.ajax.reload(dropdownAccUMTable);  
          }
          $('#usermodal').modal("close");
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

function suraccuserdelete(userId, mtitle, stitle, svalue, ftitle) {


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
          postsuraccuserdelete(userId);
      }
  })


}

function suraccusereditData(userId) {
    $('#sur_acc_user_form_submit').removeAttr("disabled");
    closeBodyProgress();
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
  let reqParams = {
    'from':'accounts',
    'secudeco':$('#establish_surfAccounts').val(),
      "userId": userId,
      "tenant_id": dcc_siginin_info.tenant_id,
      'portal': 'account',
      'portalsubmit': 'level_3'
  };
  var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/userMgmt.php', 'html', false);
  if (data) {
      data = JSON.parse(data);
      if (data.code == "200") {
          var idata = JSON.parse(data.data);
          suraccusereditDataApply(idata);
      } else {
          indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
              timeOut: 5000
          });
      }
  }
}

function suraccusereditDataApply(data) {


  if (data) {



      localStorage.setItem("particularTeam", JSON.stringify(data.teams));
      localStorage.setItem("particularRole", data.role);

      modaluserMgmtCtrl("edit");

      $('#sur_acc_user_email').val(data.emailId);
      
      $('#sur_acc_user_email_label').addClass("active");

      $('#sur_acc_user_desc').val(data.userDesc);
      $('#sur_acc_user_desc_label').addClass("active");
      $("#sur_acc_user_teams_label").hide();
      $("#sur_acc_user_roles_label").hide();
      $('#suraccuserprocess').val("edit");
      $('#suraccuserId').val(data.userId);




  }
}

function clearVals() {
  var sur_acc_user_email = $('#sur_acc_user_email').val("");
  var sur_acc_user_pwd = $('#sur_acc_user_pwd').val("");
  var sur_acc_user_desc = $('#sur_acc_user_desc').val("");
  var sur_acc_user_teams = $('#sur_acc_user_teams').val("");
  var sur_acc_user_roles = $('#sur_acc_user_roles').val("");
}

function designSelectItemsUsersmodl(data) {


  var particularTeam = ((JSON.parse(localStorage.getItem("particularTeam"))) ? ((JSON.parse(localStorage.getItem("particularTeam")).length > 0) ? JSON.parse(localStorage.getItem("particularTeam")) : []) : []);
  var particularRole = ((localStorage.getItem("particularRole")) ? localStorage.getItem("particularRole") : "");
  var a = ``;
  var b = "";


  var partTeamSel = false;
  var partRoleSel = false;
  if (data) {
      data.map(function(elem) {
          if (elem.type == "teams") {

              if (elem.list) {
                  elem.list.map(function(teamElem) {
                      var selected = "";
                      teamElem.id = teamElem.id.toString();
                      if (particularTeam.includes(teamElem.id)) {
                          partTeamSel = true;
                          selected = "selected";
                      }
                      a += `<option ` + selected + ` value="` + teamElem.id + `">` + teamElem.value + `</option>`;
                  })
              }
          } else if (elem.type == "roles") {
              if (elem.list) {
                  elem.list.map(function(roleElem) {
                      var selected = "";
                      if (particularRole == roleElem.id) {
                          partRoleSel = true;
                          selected = "selected";
                      }

                      b += `<option ` + selected + ` value="` + roleElem.id + `">` + roleElem.value + `</option>`;
                  })
              }
          }
      });
  }

  $('#sur_acc_user_teams').html(a);
  $('#sur_acc_user_roles').html(b);
  if (partTeamSel) {
      $('#sur_acc_user_teams_label').hide();
  } else {
      $('#sur_acc_user_teams_label').show();
  }
  $('#sur_acc_user_roles_label').hide();

  $('select').formSelect();


  $(".team-select").select2({
      placeholder: "Team",

  });




}

var usermgmtvalidatorc = "";
function userModalEventHd() {

  /*$('form#sur_acc_user_form').keyup(function() {
      var sur_acc_user_email = ValidateEmail($('#sur_acc_user_email').val());
      var sur_acc_user_pwd = $('#sur_acc_user_pwd').val();
      var sur_acc_user_desc = $('#sur_acc_user_desc').val();
      var sur_acc_user_teams = (($('#sur_acc_user_teams').val()) ? $('#sur_acc_user_teams').val() : false);
      var sur_acc_user_roles = $('#sur_acc_user_roles').val();

      var regularExpression = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;


      var regex = new RegExp(regularExpression, );
      var rex = regex.test(sur_acc_user_pwd);


      if (sur_acc_user_email && rex && sur_acc_user_desc && sur_acc_user_teams && sur_acc_user_roles) {
          $('#sur_acc_user_form_submit').removeAttr("disabled");
      } else {
          $('#sur_acc_user_form_submit').attr("disabled", "disabled");
      }
  });*/



  var regularExpression = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  jQuery.validator.addMethod("password", function(value, element) {

      return this.optional(element) || regularExpression.test(value);
  }, 'Minimum 8 characters long, number, uppercase & symbol without empty spaces.');

  $('select[required]').css({
      position: 'absolute',
      display: 'inline',
      height: 0,
      padding: 0,
      border: '1px solid rgba(255,255,255,0)',
      width: 0
  });
  jQuery.validator.addMethod("loginmailvalidator", function(value, element) {
    return this.optional(element) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(value);
  }, "Please enter a valid email");

   usermgmtvalidatorc = $("#sur_acc_user_form").submit(function(e){ e.preventDefault(); }).validate({
      rules: {
          sur_acc_user_email: {
              required: true,
              email: true,
              loginmailvalidator:true
          },
          
          sur_acc_user_pwd:{
            required: true,
          },
          sur_acc_user_teams: {
              required: true,
          },
          sur_acc_user_roles: {
              required: true,
          }
      },

      submitHandler: function(form) {
        
       
        fsusermgmtfinal();
       
       },


      messages: {
          sur_acc_user_email: {
              required: "Enter email"
          },
          sur_acc_user_desc: {
              required: "Enter description"
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



 

}

function fsusermgmtfinal(){

    
        
  
      var sur_acc_user_form_n = $('form#sur_acc_user_form').serialize();
        if($('#sur_acc_user_teams').val().length > 0 ){
          if (sur_acc_user_form_n.indexOf('=&') > -1 || sur_acc_user_form_n.substr(sur_acc_user_form_n.length - 1) == '=') {
          }else{
              openBodyProgress();
  
  
              $('#sur_acc_user_form_submit').attr("disabled", "disabled");
              $('#sur_acc_user_form_submit').css("cursor", "progress");
                
              
        
              var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
            var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
              var reqParams = {
                'from':'accounts',
                'secudeco':$('#establish_surfAccounts').val(),
                  'data': JSON.stringify({
                      'tenantId': dcc_siginin_info.tenant_id,
                      'emailId': $('#sur_acc_user_email').val(),
                      'role': $('#sur_acc_user_roles').val(),
                      'userDesc': $('#sur_acc_user_desc').val(),
                      'password': $('#sur_acc_user_pwd').val(),
                      'teams': $('#sur_acc_user_teams').val()
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
                          'userId': $('#suraccuserId').val(),
                          'tenantId': dcc_siginin_info.tenant_id,
                          'emailId': $('#sur_acc_user_email').val(),
                          'role': $('#sur_acc_user_roles').val(),
                          'userDesc': $('#sur_acc_user_desc').val(),
                          'password': $('#sur_acc_user_pwd').val(),
                          'teams': $('#sur_acc_user_teams').val()
                      }),
                      'portal': 'account',
                      'portalsubmit': 'level_5'
                  };
                  setTimeout(function() {
                      suraccuserEdit(reqParams);
                      return;
                  }, 1000);
              } else {
                  setTimeout(function() {
                      suraccuserAdd(reqParams);
                      return;
                  }, 1000);
              }
          }    
      }
  
  
       
  
    

}

function suraccuserAdd(reqParams) {



  var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/userMgmt.php', 'html', false);
  if (data) {

      data = JSON.parse(data);

      if (data.data.status == "ok") {
        $('#sur_acc_user_form_submit').removeAttr("disabled");
      $('#sur_acc_user_form_submit').css("cursor", "unset");
        closeBodyProgress();
          indexToastr("success", 'Success', 'Success', {
              timeOut: 5000
          });
          var cvalue = tableAccUMT.page.info().recordsTotal - tableAccUMT.page.info().start;
          
          
          if(cvalue > 0){
            
            tableAccUMT.state.clear();
            tableAccUMT.ajax.reload(null, false);  
          }else{
            
            tableAccUMT.state.clear();
            tableAccUMT.ajax.reload(dropdownAccUMTable);  
          }
          $('#usermodal').modal("close");
          
      } else {
        $('#sur_acc_user_form_submit').removeAttr("disabled");
      $('#sur_acc_user_form_submit').css("cursor", "unset");
          indexToastr("error", 'Error', data.data.message, {
              timeOut: 5000
          });
          closeBodyProgress();
      }

  } else {
    $('#sur_acc_user_form_submit').removeAttr("disabled");
      $('#sur_acc_user_form_submit').css("cursor", "unset");
      indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
          timeOut: 5000
      });
      closeBodyProgress();
  }
}

function suraccuserEdit(reqParams) {

  var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/userMgmt.php', 'html', false);
  if (data) {

      data = JSON.parse(data);

      if (data.data.status == "ok") {
        $('#sur_acc_user_form_submit').removeAttr("disabled");
      $('#sur_acc_user_form_submit').css("cursor", "unset");
        closeBodyProgress();
          indexToastr("success", 'Success', 'Success', {
              timeOut: 5000
          });
          var cvalue = tableAccUMT.page.info().recordsTotal - tableAccUMT.page.info().start;
          
          
          if(cvalue > 0){
            
            tableAccUMT.state.clear();
            tableAccUMT.ajax.reload(null, false);  
          }else{
            
            tableAccUMT.state.clear();
            tableAccUMT.ajax.reload(dropdownAccUMTable);  
          }
          $('#usermodal').modal("close");
          
      } else {
        $('#sur_acc_user_form_submit').removeAttr("disabled");
      $('#sur_acc_user_form_submit').css("cursor", "unset");
          indexToastr("error", 'Error', data.data.message, {
              timeOut: 5000
          });
          closeBodyProgress();
      }
  } else {
    $('#sur_acc_user_form_submit').removeAttr("disabled");
      $('#sur_acc_user_form_submit').css("cursor", "unset");
      indexToastr("error", 'Error', 'Error Occured! Contact Administrator.', {
          timeOut: 5000
      });
      closeBodyProgress();
  }
}

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
      $('#login_dcc_email').addClass("valid");
      $('#login_dcc_email').removeClass("invalid");
      return true;
  } else {
      $('#login_dcc_email').removeClass("valid");
      $('#login_dcc_email').addClass("invalid");
      return false;
  }
}