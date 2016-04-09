export function addItem(item) {
	let items = getAll()
	items = [
		item,
		...items
	]
	localStorage.setItem('tiktoks', JSON.stringify(items))
}

export function getAll() {
	return JSON.parse(localStorage.getItem('tiktoks')) || []
}

export function override(items) {
	localStorage.setItem('tiktoks', JSON.stringify(items))
}
