import React, { Component } from 'react'
import '../Signup/signup.css';
import Main from '../../assets/Main.png';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import pot from "../../assets/pot.png";
import smartpot from"../../assets/smartpot.png";
import {Link} from "react-router-dom";
class signup extends Component {
    render() {
        return (
            <div>
                <input placeholder="User ID" className="user"></input>
                <input placeholder="Password" className="pwd" type="password"></input>
                <input placeholder="Re-enter Password" className="re" type="password"></input>
                <input placeholder="User Name" className="name"></input>
                <Link to="/Login"><button className="sign">Signup</button></Link>
                <img src={Main} alt="Main" className="img"/>
                <img src={p1} alt="p1" className="cart"/>
                <img src={p2} alt="p2" className="gr"/> 
                <img src={smartpot} alt="smartpot" className="smartpot"/>
           </div>
        )
    }
}
export default signup;