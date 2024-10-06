import PropTypes from 'prop-types';

const SingleBook = ({book, shelfID}) => {

    const moveToShelf = (event) => {
        // TODO: complete moveToShelf code
        return true;
    };

    return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: book.url,
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select defaultValue={shelfID}
                            onClick={(event) => moveToShelf(event)}>
                            <option value="none" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading"
                                disabled={shelfID==="currentlyReading"}>Currently Reading</option>
                            <option value="wantToRead"
                                disabled={shelfID==="wantToRead"}>Want to Read</option>
                            <option value="read"
                                disabled={shelfID==="read"}>Read</option>
                            <option value="none"
                                disabled={shelfID==="none"}>None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
            </div>
    );
}


SingleBook.propTypes = {
    book: PropTypes.object.isRequired,
    shelfID: PropTypes.string.isRequired,
}


export default SingleBook;
