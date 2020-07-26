import React, {Component, useState} from 'react';
import Modal from 'react-modal';

const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';

function EditGoalModal()
{
	
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [message,setMessage] = useState('');
	const [oldGain,setOldGain] = useState('0');
	const [oldBurn,setOldBurn] = useState('0');
	
	var calorieInput;
	var calorieBurn;
	var js;
	
	const mystyle = {
		textAlign: 'center',
		marginTop: 25
	}

	var _ud = localStorage.getItem('user_data');
	var ud = JSON.parse(_ud);

	const getOldGoals = async event =>
	{

		event.preventDefault();

		
		
		try
		{
		js = '{"Email":"' + ud.Email +'"}';

		const response2 = await fetch( BASE_URL + 'GetGoals',
					{method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
		
		
		var res2 = JSON.parse(await response2.text());

		setOldGain(res2.CalorieGainGoal);
		setOldBurn(res2.CalorieBurnGoal);
		alert(ud.Email + ' ' + res2.CalorieGainGoal + ' ' + res2.CalorieBurnGoal);
		setModalIsOpen(true);

		}
		catch(e)
        {
            alert(e.toString());
            return;
		}  

	};


	
	const doEditGoals = async event =>
	{
		event.preventDefault();

        js = '{"Email":"'
			+ ud.Email
			+ '","CaloriesGainGoal":"'
            + calorieInput.value
            + '","CaloriesBurnGoal":"'
			+ calorieBurn.value +'"}';
		
        try
        {    
            const response = await fetch(BASE_URL + 'UpdateGoal',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            

            if( response.status !== 200 )
            {
                setMessage('Error When Editing Goals');
            }
            else
            {
                setMessage('Edited Goal');
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
			<form onSubmit={getOldGoals}>
				<button variant='primary' onClick={getOldGoals}>Edit Goal</button>
			</form>
			<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={mystyle}>
				<h2>Edit Goals</h2>
				<p>Edit the Goal of how many calories you will Intake per day</p>
				<div>
					<span id="inner-title">I will consume</span><br />
					<input type="text" id="Goal" placeholder={oldGain} ref={(c) => calorieInput = c} /><br />
					<span id="inner-title">calories a day and burn</span><br />
					<input type="text" id="Goal2" placeholder={oldBurn} ref={(c) => calorieBurn = c} /><br />
					<span id="inner-title">calories a day!</span><br />
					<span id="EditResult">{message}</span>
					<button onClick={doEditGoals}>Edit</button>
					<button onClick={() => setModalIsOpen(false)}>Cancel</button>
				</div>
				
			</Modal>
		</div>
	);
};

export default EditGoalModal;