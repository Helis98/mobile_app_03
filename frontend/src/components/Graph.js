import React, {useState} from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';

function Graph()
{
    
    var _ud = localStorage.getItem('user_data');
	var ud = JSON.parse(_ud);
    
    var CalorieGain;
    var CalorieBurn;
    var CalorieTotal;

    var CalorieGainLog;
    var CalorieBurnLog;
    var CalorieTotalLog;

    const [GainGoal,setGainGoal] = useState('0');
    const [BurnGoal,setBurnGoal] = useState('0');
    const [TotalGoal,setTotalGoal] = useState('0');

    const [GainLog,setGainLog] = useState('0');
    const [BurnLog,setBurnLog] = useState('0');
    const [TotalLog,setTotalLog] = useState('0');

    const LoginTitle = styled.h3`
        color:#000000;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size:24px;
        font-family: Arial;
        font-weight: 1500;
        margin: 5px 0 0;		
    `;

    const getOldGoals = async event =>{
        

        var js = '{"Email":"' + ud.Email +'"}';
        
        try
		{
		
        
		const response2 = await fetch( BASE_URL + 'GetGoals',
					{method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
		
		
        var res2 = JSON.parse(await response2.text());
        
        CalorieGain = res2.CaloriesGainGoal;
        CalorieBurn = res2.CaloriesBurnGoal;
        CalorieTotal = CalorieGain - CalorieBurn;

        setGainGoal(CalorieGain);
        setBurnGoal(CalorieBurn);
        setTotalGoal(CalorieTotal);

        const response = await fetch( BASE_URL + 'GetLogs',
					{method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
		
		
        var res = JSON.parse(await response.text());

        CalorieGainLog = res.TempGained;
        CalorieBurnLog = res.TempBurned;
        CalorieTotalLog = CalorieGainLog - CalorieBurnLog;

        setGainLog(CalorieGainLog);
        setBurnLog(CalorieBurnLog);
        setTotalLog(CalorieTotalLog);

		}
		catch(e)
        {
            
            return;
		}  

    };
    
    const data = {
        labels: ['Your Calorie Tracker            '],
        datasets: [
            {
                label: 'Calorie Gain Goal',
                data: [GainGoal],
                backgroundColor: ['#FFFF99'],
                borderWidth: '3',
                borderColor: '#000000'
            },
            {
                label: 'Calories Gained Today',
                data: [GainLog],
                backgroundColor: ['#FFFF00'],
                borderWidth: '3',
                borderColor: '#000000'
            },
            {
                label: 'Calorie Burn Goal',
                data: [BurnGoal],
                backgroundColor: ['#00c1e7'],
                borderWidth: '3',
                borderColor: '#000000'
            },
            {
                label: 'Calories Burned Today',
                data: [BurnLog],
                backgroundColor: ['#0096b4'],
                borderWidth: '3',
                borderColor: '#000000'
            },
            {
                label: 'Total Goal',
                data: [TotalGoal],
                backgroundColor: ['#54e700'],
                borderWidth: '3',
                borderColor: '#000000'
            },
            {
                label: 'Total Calories Today',
                data: [TotalLog],
                backgroundColor: ['#46c100'],
                borderWidth: '3',
                borderColor: '#000000'
            }
        ]
    }

    const options = {
        
        title: {
            display: false
        },
        scales: {
            scaleLabel:{
                fontColor:'#000000',
            },
            yAxes: [
                {
                    ticks:{
                        min: 0,
                        stepSize: 100
                    },
                    borderColor: '#000000',
                    borderWidth:'3',
                    
                }
            ]
        },
    }


    getOldGoals();
    if((GainGoal < GainLog) && (BurnGoal > BurnLog))
    {
	return (
        <div>
            <form style={{marginLeft:'50px',marginRight:'50px'}}>
                < Bar data={data} options={options} width={600} margin={{right: 30, left: 20}}/>
                <LoginTitle>You Are Not On Track With Any Goals</LoginTitle><br />
            </form>
        </div>
    );
    }
    else if((BurnGoal > BurnLog) && (!(TotalGoal > TotalLog)))
    {
	return (
        <form style={{marginLeft:'50px',marginRight:'50px'}}>
                < Bar data={data} options={options} width={600} margin={{right: 30, left: 20}}/>
                <LoginTitle>You Need To Burn More Calories</LoginTitle><br />
        </form>
    );
    }
    else if((GainGoal < GainLog) && (!(TotalGoal > TotalLog)))
    {
	return (
        <div>
            <form style={{marginLeft:'50px',marginRight:'50px'}}>
                < Bar data={data} options={options} width={600} margin={{right: 30, left: 20}}/>
                <LoginTitle>You Gained Too Many Calories</LoginTitle><br />
            </form>
        </div>
    );
    }
    else
    {
	return (
        <div>
            <form style={{marginLeft:'50px',marginRight:'50px'}}>
                < Bar data={data} options={options} width={600} margin={{right: 30, left: 20}}/>
                <LoginTitle>You Are On Track</LoginTitle><br />
            </form>
        </div>
    );
    }
};



export default Graph;