import React, { Component } from 'react';
import { Image, View, TouchableOpacity} from 'react-native'
import {Container,Header,Title,Content,Text,Button,Left,CheckBox,Body,
        Right, Card, CardItem, Input} from "native-base";
import Icon from 'react-native-vector-icons/Feather';
import HeaderCommon from '../Common/HeaderCommon';

import styles from './styles.js';
import topNav from './topNav';

export default class LocationManager extends Component {
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
        <HeaderCommon topNav={topNav} navigation={this.props.navigation} ></HeaderCommon>
        {/* header */}

        {/* Main Container */}
        <View style={styles.ViewStatus}>
          <View>
            <Text style={styles.txtShowing}>Showing all asset Statuses (9 results)</Text>
          </View>

          <Content>
            <Card>
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
                <Text style={styles.txtcardItems2}>Family</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
              </Right>
            </CardItem>
            <CardItem style={styles.CardItemTow}>
              <Body style={styles.CardLeft}>
                <Text style={styles.txtCard1}>,London</Text>
                <Text style={styles.txtCard1}>SE1, UK...</Text>
                <Text style={styles.txtCard2}>0 sub Locations</Text>
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
                <Text style={styles.txtcardItems2}>Home</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
              </Right>
            </CardItem>
            <CardItem style={styles.CardItemTow}>
              <Body style={styles.CardLeft}>
                <Text style={styles.txtCard1}>,London</Text>
                <Text style={styles.txtCard1}>SE1, UK...</Text>
                <Text style={styles.txtCard2}>0 sub Locations</Text>
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
                <Text style={styles.txtcardItems2}>Office</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
              </Right>
            </CardItem>
            <CardItem style={styles.CardItemTow}>
              <Body style={styles.CardLeft}>
                <Text style={styles.txtCard1}>OfficeWorld, London</Text>
                <Text style={styles.txtCard1}>SE1, UK...</Text>
                <Text style={styles.txtCard2}>0 sub Locations</Text>
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
                <Text style={styles.txtcardItems2}>Storage</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
              </Right>
            </CardItem>
            <CardItem style={styles.CardItemTow}>
              <Body style={styles.CardLeft}>
                <Text style={styles.txtCard1}>Beson Street, London</Text>
                <Text style={styles.txtCard1}>SE1, UK...</Text>
                <Text style={styles.txtCard2}>0 sub Locations</Text>
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
