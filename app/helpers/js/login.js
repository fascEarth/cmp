

var input_loginf_field_password = document.getElementById("loginf_field_password");
input_loginf_field_password.addEventListener("keyup", function(){

  if(event.keyCode === 13){
    event.preventDefault();
    login();
  }
});

function login(){

  if($('#loginf_field_username').val() == ""){
    indexToastr("error",'Error',"Please enter username!",{timeOut: 500000}); return;
  }else if($('#loginf_field_password').val() == ""){
    indexToastr("error",'Error',"Please enter password!",{timeOut: 5000}); return;
  }else{

    $('#login_loader').removeClass("d-none");


    var lf_username = $('#loginf_field_username').val();
    var lf_password = $('#loginf_field_password').val();
    var lf_upwd = btoa(lf_username+':'+lf_password);
    var lf_upwdsp = lf_upwd;

    setTimeout(function(){
      let passer = {
        'portal':'login',
        'passVal':lf_upwdsp,
        'username':lf_username,
        'password':lf_password
      };

      $.ajax({
        type: 'POST',
        url: 'app/helpers/php/login.php',
        data: passer,
        dataType: 'html',
        success: function (data) {
          $('#login_loader').addClass("d-none");
          data = JSON.parse (data);
          if(data.status == 'success'||data.status == 'error'){

            if(data.status == 'success'){
              localStorage.setItem('loginUserName',data.userId);
              localStorage.setItem('login_role_id',data.user_role_id);
              localStorage.setItem('login_role_name',data.user_roles);

              localStorage.setItem('userSerialId',data.userSerialId);
              localStorage.setItem('userFirstName',data.userFirstName);
              localStorage.setItem('userlastName',data.userlastName);
              localStorage.setItem('userEmailId',data.userEmailId);

              localStorage.setItem('configPageScr',"main");
              window.location = "/surface#vms";
            }else{
              $('#loginf_field_password').val('');
              indexToastr("error",'Error',messageData.message,{timeOut: 5000});
            }
          }else{
            $('#loginf_field_password').val('');
            indexToastr("error",'Error','User Name / Password Incorrect',{timeOut: 5000});
          }
        },error:function(response){
          $('#login_loader').addClass("d-none");

          $('#loginf_field_password').val('');
          indexToastr("error",'Error','Error Occured! Contact Administrator.',{timeOut: 5000});
        }
      });
    },1000);

  }





}
