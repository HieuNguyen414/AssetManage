import React, { Component } from 'react';
import { Image, View, TouchableOpacity} from 'react-native'
import {Container,Header,Title,Content,Text,Button,Left,CheckBox,Body,
        Right,List,ListItem, Card, CardItem, Thumbnail, Input} from "native-base";
import Icon from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal'
import HeaderCommon from '../Common/HeaderCommon';
import styles from './styles.js';
import topNav from './topNav';

export default class AssetList extends Component {
  //checkbox
  constructor(props) {
    super(props);
    this.state = {
      checked:false,
      isModalVisible: false
    }
  }

  //Show Hide Modal
  _showModal(){this.setState({ isModalVisible: true })}
  _hideModal(){this.setState({ isModalVisible: false })}

  render() {
    return (
      <Container>

        {/* header */}
        <HeaderCommon topNav={topNav} navigation={this.props.navigation} ></HeaderCommon>
        {/* header */}

        <View style={styles.ViewStatus}>
          <View>
            <Text style={styles.txtShowing}>Showing all asset Statuses (9 results)</Text>
          </View>
        </View>

        {/* Modal */}
        <Modal isVisible={this.state.isModalVisible}>
          <TouchableOpacity
            style ={{  flex:1 }}
            onPress={ () => this._hideModal() }>
          </TouchableOpacity>
          <View style={styles.coverModal}>
            {/* Title Modal*/}
            <Text style={styles.titleModal} >Action Asset</Text>
            {/* Title Modal*/}

            {/* Menu List */}
            <View style={styles.MenuList}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('NewAsset')}>
                <Text style={styles.menuText}>New Asset</Text>
              </TouchableOpacity>
              <TouchableOpacity >
                <Text style={styles.menuText}>Edit Asset</Text>
              </TouchableOpacity>
              <TouchableOpacity >
                <Text style={styles.menuText}>Delete Asset</Text>
              </TouchableOpacity>
              <TouchableOpacity >
                <Text style={styles.menuText}>View Asset</Text>
              </TouchableOpacity>
            </View>
            {/* Menu List */}
          </View>
        </Modal>
        {/* Modal */}

        <Content>
          {/* Each card */}
          <Card style={styles.card}>
            <TouchableOpacity onPress={  () => this._showModal()}>
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
            </TouchableOpacity>
          </Card>
          {/* Each card */}

          {/* Each card */}
          <Card style={styles.card}>
            <TouchableOpacity onPress={() => this._showModal()}>
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
            </TouchableOpacity>
          </Card>
          {/* Each card */}

          {/* Each card */}
          <Card style={styles.card}>
            <TouchableOpacity onPress={() => this._showModal()}>
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
            </TouchableOpacity>
          </Card>
          {/* Each card */}

          {/* Each card */}
          <Card style={styles.card}>
            <TouchableOpacity onPress={() => this._showModal()}>
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
            </TouchableOpacity>
          </Card>
          {/* Each card */}

          {/* Each card */}
          <Card style={styles.card}>
            <TouchableOpacity onPress={() => this._showModal()}>
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
            </TouchableOpacity>
          </Card>
          {/* Each card */}

          {/* Each card */}
          <Card style={styles.card}>
            <TouchableOpacity onPress={() => this._showModal()}>
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
            </TouchableOpacity>
          </Card>
          {/* Each card */}

        </Content>

        </Container>
      );
    }
}
