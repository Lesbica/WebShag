const shapes = document.querySelectorAll('.shape');
const colors = document.querySelectorAll('.color');
const canvas = document.getElementById('canvas');

let selectedShape = 'square';
let selectedColor = 'white';
let startX = 0;
let startY = 0;

shapes.forEach(shape => {
    shape.addEventListener('click', () => {
        document.querySelector('.shape.selected').classList.remove('selected');
        shape.classList.add('selected');
        selectedShape = shape.getAttribute('data-shape');
    });
});

colors.forEach(color => {
    color.addEventListener('click', () => {
        document.querySelector('.color.selected')?.classList.remove('selected');
        color.classList.add('selected');
        selectedColor = color.getAttribute('data-color');
    });
});

canvas.addEventListener('mousedown', (e) => {
    startX = e.offsetX;
    startY = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    const endX = e.offsetX;
    const endY = e.offsetY;
    const width = Math.abs(endX - startX);
    const height = Math.abs(endY - startY);
    const left = Math.min(startX, endX);
    const top = Math.min(startY, endY);

    drawShape(left, top, width, height);
});

function drawShape(x, y, width, height) {
    const shapeElement = document.createElement('div');
    shapeElement.classList.add('shape-element');
    shapeElement.style.left = `${x}px`;
    shapeElement.style.top = `${y}px`;
    shapeElement.style.backgroundColor = selectedColor;

    switch (selectedShape) {
        case 'square':
            shapeElement.style.width = `${width}px`;
            shapeElement.style.height = `${height}px`;
            break;
        case 'circle':
            shapeElement.style.width = `${Math.min(width, height)}px`;
            shapeElement.style.height = `${Math.min(width, height)}px`;
            shapeElement.style.borderRadius = '50%';
            break;
        case 'diamond':
            shapeElement.style.width = `${width}px`;
            shapeElement.style.height = `${height}px`;
            shapeElement.style.transform = 'rotate(45deg)';
            shapeElement.style.marginLeft = `-${width / 2}px`;
            shapeElement.style.marginTop = `-${height / 2}px`;
            break;
        case 'triangle':
            shapeElement.style.width = '0';
            shapeElement.style.height = '0';
            shapeElement.style.borderLeft = `${width / 2}px solid transparent`;
            shapeElement.style.borderRight = `${width / 2}px solid transparent`;
            shapeElement.style.borderBottom = `${height}px solid ${selectedColor}`;
            shapeElement.style.backgroundColor = 'transparent';
            break;
    }

    canvas.appendChild(shapeElement);
}