import {useEffect} from 'react';
import {Paper} from '@material-ui/core';
import '../Collegedetailcard/collegedetailcard.css';
import { Typography } from '@mui/material';

function DetailCard(props) {
    
   
    useEffect(()=>{
        // console.log("call")
        const data = props.data;
    })

    return (
        <Paper className="card-box" elevation={24} style={{borderRadius:"25px"}}>
            <div className="card-paper">
                <div className="name-font card-text"> <Typography variant='h6' fontSize="large" >University Name</Typography>{props.college.name}</div>
                <div className="name-font card-text"> <Typography variant='h6' fontSize="large">Country</Typography>{props.college.country}</div>
               
            </div>            
        </Paper>
    )
}

export default DetailCard;