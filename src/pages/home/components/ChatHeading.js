import React, { Component } from 'react';
import {ChatTop, ChatToKing, ChatToAngel} from '../style';
import { connect } from 'react-redux';
import {LOGOUT} from '../../../server/Events';
import {actionCreators} from '../store';
import back from '../../../statics/back.png';
import top_king from '../../../statics/top_king.png';
import top__king from '../../../statics/top__king.png';
import top_angel from '../../../statics/top_angel.png';
import top__angel from '../../../statics/top__angel.png';

class ChatHeading extends Component {
	render() {
		const {torole} = this.props
		return (
			<ChatTop>
				<img onClick={() => this.props.quitChat(this.props.socket,this.props.myUuid)} className="back" src={back} alt=''/>
				<ChatToKing style={torole==='king'?{marginBottom:'0.3125rem', height:'1.75rem'}:{}} 
					src={torole==='king'? top__king:top_king} onClick={() => this.props.chattorole('king')} alt=''
				/>
				<ChatToAngel style={torole==='angel'?{marginBottom:'0.3125rem', height:'1.75rem'}:{}} 
				src={torole==='angel'?top__angel:top_angel} onClick={() => this.props.chattorole('angel')} alt=''
				/>
			</ChatTop>
		);
	}
}


const mapState = (state) => ({
 torole: state.getIn(['home', 'torole']),
 myUuid: state.getIn(['home','myUuid'])
});

const mapDispatch = (dispatch) => ({
  quitChat(socket,myUuid){
	socket.emit(LOGOUT, myUuid)
	socket.close()
	dispatch(actionCreators.getOffMsg())
	dispatch(actionCreators.quitChat())
	},
	chattorole(role){
		dispatch(actionCreators.chattorole(role))
	}
}); 

export default connect(mapState, mapDispatch)(ChatHeading);
