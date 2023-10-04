import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './styles/PokeCard.css'
const PokeCard = ({ url }) => {

    const [pokemon, getPokemon] = useFetch(url)
    const navigate = useNavigate()
    useEffect(() => {
        getPokemon()
    }, [])
    
    const handleNavigate = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }
    const firstType = pokemon?.types[0].type.name
    return (
        <article className={`pokecard ${firstType}-border`} onClick={handleNavigate}>
            <header className={`pokecard_header ${firstType}-gradient`}>
                <img
                    className="pokecard_image"
                    src={pokemon?.sprites.other["official-artwork"].front_default}
                    alt=""
                />
            </header>
            <section className="pokecard_body">
                <h3 className={`pokecard_name ${firstType}-color`}>{pokemon?.name}</h3>
                <ul className="pokecard_types">
                    {
                        pokemon?.types.map(typeInfo => (
                            <li className="pokecard_typename" key={typeInfo.type.url}>{typeInfo.type.name}</li>
                        ))
                    }
                </ul>
                <hr className="pokecard_hr" />
                <ul className="pokecard_stats">
                    {
                        pokemon?.stats.map(statInfo => (
                            <li className='pokecard_stat' key={statInfo.stat.url}>
                                <span className="pokecard_stat_name">{statInfo.stat.name} </span>
                                <span className={`pokecard_stat_value ${firstType}-color`}>{statInfo.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </article>
    )
}

export default PokeCard