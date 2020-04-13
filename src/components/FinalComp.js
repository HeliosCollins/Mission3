import React, {Component} from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './FinalComp.css';



class FinalComp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedOption: ''
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
		const { selectedOption } = this.state
		return (
			<FormControl component="fieldset">
				<RadioGroup name='selectedOption' value={this.state.selectedOption}
				onChange={(e) => this.setState({selectedOption: e.target.value})}>
				<div className='comms1'>
					<FormControlLabel className='email' value="Email" control={<Radio />} label="Email" />
			        <FormControlLabel className='phone' value="Phone" control={<Radio />} label="Phone" />
		        </div>
		        </RadioGroup>
			</FormControl>
			);
	}
}
export default FinalComp;