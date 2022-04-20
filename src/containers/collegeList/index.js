import {useState, useEffect} from 'react';
import './collegelist.css';
import {Grid, TextField} from '@material-ui/core';
import * as services from '../../services/services';
import CollegeTable from '../../components/collegeTable';

function Collegelist(props) {
    const [collegeList, setCollegeList] = useState([])
    const [viewType, setViewType] = useState(true)
    const [searchText, setSearch] = useState("")

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

            {collegeList.length ? <CollegeTable collegeList={collegeList} />
                : <h2>No Colleges Added Yet !</h2>}

            
        </div>
    )
}

export default Collegelist;