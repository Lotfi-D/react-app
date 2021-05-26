import {Route} from 'react-router-dom';
import ListArticles from './Components/ListArticles';
import ArticleDetails from './Components/ArticleDetails';
//import React, { useState } from 'react';


function App() {
 
  return (
    <div>
      <Route path="/products">
        <ListArticles />
      </Route>

      <Route path="/product/:id">
        <ArticleDetails />
      </Route>
    </div>
  );
}

export default App;
