import ShelfsList from "./ShelfsList";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Home = ({shelfs, books, moveBook}) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <ShelfsList
                        shelfs={shelfs}
                        books={books}
                        moveBook={moveBook} />
                </div>
                <div className="open-search">
                    <Link to="/search" >Add a book</Link>
            </div>
        </div>
    )
};

Home.propTypes = {
    shelfs: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
}


export default Home;