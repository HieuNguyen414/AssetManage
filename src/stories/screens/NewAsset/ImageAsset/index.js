import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Left, Right } from 'native-base';

import styles from '../styles.js';

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

export default class ImageAsset extends Component {
  constructor(props){
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
    let img = this.state.avatarSource == null? null:
		<Image
			source={this.state.avatarSource}
			style={styles.imagePicker}
		/>

    return (
      <View>
        <View style={styles.ViewImage}>
          <Left style={{flex:3}}>
            <Text style={styles.txtChoseimage}>Touch a picture for options OR</Text>
          </Left>
          <Right>
            <TouchableOpacity style={styles.btnAddImage} onPress={this.Show.bind(this)}>
              <Text style={styles.txtAddImage}>Add new a photo</Text>
            </TouchableOpacity>
          </Right>
        </View>
        <Card>
          <CardItem style={{height:100}}>
            {img}
          </CardItem>
        </Card>
      </View>
    );
  }
}
