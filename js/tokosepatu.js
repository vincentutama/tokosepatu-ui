"use strict";

const AN_ENDPOINT = 'http:localhost:8000/item/'

let listItemDoc = document.getElementById("butt-keranjang");

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