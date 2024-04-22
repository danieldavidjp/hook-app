import { useEffect, useState } from "react"

export const Message = () => {

   const [coords, setCoords] = useState({ x: 0, y: 0 });

   useEffect(() => {

      const onMouseMove = ({x, y}) => {
         setCoords({ x, y });
      }
      window.addEventListener('mousemove', onMouseMove);
      return () => {
         window.removeEventListener('mousemove', onMouseMove);
      }
   }, [])
  return (
      <>
         <h3>User Already Exist</h3>
        {JSON.stringify(coords) }
      </>
  )
}
