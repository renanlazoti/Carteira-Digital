export default function Balance(props) {
    return (
        <div className="balance">
            <p>{props.data.cardname}</p>
            <p>Total Balance </p>

            <div style={
            {
                border: '1px solid black',
                width: '100%',
                height: '30px',
            }    
            }
            >

            <div style={{
                backgroundColor: 'red',
                width:`${props.data.usebalance/props.data.cardlimit*100}%`,
                height:'28px',
                transition: 'ease 1s',
            }}
            ></div>
            </div>

                <div className="valueBalance">
                <p>R$ {props.data.usebalance}</p>
                <p>R$ {props.data.cardlimit}</p>
            </div>
        </div>
    );
}