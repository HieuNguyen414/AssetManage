// @flow
import React, { Component } from 'react';
import QRCode from "../../stories/screens/QRCode";

class QRCodeContainer extends Component {
	render() {
		return <QRCode navigation={this.props.navigation} />;
	}
}

export default QRCodeContainer ;
