/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles.js';

var ImagePicker = require('react-native-image-picker');
var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class ImagePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
			avatarSource:null,
		}
  }

  // Render Image picker
	Show(){
		ImagePicker.showImagePicker(options, (response) => {
		  if (response.didCancel) {
		  }
		  else if (response.error) {
		  }
		  else if (response.customButton) {
		  }
		  else {
		    let source = { uri: response.uri };
		    this.setState({
		      avatarSource: source
		    });
		  }
		});
	}

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.btnGellary}>
          <Icon name="ios-images-outline" size={40} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ImagePicker;
