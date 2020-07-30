import React from 'react';

import PageTitle from '../components/PageTitle';
import Confirmation from '../components/Confirmation';
import NavBar2 from '../components/NavBar2';
import Background from '../images/fitness.jpg';

var cooljazz = {
		backgroundImage: "url(" + Background + ")",
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100vh'
		
		
};

const ConfirmationPage = () =>
{
	return (
        <div style={cooljazz}>
            <PageTitle />
			<NavBar2 />
			<Confirmation />
        </div>
    );
};

export default ConfirmationPage;