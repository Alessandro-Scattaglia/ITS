/**
 * Author: Alessandro Scattaglia
 * 
 * Displays a list of books with title, author, and cover image.
 * Styles each item based on whether the book has already been read.
 * Loads an external CSS stylesheet after 5 seconds.
 * 
 * @example
 * // Creates <li> elements for 4 books
 * // Each item includes book title, author, and image
 * // Sets background color to green if already read, red if not
 * // Applies inline padding and margin styles
 * // After 5 seconds, loads "css/style.css"
 */

let books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    url: 'https://m.media-amazon.com/images/I/71HMyqG6MRL.jpg'
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    url: 'https://m.media-amazon.com/images/I/81T7YrWnFLL.jpg'
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    alreadyRead: true,
    url: 'https://m.media-amazon.com/images/I/41xShlnTZTL.jpg'
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    alreadyRead: false,
    url: 'https://m.media-amazon.com/images/I/41br7nQvSxL.jpg'
  }
];

const bookList = document.getElementById('book-list');

books.forEach(book => {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${book.title}</strong> by ${book.author}`;

  const img = document.createElement('img');
  img.src = book.url;
  img.alt = `${book.title} cover`;
  img.style.width = '100px';
  img.style.display = 'block';
  img.style.margin = '10px 0';

  // Style with JS
  li.style.padding = '10px';
  li.style.marginBottom = '10px';
  li.style.backgroundColor = book.alreadyRead ? '#c8f7c5' : '#f7c5c5';

  li.appendChild(img);
  bookList.appendChild(li);
});

// Add CSS after 5 seconds
setTimeout(() => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css/style.css';
  document.head.appendChild(link);
}, 5000);
