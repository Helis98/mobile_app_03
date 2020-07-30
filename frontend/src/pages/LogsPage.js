import React from 'react';

import PageTitle from '../components/PageTitle';
import LogOut from '../components/Logout';
import LogHistory from '../components/LogHistory';
import LogCaloriesModal from '../components/LogCaloriesModal';
import Background from '../images/runner.jpeg';

var cooljazz = {
		backgroundImage: "url(" + Background + ")",
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100vh'
		
		
};

const LogsPage = () =>
{
	return (
        <div style={cooljazz}>
            <PageTitle />
			<LogOut />
			<LogHistory />
        </div>
    );
};

export default LogsPage;