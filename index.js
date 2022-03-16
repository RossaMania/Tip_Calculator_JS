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


var bill = prompt("Bill Total: ");

var service = prompt("Please rate the service between 1-10. 1 being 'Horrible' and 10 being 'Perfect'!")

var tip = (bill * X).toFixed(2);

var X;

if (service <= 3) {
    X = 0.15;
    alert("Please tip your server $" + tip + ". Thanks!")
}

if (service >= 4 && service <= 5) {
    X = 0.18;
    alert("Please tip your server $" + tip + ". Thanks!")
}

if (service >= 6 && service <= 7) {
    X = 0.21;
    alert("Please tip your server $" + tip + ". Thanks!")
}

if (service >= 8 && service <= 10) {
    X = 0.30;
    alert("Please tip your server $" + tip + ". Thanks!")
} else {
    alert("Please try again, and enter a number between 1-10 next time.")
}

$(".tip-total").text(tip);

