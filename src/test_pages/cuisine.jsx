
import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams()
    const getCuisine = async (name) => {
        const check = localStorage.getItem('cuisine');
        if(check){
            setCuisine(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
            const data = await api.json();
            localStorage.setItem('cuisine', JSON.stringify(data.results));
            setCuisine(data.results);
        }
    }

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type])

  return (
    <div>
        {cuisine.map((item) => {
            return (
                <img src={item.image} alt="" />
            )
        })}
    </div>
  )
}

export default Cuisine