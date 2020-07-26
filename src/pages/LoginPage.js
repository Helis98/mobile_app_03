import React from 'react';

import PageTitle from '../components/PageTitle';
import Login from '../components/Login';
import NavBar from '../components/NavBar';
import Background from '../images/fitness.jpg';

var cooljazz = {
		backgroundImage: "url(" + Background + ")",
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundColor: '#f9ec5f',
		height: '100vh'
		
		
};

const LoginPage = () =>
{
	return (
        <div style={cooljazz}>
            <PageTitle />
			<NavBar />
			<Login />
        </div>
    );
};

export default LoginPage;