import React from 'react';
import {Link} from 'react-router-dom';

class ListArticles extends React.Component {

 constructor(props) {
    super(props);
        this.state = {
         articles: []
        };
      }

  componentDidMount() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ articles: data })
        console.log(this.state.articles)
      })
      .catch(console.log)
    }
  
  
  render() {
      const articles = this.state.articles;
    return (
    
        <div>
            <h1>List of articles</h1> 
            <p>  {articles.map((article) => {
        return (
          <li key={article.id}>
            <p><Link to={`/product/${+ article.id}`} >{article.title}</Link> </p>
            <span>{article.body}</span>
          </li>
        );
      })}</p>
        </div>
    );
  }
}

export default ListArticles;