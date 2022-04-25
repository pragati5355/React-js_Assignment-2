import {useState} from 'react';
import './collegelist.css';
import * as services from '../../services/services';
import React from 'react';
import {Switch, Grid, TextField, Typography} from '@material-ui/core';
import CollegeCard from '../../components/collegecard';
import CollegeTable from '../../components/collegeTable';

function College() {
    const [collegeList, setCollegeList] = useState([])
    const [viewTable, setViewTable] = useState(true)
    const [searchText, setSearch] = useState("")
    const [College, setCollege] = useState({})

    const callSearchCollege = () => {
        
        if(searchText) {
            services.getCollegesAPI(searchText, "")
                .then(response => {
                    setCollegeList(response.data)
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }

    const returnViewComp = () => {
        return viewTable ? <CollegeTable collegeList={collegeList} /> :
                <Grid container>
                    {collegeList.map(element => {
                        return <CollegeCard {...element} />
                    })}
                </Grid>
    }

    return (
        <div style={{padding:"30px 50px 0 50px"}}>
            <div className="clg-header">Colleges Details List</div>
    
            <div style={{marginBottom: "40px"}}>
                <TextField variant="standard" label="Search College Name" 
                    onChange={(e)=>{setSearch(e.target.value)}} 
                    style={{width: "500px"}}
                    onKeyDown={(e)=> {
                        if(e.key === "Enter") {
                            callSearchCollege()
                        }                        
                    }}
                />
            </div>

            <div>
                   <span>Card View</span>
                   <Switch 
                        checked={viewTable}
                        onChange={()=>{setViewTable(!viewTable)}}
                   />
                   <span>Table View</span>

            </div>

            {/* {
             collegeList.length ?(
                <div style={{margin:"2rem"}}>
                   { viewTable?
                    (<CollegeTable collegeList={collegeList}/>)
                    :
                    (<CollegeCard collegeList={collegeList}/>)
                   }
                </div>):
            } */}

            {
            collegeList.length ? (
                viewTable ? <CollegeTable collegeList={collegeList} /> : <>
                        <Grid container spacing={1}>
                            {collegeList.map(element => {
                                return <Grid item lg={3} md={4} sm={6}>
                                <CollegeCard {...element} onCardClick={()=>{
                                    setCollege(element);
                                }}/>
                                </Grid>
                            })}
                        </Grid>
                </> )
            : <Typography variant='h5' color="error" style={{margin:"2rem"}}>No Colleges Found.</Typography>
            }            
        </div>
    )
}

export default College;