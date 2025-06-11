import { useState } from "react";
import Card from "./Card";
import Detalhes from "./Detalhes";
import Character1 from "../assets/images/Character1.jpg"
import Character2 from "../assets/images/Character2.jpg"
import Character3 from "../assets/images/Character3.jpg"
import Character4 from "../assets/images/Character4.jpg"
import Character5 from "../assets/images/Character5.jpg"
import Character6 from "../assets/images/Character6.jpg"
export default function Galeria() {
    const [detalhe, setDetalhe] = useState(null);

    function detalhar(tela, descricao, nome) {
        setDetalhe({ tela, descricao, nome });
        document.body.style.height = "150vh"
    }

    return (
        <>
            <h1>Galeria de Personagens</h1>
            <div>
                <Card legenda="Arlequina" screen={arlequina} onClick={() => detalhar(arlequina, "Esposa do Coringa", "Arlequina")} />
                <Card legenda="Coringa" screen={coringa} onClick={() => detalhar(coringa, "Marido da Arlequina", "Coringa")} />
                <Card legenda="Homer" screen={homer} onClick={() => detalhar(homer, "Bebedor de Cerveja", "Homer")} />
                <Card legenda="Law" screen={law} onClick={() => detalhar(law, "Chora pro Luffy", "Law")} />
                <Card legenda="Mario" screen={mario} onClick={() => detalhar(mario, "Encanador Master", "Mario")} />
                <Card legenda="Zoro" screen={zoro} onClick={() => detalhar(zoro, "GPS falho", "Zoro")} />
            </div>

            {detalhe && (
                <Detalhes screen={detalhe.tela} legenda={detalhe.descricao} nome={detalhe.nome} />
            )}
        </>
    );
}