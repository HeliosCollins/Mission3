import React, { Component } from 'react';
import Motor from '../images/MotorVehicle.JPG';
import Boat from '../images/Boat.JPG';
import House from '../images/House.JPG';
import Contents from '../images/Contents.JPG';
import Life from '../images/Life.JPG';
import Travel from '../images/Travel.JPG';
import Mechanical from '../images/Mechanical.JPG';
import Landlord from '../images/Landlord.JPG';
import Start from './Start.js';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Logo from '../images/Logo.JPG';
import Navbar from '../components/Navbar.js';
import './Home.css';
import InsType from './InsType.js';



class Home extends Component {
	render() {
		return(
			<div className='Main'>
				<img className='Logo' src = {Logo} />
				<Navbar/>
				<Router>
					<div className='btns'>
						<Button href='./InsType'>
							<img src={Motor} />
						</Button>
						<Button href='./#'>
							<img src={Boat} />
						</Button>
						<Button href='./#'>
							<img src={House} />
						</Button>
						<Button href='./#'>
							<img src={Contents} />
						</Button>
						<Button href='./#'>
							<img src={Life} />
						</Button>
						<Button href='./#'>
							<img src={Travel} />
						</Button>
						<Button href='./#'>
							<img src={Mechanical} />
						</Button>
						<Button href='./#'>
							<img src={Landlord} />
						</Button>
					</div>
				</Router>
			</div>
			);
	}
}
export default Home;