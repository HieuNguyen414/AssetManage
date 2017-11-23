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
          <Card style={styles.card2}>
            <CardItem style={styles.CardTwo}>
              <Left>
                <Text style={styles.txtcardItems2}>Being repaired</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
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
          <Card style={styles.card2}>
            <CardItem style={styles.CardTwo}>
              <Left>
                <Text style={styles.txtcardItems2}>Being repaired</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
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
          <Card style={styles.card2}>
            <CardItem style={styles.CardTwo}>
              <Left>
                <Text style={styles.txtcardItems2}>Being repaired</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
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
          <Card style={styles.card2}>
            <CardItem style={styles.CardTwo}>
              <Left>
                <Text style={styles.txtcardItems2}>Being repaired</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
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
          <Card style={styles.card2}>
            <CardItem style={styles.CardTwo}>
              <Left>
                <Text style={styles.txtcardItems2}>Being repaired</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
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
          <Card style={styles.card2}>
            <CardItem style={styles.CardTwo}>
              <Left>
                <Text style={styles.txtcardItems2}>Being repaired</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
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
          <Card style={styles.card2}>
            <CardItem style={styles.CardTwo}>
              <Left>
                <Text style={styles.txtcardItems2}>Being repaired</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
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
          <Card style={styles.card2}>
            <CardItem style={styles.CardTwo}>
              <Left>
                <Text style={styles.txtcardItems2}>Being repaired</Text>
              </Left>
              <Right>
                <Text style={styles.txtRight}>Total assets: 0</Text>
                <Text style={styles.txtRight}>Est val :£0,00</Text>
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
        {/* Main Card */}

      </Container>
      );
    }
}
