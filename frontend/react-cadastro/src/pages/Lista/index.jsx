import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function ListaUsuarios(){

    const navigate = useNavigate();
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {

        async function loadUsers(){ 

            const {
                data: {users}
            } = await api.get('/listar-usuarios', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });

            setAllUsers(users);
        }

        loadUsers();
    },[]);

    async function handleClick(){
        localStorage.removeItem('token');
        navigate('/login');
    }

    return(
        <div className="mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-md w-full max-w-md">
            <h2 className = "text-2xl font-bold mb-6 text-center text-gray-800"> Lista de Usuários</h2>
            <ul className="space-y-2">
                {allUsers.length > 0 && allUsers.map((user) => (
                    <li className =  "bg-gray-100 p-4 rouded-md hover:bg-blue-100 transition-colors duration-200" key={user.id}>
                        <p className = "font-semibold ">{user.name}</p>
                    </li>
                ))}
                <button onClick={handleClick} type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:underline">Sair</button>

            </ul>


        </div>
    )
    
    
}
export default ListaUsuarios;