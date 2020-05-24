"use strict";
const custCookie = getCookie('CustomerId');
let cartEndpoint = 'http://localhost:8000/cartinfo/' + custCookie;
let cartContainer = document.getElementById("cart-container");
let grandtotContainer = document.getElementById("grand-total");
const currency = "Rp.";
let grandTot = 0;

window.onload = function(){
    initialize();
    GET(cartEndpoint, (resp) => {
        console.log(resp);
        if(resp.status!==0){
            renderCart(resp.data);
        }
        else{
   
        }
    });
    let pathname = window.location.pathname;
    this.console.log(pathname);
}

function removeItem(){
    
}

function grandTotal(subTotal){
    grandTot = grandTot + subTotal;
}

function renderCart(cartList) {
    let rendering = [];
    // Assume productList = [{ItemImage: ..., ItemName: ..., ItemPrice: ..., ...}, {...}, {...}]
  
    cartList.forEach((CartItem) => {
        rendering.push('<div class = "ibox-content">');
        rendering.push('<h3>' + CartItem.ItemName + '</h3>');
        rendering.push('<table>');
        rendering.push('<td>');
        rendering.push('<img alt="" class="cards" src="' + CartItem.ItemImage + '"width="200">');
        rendering.push('</td>');
        rendering.push('<td>');
        rendering.push('<h5>' + currency + CartItem.ItemPrice + '</h5>');
        rendering.push('<p>Jumlah <input type="text" style="width: 15%; text-align:center" value=' + CartItem.Quantity + '></p>');
        let subTotal = (CartItem.Quantity*CartItem.ItemPrice);
        rendering.push('<h5 class="text-muted">Subtotal: ' + currency + subTotal + '</h5>');
        rendering.push('</td>');
        rendering.push('</table>');
        rendering.push('<a href="#" class="text-muted">');
        rendering.push('<i class="fa fa-trash"></i> Remove item');
        rendering.push('</a>');
        rendering.push('</div>');

        grandTotal(subTotal);

    });
    console.log(grandTot);
    grandtotContainer.innerHTML = '<h2 class="font-bold">' + currency + grandTot + '</h2>';
    cartContainer.innerHTML = rendering.join("");
}