import { makeBooleans, idPrimeNumbers } from './js/functions.js'

$(document).ready(function(event) {
  $("form#form").submit(function(event) {
    event.preventDefault();
    $("#output").fadeIn();
    let limit = $("input#submission").val();
    let booleans = [];
    let primeNumbers = [];
    for (let i = 1; i < limit; i+=1) {
      booleans.push(true);
    }
    for (let i = 2; i < limit; i+=1) {
      if (booleans[i-2]) {
        for (let j = i*2; j<= limit; j += i) {
          booleans[j-2] = false;
        }
      }
    }
    for (let k = 0; k < booleans.length; k+=1) {
      if (booleans[k]) {
        primeNumbers.push(k+2)
      }
    }
    $("p").text(primeNumbers.join(", "));
  });
 }); 