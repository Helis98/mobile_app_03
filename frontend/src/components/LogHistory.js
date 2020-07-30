import React, {useState} from 'react';
import styled from 'styled-components';

const BASE_URL = 'https://fitnessgroup3.herokuapp.com/';


function LogHistory()
{
    
    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    
    var CalorieGainLog;
    var CalorieBurnLog;
    var CalorieTotalLog;
    
    const initArray = [
        {
            CaloriesGained: 0, 
            CaloriesBurned: 0,
            _id: 0,
            DateCreation: 0
        }
    ]
    var tempLogArray = initArray;

    const [message,setMessage] = useState('');
    const [GainLog,setGainLog] = useState('0');
    const [BurnLog,setBurnLog] = useState('0');
    const [TotalLog,setTotalLog] = useState('0');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [LogArray,setLogArray] = useState([]);

    const LogCard= styled.p`
        color: #000000;
        background-color: #ffffff;
        font-weight: 800;
        font-family: Arial;
        display: flex;
        marginLeft: 10px
        flex-direction: column;
        margin: 25px 0 0;
        font-size: 20px;
        align-items:center;
        border-color: #0099FF;
        border-radius: 15px;
        width: 850px;
        height:30px;
        text-align: center;
        border-style:solid;
    `;

    const LoginTitle = styled.h3`
        color:#000000;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size:28px;
        font-family: Arial;
        font-weight: 1500;
        margin: 50px 0 0px -10px;		
    `;
    
    const getLogHistory = async event =>{
        
        
        
        if(!ud.Email)
        {
            return;
        }
        else
        {
            var js = '{"Email":"' + ud.Email +'"}';
            try
		    {
		

		    const response = await fetch( BASE_URL + 'GetLogs',
					    {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
		
		
            var res = JSON.parse(await response.text());
        
            CalorieGainLog = res.TempGained;
            CalorieBurnLog = res.TempBurned;
            CalorieTotalLog = CalorieGainLog - CalorieBurnLog;
            
            if(!res.logs)
            {
                setMessage('No Previous Logs');
            }
            else
            {
            
                setLogArray(res.logs);
            
            }

            setGainLog(CalorieGainLog);
            setBurnLog(CalorieBurnLog);
            setTotalLog(CalorieTotalLog);

		    }
		    catch(e)
            {
                
                return;
		    }  
        }
    };

    const names = ['Bruce', 'Clark', 'Diana'];

    const Cont = styled.div`
        display: flex;
        align-items: center;   
        margin: 0px 0px 0;
        justify-content:center;

    `;
	
    const card = {

        textAlign: 'center',
        

    }
    const card2 = {

        textAlign: 'center',
        marginLeft: '0%',
        alignItems: 'center',
        justifyContent: 'center'

    }
    getLogHistory();
    LogArray.reverse();
    
    return (
        
        <div style={card}>
            <form style={card}>
                <LoginTitle style={card}> Your Daily Log History </LoginTitle>
            </form>
            
            <form style={card}> 
                
                
                {
                    LogArray.slice(0, 7).map(Logs => <Cont> <LogCard style={card2}>You Gained {Logs.CaloriesGained} Calories and Burned {Logs.CaloriesBurned} Calories on {Logs.DateCreation[5]}
                        {Logs.DateCreation[6]}
                        /
                        {Logs.DateCreation[8]}
                        {Logs.DateCreation[9]}
                        /
                        {Logs.DateCreation[0]}
                        {Logs.DateCreation[1]}
                        {Logs.DateCreation[2]}
                        {Logs.DateCreation[3]}
                        </LogCard>
                    </Cont>)

                }
            
            
                
            </form>
            
        </div>
        
    );
    
};



export default LogHistory;