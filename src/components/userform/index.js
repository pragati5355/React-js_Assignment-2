import {TextField, Button} from '@material-ui/core';
// import { useNavigate } from 'react-router-dom';
import './userform.css';
import { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Box} from "@material-ui/core";

function Userform(props){
    
    // const navigate = useNavigate();

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [mobile , setMobile] = useState("");
    const [gender , setGender] = useState("");
    const [age , setAge] = useState("");
    const [city , setCity] = useState("");
    const [college , setcollege] = useState("");
    const [bio , setBio] = useState("");

    const setEmpty = () => {
        setName("")
        setEmail("")
        setMobile("")
        setGender("")
        setAge("")
        setCity("")
        setcollege("")
        setBio("")
    }

    const setlocalStorage = (e) => {
        let userarr = JSON.parse(localStorage.getItem("userList"))

        if(userarr)
        {
            userarr.push(e)
            localStorage.setItem("userList",JSON.stringify(userarr))
        }
        else
        {
            localStorage.setItem("userList",JSON.stringify([e]))

        }
    }

    const onSubmitBtn = () => {

        var user = {
            name: name,
            email: email,
            mobile: mobile,
            gender: gender,
            age: age,
            city: city,
            college: college,
            bio: bio
        }

        setEmpty()

        setlocalStorage(user)
        console.log(user)

        // navigate("/userlist")
    }
    
    return(

        <div className="form-container">
        <div className="User-form">
            <div>
                
                <h1 className="h1">User Details Form</h1>
             

            </div>
        </div>
        <div className="User-formBox">

                <TextField id="name" label="Name" variant="filled" 
                className="form-text" onChange={(ele)=>{setName(ele.target.value)}}></TextField>

                <TextField id="email" label="Email" variant="filled"
                className="form-text" onChange={(ele)=>{setEmail(ele.target.value)}}></TextField>

                <TextField id="mobile" label="Mobile" variant="filled"
                className="form-text" onChange={(ele)=>{setMobile(ele.target.value)}}></TextField>

                {/* <TextField id="gender" label="Gender" variant="outlined"
                className="form-text" onChange={(ele)=>{setGender(ele.target.value)}}></TextField> */}

                <Box className="form-text" variant="filled" onChange={(ele)=>{setGender(ele.target.value)}}>
                <Box className="form-text">
                    Gender : 
                </Box>
                <Box>
                    <FormControl component="fieldset">
                
                        <RadioGroup {...props.input} {...props.rest} row aria-label="position" name="position" defaultValue="top">
                        
                            <FormControlLabel
                                value="male"
                                control={<Radio color="primary" />}
                                label="male"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="female"
                                control={<Radio color="primary" />}
                                label="female"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </FormControl>
                </Box>
                </Box>

                <TextField id="age" label="Age" variant="filled"
                className="form-text" onChange={(ele)=>{setAge(ele.target.value)}}></TextField>

                <TextField id="city" label="City" variant="filled"
                className="form-text" onChange={(ele)=>setCity(ele.target.value)}></TextField>

                <TextField id="college" label="College" variant="filled"
                className="form-text"onChange={(ele)=>{setcollege(ele.target.value)}}></TextField> 

                <TextField id="bio" label="Bio" variant="filled"
                className="form-text"onChange={(ele)=>{setBio(ele.target.value)}}></TextField> 

                <Button varient="contained" color="secondary"
                  style={{width: "200px" , 
                         marginLeft: "auto", 
                         marginRight: "auto" , 
                         marginTop: "7%" , 
                         display: "flex",
                         backgroundColor: "crimson",
                         color: "white",
                         textTransform: "uppercase",
                         boxShadow: "0px 2px 2px lightgrey",
                         borderRadius: "10px",
                         cursor: "pointer"
                        }}
                  onClick={()=>{onSubmitBtn()}}> 
                  Submit
                </Button>
            </div>
        </div>
    )
}

export default Userform;