import React from 'react';

import PageTitle from '../components/PageTitle';
import LogOut from '../components/Logout';
import CreateGoalModal from '../components/CreateGoalModal';
import EditGoalModal from '../components/EditGoalModal';
import Background from '../images/fitness.jpg';

var cooljazz = {
		backgroundImage: "url(" + Background + ")",
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundColor: '#f9ec5f',
		height: '100vh'
		
		
};

const GoalsPage = () =>
{
	return (
        <div style={cooljazz}>
            <PageTitle />
			<LogOut />
			<CreateGoalModal />
			<EditGoalModal />
        </div>
    );
};

export default GoalsPage;