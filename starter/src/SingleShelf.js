import PropTypes from 'prop-types';
import BooksList from "./BooksList";

const SingleShelf = ({shelf}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
                {
                    <BooksList shelfID={shelf.id} />
                }
            </div>
        </div>
    )
}

SingleShelf.propTypes = {
    shelf: PropTypes.object.isRequired,
}

export default SingleShelf;
