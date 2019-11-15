/*let incFunction = function() {
  let i = 0;

  return function() {
    return i++;
  };
  console.log(i);
};

let initFunction = function() {
  reduce();
  return i++;
  console.log(i);
};
*/

const h2 = document.getElementById("h2text");

// first way
/*for (let i = 0; name.length < 2; i++) {
  let name = prompt("Type your name, pls");
  if (name.length >= 2) {
    localStorage.setItem("name", name);
    document.querySelector(h2).textContent =
      "Hello " + localStorage.getItem(name);
    break;
  } else {
    alert("Your name must be more than 2 letters");
  }
} */

// second way
/*function myFunction() {
  let name = prompt("Type your name, pls");
  localStorage.setItem("name", name);
  var x = document.getElementsByClassName(".reg").textContent = "Hello " + localStorage.getItem(name);
  document.getElementById("h2text").innerHTML = x;  
} */