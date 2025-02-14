import './App.css'

import BookCard from './components/BookCard'

import capa_livro from './assets/cavernas_aco.jpg'

function App() {

  return (
    <>
      <div>
        <h1>PW3 - WEBAPP - LIVRARIA</h1>
        <BookCard
        titulo='Quarto de despejo'
        autor='Carolina Maria de Jesus'
        imagem={capa_livro}/>

        
        {/* <BookCard 
        titulo= 'Dom Casmurro'
        autor= 'Machado de Assis'
        imagem= 'Uma imagem deve aparecer aqui'/>

        <BookCard
        titulo= 'Memórias Póstumas de Bras Cubas'
        autor= 'Machado de Assis'
        imagem= 'Uma imagem deve aparecer aqui'/>

        <BookCard
        titulo='Iracema'
        autor='José de Alencar'
        imagem='Uma imagem deve aparecer aqui'/>


        <BookCard
        titulo='Til'
        autor='José de Alencar'
        imagem='Uma imagem deve aparecer aqui'/> */}

      </div>
    
    </>
  )
}

export default App
