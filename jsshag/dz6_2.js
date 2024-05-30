const field = document.getElementById('field');
const ball = document.getElementById('ball');
const ballSize = 100;

field.addEventListener('click', (event) => {
    const fieldRect = field.getBoundingClientRect();
    const ballX = event.clientX - fieldRect.left - ballSize / 2;
    const ballY = event.clientY - fieldRect.top - ballSize / 2;
    
    const maxX = fieldRect.width - ballSize;
    const maxY = fieldRect.height - ballSize;
    const boundedX = Math.max(0, Math.min(ballX, maxX));
    const boundedY = Math.max(0, Math.min(ballY, maxY));

    ball.style.left = `${boundedX}px`;
    ball.style.top = `${boundedY}px`;
});

window.addEventListener('resize', () => {
    const fieldRect = field.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();
    
    const maxX = fieldRect.width - ballSize;
    const maxY = fieldRect.height - ballSize;
    const boundedX = Math.max(0, Math.min(ballRect.left - fieldRect.left, maxX));
    const boundedY = Math.max(0, Math.min(ballRect.top - fieldRect.top, maxY));

    ball.style.left = `${boundedX}px`;
    ball.style.top = `${boundedY}px`;
});