"use strict";
let ENDPOINT_SIGNUP = 'http:localhost:8000/user/';

function create_account(){
    let formId = document.getElementById("form1");

    let acc_body = {
        'Name' : formId.elements[0].value,
        'Username' : formId.elements[1].value,
        'Password' : formId.elements[2].value,
    };

    POST(ENDPOINT_SIGNUP, acc_body, (resp) => {
        console.log(resp);
        if(resp.status!==0){

        }
        else{
            // redirect
        }
    });
}


function delete_cartItem(){
    let ENDPOINT_DEL="http:localhost:8000/cartitem/" + "0";
    DELETE(ENDPOINT_DEL, {}, (resp) => {
        console.log(resp);
        if(resp.status!==0){

        }
        else{

        }
    });
}

function change_itemQuantity(){
    let ENDPOINT_PUT="http://localhost:8000/cartitem/" + "0";
    let item_body = {
        'Quantity' : form1.elements[0].value,
    };
    PUT(ENDPOINT_PUT, item_body, (resp) => {
        console.log(resp);
        
        if(resp.status!==0){

        }
        else{

        }
    });
}


$('#form1').submit(function(){
    create_account();
    return false;
});

