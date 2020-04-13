import React, {Component} from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import './DriverComp.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class DriverComp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedView: 'Driver 1',
			gender: '',
			marital: '',
			house: '',
			education: '',
			insurance: '',
			accident: ''

		}
	}
	render() {
		const useStyles = makeStyles(theme => ({
		  formControl: {
		    marginTop: 10,
		    marginBottom: 10,
		    minWidth: 700,


		  },
		  selectEmpty: {
		    marginTop: theme.spacing(2),
		  },
		}));
		const { selectedView } = this.state
		const { gender } = this.state
		const { marital} = this.state
		const { house } = this.state
		const { education } = this.state
		const { insurance } = this.state
		const { accident } = this.state
		const DRIVERS = [
			{
				name: 'David Reddy',
			},
			{
				name: 'Alan Kan'
			}
		]
		return (
			<div className='dropdown'>
		      	<FormControl variant="outlined" className={useStyles.formControl}>
			        <Select native className='gridPos' onChange={(e) => this.setState({selectedView: e.target.value})}>
			          {DRIVERS.map(({name}) => <option value={name}>{name}</option>)}
			        </Select>
			    </FormControl>

			    <h3> Tell us more about Driver 1: </h3>

			    <h3> Gender: </h3>
		    	<FormControl component="fieldset">
					<RadioGroup name='gender' value={this.state.gender}
					onChange={(e) => this.setState({gender: e.target.value})}>
					<FormControlLabel value="Male" control={<Radio />} label="Male" />
			        <FormControlLabel value="Female" control={<Radio />} label="Female" />
			        <FormControlLabel value="Non - Binary" control={<Radio />} label="Non - Binary" />
			        </RadioGroup>
				</FormControl>

				<h3> Marital Status: </h3>
				<FormControl component="fieldset">
					<RadioGroup name='marital' value={this.state.marital}
					onChange={(e) => this.setState({marital: e.target.value})}>
					<FormControlLabel value="Single" control={<Radio />} label="Single" />
			        <FormControlLabel value="Married" control={<Radio />} label="Married" />
			        <FormControlLabel value="Divorced" control={<Radio />} label="Divorced" />
			        <FormControlLabel value="Widowed" control={<Radio />} label="Widowed" />
			        </RadioGroup>
				</FormControl>

				<h3> Own or rent your home? </h3>
				<FormControl component="fieldset">
					<RadioGroup name='house' value={this.state.house}
					onChange={(e) => this.setState({house: e.target.value})}>
					<FormControlLabel value="Own home" control={<Radio />} label="Own home" />
			        <FormControlLabel value="Rent" control={<Radio />} label="Rent" />
			        <FormControlLabel value="Other" control={<Radio />} label="Other" />
			        </RadioGroup>
				</FormControl>

				<h3> Highest level of education: </h3>
				<FormControl component="fieldset">
					<RadioGroup name='education' value={this.state.education}
					onChange={(e) => this.setState({education: e.target.value})}>
					<FormControlLabel value="Doctors Degree" control={<Radio />} label="Doctors Degree" />
			        <FormControlLabel value="Masters Degree" control={<Radio />} label="Masters Degree" />
			        <FormControlLabel value="Bachelors Degree" control={<Radio />} label="Bachelors Degree" />
			        <FormControlLabel value="High School Graduate" control={<Radio />} label="High School Graduate" />
			        <FormControlLabel value="No Education" control={<Radio />} label="No Education" />
			        </RadioGroup>
				</FormControl>

				<h3> Do you have current car insurance? </h3>
				<FormControl component="fieldset">
					<RadioGroup name='insurance' value={this.state.insurance}
					onChange={(e) => this.setState({insurance: e.target.value})}>
					<div className='ins'>
						<FormControlLabel className='yes' value="Yes" control={<Radio />} label="Yes" />
				        <FormControlLabel className='no' value="No" control={<Radio />} label="No" />
			        </div>
			        </RadioGroup>
				</FormControl>
				<h3> Have you had any accidents or tickets in the past 3 years? </h3>
				<FormControl component="fieldset">
					<RadioGroup name='accident' value={this.state.accident}
					onChange={(e) => this.setState({accident: e.target.value})}>
					<div className='ins'>
						<FormControlLabel className='yes' value="Yes" control={<Radio />} label="Yes" />
				        <FormControlLabel className='no' value="No" control={<Radio />} label="No" />
			        </div>
			        </RadioGroup>
				</FormControl>
      		</div>
			);
	}
}
export default DriverComp;