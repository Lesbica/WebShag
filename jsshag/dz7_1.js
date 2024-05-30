const trackbar = document.querySelector('.trackbar');
const thumb = document.querySelector('.thumb');

thumb.onmousedown = function(event) {
    event.preventDefault();

    let shiftX = event.clientX - thumb.getBoundingClientRect().left;

    function moveAt(pageX) {
        let newLeft = pageX - shiftX - trackbar.getBoundingClientRect().left;
        
        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = trackbar.offsetWidth - thumb.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        thumb.style.left = newLeft + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX);
    }
    
    document.addEventListener('mousemove', onMouseMove);
    
    document.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        thumb.onmouseup = null;
    };

};

thumb.ondragstart = function() {
    return false;
};