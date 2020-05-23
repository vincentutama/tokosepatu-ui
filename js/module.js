function GET(url, callback) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if(request.readyState === XMLHttpRequest.DONE){
            callback(JSON.parse(request.responseText));
        }
    };
    request.open('GET',url, false);
    request.setRequestHeader('Content-Type', 'application/json;charset-UTF-8');
    request.send();
};


function POST (url, body, callback) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if(request.readyState === XMLHttpRequest.DONE){
            callback(JSON.parse(request.responseText));
        }
    };
    request.open('POST', url, false);
    request.setRequestHeader('Content-Type', 'application/json;charset-UTF-8');
    request.send(JSON.stringify(body));
}

function DELETE (url, body, callback) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if(request.readyState === XMLHttpRequest.DONE){
            callback(JSON.parse(request.responseText));
        }
    };
    request.open('DELETE', url, false);
    request.setRequestHeader('Content-Type', 'application/json;charset-UTF-8');
    request.setRequestHeader("Access-Control-Allow-Origin","*");
    request.send(JSON.stringify(body));

}



function PUT (url, body, callback) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if(request.readyState === XMLHttpRequest.DONE){
            callback(JSON.parse(request.responseText));
        }
    };
    request.open('PUT', url, false);
    request.setRequestHeader('Content-Type', 'application/json;charset-UTF-8');
    // request.setRequestHeader("Access-Control-Request-Headers","content-type");
    // request.setRequestHeader("Access-Control-Request-Method","POST");
    request.send(JSON.stringify(body));
}

function setCookies(name,value,days){
    let expires = "";
    if(days){
        let date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000)); //milisekon
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name+"="+(value||"")+expires+"; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    setCookies(name,'',-1);
}