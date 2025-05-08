import './EscopoReduz.css'

const EscopoReduz = () => {
    function handleclick(){
        return(
            alert("handleclick")
        )
    }
    function mudaCor() {
        document.body.style.backgroundColor = "red"
      }
    return(
        <>
            <button onClick={() => console.log("Clicaste!")}>Clique</button>
            <div>
                <button onClick={() => alert("Clicaste!")} >Novo Botão</button>
            </div>
            <div>
                <button onClick={handleclick}>handleclick</button>
            </div>
            <div className="container" onClick={() => alert("container")}>
                <p>balerina capputina</p>
            </div>
            <div>
                <button onclick="mudaCor()">muda cor</button>
            </div>
        </>
    )
}

export default EscopoReduz