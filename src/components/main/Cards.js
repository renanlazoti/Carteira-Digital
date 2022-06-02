export default function Card(props) {

    const passarDados = (pr) =>{
        props.action(pr);
    }

    return (
        <div className="conteudo">
            <h2>Cards</h2>

        <div className="cards">
                {props.data.map((itens,ix)=>(
                    <div key={ix} onClick={() => passarDados(itens)}>
                        <h3>{itens.cardname}</h3>
                        <p>{
                            itens.cardname.substring(0,6) === "Nubank" ? 
                                <img src="../img/nubank2.png" className="nubank" />:
                                <img src="../img/mastercard.png" />   
                        }</p>
                    </div>
                ))}
        </div>
        </div>
    
    );
}