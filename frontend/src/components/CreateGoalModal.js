import React, {Component, useState} from 'react';
import Modal from 'react-modal';

const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';

function CreateGoalModal()
{
	
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [message,setMessage] = useState('');

	var _ud = localStorage.getItem('user_data');
	var ud = JSON.parse(_ud);
	var userEmail = ud.Email;
	
	var calorieInput;
	var calorieBurn;
	
	const mystyle = {
		textAlign: 'center',
	}
	
	const doCreateGoals = async event =>
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
            const response = await fetch( BASE_URL + 'Goals',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            if( response.status !== 200 )
            {
                setMessage('Error When Creating Goals');
            }
            else
            {
                setMessage('Created new Goal');
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
			<button variant='primary' onClick={() => setModalIsOpen(true)}>Create Goal</button>
			<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={mystyle}>
				<h2>Create Goals</h2>
				<p>Create a Goal of how many calories you will consume per day</p>
				<div>
					<span id="inner-title">I will consume</span><br />
					<input type="text" id="Goal" placeholder="Calories" ref={(c) => calorieInput = c} /><br />
					<span id="inner-title">calories a day and burn</span><br />
					<input type="text" id="Goal2" placeholder="Calories" ref={(c) => calorieBurn = c} /><br />
					<span id="inner-title">calories a day!</span><br />
					<span id="CreateResult">{message}</span>
					<button onClick={doCreateGoals}>Create</button>
					<button onClick={() => setModalIsOpen(false)}>Cancel</button>
				</div>
				
			</Modal>
		</div>
	);
};

export default CreateGoalModal;