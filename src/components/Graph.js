import React from 'react';
import { Bar } from 'react-chartjs-2';

const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';

function Graph()
{
    
    var _ud = localStorage.getItem('user_data');
	var ud = JSON.parse(_ud);
    
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales for 2020',
                data: [3, 2, 2, 1, 5],
                backgroundColor: ['#e70000', '#e70000', '#e70000', '#e70000', '#e70000'],
                borderColor: '#000000'
            },
            {
                label: 'Sales for 2019',
                data: [1, 3, 2, 2, 3]
            }
        ]
    }

    const options = {
        
        title: {
            display: true,
            text: 'Calorie Tracker'
        },
        scales: {
            yAxes: [
                {
                    ticks:{
                        min: 0,
                        max: 6,
                        stepSize: 1
                    },
                    borderColor: '#000000'
                }
            ]
        },
    }

    const getOldGoals = async event =>{
        event.preventDefault();

        try
		{
		var js = '{"Email":"' + ud.Email +'"}';

		const response2 = await fetch( BASE_URL + 'GetGoals',
					{method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
		
		
        var res2 = JSON.parse(await response2.text());
        
        

		}
		catch(e)
        {
            alert(e.toString());
            return;
		}  

    };
	
	return (
        
        <div>
            <button variant='primary' onClick={getOldGoals}>Edit Goal</button>
            < Bar data={data} options={options} width={600} margin={{right: 30, left: 20}}/>
        </div>
    );
};



export default Graph;