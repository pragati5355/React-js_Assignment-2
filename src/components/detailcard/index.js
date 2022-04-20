import {useEffect, useState} from 'react';
import {Paper , Dialog} from '@material-ui/core';
import './detailcard.css';

function DetailCard(props) {

    const [dialogOpen, setOpen] = useState(false)
    const [details, setDetails] = useState({})

    useEffect(()=>{
        // console.log("call")
        const data = props.data;
    })

    return (
        <Paper className="card-box">
            {/* {props.userList.map((e)=>{

                return(
                    <div>
                        onclick={() =>{
                        setDetails(e);
                        setOpen(true);

                    }}
                    </div>

                )
            })} */}
            <div className="card-paper">
                
                <div className="name-font card-text"> <strong>Name :</strong> {props.user.name}</div>
                <div className="name-font card-text"> <strong>Mobile :</strong> {props.user.mobile}</div>
                <div className="name-font card-text-1"> <strong>Email :</strong> {props.user.email}</div>
                <div className="name-font card-text"><strong>College :</strong>{props.user.college}</div>
                <div className="name-font card-text-2">
                    <div><strong>Bio:</strong></div>
                    <div>{props.user.bio}</div>
                </div>

                <Dialog  open={dialogOpen} onClose={()=>{setOpen(false)}}>
                <div style={{padding:"80px", width: "400px"}}>
                    <div><h2>User Details</h2></div>
                    <div><h3>{props.user.name}</h3></div>
                    <div><h3>{props.user.mobile}</h3></div>
                </div>
                </Dialog>

    
            </div>            
        </Paper>

       
    )
}

export default DetailCard;