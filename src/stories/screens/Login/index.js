/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles.js';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
				<Image source={require('../../image/bg.jpg')} style={styles.BackgroundImage}>
          <View style={styles.ContainerLogo}>
  					<Image source={require('../../icon/logo.png')} style={styles.Logo}/>
  				</View>
  				<View style={styles.ContainerTxtAsset}>
  					<Text style={styles.txtNameAsset}>{'<Asset Manager />'}</Text>
  				</View>
  				<View style={styles.ContainerTxtTeam}>
  					<Text style={styles.txtNameTeam}>Hoa Lu IT Team</Text>
  				</View>
  				<View style={styles.ContainerButton}>
            <TouchableOpacity
               onPress={ () => this.props.onLogin() }>
               <View style={styles.GoogleButton}>
                 <Icon name="google-" size={37} style={{color:'white'}}/>
                 <Text style={styles.txtButton}> Sign in with Google </Text>
               </View>
            </TouchableOpacity>
  				</View>
        </Image>
      </View>
    );
  }
}
