import React, { useState } from 'react';
import styled from 'styled-components';


const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';



function SignUp()

{
  
	var SignUpName;

    var SignUpPassword;

    var SignUpPassword2;

	var SignUpEmail;


    const mystyle = {
		textAlign: 'center',
    }


    const [message,setMessage] = useState('');

	
    const SignupTitle = styled.h3`
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
 
    const SignupInput = styled.input`
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

    const SignupButton= styled.button`
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

	
	const doSignUp = async event =>

    {

        event.preventDefault();

        if(SignUpPassword.value !== SignUpPassword2.value)
        {
            setMessage('Password must match');
            return;
        }

		var js =  '{"Email":"'

        + SignUpEmail.value

        + '","Name":"'

        + SignUpName.value

        + '","password":"'

        + SignUpPassword.value +'"}';



        try

        {    

            const response = await fetch( BASE_URL + 'register',

                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});



            var res = JSON.parse(await response.text());



            if( response.status !== 200 )

            {

                console.log(response.status);
                setMessage('Error While Signing Up');

            }

            else

            {

                setMessage('');

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

		<div id="SignUpDiv">

			<form style={mystyle} onSubmit={doSignUp}>

                <SignupTitle id="inner-title">Sign Up</SignupTitle><br />

				<SignupInput type="email" id="SignUpEmail" placeholder="Email" ref={(c) => SignUpEmail = c} /><br />

                <SignupInput type="text" id="SignUpName" placeholder="Username" ref={(c) => SignUpName = c} /><br />

                <SignupInput type="password" id="SignUpPassword" placeholder="Password" ref={(c) => SignUpPassword = c} /><br />

                <SignupInput type="password" id="SignUpPassword" placeholder="Confirm Password" ref={(c) => SignUpPassword2 = c} /><br />

                <SignupButton type="submit" id="SignUpButton" class="buttons" value="Sign Up" onClick={doSignUp}>Sign Up</SignupButton>

            </form>

            <p style={mystyle} id="loginResult">{message}</p>

        </div>

    );

};



export default SignUp;