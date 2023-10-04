import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/PokedexPage/PokeCard";
import SelectType from "../components/PokedexPage/SelectType";
import '../components/PokedexPage/styles/PokedexPage.css'
import Pagination from "../components/PokedexPage/Pagination";
const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')
  //
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(15)
  //
  const trainer = useSelector((store)=> store.trainer)
  
  const inputSearch = useRef()

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  
  const [pokemons, getPokemons, getTypePokemon] = useFetch(url)
  //
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  //
  const currentPosts = pokemons?.results.filter(poke => poke.name.includes(inputValue)).slice(indexOfFirstPost, indexOfLastPost)

  const amor = pokemons?.results.filter(poke => poke.name.includes(inputValue))
  //
  useEffect(()=>{
    if(typeSelected === 'allPokemons'){
      getPokemons()
    }else{
      getTypePokemon(typeSelected)
    }
    
  },[typeSelected])
  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    
  }

  return (
    <div className="container_main">
      <area className="red"/>
      <area className="black"/>
      <img className="poke_page_img" src="./images/pokedex_uno.png"/>
      <p className="poke_page"><span className="poke_page_color">Hi {trainer}</span>, here you can find your favorite pokemon</p>
      <div className="poke_page_form">
        <form className="poke_page_formUno" onSubmit={handleSearch}>
          <input placeholder="look for a Pokemon..." className="form_input" ref={inputSearch} type="text" />
          <button className="form_button">Search</button>
        </form>
        <SelectType
          setTypeSelected={setTypeSelected}
        />
      </div>
      <div className="poke_page_container">
        {
          currentPosts?.map( poke =>(
            <PokeCard 
              key={poke.url}
              url={poke.url}
            /> 
          )
          )
        }
      </div>
      <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={amor?.length}
        paginate={paginate}
      />
    </div>
    
  )
}

export default PokedexPage