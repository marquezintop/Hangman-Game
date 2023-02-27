function Letras({disabled, letter, searchLetter}){
    return(
        <>
            <button 
            data-test="letter"
            disabled={disabled}
            onClick={searchLetter}> 
            {letter}
            </button>
        </>
    )
}
export default Letras