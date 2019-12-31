import React, { Component } from 'react';
import "../Login/Login.css";
import back from '../../assets/back.PNG'; 
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//첫 화면 로그인 or 회원가입

 class Login extends Component {
    render() {
        return (    
            <Container>       
                <div>
                   <Link to="/MainLogin"><button className="log">Login</button></Link>
                   <Link to="/signup"><button className="sig">Signup</button></Link>
                   <img src={back} alt="back" className="back"/>
                  
                </div>
            </Container>
        )
    }
}
const Container = styled.div`
.back{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
`;

export default Login;