import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';


$(document).ready(function(){

    //format input
    $('input').keyup(function(event) {
      // skip for arrow keys
      if(event.which >= 37 && event.which <= 40) return;

      // format number
      $(this).val(function(index, value) {
        return value
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      });
    });


    $('.btn-submit').click(function(){
        var offer = $('input').val();
        console.log(offer);

        var newOffer = offer.replace(',', '');

         if(Math.floor(newOffer) == newOffer && $.isNumeric(newOffer)) {
           console.log("User offer is valid");
           $(this).text("SUCCESS");
         }
         else{
           console.log("User offer is not a valid input");
           $(this).text("Invalid input");
           $("#info").show();
         }
    });
});

console.log("gburton85@gmail.com");

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
