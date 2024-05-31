import React from 'react'

export const ShowIncrement = ({ increment }) => {
   console.log('ShowIncrement component rendered');
   return (
      <button
         type="button"
         className="btn btn-primary"
         onClick={() => {
            increment()
         }}
      >
         Increment
      </button>
   )
}
