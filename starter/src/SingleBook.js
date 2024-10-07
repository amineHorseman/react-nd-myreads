import PropTypes from 'prop-types';
import {useState,useEffect} from 'react';

const SingleBook = ({book, moveBook}) => {

    const currentShelf = book.shelf;
    const [newShelf, setNewShelf] = useState(book.shelf);

    // Create an effect to update the book record when the use selects a new shelf
    useEffect(() => {
        moveBook(book, newShelf);
    }, [newShelf, book, moveBook]);

    return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: 
                            book.imageLinks && `url(${book.imageLinks.smallThumbnail})`,
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select defaultValue={currentShelf}
                            onChange={(event) => setNewShelf(event.target.value)}>
                            <option value="choice" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading"
                                disabled={currentShelf==="currentlyReading"}>Currently Reading</option>
                            <option value="wantToRead"
                                disabled={currentShelf==="wantToRead"}>Want to Read</option>
                            <option value="read"
                                disabled={currentShelf==="read"}>Read</option>
                            <option value="none"
                                disabled={currentShelf==="none"}>None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.toString()}</div>
            </div>
    );
}


SingleBook.propTypes = {
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired,
}


export default SingleBook;
