import { Link } from 'react-router-dom';
import { useRef } from 'react';


function Cadastro(){

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleSubmit(event){
        event.preventDefault();
        console.log(nameRef);
    }

    return(
        <div className="mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-md w-full max-w-md">
            <h2 className = "text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" placeholder="Nome" className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-nome"/>
                <input ref={emailRef} type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-nome"/>
                <input ref={passwordRef} type="password" placeholder="Senha" className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-nome"/>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:underline">Cadastrar</button>
            </form>

            <Link to="/login" className='text-blue-700 hover:underline mt-4 block text-center'>Já tem uma conta? Faça login</Link>

        </div>
    )
    
    
 }
export default Cadastro;