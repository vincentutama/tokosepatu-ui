"use strict";

let itemEndpoint = 'http:localhost:8000/item/';
let productContainer = document.getElementById("product-container");
const currency = "Rp";

window.onload = function() {
    let xhr = new XMLHttpRequest();
    let complete_url = `${itemEndpoint}`;
    xhr.open('GET', complete_url, false);

    xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status ===200){
            const responseku = JSON.parse(xhr.responseText);
            renderProduct(responseku);
        }
    };
    xhr.send();
   
};



function renderProduct(productList) {
  let rendering = [];
    console.log("haha",productList);
  // Assume productList = [{ItemImage: ..., ItemName: ..., ItemPrice: ..., ...}, {...}, {...}]

  productList.forEach((product) => {
    rendering.push('<div class="col-lg-4 col-md-6 mb-4">');
    rendering.push('<div class="card h-100">');
    rendering.push('<a href="#"><img class="card-img-top" src="' + product.ItemImage + '" alt=""></a>');
    rendering.push('<div class="card-body">');
    rendering.push('<h4 class="card-title">');
    rendering.push('<a href="#">' + product.ItemName + '</a>');
    rendering.push('</h4>');
    rendering.push('<h5>' + currency + product.ItemPrice + '</h5>');
    rendering.push('<p class="card-text">' + product.ItemDescription + '</p>');
    rendering.push('</div>');
    rendering.push('<div class="card-footer">');
    rendering.push('<small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>');
    rendering.push('</div>');
    rendering.push('</div>');
    rendering.push('</div>');
  });

  productContainer.innerHTML = rendering.join("");
}
