$(document).ready(function(){

  var mainPage = "account";
  
  

    $('.csidenavtitles').removeClass("active");
    $('.csidenavtitles a').removeClass("active");
    $('#'+mainPage+"Main").addClass("active");
    $('#'+mainPage+"Main a").addClass("active");

  loadAccountInit();
  


});
  

function loadAccountInit(){


  var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
        
     
  var roleResponse = dcc_siginin_info.roleRoutes;
  var accountPageInfo = ((JSON.parse(localStorage.getItem("accountPageInfo")))?JSON.parse(localStorage.getItem("accountPageInfo")):false);
  if(!accountPageInfo){
    if(roleResponse){
      roleResponse.map(function(elem){
        if(elem.children){
          elem.children.map(function(selem){
            if(selem.title == "menu_label_11"){
              accountPageInfo = selem;
              localStorage.setItem("accountPageInfo",JSON.stringify(selem));
              return;
            }
          })
        }
      })
    }
  }

  var kp = ``;

  var profileStyle = OrgStyle = usermgmtStyle = teamsStyle = tagsStyle = "display:none;";

  if(accountPageInfo){
    
    if(accountPageInfo.tabs.includes("My Profile")){
      profileStyle = "display:block;";
    }
    if(accountPageInfo.tabs.includes("Organization") && dcc_siginin_info.account_type == "legal"){
      OrgStyle = "display:block;";
    }
    if(accountPageInfo.tabs.includes("User Management")){
      usermgmtStyle = "display:block;";
    }
    if(accountPageInfo.tabs.includes("Teams")){
      teamsStyle = "display:block;";
    }
    if(accountPageInfo.tabs.includes("Tags")){
      tagsStyle = "display:block;";
    }
  }

  kp += `<li style="`+profileStyle+`" id="profileTab" class="tab"><a class="active" href="#profile">My Profile</a></li>
  <li style="`+OrgStyle+`" id="organizationTab" class="tab"><a onClick="surfaccorgShow()" href="#organization">Organization </a></li>
  <li style="`+usermgmtStyle+`" id="userMgmtShowTab" class="tab"><a onClick="userMgmtShow()" href="#user">User Management</a></li>
  <li style="`+teamsStyle+`" id="teamsShowTab" class="tab"><a onClick="teamsShow()" href="#teams">Teams</a></li>
  <li style="`+tagsStyle+`" id="tagsShowTab" class="tab"><a onClick="tagsShow()" href="#tags">Tags</a></li>
  `;

var lp = ` 
<div class="card-content tab-card">
    <div class="row">
        <div class="col s12">
          <ul class="tabs tabs-fixed-width">
            `+kp+`
          </ul>
        </div>
    </div>
</div>
`;

setTimeout(function () {
$('#accounttopskel').html(lp);



  
  $('.tabs').tabs();
  supportLibs();    

},500);
  

}
function supportLibs(){
  
  $('select').formSelect();    

  
  $(".team-select").select2({ 
    placeholder: "Team"
  });
  $(".member-select").select2({ 
    placeholder: "Members"
  });    

  

  

  
  tableSupporters();
}
function tableSupporters(){
  
 
    $(".dropdown-content.select-dropdown li").on("click", function () {
      var that = this;
      setTimeout(function () {
        if ($(that).parent().parent().find('.select-dropdown').hasClass('active')) {
          
          $(that).parent().parent().find('.select-dropdown').removeClass('active');
          $(that).parent().hide();
        }
      }, 100);
    });
  

  var checkbox = $('#multi-select tbody tr th input')
  var selectAll = $('#multi-select .select-all')

  

 
    checkbox.on('click', function () {
      $(this).parent().parent().parent().toggleClass('selected');
    })

    checkbox.on('click', function () {
      if ($(this).attr("checked")) {
        $(this).attr('checked', false);
      } else {
        $(this).attr('checked', true);
      }
    })


    

    selectAll.on('click', function () {
      $(this).toggleClass('clicked');
      if (selectAll.hasClass('clicked')) {
        $('#multi-select tbody tr').addClass('selected');
      } else {
        $('#multi-select tbody tr').removeClass('selected');
      }

      if ($('#multi-select tbody tr').hasClass('selected')) {
        checkbox.prop('checked', true);

      } else {
        checkbox.prop('checked', false);

      }
    })
  
}
