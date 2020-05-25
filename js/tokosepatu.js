"use strict";

const AN_ENDPOINT = 'http:vinegar-vint.herokuapp.com/item/'

let listItemDoc = document.getElementById("butt-keranjang");

window.onload = function() {
    doThis();
};

function doThis(){
    let xhr = new XMLHttpRequest();
    let complete_url = `${AN_ENDPOINT}`;

    xhr.open('GET', complete_url, false);

    xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status ===200){
            reponseku = JSON.parse(xhr.responseText);
        }
    };
    xhr.send();
}

