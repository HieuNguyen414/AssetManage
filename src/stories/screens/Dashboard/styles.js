import { StyleSheet , Dimensions } from "react-native";
const window = Dimensions.get('window');
const AVATAR_SIZE = 200;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;
const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#FBFAFA",
	},
	row: {
		flex: 1,
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		marginBottom: 15,
		alignItems: "center",
	},
	mt: {
		marginTop: 18,
	},
	background: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: window.width,
		height: PARALLAX_HEADER_HEIGHT
	},
	stickySection: {
		height: STICKY_HEADER_HEIGHT,
		width: 300,
		justifyContent: 'flex-end'
	},
	stickySectionText: {
		color: 'white',
		fontSize: 20,
		margin: 10
	},
	fixedSection: {
		position: 'absolute',
		bottom: 10,
		right: 10
	},
	fixedSectionText: {
		color: '#999',
		fontSize: 20
	},
	parallaxHeader: {
		alignItems: 'center',
		flex: 1,
		flexDirection: 'column',
		paddingTop: 30
	},
	avatar: {
		marginBottom: 10,
		borderRadius: AVATAR_SIZE / 2,
		width: AVATAR_SIZE,
		height: AVATAR_SIZE
	},
	sectionSpeakerText: {
		color: 'white',
		fontSize: 35,
	},
	sectionTitleText: {
		color: 'white',
		fontSize: 25,
		paddingVertical: 5
	},
	row: {
		overflow: 'hidden',
		paddingHorizontal: 10,
		height: ROW_HEIGHT,
		backgroundColor: 'white',
		borderColor: '#ccc',
		borderBottomWidth: 1,
		justifyContent: 'center'
	},
	rowText: {
		fontSize: 20
	},
	coverThree: {
		paddingTop: 20,
		paddingHorizontal: 20,
		flexDirection: 'row' ,
		flexWrap: 'wrap',
		justifyContent:'space-between'
	},
	boxIn: {
		width: 235,
		height: 140,
		marginBottom: 10
	},
	textTitle: {
		paddingTop: 5,
		paddingLeft: 5,
		color: '#fff',
		fontSize: 20,
		marginBottom: 5

	},
	coverInfor: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	NumberBox:{
		color: "#fff"
	},
	Icons: {
		color: "#fff",
		opacity: 0.6,
	},
	titleDash: {
		fontSize: 35,
		paddingLeft: 20,
		color: '#2196f3',
	},
	coverPa: {
		paddingTop: 50
	}
});
export default styles;
