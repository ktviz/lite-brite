const cellWidth = 40
const cellHeight = 40

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
    let currentColor = element.getAttribute('data-color')
    currentColor++
    element.setAttribute('data-color', (currentColor % 7))
}

for (let row = 1; row <= getCellRows(); row++) {
	const rowContainer = document.createElement('tr')
	for (let col = 1; col <= getCellCols(); col++) {
		const cell = document.createElement('td')
        cell.setAttribute('data-row-index', row)
        cell.setAttribute('data-col-index', col)
        cell.setAttribute('data-color', 0)
        cell.classList.add('cell')
        cell.onclick = toggleColor
        rowContainer.appendChild(cell)
	}
  container.appendChild(rowContainer)
}