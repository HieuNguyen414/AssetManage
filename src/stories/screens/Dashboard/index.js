import React, { Component } from 'react';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Header,Text,Button,Left,Body,Right,Title , Icon} from "native-base";

//Parralax Scroll
import ParallaxScrollView from 'react-native-parallax-scroll-view';

//Component Child
import PieChartScreen from './PieChartScreen';
//Box
import Box from './Box';
//Style
import styles from "./styles";
//Import common
import HeaderCommon from '../Common/HeaderCommon';
//import Data Top Nav
import topNav from './topNav';
import {
  Image,
  View,
  Dimensions,
} from 'react-native';
const window = Dimensions.get('window');
const PARALLAX_HEADER_HEIGHT = 350;

//Data Local
const Data = [
  {
    "number":999,
    "name":'Cat Total',
    "icon":"archive",
    "color":'rgba(224, 12, 12, 0.9)'
  },
  {
    "number":1500,
    "name":'Value Total',
    "icon":"money",
    "color":'rgba(99, 232, 28, 0.87)'

  },
  {
    "number":600,
    "name":'Asset Total',
    "icon":"cubes",
    "color":'rgb(37, 212, 170)'

  },
  {
    "number":999,
    "name":'Cat Total',
    "icon":"archive",
    "color":'rgb(223, 46, 205)'

  },
  {
    "number":1500,
    "name":'Value Total',
    "icon":"money",
    "color":'rgb(17, 106, 69)'

  },
  {
    "number":600,
    "name":'Asset Total',
    "icon":"cubes",
    "color":'rgb(246, 231, 30)'
  },
]
export default class Dashboard extends Component {

  //Render background Parralax
  renderBackground() {
    return (
      <View key="background">
        <Image
          style={{ width:window.width , height:PARALLAX_HEADER_HEIGHT }}
          source={require('../../image/bc.jpg')}
         />
      </View>
    );
  }
  //Render Parralax renderForeground
  renderForeground() {
    return (
      <View key="parallax-header" style={ styles.parallaxHeader }>
        {/* Avartar */}
        <Image
          style={styles.avatar }
          source={require('../../image/ava.jpg')}
         />
         {/* Avartar */}
        <Text style={ styles.sectionSpeakerText }>
          BUI TUAN DUNG
        </Text>
        <Text style={ styles.sectionTitleText }>
          Inventory Officer
        </Text>
      </View>
    );
  }
  //Render Parralax renderStickyHeader
  renderStickyHeader() {
    return(
      <HeaderCommon navigation={this.props.navigation} topNav={topNav} ></HeaderCommon>
    );
  }
  //Render Parralax renderFixedHeader
  renderFixedHeader() {
    return (
      null
    );
  }

  //Render
  render() {

    return (
      <ParallaxScrollView style={{ flex: 1}}
        //Set Height For Stick
        stickyHeaderHeight={56}
        //Parralax Height
        parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
        //Speed Animation
        backgroundSpeed={10}
        //Render BackGround User
        renderBackground={() => this.renderBackground()}
        //Render InFor User
        renderForeground={() => this.renderForeground() }
        //Render Header
        renderStickyHeader={() => this.renderStickyHeader()}
        //Render Fixed Header
        renderFixedHeader={() => this.renderFixedHeader()}>

        <View style={styles.coverPa}>
          <Text style={styles.titleDash}> <Icon style={{fontSize: 35,color:'#2196f3'}} name="cube"></Icon> {'INFORMATION ASSET'}</Text>
          { /* COLOR BOX */ }
          <View style={ styles.coverThree }>
            {
              //Loop Box Here
              Data ?
              Data.map( (item , index) => {
                return(
                  <Box infor = {item}  key={index} ></Box>
                )
              })
              :
              null
            }
          </View>
          { /* COLOR BOX */ }

          { /* PIE CHART */ }
          <Text style={styles.titleDash}> <Icon style={{fontSize: 35,color:'#2196f3'}} name="cube"></Icon> {'INFORMATION CATEGORY ASSET'}</Text>

          <PieChartScreen style={{ height: 340  }} />
          { /* PIE CHART */ }
        </View>

      </ParallaxScrollView>
    );
  }
}
