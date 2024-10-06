import PropTypes from 'prop-types';
import SingleBook from './SingleBook';

const BooksList = ({shelfID}) => {

    const books = [
        {
            'id': 1,
            'url': 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
            'title': 'To Kill a Mockingbird',
            'author': 'Harper Lee',
        },
    ];  // TODO: Dynamic books retrieval from API

    // TODO: Display book by text filter if shelfID == 'search'

    return (
        <ol className="books-grid">
            {
                books.map((book) => (
                    <li key={shelfID + "-" + book.id}>
                        <SingleBook
                            book={book}
                            shelfID={shelfID} 
                            key={shelfID + "-" + book.id}/>
                    </li>
                ))
            }
        </ol>
    )
}

BooksList.propTypes = {
    shelfID: PropTypes.string.isRequired,
}

export default BooksList;
