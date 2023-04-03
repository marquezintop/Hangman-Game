import styled from "styled-components";

export default function Letter({letter, disabled, pickLetter}) {


    return (
        <LetterStyled onClick={() => {
            pickLetter(letter)
        }}
        disabled={disabled}>
                {letter}
        </LetterStyled>
    );
};

const LetterStyled = styled.button`
width: 40px;
height: 40px;
background: ${props => props.disabled ? "#9FAAB5" : "#E1ECF4"};
border: 1px solid #7AA7C7;
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: ${props => props.disabled ? "#798A9F" : "#39739D"};
font-size: 16px;
margin-right: 12px;
margin-bottom: 11px;
:hover {
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"}
}
`