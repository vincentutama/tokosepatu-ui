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

function removeItem(itemid){
    let ITEM_ENDPOINT = 'http://localhost:8000/cartitem'
    let body ={
        'CustomerId' : custCookie,
        'CartItemId' : itemid
    };
    DELETE(ITEM_ENDPOINT, body,(resp) => {
        console.log(resp);
        if(resp.status!==0){
            location.reload();
        }
        else{
   
        }
    });
}

function emptyCart(){
    let ITEM_ENDPOINT = 'http://localhost:8000/delete'
    let body ={
        'CustomerId' : custCookie,
    };
    DELETE(ITEM_ENDPOINT, body,(resp) => {
        console.log(resp);
        if(resp.status!==0){
            location.reload();
        }
        else{
   
        }
    });
}

function changeValue(){
    let ITEM_ENDPOINT = 'http://localhost:8000/cartitem'
    let newQuantity = document.getElementById("quantity-box").value;

    let body = {
        'CustomerId' : custCookie,
        'CartItemId' : 'cartitem id',
        'Quantity' : 'new quantity'
    }
    
    PUT(ITEM_ENDPOINT, body,(resp) => {
        console.log(resp);
        if(resp.status!==0){
            location.reload();
        }
        else{
   
        }
    });
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
        rendering.push('<p>Jumlah <input type="text" style="width: 15%; text-align:center" id="quantity-box" value=' + CartItem.Quantity + '></p>');
        let subTotal = (CartItem.Quantity*CartItem.ItemPrice);
        rendering.push('<h5 class="text-muted">Subtotal: ' + currency + subTotal + '</h5>');
        rendering.push('</td>');
        rendering.push('</table>');
        rendering.push('<button onclick="removeItem(' + CartItem.CartItemId +')"' + 'class="btn btn-dark btn-sm">');
        rendering.push('<i class="fa fa-trash"></i> Hapus Barang');
        rendering.push('</button>');
        rendering.push('</div>');

        grandTotal(subTotal);

    });
    console.log(grandTot);
    grandtotContainer.innerHTML = '<h2 class="font-bold">' + currency + grandTot + '</h2>';
    cartContainer.innerHTML = rendering.join("");
}