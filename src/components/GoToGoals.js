import React from 'react';

function GoToGoals()
{
    const mystyle = {
		textAlign: 'center',
		margin: 0,
		marginBottom: 25,
		marginTop: 25
	}
	
	const gotoGoals = async event =>
    {
        event.preventDefault();

        try
        {    
                window.location.href = '/Goal';
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    

    };
	
	return (
        
		<div id="NavGoal">
            <form style={mystyle}>
				<input type="submit" id="gotoGoalsButton" class="buttons" value="Create/Edit Goals" onClick={gotoGoals} />
            </form>
        </div>
    );
};



export default GoToGoals;