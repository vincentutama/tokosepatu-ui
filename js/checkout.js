"use strict";
const custCookie = getCookie('CustomerId');
let cartEndpoint = 'http://localhost:8000/cartinfo/' + custCookie;
let cartContainer = document.getElementById("cart-container");
let grandContainer = document.getElementById("total-container");
let countContainer = document.getElementById("counting-pill");
const currency = "Rp.";
let grandTot = 0;

window.onload = function(){
    GET(cartEndpoint, (resp) => {
        console.log(resp);
        if(resp.status!==0){
            renderTotal(resp.data);
        }
        else{
   
        }
    });
    let pathname = window.location.pathname;
    this.console.log(pathname);
}

function grandTotal(subTotal){
    grandTot = grandTot + subTotal;
}

function renderTotal(cartList) {
    let rendering = [];
    // Assume productList = [{ItemImage: ..., ItemName: ..., ItemPrice: ..., ...}, {...}, {...}]
  
    cartList.forEach((CartItem) => {
        rendering.push('<li class="list-group-item d-flex justify-content-between lh-condensed">');
        rendering.push('<div>');
        rendering.push('<h6 class="my-0">' + CartItem.ItemName + '</h6>');
        rendering.push('<small class="text-muted">Quantity: '+ CartItem.Quantity +'</small>');
        rendering.push('</div>');
        rendering.push('<span class="text-muted">' + 'Rp.' + (CartItem.Quantity*CartItem.ItemPrice) + '</span>');
        rendering.push('</li>');
        let subTotal = (CartItem.Quantity*CartItem.ItemPrice);
        grandTotal(subTotal);
    });

    countContainer.innerHTML = cartList.length;
    cartContainer.innerHTML = rendering.join("");
    //START OF RENDER GRANDTOTAL
    grandContainer.innerHTML =('<span>Total: </span>');
    grandContainer.innerHTML =('<strong class="text-muted">Total Belanja: </strong>' + currency + grandTot);
    //END OF RENDER GRANDTOTAL

}