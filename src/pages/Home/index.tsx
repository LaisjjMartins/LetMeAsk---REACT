import React, { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../../components/Button";

import IllustrationImg from "../../assets/images/illustration.svg";
import LogoImg from "../../assets/images/logo.svg";
import GoogleImg from "../../assets/images/google-icon.svg";

import "../../styles/auth.scss";
import { database } from "../../services/firebase";


export function Home() {
    const { signInWithGoogle, user } = useContext(AuthContext);
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();

    async function handlecreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }
        navigate('/rooms/new');
    }


    async function handleJoinRoom(event: FormEvent){
        event.preventDefault();
        if(roomCode.trim() === ''){
            return;
        }
        const roomRef = await database.ref(`/rooms/${roomCode}`).get();

        if(!roomRef.exists()){  //! => sinal de negação, ou seja, se retornar falso
            alert("Sala não existe!")
            return;
        }
        navigate(`/rooms/${roomCode}`);
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
                    <button onClick={handlecreateRoom} className="create-room">
                        <img src={GoogleImg} alt="Simbolo GoogleImg"></img>
                        Crie sua sala com o Google
                    </button>
                    <div className="separator"> ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            value={roomCode}
                            onChange={event => setRoomCode(event.target.value)} />
                        <Button >
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}