import styled from "styled-components";
import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

export default function Game({startGame, arrayChoosenWord, errors, win, lose}) {
    const forcaArray = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

    return (
        <Container>
            <img src={forcaArray[errors]} alt={forca0}/>
            <ChooseWord onClick={startGame}><p>Chose Word</p></ChooseWord>
            <ChoosenWord win={win} lose={lose}>{arrayChoosenWord}</ChoosenWord>
        </Container>
    );
};

const Container = styled.div`
    img {
        width: 400px;
        height: 466.67px;
        margin-top: 59px;
        margin-left: 38px;
    }
`;

const ChooseWord = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    width: 200px;
    height: 60px;
    background: #27AE60;
    border-radius: 8px;
    position: absolute;
    left: 1000px;
    top: 89px;
    p {
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
        margin: auto;
    }
    :hover{
        cursor: pointer;
    }
`;

const ChoosenWord = styled.div`
font-weight: 700;
font-size: 50px;
line-height: 68px;
display: flex;
align-items: center;
justify-content: flex-end;
margin-right: 200px;
text-align: center;
color: ${props => props.win ? "#27AE60" : ""};
color: ${props => props.lose ? "#FF0000" : ""};
letter-spacing: 10px;
`;