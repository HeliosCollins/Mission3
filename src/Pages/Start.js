import React, { Component } from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Vehicle from './Vehicle.js'
import './Start.css'
import Navbar from '../components/Navbar.js';
import Logo from '../images/Logo.JPG';
import TextInfo from '../components/TextInfo.js';
import TextSaver from '../components/TextSaver.js';
import Prog from '../images/ProgressBar1.JPG'
import TextName from '../components/TextName.js';
import VehicleTest from './VehicleTest.js';
import Chatbot from '../components/Chatbot.js';



class Start extends Component {
	constructor(props) {
		super(props)
		this.state = {
			First: ''

		}

	}

	render() {
		
		return (
			
			<div className='Main'>
			<img className='Logo' src = {Logo} />
			<Navbar/>
			
				<div className='MainBody'>
					<div className='textArea'>
						<div>
							
						</div>
					</div>
					

					<div className="details">
						<h1> Okay, Lets get you started. </h1>
						<h2> Whats your? </h2>
					
					<div className='Grid'>

						<div className="TextField">
				          <TextField
				            required
				            onChange = {(e) => this.setState({First: e.target.value})}
				            id="outlined-required"
				            label="First Names"
				            variant="outlined"
				          />
				          <TextField
				            required
				            onChange = {(e) => this.setState({Last: e.target.value})}
				            id="outlined-required"
				            label="Last Name"
				            variant="outlined"
				          />
				          <TextField
				            required
				            onChange = {(e) => this.setState({Birthdate: e.target.value})}
				            id="outlined-required"
				            label="Birthdate: dd/mm/yyyy"
				            variant="outlined"
				          />
				        </div>
				    </div>
			        <Router>
				        <div className="continue">
				        	<Button variant="contained" color="primary" href='./Vehicle'>
				        		Save and Continue
				        	</Button>
				        </div>
				    </Router>
				    <Chatbot />
				    </div>
			    	<img className='Prog' src = {Prog} />
				</div>
			</div>
			

			

		);
	}
}

export default Start;
