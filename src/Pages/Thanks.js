import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Thanks.css';
import Start from './Start.js';
import Logo from '../images/Logo.JPG';
import Prog from '../images/ProgressBar5.JPG';
import Home from './Home.js';


class Thanks extends Component {
	render () {
		return (
			<div>
				<img className='Logo' src = {Logo} />
				<Navbar/>
				<p> </p>
				<div className='details2'>
				<h1> <strong>Thank you for your submission.</strong> </h1>
				
				<p></p>

					<Router>
		        		
			        	<div className = "right3">
			        	<Button variant="contained" color="primary" href="./">
			        		Return to Home
			        	</Button>
			        	</div>
			        
				    </Router>
			    </div>
			    <img className='Prog' src={Prog}/>

			</div>
			);
	}
}
export default Thanks;