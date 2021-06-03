import React from 'react';
import {Link} from 'react-router-dom';
import { Card } from 'react-bootstrap';

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
            <h1 className="text-center mb-5">List of articles</h1> 
            <div className="row justify-content-center">  {articles.map((article) => {
        return (
            <Card key={article.id} border="dark" className="ml-2 mr-2 mb-3" style={{ width: '18rem' }} >
              <Card.Img variant="top" src="https://www.le-geant-de-la-fete.com/11407-large_default/serviettes-pokemon-lot-de-16.jpg" />
              <Card.Body >
                <Link to={`/product/${+ article.id}`} >
                  <Card.Title className="font-weight-bold font-title"> {article.title.length > 20 ? article.title.substr(0, 20) + '...' : article.title }</Card.Title>
                </Link>
                <Card.Text className="text-justify">
                  {article.body}
                </Card.Text>
              </Card.Body>
            </Card>          
        );
      })}</div>
        </div>
    );
  }
}

export default ListArticles;