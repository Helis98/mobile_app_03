import React from 'react';

import PageTitle from '../components/PageTitle';
import PasswordReset from '../components/PasswordReset';
import NavBar2 from '../components/NavBar2';
import Background from '../images/fitness.jpg';

var cooljazz = {
		backgroundImage: "url(" + Background + ")",
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100vh'
		
		
};

const PasswordResetPage = () =>
{
	return (
        <div style={cooljazz}>
            <PageTitle />
			<NavBar2 />
			<PasswordReset />
        </div>
    );
};

export default PasswordResetPage;