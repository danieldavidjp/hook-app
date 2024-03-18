import { useEffect, useState } from "react"

export const SimpleForm = () => {

   const [formState, setFormState] = useState({
      username: 'daniel',
      email: 'test@test.com'
   })

   const onInputChange = ({target}) => {
      const {name, value} = target;

      setFormState({
         ...formState,
         [name]: value
      }) 
   }

   useEffect(() => {
      console.log('Hey');
   });

   const { username, email } = formState;
   return(
      <>
         <h1>Simple Form</h1>
         <hr />

         <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Your Name"
            value={username}
            onChange={onInputChange}
            />
         <input
            type="email"
            name="email"
            className="form-control mt-2"
            placeholder="Your Email"
            value={email}
            onChange={onInputChange}
         />
      </>
   )
}