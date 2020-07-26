import React from 'react';

import PageTitle from '../components/PageTitle';
import SendPasswordReset from '../components/SendPasswordReset';
import NavBar2 from '../components/NavBar2';
import Background from '../images/fitness.jpg';

var cooljazz = {
		backgroundImage: "url(" + Background + ")",
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundColor: '#f9ec5f',
		height: '100vh'
		
		
};

const SendPasswordResetPage = () =>
{
	return (
        <div style={cooljazz}>
            <PageTitle />
			<NavBar2 />
			<SendPasswordReset />
        </div>
    );
};

export default SendPasswordResetPage;