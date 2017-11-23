import React, { Component } from 'react';
import { Image, View, TouchableOpacity} from 'react-native'
import {Container,Header,Title,Content,Text,Button,Left,CheckBox,Body,
        Right,List,ListItem, Card, CardItem, Thumbnail, Input} from "native-base";
import Icon from 'react-native-vector-icons/Feather';
import HeaderCommon from '../Common/HeaderCommon';
import styles from './styles.js';

export default class AssetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked:false
    }
  }
  render() {
    return (
      <Container>

        {/* header */}
        <HeaderCommon navigation={this.props.navigation} ></HeaderCommon>
        {/* header */}

        <View style={styles.ViewStatus}>
          <View>
            <Text style={styles.txtShowing}>Showing all asset Statuses (9 results)</Text>
          </View>
        </View>

        <Content>
          {/* Each card */}
          <Card style={styles.card}>
            <CardItem style={styles.CardItems}>
              <Left style={styles.LeftCard}>
                <Image source={require('../../icon/cam.png')} style={styles.imgCam}/>
              </Left>
              <Body>
                <Text style={styles.txtname0}>Acoustic Guitar</Text>
                <Text style={styles.txtname1}>Box Guitar</Text>
                <Text style={styles.doublename1}>inBooks</Text>
                <Text style={styles.doublename2}>at Home</Text>
                <Text style={styles.txtDatetime}>Lst upd: 20 Th11 2017 22:23:39</Text>
              </Body>
              <Right style={{flex:0.45}}>
                <Text style={styles.txtRight1}>£199,00</Text>
                <Text style={styles.txtRight2}>Qtty: 1</Text>
                <CheckBox
                  style={styles.checkbox}
                  checked={this.state.checked}
                  onPress = {()=>this.setState({checked:!this.state.checked})}
                />
              </Right>
            </CardItem>
          </Card>
          {/* Each card */}
          {/* Each card */}
          <Card style={styles.card}>
            <CardItem style={styles.CardItems}>
              <Left style={styles.LeftCard}>
                <Image source={require('../../icon/cam.png')} style={styles.imgCam}/>
              </Left>
              <Body>
                <Text style={styles.txtname0}>Acoustic Guitar</Text>
                <Text style={styles.txtname1}>Box Guitar</Text>
                <Text style={styles.doublename1}>inBooks</Text>
                <Text style={styles.doublename2}>at Home</Text>
                <Text style={styles.txtDatetime}>Lst upd: 20 Th11 2017 22:23:39</Text>
              </Body>
              <Right style={{flex:0.45}}>
                <Text style={styles.txtRight1}>£199,00</Text>
                <Text style={styles.txtRight2}>Qtty: 1</Text>
                <CheckBox
                  style={styles.checkbox}
                  checked={this.state.checked}
                  onPress = {()=>this.setState({checked:!this.state.checked})}
                />
              </Right>
            </CardItem>
          </Card>
          {/* Each card */}
          {/* Each card */}
          <Card style={styles.card}>
            <CardItem style={styles.CardItems}>
              <Left style={styles.LeftCard}>
                <Image source={require('../../icon/cam.png')} style={styles.imgCam}/>
              </Left>
              <Body>
                <Text style={styles.txtname0}>Acoustic Guitar</Text>
                <Text style={styles.txtname1}>Box Guitar</Text>
                <Text style={styles.doublename1}>inBooks</Text>
                <Text style={styles.doublename2}>at Home</Text>
                <Text style={styles.txtDatetime}>Lst upd: 20 Th11 2017 22:23:39</Text>
              </Body>
              <Right style={{flex:0.45}}>
                <Text style={styles.txtRight1}>£199,00</Text>
                <Text style={styles.txtRight2}>Qtty: 1</Text>
                <CheckBox
                  style={styles.checkbox}
                  checked={this.state.checked}
                  onPress = {()=>this.setState({checked:!this.state.checked})}
                />
              </Right>
            </CardItem>
          </Card>
          {/* Each card */}
          {/* Each card */}
          <Card style={styles.card}>
            <CardItem style={styles.CardItems}>
              <Left style={styles.LeftCard}>
                <Image source={require('../../icon/cam.png')} style={styles.imgCam}/>
              </Left>
              <Body>
                <Text style={styles.txtname0}>Acoustic Guitar</Text>
                <Text style={styles.txtname1}>Box Guitar</Text>
                <Text style={styles.doublename1}>inBooks</Text>
                <Text style={styles.doublename2}>at Home</Text>
                <Text style={styles.txtDatetime}>Lst upd: 20 Th11 2017 22:23:39</Text>
              </Body>
              <Right style={{flex:0.45}}>
                <Text style={styles.txtRight1}>£199,00</Text>
                <Text style={styles.txtRight2}>Qtty: 1</Text>
                <CheckBox
                  style={styles.checkbox}
                  checked={this.state.checked}
                  onPress = {()=>this.setState({checked:!this.state.checked})}
                />
              </Right>
            </CardItem>
          </Card>
          {/* Each card */}
          {/* Each card */}
          <Card style={styles.card}>
            <CardItem style={styles.CardItems}>
              <Left style={styles.LeftCard}>
                <Image source={require('../../icon/cam.png')} style={styles.imgCam}/>
              </Left>
              <Body>
                <Text style={styles.txtname0}>Acoustic Guitar</Text>
                <Text style={styles.txtname1}>Box Guitar</Text>
                <Text style={styles.doublename1}>inBooks</Text>
                <Text style={styles.doublename2}>at Home</Text>
                <Text style={styles.txtDatetime}>Lst upd: 20 Th11 2017 22:23:39</Text>
              </Body>
              <Right style={{flex:0.45}}>
                <Text style={styles.txtRight1}>£199,00</Text>
                <Text style={styles.txtRight2}>Qtty: 1</Text>
                <CheckBox
                  style={styles.checkbox}
                  checked={this.state.checked}
                  onPress = {()=>this.setState({checked:!this.state.checked})}
                />
              </Right>
            </CardItem>
          </Card>
          {/* Each card */}
        </Content>

        </Container>
      );
    }
}
