import api from '../../services/api';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Login(){

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    async function handleSubmit(event){
        try{
            event.preventDefault();

            const {data:token} = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value
            });
            localStorage.setItem('token', token);
            navigate('/lista-usuarios');

        } catch(error){
            console.log(error);

            alert('Erro ao fazer login.');
            console.log(error);
        }
        
    }

    return(
        <div className="mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-md w-full max-w-md">
            <h2 className = "text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

            <form className="flex flex-col gap-3" onSubmit =  {handleSubmit}>
                <input ref={emailRef} type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-nome"/>
                <input ref ={passwordRef} type="password" placeholder="Senha" className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-nome"/>
                <button type="submit" className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:underline'>Login</button>
            </form>

            <Link to="/" className='text-blue-700 hover:underline mt-4 block text-center'>Não tem uma conta? Cadastre-se</Link>

        </div>
    )
    
    
}
export default Login;