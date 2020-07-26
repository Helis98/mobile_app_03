import React, { useState } from 'react';
import SendPasswordResetPage from '../pages/SendPasswordResetPage';

const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';

function SendPasswordReset()
{
    
    var loginEmail;

    const [message,setMessage] = useState('');
	
	const mystyle = {
		textAlign: 'center'
	}
	
	const DOSendPasswordReset = async event =>
    {
        event.preventDefault();

//        alert('doIt()' + loginName.value + ' ' + loginPassword.value );

		

        try
        {    
            

            

            if( false )
            {
                setMessage('Email Not Found');
            }
            else
            {
                setMessage('Sent an Email for Password Verification');
                
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
			<form onSubmit={DOSendPasswordReset} style={mystyle}>
                <span id="inner-title">Type In Your Email For Password</span><br />
                <input type="text" id="loginEmail" placeholder="Email" ref={(c) => loginEmail = c} /><br />
                <input type="submit" id="loginButton" class="buttons" value="Verify Account" onClick={DOSendPasswordReset} />
            </form>
            <span id="loginResult">{message}</span>
        </div>
    );
};

export default SendPasswordReset;