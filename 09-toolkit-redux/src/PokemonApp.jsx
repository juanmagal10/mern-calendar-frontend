import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemons";
import {store} from './store'


export const PokemonApp = () => {
    const dispatch = useDispatch();
    const { pokemons, isLoading, page } = useSelector(state=>state.pokemon)
    
    useEffect(() => {
        dispatch(getPokemons());
    },[])
    
  return (
      <>
          <h1>Pokemon App</h1>
          <hr />
          <span>Loading{isLoading?'True':'False' }</span>
          <ul>
              {
                  pokemons.map(({name}) => {
                      return <li key={name}>{name}</li>
                  })
              }
          </ul>
          <button
              disabled={isLoading}
              onClick={()=>dispatch(getPokemons(page))}
          >
              Next
          </button>
      </>
  )
}


