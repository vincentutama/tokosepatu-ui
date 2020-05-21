"use strict";

const BOOKING_URL = 'http:localhost/cinemaz/movies/doBooking';

let num_of_seats = 30;

let seatsDisplayDoc = document.getElementById("seats");
let movieTitleDoc = document.getElementById("movie-title");
let movieDateDoc = document.getElementById("movie-date");
let seatsNumberDoc = document.getElementById("seat-number");
let totalPriceDoc = document.getElementById("total-price");
let buyButtonDoc = document.getElementById("buy-btn-container");
let statusMsgDoc = document.getElementById("status-msg");

function update_booking_summary(){
    if(check_seat_exist()){
        statusMsgDoc.innerHTML="";
        movieTitleDoc.innerHTML=movieTitle;
        movieDateDoc.innerHTML=movieDate;
        totalPriceDoc.innerHTML="Rp"+totalPrice;
        seatsNumberDoc.innerHTML="Seat #"+seatToBuy;
        buyButtonDoc.innerHTML="<button id = 'buy-btn' onclick = 'buy_ticket()'>Buy Ticket</button>";
    }
    else{
        statusMsgDoc.innerHTML=statusMsg;
        movieTitleDoc.innerHTML="";
        movieDateDoc.innerHTML="";
        totalPriceDoc.innerHTML="";
        seatsNumberDoc.innerHTML="";
        buyButtonDoc.innerHTML="";
    }
}

function buy_ticket(){
    let booking_data = {
        'schedule_id':request_data['schedule'].schedule_id,
        'seat_no':seatToBuy,
        'value':0
    };

    POST(BOOKING_URL, booking_data, (resp)=>{
        if(resp.status!==0){
            modalHeader.innerHTML = "Payment Failed";
            modalText.innerHTML = resp.message;
            ticketBought = false;
        }
        else{
            modalHeader.innerHTML = "Payment Success";
            modalText.innerHTML = resp.message;
            ticketBought = true;
        }
        openModal();
    });
}