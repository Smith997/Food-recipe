import React from 'react'
import styled from 'styled-components';

function Comment() {
  return (
    <Wrapper>
        <Form>
        <h3>Send your messages to us!</h3>
            <input type="text" placeholder='Your name'/>
            <input type="email" placeholder='Your eamil'/>
            <textarea name="textarea" id="textname" cols="30" rows="8" placeholder='Your comment...'></textarea>
            <button>Send</button>
        </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin: 50px 0 0;
    background-color: #e0f2fe;    

`
const Form = styled.form`
    margin: 0 auto;
    padding: 50px 15px;
    max-width: 500px;
    display: grid;
    h3{
        margin: 0 0 20px;
    }
    input{
        margin: 0 0 12px;
        padding: 5px 10px;
        outline: none;        
        border: 2px solid #7dd3fc;
        border-radius: 5px;
        font-size: 16px;
    }
    textarea{
        padding: 5px 10px;
        outline: none;        
        border: 2px solid #7dd3fc;
        border-radius: 5px;
        font-size: 16px;
    }
    button{
        margin: 20px 0 0;
        padding: 12px 0;
        font-size: 16px;
        border: none;
        background-color: #0284c7;
        color: white;
        &:hover{
            background-color: #0ea5e9;
            color: black;
            transition: all 200ms ease;
        }
    }

`

export default Comment