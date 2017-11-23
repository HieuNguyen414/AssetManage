// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";

import Sidebar from "./container/SidebarContainer";

//Drawer
import Login from "./container/LoginContainer";
import Dashboard from "./container/DashboardContainer";
import AssetList from "./container/AssetListContainer";
import AssetStatus from "./container/AssetStatusContainer";
import CategoryAssetList from "./container/AssetCatContainer";
import QRCode from "./container/QRCodeContainer";

//Stack New
import NewAsset from "./container/NewAssetContainer";
import LocationManager from "./container/LocationManagerContainer";


import { Dimensions } from "react-native";
const WidthDrawer = Dimensions.get('window').width * (2/3);
//Drawer Navigation
const Drawer = DrawerNavigator(
	{
		Dashboard: {
			screen: Dashboard
		},
		AssetList:{
			screen:AssetList
		},
		AssetStatus:{
			screen:AssetStatus
		},
		CategoryAssetList:{
			screen:CategoryAssetList
		},
		QRCode:{
			screen:QRCode
		},
		LocationManager:{
			screen:LocationManager
		}
	},
	{
		drawerWidth :WidthDrawer,
		initialRouteName: "Dashboard",
		contentComponent: props => <Sidebar {...props} />,
	}
);

//Stack Navigation
const App = StackNavigator(
	{
		Login: { screen: Login },
		Drawer: { screen: Drawer },
		NewAsset: { screen: NewAsset },
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
