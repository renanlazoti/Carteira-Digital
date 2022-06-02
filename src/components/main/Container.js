import {useState,useEffect} from "react"
import Balance from "./Balance";
import Cards from "./Cards";
import Panel from "./Panel";
import Plans from "./Plans";
import Waitlist from "./Waitlist";
import {path} from "../../config/path";

export default function Container() {

    const [datacards,setDataCards] = useState([]);

    useEffect(() =>{
        fetch(`${path}/wallet/list/user/628fd2bf52be2b87de96128e`,{
            method: "GET",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGZkMmJmNTJiZTJiODdkZTk2MTI4ZSIsInVzZXIiOiJsYWlzYWRvY2EiLCJlbWFpbCI6ImxhaXNpbmhhLmxpbmRhQGhvdG1haWwuY29tIiwiaWF0IjoxNjU0MTkxMDE2LCJleHAiOjE2NTQzNjM4MTZ9.cFwmXUrqW1iZRJjw078bKaevspexwZeDzgy4bcARb4k"
            }
        })
        .then((result) => result.json())
        .then((data) => {
            console.log(data.payload);
            setDataCards(data.payload)
        }).catch((err) => console.error(`Error at loading api -> ${err}`));
    },[])

    const [balance, setBalance] = useState([]);

    const changeData = (content) => {
        setBalance(content);
    }

    return (
        <div className="container">
            
            <Cards data={datacards} action={changeData}/>
            <Panel data={balance}/>
            <Waitlist/>
            <Plans/>
            <Balance data={balance}/>

        </div>
    );
}