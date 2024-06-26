import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks'


const heavyStuff = (iterationNumber = 100) => {
   for (let i = 0; i < iterationNumber; i++) {
      console.log('Here we go...');
   }

   return `${iterationNumber} iterations done`;

}

export const MemoHook = () => {
   const { counter, increment } = useCounter(4000);
   const [show, setShow] = useState(true);

   const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

   return (
      <>
         <h1>Counter: <small>{counter}</small></h1>
         <hr />

         <h4> {memorizedValue}</h4>

         <button
            type="button"
            onClick={() => increment()}
            className="btn btn-primary">
            +1
         </button>

         <button type="button"
            className="btn btn-outline-primary"
            onClick={() => setShow(!show)}
         >
            Show/Hide {JSON.stringify(show)}
         </button>
      </>
   )
}
