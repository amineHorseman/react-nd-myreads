import PropTypes from 'prop-types';
import BooksList from "./BooksList";

const SingleShelf = ({shelf, books, moveBook}) => {
    
    const filteredBooks = books.filter(book => book.shelf === shelf.id);
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
                <BooksList 
                    books={filteredBooks}
                    moveBook={moveBook} />
            </div>
        </div>
    )
}

SingleShelf.propTypes = {
    shelf: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
}

export default SingleShelf;
