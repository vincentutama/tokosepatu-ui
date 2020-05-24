"use strict";

let navigationBar = document.getElementById("navbarku");

function initialize() {
    const CustomerId = getCookie('CustomerId');
    const Name = getCookie('Name');
    
    renderNavbar(Name);
}

function logOut(){
    eraseCookie('Name');
    eraseCookie('CustomerId');
}

function renderNavbar(name) {
    var pathname = window.location.pathname; 
    let rendering = [];

    const isProductPage = pathname == '/crappy-ass-ui/product.html' && 'active' || '';
    const isIndexPage = pathname == '/crappy-ass-ui/index.html' && 'active' || '';
    const isContactPage = pathname == '/crappy-ass-ui/contact.html' && 'active' || '';
    const isAboutPage = pathname == '/crappy-ass-ui/about.html' && 'active' || '';
    const isCartPage = pathname == '/crappy-ass-ui/cart.html' && 'active' || '';

    rendering.push('<a class="navbar-brand" href="index.html">TokoSepatu</a>');
	rendering.push('<button aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarsExampleDefault" data-toggle="collapse" type="button">');
	rendering.push('<span class="navbar-toggler-icon"></span>');
    rendering.push('</button>');
    rendering.push('<div class="collapse navbar-collapse" id="navbarsExampleDefault">');
    rendering.push('<ul class="navbar-nav mr-auto">');
    rendering.push('<li class="nav-item ' + isIndexPage + '" />');
    rendering.push('<a class="nav-link" href="index.html">Home </a>');
    rendering.push('</li>');
    rendering.push('<li class="nav-item ' + isProductPage + '" />');
    rendering.push('<a class="nav-link" href="product.html" id="Products">Products</a>');
    rendering.push('</li>');
    rendering.push('<li class="nav-item ' + isContactPage + '" />');
    rendering.push('<a class="nav-link" href="contact.html">Contact Us</a>');
    rendering.push('</li>');
    rendering.push('<li class="nav-item ' + isAboutPage + '" />');
    rendering.push('<a class="nav-link" href="about.html">About ');
    rendering.push('<span class="sr-only">(current)</span>');
    rendering.push('</a>');
    rendering.push('</li>');
    rendering.push('</ul>');
    if (name){
        rendering.push('<span style="color:white">' + name + '</span>');
        rendering.push('<form class="form-inline my-2 my-lg-0" action="cart.html">');
        rendering.push('<button class="btn btn-outline-warning my-2 my-sm-0 ml-2 '+ isCartPage +' " type="submit">Keranjang</button>');
        rendering.push('</form>');
    }
    rendering.push('<form class="form-inline my-2 my-lg-0" action="signin.html"> ');
    if(!name){
    rendering.push('<button class="btn btn-outline-info my-2 my-sm-0 ml-2">Sign In</button>');
    }
    else{
        rendering.push('<button class="btn btn-outline-danger my-2 my-sm-0 ml-2" onclick = "logOut()">Log Out</button>');
    }
    rendering.push('</form>');
    rendering.push('</div>');
  
    navigationBar.innerHTML = rendering.join("");
  }