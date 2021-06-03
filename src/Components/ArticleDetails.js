import {useParams} from 'react-router-dom';
import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';


const ArticleDetails = () =>{
    const params = useParams();
    const [detailArticle, setDetailArticle] = useState ([]);
    const [succesLoading, setsuccesLoading] = useState ('');

    const getArticlesDetails = useCallback (async () => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + params.id);
            const data = response.data;
            console.log(data);
            setDetailArticle(data); 
            setsuccesLoading(true);
        }
        catch{
            console.log('error');
            setsuccesLoading(false);
            console.log(succesLoading);
        } 
    }, []);

    useEffect(()=>{
        getArticlesDetails();
    }, [getArticlesDetails]);

        let content  =<p></p>
        if (succesLoading === true) {
            content = <div className="row justify-content-center">
                        <Card border="dark" className="justify-center" style={{ width: '18rem' }} >
                            <Card.Img variant="top" src="https://www.le-geant-de-la-fete.com/11407-large_default/serviettes-pokemon-lot-de-16.jpg" />
                            <Card.Body >
                                <Card.Title> {detailArticle.title}</Card.Title>
                                <Card.Text className="text-justify">
                                    {detailArticle.body}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                      </div>;
        }
        if (succesLoading === false) {
            content = <div className="row justify-content-center">
                        <Card border="dark" style={{ width: '18rem' }} >
                            <Card.Img variant="top" src="https://www.batirama.com/scaled/983/755/1/2017/08/31/125459/images/article/15082-_00erreur.jpg" />
                            <Card.Body >
                                <Card.Title className="text-justify"> {detailArticle.title}</Card.Title>
                                <Card.Text>
                                    The data doesn't exist
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>;
        }

        return (
            <div className="justify-content-center">
                <h1 className="text-center mt-5">Article's detail</h1> <br/>
                {content}
            </div>
        )
}
        
export default ArticleDetails;