import {TextField, 
        Button, 
        Grid,
        Paper,
        Radio,
        Select,
        InputLabel,
        MenuItem,
        RadioGroup,
        FormControl,
        FormLabel,
        FormControlLabel}  from '@material-ui/core';
// import { useNavigate } from 'react-router-dom';
import './userform.css';
import React,{ useState, useEffect } from 'react';
import { Box} from "@material-ui/core";
import { MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


const hobbies = [
    {label:"Cooking"},
    {lable:"Dancing"},
    {lable:"Writing"},
    {label:"Gardening"},
]





function Userform(props){
    
    // const navigate = useNavigate();

    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [gender , setGender] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [bio, setBio] = useState("");
    const [college , setCollege] = useState("");

    // const [address,setAddress]=useState("");
    // const [DoB, setDoB] = React.useState(new Date());
    
    // const [country , setCountry] = useState("");
    // const [countrydata, setCountryData]= useState([]);

    // const [college , setCollege] = useState("");
    // const [collegeList, setCollegeList] = useState([]);
    // const [listLoading, setListLoading] = useState(false);

    // const [hobbies , sethobbies] = useState("");
    // const [shortBio , setShortBio] = useState("");
    // const [longBio , setLongBio] = useState("");

    const setEmpty = () => {
        setName("")
        setEmail("")
        setMobile("")
        setGender("")
        setAge("")
        setCity("")
        setCollege("")
        setBio("")
       
    }

    // const handlehobbies = (field,value) => {
    //     switch (field) {

    //     }
    // }

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
                className="form-text"onChange={(ele)=>{setCollege(ele.target.value)}}></TextField> 

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

        // <div
        // style={{
        //     display:"flex",
        //     flexDirection:"column",
        //     alignItems:"center",
        // }}>

        //     <Grid container sx={{width:"80%",justifyContent:"center", marginTop:"7rem" }}>
        //         <Grid item xs={12} sm={12} md={12} lg={12}>
        //         <Paper elevation={23} sx={{padding: "2rem", borderRadius:"25px"}}>
        //             <form>
        //                 <Grid container spacing="1rem" style={{alignItems:"center"}}>

        //                     <TextField
        //                      fullWidth
        //                      id="name" 
        //                      label="Full Name" 
        //                      variant="outlined" 
        //                      value={name}
        //                      className="form-text" 
        //                      onChange={(ele)=>{setName(ele.target.value)}}
                            
        //                     />

        //                     <FormControl fullWidth>
        //                         <LocalizationProvider dateAdapter={AdapterDateFns}>
        //                             <DatePicker
        //                                label="Date of Birth"
        //                                inputFormat="dd/MM/yyyy"
        //                                maxDate={new Date()}
        //                                value={DoB}
        //                                onChange={(ele)=>{setDoB(ele)}}
        //                                renderInput={(params) => <TextField {...params} />}
                                       
        //                             ></DatePicker>

        //                         </LocalizationProvider>

        //                     </FormControl>

        //                     <TextField 
        //                         fullWidth
        //                         multiline
        //                         label="Address"
        //                         variant="outlined"
        //                         onChange={(ele) => {setAddress(ele.target.value)}}
        //                     />

        //                     <FormControl>
        //                         <FormLabel id="radio-buttons">Gender</FormLabel>
        //                         <RadioGroup
        //                             row
        //                             defaultValue="female"
        //                             value={gender}
        //                             name="radio-buttons"
        //                             onChange={(ele) => {setGender(ele.target.value)}}
        //                         >
        //                             <FormControlLabel 
        //                                 value="female" control={<Radio required={true} />}
        //                                 label="Female"
        //                             />

        //                             <FormControlLabel 
        //                                 value="male" control={<Radio required={true} />}
        //                                 label="Male"
        //                             />

        //                         </RadioGroup>
        //                     </FormControl>






        //                 </Grid>


        //             </form> 
        //         </Paper>
        //         </Grid>
        //     </Grid>


        // </div>




















    )
}

export default Userform;