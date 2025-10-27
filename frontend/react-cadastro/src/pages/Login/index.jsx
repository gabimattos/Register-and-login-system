function Login(){

    return(
        <div className="mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-md w-full max-w-md">
            <h2 className = "text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
            
            <form className="flex flex-col gap-3">
                <input type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-nome"/>
                <input type="password" placeholder="Senha" className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-nome"/>
                <button type="submit" className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:underline'>Login</button>
            </form>

        </div>
    )
    
    
}
export default Login;