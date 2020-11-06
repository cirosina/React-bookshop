import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { useState } from 'react';
//import '../App.css';
import Book from './components/Books';
import data from './models/books.json';
import Search from './components/Search';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = (props) => {

  const [books] = useState(data);

  return (
      <div>
         {<Search/>}
        <Router>
  <Route exact path="/" render={() => (
    <>
      <Header />
  <h1>This page 1</h1>
  <h1>No. Books:{books.length}</h1>
  {books.map(book => <Book key={book.id} book={book}/>)}
</> )} />
  <Route exact path="/bookcase" render={() => (
    <>
    <Header />
    <h1>This is bookcase</h1>
    
</> )} />
<Route exact path="/about" render={() => (
  <>
  <Header />
  <h1>This is about</h1>
 </> )} />
 </Router>      
      </div>
  );
}

export default App;

