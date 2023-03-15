$(function() {

})


function surfaccorgShow() {

    initCAccOrg();

}

function removeFileUpl(){
    
    $('#wiz_orginfo_filePath').val("");
    $('#file_remove').hide();
    $('#value_file_remove').show();
   
  }

  function uploadPersonalOrgInfoFile() {
    
    var files = document.getElementById('file_upload').files;
    if (files.length == 0) {
        $('#file_remove').hide();
        $('#value_file_remove').show();
        alert("Please first choose or drop any file(s)...");
        return;
    }else{
       
        $('#file_remove').show();
        $('#value_file_remove').hide();
    }
    var filenames = "";
    for (var i = 0; i < files.length; i++) {
        filenames += files[i].name + "\n";
    }
    var hostnameP = window.location.hostname;
    var url = "https://"+hostnameP+"/api/files/uploadcrfile";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Accept", "multipart/form-data");
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            
        }
    };
    
    var formData = new FormData();
   
    
    formData.append('file', files[0]);
    xhr.send(formData);
    
    
  }


function initCAccOrg() {
    
  var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
  var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 


var role_name = dcc_siginin_info.role_name;
croleers = dcc_siginin_info.role_name;

var ownerdisabled = "";
var ownerupdateStyle = "";
if (role_name == "owner") {
    ownerdisabled = "disabled";
    ownerupdateStyle = "display:none;"


}

    var p = `<div class="row mt-2" >

   <form    class="mt-3" id="sur_acc_orgid_form" method="post"  enctype="multipart/form-data" autocomplete="off">
   <div class="col s12 m6 l6 input-field input-outlined mt-0">
       <input ` + ownerdisabled + ` id="sur_acc_orgid_companyName" name="companyName" type="text" class="validate">
       <label id="sur_acc_orgid_companyName_label" for="sur_acc_orgid_companyName">Company Name</label>
   </div>
   <div class="col s12 m6 l6 input-field input-outlined mt-0 mb-3">
   <label class="custom-select-label">Purpose</label>
       <select ` + ownerdisabled + ` id="sur_acc_orgid_purposeOfUse" name="purposeOfUse">
       <option disabled selected value="">Select Any</option>
       <option value="Resale">Resale</option>
       <option value="Live support system">Live support system</option>
       <option value="Plants/Factories">Plants/Factories</option>
       <option value="Others">Others</option>
       </select>
       <div class="input-field">
                                          </div>
   </div>
   <div class="col s12 m6 l6 input-field input-outlined mt-0">
       <input ` + ownerdisabled + ` id="sur_acc_orgid_crNo" name="crNo" type="text" class="validate">
       <label id="sur_acc_orgid_crNo_label" for="sur_acc_orgid_crNo">Commercial Registration Number (CR)</label>
   </div>
   <div class="col s12 m6 l6 file-field input-field mt-0">
       <div class="float-right mt-2">
         <img ` + ownerdisabled + ` src="app/views/html/signup/home/img/upload.png" alt="" width="40">
         <input style="` + ownerupdateStyle + `" id="file_upload" name="file_upload" onChange="uploadPersonalOrgInfoFile()" type="file" >
       </div>
       <div `+((role_name != "owner")?'onClick="removeFileUpl()"':'')+`  id="file_remove" style="display:none;" class="float-right mt-2 hide-on-small-only hide-on-med-only ">
       <span ><i class="material-icons pink-text">highlight_off</i></span>
    </div>
       <div class="file-path-wrapper input-field input-outlined mt-0 mb-0 pl-0" style="position: revert;">
         <input id="wiz_orginfo_filePath" name="crFilaName"  ` + ownerdisabled + ` class="file-path validate" type="text" placeholder="Upload files here. - Allowed *.jpeg, *.jpg, *.png, *.pdf / Max file size 2MB.">
       </div>
   </div>
   <div class="col s12 m6 l6 input-field input-outlined mt-0">
       <input ` + ownerdisabled + ` id="sur_acc_orgid_issueDate" name="issueDate" type="text" class="validate datepicker">
       <label id="sur_acc_orgid_issueDate_label" for="sur_acc_orgid_issueDate" >Issue Date</label>
   </div>
   <div class="col s12 m6 l6 input-field input-outlined mt-0">
       <input ` + ownerdisabled + ` id="sur_acc_orgid_expiryDate" name="sur_acc_orgid_expiryDate" type="text" class="validate datepicker">
       <label id="sur_acc_orgid_expiryDate_label" for="sur_acc_orgid_expiryDate" >Expire Date</label>
   </div>
   <div class="col s12 m6 l6 input-field input-outlined mt-0 mb-2 industry-dropdown">
   <label class="custom-select-label">Industry</label>
       <select ` + ownerdisabled + ` id="sur_acc_orgid_companyType" name="companyType">
         <option value="" disabled selected>Industry</option>
         <option value="Consumer & Industrial Products">Consumer & Industrial Products</option>
         <option value="Energy & Resources">Energy & Resources</option>
         <option value="Financial Services">Financial Services</option>
         <option value="Life Sciences & Health Care">Life Sciences & Health Care</option>
         <option value="Public Sector">Public Sector</option>
         <option value="Technology, Media & Telecommunications">Technology, Media & Telecommunications</option>
         <option value="Others">Others</option>
       </select>
       <div class="input-field">
       </div>
   </div>
   <div class="col s11 m5 l5 input-field input-outlined mt-0 data-class mb-3 data-class-sm">
   <label class="custom-select-label">Data classification</label>
       <select ` + ownerdisabled + ` id="sur_acc_orgid_dataClassification" name="dataClassification">
         <option value="" disabled selected>Data classification</option>
         <option value="Public">Public </option>
         <option value="Restricted">Restricted	</option>
         <option value="Confidential">Confidential</option>
         <option value="Extremely Confidential">Extremely Confidential</option>
       </select>
   </div>
   <div class="col s1 m1 l1 input-field input-outlined mt-0">
       <a class="modal-trigger data-class s1 m1 l1" href="#data-classific-modal"><img class="org-info-class" src="app/views/html/signup/home/img/info.png" width="40" alt="" /></a>
   </div>
   <div class="col s12">
     <div class="card-alert card orange lighten-5 border-radius-7 mt-0">
       <div class="card-content orange-text">
         <p>
           <i class="fa fa-exclamation-triangle fs-30 red-text" aria-hidden="true"></i> CR Verification status : Pending</p>
       </div>
       <button type="button" class="close orange-text" data-dismiss="alert" aria-label="Close">
         <span aria-hidden="true">×</span>
       </button>
     </div>
   </div>

   <div class="col s12" style="` + ownerupdateStyle + `">
     <input type="hidden" id="sur_acc_orgid_crVerifyStatus" name="crVerifyStatus">
     <input type="hidden" id="sur_acc_orgid_orgInfoId" name="orgInfoId">
     <input type="hidden" id="sur_acc_orgid_tenantId" name="tenantId">
     <button type="button" class="btn form-btn waves-effect waves-light cancle-btn float-right ml-1">CANCEL</button>
     <button disabled  id="sur_acc_orgid_form_submit" type="button" class="btn form-btn waves-effect waves-light gradient-45deg-light-blue-cyan float-right">SAVE</button>
   </div>



 </form>
 </div>
`;


    setTimeout(function() {
        $('#organization').html(p);
        $('.collapsible').collapsible({
            accordion: true
        });
        initsurfaccountOrg();
        initsurfaccountOrgFormHandlers();

    }, 500);

}

