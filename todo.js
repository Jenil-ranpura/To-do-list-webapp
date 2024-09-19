let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let div = document.querySelector(".box");

btn.addEventListener("click", () => {
	if(input.value == "") {
		alert("you have to put some text to add your note");
	}
	else{
		let newEle = document.createElement("ul");
		let li = document.createElement("li");

		div.appendChild(newEle);
		newEle.appendChild(li);
		li.innerText = `${input.value}`;

		let p = document.createElement("p");
		p.innerText = "X";
		p.classList.add("p");

		newEle.appendChild(p);

		p.addEventListener("click", () => {
			newEle.remove();
		})

		input.value = "";
	}

})

document.addEventListener("keydown", (e) => {
	if(e.key == "Enter") {
		btn.click();
	}
})