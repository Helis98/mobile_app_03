import React, {Component, useState} from 'react';

import Modal from 'react-modal';

import styled from 'styled-components';



const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';



function LogCaloriesModal()

{

	

	const [modalIsOpen, setModalIsOpen] = useState(false);

	const [modalIsOpen2, setModalIsOpen2] = useState(false);

	const [message,setMessage] = useState('');



	var _ud = localStorage.getItem('user_data');

	var ud = JSON.parse(_ud);

	

	var calorieInput = 0;

	var calorieBurn = 0;

	

	const mystyle = {

		textAlign: 'center',

		marginTop: 10,

		innerWidth: '500px'

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

	

	const doLog = async event =>

	{

		event.preventDefault();



        var js = '{"Email":"'

			+ ud.Email

			+ '","CaloriesGained":"'

            + calorieInput.value

            + '","CaloriesBurned":"'

			+ 0 +'"}';

			



        try

        {    

            const response = await fetch(BASE_URL + 'AddLogs',

                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});



            var res = JSON.parse(await response.text());



            if( response.status !== 200 )

            {

                setMessage('Error When Logging Calories');

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



	const doLog2 = async event =>

	{

		event.preventDefault();



        var js = '{"Email":"'

			+ ud.Email

			+ '","CaloriesGained":"'

            + 0

            + '","CaloriesBurned":"'

			+ calorieBurn.value +'"}';

			



        try

        {    

            const response = await fetch(BASE_URL + 'AddLogs',

                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});



            var res = JSON.parse(await response.text());



            if( response.status !== 200 )

            {

                setMessage('Error When Logging Calories');

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

	return (

		<div style={mystyle}>

			<form style={mystyle}>

			<LoginButton variant='primary' onClick={() => setModalIsOpen(true)}>Log Calories Gained</LoginButton>

			<LoginButton variant='primary' onClick={() => setModalIsOpen2(true)}>Log Calories Burned</LoginButton>

			</form>

			<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>

				<LoginTitle>Log Your Calories</LoginTitle><br />

				<LoginTitle2>Log How Many Calories You Consumed</LoginTitle2><br />

				<Cont>

					<form style={mystyle}>

					<LoginTitle2 id="inner-title">I consumed</LoginTitle2><br />

					<LoginInput type="number" id="Goal" placeholder="Calories" ref={(c) => calorieInput = c} /><br />

					<LoginTitle2 id="inner-title">calories!</LoginTitle2><br />

					

					<LoginButton2 onClick={doLog}>Log</LoginButton2><br />

					<LoginButton2 onClick={() => setModalIsOpen(false)}>Cancel</LoginButton2>

					<LoginTitle2 id="LogResult">{message}</LoginTitle2>

					</form>

				</Cont>

				

			</Modal>



			<Modal isOpen={modalIsOpen2} onRequestClose={() => setModalIsOpen2(false)} style={customStyles2}>

				<LoginTitle>Log Your Calories</LoginTitle><br />

				<LoginTitle2>Log how many calories you burned</LoginTitle2><br />

				<Cont>

					<form style={mystyle}>

					<LoginTitle2 id="inner-title">I Burned</LoginTitle2><br />

					<LoginInput type="number" id="Goal2" placeholder="Calories" ref={(c) => calorieBurn = c} /><br />

					<LoginTitle2 id="inner-title">calories!</LoginTitle2><br />

					

					<LoginButton2 onClick={doLog2}>Log</LoginButton2><br />

					<LoginButton2 onClick={() => setModalIsOpen2(false)}>Cancel</LoginButton2>

					<LoginTitle2 id="LogResult">{message}</LoginTitle2>

					</form>

				</Cont>

				

			</Modal>

		</div>

	);

};



export default LogCaloriesModal;