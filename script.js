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
	let table = document.querySelector("table")
	let newRow = table.insertRow()
	let priceCell = newRow.insertCell() 
	priceCell.colspan = 2
	priceCell.innerText = `total: rs ${sum}`
};

getSumBtn.addEventListener("click", getSum);

