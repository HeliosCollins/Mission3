import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import './Lease.css';
class Lease extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedOption: 'Own',
			selectedOption2: 'Personal'
		}
	}
	render() {
		return (
				<div>
					<h1> Tell us more about your vehicle. </h1>
					<h3> Do you own or lease? </h3>
					<FormControl component="fieldset">
						<RadioGroup name='lease' value={this.state.selectedOption}
						onChange={(e) => this.setState({selectedOption: e.target.value})}>
						<FormControlLabel value="Own" control={<Radio />} label="Own" />
				        <FormControlLabel value="OwnMakingPayments" control={<Radio />} label="Own - making payments" />
				        <FormControlLabel value="Lease" control={<Radio />} label="Lease" />
				        </RadioGroup>
					</FormControl>
					<h3> What do you mostly use your car for? </h3>
					<FormControl component="fieldset">
						<RadioGroup name='lease' value={this.state.selectedOption2}
						onChange={(e) => this.setState({selectedOption2: e.target.value})}>
						<FormControlLabel value="Personal" control={<Radio />} label="Personal/Commuting" />
				        <FormControlLabel value="Pleasure" control={<Radio />} label="Pleasure" />
				        <FormControlLabel value="Farm" control={<Radio />} label="Farm" />
				        <FormControlLabel value="Business" control={<Radio />} label="Business/Rideshare" />
				        </RadioGroup>
					</FormControl>
					<h3> How many Kilometers do you drive? </h3>
					<div className='kilo'>
						
							<TextField 
							onChange = {(e) => this.setState({First: e.target.value})}
						            id="outlined"
						            label="Estimated Kilometers"
						            variant="outlined"
							>
						
							</TextField>
							
						
							<TextField 
							onChange = {(e) => this.setState({First: e.target.value})}
						            id="outlined"
						            label="Frequency per year"
						            variant="outlined"
							>

							</TextField>
						
					</div>

				</div>
			);
	}
}

export default Lease;