"use strict";
let ENDPOINT_VERIFY = 'http://localhost:8000/verify/';

function ver_account(){
    let formId = document.getElementById("form_input");
    console.log(';', formId.elements[2].checked, ';');
    let log_in = {
        'Username' : formId.elements[0].value,
        'Password' : formId.elements[1].value,
        // 'Remember' : formId.elements[2].checked
    }

    POST(ENDPOINT_VERIFY, log_in, (resp) =>{
        if(resp.status!==0){
            if(formId.elements[2].checked){
                setCookies('CustomerId', resp.data.CustomerId,365);
                setCookies('Name', resp.data.Name,365);
            }
            else{
                setCookies('CustomerId', resp.data.CustomerId,1);
                setCookies('Name', resp.data.Name,1);
            }
            window.location.href = "http://localhost/crappy-ass-ui/";
        }
        else{

        }
    });
}

