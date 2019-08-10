import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatHeading from './ChatHeading';
import Messages from './Messages';
import io from 'socket.io-client';
import {UNREAD_MSG,SEND_OFF_MSG, USER_CONNECTED, COMMUNITY_CHAT, MESSAGE_SENT, MESSAGE_RECIEVED } from '../../../server/Events';
import MessageInput from './MessageInput';
import { actionCreators } from '../store';

const socketUrl = "http://47.93.63.56:3231"
class Chat extends Component {
  constructor(props) {
	  super(props);	
	
	  this.state = {
      socket:null,
      user:null,
      chats:[],
      activeChat:null,
      kingUuid:this.props.kingUuid,
    };
  }

  componentWillMount(){
    this.initSocket();
  }

  componentDidMount(){
    this.state.socket.emit(USER_CONNECTED, this.props.myUuid, this.setUser);
    this.state.socket.emit(COMMUNITY_CHAT, this.resetChat)
  }
  
  initSocket = ()=>{
		const socket = io(socketUrl)
		socket.on('connect', ()=>{
			console.log("Connected");
		});
		
		this.setState({socket})
  };
  
  setUser = ({user})=>{
      this.setState({user:user})
  };

  
  resetChat = (chat)=>{
		return this.addChat(chat, true)
  }
  
  addChat = (chat, reset)=>{
    const { chats, socket } = this.state
		const newChats = reset ? [chat] : [...chats, chat]
    this.setState({chats:newChats, activeChat:reset ? chat : this.state.activeChat})
    const messageEvent = `${MESSAGE_RECIEVED}-${chat.id}`
    const send_off_msg = `${SEND_OFF_MSG}-${this.props.myUuid}`
    const unreadmsg = `${UNREAD_MSG}-${this.props.myUuid}`
    socket.on(messageEvent, this.addMessageToChat(chat.id))
    socket.on(send_off_msg, this.sendOffMsg())
    socket.on(unreadmsg, this.UnreadMsg())
	}

  sendOffMsg = () => {
    return message =>{
      this.props.sendOffMsg(message)
    }
  }

  UnreadMsg = () => {
    return message =>{
      this.props.UnreadMsg(message.toUser)
    }
  }
  
  addMessageToChat = (chatId)=>{
		return message => {
			const { chats } = this.state
			let newChats = chats.map((chat)=>{
        if(chat.id === chatId)
          chat.messages.push(message)
				return chat
      })
      this.setState({chats:newChats})
    }
  }
  
  sendMessage = (chatId, message, toUser,sender)=>{
    this.state.socket.emit(MESSAGE_SENT, {chatId, message, toUser,sender} )
  }

  render() {
    const {off_msg, myUuid, kingUuid, angelUuid, torole} = this.props
    const { user, activeChat } = this.state
    if ( activeChat ){
      activeChat.messages=activeChat.messages.concat(off_msg.toJS())
      this.props.saveOffMsg([])
    }
    return (
      <div>
        <ChatHeading  socket={this.state.socket}/>
        { 
          activeChat !== null ? (
            torole==='king' ? (
            <div>
              <Messages
              messages={activeChat.messages}
              user={user}
              kingUuid={kingUuid}
              chatRole={kingUuid}
					    />
					    <MessageInput 
					    sendMessage={
					    (message)=>{
				  	  this.sendMessage(activeChat.id, message,kingUuid,myUuid)
					    }}
              />
            </div>
            ):(
              <div>
				      <Messages 
              messages={activeChat.messages}
              user={user}
              kingUuid={kingUuid}
              chatRole={angelUuid}
					    />
					    <MessageInput 
					    sendMessage={
					    (message)=>{
				  	  this.sendMessage(activeChat.id, message, angelUuid,myUuid)
					    }}
              />
            </div>
            )
          ):
          <div> </div>
        }
      </div>
    )
  }
}


  const mapState = (state) => ({
		kingUuid: state.getIn(['login','kingUuid']),
    angelUuid: state.getIn(['login', 'angelUuid']),
    myUuid: state.getIn(['login', 'myUuid']),
    torole: state.getIn(['home','torole']),
    off_msg: state.getIn(['home','off_msg'])
  });
  
  const mapDispatch = (dispatch) => ({
    saveOffMsg(msg){
      dispatch(actionCreators.saveOffMsg(msg))
    },
    sendOffMsg(msg){
      dispatch(actionCreators.sendOffMsg(msg))
    },
    UnreadMsg(toUser){
      dispatch(actionCreators.UnreadMsg(toUser))
    }
  }); 
  
  
  export default connect(mapState, mapDispatch)(Chat);