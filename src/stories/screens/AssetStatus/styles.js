import { StyleSheet, Dimensions } from "react-native";
const width  = Dimensions.get('window').width;

const styles = {
  text1_view_content:{
    textAlign:'center',
    fontWeight:'bold',
    padding:5
  },
  CardOne:{
    height:55,
  },
  CardTwo:{
    height:100,
  },
  card2:{
    width:width-30,
    marginLeft:15,
    marginTop:10
  },
  header:{
    backgroundColor: '#2196F3',
  },
  iconHeader:{
    marginLeft:25,
    width: 20,
    height: 20
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
    marginTop:-5
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
    fontWeight:'bold',
    fontSize:25,
  },
  txtRight:{
    fontSize:20,
    color:'#828182'
  },
  checkbox:{
    marginRight:10,
    marginTop:5
  }
}

export default styles;
