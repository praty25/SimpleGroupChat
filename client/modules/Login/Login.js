import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from  'react-redux';
import { authentication } from './LoginActions';

class Login extends Component {
	constructor(props) {
		super(props)

		this.submitHandler = this.submitHandler.bind(this)
	}

	submitHandler(e){
		e.preventDefault();
		var email = ReactDOM.findDOMNode(this.refs.email).value;
		var password = ReactDOM.findDOMNode(this.refs.password).value;
		// console.log("coming in these", email,password);
		if(email && password){
			this.props.dispatch(authentication({email, password}))
		}
	}

	render() {
		return(
    	<div>
    		<form>
    			<input type="email" placeholder="email" ref="email"/>
    			<input type="password" placeholder="password" ref="password"/>
    			<input type="submit" onClick={this.submitHandler} value="Login"/>
    		</form>
    	</div>
		)
	}
}

export default connect()(Login)	