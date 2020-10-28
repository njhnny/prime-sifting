$(document).ready(function(event) {
  $("form#form").submit(function(event) {
    event.preventDefault();
    $("#output").show();
    let limit = $("input#submission").val();
    let booleans = [];
    let primeNumbers = [];

    for (let i = 1; i < limit; i+=1) {
      booleans.push(true);
    }
    alert(booleans);
  
    
    //$("p").text(result);
  });
 }); 