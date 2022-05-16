import React, { useContext, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../../components/Button";

import IllustrationImg from "../../assets/images/illustration.svg";
import LogoImg from "../../assets/images/logo.svg";

import "../../styles/auth.scss";
import { database } from "../../services/firebase";

export function NewRoom() {
    const { user } = useContext(AuthContext);
    const [newRoom, setNewRoom] = useState('');

    async function CreateRoom(event: FormEvent) {
        event.preventDefault();
        if (newRoom.trim() === '') {  //trim, remove os espaço da direita ou esquerda
            return
        }

        const roomRef = database.ref('rooms'); //Criou o rooms no firebase
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        }) //jogando a informação para lá dentro
        console.log(roomRef)
    }
    return (
        <div id="page-auth">
            <aside>
                <img src={IllustrationImg} alt="Ilustração simbolizando perguntas"></img>
                <strong>Crie sala de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={LogoImg} alt="LetmeAsk"></img>
                    <h1>{user?.name}</h1> {/*user? é pq pode ser undefined*/}
                    <h2>Crie uma nova sala</h2>

                    <form onSubmit={CreateRoom}>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            value={newRoom}
                            onChange={event => setNewRoom(event.target.value)} />
                        <Button>
                            Criar sala
                        </Button>
                    </form>
                    <p> Quer entrar em uma sala existente?<Link to="/"> Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}