import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { useState } from 'react';
//import '../App.css';
import Book from './components/Books';
import data from './models/books.json';
import Search from './components/Search';
import Header from './components/Header';


const App = (props) => {

  const [books] = useState(data);

  return (
      <div>
        <Router>
  <Route exact path="/" render={() => (
    <>
      <Header />
  <h1>This page 1</h1>
</> )} />
  <Route exact path="/bookcase" render={() => (
    <>
    <Header />
    <h1>This is bookcase</h1>
    
</> )} />
 </Router>
          {<Search/>}
          {books.map(book => <Book key={book.id} book={book}/>)}
      </div>
  );
}

export default App;

