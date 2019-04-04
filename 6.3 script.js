var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var rmbtn = document.querySelectorAll(".removebtn");
var div = document.querySelectorAll(".item");
var span = document.querySelectorAll(".test")

function strikeOff(){
	this.classList.toggle("done");
}

function deleteItem(){
	var temp = this.parentNode;
	temp.parentNode.remove();
}

for (var i = 0; i < li.length; i++) {
	span[i].addEventListener("click", strikeOff);
}

for (var i = 0; i < rmbtn.length; i++) {
	rmbtn[i].addEventListener("click", deleteItem);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var span = document.createElement("span");
	span.classList.add("test");
	var div = document.createElement("div");
	div.classList.add("item");
	var li = document.createElement("li");
	li.classList.add("listItem");
	span.appendChild(document.createTextNode(input.value));
	div.appendChild(span);
	li.appendChild(div);
	ul.appendChild(li);
	span.addEventListener("click",strikeOff)

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	div.appendChild(btn);
	btn.addEventListener("click", deleteItem);
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
