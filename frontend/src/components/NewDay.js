import React from 'react';
import styled from 'styled-components';

const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';

function NewDay()
{
    
    var _ud = localStorage.getItem('user_data');
	var ud = JSON.parse(_ud);
    
    const mystyle = {
		textAlign: 'center',
		margin: 0,
		marginBottom: 25,
		
    }
    
    const LoginButton= styled.button`
	color: #000000;
	background-color: #ffffff;
	font-weight: 800;
	font-family: Arial;
	display: center;
	flex-direction: column;
	margin: 0 41% 5px;
	align-items:center;
	border-color: #0099FF;
	border-radius: 6px;
	width: 205px;
	height:25px;
	text-align: center;		
`;
	
	const gotoLogs = async event =>
    {
        event.preventDefault();

        var js = '{"Email":"' + ud.Email +'"}';

        try
        {    
            const response = await fetch(BASE_URL + 'AddTempLogs',
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            window.location.href = '/Home';
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    

    };
	
	return (
        
		<div id="NavLogs">
            <form style={mystyle}>
				<LoginButton type="submit" id="gotoGoalsButton" class="buttons" value="New Day" onClick={gotoLogs} >End Day</LoginButton>
            </form>
        </div>
    );
};



export default NewDay;