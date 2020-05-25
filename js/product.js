"use strict";

let itemEndpoint = 'http://vinegar-vint.herokuapp.com/item/';
let userCartEndpoint = 'http://vinegar-vint.herokuapp.com/';
let productContainer = document.getElementById("product-container");
const currency = "Rp.";

window.onload = function() {
    initialize(); // refer to init_render.js
    GET(itemEndpoint, (resp) => {
        console.log(resp);
        if(resp.status!==0){
            renderProduct(resp);
        }
        else{
   
        }
    });
    let pathname = window.location.pathname;
    this.console.log(pathname);
}


function renderProduct(productList) {
    let rendering = [];
    // Assume productList = [{ItemImage: ..., ItemName: ..., ItemPrice: ..., ...}, {...}, {...}]

  productList.forEach((product) => {
    rendering.push('<div class="col-lg-4 col-md-6 mb-4">');
    rendering.push('<div class="card h-100">');
    rendering.push('<a href="#"><img class="card-img-top" style="width:90%; margin-left:5%" src="' + product.ItemImage + '" alt=""></a>');
    rendering.push('<div class="card-body">');
    rendering.push('<h4 class="card-title">');
    rendering.push('<a href="#">' + product.ItemName + '</a>');
    rendering.push('</h4>');
    rendering.push('<h5>' + currency + product.ItemPrice + '</h5>');
    rendering.push('<p class="card-text">' + product.ItemDescription + '</p>');
    rendering.push('</div>');
    rendering.push('<div class="card-footer">');
    rendering.push('<button onclick="addItem(' + product.ItemId +')"' + 'class = "btn btn-primary">Add to Cart</button>');
    rendering.push('</div>');
    rendering.push('</div>');
    rendering.push('</div>');
  });

  productContainer.innerHTML = rendering.join("");
}

function addItem(itemId){
    const custCookie = getCookie('CustomerId');
    let additem = 'http://vinegar-vint.herokuapp.com/additem';

    let itembody = {
        'CustomerId' : custCookie,
        'CartItemId' : itemId,
        'Quantity' : 1
    };

    POST(additem, itembody, (resp) =>{
        if(resp.status!==0){
            // Item added successfully, do something here
        }

    });
    
}