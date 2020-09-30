a = 3 + 4;

var list1 = [
  {
    username: "Duy",
    password: "12346789",
  },
  {
    username: "Tram",
    password: "tramnguyen123",
  },
  {
    username: "Ngoc",
    password: "777",
  },
  {
    username: "Nanh",
    password: "999",
  },
];
var profile = {
  name: "Quan",
  age: 18,
  hobby: "music,soccer,gaming",
  isMarried: false,
  shout: function () {
    console.log("AHHHH!");
  },
};
var username = prompt("what is your username");
if (username === "quan") alert("helloo Quân");
else if (username !== "Quân") {
  alert("i don't know you");
}
var user = null;

function isUserValid(username, password) {
  for (var i = 0; i < list1.length; i++) {
    if (username === list1[i].username && password === list1[i].password) {
      return true;
    }
  }
  return false;
}

var password = prompt("what is your password");

function signin(user, pass) {
  if (isUserValid(username, password)) {
    console.log(profile);
  } else {
    alert("sorry, wrong password");
  }
}

signin(username, password);

function sing(song) {
  console.log(song);
}
sing("hahahah");

var list = ["djsofji", "leo", "bunny", "buppy", "pig"];
list.pop();
list.push("dog");
var newlist = list.concat(["fog", "chick"]);

list.sort();

for (var i = 0; i < newlist.length; i += 2) {
  console.log(newlist[i]);
}

//var button = document.getElementsByTagName("button")[0];
//button.addEventListener("click", function(){
//	console.log("click!");
//})

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
