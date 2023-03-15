var placement = "";
$(function(){
    let urlStringtp = window.location.href;
    let paramStringtp = urlStringtp.split('?')[1];
    let queryStringtp = new URLSearchParams(paramStringtp);
    
    $('.tabs').tabs(); 

    for (let pair of queryStringtp.entries()) {        
        if(pair[0] == "placement"){
          placement = pair[1]; 
        } 
         
      }
    updatePlacement();
})

function updatePlacement(){
    if(placement){
        document.getElementById('dcc-'+placement).click();
        
    }

    
    
}