import {useParams} from 'react-router-dom';
import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';


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
            content = <div>
                        <p><a>Nom :</a> {detailArticle.title}</p>
                        <p>Détails : {detailArticle.body}</p>
                      </div>;
        }
        if (succesLoading === false) {
            content = <p>La data recherchez n'existe pas</p>;
        }

        return (
            <div>
                <h1> Details de l'article</h1>
                {content}
            </div>
        )
}
        
export default ArticleDetails;