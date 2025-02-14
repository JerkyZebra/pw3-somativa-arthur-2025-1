const BookCard = ({titulo, autor, imagem})=>{ 
    return (
    <div>
        <h3>{titulo}</h3>
        <p>{autor}</p>
        <img src={imagem} alt='Capa: Cavernas de aço'/>
    </div>
    )
}

export default BookCard