import React from 'react';
import styled from 'styled-components';

function GoToLogs()
{
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

        try
        {    
                window.location.href = '/Logs';
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
				<LoginButton type="submit" id="gotoGoalsButton" class="buttons" value="Go To Log History" onClick={gotoLogs} >Go To Log History</LoginButton>
            </form>
        </div>
    );
};



export default GoToLogs;