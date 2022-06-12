import React from 'react';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Itarian'}>
            {/* <FaPizzaSlice /> */}
            <h4>Itaian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            {/* <FaHamburger /> */}
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            {/* <GiNoodles/> */}
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            {/* <GiChopsticks/> */}
            <h4>Japanese</h4>
        </SLink>
        <SLink to={'/cuisine/Korea'}>
            {/* <GiChopsticks/> */}
            <h4>Korea</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    /* justify-content: center; */
    margin: 2rem 0;
`
const SLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    text-decoration: none;
    background: linear-gradient(35deg, #818cf8, #60a5fa);
    width: 8rem;
    height: 3rem;
    cursor: pointer;    
    transform: scale(0.8);
    &:hover{
        background: linear-gradient(35deg, #a5b4fc, #93c5fd);
    }
    h4{
        color: white;
        font-size: 1.2rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;   
    }
    &.active{
        background: linear-gradient(to right, #d6d3d1, #a8a29e)
    }

`

export default Category