function initsurfaccountOrg() {
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 

    let reqParams = {
        'from':'accounts',
        'secudeco':$('#establish_surfAccounts').val(),
        'tenantId': dcc_siginin_info.tenant_id,
        'portal': 'accountOrg',
        'portalsubmit': 'level_1'
    };

    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/org.php', 'html', false);
    if (data) {

        data = JSON.parse(data);

        data = JSON.parse(data.data);

        plotsurfaccountOrg(data);
    }


}

function plotsurfaccountOrg(data) {
    
    data = ((data.message)?data.message:false);
    if(data){

        if (Object.keys(data).length > 0) {
            $('#sur_acc_orgid_form_submit').removeAttr("disabled");
            $('#sur_acc_orgid_form_submit').attr("Onclick", "submitsurfaccountOrg()");
        }
        $('#sur_acc_orgid_companyName').val(data.companyName);
        $('#sur_acc_orgid_companyName_label').addClass("active");
    
        $('#sur_acc_orgid_purposeOfUse').val(data.purposeOfUse);
        $('#sur_acc_orgid_purposeOfUse').formSelect();
    
        $('#sur_acc_orgid_crNo').val(data.crNo);
        $('#sur_acc_orgid_crNo_label').addClass("active");
    
        $('#sur_acc_orgid_issueDate').val(data.issueDate);
        $('#sur_acc_orgid_issueDate_label').addClass("active");


        $('#wiz_orginfo_filePath').val(data.crFilaName);
        $('#file_remove').show();
        $('#value_file_remove').hide();

        
    
        $('#sur_acc_orgid_expiryDate').val(data.expiryDate);
        $('#sur_acc_orgid_expiryDate_label').addClass("active");
    
        $('#sur_acc_orgid_companyType').val(data.companyType);
        $('#sur_acc_orgid_companyType').formSelect();
    
        $('#sur_acc_orgid_dataClassification').val(data.dataClassification);
        $('#sur_acc_orgid_dataClassification').formSelect();
    
    
    
    
        $('#sur_acc_orgid_crVerifyStatus').val(data.crVerifyStatus);
        $('#sur_acc_orgid_tenantId').val(data.tenantId);
    
    
    
        $('#sur_acc_orgid_orgInfoId').val(data.orgInfoId);

    }
    




}

