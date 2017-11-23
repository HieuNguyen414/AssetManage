import React, { Component } from 'react';
import { Input, Item, Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, CardItem, Card } from "native-base";
import { Dimensions, Image, View, TouchableOpacity } from 'react-native';

import Calendar from "./Calendar";
import ImageAsset from "./ImageAsset";
import TextInputTop from "./TextInputTop";
import TextInputBottom from "./TextInputBottom";
import styles from "./styles";


class NewAsset extends Component {
	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header style={styles.header}>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{flex:2}}>
						<Title>{param ? param.name.item : "New Asset"}</Title>
					</Body>

					<Right>
						<Button transparent >
							<Image source={require('../../icon/vicon.png')} style={{width:23, height:23}}/>
						</Button>
						<Button transparent>
							<Image source={require('../../icon/xicon.png')} style={{width:25, height:23}}/>
						</Button>
						<Button transparent>
							<Image source={require('../../icon/3cham.png')} style={{width:20, height:20}}/>
						</Button>
					</Right>
				</Header>

				<Content padder>
					<ImageAsset />
					<TextInputTop />
					<Calendar />

          <Text style={styles.txtAsset}>Barcode 1</Text>
          <Card>
            <CardItem style={styles.Cardinput}>
              <Item style={styles.ItemBarcode} >
                <Input />
              </Item>
							<Button transparent style={styles.btnbarcode} onPress={() => this.props.navigation.navigate('QRCode')}>
								<Image source={require('../../icon/barcode.png')} style={styles.imgbarcode}/>
							</Button>
            </CardItem>
          </Card>

					<Text style={styles.txtAsset}>Barcode 2</Text>
          <Card>
            <CardItem style={styles.Cardinput}>
              <Item style={styles.ItemBarcode} >
                <Input />
              </Item>
							<Button transparent style={styles.btnbarcode} onPress={() => this.props.navigation.navigate('QRCode')}>
								<Image source={require('../../icon/barcode.png')} style={styles.imgbarcode}/>
							</Button>
            </CardItem>
          </Card>

					<Text style={styles.txtAsset}>ISBN</Text>
          <Card>
            <CardItem style={styles.Cardinput}>
              <Item style={styles.ItemBarcode} >
                <Input />
              </Item>
							<Button transparent style={styles.btnbarcode} onPress={() => this.props.navigation.navigate('QRCode')}>
								<Image source={require('../../icon/barcode.png')} style={styles.imgbarcode}/>
							</Button>
            </CardItem>
          </Card>

					<TextInputBottom />

				</Content>
			</Container>
		);
	}
}

export default NewAsset;
