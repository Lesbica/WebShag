document.getElementById('addCommentButton').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (name && comment) {
        const commentContainer = document.createElement('div');
        commentContainer.className = 'comment';

        const commentHeader = document.createElement('h4');
        commentHeader.textContent = name;

        const commentDate = document.createElement('small');
        commentDate.textContent = new Date().toLocaleDateString();

        const commentText = document.createElement('p');
        commentText.textContent = comment;

        commentContainer.appendChild(commentHeader);
        commentContainer.appendChild(commentDate);
        commentContainer.appendChild(commentText);

        document.getElementById('comments').appendChild(commentContainer);

        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
    }
});