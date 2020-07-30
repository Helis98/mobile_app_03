import React, { useState } from 'react';
import styled from 'styled-components';

const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';

function Confirmation()
{
    
    var loginEmail;

    const [message,setMessage] = useState('');
	
	const mystyle = {
		textAlign: 'center'
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
	
	const VerifyAccount = async event =>
    {
        event.preventDefault();

//        alert('doIt()' + loginName.value + ' ' + loginPassword.value );

		var js = '{"verifyToken":"'
            + loginEmail.value
            + '"}';

        try
        {    
            const response = await fetch(BASE_URL + 'confirmation',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            

            if( response.status !== 200 )
            {
                setMessage('Incorrect Verification Token');
            }
            else
            {
                setMessage('Verified');
                window.location.href = '/';
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    

    };

    return (
		<div id="loginDiv">
			<form onSubmit={VerifyAccount} style={mystyle}>
                <LoginTitle>Enter Your Verification Code</LoginTitle><br />
                <LoginInput type="text" id="loginEmail" placeholder="Verification Token" ref={(c) => loginEmail = c} /><br />
                <LoginButton type="submit" id="loginButton" class="buttons" value="Verify Account" onClick={VerifyAccount} >Verify Your Account</LoginButton>
            </form>
            <span style={{textAlign:'center'}} id="loginResult">{message}</span>
        </div>
    );
};

export default Confirmation;