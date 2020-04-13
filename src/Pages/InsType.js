import React, { Component } from 'react';
import Start from './Start.js';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Logo from '../images/Logo.JPG';
import Navbar from '../components/Navbar.js';
import Basic from '../images/Basic.JPG';
import Basic1 from '../images/Basic1.JPG';
import Minimum from '../images/Minimum.JPG';
import Minimum1 from '../images/Minimum1.JPG';
import Better from '../images/Better.JPG';
import Better1 from '../images/Better1.JPG';
import Best from '../images/Best.JPG';
import Best1 from '../images/Best1.JPG';
import './InsType.css';


class InsType extends Component {
	render () {
		return (
			<div className='Main'>
			<img className='Logo' src = {Logo} />
			<Navbar/>
			<Router>
				<div className='btns'>
					<Button className='top' href='./Start'>
						<img src={Minimum} />
					</Button>
					<Button className='top' href='./Start'>
						<img src={Basic} />
					</Button>
					
					<Button className='top' href='./Start'>
						<img src={Better} />
					</Button>
			
					<Button className='top' href='./Start'>
						<img src={Best} />
					</Button>
				</div>
				<div className='btns2'>
					<Button className='bot' href='./Start'>
						<img src={Minimum1} />
					</Button>
					<Button className='bot' href='./Start'>
						<img src={Minimum1} />
					</Button>
					<Button className='bot' href='./Start'>
						<img src={Minimum1} />
					</Button>
					<Button className='bot' href='./Start'>
						<img src={Minimum1} />
					</Button>	
				</div>
			</Router>


			</div>
			);
	}
}
export default InsType;

// <Button href='./#'>
// 						<img src={Minimum1} />
// 					</Button>
// <Button href='./#'>
// 						<img src={Basic1} />
// 					</Button>
// <Button href='./#'>
// 						<img src={Better1} />
// 					</Button>
// <Button href='./#'>
// 						<img src={Best1} />
// 					</Button>