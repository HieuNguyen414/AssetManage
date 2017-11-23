// @flow
import React, { Component } from 'react';
import NewLocation from "../../stories/screens/NewLocation";

class NewLocationContainer extends Component {
	render() {
		return <NewLocation navigation={this.props.navigation} />;
	}
}

export default NewLocationContainer ;
