import PropTypes from 'prop-types';

const SearchBar = ({showSearchPage, setShowSearchpage, searchQuery, setSearchQuery}) => {

    return (
        <div className="search-books-bar">
            <a
                href="#!"
                className="close-search"
                onClick={() => setShowSearchpage(!showSearchPage)}>Close</a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)} />
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    showSearchPage: PropTypes.bool.isRequired,
    setShowSearchpage: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
}

export default SearchBar;
