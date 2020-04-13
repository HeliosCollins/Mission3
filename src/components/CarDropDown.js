import React from 'react';
import './drop.css';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';



class CarDropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedView: 'Toyota'
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
    const CARS = [
    	{
    		brand: 'Toyota',
    		model: ['Camry',
					'4Runner',
					'Avalon',
					'Corolla',
					'Land Cruiser'],
			year: [2000, 2001, 2003, 2004, 2005, 2006]

    	}, {
    		brand:'BMW',
    		model: [
    			'2 Series',
				'4 Series',
				'3 Series',
				'5 Series',
				'6 Series'
    		],
    		year:  [2000, 2001, 2003, 2004, 2005, 2006]

    	}, {
    		brand:'Hyundai',
    		model:[
    			'Accent',
				'Elantra',
				'Elantra GT',
				'IONIQ',
				'Palisade'
    		],
    		year:[2000, 2001, 2003, 2004, 2005, 2006]

    	}, {
    		brand:'Suzuki',
    		model:[
    			'Alto',
				'Baleno',
				'Celerio',
				'Ignis',
				'Splash'
    		],
    		year:[2000, 2001, 2003, 2004, 2005, 2006]
    	}
    ]
    

    const getModelYear = () => {
      const view = CARS.filter(({brand}) => brand === selectedView)[0]
      return (
        <div className='dropdown'>
        	<FormControl variant="outlined" className={useStyles.formControl}>
        	
	          <Select native className='gridPos'>
	            {view.model.map(m => <option>{m}</option>)}
	          </Select>
	          <Select native className='gridPos'>
	            {view.year.map(m => <option>{m}</option>)}
	          </Select>
	        </FormControl>
        </div>
      )
    }
    return (
      <div className='dropdown'>
      	<FormControl variant="outlined" className={useStyles.formControl}>
	        <Select native className='gridPos' onChange={(e) => this.setState({selectedView: e.target.value})}>
	          {CARS.map(({brand}) => <option value={brand}>{brand}</option>)}
	        </Select>
	    </FormControl>
        {getModelYear()}

      </div>
    )
  }
}
export default CarDropDown;
























// import React from "react";

// export default class MyForm extends React.Component {
//   state = {
//     name: "ben",
//     favoritePet: "",
//     rememberMe: false,
//     title: "Miss."
//   };

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   };

//   handleChangeFavoritePet = event => {
//     this.setState({ favoritePet: event.target.value });
//   };

//   handleCheck = event => {
//     this.setState({ rememberMe: event.target.checked });
//   };

//   handleSelect = event => {
//     this.setState({ title: event.target.value });
//   };

//   handleSubmit = () => {
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <div>
//         <input value={this.state.name} onChange={this.handleChange} />
//         <textarea
//           value={this.state.favoritePet}
//           onChange={this.handleChangeFavoritePet}
//         />
//         <input
//           type="checkbox"
//           checked={this.state.rememberMe}
//           onChange={this.handleCheck}
//         />
//         <div>
//           <select value={this.state.title} onChange={this.handleSelect}>
//             <option>Mr.</option>
//             <option>Miss.</option>
//             <option>Ms.</option>
//             <option>Mrs.</option>
//           </select>
//         </div>
//         <button onClick={this.handleSubmit}>submit</button>
//       </div>
//     );
//   }
// }