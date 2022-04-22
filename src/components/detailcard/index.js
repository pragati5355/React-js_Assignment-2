import {useEffect, useState} from 'react';
import {Paper} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import './detailcard.css';

function DetailCard(props) {

    const [details, setDetails] = useState({})

    useEffect(()=>{
        // console.log("call")
        const data = props.data;
    })

    return (
        <Paper className="card-box" elevation={26} style={{borderRadius:"23px"}}>
            <div className="card-paper">
                
                <div className="name-font card-text"> <Typography>Name :</Typography> {props.user.name}</div>
                <div className="name-font card-text"> <Typography>Mobile :</Typography> {props.user.mobile}</div>
                <div className="name-font card-text"> <Typography>Email :</Typography> {props.user.email}</div>
                <div className="name-font card-text"><Typography>College :</Typography>{props.user.college}</div>
                <div className="name-font card-text">
                    <div><strong>Bio:</strong></div>
                    <div>{props.user.bio}</div>
                </div>

    
            </div>            
        </Paper>

       
    )
}

export default DetailCard;