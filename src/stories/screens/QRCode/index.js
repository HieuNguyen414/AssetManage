import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Animated } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Left, Right } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import Camera from 'react-native-camera';
import styles from './styles.js';

export default class QRCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repeat: new Animated.Value(0)
    }
  }

  componentDidMount() {
    const anim1 = Animated.timing(
      this.state.repeat,
      {
        toValue: 1,
        duration:340
      }
    );
    const anim2 = Animated.timing(
      this.state.repeat,
      {
        toValue: 0,
        duration:340
      }
    );
    const finalAnim = Animated.sequence([anim1, anim2]);
    Animated.loop(finalAnim).start();
  }

  render() {
    //repeat color
    const backgroundColor = this.state.repeat.interpolate({
      inputRange: [0, 1],
      outputRange: ['red', 'transparent']
    })
    return (
      <View style={styles.container}>
          <Camera style={styles.preview}>
            <View style={styles.Top}>
              <TouchableOpacity style={styles.btnHome} onPress={()=>{this.props.navigation.goBack()}}>
                <Icon name="ios-home-outline" size={30} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnGellary}>
                <Icon name="ios-images-outline" size={30} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnFlashOff}>
                <Image source={require('../../icon/flashoff.png')} style={styles.btnimg}/>
              </TouchableOpacity>
            </View>

              <View style={styles.rectangleContainer}>
                <View style={styles.ViewContent}>
                  <View style={styles.Left} />
                    <View style={styles.rectangle} >
                      <Image source={require('../../icon/camera.png')} style={styles.Image}>
                        <Animated.View style={{ width:240, height:1.5, backgroundColor }} />
                      </Image>
                    </View>
                  <View style={styles.Right} />
                </View>
              </View>

            <View style={styles.Bottom}>
              <Text style={styles.txtbottom}>Đặt mã vạch bên trong hình chữ nhật</Text>
              <Text style={styles.txtbottom}>ngắm để quét</Text>
            </View>
          </Camera>
      </View>
    );
  }
}
