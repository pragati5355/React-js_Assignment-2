import {Grid} from '@material-ui/core';
import Detailcard from '../Collegedetailcard';

function CardList(props) {

    const collegeList = props.collegeList;
   

    return (
        <div>
            {collegeList.length ? 
                <Grid container spacing={2}>
                    {collegeList.map(college =>{
                        return ( 
                            <Grid item  key={college.email} xl={3} lg={3} md={4} sm={6} xs={12}>
                                <Detailcard user={college}/>
                            </Grid>
                        )
                    })}
                </Grid> : 
            <h1>There is no user added yet...!!!</h1>}
        </div>
    )
}

export default CardList;