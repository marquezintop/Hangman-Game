import { useState } from "react";
import styled from "styled-components";

export default function InputGuess({disabled, guessWord}) {
    const [inputValue, setInputValue] = useState('');

    return (
        <Input disabled={disabled}>
        <h1>I know the word!</h1>
        <input disabled={disabled}
        value={inputValue} 
        onChange={(e) => {
            e.preventDefault()
            setInputValue(e.target.value)
        }}></input>
        <button disabled={disabled} onClick={() => {
            guessWord(inputValue)
            setInputValue("")
            }}>Guess</button>
        </Input>
    );
};

const Input = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px auto;
    margin-right: 30px;
    h1 {
        font-weight: 400;
        font-size: 20px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
        margin-right: 12px;
    }
    input {
        width: 353px;
        height: 40px;
        background: ${props => props.disabled ? "#E6E3E3" : "#FFFFFF"};
        border: 1px solid #CCCCCC;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        :hover {
            cursor: ${props => props.disabled ? "not-allowed" : ""}
        }
    }
    button {
        width: 100px;
        height: 40px;
        background: ${props => props.disabled ? "#9FAAB5" : "#E1ECF4"};
        border: 1px solid #7AA7C7;
        border-radius: 3px;
        margin-left: 15px;
        font-weight: 700;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #3C76A1;
        :hover {
            cursor: ${props => props.disabled ? "not-allowed" : "pointer"}
        }
    }
`;