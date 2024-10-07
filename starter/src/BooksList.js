import PropTypes from 'prop-types';
import SingleBook from './SingleBook';

const BooksList = ({books, moveBook}) => {

    return (
        <ol className="books-grid">
            {
                books.map((book) => (
                        <li key={book.id}>
                            <SingleBook
                                book={book}
                                key={book.id}
                                moveBook={moveBook} />
                        </li>
                ))
            }
        </ol>
    )
}

BooksList.propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
}

export default BooksList;
