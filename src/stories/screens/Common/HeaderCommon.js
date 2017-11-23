import React, { Component } from 'react';
import {  Header, Title,  Text, Button, Icon, Left, Right, Body } from "native-base";
import {  View, TouchableOpacity , Image} from 'react-native';
import styles from "./styles";


class HeaderCommon extends Component {
	render() {
		return (
      <Header style={styles.header}>
				<Left style={{ flexDirection: 'row' , flex:1,alignItems:'center'}}  >
					<Button transparent>
						<Icon
							active
							name="menu"
							onPress={() => this.props.navigation.navigate("DrawerOpen")}
							style={{fontSize:35}}
						/>
					</Button>
					<Title style={{fontSize:25}} >DashBoard </Title>
				</Left>

        <Right style={{ flexDirection: 'row' , flex:1,alignItems:'center'}}>
          <Button transparent>
            <Icon style={{fontSize:35}} name={'search'}></Icon>
          </Button>
          <Button transparent>
            <Image source={require('../../icon/three-dot.png')} style={{width:35, height:35}}/>
          </Button>
        </Right>
      </Header>
		);
	}
}

export default HeaderCommon;
