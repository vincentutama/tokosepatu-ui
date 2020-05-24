"use strict";
const custCookie = getCookie('CustomerId');
let cartEndpoint = 'http://localhost:8000/cartinfo/' + custCookie;
let transEndpoint = 'http://localhost:8000/transaction';
let cartContainer = document.getElementById("cart-container");
let grandContainer = document.getElementById("total-container");
let countContainer = document.getElementById("counting-pill");
let payInfo = document.getElementById("payment-info");
const currency = "Rp.";
let grandTot = 0;
let paymentOpt;
let isFormValid = false;

window.onload = function(){
    GET(cartEndpoint, (resp) => {
        if(resp.status!==0){
            renderTotal(resp.data);
        }
        else{
   
        }
    });
    let pathname = window.location.pathname;
}

// SHORT FUNCTION GOES HERE

function grandTotal(subTotal){
    grandTot = grandTot + subTotal;
}

function setPaymentOpt(num){
    paymentOpt = num;
}

function mergeInput(){
    const formId = document.getElementById("checkout-form");
    let everything = "";
    [...formId.elements].forEach((thing) =>{
        everything = everything + thing.value + ',';
    });
    // cartList.forEach((CartItem) => {
    //     everything
    // }); //don't mind this, i mind it
    return everything;
}
//LONG FUNCTION GOES HERE

function renderTotal(cartList) {
    let rendering = [];
    // Assume productList = [{ItemImage: ..., ItemName: ..., ItemPrice: ..., ...}, {...}, {...}]
  
    cartList.forEach((CartItem) => {
        rendering.push('<li class="list-group-item d-flex justify-content-between lh-condensed">');
        rendering.push('<div>');
        rendering.push('<h6 class="my-0">' + CartItem.ItemName + '</h6>');
        rendering.push('<small class="text-muted">Jumlah: '+ CartItem.Quantity +'</small>');
        rendering.push('</div>');
        rendering.push('<span class="text-muted">' + 'Rp.' + (CartItem.Quantity*CartItem.ItemPrice) + '</span>');
        rendering.push('</li>');
        let subTotal = (CartItem.Quantity*CartItem.ItemPrice);
        grandTotal(subTotal);
    });

    countContainer.innerHTML = cartList.length;
    cartContainer.innerHTML = rendering.join("");
    // START OF RENDER GRANDTOTAL
    grandContainer.innerHTML =('<span>Total: </span>');
    grandContainer.innerHTML =('<strong class="text-muted">Total Belanja: </strong>' + currency + grandTot);
    // END OF RENDER GRANDTOTAL

}

function paymentSet(opt){
    setPaymentOpt(opt);
    let rendering = [];
    if(opt == 1){
        rendering.push('<div class="row">');
        rendering.push('<div class="col-md-6 mb-3">');
        rendering.push('<label for="cc-name">Name on card</label>');
        rendering.push('<input type="text" class="form-control" id="cc-name" placeholder="" required>');
        rendering.push('<small class="text-muted">Full name as displayed on card</small>');
        rendering.push('<div class="invalid-feedback">');
        rendering.push('Name on card is required');
        rendering.push('</div>');
        rendering.push('</div>');
        rendering.push('<div class="col-md-6 mb-3">');
        rendering.push('<label for="cc-number">Credit card number</label>');
        rendering.push('<input type="text" class="form-control" id="cc-number" placeholder="" required>');
        rendering.push('<div class="invalid-feedback">');
        rendering.push('Credit card number is required');
        rendering.push('</div>');
        rendering.push('</div>');
        rendering.push('</div>');
        rendering.push('<div class="row">');
        rendering.push('<div class="col-md-3 mb-3">');
        rendering.push('<label for="cc-expiration">Expiration</label>');
        rendering.push('<input type="text" class="form-control" id="cc-expiration" placeholder="" required>');
        rendering.push('<div class="invalid-feedback">');
        rendering.push('Expiration date required');
        rendering.push('</div>');
        rendering.push('</div>');
        rendering.push('<div class="col-md-3 mb-3">');
        rendering.push('<label for="cc-cvv">CVV</label>');
        rendering.push('<input type="text" class="form-control" id="cc-cvv" placeholder="" required>');
        rendering.push('<div class="invalid-feedback">');
        rendering.push('Security code required');
        rendering.push('</div>');
        rendering.push('</div>');
        rendering.push('</div>');
    }

    else if(opt==2){
        rendering.push('<h5>Transfer Ke</h3>');
        rendering.push('<div class = "row">');
        rendering.push('<img src = "img/dbs-PNG.png"  class = "col-md-3 mb-3">');
        rendering.push('<p class="text-muted col-md-6 mb-3">');
        rendering.push('<br><br><strong>Bank DBS : </strong>a/n Vincent Utama<br><strong>Nomor Rekening : </strong>1702099743');
        rendering.push('</p>');
        rendering.push('</div>');
        rendering.push('<div class = "row">');
        rendering.push('<img src = "img/bca.png" class = "col-md-3 mb-3">');
        rendering.push('<p class="text-muted col-md-6 mb-3">');
        rendering.push('<br><strong>Bank BCA : </strong>a/n Kalya Icasia<br><strong>Nomor Rekening : </strong>1234567890');
        rendering.push('</p>');
        rendering.push('</div>');
        rendering.push('<label for="cc-number">Nama Pengirim (Sesuai dengan nama di rekening)</label>');
        rendering.push('<input type="text" class="form-control" id="cc-number" placeholder="" required>');
        rendering.push('<div class="invalid-feedback">Nama Pengirim Harus Diisi</div>');
    }

    else if(opt==3) {
        rendering.push('<div class="row">');
        rendering.push('<img src = "img/ovo.png" class = "col-md-3 mb-3">');
        rendering.push('<div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">+62</span></div>');
        rendering.push('<input type="text" class="form-control" id="cc-number" placeholder="Nomor HP" aria-label="Username" aria-describedby="basic-addon1" required>');
        rendering.push('<div class="invalid-feedback">Nomor HP harus diisi</div>');
        rendering.push('</div>');
        rendering.push('</div>');
    }
    payInfo.innerHTML = rendering.join("");
}

function confirmPurchase(){
    // WARNING: WORK IN PROGRESS, FITUR BELUM TERIMPLEMENTASI
    // FUNGSI INI BERTUJUAN UNTUK MELAKUKAN POST KE DATABASE "TRANSACTION" DAN MENGHAPUS (RESET) CART USER
    let personInfo = {
        'CustomerId' : custCookie,
        'TotalPayment' : grandTot,
        'PaymentOption' : paymentOpt,
        'PaymentDetails' : mergeInput(),
    };

    setTimeout(function() {
        console.log('isFormValid', isFormValid);
        if (isFormValid) {
            POST(transEndpoint, personInfo, (resp) => {
                console.log(resp);
                if(resp.status){
                    console.log('success');
                    // window.location.href = "http://localhost/crappy-ass-ui/success.html"; // if your domain is https://vincent.com,
                    // you will be redirected to http://localhost/crappy-ass-ui/success.html
                    // VERSUS
                    window.location.href = "/crappy-ass-ui/success.html"; // if your domain is https://vincent.com,
                    // you will be redirected to https://vincent.com/crappy-ass-ui/success.html
                    // return false;
                } else {
                    // nothing
                }
            });
        } else {
            // nothing
        }
    }, 1000);       
}