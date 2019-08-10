import React, { PureComponent } from 'react';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import Wish from './components/Wish';
import home_background from '../../statics/home_background.png';
import login_user from '../../statics/login_user.png';
import login_password from '../../statics/login_password .png';
import {LoginWrapper,LoginBox, Input, LoginButton} from './style';

class Login extends PureComponent {
  componentDidMount(){
    this.props.getLocalToken()
  }
	render() {
    const { token,login } = this.props;
    if ( token==='' ){
      return (
        <LoginWrapper style={{textAlign:'center',position:'fixed',width:'100%',height:document.documentElement.clientHeight,backgroundImage:'url('+ home_background +')'}}>
          <LoginBox>
            <Input placeholder='US账号' style={{backgroundPositionY: 'center',backgroundSize:'10% 60%',backgroundRepeat:'no-repeat',backgroundImage:'url('+ login_user +')'}} ref={(input) => {this.account = input}}/>
            <Input placeholder='US密码' style={{backgroundPositionY: 'center',backgroundSize:'10% 60%',backgroundRepeat:'no-repeat',backgroundImage:'url('+ login_password +')'}} ref={(input) => {this.password = input}} type='password'/>
            <LoginButton onClick={() => login(this.account, this.password)}
            >SIGN IN</LoginButton>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
       return  (
      <div style={{overflow:'auto',textAlign:'center',position:"fixed",width:'100%',height:'100%',background:'#8e090e'}}>
        {this.props.setToken()}
        <Wish />
      </div>
       )
    }
	}
}

const mapState = (state) => ({
  token: state.getIn(['login', 'token']),
})

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value));
  },
  getLocalToken(){
    dispatch(actionCreators.setToken(localStorage.getItem('token')))
  },
  setToken(){
    dispatch(actionCreators.getLocalToken())
  }
}); 

export default  connect(mapState, mapDispatch)(Login);