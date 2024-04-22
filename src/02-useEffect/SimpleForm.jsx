import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

   const [formState, setFormState] = useState({
      username: 'daniel',
      email: 'test@test.com'
   })
   
   const { username, email } = formState;
   
   const onInputChange = ({target}) => {
      const {name, value} = target;

      setFormState({
         ...formState,
         [name]: value
      }) 
   }

   useEffect(() => {
      //console.log('formChange');
   },[formState]);

   useEffect(() => {
      //console.log('email change');
   },[email]);
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
         {
            (username === 'daniel1') && <Message />
         }
      </>
   )
}