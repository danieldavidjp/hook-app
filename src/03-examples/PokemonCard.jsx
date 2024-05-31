import React, { useLayoutEffect, useRef, useState } from 'react'

export const PokemonCard = ({ id, name, abilities = [], sprites = [] }) => {

  const pRef = useRef();
  const [boxState, setBoxState] = useState({ height: 0, width: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxState({ height, width });

  }, [id])
  return (
    <section>
      <h2 className="text-capitalize">#{id} {name}</h2>
      <div>
        {
          sprites.map(sprite => (
            <img key={sprite} src={sprite} alt={name} />
          )
          )
        }
      </div>
      <h2 className="text-capitalize">Abilities</h2>
      <table ref={pRef}>
        <tbody>
          <tr>
            {
              abilities.map(({ ability }) => (
                <th key={ability.name} className="text-capitalize">{ability.name}</th>
              ))
            }
          </tr>
        </tbody>
      </table>
    </section>
  )
}
