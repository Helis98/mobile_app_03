//import React from 'react';
import React, { useState } from 'react';
import styled from 'styled-components';

const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';

function Login()
{
    
    var loginEmail;
    var loginName;
    var loginPassword;

    const [message,setMessage] = useState('');

    const mystyle = {
		textAlign: 'center',
    }
    
    const mystyle2 = {
        textAlign: 'right',
        marginRight: '40px',
        marginTop: '-50px'
	}
	
	const LoginTitle = styled.h3`
        color:#000000;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size:24px;
        font-family: Arial;
        font-weight: 1500;
        margin: 50px 0 0;		
    `;

    const LoginButton= styled.button`
        color: #000000;
        background-color: transparent;
        font-weight: 800;
        font-family: Arial;
        display: center;
        flex-direction: column;
        margin: 0 540px 5px;
        align-items:center;
        border-color: #0099FF;
        border-radius: 6px;
        width: 205px;
        height:25px;
        text-align: center;		
    `;

    const LoginInput = styled.input`
        color: #000000;
        background-color: transparent;
        font-weight: 800;
        font-family: Arial;
        display: center;
        flex-direction: column;
        margin: 0 540px 5px;
        align-items:center;
        border-color: #0099FF;
        border-radius: 6px;
        width: 200px;
        height:25px;
        text-align: center;		
    `;
    
    const ResetButton = styled.button`
        text-align: center;	
        background-color: #000000;
        width: 150px;
        height: 50px;
        border-color: black;
        border: none;
        color: white;
        font-size: 14px;
        font-family: Arial;
        font-weight: 900;
        display: right;
        flex-direction: column;
        justify-content: center;    
        align-items: center;
        
    `;

    const Cont = styled.div`
        display: flex;   
        margin: 0px 40px 0;
    `;
	
	const buttonstyle = {
		
		backgroundColor: '#000000',
		border: 0,
		color: '#ffffff',
        width: '150px',
        height: '50px',
		fontSize: '14px',
        fontFamily: 'Arial',
        fontWeight: '900'
	}

	const doLogin = async event =>
    {
        event.preventDefault();

//        alert('doIt()' + loginName.value + ' ' + loginPassword.value );

		var js = '{"Email":"'
            + loginEmail.value
            + '","password":"'
            + loginPassword.value +'"}';

        try
        {    
            const response = await fetch(BASE_URL + 'login',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            if( response.status !== 200 )
            {
                
                if(response.status === 400)
                {
                    setMessage('Invalid Password');
                }
                else if(response.status === 401)
                {
                    setMessage('User Not Created');
                }
                else if(response.status === 402)
                {
                    setMessage('Account Not Verified');
                }
                else{
                    setMessage('Unknown Error');
                }
            }
            else
            {
                var globalUser = {Email:res.Email,Username:res.Name};
                
                localStorage.setItem('user_data', JSON.stringify(globalUser));

                setMessage('');
                window.location.href = '/Home';
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    

    };

    const gotoPassReset = async event =>
    {
        event.preventDefault();

        try
        {
            window.location.href = '/sendpassreset';
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }
    };

    return (
		<div id="loginDiv">
            <form style={mystyle2} onSubmit={gotoPassReset}>
                
                <input style={buttonstyle} type="submit" id="SignUpButton" class="buttons" value="Forgot Password" onClick={gotoPassReset} />
            </form>
			<form style={mystyle} onSubmit={doLogin}>
                <LoginTitle>Login</LoginTitle><br />
                <LoginInput type="text" id="loginEmail" placeholder="Email" ref={(c) => loginEmail = c} /><br />
                
                <LoginInput type="password" id="loginPassword" placeholder="Password" ref={(c) => loginPassword = c} /><br />
                <LoginButton type="submit" id="loginButton" class="buttons" value="Log In" onClick={doLogin}>Log In</LoginButton>
            </form>
            <p style={{textAlign:'center'}} id="loginResult">{message}</p>
            
        </div>
    );
};

export default Login; 