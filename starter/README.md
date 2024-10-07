# MyReads Project

This is the assessment project for Udacity's React Fundamentals course It is based on the started template provided by Udacity.

The goal is to create a books web app allowing the user to search for a book, change its status (want to read, currently reading, read), and display the information for a specific book.

All books information are retrieved through a simple API provided by Udacity.

## Installation

To use this project:
- Clone the repository on your local machine `git clone <url>`.
- Open a terminal in the project starter/ folder.
- Install all project dependencies with `npm install`.

## Execute the project

- Open a terminal in the project starter/ folder.
- Start the development server with `npm start`.
- Open the page `http://localhost:3000` in your favorite browser.

## Page structure

#### Components hierarchy

- Home
    - ShelfsList
        - SingleShelf (currentlyReading)
            - BooksList
                - SingleBook
                - SingleBook
                - ...
        - SingleShelf (wantToRead)
            - BooksList
                - SingleBook
                - SingleBook
                - ...
        - SingleShelf (read)
            - BooksList
                - SingleBook
                - SingleBook
                - ...
- Search
    - SearchBar
    - BooksList
        - SingleBook
        - SingleBook
        - ...
- BookDetails/:id


#### Routes

There are 3 possible routes:

| URL    | Page |
| -------- | ------- |
| /  | Homepage    |
| /search | Search page     |
| /book-details/{id}    | Book page    |

## Enhancement

The project was focused on the code structure and React implementation, the visual part has not been improved yet.

## Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
