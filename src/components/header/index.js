import { useNavigate } from "react-router-dom";
import './header.css';


function Header(props) {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
        <div className="max-width">
            <div className="logo">
               <a href="#">React-Assignment.</a>
            </div>
            <div className="userlist" onClick={()=>{navigate("userform")}}>User-Form</div>
            <div className="userform" onClick={()=>{navigate("/userlist")}}>User-List</div>
            <div className="colleges" onClick={()=>{navigate("/colleges")}}>Colleges</div>
        </div>  
        </nav>
        

    )
}

export default Header;