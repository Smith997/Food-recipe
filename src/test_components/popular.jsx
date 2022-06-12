import {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Popular = () => {
  const [popular, setPopular] = useState([]);

    const getPopular = async () => {
      const check = localStorage.getItem('popular')
      if(check){
        setPopular(JSON.parse(check))
      }else{        
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await api.json();
        localStorage.setItem('popular', JSON.stringify(data.recipes))
        setPopular(data.recipes)
      }
  }

  useEffect(() => {
    getPopular();
  }, [])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Wrapper>
      <Titleh2>Popular dish</Titleh2>
      <Slider {...settings}>
    {/* <Splide options={{perPage: 3, arrows: false, pagination: false, drag: 'free', gap: '2rem' }}> */}
      {popular.map((recipe) => {
        return (
          // <Slider {...settings}>
            <Card>
              <img src={recipe.image} alt={recipe.title} />
              <p>{recipe.title}</p>
              <Gradient></Gradient>
            </Card>
          // </Slider>
        )
      })}
    </Slider>
    {/* </Splide> */}
    </Wrapper>
  )

  
}

const Wrapper = styled.div`
    margin: 0 0 3rem;
`
const Titleh2 = styled.h2`
  margin: 0 0 1.5rem;
`
const Card = styled.div`
    
    min-height: 20rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    border: 5px solid white;    

    img{
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* border-radius: 2rem; */
    }

    P{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;

    }
`
const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))
`

export default Popular