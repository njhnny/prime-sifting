import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { makeBooleans, idPrimeNumbers } from './js/functions.js';


$("form#form").submit(function(event) {
  event.preventDefault();
  $("#output").fadeIn();
  let limit = $("input#submission").val();

  const booleans = makeBooleans(limit);
  const primeNumbers = idPrimeNumbers(booleans);

  $("p").text(primeNumbers.join(", "));
});
