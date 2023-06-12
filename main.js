//Program Title
console.log("hi");

//Add an Event Listener to the button to run the placeOrder function
document.getElementById("btn").addEventListener("click", placeOrder);
// Store order code in function
function placeOrder() {
  //INPUT
  let adjective = document.getElementById("adjective-in").value;
  let pet = document.getElementById("pet-in").value;
  let verb = document.getElementById("verb-in").value;
  let location = document.getElementById("location-in").value;

  //PROCESS
  let msg = `Your ${adjective} ${pet} is ${verb} around ${location}!`;

  //OUTPUT
  document.getElementById("output").innerHTML = msg;
}
