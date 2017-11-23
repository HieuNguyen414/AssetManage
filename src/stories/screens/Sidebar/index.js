import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationActions } from "react-navigation";
import _ from 'lodash';
import styles from './styles';

//Data Route Add item Here
import Route from './Route';
//Component For Each Route Display
import Item from './item';
//Reset Logout Follow ReactNativeSeed
const resetAction = NavigationActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: "Login" })],
});

export default class Sidebar extends Component {

	constructor(props) {
	  super(props);
		//Config Router Data
		this.state = {
			routes:Route
		}
	}

	//active Link And Navigation
	activeLink = (routerActive) => {
		console.log(routerActive);
		const routes = this.state.routes;
		var newActive = _.findIndex(routes, function(routeAct) { return routeAct.route == routerActive; });
		var oldActive = _.findIndex(routes, function(routeAct) { return routeAct.active == true; });
		routes[oldActive].active = false;
		routes[newActive].active = true;
		this.setState({
			routes
		},function () {
			this.props.navigation.navigate(routerActive)
		})
	}

	//LogOut User
	LogOut(route) {
		this.props.navigation.dispatch(resetAction)
	}
	render() {
		return (
			<View style={styles.container} >
				<View style={styles.UserManager}>
					<Image source={require('../../image/logo.png')} style={styles.imageUser}/>
					<Text style={styles.txtManagerUser}>Asset Manager </Text>
				</View>

					{
						this.state.routes.map( ( data , index ) =>  <Item key={index} ActiveLink={this.activeLink} data={data} />  )
					}
					<TouchableOpacity
						style={ styles.BtnName }
						onPress={ () => this.LogOut('Login') }>
		        <Image source={require('../../icon/logout.png')}/>
						<Text style={styles.txtName}> Logout </Text>
		      </TouchableOpacity>
			</View>
		);
	}
}
