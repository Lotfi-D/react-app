import {Route} from 'react-router-dom';
import ListArticles from './Components/ListArticles';
import ArticleDetails from './Components/ArticleDetails';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


//import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  return (
    <div>
      <Navbar />
      <Route exact  path="/" component={ListArticles} />
      <Route exact  path="/:id" component={ArticleDetails} />
      <Footer />
    </div>
  );
}

export default App;
