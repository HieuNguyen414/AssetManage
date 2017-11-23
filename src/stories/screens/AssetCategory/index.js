import React, { Component } from 'react';
import { Image, View, TouchableOpacity} from 'react-native'
import {Container,Header,Title,Content,Text,Button,Left,CheckBox,Body,
        Right, Card, CardItem, Input} from "native-base";
import Icon from 'react-native-vector-icons/Feather';
import HeaderCommon from '../Common/HeaderCommon';

import styles from './styles.js';


export default class AssetStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked:false
    }
  }

  //Modal
  state = {
    isModalVisible: false
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  render() {
    return (
      <Container>
        {/* header */}
        <HeaderCommon navigation={this.props.navigation} ></HeaderCommon>
        {/* header */}

        {/* Main Container */}
        <View style={styles.ViewStatus}>
          <View>
            <Text style={styles.txtShowing}>Showing all asset Statuses (9 results)</Text>
          </View>

          {/* Modal */}
          <Modal isVisible={this.state.isModalVisible}>
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

          <Content>
            <Card>
              <TouchableOpacity onPress={this._showModal}>
                <CardItem style={styles.CardOne}>
                  <Left style={styles.LeftSearch}>
                    <Icon name="search" size={25} style={styles.iconSearch}/>
                  </Left>
                  <Body style={styles.BodyText}>
                    <Input style={styles.inputText}
                      placeholder="Search..."
                      placeholderTextColor="#A4A3A4"/>
                  </Body>
                  <Right>
                    <Button transparent >
                      <Icon name="delete" size={25} />
                    </Button>
                  </Right>
                </CardItem>
              </TouchableOpacity>
            </Card>
          </Content>
        </View>
        {/* Main Container */}

        {/* Main Card */}
        <Content>

          {/* Each Card */}
          <Card style={styles.CardContainer}>
            <CardItem style={styles.CardItemOne}>
              <Left>
                <Text style={styles.txtcardItems2}>Antiques</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
              </Right>
            </CardItem>
            <CardItem style={styles.CardItemTow}>
              <Body style={styles.CardLeft}>
                <Text style={styles.txtCard1}>Antiques</Text>
                <Text style={styles.txtCard2}>0 sub categories</Text>
                <Text style={styles.txtCard3}>Last upd: 20Th11 2017 22:23:39</Text>
              </Body>
              <Right>
                <CheckBox
                  style={styles.checkbox}
                  checked={this.state.checked}
                  onPress = {()=>this.setState({checked:!this.state.checked})}
                />
              </Right>
            </CardItem>
          </Card>
          {/* Each Card */}

          {/* Each Card */}
          <Card style={styles.CardContainer}>
            <CardItem style={styles.CardItemOne}>
              <Left>
                <Text style={styles.txtcardItems2}>Antiques</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
              </Right>
            </CardItem>
            <CardItem style={styles.CardItemTow}>
              <Body style={styles.CardLeft}>
                <Text style={styles.txtCard1}>Antiques</Text>
                <Text style={styles.txtCard2}>0 sub categories</Text>
                <Text style={styles.txtCard3}>Last upd: 20Th11 2017 22:23:39</Text>
              </Body>
              <Right>
                <CheckBox
                  style={styles.checkbox}
                  checked={this.state.checked}
                  onPress = {()=>this.setState({checked:!this.state.checked})}
                />
              </Right>
            </CardItem>
          </Card>
          {/* Each Card */}

          {/* Each Card */}
          <Card style={styles.CardContainer}>
            <CardItem style={styles.CardItemOne}>
              <Left>
                <Text style={styles.txtcardItems2}>Antiques</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
              </Right>
            </CardItem>
            <CardItem style={styles.CardItemTow}>
              <Body style={styles.CardLeft}>
                <Text style={styles.txtCard1}>Antiques</Text>
                <Text style={styles.txtCard2}>0 sub categories</Text>
                <Text style={styles.txtCard3}>Last upd: 20Th11 2017 22:23:39</Text>
              </Body>
              <Right>
                <CheckBox
                  style={styles.checkbox}
                  checked={this.state.checked}
                  onPress = {()=>this.setState({checked:!this.state.checked})}
                />
              </Right>
            </CardItem>
          </Card>
          {/* Each Card */}

          {/* Each Card */}
          <Card style={styles.CardContainer}>
            <CardItem style={styles.CardItemOne}>
              <Left>
                <Text style={styles.txtcardItems2}>Antiques</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
              </Right>
            </CardItem>
            <CardItem style={styles.CardItemTow}>
              <Body style={styles.CardLeft}>
                <Text style={styles.txtCard1}>Antiques</Text>
                <Text style={styles.txtCard2}>0 sub categories</Text>
                <Text style={styles.txtCard3}>Last upd: 20Th11 2017 22:23:39</Text>
              </Body>
              <Right>
                <CheckBox
                  style={styles.checkbox}
                  checked={this.state.checked}
                  onPress = {()=>this.setState({checked:!this.state.checked})}
                />
              </Right>
            </CardItem>
          </Card>
          {/* Each Card */}

          {/* Each Card */}
          <Card style={styles.CardContainer}>
            <CardItem style={styles.CardItemOne}>
              <Left>
                <Text style={styles.txtcardItems2}>Antiques</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
              </Right>
            </CardItem>
            <CardItem style={styles.CardItemTow}>
              <Body style={styles.CardLeft}>
                <Text style={styles.txtCard1}>Antiques</Text>
                <Text style={styles.txtCard2}>0 sub categories</Text>
                <Text style={styles.txtCard3}>Last upd: 20Th11 2017 22:23:39</Text>
              </Body>
              <Right>
                <CheckBox
                  style={styles.checkbox}
                  checked={this.state.checked}
                  onPress = {()=>this.setState({checked:!this.state.checked})}
                />
              </Right>
            </CardItem>
          </Card>
          {/* Each Card */}

          {/* Each Card */}
          <Card style={styles.CardContainer}>
            <CardItem style={styles.CardItemOne}>
              <Left>
                <Text style={styles.txtcardItems2}>Antiques</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
              </Right>
            </CardItem>
            <CardItem style={styles.CardItemTow}>
              <Body style={styles.CardLeft}>
                <Text style={styles.txtCard1}>Antiques</Text>
                <Text style={styles.txtCard2}>0 sub categories</Text>
                <Text style={styles.txtCard3}>Last upd: 20Th11 2017 22:23:39</Text>
              </Body>
              <Right>
                <CheckBox
                  style={styles.checkbox}
                  checked={this.state.checked}
                  onPress = {()=>this.setState({checked:!this.state.checked})}
                />
              </Right>
            </CardItem>
          </Card>
          {/* Each Card */}

          {/* Each Card */}
          <Card style={styles.CardContainer}>
            <CardItem style={styles.CardItemOne}>
              <Left>
                <Text style={styles.txtcardItems2}>Antiques</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
              </Right>
            </CardItem>
            <CardItem style={styles.CardItemTow}>
              <Body style={styles.CardLeft}>
                <Text style={styles.txtCard1}>Antiques</Text>
                <Text style={styles.txtCard2}>0 sub categories</Text>
                <Text style={styles.txtCard3}>Last upd: 20Th11 2017 22:23:39</Text>
              </Body>
              <Right>
                <CheckBox
                  style={styles.checkbox}
                  checked={this.state.checked}
                  onPress = {()=>this.setState({checked:!this.state.checked})}
                />
              </Right>
            </CardItem>
          </Card>
          {/* Each Card */}

          {/* Each Card */}
          <Card style={styles.CardContainer}>
            <CardItem style={styles.CardItemOne}>
              <Left>
                <Text style={styles.txtcardItems2}>Antiques</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
              </Right>
            </CardItem>
            <CardItem style={styles.CardItemTow}>
              <Body style={styles.CardLeft}>
                <Text style={styles.txtCard1}>Antiques</Text>
                <Text style={styles.txtCard2}>0 sub categories</Text>
                <Text style={styles.txtCard3}>Last upd: 20Th11 2017 22:23:39</Text>
              </Body>
              <Right>
                <CheckBox
                  style={styles.checkbox}
                  checked={this.state.checked}
                  onPress = {()=>this.setState({checked:!this.state.checked})}
                />
              </Right>
            </CardItem>
          </Card>
          {/* Each Card */}
        </Content>
      </Container>
      );
    }
}
