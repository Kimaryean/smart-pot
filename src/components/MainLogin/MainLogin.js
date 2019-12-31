import React, { Component } from 'react'
import "../MainLogin/MainLogin.css";
import Main from '../../assets/Main.png';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import gsm from "../../assets/gsm.png";
import pot from "../../assets/pot.png";
import { Link } from 'react-router-dom';



 class MainLogin extends Component {
    render() {
        return (
         
            
            <div className="bk">
               
                <input placeholder="ID" className="id"></input>
                <input placeholder="Password" className="pw" type="password"></input>
                <Link to="/Main"><button className="loginbtn">Login</button> </Link>
                <img src={Main} alt="Main" className="img"/>
                <img src={p1} alt="p1" className="cart"/>
                <img src={p2} alt="p2" className="gr"/>
                <img src={gsm} alt="gsm" className="gsm"/>
                <img src={pot} alt="pot" className="pot"/>
               
            
            </div>
        )
    }
}

export default MainLogin;