import React, { Component } from 'react';
import {  Header, Title,  Text, Button, Icon, Left, Right, Body } from "native-base";
import {  View, TouchableOpacity , Image} from 'react-native';
import styles from "./styles";
import MenuModal from "./MenuModal";

class HeaderCommon extends Component {

	render() {
		return (
      <Header style={styles.header}>
				<Left style={styles.Left}  >
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

        <Right style={styles.Right}>

					{/* Active SearchBar Here */}
          <Button transparent>
            <Icon style={{fontSize:35}} name={'search'}></Icon>
          </Button>
					{/* Active SearchBar Here */}

					{/* Modal Navigation */}
					{
						this.props.topNav ? <MenuModal topNav={this.props.topNav} navigation={this.props.navigation} /> : null
					}
					{/* Modal Navigation */}
        </Right>
      </Header>
		);
	}
}

export default HeaderCommon;
