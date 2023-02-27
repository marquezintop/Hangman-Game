import { useState } from "react"
import Letras from "./Letras"
import palavras from "./palavras"
import alfabeto from "./alfabeto"
import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"

export default function Jogo(){

  const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

  const [disabled, setDisabled] = useState(true)
  const [lettersUsed, setLettersUsed] = useState([])
  const [numberImage, setnumberImage] = useState(0)
  const [chosenWord, setChosenWord] = useState()
  const [showingWord, setShowingWord] = useState()
  const [winOrLose, setWinOrLose] = useState('')
  
  console.log(showingWord)
  console.log(winOrLose)

  function startGame() {
    setDisabled(false)
    let chosenWord = palavras[Math.round(Math.random() * palavras.length)]
    let arrayChosenWord = chosenWord.split('')
    setChosenWord(chosenWord)
    setShowingWord(arrayChosenWord.map(() => "_ "))
  }

  function searchLetter(letter) {

    const newLettersUsed = [...lettersUsed, letter]
    setLettersUsed(newLettersUsed)
    let itsRigth = 0

    if (chosenWord.includes(letter) === true) {
      for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === letter) {
          showingWord.splice(i, 1, chosenWord[i])
          let sucessWord = [...showingWord]
          console.log(sucessWord)
          setShowingWord(sucessWord)
          for (let j=0; j < chosenWord.length; j++) {
            if (chosenWord[j] === showingWord[j]) {
              itsRigth += 1
              if (itsRigth === chosenWord.length) {
                setWinOrLose('victory')
              }
            }
          }
      }
    }
  }
}

    return(
        <div className="container">
          <img data-test="game-image" className="hangman" src={forca[numberImage]} alt="forca0"/>
            <button data-test="choose-word" className="chooseWord" onClick={startGame} disabled={!disabled}>Escolher Palavra</button>
            <div className="wordSpace">
              <div data-test="word" className={`word ${winOrLose}`}>
                {showingWord}
              </div>
            </div>
        <div className="letters">
          {alfabeto.map((letter) => (
            <Letras disabled={(lettersUsed.includes(letter)) ? true : disabled} letter={letter} searchLetter={() => searchLetter(letter)}/>
          ))}
        </div>
      </div>
    )
}