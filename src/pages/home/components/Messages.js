import React, { Component } from 'react';
import chat_avatar from '../../../statics/chat_avatar.png';
import chat_avatar_a from '../../../statics/chat_avatar_a.png';
import './chat.css';

export default class Messages extends Component {
	constructor(props) {
	  super(props);
		
		this.scrollDown = this.scrollDown.bind(this)
	}

	scrollDown(){
		const { container } = this.refs
		container.scrollTop = container.scrollHeight
	}

	componentDidMount() {
		this.scrollDown()
	}

	componentDidUpdate(prevProps, prevState) {
		this.scrollDown()
	}

	render() {
		const { messages, user, chatRole, kingUuid} = this.props
		return (
			<div id="chat" className='thread-container' ref='container'>
				<div className='thread' style={{minHeight:'100%'}}>
					{
						messages.map((mes)=>{
							if ((mes.toUser===chatRole && mes.sender===user.name)||(mes.toUser===user.name && mes.sender===chatRole))
							{
                return (
                  <div
										key={mes.id}
                    className={`message-container ${mes.sender === user.name && 'right'}`}
                  >
										<img className="avatar"
											src={mes.sender === user.name ? (mes.toUser===kingUuid ? chat_avatar_a : chat_avatar): (mes.sender===kingUuid? chat_avatar:chat_avatar_a)}
											 alt=''/>
										<div className="time">{mes.time}</div>
                    <div className="data">
                      <div className="message" style={{borderRadius:'0.5rem',fontSize:'1.2rem'}}>{mes.message}</div>
                    </div>
                  </div>
								)
							}else{return null}
						})
					}
				</div>
			</div>
		);
	}
}
