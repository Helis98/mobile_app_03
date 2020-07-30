import React from 'react';
import styled from 'styled-components';

function PageTitle()
{
	const contained = styled.div`
		width:1280 px;
		margin: 0 auto;
		min-width:1000 px;
		.row{
			width:100%;
			display:flex;
			align-center;center;
		}
	`;

	const Title = styled.h1`
		color:#0099FF;
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size:40px;
		font-family: Arial;
		font-weight: 1500;
		margin: 0px 0 -40px;		
	`;

	// //const Signupbutton = styled.button`
	// 	color: blue;
	// 	background-color: white;
	// 	font-weight: 800;
	// 	font-family: Arial;
	// 	display: flex;
	// 	flex-direction: column;
	// 	align-items:center;
	// 	margin: 0; auto;
	// 	border: none;
	// 	border-radius: 6px;
	// 	width: 100px;
	// 	height:25px;		
	// `;

    // const mystyle = {
	// 	textAlign: 'center',
	// 	margin: 0,
	// 	paddingTop: 5,
	// 	paddingBottom: 5,
	// 	backgroundColor: '#ffffff'
	// }
	return (
		<div>
			<contained>
				<div className="row">
					<br />
					<br />
					<Title>Super Awesome Fitness App</Title>
				</div>
			</contained>
		</div>
	);
};



// background-color: #000000;

// style={mystyle}

export default PageTitle;