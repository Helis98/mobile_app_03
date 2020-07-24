//import React from 'react';
import React, { useState } from 'react';

const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';

function Login()
{
    
    var loginEmail;
    var loginName;
    var loginPassword;

    const [message,setMessage] = useState('');
	
	const mystyle = {
		textAlign: 'center'
	}
	
	const doLogin = async event =>
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
            const response = await fetch(BASE_URL + '/login',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            if( response.status !== 200 )
            {
                setMessage('User/Password combination incorrect');
            }
            else
            {
                var globalUser = {Email:res.Name,Username:res.Email};
                
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

    return (
		<div id="loginDiv">
			<form onSubmit={doLogin} style={mystyle}>
                <span id="inner-title">Log In</span><br />
                <input type="text" id="loginEmail" placeholder="Email" ref={(c) => loginEmail = c} /><br />
                <input type="name" id="loginName" placeholder="Name" ref={(c) => loginName = c} /><br />
                <input type="password" id="loginPassword" placeholder="Password" ref={(c) => loginPassword = c} /><br />
                <input type="submit" id="loginButton" class="buttons" value="Log In" onClick={doLogin} />
            </form>
            <span id="loginResult">{message}</span>
        </div>
    );
};

export default Login;