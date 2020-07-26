import React from 'react';

import PageTitle from '../components/PageTitle';
import LogOut from '../components/Logout';
import LogCaloriesModal from '../components/LogCaloriesModal';
import Background from '../images/fitness.jpg';

var cooljazz = {
		backgroundImage: "url(" + Background + ")",
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundColor: '#f9ec5f',
		height: '100vh'
		
		
};

const LogsPage = () =>
{
	return (
        <div style={cooljazz}>
            <PageTitle />
			<LogOut />
			<LogCaloriesModal />
        </div>
    );
};

export default LogsPage;