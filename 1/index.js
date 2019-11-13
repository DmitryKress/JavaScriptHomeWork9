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

//let enterName = function() {
let name = prompt("Please, type your name");
localStorage.setItem(name, "key");
document.getElementById("h1").innerText = "Hello" + localStorage.getItem(name);
//};

/*let reName = function() {
  localStorage.getItem(name);
  document.getElementById("h1").innerText = "Hello" + name;
}; */
