import React, { useState } from 'react';
import styled from 'styled-components';

const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';

function PasswordReset()
{
    
    var ResetToken;
    var NewPassword;
    var NewPassword2;

    const [message,setMessage] = useState('');
    
    const mystyle = {
		textAlign: 'center',
    }

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

        if(NewPassword.value !== NewPassword2.value)
        {
            setMessage('Passwords Must Match');
            return;
        }

            var js = '{"passwordResetToken":"'
                + ResetToken.value
                + '","password":"'
                + NewPassword.value +'"}';

        try
        {    
            
            const response = await fetch(BASE_URL + 'ResetPass',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            

            if( response.status !== 200 )
            {
                setMessage('Invalid Verification Code');
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
			<form style={mystyle} onSubmit={doPasswordReset}>
                <ResetTitle id="inner-title">Type In Your Password Reset Token and New Password</ResetTitle><br />
                <ResetInput type="text" id="loginEmail" placeholder="Reset Token" ref={(c) => ResetToken = c} /><br />
                <ResetInput type="password" id="loginPassword" placeholder="New Password" ref={(c) => NewPassword = c} /><br />
                <ResetInput type="password" id="loginPassword" placeholder="Confirm Password" ref={(c) => NewPassword2 = c} /><br />
                <ResetButton type="submit" id="loginButton" class="buttons" value="Change Password" onClick={doPasswordReset}>Reset Password</ResetButton>
            </form>
            <p style={mystyle} id="loginResult">{message}</p>
        </div>
    );
};

export default PasswordReset;