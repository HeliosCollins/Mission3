import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import FinalComp from '../components/FinalComp.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Thanks from './Thanks.js';
import Logo from '../images/Logo.JPG';
import TextInfo from '../components/TextInfo.js';
import Prog from '../images/ProgressBar4.JPG';
import TextField from '@material-ui/core/TextField';
import './Final.css';
import Chatbot from '../components/Chatbot.js';

class Final extends Component {
	render() {
		return (
			<div>
				<img className='Logo' src = {Logo} />
				<Navbar/>
				<div>
					<div className='textArea'>
						
					</div>
					<div className="details">
						<h2> Great! We're almost there. </h2>
						<p></p>
						<h5> Lastly how would like us to reach you witrh confirmation of your quote? </h5>
						<p></p>
						<p></p>
						<FinalComp/>
						<div className='comms'>
							<div className="phone1">
					          <TextField
					         className='phone'
					            onChange = {(e) => this.setState({Last: e.target.value})}
					            id="outlined"
					            label="Phone"
					            variant="outlined"
					          />
					         </div>
							<div className="email1">
						          <TextField
						          
						            onChange = {(e) => this.setState({First: e.target.value})}
						            id="outlined"
						            label="Email"
						            variant="outlined"
						          />
						    </div>
					    </div>
						<p></p>

						<Router>
			        		<div className = 'left2'>
			        		<Button variant="contained" href="./LeasePage">
			        			Back
			        		</Button>
			        		</div>
				        	<div className = "right2">
				        	<Button variant="contained" color="primary" href="./Thanks">
				        		Save and Continue
				        	</Button>
				        	</div>
				        
					    </Router>
					    <Chatbot />
					</div>
					<img className='Prog' src={Prog}/>
				</div>

			</div>
			);
	}
}
export default Final;