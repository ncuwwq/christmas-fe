import React, { Component } from 'react';
import './chat.css';

export default class MessageInput extends Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	message:""
	  };

	}
	
	handleSubmit = (e)=>{
		e.preventDefault()
		this.sendMessage()
		this.setState({message:""})
	}

	sendMessage = ()=>{
		this.props.sendMessage(this.state.message)

	}

	render() {
		const { message } = this.state
		return (
			<div className="message-input" style={{height:"3.18125rem"}}>
				<form 
					onSubmit={ this.handleSubmit }
					style={{height:"3.40625rem",background:'#9a2227'}}
					className="message-form">
					<input 
						id = "message"
						ref = {"messageinput"}
						type = "text"
						className = "form-control"
						value = { message }
						autoComplete = {'off'}
						style={{fontSize:"1.1rem",background:"#ffffff", height:'2.34375rem',width:'14.6875rem',margin:'auto',borderRadius:'0.8rem'}}
						onChange = {
							({target})=>{
								this.setState({message:target.value})
							}
						}
						/>
					<button
						style={{height:"2.375rem",background:"#85a362",margin:"auto",borderRadius:"0.5rem",color:"#ffffff"}}
						disabled = { message.length < 1 }
						type = "submit"
						className = "send"
						torole = {this.props.torole}
					> 发送 </button>
				</form>
			</div>
		);
	}
}
