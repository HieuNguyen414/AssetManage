// @flow
import React, { Component } from 'react';
import NewAsset from "../../stories/screens/NewAsset";

class NewAssetContainer extends Component {
	render() {
		return <NewAsset navigation={this.props.navigation} />;
	}
}

export default NewAssetContainer ;
