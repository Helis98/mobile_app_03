import React from 'react';
import styled from 'styled-components';

function LogOut()
{
    const mystyle = {
		
		textAlign: 'right',
		margin: 0,
		paddingTop: -10,
		marginRight: '40px'
	}
	
	const mystyle2 = {
		
		textAlign: 'left',
		margin: 0,
		marginTop: -50,
		marginLeft: '40px',
		paddingBottom: 20
    }
    const LoginButton= styled.button`
	    text-align: center;	
        background-color: #000000;
        width: 150px;
        height: 50px;
        border-color: black;
        border: none;
        color: white;
        font-size: 14px;
        font-family: Arial;
        font-weight: 900;
        display: right;
        flex-direction: column;
        justify-content: center;    
        align-items: center;	
    `;
    const LoginButton2= styled.button`
        text-align: center;	
        background-color: #000000;
        width: 150px;
        height: 50px;
        border-color: black;
        border: none;
        color: white;
        font-size: 14px;
        font-family: Arial;
        font-weight: 900;
        display: right;
        flex-direction: column;
        justify-content: center;    
        align-items: center;	
    `;

    const Cont = styled.div`
        display: flex;   
        margin: 0px 40px 0;
    `;
	
	const buttonstyle = {
		
		backgroundColor: '#000000',
		border: 0,
		color: '#ffffff',
        width: '150px',
        height: '50px',
		fontSize: '14px',
        fontFamily: 'Arial',
        fontWeight: '900',
        
    }
    
    const buttonstyle2 = {
		
		backgroundColor: '#000000',
		border: 0,
		color: '#ffffff',
        width: '150px',
        height: '50px',
		fontSize: '14px',
        fontFamily: 'Arial',
        fontWeight: '900',
        
	}

	
	const doLogOut = async event =>
    {
        event.preventDefault();

        try
        {    
            localStorage.removeItem("user_data");    
            window.location.href = '/Login';
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    

    };
	
	const gotoHome = async event =>
    {
        event.preventDefault();

        try
        {    
                window.location.href = '/Home';
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    

    };
	
	return (
        
		<div id="NavLogOut">
            <form style={mystyle}>
                <input style={buttonstyle} type="submit" id="loginButton" class="buttons" value="Log Out" onClick={doLogOut}/>
				
            </form>
			<form style={mystyle2}>
                
				<input style={buttonstyle} type="submit" id="loginButton" class="buttons" value="Home" onClick={gotoHome}/>
            </form>
        </div>
    );
};



export default LogOut;