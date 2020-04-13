import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Start from './Start';
import './Vehicle.css'
import Navbar from '../components/Navbar.js'
import Logo from '../images/Logo.JPG';
import LeasePage from './LeasePage.js';
import CarDropDown from '../components/CarDropDown.js'
import TextInfo from '../components/TextInfo.js';
import Prog from '../images/ProgressBar2.JPG';
import Chatbot from '../components/Chatbot.js';
class Vehicle extends Component {
	constructor(props) {
		super(props) 

	}
	render() {
		return (
			<div>
			<img className='Logo' src = {Logo} />
			<Navbar/>
			<div>{this.props.First}</div>
			<div className='MainBody'>
				<div className='textArea'>
					
				</div>
				<div className="details">
					<h1> Lets add your vehicles. </h1>
					<h2> What's your vehicle? </h2>
				
				<div className = 'drop'>
					<CarDropDown/>
				</div>
				<Router>
		        		<div className = 'left'>
		        		<Button variant="contained" href="./Start">
		        			Back
		        		</Button>
		        		</div>
			        	<div className = "right">
			        	<Button variant="contained" color="primary" href="./LeasePage">
			        		Save and Continue
			        	</Button>
			        	</div>
			        
			    </Router>
			    <Chatbot />
			    </div>
			</div>
			<img className='Prog' src = {Prog} />
		</div>
		);
	}
}

export default Vehicle;
