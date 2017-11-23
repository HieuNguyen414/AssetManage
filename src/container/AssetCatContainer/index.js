// @flow
import React, { Component } from 'react';
import AssetCategory from "../../stories/screens/AssetCategory";

class AssetCatContainer extends Component {
	render() {
		return <AssetCategory navigation={this.props.navigation} />;
	}
}

export default AssetCatContainer ;
