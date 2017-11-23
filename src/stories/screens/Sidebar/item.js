/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import styles from './styles';
export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reActive:false
    }
  }

  SetActive(r) {
    this.props.ActiveLink(r);
    this.setState({
      reActive:!this.state.reActive
    })
  }
  render() {
    const {data} = this.props;
    return (
      <TouchableOpacity
				style={  data.active ? [styles.BtnName,styles.BtnNameActive] : styles.BtnName }
				onPress={ () => this.SetActive(data.route) }>
        <Image source={ data.active ? data.iconActive : data.icon } style={styles.image}/>
				<Text style={ data.active ? [styles.txtName,styles.txtnameActive] : styles.txtName }> {data.caption} </Text>
      </TouchableOpacity>
    );
  }
}
