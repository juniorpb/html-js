const list = service.find()
start() 

function addItem() {
	const newItem = document.querySelector('#itemInput').value;
	const item = { id: uuidv4(), title: newItem }
	saveAndRefresh(item)
}

function start() {
	const items = list?.map(htmlValue).join("\n")
	document.getElementById("div_id").innerHTML = items
}

function updateItens(params) {
	document.getElementById("div_id").innerHTML += htmlValue(params)
}

function htmlValue(params) {
	return `
		<div style="color:black" id=${params.id}>
			<p>${params.title}</p>
		</div>
	`
}

function saveAndRefresh(item) {
	list.push(item)
	service.save()
	updateItens(item)
}