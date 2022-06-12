/* import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {GiKnifeFork} from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork/>
          <Logo to={'/'} >Delicious</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  font-weigth: 400;
`
const Nav = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`

export default App;
 */

import React from 'react'
import Category from './test_components/category';
import Page from './test_pages/page';
import { BrowserRouter } from 'react-router-dom';
import Footer from './test_components/footer';
import Navbar from './test_pages/navbar';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>   
        <Navbar/>
        <Category/>
        <Page />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

