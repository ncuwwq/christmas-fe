import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {actionCreators} from './store';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Chat from './components/Chat';
import home_background from '../../statics/home_background.png';
import king_avatar from '../../statics/king_avatar.png';
import angel_avatar from '../../statics/angel_avatar.png';
import snowflake from '../../statics/snowflake.png';
import home_button from '../../statics/home_button.png';
import apple from '../../statics/apple.png';
import Alert from '../../components/alert';
import {
  KingWrapper, 
  HomeWrapper,
  AngelWrapper, 
  ToChat, 
  Avatar, 
  KingTop,
  AppleInfo,
  Info, 
  TodayTask,
  TaskBox,
} from './style';

class Home extends PureComponent {

  componentWillMount() {
    this.props.getInfoWish();
    this.props.getTodayPlan();
    this.props.getMyTask();
    this.props.getAngelName();
    this.props.getOffMsg();
	};
  

	render() {
    const {token, king_unread, angel_unread, isWish, plan, angeltasks, mytasks, comeChat, startChat, showTask, king, myWish} = this.props
    if (token===''|| isWish===false){
      return <Redirect to='/login' />
    } else {
      if (!comeChat) {
        return (
          <HomeWrapper style={{overflow:'hidden',position:'fixed',width:'100%',height:'100%',backgroundImage:'url('+ home_background +')'}}> 
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={!showTask}// default false
              flipDirection="horizontal" // horizontal or vertical
              ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
              style={{ width: '100%',height: '100%' }}// if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
            >
              <FrontSide className='front-side'>
                <KingWrapper  style={{backgroundImage:'url('+ snowflake +')'}}> 
                  <KingTop>
                    <Avatar style={{backgroundImage:'url('+ king_avatar +')'}}/>
                    <div className='avatar-info'>
                      我的国王：
                      <div className='role'>
                       {king.name}
                      </div>
                    </div>
                  </KingTop>
                  <Info>
                    <div className='wish-info'>
                      Ta的心愿:
                      <div className='wish'>{king.wish?king.wish:"Ta还未填写"}</div>                    
                    </div>
                    <TaskBox>
                      <div className='day-work'>每日任务：</div>
                      <div className='top-info'>
                      {plan}
                      </div>
                  </TaskBox>
                  <AppleInfo>
                    已收到
                    <img className='apple-icons' src={apple} alt='苹果'/>
                    {mytasks}个
                  </AppleInfo>
                  </Info>
                  <TodayTask style={this.props.kingWork?{background:'#C0C0C0'}:{backgroundImage:'url('+ home_button +')'}}
                  onClick={(e) => this.props.toDoWork('king',e)}>请求苹果</TodayTask>
                  <ToChat style={{backgroundImage:'url('+ home_button +')'}} onClick={(e) => startChat(e,'king')}>
                  <div className={king_unread?'have-msg':''}/>
                  聊一聊</ToChat>
                </KingWrapper>
              </FrontSide>
              <BackSide className='back-side'>
                <AngelWrapper  style={{backgroundImage:'url('+ snowflake +')'}}>
                  <KingTop>
                    <Avatar style={{backgroundImage:'url('+ angel_avatar +')'}}/>
                    <div className='avatar-info'>
                      我的小天使：
                      <div style={{fontSize:"1rem",margin:"0 1rem 0 0"}}>
                      {this.props.angelName===''?<div className='role'>
                       安琪儿
                      </div> :<div onClick={(e)=>this.props.showAngelName(e,this.props.angelName)} style={{backgroundImage:'url('+ home_button +')'}} className='last'>
                      查看小天使
                      </div>}            
                      </div>
                    </div>
                  </KingTop>
                  <Info>
                      <div className='wish-info'>
                        我的心愿:
                        <div className='wish'>{myWish?myWish:"我还未填写"}</div>                   
                      </div>
                    <TaskBox>
                      <div className='day-work'>每日任务：</div>
                      <div className='top-info'>
                      {plan}
                      </div>
                    </TaskBox>
                      <AppleInfo style={{padding: "0 2rem 0 0",textAlign:'right'}}>
                        Ta收到
                        <img className='apple-icons' src={apple} alt='苹果'/>
                        {angeltasks}个
                      </AppleInfo>
                  </Info>
                  <TodayTask style={this.props.angelWork?{background:'#C0C0C0'}:{backgroundImage:'url('+ home_button +')'}}
                    onClick={(e) => this.props.toDoWork('angel',e)}>给Ta苹果
                  </TodayTask>
                <ToChat style={{backgroundImage:'url('+ home_button +')'}} onClick={(e) => startChat(e,'angel')}>
                <div className={angel_unread?'have-msg':''}/>
                聊一聊</ToChat>
                </AngelWrapper>
              </BackSide>
            </Flippy>
          </HomeWrapper>
        )
      }else{
        return <Chat />
      }
    }
  };
};

const mapState = (state) => ({
  token: state.getIn(['login', 'token']),
  myUuid: state.getIn(['login', 'myUuid']),
  kingUuid: state.getIn(['login', 'kingUuid']),
  angelUuid: state.getIn(['login', 'angelUuid']),
  showTask: state.getIn(['home','showTask']),
  king: state.getIn(['home','king']),
  mytasks: state.getIn(['home','mytasks']),
  angeltasks: state.getIn(['home','angeltasks']),
  myWish: state.getIn(['home','myWish']),
  kingWork: state.getIn(['home','kingWork']),
  angelWork: state.getIn(['home','angelWork']),
  comeChat: state.getIn(['home','comeChat']),
  plan: state.getIn(['home','plan']),
  isWish: state.getIn(['login', 'isWish']),
  angelName: state.getIn(['home','angelName']),
  angel_unread: state.getIn(['home','angel_unread']),
  king_unread: state.getIn(['home','king_unread'])

});

const mapDispatch = (dispatch) => ({
  getMyTask(){
    dispatch(actionCreators.getMyTask())
  },
  getInfoWish(){
    dispatch(actionCreators.getInfoWish())
  },
  toDoWork(role,e){
    e.stopPropagation();
    dispatch(actionCreators.toWork(role))
  },
  startChat(e,torole){
    e.stopPropagation();
    dispatch(actionCreators.readMsg())
    dispatch(actionCreators.chattorole(torole))
    dispatch(actionCreators.startChat());
  },
  getTodayPlan(){
    dispatch(actionCreators.getTodayPlan())
  },
  getAngelName(){
    dispatch(actionCreators.getAngelName())
  },
  getOffMsg(){
    dispatch(actionCreators.getOffMsg())
  },
  showAngelName(e,angel){
    e.stopPropagation();
    Alert.open({
      alertTip:angel,
    });
  }
}); 

export default  connect(mapState, mapDispatch)(Home);