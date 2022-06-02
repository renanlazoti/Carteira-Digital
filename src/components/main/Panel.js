export default function Panel(props) {

    var caminho = "./img/cartaovisa2.png";

    if (props.data.cardname == "") {
        caminho = "./img/cartaovisa2.png";
    } else if (props.data.cardname == "Nubank") {
        caminho = "./img/nubank.jpg";
    } else {
        caminho = "./img/cartaomaster2.png";
    }

    return (
        <div className="panel">
            <img src={caminho} />
            {console.log(caminho)}
        </div>
    );
} 