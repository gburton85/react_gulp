import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

$(document).ready(function(){
    $('.btn-submit').click(function(){
         //check if number
         if(Math.floor($('#price').val()) == $('#price').val() && $.isNumeric($('#price').val())){
           console.log("Valid input");
           $(this).text("SUCCESS");
         }
         else{
           console.log("Invalid input");
           $(this).text("ERROR");
         }
    });
});


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
