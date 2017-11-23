// @flow
import React, { Component } from 'react';
import AssetList from "../../stories/screens/AssetList";

class AssetListContainer extends Component {
	render() {
		return <AssetList navigation={this.props.navigation} />;
	}
}

export default AssetListContainer ;
