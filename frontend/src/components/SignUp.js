import React, { useState } from 'react';



const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';



function SignUp()

{

    

	var SignUpName;

    var SignUpPassword;

	var SignUpEmail;



    const [message,setMessage] = useState('');

	

	const mystyle = {

		textAlign: 'center'

	}

	

	const doSignUp = async event =>

    {

        event.preventDefault();



		var js =  '{"Email":"'

        + SignUpEmail.value

        + '","Name":"'

        + SignUpName.value

        + '","password":"'

        + SignUpPassword.value +'"}';



        try

        {    

            const response = await fetch( BASE_URL + '/register',

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

                window.location.href = '/Verify';

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

			<form onSubmit={doSignUp} style={mystyle}>

                <span id="inner-title">Sign Up</span><br />

				<input type="email" id="SignUpEmail" placeholder="Email" ref={(c) => SignUpEmail = c} /><br />

                <input type="text" id="SignUpName" placeholder="Username" ref={(c) => SignUpName = c} /><br />

                <input type="password" id="SignUpPassword" placeholder="Password" ref={(c) => SignUpPassword = c} /><br />

                <input type="submit" id="SignUpButton" class="buttons" value="Sign Up" onClick={doSignUp} />

            </form>

            <span id="loginResult">{message}</span>

        </div>

    );

};



export default SignUp;