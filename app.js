var dateofbirth = document.querySelector("#dateofbirth");
var numbers = document.querySelector("#luckynumber");
var checkbutton = document.querySelector("#check-button");
var printResult = document.querySelector("#result");
function clickHandler() {
  var dob = dateofbirth.value.replaceAll("-", "");
  var sum = calculateSum(dob)
  luckyChecker(sum);
}

function calculateSum(dob) {

  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
 console.log(sum)
  return sum;
  
  
  }
  function luckyChecker(sum){
    if(sum % numbers.value==0){
      printResult.innerText= "Your birthday is lucky 🚀 ";
    }
    else {
      printResult.innerText= "You create your own luck 🕊️";
    }  
  }





checkbutton.addEventListener("click", clickHandler)