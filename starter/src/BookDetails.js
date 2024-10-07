import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

const BookDetails = () => {

    const {id} = useParams();
    const [book, setBook] = useState(null);

    // Create an effect to get book details from ID
    useEffect(() => {
        const getBookDetails = async () => {
            try {
                const result = await BooksAPI.get(id);
                setBook(result);
            } catch (error) {
                console.log("API Error: cannot search the book in the database.")
                console.log(error);
          }
        }
        id && getBookDetails();
      }, [id, setBook]
    );

    return (
        <div>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {
                book && (
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{book.title}</h2>
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
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>Book details:</h4>
                                <ul>
                                    <li key={`${id}-authors`}><b>Authors:</b> {book.authors && book.authors.toString()}</li>
                                    <li key={`${id}-lang`}><b>Language:</b> {book.language && book.language}</li>
                                    <li key={`${id}-date`}><b>Published on:</b> {book.publishedDate && book.publishedDate}</li>
                                </ul>
                            </div>
                            <div className="book-description"><h4>Description:</h4>{book.description && book.description}</div>
                            <br />
                            <Link to="/">Return Home</Link>
                        </div>
                    </div>
                )
            }
        </div>
    );
          
};

export default BookDetails;
