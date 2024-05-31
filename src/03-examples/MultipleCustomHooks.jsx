import React from 'react'
import { useCounter, useFetch } from '../hooks'
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {

  const { counter, decrement, increment } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  console.log(data);
  return (
    <>
      <h1>Pokemon information</h1>
      <hr />

      {isLoading ? <LoadingMessage />
        : (<PokemonCard
          id={data.id}
          name={data.name}
          abilities={data.abilities}
          sprites={[
            data.sprites.front_default,
            data.sprites.back_default,
            data.sprites.front_shiny,
            data.sprites.back_shiny
          ]}
        />)
      }

      <button type='button' onClick={() => counter > 1 ? decrement() : null} className="btn btn-primary mt2">Previous Pokemon</button>
      <button type='button' onClick={() => increment()} className="btn btn-primary mt2">Next Pokemon</button>
    </>
  )
}
