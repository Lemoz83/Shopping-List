var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("delete");
var list = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function dltBtn (event) {
		event.target.removeEventListener("click" , event);
		event.target.parentNode.remove()
	
	}

function strikeThrough(event){
	event.target.classList.toggle("done");
 }

 for(var i=0; i< deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click" ,dltBtn);
}


for (var i=0; i< list.length; i++){
	list[i].addEventListener("click",strikeThrough)
	}

function createListElement() {

	var btn = document.createElement("button");
	btn.innerHTML ="Delete";
	btn.addEventListener("click", dltBtn);

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btn)
	li.addEventListener("click",strikeThrough);
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


