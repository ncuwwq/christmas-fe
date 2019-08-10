import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import {WriteWish,WishTop, WishButton} from '../style';
import { actionCreators } from '../store';
import wish_avatar from '../../../statics/wish_avatar.png';
import home_button from '../../../statics/home_button.png';
import { connect } from 'react-redux';
import Alert from '../../../components/alert';
import wish_snowflake from '../../../statics/wish_snowflake.png';

class Wish extends PureComponent {
	render() {
    const { isWish } = this.props;
    if (!isWish){
      return (
        <div style={{
        margin:'4.71875rem auto',
        backgroundImage:'url('+ wish_snowflake +')',backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '90% 100%',}}>
          <WishTop style={{backgroundImage:'url('+ wish_avatar +')'}}/>
          <WriteWish placeholder="写下你的圣诞心愿吧， 也许就有小天使帮你实现了呢！&#10;（不要超过44个字）"
           maxLength="44" ref={(input) => {this.wish = input}}></WriteWish>
          <WishButton style={{backgroundImage:'url('+ home_button +')'}} onClick={() => this.props.myWish(this.wish)}
          >写好了</WishButton>
        </div>     
    )
      } else {
        return <Redirect to='/' />
      }
  }
}

const mapState = (state) => ({
  isWish: state.getIn(['login', 'isWish'])
});

const mapDispatch = (dispatch) => ({
  myWish(wish) {
   let value=wish.value.replace(/\s+/g,"");
    if (value===""){
      Alert.open({
        alertTip:"不能为空",
      });
    }else {
     dispatch(actionCreators.myWish(wish.value))
    }
  }
});
  

export default connect(mapState, mapDispatch)(Wish);