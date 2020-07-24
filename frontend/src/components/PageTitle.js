import React from 'react';

function PageTitle()
{
    const mystyle = {
		textAlign: 'center',
		margin: 0,
		paddingBottom: 5,
		backgroundColor: '#ffffff'
	}
	return (
        <h1 id="title" style={mystyle}>Super Awesome Fitness App</h1>
    );
};



export default PageTitle;