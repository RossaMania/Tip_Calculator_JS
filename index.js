// 1 = Horrible
// 2 = Terrible
// 3 = Bad
// 4 = Not Great
// 5 = Okay
// 6 = Good
// 7 = Very Good
// 8 = Great
// 9 = Excellent
// 10 = Perfect
// var service = prompt("Please rate the service between 1-10. 1 being 'Horrible' and 10 being 'Perfect'!")

const billInput = document.getElementById("bill");

const tipDisplay = document.getElementById("tip");

const totalDisplay = document.getElementById("total");

const bill_Total = document.getElementById("bill_Total")

var bill= 0;

var tip = 0;

  billInput.addEventListener("input", function (event) {
  
  bill = Number(event.target.value);

  bill_Total.innerHTML = bill;

  console.log(bill);

});



function calculateTip() {

  var service = Number($('input[name="service"]:checked').val());

  if (service <= 3) {
    
    X = 0.15;

    console.log(X);

    tip = Number((bill * X).toFixed(2));

    console.log(tip);

    tipDisplay.innerHTML = tip;
  }

  if (service >= 4 && service <= 5) {
    
    X = 0.18;

    console.log(X);

    tip = Number((bill * X).toFixed(2));

    console.log(tip);

    tipDisplay.innerHTML = tip;
  }

  if (service >= 6 && service <= 7) {
    
    X = 0.21;

    console.log(X);

    tip = Number((bill * X).toFixed(2));

    console.log(tip);

    tipDisplay.innerHTML = tip;
  }

   if (service = 8) {
    
    X = 0.25;

    console.log(X);

    tip = Number((bill * X).toFixed(2));

    console.log(tip);

    tipDisplay.innerHTML = tip;
  
  }

  if (service >= 9 && service <= 10) {
    
    X = 0.3;

    console.log(X);

    tip = Number((bill * X).toFixed(2));

    console.log(tip);

    tipDisplay.innerHTML = tip;
  
  }

}

function calculateTotal() {
  
  var total = bill + tip;

  totalDisplay.innerHTML = total;

  console.log("total bill: ", bill)

  console.log("total tip: ", tip) 

  console.log(total);

}

document.getElementById("submit").addEventListener("click", function (event) {
  
  event.preventDefault();

  calculateTip();
  
  calculateTotal();

});
