import styled from "styled-components";
import Letter from "./Letter";
import alphabet from "./alphabet";

export default function Letters({lettersUsed, pickLetter,}) {

    return (
        <Container>
        {alphabet.map(letter => (
            <Letter disabled={lettersUsed.includes(letter)} 
            letter={letter} 
            key={letter}
            pickLetter={pickLetter}/>
        ))}
        </Container>
    );
};

const Container = styled.div`
width: 700px;
display: flex;
flex-wrap: wrap;
margin: 0 auto;
margin-top: 70px;
margin-bottom: 56px;
`