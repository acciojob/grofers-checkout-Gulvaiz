const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
    let prices = document.querySelectorAll(".price")
	let sum = 0 
	prices.forEach((price) => {
		 sum+=parseInt(price.innerText)
	})
	    let ansDiv = document.getElementById("ans");
    ansDiv.innerText = `Total: Rs ${sum}`;

};

getSumBtn.addEventListener("click", getSum);

