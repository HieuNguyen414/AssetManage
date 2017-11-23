import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#FBFAFA",
		flex:1
	},
	header:{
		backgroundColor:'#2196F3'
	},
	txtAsset:{
		color:'grey',
		fontSize:15,
		paddingTop:10
	},
	Iteminput:{
		marginTop:8,
		marginLeft:-10
	},
	Cardinput:{
		height:50,
		flexDirection: 'row',
	},
	ViewImage:{
		flexDirection:'row',
		alignItems:'center'
	},
	txtChoseimage:{
		fontSize:15,
		color:'grey',
	},
	btnAddImage:{
		width:115,
		height:30	,
		backgroundColor:'#2196F3',
		justifyContent:'center',
		borderRadius:5
	},
	txtAddImage:{
		fontSize:14,
		color:'white',
		textAlign:'center'
	},
	btnbarcode:{
		marginLeft:-20,
		paddingBottom:23
	},
	ItemBarcode:{
		marginTop:8,
		marginLeft:-10,
		marginRight: 25
	},
	imgbarcode:{
		width:28,
		height:20
	},
	imagePicker:{
		width:30,
		height:60,
		marginTop:10
	}
});
export default styles;
