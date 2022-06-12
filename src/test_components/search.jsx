import styled from "styled-components";
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {
    const [input, setInput] = useState('');
    const Navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        Navigate('/Searched/' + input)
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <SearchInput>
                <input type="text" placeholder="Food name here!" value={input} onChange={(e) => setInput(e.target.value)} />
                <FaSearch style={{margin: '0 5px', fontSize: '18px', color: 'white'}}/>
            </SearchInput>
        </form>
    </div>
  )
}

const SearchInput = styled.div`
    border: 2px solid gray;
    border-radius: 6px;
    overflow: hidden;
    input{
        padding: 5px 10px;
        width: 250px;
        font-size: 16px;
        border: none;
        outline: none;
    }
`

export default Search