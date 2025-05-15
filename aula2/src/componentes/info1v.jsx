import { useState } from "react"
export default function Info1v(){
    let [valor, setValor] = useState(2)

    function numeric(){
        let aux = valor**9
        setValor (aux)
    }

    return(
        <>
            <div>
                <button onClick={numeric}>Cliques {valor}</button>
            </div>
        </>
    )
}