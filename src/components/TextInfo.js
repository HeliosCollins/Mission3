import React, { Component } from 'react';
import Start from '../Pages/Start.js';
import Vehicle from '../Pages/Vehicle.js';
import LeasePage from '../Pages/LeasePage.js';
import Driver from '../Pages/Driver.js';
import Final from '../Pages/Final.js';
import './TextInfo.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';





class TextInfo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			First: this.props.First,
			Last: this.props.Last
		}
	}
	render() {
		const useStyles = makeStyles(theme => ({
		  root: {
		    '& .MuiTextField-root': {
		      margin: theme.spacing(1),
		      width: '25ch',

		    },
		  },
		}));
		
		return (
			<div className='main'>
				<form className={useStyles.root} noValidate autoComplete="off">
				<div className='group'>
					<div className='Name'>
						<input className='insideName' type="text" name='textarea' 
							value='Name:' readonly />
						<div className='Last'>
							<input className='insideLast' type="text" name='textarea' 
								value={this.props.Last} onChange={(e) => this.setState({Last: e.target.value})} readonly/>
							{this.state.Last}
							</div>
						<div className='First'>
							<input className='insideFirst' type="text" name='textarea' 
								value={this.props.First} readonly />
						</div>
						

					</div>
				</div>


			    </form>
			    	

			</div>
			);
	}
}
export default TextInfo;