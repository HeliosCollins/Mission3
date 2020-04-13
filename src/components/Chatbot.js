import React from 'react';
import Chat from '../images/Chat.JPG';
import './Chatbot.css';
class Chatbot extends React.Component {
	render() {
		return (
			<button className='Chat'>
				<img className='Photo' src={Chat}/>
			</button>
			);
	}
}

export default Chatbot;