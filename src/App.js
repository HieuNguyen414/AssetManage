// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Dashboard from "./container/DashboardContainer";
import Sidebar from "./container/SidebarContainer";
import AssetList from "./container/AssetListContainer";
import AssetStatus from "./container/AssetStatusContainer";
import NewAsset from "./container/NewAssetContainer";
import QRCode from "./container/QRCodeContainer";
import NewLocation from "./container/NewLocationContainer";
import CategoryAssetList from "./container/AssetCatContainer";

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
		NewAsset:{
			screen:NewAsset
		},
		NewLocation:{
			screen:NewLocation
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
		Drawer: { screen: Drawer }
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
