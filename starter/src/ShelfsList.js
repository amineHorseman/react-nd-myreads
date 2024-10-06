import PropTypes from 'prop-types';
import SingleShelf from "./SingleShelf";

const ShelfsList = ({shelfs, books, moveBook}) => {
    return (
        shelfs.map((shelf) => (
            <SingleShelf 
                shelf={shelf}
                books={books}
                key={shelf.id}
                moveBook={moveBook}  />))
    )
}

ShelfsList.propTypes = {
    shelfs: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
}

export default ShelfsList;
