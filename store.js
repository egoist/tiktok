export function addItem(item) {
	const items = getAll()
	items.push(item)
	localStorage.setItem('tiktoks', JSON.stringify(items))
}

export function getAll() {
	return JSON.parse(localStorage.getItem('tiktoks')) || []
}

export function override(items) {
	localStorage.setItem('tiktoks', JSON.stringify(items))
}
