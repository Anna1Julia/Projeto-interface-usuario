import imagem from "../assets/nature.jpg"

function Images (){

    return(
        <>
        {/* opção 1 - importando de public, podemos referenciar como se estivesse em src. 
        Obs.: Tag figure permite usar a opção de legenda figcaption */}
        <figure>
            <img src="./bridge.jpg" alt="Imagem de Ponte" />
            <figcaption>Imagem de uma ponte</figcaption>
        </figure>
        <figure>
            <img src={imagem} alt="Imagem de natureza" />
            <figcaption>Imagem da Natureza</figcaption>
        </figure>
        </>

    )
}

export default Images