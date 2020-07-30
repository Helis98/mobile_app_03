import React, {Component, useState} from 'react';

import Modal from 'react-modal';

import styled from 'styled-components';

import "../App.css";



const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';



function EditGoalModal()

{

	

	const [modalIsOpen, setModalIsOpen] = useState(false);

	const [modalIsOpen2, setModalIsOpen2] = useState(false);

	const [message,setMessage] = useState('');

	const [oldGain,setOldGain] = useState('0');

	const [oldBurn,setOldBurn] = useState('0');

	

	var calorieInput;

	var calorieBurn;



	var calorieInputTest;

	var calorieBurnTest;

	

	const mystyle = {

		textAlign: 'center',

		margin: 0,

		marginBottom: 15,

		marginTop: 10

	}



	const LoginTitle = styled.h3`

	color:#000000;

	align-items: center;

	display: flex;

	flex-direction: column;

	justify-content: center;

	font-size:24px;

	font-family: Arial;

	font-weight: 1500;

	margin: 30px 0 0;		

`;



const LoginTitle2 = styled.p`

	color:#000000;

	align-items: center;

	display: flex;

	flex-direction: column;

	justify-content: center;

	font-size:24px;

	font-family: Arial;

	font-weight: 1500;

	margin: 5px 0 0;		

`;



const LoginButton= styled.button`

	color: #000000;

	background-color: #ffffff;

	font-weight: 800;

	font-family: Arial;

	display: center;

	flex-direction: column;

	margin: 0 41% 5px;

	align-items:center;

	border-color: #0099FF;

	border-radius: 6px;

	width: 205px;

	height:25px;

	text-align: center;		

`;



const LoginButton2= styled.button`

	color: #000000;

	background-color: #ffffff;

	font-weight: 800;

	font-family: Arial;

	display: center;

	flex-direction: column;

	margin: 0 0% 5px;

	align-items:center;

	border-color: #0D47A1;

	border-radius: 6px;

	width: 100px;

	height:25px;

	text-align: center;		

`;



const LoginInput = styled.input`

	color: #000000;

	background-color: #ffffff;

	font-weight: 800;

	font-family: Arial;

	display: center;

	flex-direction: column;

	

	align-items:center;

	border-color: #0D47A1;

	border-radius: 6px;

	width: 200px;

	height:25px;

	text-align: center;		

`;



const customStyles = {

	content: {

	  top: "50%",

	  left: "50%",

	  transform: "translate(-50%, -50%)",

	  border: "3px solid black",

	  borderRadius: "12px",

	  width: "450px",

	  maxWidth:"100%",

	  height: "400px",

	  maxHeight:"100%",

	  background: "#64B5F6",

	  overflowX:"hidden",

	  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"

	}

};



const customStyles2 = {

	content: {

	  top: "50%",

	  left: "50%",

	  transform: "translate(-50%, -50%)",

	  border: "3px solid black",

	  borderRadius: "12px",

	  width: "450px",

	  maxWidth:"100%",

	  height: "400px",

	  maxHeight:"100%",

	  background: "#2196F3",

	  overflowX:"hidden",

	  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"

	}

};



	var _ud = localStorage.getItem('user_data');

	var ud = JSON.parse(_ud);



	const getOldGoals = async event =>

	{



		event.preventDefault();

		

		var js = '{"Email":"' + ud.Email +'"}';

		

		try

		{

		



		const response2 = await fetch( BASE_URL + 'GetGoals',

					{method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

		

		

		var res2 = JSON.parse(await response2.text());



		setOldGain(res2.CaloriesGainGoal);

		setOldBurn(res2.CaloriesBurnGoal);

		

		setModalIsOpen(true);



		}

		catch(e)

        {

            alert(e.toString());

            return;

		}  



	};



	const getOldGoals2 = async event =>

	{



		event.preventDefault();

		

		var js = '{"Email":"' + ud.Email +'"}';

		

		try

		{

		



		const response2 = await fetch( BASE_URL + 'GetGoals',

					{method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

		

		

		var res2 = JSON.parse(await response2.text());



		setOldGain(res2.CaloriesGainGoal);

		setOldBurn(res2.CaloriesBurnGoal);

		

		setModalIsOpen2(true);



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



		if(calorieInput.value < 0)

		{

			setMessage('Goals Cannot be Negative');

			return;

		}



        var js2 = '{"Email":"'

			+ ud.Email

			+ '","CaloriesGainGoal":"'

            + calorieInput.value

            + '","CaloriesBurnGoal":"'

			+ oldBurn +'"}';

		

        try

        {    

            const response = await fetch(BASE_URL + 'UpdateGoal',

                {method:'POST',body:js2,headers:{'Content-Type': 'application/json'}});



            



            if( response.status !== 200 )

            {

                setMessage('Error When Handling Goals');

            }

            else

            {

				setMessage('');

				window.location.href = '/Home';

            }

        }

        catch(e)

        {

            alert(e.toString());

            return;

        }    



	};



	const doEditGoals2 = async event =>

	{

		event.preventDefault();



		if(calorieBurn.value < 0)

		{

			setMessage('Goals Cannot be Negative');

			return;

		}



        var js2 = '{"Email":"'

			+ ud.Email

			+ '","CaloriesGainGoal":"'

            + oldGain

            + '","CaloriesBurnGoal":"'

			+ calorieBurn.value +'"}';

		

        try

        {    

            const response = await fetch(BASE_URL + 'UpdateGoal',

                {method:'POST',body:js2,headers:{'Content-Type': 'application/json'}});



            



            if( response.status !== 200 )

            {

                setMessage('Error When Handling Goals');

            }

            else

            {

				setMessage('');

				window.location.href = '/Home';

            }

        }

        catch(e)

        {

            alert(e.toString());

            return;

        }    



	};

	const Cont = styled.div`
        display: flex;
        align-items: center;   
        margin: 0px 0px 0;
        justify-content:center;

	`;
	
	const buttonstyle = {
		
		backgroundColor: '#ffffff',
		border: 0,
		color: '#000000',
		borderColor: '#0D47A1',
        width: '150px',
        height: '50px',
		fontSize: '14px',
        fontFamily: 'Arial',
        fontWeight: '900'
	}

	return (

		<div style={mystyle}>

			<form style={mystyle}>

			<LoginButton variant='primary' onClick={getOldGoals}>Create/Edit Gain Goal</LoginButton>

			<LoginButton variant='primary' onClick={getOldGoals2}>Create/Edit Burn Goal</LoginButton>

			</form>

			<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} header="Delete this?" style={customStyles}>

				<LoginTitle>Create/Edit Goals</LoginTitle><br />

				<LoginTitle2>Create/Edit Your Calorie Gain Goal</LoginTitle2><br />

				<Cont>

					<form style={mystyle}>

						<LoginTitle2 id="inner-title">I will Consume</LoginTitle2><br />

						<LoginInput type="number" id="Goal" placeholder={oldGain} ref={(c) => calorieInput = c} /><br />

						

						<LoginTitle2 id="inner-title">calories a day!</LoginTitle2><br />

						

						<LoginButton2 onClick={doEditGoals}>Edit</LoginButton2><br />

						<LoginButton2 onClick={() => setModalIsOpen(false)}>Cancel</LoginButton2>

						<LoginTitle2 id="EditResult">{message}</LoginTitle2>

					</form>

				</Cont>

				

			</Modal>

			<Modal isOpen={modalIsOpen2} onRequestClose={() => setModalIsOpen2(false)} style={customStyles2}>

				<LoginTitle>Create/Edit Goals</LoginTitle><br />

				<LoginTitle2>Create/Edit Your Calorie Burn Goal</LoginTitle2><br />

				<Cont>

					<form style={mystyle}>

						<LoginTitle2 id="inner-title">I will Burn</LoginTitle2><br />

						

						<LoginInput type="number" id="Goal2" placeholder={oldBurn} ref={(c) => calorieBurn = c} /><br />

						<LoginTitle2 id="inner-title">calories a day!</LoginTitle2><br />

					

						<LoginButton2 onClick={doEditGoals2}>Edit</LoginButton2><br />

						<LoginButton2 onClick={() => setModalIsOpen2(false)}>Cancel</LoginButton2>

						<LoginTitle2 id="EditResult">{message}</LoginTitle2>

					</form>

				</Cont>

				

			</Modal>

		</div>

	);

};



export default EditGoalModal;