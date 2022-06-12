import React from 'react'
import Search from '../test_components/search';
import {BsFillCartCheckFill} from 'react-icons/bs';
import styled from 'styled-components';

function Navbar() {
  return (
    <Wrapper>
        <div>
            <h1>Star Restaurant</h1>
            <Search />        
        </div>
        <div>
            <BsFillCartCheckFill style={{margin: '10px', fontSize: '25px', color: 'white'}}/>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin: 0 0 20px;
    padding: 10px 5px;
    display: flex;
    justify-content: space-between;    
    background-color: #0f766e;
    div:nth-child(1){   
        margin: 0 auto;
        min-width: 90%;               
        display: flex;
        flex-wrap: wrap;     
        justify-content: space-between;   
        align-items: center;      
        
        h1{
            margin: 0 10px 20px 0;
            color: #db2777;
            font-family: 'Lobster', cursive;
        }      
    }    
     
`

export default Navbar