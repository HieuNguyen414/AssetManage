import { StyleSheet, Dimensions } from "react-native";
const width  = Dimensions.get('window').width;

const styles = {
  CardOne:{
    height:55,
  },
  CardItemOne:{
    height:70,
    backgroundColor:'#F4F3F4',
  },
  CardItemTow:{
    height:150,
    backgroundColor:'#fff'
  },
  txtCard1:{
    color: '#6E7172',
    fontSize:20,
  },
  txtCard2:{
    color: '#6E7172',
    fontSize:20,
    paddingTop:20
  },
  txtCard3:{
    color: '#6E7172',
    fontSize:20,
  },
  CardContainer:{
    width:width-30,
    marginLeft:15,
    marginTop:10,
    flex:1,
  },
  txtShowing:{
    fontSize:23,
    fontWeight:'bold',
    color:'#6E7172',
    textAlign:'center'
  },
  ViewStatus:{
    width:width,
    height:95,
    backgroundColor:'#E3E1E3'
  },
  BodyText:{
    flex:7,
    height:40,
    marginTop:-2
  },
  inputText:{
    height: 50,
    width:270,
    fontSize: 20
  },
  LeftSearch:{
    flex:0
  },
  iconSearch:{
    color:'#E3E1E3'
  },
  txtcardItems2:{
    textAlign:'center',
    fontSize:25,
    color:'#7B797B',
  },
  txtRight:{
    fontSize:20,
    color:'#828182',
  },
  checkbox:{
    marginRight:10,
    marginTop:80
  },
  CardLeft:{
    height:115,
  }
}

export default styles;
