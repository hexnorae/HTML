function showGreeting() {
  // Variables to store user input
  let name = document.getElementById("nameInput").value;
  let age = document.getElementById("ageInput").value;

  // Conditional logic using variables
  let message = "";
  if (age >= 18) {
    message = "Hello " + name + "! You are an adult.";
  } else {
    message = "Hi " + name + "! You are still young.";
  }

  // Display result
  document.getElementById("output").innerText = message;
}
