import './styles/global.css'
import { useState } from "react";
import { Button, Input } from "./components";
import { api, API } from "./service";
import { fmt } from "./utils/fmt";
import { Globe, Link, MapPin } from "phosphor-react";

function App() {
    const [item, setItem] = useState<API.User>()
    const [user, setUser] = useState("");

    async function handleGetUser() {
        setItem(await api.users_get(user));
    }

    return (

        <div className='bg-slate-600 flex gap-3 p-5 text-white flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[560px] shadow-lg shadow-indigo-900/25 fixed'>
            {!item ? <span>Digite um nome de usuário do Github</span> : <>
                <img className='self-center w-36 rounded-full' src={item.avatar_url} alt='Avatar do github' />
                {item.bio && <div className={"flex flex-col text-center mb-3"}>
                    Bio
                    <span className='text-slate-300'>{item.bio}</span>
                </div>}
                <div className={"flex justify-between w-full"}>
                    <span>Seguidores: {item.followers}</span>
                    <span>Seguindo: {item.following}</span>
                </div>
                <div className={"flex justify-between w-full"}>
                    <span>Repositórios: {item.public_repos}</span>
                    <span>Gists: {item.public_gists}</span>
                </div>
                <div className={"flex justify-between w-full"}>
                    {item.blog && <div className={"flex gap-1"}>
                    <Link size={24} />
                        <a className='text-emerald-400 hover:text-emerald-500' href={item.blog}>{item.blog}</a>
                    </div>}
                    {item.location && <div className={"flex gap-1"}>
                        <MapPin size={22} /><span>{item.location}</span>
                    </div>
                    }
                </div>
                <span>Criado em: {fmt.data(item.created_at)}</span>
            </>
            }
            <div className={"w-full flex flex-col gap-3"}>
                <Input value={user} onChange={setUser} placeHolder={"ReactJS"} />
                <Button onClick={handleGetUser}>Gerar card</Button>
            </div>
        </div>
    );
}

export default App;