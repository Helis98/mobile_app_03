import React from 'react';
import styled from 'styled-components';

function NavBar2()
{
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
        fontWeight: '900'
    
    }

	const gotoLogIn = async event =>
    {
        event.preventDefault();

//        alert('doIt()' + loginName.value + ' ' + loginPassword.value );

		

        try
        {    
				
                window.location.href = '/';
            
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    

    };
	
	return (
        
		<div id="Nav2">
            <Cont>
				<input style={buttonstyle} type="submit" id="SignUpButton" class="buttons" value="Log In" onClick={gotoLogIn} />
            </Cont>
        </div>
    );
};



export default NavBar2;