import React from 'react';



import PageTitle from '../components/PageTitle';

import LogOut from '../components/Logout';

import LogCaloriesModal from '../components/LogCaloriesModal';

import GoToGoals from '../components/GoToGoals';

import GoToLogs from '../components/GoToLogs';

import NewDay from '../components/NewDay';

import Graph from '../components/Graph';

import Background from '../images/runner.jpeg';

import EditGoalModal from '../components/EditGoalModal';



var cooljazz = {

		backgroundImage: "url(" + Background + ")",

		backgroundPosition: 'center',

		backgroundSize: '100% 100%',

		backgroundRepeat: 'no-repeat',

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

			<EditGoalModal />

			<GoToLogs />

			

        </div>

    );

};



export default HomePage;
