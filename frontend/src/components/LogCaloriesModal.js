import React, {Component, useState} from 'react';
import Modal from 'react-modal';

const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';

function LogCaloriesModal()
{
	
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [message,setMessage] = useState('');

	var _ud = localStorage.getItem('user_data');
	var ud = JSON.parse(_ud);
	
	var calorieInput;
	var calorieBurn;
	
	const mystyle = {
		textAlign: 'center',
		marginTop: 40,
		innerWidth: '500px'
	}
	
	const doLog = async event =>
	{
		event.preventDefault();

        var js = '{"Email":"'
			+ ud.Email
			+ '","CaloriesGainGoal":"'
            + calorieInput.value
            + '","CaloriesBurnGoal":"'
			+ calorieBurn.value +'"}';
			

        try
        {    
            const response = await fetch(BASE_URL + '/AddLogs',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            if( response.status !== 200 )
            {
                setMessage('Error When Logging Calories');
            }
            else
            {
                setMessage('Logged Calories');
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    

	};
	
	return (
		<div style={mystyle}>
			<button variant='primary' onClick={() => setModalIsOpen(true)}>Log Calories</button>
			<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={mystyle}>
				<h2>Log Your Calories</h2>
				<p>Log how many calories you consumed or burned</p>
				<div>
					<span id="inner-title">I consumed</span><br />
					<input type="number" id="Goal" placeholder="Calories" ref={(c) => calorieInput = c} /><br />
					<span id="inner-title">calories and/or burned</span><br />
					<input type="number" id="Goal2" placeholder="Calories" ref={(c) => calorieBurn = c} /><br />
					<span id="inner-title">calories!</span><br />
					<span id="LogResult">{message}</span>
					<button onClick={doLog}>Create</button>
					<button onClick={() => setModalIsOpen(false)}>Cancel</button>
				</div>
				
			</Modal>
		</div>
	);
};

export default LogCaloriesModal;