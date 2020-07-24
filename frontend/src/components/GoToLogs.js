import React from 'react';

function GoToLogs()
{
    const mystyle = {
		textAlign: 'center',
		margin: 0,
		marginBottom: 25,
		
	}
	
	const gotoLogs = async event =>
    {
        event.preventDefault();

        try
        {    
                window.location.href = '/Log';
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
				<input type="submit" id="gotoGoalsButton" class="buttons" value="Go To Log History" onClick={gotoLogs} />
            </form>
        </div>
    );
};



export default GoToLogs;