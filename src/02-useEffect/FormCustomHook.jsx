import {useForm} from '../hooks/useForm';

export const FormCustomHook = () => {

   const { onResetForm, onInputChange, username, email, password} = useForm({
      username: '',
      email: '',
      password: ''
   });

   return(
      <>
         <h1>Custom Form</h1>
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
         <input
            type="password"
            name="password"
            className="form-control mt-2"
            placeholder="Your Password"
            value={password}
            onChange={onInputChange}
         />

         <button onClick={onResetForm}className="btn btn-primary mt-2">Reset</button>
      </>
   )
}