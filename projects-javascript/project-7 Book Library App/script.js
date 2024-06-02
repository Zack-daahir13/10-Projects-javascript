document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('book-form');
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const bookList = document.getElementById('book-list');

    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = titleInput.value;
        const author = authorInput.value;

        if (!title || !author) {
            alert('Please enter both a title and an author.');
            return;
        }

        const bookItem = document.createElement('li');
        bookItem.classList.add('book-item', 'unread');
        bookItem.innerHTML = `
            <span>${title} by ${author}</span>
            <div>
                <button class="toggle-read-btn">Mark as Read</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        bookList.appendChild(bookItem);

        titleInput.value = '';
        authorInput.value = '';
    });

    bookList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const bookItem = e.target.parentElement.parentElement;
            bookItem.remove();
        }

        if (e.target.classList.contains('toggle-read-btn')) {
            const bookItem = e.target.parentElement.parentElement;
            bookItem.classList.toggle('read');
            bookItem.classList.toggle('unread');
            e.target.textContent = bookItem.classList.contains('read') ? 'Mark as Unread' : 'Mark as Read';
        }
    });
});
