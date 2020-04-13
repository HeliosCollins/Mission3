import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Start from './Start';
import Navbar from '../components/Navbar.js';
import Vehicle from './Vehicle.js';
import './LeasePage.css';
import Lease from '../components/Lease.js'
import Driver from './Driver.js';
import Logo from '../images/Logo.JPG';
import TextInfo from '../components/TextInfo.js';
import Prog from '../images/ProgressBar2.JPG';
import Chatbot from '../components/Chatbot.js';
class LeasePage extends Component {
	render() {
		return (
			<div>
				<img className='Logo' src = {Logo} />
				<Navbar/>
				<div className='MainBody'>
					<div className='textArea4'>
						
					</div>
					<div className="details">
						<Lease/>
						
						<Router>
			        		<div className = 'left2'>
			        		<Button variant="contained" href="./Vehicle">
			        			Back
			        		</Button>
			        		</div>
				        	<div className = "right2">
				        	<Button variant="contained" color="primary" href="./Driver">
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

export default LeasePage;