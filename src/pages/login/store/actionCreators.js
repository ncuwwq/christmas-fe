import axios from 'axios';
import * as constants from './constants';
import Alert from '../../../components/alert';

const getToken = (result) => ({
	type: constants.GET_TOKEN,
	isWish: result.wish ? true:false,
	token: result.token,
	kingUuid: result.kingUuid,
	angelUuid: result.angelUuid,
	myUuid: result.myUuid
})

const getOutToken = (result, token) => ({
	type: constants.GET_TOKEN,
	isWish: result.wish ? true:false,
	token: token,
	kingUuid: result.kingUuid,
	angelUuid: result.angelUuid,
	myUuid: result.myUuid
})

const finshWrite = () => ({
	type: constants.FINISH_WRITE,
    isWish: true
})

export const getLocalToken = () => ({
	type: constants.GET_LOCAL_TOKEN,
    token: localStorage.getItem('token')
})

export const login = (account, password) => {
	return (dispatch) => {
		axios.post('http://47.93.63.56:8080/api/user/token',{
			user_id: account,
			password: password
		}).then((res) => {
			const result = res.data;
			if (result.status){
				axios.defaults.headers.common['Authorization'] = result.token
				localStorage.setItem('token',result.token)
				dispatch(getToken(result))
			}else {
				Alert.open({
					alertTip:result.msg,
				});
			}
		})
	}
}

export const setToken = (token) => {
	return (dispatch) => {
		axios.get('http://47.93.63.56:8080/api/user/token',{
			headers: {
				'Authorization': token,
			}
		}).then((res) => {
			const result = res.data;
			if (result.status){
				axios.defaults.headers.common['Authorization'] = token
				localStorage.setItem('token',token)
				dispatch(getOutToken(result, token))
			}
		})
	}
}

export const myWish = (wish) => {
	return (dispatch) => {
		axios.post('http://47.93.63.56:8080/api/user/wish',{
			wish: wish 
		}).then((res) => {
			const result = res.data;
			if (result.status){
				dispatch(finshWrite())
			}else {
				Alert.open({
					alertTip:result.msg,
				});
			}
		})
	}
}