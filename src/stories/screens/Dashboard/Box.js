/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
//Icon
import Icon from 'react-native-vector-icons/dist/FontAwesome';


//Animated
import * as Animatable from 'react-native-animatable';
//Style
import styles from "./styles";

export default class Box extends Component {

  //Constructor
  constructor(props) {
    super(props);
    this.state = {
      fontSize:60,
      active:false
    }
  }

  //Animation Three Box
  animatedFucn() {
    if (!this.state.active) {
      this.setState({
        fontSize:70,
        active:true
      })
    }else {
      this.setState({
        fontSize:60,
        active:false
      })
    }
  }

  //Render
  render() {
    const { name , number , icon , color } = this.props.infor;
    return (
      <TouchableOpacity activeOpacity={1} onPress={ () => this.animatedFucn(this.props) } style={ [styles.boxIn , {backgroundColor:color}] } >
        <Text style={styles.textTitle}>
          {name.toUpperCase()}
        </Text>
        <View style={styles.coverInfor}>
          <Icon style={styles.Icons} name={icon} size={50} color="#fff" />
          <Animatable.Text transition="fontSize" style={[{fontSize: this.state.fontSize || 60},styles.NumberBox]}>
            {number}
          </Animatable.Text>
        </View>
      </TouchableOpacity>
    );
  }
}
