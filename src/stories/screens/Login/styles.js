import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles: any = StyleSheet.create({
	container: {
    flex: 1,
  },
	BackgroundImage:{
		width: width,
		height: height
	},
	ContainerLogo:{
		flex: 1/2,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center'
	},
	ContainerTxtAsset:{
		flex: 1/13,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	ContainerTxtTeam:{
		flex: 1/13,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	Logo:{
		width: 250,
		height: 250
	},
	txtNameAsset:{
		fontSize: 50,
		color: '#fff',
		fontWeight: 'bold',
	},
	txtNameTeam:{
		fontSize: 35,
		color: '#fff',
	},
	ContainerButton:{
		flex:0.346,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
	},
	txtButton:{
		fontSize: 27,
		color: '#fff',
		alignItems: 'center'
	},
	GoogleButton:{
		width: 320,
		height: 80,
		backgroundColor: '#DD4935',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	}
});
export default styles;
