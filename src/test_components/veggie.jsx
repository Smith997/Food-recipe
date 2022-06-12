import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie');
    if(check){
      setVeggie(JSON.parse(check));
    }else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await api.json();
      localStorage.setItem('veggie', JSON.stringify(data.recipes))
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  }

  useEffect(() => {
    getVeggie();
  }, [])

  return (
    <div>
      <h2 style={{margin: '30px 0'}}>Select your favorite dish</h2>
      <Wrapper>
      {veggie.map((item) => {
        return(
      
            <Card>
              <img src={item.image} alt="" />
              <p style={{fontWeight: '500', margin: '3px 0'}}>{item.title}</p>
              <p>{item.pricePerServing} ~ THB</p>
            </Card>
        )
      })}
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;  
`

const Card = styled.div`  
  height: 270px;
  border-radius: 5px;
  overflow: hidden;

  &:hover{
    
    transform: scale(1.03);
    transition: transform 200ms ease-in-out;
  }
  img{
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

`

export default Veggie