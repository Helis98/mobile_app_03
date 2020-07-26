import React from 'react';
import styled from 'styled-components';

function NavBar()
{
    // const mystyle = {
	// 	margin: 0,
	// 	marginBottom:-50,
	// 	marginTop: 5,
	// 	marginLeft: 10
    // }
    
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
	
	const gotoSignUp = async event =>
    {
        event.preventDefault();

//        alert('doIt()' + loginName.value + ' ' + loginPassword.value );

		

        try
        {    
				
                window.location.href = '/SignUp';
            
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    

    };
	
	return (
        
		<div id="Nav">
            <Cont>
                
				<input style={buttonstyle} type="submit" id="SignUpButton" class="buttons" value="Sign Up" onClick={gotoSignUp} />
            </Cont>
        </div>
    );
};

// style={mystyle}

export default NavBar;