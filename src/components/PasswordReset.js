import React, { useState } from 'react';
import styled from 'styled-components';

const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';

function PasswordReset()
{
    
    var loginEmail;
    var loginName;
    var loginPassword;

    const [message,setMessage] = useState('');
	
    const ResetTitle = styled.h3`
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
 
    const ResetInput = styled.input`
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

    const ResetButton= styled.button`
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
	
	const doPasswordReset = async event =>
    {
        event.preventDefault();

//        alert('doIt()' + loginName.value + ' ' + loginPassword.value );

            var js = '{"Email":"'
                + loginEmail.value
                + '","Name":"'
                + loginName.value
                + '","password":"'
                + loginPassword.value +'"}';

        try
        {    
            
            const response = await fetch(BASE_URL + 'ResetPass',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            

            if( response.status !== 200 )
            {
                setMessage('Did Not Reset Password');
            }
            else
            {
                setMessage('Reset Password');
                
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
			<form onSubmit={doPasswordReset}>
                <ResetTitle id="inner-title">Type In Your Info For Password Reset</ResetTitle><br />
                <ResetInput type="text" id="loginEmail" placeholder="Email" ref={(c) => loginEmail = c} /><br />
                <ResetInput type="name" id="loginName" placeholder="Name" ref={(c) => loginName = c} /><br />
                <ResetInput type="password" id="loginPassword" placeholder="Password" ref={(c) => loginPassword = c} /><br />
                <ResetButton type="submit" id="loginButton" class="buttons" value="Change Password" onClick={doPasswordReset}>Reset Password</ResetButton>
            </form>
            <span id="loginResult">{message}</span>
        </div>
    );
};

export default PasswordReset;