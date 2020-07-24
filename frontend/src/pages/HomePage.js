import React from 'react';

import PageTitle from '../components/PageTitle';
import LogOut from '../components/Logout';
import LogCaloriesModal from '../components/LogCaloriesModal';
import GoToGoals from '../components/GoToGoals';
import GoToLogs from '../components/GoToLogs';
import Graph from '../components/Graph';
import Background from '../images/fitness.jpg';

var cooljazz = {
		backgroundImage: "url(" + Background + ")",
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundColor: '#f9ec5f',
		height: '100vh'
		
		
};

const HomePage = () =>
{
	return (
        <div style={cooljazz}>
            <PageTitle />
			<LogOut />
			<Graph />
			<LogCaloriesModal />
			<GoToGoals />
			<GoToLogs />
        </div>
    );
};

export default HomePage;