// @flow
import React, { Component } from 'react';
import LocationManager from "../../stories/screens/LocationManager";

class LocationManagerContainer extends Component {
	render() {
		return <LocationManager navigation={this.props.navigation} />;
	}
}

export default LocationManagerContainer ;
