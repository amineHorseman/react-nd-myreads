import PropTypes from 'prop-types';
import SingleShelf from "./SingleShelf";

const ShelfsList = ({shelfs}) => {
    return (
        shelfs.map((shelf) => (
            <SingleShelf shelf={shelf} key={shelf.id} />))
    )
}

ShelfsList.propTypes = {
    shelfs: PropTypes.array.isRequired,
}

export default ShelfsList;
