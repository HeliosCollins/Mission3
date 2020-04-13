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
import TextName from '../components/TextName.js';
import Vehicle from './Vehicle.js';

class VehicleTest extends Component {
	constructor(props) {
		super(props) 

	}
	render() {
		return (
			<div>
				
			</div>
		);
	}
}

export default VehicleTest;
