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
		fontSize:20,
		paddingTop:10
	},
	txtHeader:{
		color:'white',
		fontSize:25,
		fontWeight:'bold'
	},
	LeftHeader:{
		flex:1,
		flexDirection:'row',
		alignItems:'center'
	},
	Cardinput:{
		height:70,
		flexDirection: 'row',
	},
	ViewImage:{
		flexDirection:'row',
		alignItems:'center'
	},
	inputtext:{
		fontSize:20
	},
	txtChoseimage:{
		fontSize:20,
		color:'grey',
	},
	btnAddImage:{
		width:180,
		height:50	,
		backgroundColor:'#2196F3',
		justifyContent:'center',
		borderRadius:5
	},
	txtAddImage:{
		fontSize:20,
		color:'white',
		textAlign:'center'
	},
	ItemBarcode:{
		marginTop:8,
		marginLeft:-10,
		marginRight: 25
	},
	imgbarcode:{
		width:40,
		height:30
	},
	imagePicker:{
		width:30,
		height:60,
		marginTop:10
	}
});
export default styles;
