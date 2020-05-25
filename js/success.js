"use strict";
window.onload = function() {
    let name = getCookie('Name');
    let nameArray = [];
    const headerId = document.getElementById("greetings");
    nameArray = name.split(" ");
    headerId.innerHTML = 'Halo ' + nameArray[0];
    
}
