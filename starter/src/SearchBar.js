import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const SearchBar = ({searchQuery, setSearchQuery}) => {
    return (
        <div className="search-books-bar">
            <Link 
                to="/"
                onClick={() => setSearchQuery("")}
                className="close-search">Close</Link> 
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
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
}

export default SearchBar;
