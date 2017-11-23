// @flow
import React, { Component } from 'react';
import { connect } from "react-redux";
import Dashboard from "../../stories/screens/Dashboard";

/* @flow */

class DashboardContainer extends Component {
	render() {
		return <Dashboard navigation={this.props.navigation} />;
	}
}




export default DashboardContainer ;
