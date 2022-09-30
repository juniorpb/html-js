const service = {
	save: () => localStorage.setItem("items", JSON.stringify(list)),
	find: () => JSON.parse(localStorage.getItem("items")) ?? []
}
