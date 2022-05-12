import React from "react";

import IllustrationImg from "../../assets/images/illustration.svg";
import LogoImg from "../../assets/images/logo.svg";
import GoogleImg from "../../assets/images/google-icon.svg";

export function Home() {
    return (
        <div>
            <aside>
                <img src={IllustrationImg} alt="Ilustração simbolizando perguntas"></img>
                <strong>Crie sala de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={LogoImg} alt="LetmeAsk"></img>
                    <button>
                        <img src={GoogleImg} alt="Simbolo GoogleImg"></img>
                        Crie sua sala com o Google
                    </button>
                    <div> ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"></input>
                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}