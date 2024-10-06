import "./App.css";
import { useState, useEffect } from "react";
import ShelfsList from "./ShelfsList";
import BooksList from "./BooksList";
import SearchBar from "./SearchBar";
import * as BooksAPI from "./BooksAPI";

function App() {

  // TODO: add routing & navigation

  const shelfs = [
    {      
      id: "currentlyReading",
      title: "Currently Reading",
    },
    {
      id: "wantToRead",
      title: "Want to Read",
    },
    {
      id: "read",
      title: "Read",
    },
  ];

  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
  const [update, setUpdate] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Create an effect to load books records using BooksAPI,
  // the effect is executed each time the 'update' state is changed
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, [update]);

  // Update the book record according to the new shelf,
  // changes the 'update' state so that the books list is re-rendered
  const moveBook = (book, newShelf) => {
    const updateBook = async () => {
      try {
        await BooksAPI.update(book, newShelf);
        setUpdate(!update);
      } catch (error) {
        console.log("API Error: cannot update the book in the database.")
      }
    }
    book.shelf !== newShelf && updateBook();
  };

  // Filter books list by titre, authors or ISBN
  const filterBooks = (books, searchQuery) => {
    const text = searchQuery.toLowerCase()
    return books.filter(book => 
      book.title.toLowerCase().includes(text) ||
      book.authors.toString().toLowerCase().includes(text) ||
      book.industryIdentifiers
        .map(element => element.identifier.toLowerCase().includes(text))
        .some(element => element)
      )
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <SearchBar
            showSearchPage={showSearchPage}
            setShowSearchpage={setShowSearchpage}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className="search-books-results">
            {
              <BooksList
                books={filterBooks(books, searchQuery)}
                moveBook={moveBook} />
            }
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {
              <ShelfsList
              shelfs={shelfs}
              books={books}
              moveBook={moveBook} />
            }
          </div>
          <div className="open-search">
            <a 
              href="#!" 
              onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
