const cellWidth = 10
const cellHeight = 10

const getClientHeight = () => { return window.innerHeight }
const getClientWidth = () => { return window.innerWidth }

const container = document.getElementById('container')

const getCellCols = () => { 
	return Math.floor(getClientWidth() / cellWidth)
}

const getCellRows = () => {
	return Math.floor(getClientHeight() / cellHeight)
}

const toggleColor = (event) => {
    const element = event.target
    const currentColor = element.getAttribute('data-color')
    element.setAttribute('data-color', (currentColor + 1) % 6)
}

console.log('Column count: ', getCellCols())
console.log('Row count: ', getCellRows())

for (let row = 1; row <= getCellRows(); row++) {
	const rowContainer = document.createElement('tr')
	for (let col = 1; col <= getCellCols(); col++) {
		const cell = document.createElement('td')
        cell.setAttribute('data-row-index', row)
        cell.setAttribute('data-col-index', col)
        cell.classList.add('cell')
        cell.onclick = toggleColor
        rowContainer.appendChild(cell)
	}
  container.appendChild(rowContainer)
}