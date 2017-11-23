import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

const styles: any = StyleSheet.create({
	//Header
	header:{
		backgroundColor:'#2196F3'
	},
	Left:{
		flexDirection: 'row' ,
		flex:1,
		alignItems:'center'
	},
	Right:{
		flexDirection: 'row' ,
		flex:1,
		alignItems:'center'
	},
	//Modal
	coverModal: {
		width: 400,
		backgroundColor: '#fff',
		position: 'absolute',
		top: 200,
		left: '50%',
		marginLeft: -200,
		padding: 20,
		paddingBottom: 0
	},
	//title modal
	titleModal:{
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 10,
		color:'black'
	},
	//Menu List Modal
	menuText:{
		fontSize: 20,
		color:'#242324',
		marginBottom: 20,
	}
});
export default styles;
