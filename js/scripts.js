$(document).ready(function(event) {
  $("form#form").submit(function(event) {
    event.preventDefault();
    $("#output").show();
    let wordResponse = $("input#submission").val();
    let wordInput = wordResponse.toLowerCase();
    
    //wordInput.toLowerCase();
    let wordString = wordInput.split("");
    let reverseArray = wordString.reverse();
    let reverseWord = reverseArray.join("");
    if (reverseWord === wordInput) {
      result = ("Yes! " + wordResponse + " is a palindrome!");
    } else {
       result = ("No, " + wordResponse + " is not a palindrome.")
    }
    $("p").text(result);
  });
 }); 