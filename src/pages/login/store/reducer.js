import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	isWish: false,
	token:'',
	kingUuid:"",
	angelUuid:"",
	myUuid:"",
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.GET_TOKEN:
			return state.merge({
				token: action.token,
				kingUuid: action.kingUuid,
				angelUuid: action.angelUuid,
				isWish: action.isWish,
				myUuid: action.myUuid
			});
		case constants.FINISH_WRITE:
			return state.set('isWish',action.isWish)
		case constants.GET_LOCAL_TOKEN:
			return state.set('token',action.token)
		default:
			return state;
	}
}