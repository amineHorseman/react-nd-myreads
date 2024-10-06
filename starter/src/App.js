import "./App.css";
import { useState } from "react";
import ShelfsList from "./ShelfsList";
import BooksList from "./BooksList";
import SearchBar from "./SearchBar";

function App() {

  // TODO: add routing & navigation

  const [showSearchPage, setShowSearchpage] = useState(false);
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

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <SearchBar
            showSearchPage={showSearchPage}
            setShowSearchpage={setShowSearchpage}
          />
          <div className="search-books-results">
            {<BooksList shelfID="search" />}
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {<ShelfsList shelfs={shelfs} />}
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
