import SearchBar from "./SearchBar";
import BooksList from "./BooksList";
import PropTypes from "prop-types";

const Search = ({searchQuery, setSearchQuery, searchResult, moveBook}) => {
    return (
        <div className="app">
            <div className="search-books">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery} />
              <div className="search-books-results">
                <BooksList
                    books={searchResult}
                    moveBook={moveBook} />
              </div>
            </div>
      </div>
    );
}

Search.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
    searchResult: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
}

export default Search;