import axios from 'axios';
import Alert from '../../../components/alert';
import * as constants from './constants';


const addMyTask = (result) => ({
	type: constants.ADD_MY_TASK,
	kingWork: result.kingWork,
	angelWork: result.angelWork,
	king_unread: result.king_unread,
	angel_unread: result.angel_unread
});

const getInfo = (result) => ({
	type: constants.GET_INFO,
	result
});

const getPlan = (plan) =>({
	type: constants.GET_PLAN,
	plan: plan
});

const toDoWork = (role,result) => ({
  type: constants.TO_DO_WORK,
  role: role,
  mytasks: result.mytasks,
  angeltasks: result.angeltasks
});

const angelName = (angel) => ({
	type: constants.GET_ANGEL_NAME,
	angelName: angel
  });

export const chattorole = (role) => ({
	type: constants.CHAT_TO_ROLE,
	role
});

export const saveOffMsg = (off_msg) => ({
	type: constants.SAVE_OFF_MSG,
	msg: off_msg
});

export const startChat = () => ({
	type: constants.START_CHAT
});

export const quitChat = () => ({
	type: constants.QUIT_CHAT
});

export const getMyTask = () => {
	return (dispatch) => {
		axios.get('http://47.93.63.56:8080/api/task/task').then((res) => {
			const result = res.data;
			if (result.status){
				dispatch(addMyTask(result));
			}
		})
	}
};

export const getInfoWish = () => {
	return (dispatch) => {
		axios.get('http://47.93.63.56:8080/api/user/wish').then((res) => {
			const result = res.data;
			if (result.status){
        dispatch(getInfo(result.data));
			}
		})
	}
};

export const getAngelName = () => {
	return (dispatch) => {
		axios.get('http://47.93.63.56:8080/api/user/last').then((res) => {
			const result = res.data;
			if (result.status){
        		dispatch(angelName(result.angel));
			}
		})
	}
};

export const toWork = (role) => {
	return (dispatch) => {
		axios.post('http://47.93.63.56:8080/api/task/task',{
			role: role
		}).then((res) => {
			const result = res.data;
			if (result.status){
        		dispatch(toDoWork(role,result));
			}else {
				Alert.open({
					alertTip:result.msg,
				});
			}
		})
	}
};

export const getTodayPlan = () => {
	return (dispatch) => {
		axios.get('http://47.93.63.56:8080/api/task/plan').then((res) => {
			const result = res.data;
			if (result.status){
       			dispatch(getPlan(result.plan));
			}else{
				dispatch(getPlan(result.msg));
			}
		})
	}
};

export const sendOffMsg = (msg) => {
	return () => {
		axios.post('http://47.93.63.56:8080/api/msg/msg',{
			msg: msg
		}).then()
	}
};

export const getOffMsg = () => {
	return (dispatch) => {
		axios.get('http://47.93.63.56:8080/api/msg/msg').then((res)=>{
			const result = res.data;
			if (result.status){
				dispatch(saveOffMsg(result.off_msg))			
			}
		})
	}
};

export const UnreadMsg = (toUser,sender) => {
	return () => {
		axios.post('http://47.93.63.56:8080/api/msg/read',{
			toUser: toUser,
		}).then()
	}
};

export const readMsg = () => {
	return () => {
		axios.get('http://47.93.63.56:8080/api/msg/read').then()
	}
};