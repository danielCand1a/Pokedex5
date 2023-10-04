import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import "../components/PokedexPage/styles/PokedexIdPage.css"
const PokedexIdPage = () => {

  const {id} = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [ pokemon, getPokemon] = useFetch(url)

  useEffect(()=>{
    getPokemon()
  }, [id])

  const firstType = pokemon?.types[0].type.name
  return (
    <div className="idpage_main">
      <area className="idpage_red"/>
      <area className="idpage_black"/>
      <img  className="idpage_image" src="../public/images/pokedex_uno.png"/>
      <div className="idpage_container">
      <img className="idpage_image_poke"src={pokemon?.sprites.other['official-artwork'].front_default}  alt=""/>
      <h2 className={`idpage_order ${firstType}-color`}>#{pokemon?.order}</h2>
      <h2 className={`idpage_name ${firstType}-color`}>{pokemon?.name}</h2>
      <ul className="idpage_pa">
        <li><span>Weight</span><span>{pokemon?.weight}</span></li>
        <li><span>Height</span><span>{pokemon?.height}</span></li>
      </ul>
      <div className="idpage_ta">
        <div className="idpage_ta_type_pro">
          <h3 className="idpage_name_type">Types</h3>
          <ul className="idpage_ta_type">
            {
              pokemon?.types.map(typeInfo =>(
                  <li className={`${typeInfo.type.name}-gradient`} key={typeInfo.type.url}>{typeInfo.type.name}</li>
              ))
            }
          </ul>
        </div>
        <div className="idpage_ta_ability_pro">
          <h3 className="idpage_name_ability">Abilities</h3>
          <ul className="idpage_ta_ability">
            {
              pokemon?.abilities.map(abilInfo=>(
                <li key={abilInfo.ability.url}>{abilInfo.ability.name}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <h3 className="idpage_name_move">Movements</h3>
      <ul className="idpage_move">
        {
          pokemon?.moves.map(moveInfo => (
            <li className="idpage_move_dato" key={moveInfo.move.url}>{moveInfo.move.name}</li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default PokedexIdPage