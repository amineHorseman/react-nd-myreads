import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";

function App() {

  const shelfs = [
    {      
      id: "currentlyReading",
      title: "Currently Reading",
    },
    {
      id: "wantToRead",
      title: "Want to Read",
    },
    {
      id: "read",
      title: "Read",
    },
  ];

  const [books, setBooks] = useState([]);
  const [update, setUpdate] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);


  // Create an effect to load books records using BooksAPI,
  // the effect is executed each time the 'update' state is changed
  useEffect(() => {
    const getBooks = async () => {
      try {
      const result = await BooksAPI.getAll();
      setBooks(result);
      } catch (error) {
        console.log("API Error: cannot get list of books from the database.")
        console.log(error);
      }
    };
    getBooks();
  }, [update]);


  // Update the book record according to the new shelf,
  // changes the 'update' state so that the books list is re-rendered
  const moveBook = (book, newShelf) => {
    const updateBook = async () => {
      try {
        await BooksAPI.update(book, newShelf);
        setUpdate(!update);
      } catch (error) {
        console.log("API Error: cannot update the book in the database.")
        console.log(error);
      }
    }
    book.shelf !== newShelf && updateBook();
  };


  // Create an effect to load books from search results
  useEffect(() => {
    const searchBooks = async (text) => {
      try {
        const result = await BooksAPI.search(text);
        const modifiedResult = result.map((book) => (
          { // add 'shelf' property to search results items'
            shelf: books.filter(x => x.id === book.id).length ?
              books.filter(x => x.id === book.id)[0].shelf : "none",
            ...book
          }
        ));
        setSearchResult(Array.isArray(modifiedResult) ? modifiedResult : []);
      } catch (error) {
        console.log("API Error: cannot search the book in the database.")
        console.log(error);
      }
    }
    searchQuery? searchBooks(searchQuery.trim()) : setSearchResult([]);

  }, [searchQuery, books]);


  return (
  <Routes>            
    <Route exact path="/" element={
      <Home 
        shelfs={shelfs}
        books={books}
        moveBook={moveBook}
      />}/>

    <Route exact path="/search" element={
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResult={searchResult}
        moveBook={moveBook}/>}/>
  </Routes>
  )
}

export default App;