function initsurfaccountOrgFormHandlers() {


    $("form#sur_acc_profileid_form").change(function() {

        var sur_acc_profileid_form = $('form#sur_acc_profileid_form').serialize();

        if (sur_acc_profileid_form.indexOf('=&') > -1 || sur_acc_profileid_form.substr(sur_acc_profileid_form.length - 1) == '=') {
            $('#sur_acc_orgid_form_submit').attr("disabled", "disabled");
            $('#sur_acc_orgid_form_submit').removeAttr("Onclick");

        } else {
            $('#sur_acc_orgid_form_submit').removeAttr("disabled");
            $('#sur_acc_orgid_form_submit').attr("Onclick", "submitsurfaccountOrg()");
        }



    });


}

function submitsurfaccountOrg() {
    var earl_dcc_dignin_info = earl_dcc_dignin_info_oc;
    var dcc_siginin_info = (earl_dcc_dignin_info?earl_dcc_dignin_info:[]); 
    
    $('#sur_acc_orgid_form_submit').attr("disabled", "disabled");
    $('#sur_acc_orgid_form_submit').removeAttr("Onclick");

    var sur_acc_profileid_form = objectifyForm($('form#sur_acc_profileid_form').serializeArray());




    let reqParams = {
        'from':'accounts',
        'secudeco':$('#establish_surfAccounts').val(),
        'user_serial_id': dcc_siginin_info.user_serial_id,
        'data': JSON.stringify(sur_acc_profileid_form),
        'portal': 'accountOrg',
        'portalsubmit': 'level_2'
    };

    var data = ajaxDuty(reqParams, 'app/views/html/surface/settings/account/org.php', 'html', false);
    if (data) {

        data = JSON.parse(data);

        data = data.data;

        if (data.status == "ok") {

            indexToastr("success", 'Success', 'Success', {
                timeOut: 5000
            });
            $('#sur_acc_orgid_form_submit').removeAttr("disabled");
            $('#sur_acc_orgid_form_submit').attr("Onclick", "submitsurfaccountOrg()");
        } else {
            $('#sur_acc_orgid_form_submit').removeAttr("disabled");
            $('#sur_acc_orgid_form_submit').attr("Onclick", "submitsurfaccountOrg()");
        }

    } else {
        $('#sur_acc_orgid_form_submit').removeAttr("disabled");
        $('#sur_acc_orgid_form_submit').attr("Onclick", "submitsurfaccountOrg()");
    }

}