import React, { Component } from 'react';
import { Input, Item, Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, CardItem, Card } from "native-base";
import { Image, View, TouchableOpacity } from 'react-native';
import styles from "./styles";


class NewLocation extends Component {
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
						<Title>{param ? param.name.item : "New Location"}</Title>
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
					<Text style={styles.txtAsset}>Name</Text>
					<Card>
						<CardItem style={styles.Cardinput}>
						<Input
							style={styles.txtinput}
							 underlineColorAndroid= 'rgba(0,0,0,0)'
						/>
						</CardItem>
					</Card>

					<Text style={styles.txtAsset}>Description</Text>
					<Card>
						<CardItem style={styles.Cardinput}>
								<Input
									underlineColorAndroid= 'rgba(0,0,0,0)'
									style={styles.txtinput}
								/>
						</CardItem>
					</Card>

					<Text style={styles.txtAsset}>Parent Location</Text>
					<TouchableOpacity>
						<Card>
							<CardItem style={styles.Cardinput} />
						</Card>
					</TouchableOpacity>

					<Text style={styles.txtAsset}>Address line 1</Text>
					<Card>
						<CardItem style={styles.Cardinput}>
								<Input
									underlineColorAndroid= 'rgba(0,0,0,0)'
  								style={styles.txtinput}
								/>
						</CardItem>
					</Card>

					<Text style={styles.txtAsset}>Address line 2</Text>
					<Card>
						<CardItem style={styles.Cardinput}>
								<Input
									underlineColorAndroid= 'rgba(0,0,0,0)'
									style={styles.txtinput}
								/>
						</CardItem>
					</Card>

					<Text style={styles.txtAsset}>Address line 3</Text>
					<Card>
						<CardItem style={styles.Cardinput}>
								<Input
									underlineColorAndroid= 'rgba(0,0,0,0)'
									style={styles.txtinput}
								/>
						</CardItem>
					</Card>



					<Text style={styles.txtAsset}>Address line 4</Text>
					<Card>
						<CardItem style={styles.Cardinput}>
								<Input
									underlineColorAndroid= 'rgba(0,0,0,0)'
									style={styles.txtinput}
								/>
						</CardItem>
					</Card>

					<Text style={styles.txtAsset}>Zip code/Postcode</Text>
					<Card>
						<CardItem style={styles.Cardinput}>
								<Input
									underlineColorAndroid= 'rgba(0,0,0,0)'
									style={styles.txtinput}
								/>
						</CardItem>
					</Card>

					<Text style={styles.txtAsset}>Country</Text>
					<Card>
						<CardItem style={styles.Cardinput}>

								<Input
									underlineColorAndroid= 'rgba(0,0,0,0)'
									style={styles.txtinput}
								/>

						</CardItem>
					</Card>

					<Text style={styles.txtAsset}>Longitude</Text>
					<Card>
						<CardItem style={styles.Cardinput}>

								<Input
									underlineColorAndroid= 'rgba(0,0,0,0)'
									style={styles.txtinput}
								/>

						</CardItem>
					</Card>

					<Text style={styles.txtAsset}>Latitude</Text>
					<Card>
						<CardItem style={styles.Cardinput}>

								<Input
									underlineColorAndroid= 'rgba(0,0,0,0)'
									style={styles.txtinput}
								/>

						</CardItem>
					</Card>

				</Content>
			</Container>
		);
	}
}

export default NewLocation;
