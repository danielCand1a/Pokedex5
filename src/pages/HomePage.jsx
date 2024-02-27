import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import '../components/HomePage/styles/HomePage.css'
const HomePage = () => {

  const inputTrainer = useRef()

  const dispatch= useDispatch()

  const navigate = useNavigate()

  const handleTrainer = (e) => {
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div className="homePrincipal">
      <div className="homePage">
        <img className="homePokedex" src="../images/pokedex.PNG" alt="pokedex xd"/>
        <h2 className="homeTitulo">Hi Trainer!</h2>
        <p>To start, please, give me your trainer name</p>
        <form className="home_form" onSubmit={handleTrainer}>
            <input placeholder="write your name here..." ref={inputTrainer} type="text" />
            <button>Start!</button>
        </form>
      </div>
      <area className="barra_roja"/>
      <area className="barra_negra"/>
    </div>

  )
}

export default HomePage