import React from 'react';

const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';

function LogHistory()
{
    
    var _ud = localStorage.getItem('user_data');
	var ud = JSON.parse(_ud);
    
    const getLogHistory = async event =>{
        event.preventDefault();

        try
		{
		var js = '{"Email":"' + ud.Email +'"}';

		const response = await fetch( BASE_URL + 'GetLogs',
					{method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
		
		
        var res = JSON.parse(await response.text());
        
        

		}
		catch(e)
        {
            alert(e.toString());
            return;
		}  

    };

    const names = ['Bruce', 'Clark', 'Diana'];
	
	return (
        
        <div>
            {
                names.map(name => <p>{name}</p>)
            }
        </div>
    );
};



export default LogHistory;