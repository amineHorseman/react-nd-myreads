import PropTypes from "prop-types";
import SingleBook from "./SingleBook";
import { useNavigate } from "react-router-dom";

const BooksList = ({books, moveBook}) => {

    const navigate = useNavigate();
    const loadBookDetails = (e, id) => {
        e.preventDefault();
        navigate(`/book-details/${id}`);
    }

    return (
        <ol className="books-grid">
            {
                books.map((book) => (
                        <li key={book.id}>
                            <SingleBook
                                book={book}
                                key={book.id}
                                moveBook={moveBook} />
                            <a 
                                href={`/book-details/${book.id}`}
                                onClick={(e) => loadBookDetails(e, book.id)}>See more</a>
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
