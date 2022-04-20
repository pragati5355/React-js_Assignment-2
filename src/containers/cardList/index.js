import DetailCard from '../../components/detailcard';
import {Button, Grid, Dialog} from '@material-ui/core';
// import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Userlist(props){

    // const navigate = useNavigate();

    const [userList, setUserList] = useState([])

    useEffect(() =>{

        let userArr = JSON.parse(localStorage.getItem("userList"))

        if(userArr){
            setUserList(userArr)
        }
    },[])

    const clearList= () =>{
        setUserList([])
        localStorage.setItem("userList", JSON.stringify([]))
    }

    return(

        <div style={{padding: "0 50px"}}>
            <Button varient="contained" color="secondary"
            style={{width: "200px", margintop: "20px" , marginBottom: "50px"}}
            onClick={()=>{clearList()}}>
                Clear User List
            </Button>

            <br/>

            {userList.length ? 
               
               <Grid container spacing={2}>
                   {userList.map(user=>{
                        return(
                            <Grid item key={user.email} xl={3} lg={3} md={4} sm={6} xs={12}>
                                <DetailCard user={user} />

                            </Grid>
                        )
                    })}
               </Grid> :
            
            <h1>No user added yet !!</h1>}

           


        </div>
    )

}

export default Userlist;
