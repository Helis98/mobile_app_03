import React, { useState } from 'react';

const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';

function Confirmation()
{
    
    var loginEmail;

    const [message,setMessage] = useState('');
	
	const mystyle = {
		textAlign: 'center'
	}
	
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
                setMessage('Error When Verifying');
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
                <span id="inner-title">Enter Your Verification Code</span><br />
                <input type="text" id="loginEmail" placeholder="Verification Code" ref={(c) => loginEmail = c} /><br />
                <input type="submit" id="loginButton" class="buttons" value="Verify Account" onClick={VerifyAccount} />
            </form>
            <span id="loginResult">{message}</span>
        </div>
    );
};

export default Confirmation;