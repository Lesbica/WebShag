const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-item.active');
        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const content = item.querySelector('.accordion-content');
    if (item.classList.contains('active')) {
        content.style.maxHeight = 0;
        content.style.padding = '0 15px';
        item.classList.remove('active');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.padding = '0 15px 15px';
        item.classList.add('active');
    }
};