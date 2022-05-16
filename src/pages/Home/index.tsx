import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../../components/Button";

import IllustrationImg from "../../assets/images/illustration.svg";
import LogoImg from "../../assets/images/logo.svg";
import GoogleImg from "../../assets/images/google-icon.svg";

import "../../styles/auth.scss";


export function Home() {
    const { signInWithGoogle, user } = useContext(AuthContext);
    const navigate = useNavigate();

    async function handlecreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }
        navigate('/rooms/new');
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
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala" />
                        <Button>
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}