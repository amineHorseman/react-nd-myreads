import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

const SingleBook = ({book, moveBook}) => {

    const [currentShelf, setCurrentShelf] = useState(book.shelf);
    const [newShelf, setNewShelf] = useState(book.shelf);

    // Create an effect to update the book record when the use selects a new shelf
    useEffect(() => {
        moveBook(book, newShelf);
    }, [newShelf, book, moveBook]);

    // Create an effect to get book details from ID to update shelf
    // It is only used when book.shelf is empty while displaying search results
    useEffect(() => {
        let mounted = true;
        const getBookDetails = async () => {
            try {
                const result = await BooksAPI.get(book.id);
                mounted && setCurrentShelf(result.shelf);
            } catch (error) {
                console.log("API Error: cannot search the book in the database.")
                console.log(error);
            }
        }
        currentShelf || getBookDetails();
        return () => {
            mounted = false; // to avoid updating a component that is no more existing (happens during fast search query typing)
        }
    }, [book, currentShelf, setCurrentShelf]);

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
                        {
                            currentShelf && (
                                <select 
                                    defaultValue={currentShelf}
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
                            )
                        }
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
