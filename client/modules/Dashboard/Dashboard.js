import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { sendMessage } from './DashboardActions';



class Dashboard extends Component {
	constructor(props) {
		super(props);

		

		this.submitHandler = this.submitHandler.bind(this)
	}

	submitHandler(e){
		e.preventDefault();
		var message = ReactDOM.findDOMNode(this.refs.message).value;
		console.log("coming in these", message);
		this.props.dispatch(sendMessage({message}))
	}

	render() {
		return(
    	<div>
    		<form>
    			<select>
    				<option>{this.props.groups}</option>
    			</select>
    			<input type="text" ref="message" placeholder="enter your message" />
    			<input type="submit" onClick={this.submitHandler}/>
    		</form>
    	</div>
		)
	}
}

export default connect()(Dashboard)