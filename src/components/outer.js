import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionCreators} from '../pages/login/store';
import { Redirect } from 'react-router-dom';

class Outer extends Component {
    render(){       
        return <Redirect to='/login' />;         
    }
    componentWillMount(){
        this.props.setToken(this.props.match.params.token)
    }
}

const mapDispatch = (dispatch) => ({
    setToken(token){
        dispatch(actionCreators.setToken(token))
    }
}); 

export default connect(null, mapDispatch)(Outer);