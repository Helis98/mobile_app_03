import React from 'react';

function LogOut()
{
    const mystyle = {
		
		textAlign: 'right',
		margin: 0,
		paddingTop: 10,
		marginRight: 10
	}
	
	const mystyle2 = {
		
		textAlign: 'left',
		margin: 0,
		marginTop: -23,
		marginLeft: 10,
		paddingBottom: 10
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
        
		<div id="NavLogOut" style={{backgroundColor:'#000000'}}>
            <form style={mystyle}>
                
				<input type="submit" id="LogOutButton" class="buttons" value="Log Out" onClick={doLogOut} />
            </form>
			<form style={mystyle2}>
                
				<input type="submit" id="HomeButton" class="buttons" value="Home" onClick={gotoHome} />
            </form>
        </div>
    );
};



export default LogOut;