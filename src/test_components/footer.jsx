import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <DivTag>
      <p>Copy right &copy; All rights reserved</p>
    </DivTag>
  )
}

const DivTag = styled.div`
  margin: 5px 0 0;
  background-color: #e2e8f0;
  height: 100px;  
  display: flex;
  align-items: center;
  justify-content: center;

`

export default Footer