import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Searched() {
    const [searched, setSearch] = useState([]);
    let params = useParams();
    
    const getSearch = async (name) => {
        const check = localStorage.getItem('searched');
        if(check){
            setSearch(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
            const data = await api.json()
            localStorage.setItem('searched', JSON.stringify(data.results))
            setSearch(data.results)
        }
    }
    useEffect(() => {
        getSearch(params.search)
    }, [params.search])

  return (
    <div>
        {searched.map((item) => {
            return (
                <img src={item.image} alt="" />
            )
        })}
    </div>
  )
}

export default Searched