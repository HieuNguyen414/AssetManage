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
		return (
			<Container style={styles.container}>
				<Header style={styles.header}>
					<Left style={styles.LeftHeader}>
						<Button transparent onPress={() => this.props.navigation.goBack()} style={{width:40, height:40}}>
							<Icon name="ios-arrow-back" />
						</Button>
						<Text style={styles.txtHeader}>New Asset</Text>
					</Left>


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
							<Input
								underlineColorAndroid= 'rgba(0,0,0,0)'
								style = {styles.inputtext}
							/>
							<Button transparent onPress={() => this.props.navigation.navigate('QRCode')}>
								<Image source={require('../../icon/barcode.png')} style={styles.imgbarcode}/>
							</Button>
            </CardItem>
          </Card>

					<Text style={styles.txtAsset}>Barcode 2</Text>
          <Card>
            <CardItem style={styles.Cardinput}>
							<Input
								underlineColorAndroid= 'rgba(0,0,0,0)'
								style = {styles.inputtext}
							/>
							<Button transparent onPress={() => this.props.navigation.navigate('QRCode')}>
								<Image source={require('../../icon/barcode.png')} style={styles.imgbarcode}/>
							</Button>
            </CardItem>
          </Card>

					<Text style={styles.txtAsset}>ISBN</Text>
          <Card>
            <CardItem style={styles.Cardinput}>
							<Input
								underlineColorAndroid= 'rgba(0,0,0,0)'
								style = {styles.inputtext}
							/>
							<Button transparent onPress={() => this.props.navigation.navigate('QRCode')}>
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
