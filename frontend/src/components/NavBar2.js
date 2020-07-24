import React from 'react';

function NavBar2()
{
    const mystyle = {
		margin: 0,
		marginBottom: 100,
		marginTop: 10,
		marginLeft: 10
	}
	
	const buttonstyle = {
		
		backgroundColor: '#4caf50',
		border: 0,
		color: '#ffffff',
		padding: '15px 32px',
		fontSize: '16px'
		
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
            <form style={mystyle}>
				<input style={buttonstyle} type="submit" id="SignUpButton" class="buttons" value="Log In" onClick={gotoLogIn} />
            </form>
        </div>
    );
};



export default NavBar2;