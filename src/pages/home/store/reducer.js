import { fromJS } from 'immutable';
import { constants } from '.';

const defaultState = fromJS({
	kingWork: true,
	angelWork: true,
	nowWork: "",
	showTask: false,
	king:{"name":"","wish":""},
	photo:"",
	myWish:"",
	comeChat: false,
	torole:'king',
	mytasks: 0,
	angeltasks: 0,
	plan: '',
	off_msg:[],
	angelName:"",
	king_unread:false,
	angel_unread:false
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.ADD_MY_TASK:
			return state.merge({
				angelWork: action.angelWork,
				kingWork: action.kingWork,
				king_unread: action.king_unread,
				angel_unread: action.angel_unread
			});
		case constants.GET_INFO:
			return state.merge({
				king: action.result.king,
				myWish: action.result.wish,
				mytasks: action.result.mytasks,
				angeltasks: action.result.angeltasks
			});
		case constants.START_CHAT:
			return state.merge({
				comeChat: true,
				king_unread: false,
				angel_unread: false
			});
		case constants.QUIT_CHAT:
			return state.merge({
				comeChat: false
			});
		case constants.CHAT_TO_ROLE:
			return state.merge({
				torole: action.role
			});
		case constants.TO_DO_WORK:
			if (action.role==='king'){
				return state.merge({
					kingWork: true,
					mytasks: action.mytasks,
					angeltasks: action.angeltasks
				})
			}
			return state.merge({
				angelWork: true,
				mytask: action.mytasks,
				angeltasks: action.angeltasks
			})
		case constants.GET_PLAN:
			return state.merge({
				plan: action.plan
			});
		case constants.SAVE_OFF_MSG:
			return state.merge({
				off_msg: fromJS(action.msg)
			});
		case constants.GET_ANGEL_NAME:
			return state.merge({
				angelName: action.angelName
			});
		default:
			return state;
	}
}