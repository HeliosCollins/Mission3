import React, {Component} from 'react';
import Navbar from '../components/Navbar.js';
import LeasePage from './LeasePage.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DriverComp from '../components/DriverComp.js';
import TextInfo from '../components/TextInfo.js';
import './Driver.css';
import Prog from '../images/ProgressBar3.JPG';
import Logo from '../images/Logo.JPG';
import TextField from '@material-ui/core/TextField';
import Chatbot from '../components/Chatbot.js';





class Driver extends Component {
	render() {
		return (
			<div>
				<img className='Logo' src={Logo}/>
				<Navbar/>
				
				<div className='MainBody'>
					<div className='textArea2'>
							
					</div>
					<div className="details">
						<h2> Lets add your Driver </h2>
						<h3> Who will be driving the vehicle? </h3>
						<DriverComp/>
						<p></p>
						<Router>
			        		<div className = 'leftD'>
			        		<Button variant="contained" href="./LeasePage">
			        			Back
			        		</Button>
			        		</div>
				        	<div className = "rightD">
				        	<Button variant="contained" color="primary" href="./Final">
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

export default Driver;